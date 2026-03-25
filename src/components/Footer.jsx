import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiLinkedin, FiInstagram, FiMail, FiPhone, FiFacebook, FiTwitter } from 'react-icons/fi';
import { MdOutlineLocationOn, MdPolicy, MdDescription } from "react-icons/md";
import { FaRegHeart, FaHome, FaInfoCircle, FaEnvelope, FaShieldAlt } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";

const servicesData = [
  { title: "Software Development", path: "/services/software-development" },
  { title: "Software Solutions", path: "/services/software-solutions" },
  { title: "IT Services", path: "/services/it-services" },
  { title: "Digital Marketing", path: "/services/digital-marketing" }
];

const Footer = () => {
  const footerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <footer className="bg-black text-white pt-20 pb-12 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative overflow-hidden border-t border-[#29f67a]/20">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#29f67a]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#29f67a]/5 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h60v60H0z' fill='none'/%3E%3Cpath d='M60 0v60H0V0h60zM10 10v40h40V10H10zm5 5h30v30H15V15zm5 5v20h20V20H20z' stroke='%2329f67a' stroke-width='0.3' fill='none'/%3E%3C/svg%3E")`,
        backgroundSize: "40px 40px"
      }} />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#29f67a]/10"
            style={{
              width: Math.random() * 100 + 30,
              height: Math.random() * 100 + 30,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 30 - 15],
              x: [0, Math.random() * 30 - 15],
            }}
            transition={{
              duration: Math.random() * 20 + 15,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <motion.div
        className="relative z-10 mx-auto"
        initial="hidden"
        whileInView="visible"
        variants={footerVariants}
        viewport={{ once: true, margin: "-50px" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Company Info */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="flex items-center gap-3">
              <img 
                src="https://galileonext.com/wp-content/uploads/2025/06/galileo.png" 
                alt="Galileo" 
                className="h-12 w-auto"
              />
              {/* <h3 className="text-xl font-bold text-white">Galileo</h3> */}
            </div>
            <p className="text-gray-400 leading-relaxed text-sm">
              Bold thinking. Better tech. Real results. We build technology that helps modern businesses operate smarter, scale faster, and stand out.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://www.linkedin.com/company/galileo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#29f67a]/10 flex items-center justify-center text-[#29f67a] hover:bg-[#29f67a] hover:text-black transition-all duration-300"
                whileHover={{ y: -3, scale: 1.05 }}
              >
                <FiLinkedin className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/galileo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#29f67a]/10 flex items-center justify-center text-[#29f67a] hover:bg-[#29f67a] hover:text-black transition-all duration-300"
                whileHover={{ y: -3, scale: 1.05 }}
              >
                <FiInstagram className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="https://twitter.com/galileo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#29f67a]/10 flex items-center justify-center text-[#29f67a] hover:bg-[#29f67a] hover:text-black transition-all duration-300"
                whileHover={{ y: -3, scale: 1.05 }}
              >
                <FiTwitter className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="https://facebook.com/galileo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#29f67a]/10 flex items-center justify-center text-[#29f67a] hover:bg-[#29f67a] hover:text-black transition-all duration-300"
                whileHover={{ y: -3, scale: 1.05 }}
              >
                <FiFacebook className="w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>

          {/* Corporate Information */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold text-white mb-6 relative">
              Corporate Information
              <div className="absolute bottom-0 left-0 w-10 h-0.5 bg-[#29f67a] mt-2" />
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/", icon: FaHome },
                { name: "About", href: "/about", icon: FaInfoCircle },
                { name: "Contact", href: "/contact", icon: FaEnvelope },
                { name: "Privacy Policy", href: "/privacy-policy", icon: MdPolicy },
                { name: "Terms of Use", href: "/terms-of-use", icon: IoDocumentTextOutline },
              ].map((item) => (
                <motion.li
                  key={item.name}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    to={item.href}
                    className="text-gray-400 hover:text-[#29f67a] transition-colors flex items-center group text-sm"
                  >
                    <item.icon className="w-3.5 h-3.5 mr-2 opacity-60 group-hover:opacity-100" />
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold text-white mb-6 relative">
              Services
              <div className="absolute bottom-0 left-0 w-10 h-0.5 bg-[#29f67a] mt-2" />
            </h3>
            <ul className="space-y-3">
              {servicesData.map((service) => (
                <motion.li
                  key={service.title}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    to={service.path}
                    className="text-gray-400 hover:text-[#29f67a] transition-colors flex items-center group text-sm"
                  >
                    <span className="w-1.5 h-1.5 bg-[#29f67a] rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {service.title}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold text-white mb-6 relative">
              Get in Touch
              <div className="absolute bottom-0 left-0 w-10 h-0.5 bg-[#29f67a] mt-2" />
            </h3>
            <address className="not-italic text-gray-400 space-y-4">
              {/* <motion.p
                className="leading-relaxed flex items-start text-sm"
                whileHover={{ x: 5 }}
              >
                <MdOutlineLocationOn className="mr-3 mt-0.5 text-[#29f67a] flex-shrink-0" size={18} />
                <span>
                  Arena-3, 3rd Floor,
                  <br />
                  STPI ELITE Building, Gothapatna,
                  <br />
                  Khordha, Odisha - 751003
                </span>
              </motion.p> */}
              <motion.p whileHover={{ x: 5 }} className="flex items-center text-sm">
                <FiMail className="mr-3 text-[#29f67a]" size={16} />
                <Link
                  to="mailto:info@galileo.com"
                  className="hover:text-[#29f67a] transition-colors"
                >
                  info@galileo.com
                </Link>
              </motion.p>
              {/* <motion.p whileHover={{ x: 5 }} className="flex items-center text-sm">
                <FiPhone className="mr-3 text-[#29f67a]" size={16} />
                <Link
                  to="tel:+919777403555"
                  className="hover:text-[#29f67a] transition-colors"
                >
                  +91 9777403555
                </Link>
              </motion.p> */}
            </address>
          </motion.div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          className="mt-12 pt-8 border-t border-[#29f67a]/10"
          variants={itemVariants}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-white text-sm font-medium mb-1">Stay Updated</p>
              <p className="text-gray-500 text-xs">Get the latest insights and updates from Galileo</p>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-2 rounded-lg bg-gray-900 border border-[#29f67a]/20 text-white text-sm focus:outline-none focus:border-[#29f67a] transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-5 py-2 rounded-lg bg-[#29f67a] text-black text-sm font-semibold hover:bg-[#29f67a]/90 transition-all"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          className="mt-10 pt-6 border-t border-[#29f67a]/10 text-center"
          variants={itemVariants}
        >
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} Galileo. All rights reserved.
          </p>
          <p className="mt-2 text-gray-600 text-[10px] flex items-center justify-center">
            Designed with <FaRegHeart className="mx-1 text-[#29f67a]" size={10} /> in India
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;