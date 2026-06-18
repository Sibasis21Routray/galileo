import { motion } from "framer-motion";
import { FiHexagon, FiArrowRight } from "react-icons/fi";

const Workflow = () => {
  const workflowSteps = [
    { id: "01", title: "STRATEGY", desc: "Precision planning & Discovery" },
    { id: "02", title: "DESIGN", desc: "Visual architecture" },
    { id: "03", title: "DEVELOP", desc: "Technical implementation" },
    { id: "04", title: "TEST", desc: "Stress-testing & QA" },
    { id: "05", title: "DELIVER", desc: "Global deployment" }
  ];

  return (
    <section className="relative py-24 bg-[#050505] overflow-hidden px-6 md:px-12 lg:px-24 border-t border-white/5">
      
      {/* Background Section Label (Watermark) */}
      <div className="absolute top-10 left-10 pointer-events-none select-none">
        <h3 className="text-[12vw] font-black text-white/[0.02] leading-none uppercase">Process</h3>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HEADER: Technical & Minimal */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-2 h-2 bg-[#29f67a] animate-pulse rounded-full" />
            <span className="text-[#29f67a] font-mono text-[10px] uppercase tracking-[0.5em]">Standard Operating Protocol</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">
            FROM INSIGHT TO <span className="text-gray-500 italic font-light">IMPACT.</span>
          </h2>
        </div>

        {/* HORIZONTAL STEP ENGINE */}
        <div className="relative flex flex-col lg:flex-row justify-between items-start gap-4 lg:gap-0">
          
          {/* Connecting Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-[22px] left-0 w-full h-[1px] bg-gradient-to-r from-[#29f67a]/50 via-white/10 to-transparent z-0" />

          {workflowSteps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative z-10 w-full lg:w-[18%] group"
            >
              {/* The "Node" */}
              <div className="flex items-center lg:flex-col lg:items-start gap-4">
                
                {/* Visual Indicator */}
                <div className="relative flex items-center justify-center">
                  <div className="w-11 h-11 rounded-sm bg-black border border-white/20 flex items-center justify-center group-hover:border-[#29f67a] transition-colors duration-500">
                    <span className="text-[10px] font-mono text-gray-500 group-hover:text-[#29f67a]">{step.id}</span>
                  </div>
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-[#29f67a]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Text Content */}
                <div className="lg:mt-6">
                  <h4 className="text-white font-bold text-sm tracking-widest uppercase mb-1 flex items-center gap-2">
                    {step.title}
                    <FiArrowRight className="text-[#29f67a] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-xs" />
                  </h4>
                  <p className="text-gray-500 text-xs font-light leading-relaxed max-w-[150px]">
                    {step.desc}
                  </p>
                </div>
              </div>

              {/* Mobile Connector */}
              <div className="lg:hidden ml-[21px] h-8 w-[1px] bg-white/10 my-1" />
            </motion.div>
          ))}
        </div>

       

      </div>
    </section>
  );
};

export default Workflow;