import { motion, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { servicesData } from "../src/data/servicesData";
import { FiArrowRight, FiCommand } from "react-icons/fi";

const ServicesPage = ({ onClose }) => {
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

  // Animation variants updated for a "Technical Deployment" feel
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
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={containerVariants}
        className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[95vw] max-w-6xl bg-[#0c0c0c]/90 backdrop-blur-xl rounded-2xl z-50 border border-white/10 p-8 origin-top shadow-[0_20px_80px_rgba(0,0,0,0.8)]"
      >
        {/* Decorative Grid Background for Menu */}
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: `radial-gradient(#29f67a 1px, transparent 1px)`, backgroundSize: '20px 20px' }} />

        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
          {servicesData.map((service, idx) => (
            <motion.div
              key={idx}
              className="group"
            >
              {/* Main Service Heading */}
              <motion.div
                onClick={() => handleNavigation(service.path)}
                className="flex items-center gap-4 mb-5 cursor-pointer group/title"
              >
               
                <div>
                  <h3 className="text-white font-bold text-base tracking-tight group-hover/title:text-[#29f67a] transition-colors uppercase tracking-widest">
                    {service.title}
                  </h3>
                  <div className="h-[1px] w-0 bg-[#29f67a] group-hover/title:w-full transition-all duration-500 mt-1" />
                </div>
              </motion.div>

              {/* Sub-items List */}
              <ul className="space-y-3 border-l border-white/5 ml-6">
                {service.items.map((sub, i) => (
                  <motion.li
                    key={i}
                    variants={listItemVariants}
                    whileHover="hover"
                    className="text-gray-400 cursor-pointer flex items-center group/item pl-4"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNavigationToSubHeadings(service.path, service.id);
                    }}
                  >
                    <span className="text-xs font-mono opacity-0 group-hover/item:opacity-100 transition-opacity mr-2 text-[#29f67a]">
                      &gt;
                    </span>
                    <span className="text-[13px] font-medium tracking-tight whitespace-nowrap">
                      {sub.title}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/** Global Action Footer */}
        <motion.div
          className="relative z-10 mt-10 pt-6 border-t border-white/5 flex justify-between items-center"
        >
         

          <motion.div
            whileHover={{ x: 5 }}
            onClick={() => {
              navigate("/contact");
              onClose();
            }}
            className="flex items-center gap-2 text-xs text-[#29f67a] font-bold cursor-pointer uppercase tracking-[0.2em] hover:brightness-125 transition-all"
          >
            Connect with Team <FiArrowRight />
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ServicesPage;