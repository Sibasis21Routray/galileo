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
  FaArrowRight 
} from "react-icons/fa";
import { Link } from "react-router-dom";

const features = [
  {
    icon: FaCode,
    title: "Software Development",
    description: "Custom web and mobile apps, APIs, SaaS platforms, UI/UX, and DevOps pipelines.",
    link: "/services/software-development",
    linkText: "Explore",
    category: "Development"
  },
  {
    icon: FaCloud,
    title: "Software Solutions",
    description: "Ready-to-deploy platforms for key business functions — fast, scalable, and reliable.",
    link: "/services/software-solutions",
    linkText: "Explore",
    category: "Solutions"
  },
  {
    icon: FaShieldAlt,
    title: "IT Services",
    description: "Cloud migration, cybersecurity, support, and infrastructure management.",
    link: "/services/it-services",
    linkText: "Explore",
    category: "Services"
  },
  {
    icon: FaChartLine,
    title: "Digital Marketing",
    description: "SEO, paid ads, content strategy, and growth campaigns that convert.",
    link: "/services/digital-marketing",
    linkText: "Explore",
    category: "Marketing"
  },
  {
    icon: FaMobile,
    title: "Mobile Development",
    description: "Native and cross-platform mobile apps for iOS and Android with seamless UX.",
    link: "/services/mobile-development",
    linkText: "Explore",
    category: "Development"
  },
  {
    icon: FaDatabase,
    title: "Data Analytics",
    description: "Data-driven insights, business intelligence, and predictive analytics solutions.",
    link: "/services/data-analytics",
    linkText: "Explore",
    category: "Analytics"
  },
  {
    icon: FaRobot,
    title: "AI & Automation",
    description: "Intelligent automation, machine learning models, and AI-powered solutions.",
    link: "/services/ai-automation",
    linkText: "Explore",
    category: "Innovation"
  },
  {
    icon: FaSearch,
    title: "SEO Optimization",
    description: "Boost visibility, drive organic traffic, and improve search rankings.",
    link: "/services/seo",
    linkText: "Explore",
    category: "Marketing"
  }
];

const FeatureCard = ({ icon: Icon, title, description, link, linkText, category, delay }) => {
  const ref = useRef(null);
  const inView = useInView(ref, {
    threshold: 0.3,
    once: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.5,
        delay: delay * 0.08,
        ease: "easeOut",
      }}
      whileHover={{
        y: -4,
        transition: { duration: 0.2 },
      }}
      className="group relative bg-gradient-to-br from-black to-gray-900 rounded-xl border border-[#29f67a]/10 hover:border-[#29f67a]/30 transition-all duration-300 p-5"
    >
      {/* Category Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: delay * 0.08 + 0.1 }}
        className="absolute top-3 right-3"
      >
        <span className="text-[10px] font-medium px-2 py-1 rounded-full bg-[#29f67a]/10 text-[#29f67a] border border-[#29f67a]/20">
          {category}
        </span>
      </motion.div>

      {/* Icon */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : {}}
        transition={{ delay: delay * 0.08 + 0.15, type: "spring", stiffness: 200 }}
        className="mb-4"
      >
        <div className="w-10 h-10 flex items-center justify-center bg-[#29f67a]/10 rounded-lg group-hover:bg-[#29f67a]/20 transition-all duration-300">
          <Icon className="w-5 h-5 text-[#29f67a]" />
        </div>
      </motion.div>

      {/* Title */}
      <motion.h3
        className="text-base font-semibold text-white mb-2"
        initial={{ opacity: 0, x: -10 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: delay * 0.08 + 0.2 }}
      >
        {title}
      </motion.h3>

      {/* Description */}
      <motion.p
        className="text-xs text-gray-400 leading-relaxed mb-3"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: delay * 0.08 + 0.25 }}
      >
        {description}
      </motion.p>

      {/* Link */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: delay * 0.08 + 0.3 }}
      >
        <Link to={link}>
          <motion.div
            className="inline-flex items-center gap-1.5 text-[#29f67a] text-xs font-medium group-hover:gap-2.5 transition-all duration-300"
            whileHover={{ x: 3 }}
          >
            <span>{linkText}</span>
            <FaArrowRight className="w-2.5 h-2.5" />
          </motion.div>
        </Link>
      </motion.div>

      {/* Animated Border Glow */}
      <motion.div
        className="absolute inset-0 rounded-xl pointer-events-none"
        initial={{ opacity: 0 }}
        whileHover={{
          opacity: 1,
          boxShadow: "0 0 20px rgba(41, 246, 122, 0.1)",
          transition: { duration: 0.3 }
        }}
      />
    </motion.div>
  );
};

const FeaturesSection = () => {
  return (
    <div className="py-12 md:py-16 bg-black">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h60v60H0z' fill='none'/%3E%3Cpath d='M60 0v60H0V0h60zM10 10v40h40V10H10zm5 5h30v30H15V15zm5 5v20h20V20H20z' stroke='%2329f67a' stroke-width='0.3' fill='none'/%3E%3C/svg%3E")`,
          backgroundSize: "30px 30px"
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#29f67a]/10 border border-[#29f67a]/20 mb-4"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#29f67a] animate-pulse" />
            <span className="text-xs font-medium text-[#29f67a] tracking-wide">
              OUR CAPABILITIES
            </span>
          </motion.div>

          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3"
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
            className="text-sm text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            Highly proficient, propitious and cost-effective software solutions
            powered by innovative minds and cutting-edge technologies.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              link={feature.link}
              linkText={feature.linkText}
              category={feature.category}
              delay={index}
            />
          ))}
        </motion.div>

        {/* View All Services Link */}
      
      </div>
    </div>
  );
};

export default FeaturesSection;