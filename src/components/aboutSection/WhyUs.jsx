import { motion } from "framer-motion";
import { 
  FiZap, 
  FiCheckCircle, 
  FiTarget, 
  FiEye, 
  FiCompass,
  FiCode,
  FiCloud,
  FiShield,
  FiTrendingUp,
  FiUsers,
  FiArrowUpRight
} from "react-icons/fi";
import { FaRocket, FaChartLine, FaBrain } from "react-icons/fa";

const WhyChooseUs = () => {
  const coreStrengths = [
    "Visionary Solutions",
    "Data-Driven Discovery",
    "Challenge Convention",
    "Measurable Impact"
  ];

  const services = [
    { 
      icon: FiCode, 
      title: "Software Development", 
      description: "Custom web and mobile applications, APIs, SaaS platforms, UI/UX, and DevOps pipelines — designed to scale, evolve, and perform."
    },
    { 
      icon: FiCloud, 
      title: "Software Solutions", 
      description: "Ready-to-deploy platforms for key business functions — fast, scalable, and built to solve real-world problems from Day One."
    },
    { 
      icon: FiShield, 
      title: "IT Services", 
      description: "Cloud migration, cybersecurity, technical support, and infrastructure management — your silent force behind seamless operations."
    },
    { 
      icon: FiTrendingUp, 
      title: "Digital Marketing", 
      description: "SEO, paid ads, content strategy, and full-funnel growth campaigns that turn curiosity into clicks, and clicks into customers."
    }
  ];

  return (
    <section className="relative py-16 md:py-24 bg-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#29f67a]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#29f67a]/5 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h60v60H0z' fill='none'/%3E%3Cpath d='M60 0v60H0V0h60zM10 10v40h40V10H10zm5 5h30v30H15V15zm5 5v20h20V20H20z' stroke='%2329f67a' stroke-width='0.3' fill='none'/%3E%3C/svg%3E")`,
        backgroundSize: "40px 40px"
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
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
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#29f67a]/10 border border-[#29f67a]/20 mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-[#29f67a] animate-pulse" />
            <span className="text-xs font-medium text-[#29f67a] tracking-wider uppercase">
              Why Choose Us
            </span>
          </motion.div>

          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-[#29f67a] to-[#29f67a]/70 bg-clip-text text-transparent">
              Galileo
            </span>
            <span className="text-white"> Ventures</span>
          </motion.h2>

          <div className="w-24 h-1 bg-gradient-to-r from-[#29f67a] to-transparent mx-auto mb-6" />
          
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Named after the legendary astronomer who dared to see the world differently — 
            we're driven by discovery, powered by data, and unafraid to challenge convention.
          </p>
        </motion.div>

        <section className="relative py-24 bg-black overflow-hidden px-6 md:px-12 lg:px-24">
      {/* 1. Subtle Background Texture */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#29f67a 0.5px, transparent 0.5px)`, backgroundSize: '24px 24px' }} />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-start">
        
        {/* LEFT SIDE: The Label & Icon */}
        <motion.div 
          className="lg:col-span-4 flex flex-col gap-6"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-sm border border-[#29f67a]/30 flex items-center justify-center bg-[#29f67a]/5">
              <FiCompass className="text-[#29f67a] text-xl" />
            </div>
            <span className="text-[#29f67a] font-mono text-[10px] uppercase tracking-[0.5em]">Identity // 01</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter leading-none">
            SEEING THINGS <br />
            <span className="text-gray-600 italic">DIFFERENTLY.</span>
          </h2>

          <div className="hidden lg:block h-32 w-[1px] bg-gradient-to-b from-[#29f67a] to-transparent ml-5" />
        </motion.div>

        {/* RIGHT SIDE: The Narrative */}
        <motion.div 
          className="lg:col-span-8 space-y-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="space-y-6">
            <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed">
              At <span className="text-white font-medium">Galileo Ventures</span>, we take our name—and our mindset—from the 17th-century astronomer who dared to challenge convention. Like him, we are driven by discovery and powered by data.
            </p>
            
            <p className="text-gray-500 text-lg font-light leading-relaxed">
              We are a modern technology firm built for forward-thinking brands. Through bespoke software, mission-critical infrastructure, and data-driven marketing, we provide the lens for businesses to navigate the modern digital universe.
            </p>
            <p className="text-[#29f67a] text-lg md:text-xl font-medium tracking-tight italic">
              "The next big thing isn’t a trend — it’s a trajectory. We’re here to help you chart it."
            </p>
          </div>

         

          {/* Action Link */}
          <motion.button 
            whileHover={{ x: 10 }}
            className="flex items-center gap-3 text-white font-mono text-xs uppercase tracking-[0.3em] group"
          >
            Explore our approach 
            <FiArrowUpRight className="text-[#29f67a] group-hover:rotate-45 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>

        {/* Our Approach & Mission/Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          {/* Approach */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-[#29f67a]/20 p-6 md:p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <FiCompass className="w-6 h-6 text-[#29f67a]" />
              <h3 className="text-xl font-bold text-white">Our Approach</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              We believe in seeing before building, thinking before scaling, and measuring before boasting. 
              Every engagement begins with deep discovery — understanding your goals, users, and systems — 
              so we can deliver solutions with clarity, purpose, and measurable impact.
            </p>
            <div className="mt-4 pt-4 border-t border-[#29f67a]/10">
              <p className="text-[#29f67a] font-medium text-sm">
                We're not just problem-solvers. We're pathfinders.
              </p>
              <p className="text-gray-400 text-xs mt-1">
                Guided by insight, driven by design, and executed with precision.
              </p>
            </div>
          </motion.div>

          {/* Mission & Vision */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {/* Mission */}
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-[#29f67a]/20 p-6">
              <div className="flex items-center gap-3 mb-3">
                <FiTarget className="w-5 h-5 text-[#29f67a]" />
                <h3 className="text-lg font-bold text-white">Our Mission</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                To deliver visionary solutions and exceptional service for our clients — while creating a thriving, 
                curious, and collaborative environment for the people behind the magic.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-[#29f67a]/20 p-6">
              <div className="flex items-center gap-3 mb-3">
                <FiEye className="w-5 h-5 text-[#29f67a]" />
                <h3 className="text-lg font-bold text-white">Our Vision</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                To be a bellwether in technology and digital marketing — a force of innovation that inspires awe, 
                elevates standards, and redefines what's possible for our industry and the communities we serve.
              </p>
            </div>
          </motion.div>
        </div>

        {/* What We Do - Services Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">What We Do</h3>
            <p className="text-gray-400">Comprehensive solutions for modern businesses</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -3 }}
                className="bg-gradient-to-br from-gray-900 to-black rounded-xl border border-[#29f67a]/20 p-5 hover:border-[#29f67a]/40 transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#29f67a]/10 flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-5 h-5 text-[#29f67a]" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-white mb-1">{service.title}</h4>
                    <p className="text-gray-400 text-xs leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Core Strengths Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-[#29f67a]/10"
        >
          <div className="flex flex-wrap justify-center gap-6">
            {coreStrengths.map((strength, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#29f67a]/10 border border-[#29f67a]/20"
              >
                <FiCheckCircle className="w-4 h-4 text-[#29f67a]" />
                <span className="text-sm text-gray-300">{strength}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;