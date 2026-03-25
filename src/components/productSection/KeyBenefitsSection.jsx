import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { TiTick, TiArrowRight } from "react-icons/ti";
import { FiCheckCircle, FiArrowRight } from "react-icons/fi";


export const KeyBenefitsSection = ({ productData }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  // Handle image load
  useEffect(() => {
    const img = new Image();
    img.src = productData.image;
    img.onload = () => setIsImageLoaded(true);
  }, [productData.image]);

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#29f67a]/30 mb-6"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#29f67a]" />
            <span className="text-[10px] font-mono tracking-wider text-[#29f67a] uppercase">
              Why Choose Us
            </span>
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            User Benefits
          </motion.h2>

          <div className="w-16 h-0.5 bg-[#29f67a] mx-auto" />
        </motion.div>

        <div className="flex flex-col lg:flex-row justify-between items-stretch gap-12 lg:gap-16">
          {/* Left Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-1/2 flex flex-col justify-center relative"
          >
            <div className="max-w-lg mx-auto lg:mx-0 w-full">
              <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-6">
                Discover how our product can transform your daily routine with
                these powerful benefits. Each feature is carefully designed to
                enhance your experience.
              </p>

              {/* Stats or Highlights */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="border border-gray-800 rounded-lg p-4">
                  <div className="text-2xl font-bold text-[#29f67a] mb-1">98%</div>
                  <div className="text-xs text-gray-500">User Satisfaction</div>
                </div>
                <div className="border border-gray-800 rounded-lg p-4">
                  <div className="text-2xl font-bold text-[#29f67a] mb-1">24/7</div>
                  <div className="text-xs text-gray-500">Support Available</div>
                </div>
              </div>

              {/* Image Container */}
              <div className="rounded-xl overflow-hidden border border-gray-800">
                <img
                  src={productData.image || "/product/system.gif"}
                  alt="Product benefits"
                  className="w-full h-48 sm:h-56 object-cover"
                />
              </div>
            </div>
          </motion.div>

         
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <button className="inline-flex items-center gap-2 px-6 py-3 border border-[#29f67a]/30 text-[#29f67a] rounded-lg hover:bg-[#29f67a]/10 transition-all group">
            <span>Explore all benefits</span>
            <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};