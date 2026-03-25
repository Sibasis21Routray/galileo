import React, { useRef } from "react";
import { useInView, motion } from "framer-motion";
import { FiMail, FiPhone, FiArrowRight } from "react-icons/fi";
import RippleButton from "../overlays/RippleButton";
import { Link } from "react-router-dom";

function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.4, once: true });

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative py-24 bg-black px-6 overflow-hidden border-t border-white/5">
      {/* Background Decorative Element: The "Galileo Compass" */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-64 -right-64 w-[600px] h-[600px] border border-[#29f67a]/20 rounded-full flex items-center justify-center"
        >
          <div className="w-[400px] h-[400px] border border-[#29f67a]/10 rounded-full" />
          <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-[#29f67a] via-transparent to-transparent" />
        </motion.div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center"
        >
          {/* Tagline */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="text-[#29f67a] font-mono text-xs tracking-[0.5em] uppercase border border-[#29f67a]/30 px-4 py-1.5 rounded-full">
              Get Started
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-6xl font-light text-white mb-6 tracking-tight"
          >
            Galileo Ventures: <span className="font-medium text-[#29f67a] italic">See Further.</span>
          </motion.h2>

          {/* Subtext */}
          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-12 font-light"
          >
            Whether you’re launching something new or optimizing what already exists, we bring 
            strategy, structure, and speed to your tech transformation. Software that scales. 
            Infrastructure that just works. 
            <span className="text-white block mt-4 font-medium">Ready to build the future? Let’s talk.</span>
          </motion.p>

          {/* Action Button */}
          <motion.div variants={itemVariants} className="mb-20">
            <Link to="/contact" className="inline-block">
              <button className="flex items-center gap-4 px-6 py-3 bg-[#29f67a] text-black font-medium rounded-full hover:bg-[#29f67a]/90 transition-all duration-300">
                <span className="flex items-center gap-2">
                  Schedule a Free Consult <FiArrowRight />
                </span>
              </button>
            </Link>
          </motion.div>

          {/* Contact Modules */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10 max-w-2xl mx-auto"
          >
            {[
              { 
                icon: <FiMail />, 
                label: "Email Dispatch", 
                text: "info@galileo.co.in",
                link: "mailto:info@galileo.co.in" 
              },
              { 
                icon: <FiPhone />, 
                label: "Direct Line", 
                text: "+91123456789",
                link: "tel:+91123456789" 
              },
            ].map((item, i) => (
              <a
                href={item.link}
                key={i}
                className="group flex flex-col items-center p-8 bg-black hover:bg-[#080808] transition-all duration-300"
              >
                <div className="w-10 h-10 flex items-center justify-center border border-[#29f67a]/20 text-[#29f67a] rounded-sm group-hover:border-[#29f67a] group-hover:bg-[#29f67a] group-hover:text-black transition-all duration-500 mb-4">
                  {item.icon}
                </div>
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-1">
                  {item.label}
                </span>
                <span className="text-white font-medium group-hover:text-[#29f67a] transition-colors">
                  {item.text}
                </span>
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default CTA;