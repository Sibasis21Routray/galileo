import { motion, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { servicesData } from "../src/data/servicesData";
import {FiArrowRight, FiCode, FiCloud, FiTrendingUp, FiCheck, FiMessageCircle, FiLifeBuoy} from "react-icons/fi";



const ServicesMenu = ({ onClose }) => {
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    onClose();
  };


  return (
    <AnimatePresence>
  <motion.div
    ref={dropdownRef}
    initial={{ opacity: 0, y: -10, scale: 0.98 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    exit={{ opacity: 0, y: -10, scale: 0.98 }}
    transition={{ duration: 0.2 }}
    className="
      absolute top-full left-1/2 -translate-x-1/2 mt-3
      w-[20vw] max-w-xl
      bg-black/90 backdrop-blur-md
      rounded-xl border border-white/10
      p-5 z-50
    "
  >
    {/* Header */}
    <div className="mb-4">
      <h2 className="text-xs text-[#29f67a] uppercase tracking-widest font-semibold">
        Services
      </h2>
    </div>

    {/* List */}
    <div className="divide-y divide-white/5">
      {servicesData.map((service, idx) => (
        <motion.div
          key={idx}
          onClick={() => handleNavigation(service.path)}
          whileHover={{ x: 4 }}
          className="
            group flex items-center justify-between
            py-3 cursor-pointer
            transition
          "
        >
          {/* Left */}
          <div className="flex items-center gap-3">
            <span className="text-[#29f67a]/40 text-xs font-mono">
              {(idx + 1).toString().padStart(2, "0")}
            </span>

            <span className="
              text-sm text-gray-300
              group-hover:text-white
              transition
            ">
              {service.title}
            </span>
          </div>

          {/* Right */}
          <FiArrowRight
            size={14}
            className="
              text-[#29f67a]/40
              group-hover:text-[#29f67a]
              group-hover:translate-x-1
              transition
            "
          />
        </motion.div>
      ))}
    </div>

    {/* Footer */}
    <div className="mt-4 pt-3 border-t border-white/5 flex justify-between items-center">
      <span className="text-[10px] text-gray-500">
        {servicesData.length} services
      </span>

      <span
        onClick={() => {
          navigate("/contact")
          onClose()
        }}
        className="text-xs text-[#29f67a] cursor-pointer hover:opacity-80 transition"
      >
        Contact →
      </span>
    </div>
  </motion.div>
</AnimatePresence>
  );
};




function Services() {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 20, stiffness: 300 },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen bg-[#050505] py-20 px-4 md:px-8 selection:bg-[#29f67a]/30 selection:text-[#29f67a]">
      {/* Animated Background Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[150px] opacity-20"
          style={{ backgroundColor: "#29f67a" }}
          animate={{ x: [0, 100, -50, 0], y: [0, -80, 60, 0] }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-[120px] opacity-10"
          style={{ backgroundColor: "#29f67a" }}
          animate={{ x: [0, -70, 50, 0], y: [0, 90, -40, 0] }}
          transition={{ duration: 25, repeat: Infinity, repeatType: "reverse" }}
        />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-50 contrast-150" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* ================================================================ */}
        {/* SECTION 1: HEADER */}
        {/* ================================================================ */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-24"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center justify-center gap-3 text-[#29f67a] font-bold tracking-[0.3em] uppercase text-xs mb-8 mt-5"
          >
            <span className="w-8 h-[1px] bg-[#29f67a]" />
            What We Offer
            <span className="w-8 h-[1px] bg-[#29f67a]" />
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-light text-white leading-[0.9] tracking-tighter mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Our{" "}
            <span className="font-bold text-[#29f67a]">Services</span>
          </motion.h1>

          <motion.div
            className="w-24 h-1 mx-auto mb-10 rounded-full bg-[#29f67a]"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          />

          <motion.p
            className="text-white text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            We structure our services around business outcomes, not just technologies.
          </motion.p>

          <motion.p
            className="text-gray-300 text-base max-w-2xl mx-auto leading-relaxed mt-4 font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            Whether you're building a new product, scaling an existing platform, or improving performance, our approach focuses on solving real problems — not just delivering features.
          </motion.p>
        </motion.div>

        {/* ================================================================ */}
        {/* SECTION 2: SERVICE PILLARS */}
        {/* ================================================================ */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-32"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              onClick={() => navigate(service.path)}
              className="group relative cursor-pointer"
            >
              <div
                className="relative bg-black/60 backdrop-blur-sm rounded-2xl p-8 h-full border transition-all duration-300 overflow-hidden"
                style={{
                  borderColor: "rgba(41, 246, 122, 0.2)",
                  boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.5)",
                }}
              >
                {/* Glow effect on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: "radial-gradient(circle at 50% 0%, rgba(41, 246, 122, 0.15), transparent 70%)",
                  }}
                />

                {/* Icon */}
                <motion.div
                  className="mb-6 inline-block"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <div
                    className="p-4 rounded-xl inline-flex"
                    style={{
                      backgroundColor: "rgba(41, 246, 122, 0.1)",
                      border: "1px solid rgba(41, 246, 122, 0.2)",
                    }}
                  >
                    {service.icon}
                  </div>
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-4 text-white transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Learn More Link */}
                <motion.div
                  className="flex items-center gap-2 text-sm font-semibold text-[#29f67a]"
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                >
                  <span>Explore</span>
                  <FiArrowRight size={16} />
                </motion.div>

                {/* Decorative bottom line */}
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-[#29f67a]"
                  initial={{ width: "0%" }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

       

        {/* ================================================================ */}
        {/* SECTION 3: HOW TO CHOOSE THE RIGHT SERVICE */}
        {/* ================================================================ */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-32"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
                How to Choose the Right Service
              </h2>
              <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-[#29f67a]/50 to-transparent mx-auto" />
            </div>

            <p className="text-slate-400 text-lg leading-relaxed text-center mb-12 font-light">
              Our services are designed to work together, but most clients typically start in one area depending on their current needs.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Software Development */}
              <div className="group p-8 rounded-2xl bg-gradient-to-br from-white/[0.03] to-transparent border border-white/10 hover:border-[#29f67a]/30 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-[#29f67a]/10">
                    <FiLifeBuoy  className="w-4 h-4 text-[#29f67a]" />
                  </div>
                  <span className="text-xs font-bold text-[#29f67a] uppercase tracking-wider">BUILD</span>
                </div>
                <p className="text-slate-300 leading-relaxed text-sm">
                  If you're building a product or internal system →{" "}
                  <span className="text-white font-semibold">Software Development</span>
                </p>
              </div>

              {/* IT Infrastructure */}
              <div className="group p-8 rounded-2xl bg-gradient-to-br from-white/[0.03] to-transparent border border-white/10 hover:border-[#29f67a]/30 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-[#29f67a]/10">
                    <FiCloud className="w-4 h-4 text-[#29f67a]" />
                  </div>
                  <span className="text-xs font-bold text-[#29f67a] uppercase tracking-wider">SCALE</span>
                </div>
                <p className="text-slate-300 leading-relaxed text-sm">
                  If you're facing performance, scaling, or hosting challenges →{" "}
                  <span className="text-white font-semibold">IT Infrastructure & Cloud</span>
                </p>
              </div>

              {/* Digital Growth */}
              <div className="group p-8 rounded-2xl bg-gradient-to-br from-white/[0.03] to-transparent border border-white/10 hover:border-[#29f67a]/30 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-[#29f67a]/10">
                    <FiTrendingUp className="w-4 h-4 text-[#29f67a]" />
                  </div>
                  <span className="text-xs font-bold text-[#29f67a] uppercase tracking-wider">GROW</span>
                </div>
                <p className="text-slate-300 leading-relaxed text-sm">
                  If you're focused on growth, leads, or conversions →{" "}
                  <span className="text-white font-semibold">Digital Growth</span>
                </p>
              </div>
            </div>

            <p className="text-slate-500 text-sm text-center mt-8 font-light italic">
              In many cases, we support clients across multiple areas as their needs evolve.
            </p>
          </div>
        </motion.div>

        {/* ================================================================ */}
        {/* SECTION 4: HOW WE WORK */}
        {/* ================================================================ */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-32"
        >
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
                How We Approach Every Engagement
              </h2>
              <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-[#29f67a]/50 to-transparent mx-auto mb-6" />
              <p className="text-slate-400 text-lg leading-relaxed font-light">
                Regardless of the service, our approach remains consistent — focused on clarity, execution, and long-term scalability.
              </p>
            </div>

            <div className="space-y-4">
              {[
                "We start by understanding your business, not just your requirements",
                "We design solutions that are practical and maintainable",
                "We build with performance and scale in mind",
                "We optimise continuously based on real-world usage"
              ].map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.15 }}
                  viewport={{ once: true }}
                  className="group flex items-center gap-5 p-5 rounded-xl hover:bg-white/[0.02] transition-all border border-transparent hover:border-white/5"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full border border-[#29f67a]/30 flex items-center justify-center bg-[#29f67a]/5 group-hover:bg-[#29f67a]/20 transition-all">
                    <FiCheck className="w-4 h-4 text-[#29f67a]" />
                  </div>
                  <p className="text-slate-300 text-base md:text-lg font-light">{step}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ================================================================ */}
        {/* SECTION 5: FINAL CTA */}
        {/* ================================================================ */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-[3rem] bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 p-12 md:p-24 overflow-hidden text-center"
        >
          <div className="absolute inset-0 bg-[#29f67a]/5 blur-3xl rounded-full translate-y-1/2" />

          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tighter">
            Not Sure Where to Start?
          </h2>

          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            If you're unsure which service fits your needs, we can help you figure it out quickly.
          </p>

          <button
            onClick={() => navigate("/contact")}
            className="group relative inline-flex items-center gap-4 bg-[#29f67a] text-black px-10 py-5 rounded-full font-black uppercase text-sm tracking-widest hover:scale-105 active:scale-95 transition-all shadow-[0_20px_40px_-10px_rgba(41,246,122,0.3)] mx-auto"
          >
            <FiMessageCircle className="w-4 h-4" />
            Talk to Us
            <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
          </button>
        </motion.div>
      </div>
    </div>
  );
}


export default Services;
export { ServicesMenu };