import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { FiMail, FiUser, FiMessageSquare, FiSend } from "react-icons/fi";
import { TiTickOutline } from "react-icons/ti";
import { MdSmsFailed } from "react-icons/md";

function ContactForm() {
  const [isSending, setIsSending] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(true);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    try {
      const res = await fetch("/send-mail.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const text = await res.text();

      let data;
      try {
        data = JSON.parse(text);
      } catch {
        throw new Error("Invalid JSON from server");
      }

      if (data.success) {
        setIsSuccess(true);
        setToastMessage("Message sent successfully");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setIsSuccess(false);
        setToastMessage("Failed to send. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setIsSuccess(false);
      setToastMessage("Something went wrong. Please try later.");
    } finally {
      setShowPopup(true);
      setIsSending(false);
      setTimeout(() => setShowPopup(false), 4000);
    }
  };

  return (
    <div className="relative">
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-gray-400 text-sm mb-2">
            Name
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
            />
          </div>
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-gray-400 text-sm mb-2">
            Email
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
            />
          </div>
        </div>

        {/* Subject Field */}
        <div>
          <label htmlFor="subject" className="block text-gray-400 text-sm mb-2">
            Subject
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
          />
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-gray-400 text-sm mb-2">
            Message
          </label>
          <div className="relative">
            <FiMessageSquare className="absolute left-3 top-3 text-gray-500 text-sm" />
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full pl-10 pr-4 py-2.5 bg-transparent border border-gray-800 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-[#29f67a] transition-colors resize-none"
              placeholder="Tell us about your project..."
              required
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSending}
          className="w-full py-2.5 px-4 bg-[#29f67a] text-black font-medium rounded-lg hover:bg-[#29f67a]/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isSending ? (
            <>
              <span>Sending...</span>
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