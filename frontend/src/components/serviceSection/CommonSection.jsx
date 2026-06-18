import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import {
  FiArrowRight,
  FiCpu,
  FiTarget,
  FiTrendingUp,
  FiZap,
  FiShield,
  FiGlobe,
  FiCheckCircle,
} from "react-icons/fi";

const CommonSection = ({ data }) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const targetId = location.state?.scrollTo;
    if (targetId) {
      const el = document.getElementById(targetId);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  if (!data || !data.section1 || !data.section2 || !data.section3) {
    return <div className="text-center text-red-500">Data not available</div>;
  }

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const steps = [
    {
      title: "Understand",
      icon: FiTarget,
      description: "Deep dive into requirements",
    },
    {
      title: "Plan",
      icon: FiTrendingUp,
      description: "Strategic technology selection",
    },
    { title: "Build", icon: FiZap, description: "Agile development process" },
    {
      title: "Test",
      icon: FiShield,
      description: "Rigorous quality assurance",
    },
    {
      title: "Support",
      icon: FiGlobe,
      description: "24/7 ongoing maintenance",
    },
  ];

  const path = location.pathname;

  // mapping service → product route
  const routeMap = {
    "/services/ui-ux-design": "/product/arthaProAi",
    "/services/web-development": "/product/naturopura",
    "/services/mobile-app-development": "/product/swiftrooms",
    "/services/blockchain-development": "/product/arthaProAi",
    "/services/ai-solutions": "/product/agrieye",
  };

  // check if button should be shown
  const shouldShowCTA = path !== "/services/digital-marketing";

  // get target route
  const targetRoute = routeMap[path];

  return (
    <div className="bg-black min-h-screen">
      {/* Section 1: Hero Section */}
      <section className="relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
              className="order-2 lg:order-1"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#29f67a]/30 mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-[#29f67a]" />
                <span className="text-[10px] font-mono tracking-wider text-[#29f67a] uppercase">
                  Featured Solution
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                {data.section1.title}
              </h1>

              <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8">
                {data.section1.description}
              </p>

              {data.section1.cta && shouldShowCTA && targetRoute && (
                <motion.button
                  whileHover={{ x: 5 }}
                  onClick={() => navigate(targetRoute)}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#29f67a] text-black font-medium rounded-lg hover:bg-[#29f67a]/90 transition-all"
                >
                  <span>{data.section1.cta}</span>
                  <FiArrowRight className="w-4 h-4" />
                </motion.button>
              )}
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInRight}
              className="order-1 lg:order-2"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-[#29f67a]/5 rounded-2xl blur-2xl" />
                <img
                  src={data.section1.image}
                  alt={data.section1.title}
                  className="relative rounded-2xl shadow-2xl w-full object-cover border border-gray-800"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2: Services Grid */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#29f67a]/30 mb-4">
              <span className="text-[10px] font-mono tracking-wider text-[#29f67a] uppercase">
                What We Offer
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              {data.section2.title}
            </h2>
            <div className="w-16 h-0.5 bg-[#29f67a] mx-auto" />
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {data.section2.services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -4 }}
                className="group border border-gray-800 rounded-xl p-6 hover:border-[#29f67a]/50 transition-all duration-300 bg-black"
              >
                <div className="w-10 h-10 rounded-lg border border-[#29f67a]/30 flex items-center justify-center mb-4 group-hover:border-[#29f67a] transition-all">
                  <FiCpu className="text-[#29f67a] text-lg" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#29f67a] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section 3: Tech Stack */}
      <section className="py-20 bg-black border-t border-gray-800 ">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#29f67a]/30 mb-4">
              <span className="text-[10px] font-mono tracking-wider text-[#29f67a] uppercase">
                Technology Stack
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              {data.section3.title}
            </h2>
            <div className="w-16 h-0.5 bg-[#29f67a] mx-auto" />
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-8 px-4"
          >
            {data.section3.technologies.map((tech, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.2, ease: "easeOut" },
                }}
                className="relative flex flex-col items-center justify-center p-6 w-32 h-32 md:w-36 md:h-36 border border-gray-800/60 rounded-2xl hover:border-[#29f67a]/40 transition-all duration-300 group bg-gradient-to-b from-gray-900/50 to-black overflow-hidden shadow-2xl"
              >
                {/* Background Glow Effect on Hover */}
                <div className="absolute inset-0 bg-[#29f67a]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

                {/* Subtle Top Light Line */}
                <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-[#29f67a]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative z-10 flex flex-col items-center">
                  <div className="relative mb-4 p-3 rounded-xl bg-white shadow-md">
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="h-10 w-10 object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  <span className="text-[13px] font-medium tracking-wide text-gray-400 group-hover:text-[#29f67a] group-hover:translate-y-1 transition-all duration-300">
                    {tech.name}
                  </span>
                </div>

                {/* Modern Bottom Accent */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#29f67a] scale-x-0 group-hover:scale-x-50 transition-transform duration-500 ease-in-out" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CommonSection;
