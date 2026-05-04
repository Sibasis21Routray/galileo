import { motion } from "framer-motion";
import { useState } from "react";
import { FiCheckCircle, FiArrowRight } from "react-icons/fi";

const FeatureSection = ({ productData }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          {/* Badge */}
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#29f67a]/30 mb-6"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#29f67a]" />
            <span className="text-[10px] font-mono tracking-wider text-[#29f67a] uppercase">
              Key Features
            </span>
          </motion.div> */}

          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {productData.heading}
          </motion.h2>

          <div className="w-16 h-0.5 bg-[#29f67a] mx-auto mb-6" />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto"
          >
            {productData.description}
          </motion.p>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {productData.features.map((feature, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.15, ease: "easeOut" } }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      viewport={{ once: true, margin: "-50px" }}
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
      className="group relative bg-black border border-gray-800 rounded-xl p-6 hover:border-[#29f67a]/50 transition-all duration-300 overflow-hidden cursor-pointer"
    >
      {/* Animated Gradient Overlay - Same as other cards */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#29f67a]/0 via-[#29f67a]/5 to-[#29f67a]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      {/* Enhanced Border Glow */}
      <motion.div
        className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#29f67a]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
      />

      {/* Radial Glow Effect */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 50% 0%, rgba(41, 246, 122, 0.15), transparent 70%)",
        }}
      />

      {/* Icon */}
      <motion.div
        className="w-14 h-14 rounded-xl border border-gray-800 flex items-center justify-center mb-5 group-hover:border-[#29f67a]/50 group-hover:bg-[#29f67a]/10 transition-all duration-200 relative z-10"
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 400, duration: 0.2 }}
      >
        <img 
          src={feature.icon} 
          alt={feature.title}
          className="w-8 h-8 object-contain group-hover:scale-110 transition-transform duration-200"
        />
      </motion.div>

      {/* Content */}
      <div className="flex-1 relative z-10">
        <motion.h3
          className="text-xl font-semibold text-white mb-2 group-hover:text-[#29f67a] transition-colors duration-300"
        >
          {feature.title}
        </motion.h3>

        <p className="text-gray-500 group-hover:text-gray-300 text-sm leading-relaxed mb-4 transition-colors duration-300">
          {feature.description}
        </p>

        {/* Optional: Feature highlight indicator - Enhanced */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "30px" }}
          transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
          className="h-0.5 bg-gradient-to-r from-[#29f67a] to-[#29f67a]/50 group-hover:w-full transition-all duration-300"
        />
      </div>

      {/* Decorative bottom line */}
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#29f67a] to-[#29f67a]/50"
        initial={{ width: "0%" }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />
    </motion.div>
  ))}
</div>

        {/* Bottom CTA (Optional) */}
        {productData.cta && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center mt-12"
          >
            <button className="inline-flex items-center gap-2 px-6 py-3 border border-[#29f67a]/30 text-[#29f67a] rounded-lg hover:bg-[#29f67a]/10 transition-all group">
              <span>{productData.cta.text}</span>
              <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default FeatureSection;