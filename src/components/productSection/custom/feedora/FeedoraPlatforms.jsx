import { motion } from "framer-motion";
import { useState } from "react";

const PlatformCard = ({ platform, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const themeColor = "#29f67a";

  return (
    <motion.div
      className="relative rounded-lg border shadow-sm "
      style={{ 
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        borderColor: isHovered ? themeColor : "rgba(41, 246, 122, 0.2)",
        backdropFilter: "blur(10px)",
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{
        y: -3,
        scale: 1.02,
        transition: { duration: 0.2 },
      }}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Content */}
      <div className="relative p-6 h-full flex items-center">
        <div className="flex-1 p-2 pt-3 pb-3">
          <h3 
            className="text-2xl font-semibold"
            style={{ color: isHovered ? themeColor : "#ffffff" }}
          >
            {platform.name}
          </h3>
          <motion.p
            className="text-md lg:text-xl mt-5 leading-tight"
            style={{ color: "#d1d5db" }}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
            viewport={{ once: true }}
            animate={{
              opacity: isHovered ? 1 : 0.85,
              y: isHovered ? 0 : 2,
            }}
          >
            {platform.description}
          </motion.p>
          {/* Accent bar - now using #29f67a */}
          <motion.div
            className="h-0.5 rounded-full mt-2"
            style={{ backgroundColor: themeColor }}
            initial={{ width: "15%" }}
            animate={{ width: isHovered ? "50%" : "15%" }}
            transition={{ duration: 0.2 }}
          />
        </div>
        <div className="flex-shrink-0 ml-3">
          <motion.div
            className="h-6 w-16 rounded-full flex items-center justify-center"
            animate={{
              scale: [1, 1.05, 1],
              transition: { repeat: Infinity, duration: 2, ease: "easeInOut" },
            }}
          >
            <img
              src={platform.logo}
              alt={`${platform.name} logo`}
              className="h-14 w-14 object-contain rounded-2xl"
              style={{
                filter: isHovered ? "drop-shadow(0 0 8px #29f67a)" : "none",
              }}
            />
          </motion.div>
        </div>
      </div>

      {/* Hover overlay effect - using theme color */}
      <motion.div
        className="absolute inset-0 rounded-lg"
        style={{ backgroundColor: themeColor }}
        animate={{ opacity: isHovered ? 0.1 : 0 }}
        transition={{ duration: 0.2 }}
      />
    </motion.div>
  );
};

const FeedoraPlatform = ({ platformIntegratins }) => {
  const themeColor = "#29f67a";

  return (
    <div className="w-full flex flex-col items-center px-3 mt-0 md:mt-30 bg-black ">
      {/* Animated background particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 rounded-full blur-[100px] opacity-20"
          style={{ backgroundColor: themeColor }}
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -50, 80, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-[120px] opacity-10"
          style={{ backgroundColor: themeColor }}
          animate={{
            x: [0, -80, 60, 0],
            y: [0, 70, -40, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>

      {/* Header section */}
      <motion.div
        className="text-center mb-16 max-w-3xl relative z-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.div
          className="mb-6"
          initial={{ scale: 0.9 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <span className="text-3xl md:text-4xl font-bold mb-4 inline-block">
            <span 
              className=""
            >
              Feedora : Integrate with Your Favorite Platforms
            </span>
          </span>
        </motion.div>
        
        {/* Decorative underline */}
        <motion.div
          className="h-[2px] mx-auto mt-4"
          style={{ backgroundColor: themeColor }}
          initial={{ width: 0 }}
          whileInView={{ width: "100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        />
      </motion.div>

      {/* Platform cards grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 w-full relative z-10 max-w-7xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        viewport={{ once: true }}
      >
        {platformIntegratins.map((platform, index) => (
          <PlatformCard key={platform.name} platform={platform} index={index} />
        ))}
      </motion.div>

      {/* Footer note */}
      <motion.div
        className="mt-16 text-center text-md relative z-10"
        style={{ color: themeColor }}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <motion.p
          animate={{
            textShadow: [
              "0 0 0px #29f67a",
              "0 0 10px #29f67a",
              "0 0 0px #29f67a",
            ],
          }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 4 }}
        >
          ✦ Unite your social world with Feedora ✦
        </motion.p>
      </motion.div>
    </div>
  );
};

export default FeedoraPlatform;