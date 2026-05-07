import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import {
  FaCode,
  FaCloud,
  FaShieldAlt,
  FaChartLine,
  FaMobile,
  FaDatabase,
  FaRobot,
  FaSearch,
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";


import { BrainCircuit, Check, CircleSmall, Megaphone, MegaphoneIcon } from "lucide-react";
import { 
  FiCode, FiSmartphone, FiTrendingUp, FiCloud, FiServer, 
  FiGlobe, FiLayout, FiLink, FiCpu, FiBarChart2, FiTarget,
  FiDatabase, FiShield, FiZap, FiEye, FiUsers,
  FiDollarSign, FiFlag, FiSettings
} from "react-icons/fi";

export const servicesData = [
  {
    title: "Software Development",
    icon: <FiCode className="text-[#29f67a] text-2xl" />,
    path: "/services/software-development",
    items: [
      { title: "Web Applications" },
      { title: "Mobile Applications" },
      { title: "SaaS Platforms" },
      { title: "API & Integration" },
      { title: "Custom Systems & Dashboards" }
    ],
  },
  {
    title: "IT Infrastructure & Cloud",
    icon: <FiCloud className="text-[#29f67a] text-2xl" />,
    path: "/services/it-infrastructure-cloud",
    items: [
      { title: "Cloud Architecture" },
      { title: "Server Management" },
      { title: "Performance Optimisation" },
      { title: "Security & Monitoring" },
      { title: "DevOps Pipelines" }
    ],
  },
  {
    title: "Digital Growth",
    icon: <FiTrendingUp className="text-[#29f67a] text-2xl" />,
    path: "/services/digital-growth",
    items: [
      { title: "Performance Marketing" },
      { title: "Conversion Optimisation" },
      { title: "Analytics & Tracking" },
      { title: "Funnels & Landing Pages" },
      { title: "SEO & Content Strategy" }
    ],
  },
];

const FeatureCard = ({ title, icon, path, items, delay }) => {
  const ref = useRef(null);
  const inView = useInView(ref, {
    threshold: 0.2,
    once: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: delay * 0.1,
        ease: "easeOut",
      }}
      whileHover={{ 
        y: -8, 
        scale: 1.02,
        transition: { duration: 0.15, ease: "easeOut" } // Faster scale animation
      }}
      className="group relative bg-gradient-to-br from-black to-gray-900 rounded-2xl border border-[#29f67a]/10 hover:border-[#29f67a]/50 transition-all duration-300 p-6 md:p-7 flex flex-col h-full overflow-hidden cursor-pointer"
    >
      {/* Animated Gradient Overlay - Same as cards */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#29f67a]/0 via-[#29f67a]/5 to-[#29f67a]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Icon Section */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : {}}
        transition={{ delay: delay * 0.1 + 0.1, type: "spring", stiffness: 200 }}
        className="mb-5 relative z-10"
      >
        <div className="w-14 h-14 flex items-center justify-center bg-[#29f67a]/10 rounded-xl group-hover:bg-[#29f67a]/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
          {icon}
        </div>
      </motion.div>

      {/* Title */}
      <motion.h3
        className="text-xl md:text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-[#29f67a] transition-colors duration-300 relative z-10"
        initial={{ opacity: 0, x: -10 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: delay * 0.1 + 0.15 }}
      >
        {title}
      </motion.h3>

      {/* Sub-items List */}
      <motion.ul
        className="space-y-2 mb-5 flex-grow relative z-10"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: delay * 0.1 + 0.2 }}
      >
        {items.map((item, idx) => (
          <li key={idx} className="flex items-start gap-2 text-sm text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
            <Check className="w-4 h-4 text-[#29f67a] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-200" />
            <span className="leading-relaxed">{item.title}</span>
          </li>
        ))}
      </motion.ul>

      {/* Link */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: delay * 0.1 + 0.25 }}
        className="relative z-10"
      >
        <Link to={path}>
          <motion.div
            className="inline-flex items-center gap-2 text-[#29f67a] text-sm font-medium group-hover:gap-3 transition-all duration-300"
            whileHover={{ x: 4 }}
          >
            <span>Explore Services</span>
            <FaArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
          </motion.div>
        </Link>
      </motion.div>

      {/* Animated Border Glow - Enhanced */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        initial={{ opacity: 0 }}
        whileHover={{
          opacity: 1,
          boxShadow: "0 0 32px rgba(41, 246, 122, 0.15)",
          transition: { duration: 0.2 },
        }}
      />
    </motion.div>
  );
};

const FeaturesSection = () => {
  return (
    <div className="py-16 md:py-24 bg-black relative overflow-hidden">
      {/* Background Pattern - Enhanced */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h80v80H0z' fill='none'/%3E%3Cpath d='M80 0v80H0V0h80zM15 15v50h50V15H15zm10 10h30v30H25V25zm5 5v20h20V30H30z' stroke='%2329f67a' stroke-width='0.4' fill='none'/%3E%3C/svg%3E")`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14 md:mb-20"
        >
          {/* Badge */}
        
<motion.h2
initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
  className="text-5xl md:text-6xl font-light text-white leading-tight mb-8">
                  Our <span className="text-[#29f67a] font-bold ">Capabilities</span>
                </motion.h2>
        

          <motion.p
            className="text-base text-gray-400 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            Highly proficient, propitious and cost-effective software solutions
            powered by innovative minds and cutting-edge technologies.
          </motion.p>
        </motion.div>

        {/* Features Grid - Larger Cards with 3 columns on desktop for better spacing */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {servicesData.map((service, index) => (
            <FeatureCard
              key={index}
              title={service.title}
              icon={service.icon}
              path={service.path}
              items={service.items}
              delay={index}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default FeaturesSection;