import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiLinkedin, FiInstagram, FiMail, FiFacebook, FiTwitter, 
  FiChevronDown, FiChevronUp 
} from 'react-icons/fi';
import { FaHome, FaInfoCircle, FaEnvelope } from "react-icons/fa";
import { servicesData } from "../data/servicesData";
import { ourProducts } from "../data/ProductPageData";
import { solutionsList } from '../data/solutionPageData';

const Footer = () => {
  const location = useLocation();
  const [openSections, setOpenSections] = useState({
    corporate: false,
    services: false,
    products: false,
    solutions: false,
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
          solutions: false,
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

  // Solution items from solutionsList data
  const solutionItems = solutionsList.map(solution => ({
    name: solution.title,
    href: solution.path,
    shortDescription: solution.shortDescription
  }));

  return (
    <footer className="bg-gradient-to-b from-black/10 via-[#29f67a]/20 to-[#29f67a]/30 text-white pt-20 pb-12 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative overflow-hidden ">
      <div className='border-t border-white/20  p-5' />
      {/* Animated Background Gradient - Darker overlay for contrast */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-black/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-black/20 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      {/* Grid Pattern - Darker for contrast */}
      <div className="absolute inset-0 opacity-[5] " style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h60v60H0z' fill='none'/%3E%3Cpath d='M60 0v60H0V0h60zM10 10v40h40V10H10zm5 5h30v30H15V15zm5 5v20h20V20H20z' stroke='%23000000' stroke-width='0.3' fill='none'/%3E%3C/svg%3E")`,
        backgroundSize: "40px 40px"
      }} />

      {/* Floating particles - Darker for visibility */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none ">
        {[...Array(8)].map((_, i) => {
          const randomSize = Math.random() * 80 + 20;
          const randomLeft = Math.random() * 100;
          const randomTop = Math.random() * 100;
          const randomY = Math.random() * 40 - 20;
          const randomX = Math.random() * 40 - 20;
          const randomDuration = Math.random() * 25 + 15;
          
          return (
            <motion.div
              key={i}
              className="absolute rounded-full bg-black/10"
              style={{
                width: randomSize,
                height: randomSize,
                left: `${randomLeft}%`,
                top: `${randomTop}%`,
              }}
              animate={{
                y: [0, randomY],
                x: [0, randomX],
                opacity: [0.2, 0.05, 0.2]
              }}
              transition={{
                duration: randomDuration,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          );
        })}
      </div>

      <motion.div
        className="relative z-10  mx-auto"
        initial="hidden"
        whileInView="visible"
        variants={footerVariants}
        viewport={{ once: true, margin: "-50px" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-12">
          {/* Company Info */}
          <motion.div variants={itemVariants} className="lg:col-span-1 space-y-6">
            <div className="flex items-center gap-3">
              <img 
                src="/logo.png" 
                alt="Galileo" 
                className="h-10 w-auto rounded-2xl"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://via.placeholder.com/48x48?text=G";
                }}
              />
             
            </div>
            <p className="text-white/70 leading-relaxed text-md">
              Bold thinking. Better tech. Real results. We build technology that helps modern businesses operate smarter, scale faster, and stand out.
            </p>
            <div className="flex space-x-3">
              <motion.a
                href="https://www.linkedin.com/company/galileo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#29f67a] hover:text-black transition-all duration-300"
                whileHover={{ y: -3, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiLinkedin className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/galileo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#29f67a] hover:text-black transition-all duration-300"
                whileHover={{ y: -3, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiInstagram className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="https://twitter.com/galileo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#29f67a] hover:text-black transition-all duration-300"
                whileHover={{ y: -3, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiTwitter className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="https://facebook.com/galileo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#29f67a] hover:text-black transition-all duration-300"
                whileHover={{ y: -3, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiFacebook className="w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>

          {/* Corporate Information - Desktop */}
          <motion.div variants={itemVariants} className="hidden lg:block">
            <h3 className="text-lg font-bold text-white mb-6 relative inline-block">
              Corporate Information
              <motion.div 
                className="absolute bottom-0 left-0 h-0.5 bg-[#29f67a] mt-2"
                initial={{ width: 0 }}
                whileInView={{ width: "40px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
              />
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
                      className={`text-md flex items-center group transition-all duration-300 ${
                        active ? 'text-[#29f67a] font-semibold' : 'text-white/60 hover:text-[#29f67a]'
                      }`}
                    >
                      <item.icon className={`w-3.5 h-3.5 mr-2 transition-all duration-300 ${
                        active ? 'text-[#29f67a]' : 'text-white/50 group-hover:text-[#29f67a]'
                      }`} />
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
              className="w-full flex items-center justify-between py-3 border-b border-white/20 hover:border-white/40 transition-colors"
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
                  transition={{ duration: 0.3 }}
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
                            className={`text-md flex items-center group transition-all duration-300 ${
                              active ? 'text-[#29f67a] font-semibold' : 'text-white/60 hover:text-[#29f67a]'
                            }`}
                          >
                            <item.icon className={`w-3.5 h-3.5 mr-2 transition-all duration-300 ${
                              active ? 'text-[#29f67a]' : 'text-white/50 group-hover:text-[#29f67a]'
                            }`} />
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
            <h3 className="text-lg font-bold text-white mb-6 relative inline-block">
              Services
              <motion.div 
                className="absolute bottom-0 left-0 h-0.5 bg-[#29f67a] mt-2"
                initial={{ width: 0 }}
                whileInView={{ width: "40px" }}
                transition={{ duration: 0.5, delay: 0.3 }}
              />
            </h3>
            <ul className="space-y-3">
              {servicesData && servicesData.map((service) => {
                const active = isActive(service.path);
                return (
                  <motion.li
                    key={service.title}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link
                      to={service.path}
                      className={`text-md flex items-center group transition-all duration-300 ${
                        active ? 'text-[#29f67a] font-semibold' : 'text-white/60 hover:text-[#29f67a]'
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
              className="w-full flex items-center justify-between py-3 border-b border-white/20 hover:border-white/40 transition-colors"
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
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <ul className="space-y-3 py-4">
                    {servicesData && servicesData.map((service) => {
                      const active = isActive(service.path);
                      return (
                        <motion.li
                          key={service.title}
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <Link
                            to={service.path}
                            className={`text-md flex items-center group transition-all duration-300 ${
                              active ? 'text-[#29f67a] font-semibold' : 'text-white/60 hover:text-[#29f67a]'
                            }`}
                          >
                            {service.icon && (
                              <span className="mr-2 text-[#29f67a]/50 group-hover:text-[#29f67a] transition-opacity">
                                {service.icon}
                              </span>
                            )}
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
            <h3 className="text-lg font-bold text-white mb-6 relative inline-block">
              Products
              <motion.div 
                className="absolute bottom-0 left-0 h-0.5 bg-[#29f67a] mt-2"
                initial={{ width: 0 }}
                whileInView={{ width: "40px" }}
                transition={{ duration: 0.5, delay: 0.4 }}
              />
            </h3>
            <ul className="space-y-3">
              {productItems && productItems.map((product) => {
                const active = isActive(product.href);
                return (
                  <motion.li
                    key={product.name}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link
                      to={product.href}
                      className={`text-md flex items-center group transition-all duration-300 ${
                        active ? 'text-[#29f67a] font-semibold' : 'text-white/60 hover:text-[#29f67a]'
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
              className="w-full flex items-center justify-between py-3 border-b border-white/20 hover:border-white/40 transition-colors"
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
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <ul className="space-y-3 py-4">
                    {productItems && productItems.map((product) => {
                      const active = isActive(product.href);
                      return (
                        <motion.li
                          key={product.name}
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <Link
                            to={product.href}
                            className={`text-md flex items-center group transition-all duration-300 ${
                              active ? 'text-[#29f67a] font-semibold' : 'text-white/60 hover:text-[#29f67a]'
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

          {/* Solutions - Desktop */}
          <motion.div variants={itemVariants} className="hidden lg:block">
            <h3 className="text-lg font-bold text-white mb-6 relative inline-block">
              Solutions
              <motion.div 
                className="absolute bottom-0 left-0 h-0.5 bg-[#29f67a] mt-2"
                initial={{ width: 0 }}
                whileInView={{ width: "40px" }}
                transition={{ duration: 0.5, delay: 0.45 }}
              />
            </h3>
            <ul className="space-y-3">
              {solutionItems && solutionItems.map((solution) => {
                const active = isActive(solution.href);
                return (
                  <motion.li
                    key={solution.name}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link
                      to={solution.href}
                      className={`text-md flex items-start group transition-all duration-300 ${
                        active ? 'text-[#29f67a] font-semibold' : 'text-white/60 hover:text-[#29f67a]'
                      }`}
                    >
                        <div className="flex items-center">
                          {solution.name}
                        </div>
                      
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>

          {/* Solutions - Mobile Accordion */}
          <div className="lg:hidden">
            <button
              onClick={() => toggleSection('solutions')}
              className="w-full flex items-center justify-between py-3 border-b border-white/20 hover:border-white/40 transition-colors"
            >
              <h3 className="text-lg font-bold text-white">Solutions</h3>
              {openSections.solutions ? (
                <FiChevronUp className="text-[#29f67a]" />
              ) : (
                <FiChevronDown className="text-[#29f67a]" />
              )}
            </button>
            <AnimatePresence>
              {openSections.solutions && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <ul className="space-y-3 py-4">
                    {solutionItems && solutionItems.map((solution) => {
                      const active = isActive(solution.href);
                      return (
                        <motion.li
                          key={solution.name}
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <Link
                            to={solution.href}
                            className={`text-md flex items-start group transition-all duration-300 ${
                              active ? 'text-[#29f67a] font-semibold' : 'text-white/60 hover:text-[#29f67a]'
                            }`}
                          >
                            <div>
                              <div className="flex items-center">
                                {solution.name}
                              </div>
                              {solution.shortDescription && (
                                <p className="text-xs text-white/40 mt-1 group-hover:text-white/60 transition-colors">
                                  {solution.shortDescription.length > 60 
                                    ? solution.shortDescription.substring(0, 60) + '...' 
                                    : solution.shortDescription}
                                </p>
                              )}
                            </div>
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
            <h3 className="text-lg font-bold text-white mb-6 relative inline-block">
              Get in Touch
              <motion.div 
                className="absolute bottom-0 left-0 h-0.5 bg-[#29f67a] mt-2"
                initial={{ width: 0 }}
                whileInView={{ width: "40px" }}
                transition={{ duration: 0.5, delay: 0.5 }}
              />
            </h3>
            <address className="not-italic text-white/60 space-y-4">
              <motion.p whileHover={{ x: 5 }} className="flex items-center text-md">
                <Link
                  to="mailto:connect@galileonext.com"
                  className="hover:text-[#29f67a] transition-colors duration-300"
                >
                  connect@galileonext.com
                </Link>
              </motion.p>
             
            </address>
          </motion.div>
        </div>

        {/* Bottom Bar with Newsletter Signup */}
        <motion.div
          className="mt-16 pt-8 border-t border-white/20"
          variants={itemVariants}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-white/50 text-sm">
              &copy; {new Date().getFullYear()} Galileo. All rights reserved.
            </p>
            
                    </div>
          
         
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;