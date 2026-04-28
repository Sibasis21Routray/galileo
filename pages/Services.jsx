import { motion, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { servicesData } from "../src/data/servicesData";
import { FiArrowRight, FiCommand } from "react-icons/fi";
const ServicesMenu = ({ onClose }) => {
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    onClose();
  };

  const handleNavigationToSubHeadings = (path, id) => {
    navigate(path, { state: { scrollTo: id } });
    onClose();
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.95, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 30,
        stiffness: 400,
        staggerChildren: 0.03,
      }
    },
    exit: {
      opacity: 0,
      scale: 0.98,
      transition: { duration: 0.2 }
    }
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -5 },
    visible: { opacity: 1, x: 0 },
    hover: { 
      x: 8, 
      color: "#29f67a",
      transition: { type: "spring", stiffness: 400 } 
    }
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
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 300,
      },
    },
  };

  return (
    <div className="min-h-screen bg-black py-20 px-4 md:px-8">
      {/* Animated Background Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[150px] opacity-20"
          style={{ backgroundColor: "#29f67a" }}
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -80, 60, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-[120px] opacity-10"
          style={{ backgroundColor: "#29f67a" }}
          animate={{
            x: [0, -70, 50, 0],
            y: [0, 90, -40, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            style={{ color: "#29f67a" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Our Services
          </motion.h1>

          <motion.div
            className="w-24 h-1 mx-auto mb-8 rounded-full"
            style={{ backgroundColor: "#29f67a" }}
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          />

          <motion.p
            className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            We structure our services around business outcomes, not just technologies.
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.2 },
              }}
              onClick={() => navigate(service.path)}
              className="group relative cursor-pointer"
            >
              <div
                className="relative bg-black/60 backdrop-blur-sm rounded-2xl p-8 h-full border transition-all duration-300 overflow-hidden"
                style={{
                  borderColor: "rgba(41, 246, 122, 0.2)",
                  boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.5)",
                }}
                whileHover={{
                  borderColor: "#29f67a",
                  boxShadow: "0 20px 40px -15px rgba(41, 246, 122, 0.2)",
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
                <h3
                  className="text-2xl font-bold mb-4 transition-colors duration-300"
                  style={{ color: "#ffffff" }}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Learn More Link */}
                <motion.div
                  className="flex items-center gap-2 text-sm font-semibold"
                  style={{ color: "#29f67a" }}
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                >
                  <span>Explore</span>
                  <FiArrowRight size={16} />
                </motion.div>

                {/* Decorative bottom line */}
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5"
                  style={{ backgroundColor: "#29f67a" }}
                  initial={{ width: "0%" }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer Note */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p
            className="text-sm inline-flex items-center gap-2 px-4 py-2 rounded-full"
            style={{
              color: "#29f67a",
                         }}
          >
            Select a Service to Explore

          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default Services;
export { ServicesMenu };