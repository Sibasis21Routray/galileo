import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { 
  FiCode, FiPackage, FiCpu, FiTool, FiMonitor, FiServer, 
  FiSmartphone, FiDatabase, FiCloud, FiPenTool, FiBox, 
  FiShield, FiTarget, FiTrendingUp, FiBarChart2,
  FiPieChart, FiSearch, FiSend, FiSliders, FiUsers,
  FiArrowRight, FiCheckCircle, FiActivity, FiLayers, FiZap,
  FiAward, FiCompass, FiGlobe
} from "react-icons/fi";

const iconMap = {
  FiCode, FiPackage, FiCpu, FiTool, FiMonitor, FiServer, 
  FiSmartphone, FiDatabase, FiCloud, FiPenTool, FiBox, 
  FiShield, FiTarget, FiTrendingUp, FiBarChart2,
  FiPieChart, FiSearch, FiSend, FiSliders, FiUsers,
  FiActivity, FiLayers, FiZap, FiAward, FiCompass, FiGlobe
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
        {/* Header Section with Cover Image */}
  <header ref={headerRef} className="relative pt-8 pb-28">
  <div className="max-w-7xl mx-auto px-6">
    
    {/* Top Navigation-Style Metadata */}
    <div className="flex justify-between items-end mb-12 border-b border-white/10 pb-6">
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={isHeaderInView ? { opacity: 1 } : {}}
        className="flex items-center gap-8"
      >
        <span className="text-[10px] font-mono text-[#29f67a] tracking-[0.4em] uppercase font-black">Intel_Brief_v4.0</span>
        <div className="hidden md:block h-3 w-[1px] bg-white/20" />
        <span className="hidden md:block text-[10px] font-mono text-slate-500 tracking-widest uppercase">Classification: Public</span>
      </motion.div> */}
      
      <div className="text-[10px] font-mono text-slate-500">
        PAGE_REF: {data.title.substring(0, 3).toUpperCase()}_01
      </div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
      
      {/* LEFT: TEXT STACK */}
      <div className="lg:col-span-7 pr-12">
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={isHeaderInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-black text-white leading-[0.8] tracking-tighter mb-12"
        >
          {data.title}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="max-w-xl"
        >
          <p className="text-xl md:text-3xl text-slate-300 font-light leading-tight mb-8">
            {data.intro}
          </p>
          
          {data.description && (
            <div className="flex gap-6">
              <div className="w-1 bg-[#29f67a] h-auto rounded-full" />
              <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-mono uppercase tracking-tight">
                //  {data.description}
              </p>
            </div>
          )}
        </motion.div>
      </div>

      {/* RIGHT: THE STACKED VISUAL */}
      {data.coverImage && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 1 }}
          className="lg:col-span-5 relative mt-12 lg:mt-3"
        >
          {/* Background Structural Lines */}
          <div className="absolute -top-12 -left-12 w-24 h-24 border-t border-l border-[#29f67a]/20" />
          
          <div className="relative group">
            <div className="absolute inset-0 bg-[#29f67a] translate-x-3 translate-y-3 -z-10 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-500 opacity-20" />
            
            <div className="relative  overflow-hidden border border-white/10 bg-black">
              <img 
                src={data.coverImage} 
                className="w-full h-full object-cover filter contrast-125 brightness-75 group-hover:brightness-100 transition-all duration-700" 
                alt="cover"
              />
              
              {/* Overlay Metadata */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                 <div className="flex justify-between items-end">
                    <div className="flex flex-col">
                       <span className="text-[10px] font-mono text-[#29f67a]">TARGET_ACQUIRED</span>
                       <span className="text-xs font-bold text-white uppercase tracking-widest">{data.title}</span>
                    </div>
                   
                 </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  </div>
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
            const isServiceSection = section.title.includes("SUB-SERVICES");
            const isAdvancedSection = section.title.includes("ADVANCED") || section.title.includes("CAPABILITIES");
            const isOutcomeSection = section.title.includes("OUTCOME");
            const isTechSection = section.title.includes("TECHNOLOGY") || section.title.includes("TECHNOLOGIES") || section.title.includes("CHANNELS") || section.title.includes("TOOLS") || section.title.includes("INFRASTRUCTURE");
            const isUseCaseSection = section.title.includes("USE CASE") || section.title.includes("APPROACH");
            
            return (
            <motion.section key={sectionIdx} variants={itemVariants} className="relative">
              {/* Section Branding with Cover Image */}
              <div className="text-center mb-12">
               
                <div className="max-w-2xl mx-auto">
                  <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                    {section.title}
                  </h2>
                  {section.description && (
                    <p className="text-slate-400 leading-relaxed max-w-2xl mx-auto mt-4">{section.description}</p>
                  )}
                </div>
                <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-[#29f67a]/50 to-transparent mx-auto mt-6" />
              </div>

              {/* SUB-SERVICES - Card Grid Layout */}
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
                        
                        
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#29f67a] transition-colors">
                          {item.name}
                        </h3>
                        
                        {item.description && (
                          <p className="text-slate-400 text-sm leading-relaxed mb-4">
                            {item.description}
                          </p>
                        )}
                        
                        {item.link && (
                          <div className="flex items-center gap-2 text-xs font-semibold text-[#29f67a] opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
                            Learn More <FiArrowRight className="w-3 h-3" />
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}

 {/* COMBINED SECTIONS LOGIC */}
<motion.section key={sectionIdx} variants={itemVariants} className="relative">
  

  {/* OUTCOMES SECTION */}
  {section.items && section.items.length > 0 && isOutcomeSection && (
    <div className="max-w-6xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
        {section.items.map((item, idx) => (
          <motion.div key={idx} className="group relative flex flex-col">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full border border-[#29f67a]/30 flex items-center justify-center bg-[#29f67a]/5 group-hover:bg-[#29f67a]/20 transition-all">
                <FiCheckCircle className="w-4 h-4 text-[#29f67a]" />
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-[#29f67a] transition-colors">{item.name}</h3>
            </div>
            <div className="pl-12">
              <p className="text-slate-400 text-sm leading-relaxed font-light border-b border-white/5 pb-6 group-hover:border-[#29f67a]/20 transition-colors">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )}

  {/* USE CASES / APPROACH SECTION */}
  {section.items && section.items.length > 0 && isUseCaseSection && (
    <div className="max-w-6xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16">
        {section.items.map((item, idx) => (
          <motion.div key={idx} className="group relative flex items-start gap-8">
            <div className="flex flex-col items-center flex-shrink-0">
              <span className="font-mono text-[#29f67a] text-xs font-black tracking-widest italic">
                //0{idx + 1}
              </span>
              <div className="w-px h-16 bg-gradient-to-b from-[#29f67a]/40 to-transparent mt-2" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-3 group-hover:text-[#29f67a] transition-colors">
                {item.name}
              </h3>
              <div className="relative pl-6 border-l border-white/10 group-hover:border-[#29f67a]/30 transition-colors duration-500">
                <p className="text-slate-400 text-sm md:text-base leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )}
</motion.section>
              {/* TECHNOLOGY STACK / INFRASTRUCTURE / CHANNELS / TOOLS Section */}
              {section.categories && section.categories.length > 0 && (
                <div className="w-full px-6 lg:px-16">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {section.categories.map((category, catIdx) => (
                      <div
                        key={catIdx}
                        className="group border border-white/5 rounded-xl p-6 bg-white/[0.02] hover:bg-white/[0.03] hover:border-[#29f67a]/20 transition-all duration-300"
                      >
                        <div className="mb-5">
                          <h3 className="text-sm font-semibold text-white uppercase tracking-widest">
                            {category.name}
                          </h3>
                          <div className="mt-2 h-[2px] w-8 bg-[#29f67a]/40 group-hover:w-12 transition-all duration-300" />
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {category.technologies?.map((tech, techIdx) => (
                            <motion.div
                              key={techIdx}
                              whileHover={{ scale: 1.05 }}
                              className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/[0.02] border border-white/5 hover:border-[#29f67a]/30 hover:bg-[#29f67a]/[0.05] transition-all duration-200 group"
                            >
                              {tech.image && (
                                <img
                                  src={tech.image}
                                  alt={tech.name}
                                  className="w-4 h-4 object-contain  opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all"
                                  loading="lazy"
                                />
                              )}
                              <span className="text-xs text-slate-300 group-hover:text-white">
                                {tech.name}
                              </span>
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