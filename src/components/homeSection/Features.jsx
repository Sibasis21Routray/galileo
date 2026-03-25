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

// Icons for the new structure (using react-icons as fallback)
import {
  FiPenTool,
  FiCode,
  FiSmartphone,
  FiCpu,
  FiActivity,
} from "react-icons/fi";

export const servicesData = [
  {
    title: "UI/UX Design",
    icon: <FiPenTool className="text-[#29f67a] text-2xl" />,
    path: "/services/ui-ux-design",
    items: [
      { title: "Wireframing & Prototyping" },
      { title: "User Interface Design" },
      { title: "User Experience Research" },
      { title: "Web & Mobile App Design" },
    ],
  },
  {
    title: "Web Development",
    icon: <FiCode className="text-[#29f67a] text-2xl" />,
    path: "/services/web-development",
    items: [
      { title: "Frontend & Backend Development" },
      { title: "Custom Web Applications" },
      { title: "E-commerce & CMS Integration" },
      { title: "API Development & Integration" },
    ],
  },
  {
    title: "Mobile App Development",
    icon: <FiSmartphone className="text-[#29f67a] text-2xl" />,
    path: "/services/mobile-app-development",
    items: [
      { title: "iOS & Android Development" },
      { title: "Flutter & React Native" },
      { title: "App Store Deployment" },
      { title: "UI/UX for Mobile" },
    ],
  },
  {
    title: "Blockchain Development",
    icon: <FiCpu className="text-[#29f67a] text-2xl" />,
    path: "/services/blockchain-development",
    items: [
      { title: "Smart Contract Development" },
      { title: "Ethereum, Polygon, BSC" },
      { title: "Wallet & Token Integration" },
      { title: "DApp & NFT Solutions" },
    ],
  },
  {
    title: "AI Solutions",
    icon: <FiActivity className="text-[#29f67a] text-2xl" />,
    path: "/services/ai-solutions",
    items: [
      { title: "AI Chatbots & Assistants" },
      { title: "Predictive Analytics" },
      { title: "Natural Language Processing" },
      { title: "Machine Learning Models" },
    ],
  },
  {
    title: "Digital Marketing",
    icon: <FiActivity className="text-[#29f67a] text-2xl" />,
    path: "/services/digital-marketing",
    items: [
      { title: "Search Engine Optimization (SEO)" },
      { title: "Paid Advertising (SEM & Social Ads)" },
      { title: "Social Media Strategy & Management" },
      { title: "Email Marketing & Automation" },
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
        y: -6,
        transition: { duration: 0.25 },
      }}
      className="group relative bg-gradient-to-br from-black to-gray-900 rounded-2xl border border-[#29f67a]/10 hover:border-[#29f67a]/30 transition-all duration-300 p-6 md:p-7 flex flex-col h-full"
    >
      {/* Icon Section - Larger */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : {}}
        transition={{ delay: delay * 0.1 + 0.1, type: "spring", stiffness: 200 }}
        className="mb-5"
      >
        <div className="w-14 h-14 flex items-center justify-center bg-[#29f67a]/10 rounded-xl group-hover:bg-[#29f67a]/20 transition-all duration-300">
          {icon}
        </div>
      </motion.div>

      {/* Title - Larger */}
      <motion.h3
        className="text-xl md:text-2xl font-bold text-white mb-3 tracking-tight"
        initial={{ opacity: 0, x: -10 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: delay * 0.1 + 0.15 }}
      >
        {title}
      </motion.h3>

      {/* Sub-items List */}
      <motion.ul
        className="space-y-2 mb-5 flex-grow"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: delay * 0.1 + 0.2 }}
      >
        {items.map((item, idx) => (
          <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
            <span className="text-[#29f67a] mt-1 text-xs">▹</span>
            <span className="leading-relaxed">{item.title}</span>
          </li>
        ))}
      </motion.ul>

      {/* Link - Larger */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: delay * 0.1 + 0.25 }}
      >
        <Link to={path}>
          <motion.div
            className="inline-flex items-center gap-2 text-[#29f67a] text-sm font-medium group-hover:gap-3 transition-all duration-300"
            whileHover={{ x: 4 }}
          >
            <span>Explore Services</span>
            <FaArrowRight className="w-3.5 h-3.5" />
          </motion.div>
        </Link>
      </motion.div>

      {/* Animated Border Glow */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        initial={{ opacity: 0 }}
        whileHover={{
          opacity: 1,
          boxShadow: "0 0 24px rgba(41, 246, 122, 0.12)",
          transition: { duration: 0.3 },
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
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#29f67a]/10 border border-[#29f67a]/20 mb-5"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#29f67a] animate-pulse" />
            <span className="text-xs font-medium text-[#29f67a] tracking-wider uppercase">
              Our Capabilities
            </span>
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-[#29f67a] to-[#29f67a]/70 bg-clip-text text-transparent">
              Galileo
            </span>
            <span className="text-white"> Differentiators</span>
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