import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiLinkedin, FiInstagram, FiMail, FiPhone, FiFacebook, FiTwitter, 
  FiChevronDown, FiChevronUp 
} from 'react-icons/fi';
import { MdOutlineLocationOn } from "react-icons/md";
import { FaRegHeart, FaHome, FaInfoCircle, FaEnvelope } from "react-icons/fa";
import { servicesData } from "../data/servicesData";
import { ourProducts } from "../data/ProductPageData";

const Footer = () => {
  const location = useLocation();
  const [openSections, setOpenSections] = useState({
    corporate: false,
    services: false,
    products: false,
    contact: false
  });

  // Close all sections on window resize if in desktop view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setOpenSections({
          corporate: false,
          services: false,
          products: false,
          contact: false
        });
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

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

  // Check if a nav item is active
  const isActive = (href) => {
    if (href === "/") {
      return location.pathname === href;
    }
    return location.pathname.startsWith(href);
  };

  // Corporate navigation items matching navbar
  const corporateItems = [
    { name: "Home", href: "/", icon: FaHome },
    { name: "About", href: "/about", icon: FaInfoCircle },
    { name: "Contact", href: "/contact", icon: FaEnvelope },
  ];

  // Product items from ourProducts data
  const productItems = ourProducts.map(product => ({
    name: product.productHeadingSection.name,
    href: product.productHeadingSection.pathUrl,
    description: product.productHeadingSection.heading
  }));

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
        className="relative z-10 mx-[5vw]    "
        initial="hidden"
        whileInView="visible"
        variants={footerVariants}
        viewport={{ once: true, margin: "-50px" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Company Info */}
          {/* Company Info */}
          <motion.div variants={itemVariants} className="lg:col-span-1 space-y-6">
            <div className="flex items-center gap-3">
              <img 
                src="https://galileonext.com/wp-content/uploads/2025/06/galileo.png" 
                alt="Galileo" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-400 leading-relaxed text-md">
              Bold thinking. Better tech. Real results. We build technology that helps modern businesses operate smarter, scale faster, and stand out.
            </p>
            <div className="flex space-x-3">
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


          {/* Corporate Information - Desktop */}
          <motion.div variants={itemVariants} className="hidden lg:block">
            <h3 className="text-lg font-bold text-white mb-6 relative">
              Corporate Information
              <div className="absolute bottom-0 left-0 w-10 h-0.5 bg-[#29f67a] mt-2" />
            </h3>
            <ul className="space-y-3">
              {corporateItems.map((item) => {
                const active = isActive(item.href);
                return (
                  <motion.li
                    key={item.name}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link
                      to={item.href}
                      className={`text-md flex items-center group transition-colors ${
                        active ? 'text-[#29f67a]' : 'text-gray-400 hover:text-[#29f67a]'
                      }`}
                    >
                      <item.icon className="w-3.5 h-3.5 mr-2 opacity-60 group-hover:opacity-100" />
                      {item.name}
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>

          {/* Corporate Information - Mobile Accordion */}
          <div className="lg:hidden">
            <button
              onClick={() => toggleSection('corporate')}
              className="w-full flex items-center justify-between py-3 border-b border-[#29f67a]/20"
            >
              <h3 className="text-lg font-bold text-white">Corporate Information</h3>
              {openSections.corporate ? (
                <FiChevronUp className="text-[#29f67a]" />
              ) : (
                <FiChevronDown className="text-[#29f67a]" />
              )}
            </button>
            <AnimatePresence>
              {openSections.corporate && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <ul className="space-y-3 py-4">
                    {corporateItems.map((item) => {
                      const active = isActive(item.href);
                      return (
                        <motion.li
                          key={item.name}
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <Link
                            to={item.href}
                            className={`text-md flex items-center group transition-colors ${
                              active ? 'text-[#29f67a]' : 'text-gray-400 hover:text-[#29f67a]'
                            }`}
                          >
                            <item.icon className="w-3.5 h-3.5 mr-2 opacity-60 group-hover:opacity-100" />
                            {item.name}
                          </Link>
                        </motion.li>
                      );
                    })}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Services - Desktop */}
          <motion.div variants={itemVariants} className="hidden lg:block">
            <h3 className="text-lg font-bold text-white mb-6 relative">
              Services
              <div className="absolute bottom-0 left-0 w-10 h-0.5 bg-[#29f67a] mt-2" />
            </h3>
            <ul className="space-y-3">
              {servicesData.map((service) => {
                const active = isActive(service.path);
                return (
                  <motion.li
                    key={service.title}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link
                      to={service.path}
                      className={`text-md flex items-center group transition-colors ${
                        active ? 'text-[#29f67a]' : 'text-gray-400 hover:text-[#29f67a]'
                      }`}
                    >
                      {service.title}
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>

          {/* Services - Mobile Accordion */}
          <div className="lg:hidden">
            <button
              onClick={() => toggleSection('services')}
              className="w-full flex items-center justify-between py-3 border-b border-[#29f67a]/20"
            >
              <h3 className="text-lg font-bold text-white">Services</h3>
              {openSections.services ? (
                <FiChevronUp className="text-[#29f67a]" />
              ) : (
                <FiChevronDown className="text-[#29f67a]" />
              )}
            </button>
            <AnimatePresence>
              {openSections.services && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <ul className="space-y-3 py-4">
                    {servicesData.map((service) => {
                      const active = isActive(service.path);
                      return (
                        <motion.li
                          key={service.title}
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <Link
                            to={service.path}
                            className={`text-md flex items-center group transition-colors ${
                              active ? 'text-[#29f67a]' : 'text-gray-400 hover:text-[#29f67a]'
                            }`}
                          >
                            <span className="mr-2 text-[#29f67a] opacity-60 group-hover:opacity-100 transition-opacity">
                              {service.icon}
                            </span>
                            {service.title}
                          </Link>
                        </motion.li>
                      );
                    })}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Products - Desktop */}
          <motion.div variants={itemVariants} className="hidden lg:block">
            <h3 className="text-lg font-bold text-white mb-6 relative">
              Products
              <div className="absolute bottom-0 left-0 w-10 h-0.5 bg-[#29f67a] mt-2" />
            </h3>
            <ul className="space-y-3">
              {productItems.map((product) => {
                const active = isActive(product.href);
                return (
                  <motion.li
                    key={product.name}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link
                      to={product.href}
                      className={`text-md flex items-center group transition-colors ${
                        active ? 'text-[#29f67a]' : 'text-gray-400 hover:text-[#29f67a]'
                      }`}
                    >
                      {product.name}
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>

          {/* Products - Mobile Accordion */}
          <div className="lg:hidden">
            <button
              onClick={() => toggleSection('products')}
              className="w-full flex items-center justify-between py-3 border-b border-[#29f67a]/20"
            >
              <h3 className="text-lg font-bold text-white">Products</h3>
              {openSections.products ? (
                <FiChevronUp className="text-[#29f67a]" />
              ) : (
                <FiChevronDown className="text-[#29f67a]" />
              )}
            </button>
            <AnimatePresence>
              {openSections.products && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <ul className="space-y-3 py-4">
                    {productItems.map((product) => {
                      const active = isActive(product.href);
                      return (
                        <motion.li
                          key={product.name}
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <Link
                            to={product.href}
                            className={`text-md flex items-center group transition-colors ${
                              active ? 'text-[#29f67a]' : 'text-gray-400 hover:text-[#29f67a]'
                            }`}
                          >
                            {product.name}
                          </Link>
                        </motion.li>
                      );
                    })}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <h3 className="text-lg font-bold text-white mb-6 relative">
              Get in Touch
              <div className="absolute bottom-0 left-0 w-10 h-0.5 bg-[#29f67a] mt-2" />
            </h3>
            <address className="not-italic text-gray-400 space-y-4">
              <motion.p whileHover={{ x: 5 }} className="flex items-center text-md">
                <FiMail className="mr-3 text-[#29f67a]" size={16} />
                <Link
                  to="mailto:info@galileo.com"
                  className="hover:text-[#29f67a] transition-colors"
                >
                  info@galileo.com
                </Link>
              </motion.p>
              <motion.p whileHover={{ x: 5 }} className="flex items-center text-md">
                <FiPhone className="mr-3 text-[#29f67a]" size={16} />
                <Link
                  to="tel:+919777403555"
                  className="hover:text-[#29f67a] transition-colors"
                >
                  +91 123456789
                </Link>
              </motion.p>
            </address>
          </motion.div>
        </div>

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