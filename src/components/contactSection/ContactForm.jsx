import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { FiMail, FiUser, FiMessageSquare, FiSend } from "react-icons/fi";
import { TiTickOutline } from "react-icons/ti";
import { MdSmsFailed } from "react-icons/md";
import { Turnstile } from '@marsidev/react-turnstile';

function ContactForm() {
  const [isSending, setIsSending] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(true);
  const [turnstileToken, setTurnstileToken] = useState(null);
  
  const turnstileRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Email validation helper
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setToastMessage("Please enter your name");
      setIsSuccess(false);
      setShowPopup(true);
      return false;
    }

    if (!formData.email.trim()) {
      setToastMessage("Please enter your email");
      setIsSuccess(false);
      setShowPopup(true);
      return false;
    }

    if (!isValidEmail(formData.email.trim())) {
      setToastMessage("Please enter a valid email address");
      setIsSuccess(false);
      setShowPopup(true);
      return false;
    }

    if (!formData.subject.trim()) {
      setToastMessage("Please enter a subject");
      setIsSuccess(false);
      setShowPopup(true);
      return false;
    }

    if (!formData.message.trim()) {
      setToastMessage("Please enter your message");
      setIsSuccess(false);
      setShowPopup(true);
      return false;
    }

    const maxLength = Number(import.meta.env.VITE_MAX_MESSAGE_LENGTH || 1000);
    if (formData.message.length > maxLength) {
      setToastMessage(`Message cannot exceed ${maxLength} characters`);
      setIsSuccess(false);
      setShowPopup(true);
      return false;
    }

    if (!turnstileToken) {
      setToastMessage("Please complete the verification");
      setIsSuccess(false);
      setShowPopup(true);
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSending) return;

    // Validate form before submitting
    if (!validateForm()) {
      return;
    }

    setIsSending(true);

    try {
      // Create email body with formatted content
      const emailBody = `
Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}
      `.trim();

      // Create mailto link
      // Replace 'your-email@example.com' with your actual email address
      const recipientEmail = 'tusar00005@gmail.com'; // Change this to your email
      const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(emailBody)}`;
      
      // Open default email client
      window.location.href = mailtoLink;

      // Show success message
      setIsSuccess(true);
      setToastMessage("Opening your email client... Please send the email to complete.");

      // Reset form on success
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      
      // Reset turnstile widget
      if (turnstileRef.current) {
        turnstileRef.current.reset();
      }
      setTurnstileToken(null);
      
    } catch (error) {
      console.error("Error opening email client:", error);
      
      setIsSuccess(false);
      setToastMessage("Could not open email client. Please try again.");
      
    } finally {
      setShowPopup(true);
      setIsSending(false);

      // Auto-hide popup after 4 seconds
      setTimeout(() => {
        setShowPopup(false);
      }, 4000);
    }
  };

  // Check if form is valid for button disabling
  const isFormValid = () => {
    return (
      formData.name.trim() &&
      formData.email.trim() &&
      isValidEmail(formData.email.trim()) &&
      formData.subject.trim() &&
      formData.message.trim() &&
      turnstileToken
    );
  };
console.log(import.meta.env.VITE_TURNSTILE_SITE_KEY);
  return (
    <div className="relative">
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-gray-400 text-sm mb-2">
            Name <span className="text-red-400">*</span>
          </label>
          <div className="relative">
            <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm" />
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-2.5 bg-transparent border border-gray-800 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-[#29f67a] transition-colors"
              placeholder="Your name"
              required
              aria-required="true"
            />
          </div>
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-gray-400 text-sm mb-2">
            Email <span className="text-red-400">*</span>
          </label>
          <div className="relative">
            <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm" />
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-2.5 bg-transparent border border-gray-800 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-[#29f67a] transition-colors"
              placeholder="your@email.com"
              required
              aria-required="true"
            />
          </div>
        </div>

        {/* Subject Field */}
        <div>
          <label htmlFor="subject" className="block text-gray-400 text-sm mb-2">
            Subject <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-2.5 bg-transparent border border-gray-800 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-[#29f67a] transition-colors"
            placeholder="What's this about?"
            required
            aria-required="true"
          />
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-gray-400 text-sm mb-2">
            Message <span className="text-red-400">*</span>
          </label>
          <div className="relative">
            <FiMessageSquare className="absolute left-3 top-3 text-gray-500 text-sm" />
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              maxLength={Number(import.meta.env.VITE_MAX_MESSAGE_LENGTH || 1000)}
              className="w-full pl-10 pr-4 py-2.5 bg-transparent border border-gray-800 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-[#29f67a] transition-colors resize-none"
              placeholder="Tell us about your project..."
              required
              aria-required="true"
            />
          </div>
          <div className="text-right text-xs text-gray-500 mt-1">
            {formData.message.length}/{Number(import.meta.env.VITE_MAX_MESSAGE_LENGTH || 1000)}
          </div>
        </div>

        {/* Cloudflare Turnstile */}
        <div className="flex justify-center py-2">
          <Turnstile
            ref={turnstileRef}
            siteKey={import.meta.env.VITE_TURNSTILE_SITE_KEY}
            onSuccess={(token) => {
              setTurnstileToken(token);
            }}
            onError={() => {
              setTurnstileToken(null);
              setToastMessage("Verification failed. Please try again.");
              setIsSuccess(false);
              setShowPopup(true);
              setTimeout(() => setShowPopup(false), 4000);
            }}
            onExpire={() => {
              setTurnstileToken(null);
              setToastMessage("Verification expired. Please verify again.");
              setIsSuccess(false);
              setShowPopup(true);
              setTimeout(() => setShowPopup(false), 4000);
            }}
          />
        </div>

        {/* Rate Limit Info */}
        <div className="text-center text-xs text-gray-500">
          You can send up to 5 messages every 15 minutes
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSending || !isFormValid()}
          aria-busy={isSending}
          aria-label={isSending ? "Opening email client..." : "Send Message"}
          className="w-full py-2.5 px-4 bg-[#29f67a] text-black font-medium rounded-lg hover:bg-[#29f67a]/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isSending ? (
            <>
              <span>Opening email...</span>
              <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
            </>
          ) : (
            <>
              <span>Send Message</span>
              <FiSend className="w-4 h-4" />
            </>
          )}
        </button>
      </form>

      {/* Toast Notification */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className={`fixed bottom-6 left-1/2 -translate-x-1/2 px-5 py-2.5 rounded-lg flex items-center gap-2 shadow-lg z-50 ${
              isSuccess ? "bg-[#29f67a] text-black" : "bg-red-500 text-white"
            }`}
            role="alert"
            aria-live="polite"
          >
            {isSuccess ? (
              <TiTickOutline className="w-4 h-4" />
            ) : (
              <MdSmsFailed className="w-4 h-4" />
            )}
            <span className="text-sm">{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ContactForm;