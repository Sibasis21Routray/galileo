import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { 
  FiCode, FiPackage, FiCpu, FiTool, FiMonitor, FiServer, 
  FiSmartphone, FiDatabase, FiCloud, FiPenTool, FiBox, 
  FiGitBranch, FiShield, FiTarget, FiTrendingUp, FiBarChart2,
  FiPieChart, FiSearch, FiSend, FiShare2, FiSliders, FiUsers,
  FiArrowRight, FiCheckCircle, FiActivity, FiLayers, FiZap,
  FiCheck, FiStar, FiGrid, FiList, FiAward
} from "react-icons/fi";

const iconMap = {
  FiCode, FiPackage, FiCpu, FiTool, FiMonitor, FiServer, 
  FiSmartphone, FiDatabase, FiCloud, FiPenTool, FiBox, 
  FiGitBranch, FiShield, FiTarget, FiTrendingUp, FiBarChart2,
  FiPieChart, FiSearch, FiSend, FiShare2, FiSliders, FiUsers,
  FiActivity,
};

const CommonServicePage = ({ data }) => {
  const navigate = useNavigate();
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.3 });

  const getIcon = (iconName, className = "w-6 h-6") => {
    const IconComponent = iconMap[iconName];
    return IconComponent ? <IconComponent className={className} /> : <FiLayers className={className} />;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="min-h-screen bg-[#050505] text-slate-200 selection:bg-[#29f67a]/30 selection:text-[#29f67a]">
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-1/2 transform -translate-x-1/2 w-[500px] h-[500px] bg-[#29f67a]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] left-1/2 transform -translate-x-1/2 w-[400px] h-[400px] bg-emerald-900/10 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-50 contrast-150" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24">
        {/* Header Section */}
        <header ref={headerRef} className="text-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isHeaderInView ? { opacity: 1, x: 0 } : {}}
            className="flex items-center justify-center gap-3 text-[#29f67a] font-bold tracking-[0.3em] uppercase text-xs mb-6"
          >
            <span className="w-8 h-[1px] bg-[#29f67a]" />
            Service Excellence
            <span className="w-8 h-[1px] bg-[#29f67a]" />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.9]"
          >
            {data.title}<span className="text-[#29f67a]">.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto"
          >
            {data.intro}
          </motion.p>
        </header>

        {/* Sections */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="space-y-40"
        >
          {data.sections && data.sections.map((section, sectionIdx) => {
            const isServiceSection = section.title.includes("WHAT WE BUILD") || section.title.includes("SERVICES") || section.title.includes("SUB-SERVICES");
            const isOutcomeSection = section.title.includes("ADVANCED") || section.title.includes("OUTCOME") || section.title.includes("CAPABILITIES");
            const isTechSection = section.title.includes("TECHNOLOGY");
            
            return (
            <motion.section key={section.id || sectionIdx} variants={itemVariants} className="relative">
              {/* Section Branding */}
              <div className="text-center mb-12">
                <div className="max-w-2xl mx-auto">
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-[#29f67a]/10 border border-[#29f67a]/20">
                      {getIcon(section.icon, "w-6 h-6 text-[#29f67a]")}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                      {section.title}
                    </h2>
                  </div>
                  {section.description && (
                    <p className="text-slate-400 leading-relaxed">{section.description}</p>
                  )}
                </div>
                <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-[#29f67a]/50 to-transparent mx-auto mt-6" />
              </div>

              {/* SUB-SERVICES / WHAT WE BUILD - Card Layout with Images */}
              {section.items && section.items.length > 0 && isServiceSection && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {section.items.map((item, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ y: -8, scale: 1.02 }}
                      className="group relative p-6 rounded-2xl bg-gradient-to-br from-white/[0.03] to-transparent border border-white/10 hover:border-[#29f67a]/50 transition-all duration-300 cursor-pointer overflow-hidden"
                      onClick={() => item.link && navigate(item.link)}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-[#29f67a]/0 via-[#29f67a]/5 to-[#29f67a]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <div className="relative z-10">
                        {/* Image instead of icon */}
                        {item.image && (
                          <div className="mb-4 w-16 h-16 rounded-xl bg-[#29f67a]/10 flex items-center justify-center group-hover:bg-[#29f67a]/20 transition-all p-3">
                            <img 
                              src={item.image} 
                              alt={item.name} 
                              className="w-full h-full object-contain transition-transform group-hover:scale-110"
                              loading="lazy"
                            />
                          </div>
                        )}
                        
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#29f67a] transition-colors">
                          {item.name}
                        </h3>
                        
                        {item.description && (
                          <p className="text-slate-400 text-sm leading-relaxed">
                            {item.description}
                          </p>
                        )}
                        
                        <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-[#29f67a] opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
                          Learn More <FiArrowRight className="w-3 h-3" />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}

              {/* OUTCOMES / ADVANCED CAPABILITIES - Bullet Points Layout (No Icons) */}
              {section.items && section.items.length > 0 && isOutcomeSection && (
                <div className="max-w-4xl mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {section.items.map((item, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{ x: 5 }}
                        className="group cursor-pointer p-4 rounded-xl hover:bg-white/[0.02] transition-all"
                        onClick={() => item.link && navigate(item.link)}
                      >
                        <div className="flex items-start gap-3">
                          <div className="mt-1 w-2 h-2 rounded-full bg-[#29f67a] group-hover:scale-150 transition-transform" />
                          <div>
                            <h3 className="text-lg font-semibold text-white group-hover:text-[#29f67a] transition-colors mb-1">
                              {item.name}
                            </h3>
                            {item.description && (
                              <p className="text-slate-400 text-sm leading-relaxed">
                                {item.description}
                              </p>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* OTHER SECTIONS - No Icons */}
              {section.items && section.items.length > 0 && 
               !isServiceSection && !isOutcomeSection && !isTechSection && (
                <div className={sectionIdx % 2 === 0 ? 
                  "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" : 
                  "max-w-3xl mx-auto space-y-4"
                }>
                  {section.items.map((item, idx) => (
                    sectionIdx % 2 === 0 ? (
                      <motion.div
                        key={idx}
                        whileHover={{ y: -5 }}
                        className="group relative p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#29f67a]/40 transition-all cursor-pointer text-center"
                        onClick={() => item.link && navigate(item.link)}
                      >
                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#29f67a] transition-colors">
                          {item.name}
                        </h3>
                        {item.description && (
                          <p className="text-slate-400 text-xs leading-relaxed">
                            {item.description}
                          </p>
                        )}
                      </motion.div>
                    ) : (
                      <motion.div
                        key={idx}
                        whileHover={{ x: 5 }}
                        className="group cursor-pointer flex items-start gap-3 p-3 rounded-lg hover:bg-white/[0.02] transition-all"
                        onClick={() => item.link && navigate(item.link)}
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-[#29f67a] mt-2 group-hover:scale-150 transition-transform" />
                        <div>
                          <span className="text-white group-hover:text-[#29f67a] transition-colors font-medium">
                            {item.name}
                          </span>
                          {item.description && (
                            <p className="text-slate-500 text-xs mt-1">{item.description}</p>
                          )}
                        </div>
                      </motion.div>
                    )
                  ))}
                </div>
              )}

          {/* TECHNOLOGY STACK Section */}
{/* TECHNOLOGY STACK Section */}
{section.categories && section.categories.length > 0 && (
  <div className="mt-20 w-full px-6 lg:px-16">
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {section.categories.map((category, catIdx) => (
        
        <div
          key={catIdx}
          className="
            group
            border border-white/5 rounded-xl p-6
            bg-white/[0.02]
            hover:bg-white/[0.03] hover:border-[#29f67a]/20
            transition-all duration-300
          "
        >
          {/* Header */}
          <div className="mb-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-widest">
              {category.name}
            </h3>

            <div className="mt-2 h-[2px] w-8 bg-[#29f67a]/40 group-hover:w-12 transition-all duration-300" />
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {category.technologies?.map((tech, techIdx) => (
              <motion.div
                key={techIdx}
                whileHover={{ scale: 1.05 }}
                className="
                  flex items-center gap-2 px-3 py-1.5 rounded-md
                  bg-white/[0.02] border border-white/5
                  hover:border-[#29f67a]/30 hover:bg-[#29f67a]/[0.05]
                  transition-all duration-200 group
                "
              >
                {tech.image && (
                  <img
                    src={tech.image}
                    alt={tech.name}
                    className="
                      w-4 h-4 object-contain grayscale opacity-70
                      group-hover:grayscale-0 group-hover:opacity-100
                      transition-all
                    "
                    loading="lazy"
                  />
                )}

                <span className="text-xs text-slate-300 group-hover:text-white">
                  {tech.name}
                </span>

                {tech.level && (
                  <div
                    className={`w-1.5 h-1.5 rounded-full ${
                      tech.level === "expert"
                        ? "bg-[#29f67a]"
                        : "bg-[#29f67a]/30"
                    }`}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>

  </div>
)}
            </motion.section>
          )})}
        </motion.div>

        {/* Stats Section */}
        {data.stats && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-40 grid grid-cols-2 md:grid-cols-4 gap-6 py-12 px-8 rounded-3xl"
            style={{
              background: "linear-gradient(135deg, rgba(41, 246, 122, 0.05) 0%, rgba(0, 0, 0, 0.4) 100%)",
              border: "1px solid rgba(41, 246, 122, 0.1)",
            }}
          >
            {data.stats.map((stat, idx) => (
              <motion.div
                key={idx}
                className="text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl md:text-4xl font-bold mb-2" style={{ color: "#29f67a" }}>
                  {stat.value}
                </div>
                <div className="text-gray-400 text-xs uppercase tracking-wide">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-40 relative rounded-[3rem] bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 p-12 md:p-24 overflow-hidden text-center"
        >
          <div className="absolute inset-0 bg-[#29f67a]/5 blur-3xl rounded-full translate-y-1/2" />
          
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">
            Ready to <span className="text-[#29f67a]">evolve</span>?
          </h2>
          
          <button
            onClick={() => navigate("/contact")}
            className="group relative inline-flex items-center gap-4 bg-[#29f67a] text-black px-10 py-5 rounded-full font-black uppercase text-sm tracking-widest hover:scale-105 active:scale-95 transition-all shadow-[0_20px_40px_-10px_rgba(41,246,122,0.3)] mx-auto"
          >
            Contact Us
            <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
          </button>
          
          <div className="mt-12 flex justify-center gap-8 text-[10px] font-bold text-slate-500 tracking-[0.2em] flex-wrap">
            <span className="flex items-center gap-2"><FiCheckCircle className="text-[#29f67a]" /> ENTERPRISE READY</span>
            <span className="flex items-center gap-2"><FiCheckCircle className="text-[#29f67a]" /> EXPERT TEAM</span>
            <span className="flex items-center gap-2"><FiCheckCircle className="text-[#29f67a]" /> 24/7 SUPPORT</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CommonServicePage;