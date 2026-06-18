require("dotenv").config();

const express = require("express");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const axios = require("axios");
const validator = require("validator");
const helmet = require("helmet");
const Brevo = require("@getbrevo/brevo");

const app = express();
app.set("trust proxy", 1);

// Helmet with proper config
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        styleSrc: ["'self'", "'unsafe-inline'"],
        scriptSrc: ["'self'", "'unsafe-inline'"],
      },
    },
  })  
);

// CORS
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://galileonext.com",
      "https://www.galileonext.com",
    ],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Global rate limiter
const globalLimiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 100,
  message: "Too many requests from this IP",
});
app.use(globalLimiter);

// Contact form specific limiter
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: {
    success: false,
    message: "Too many requests. Please try again later.",
  },
});

// Brevo setup
const apiInstance = new Brevo.TransactionalEmailsApi();
apiInstance.setApiKey(
  Brevo.TransactionalEmailsApiApiKeys.API_KEY,
  process.env.BREVO_API_KEY
);

// Validation middleware
const validateContactRequest = (req, res, next) => {
  const { name, email, subject, message } = req.body;
  
  req.body.name = validator.escape(name?.trim() || '');
  req.body.subject = validator.escape(subject?.trim() || '');
  req.body.message = validator.escape(message?.trim() || '');
  req.body.email = validator.normalizeEmail(email?.trim() || '');
  
  next();
};

app.use("/send-mail", contactLimiter);
app.use("/send-mail", validateContactRequest);

// // Health check
// app.get("/health", (req, res) => {
//   res.status(200).json({ status: "OK", timestamp: new Date().toISOString() });
// });

// Main endpoint
app.post("/send-mail", async (req, res) => {
  try {
    const { name, email, subject, message, turnstileToken } = req.body;

    // Validation
    if (!name?.trim()) {
      return res.status(400).json({
        success: false,
        message: "Name is required",
      });
    }

    if (!validator.isEmail(email || "")) {
      return res.status(400).json({
        success: false,
        message: "Invalid email address",
      });
    }

    if (!subject?.trim()) {
      return res.status(400).json({
        success: false,
        message: "Subject is required",
      });
    }

    if (!message?.trim()) {
      return res.status(400).json({
        success: false,
        message: "Message is required",
      });
    }

    if (message.length > 1000) {
      return res.status(400).json({
        success: false,
        message: "Message too long",
      });
    }

    // Turnstile verification
    if (process.env.ENABLE_TURNSTILE === "true") {
      const verify = await axios.post(
        "https://challenges.cloudflare.com/turnstile/v0/siteverify",
        new URLSearchParams({
          secret: process.env.TURNSTILE_SECRET_KEY,
          response: turnstileToken,
        }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      if (!verify.data.success) {
        return res.status(400).json({
          success: false,
          message: "Captcha verification failed",
        });
      }
    }

    // Send email
    await apiInstance.sendTransacEmail({
      sender: {
        email: "connect@galileonext.com",
        name: "Galileo Next Website",
      },
      to: [
        {
          email: "connect@galileonext.com",
          name: "Galileo Next",
        },
      ],
      replyTo: {
        email,
        name,
      },
      subject: `Contact Form: ${subject}`,
      htmlContent: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <hr />
        <p>${message}</p>
      `,
    });

    res.status(200).json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (error) {
    console.error("Mail Error:", error);
    
    res.status(500).json({
      success: false,
      message: "Failed to send message. Please try again later.",
    });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});