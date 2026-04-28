import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight, FiHexagon, FiZap, FiTarget } from "react-icons/fi";
import { useState } from "react";
import { InView } from "react-intersection-observer";

const MissionVision = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <InView threshold={0.15} onChange={(inView) => inView && setIsVisible(true)}>
      {({ ref }) => (
        <section
          ref={ref}
          className="bg-black min-h-screen py-24 px-6 md:px-12 lg:px-24 w-full overflow-hidden font-sans"
        >
          <div className="max-w-7xl mx-auto">
            {/* --- TOP SECTION: WHO WE ARE --- */}
            <motion.div
              variants={container}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              className="grid lg:grid-cols-2 gap-16 mb-32 items-center"
            >
              <div>
                <motion.div variants={item} className="flex items-center gap-3 mb-6">
                  <span className="h-px w-8 bg-[#29f67a]"></span>
                  <span className="text-[#29f67a] font-mono text-xs tracking-widest uppercase">
                    Discovery & Origins
                  </span>
                </motion.div>
                
                <motion.h2 variants={item} className="text-5xl md:text-7xl font-light text-white leading-tight mb-8">
                  Who We <span className="text-[#29f67a] font-medium italic">Are</span>
                </motion.h2>

                <motion.div variants={item} className="space-y-6 text-gray-400 text-lg font-light leading-relaxed">
                  <p className="text-white font-medium text-xl">
                    Bold Thinking. Better Tech. Real Results.
                  </p>
                  <p>
                    Galileo didn’t invent the stars — he just saw them with better tools. That’s what we do. 
                    We build the technology, systems, and strategies that help modern businesses operate 
                    smarter, scale faster, and stand out in a crowded digital universe.
                  </p>
                  <p>
                    From startups to global enterprises, we bring cross-functional teams, scientific precision, 
                    and a touch of defiance to every project. Whether we’re building a platform or solving a network issue 
                    — we’re all in.
                  </p>
                  <div className="flex gap-4 pt-4 text-[#29f67a] font-mono text-sm uppercase tracking-tighter">
                    <span>Curious minds</span>
                    <span className="opacity-30">/</span>
                    <span>Practical solutions</span>
                    <span className="opacity-30">/</span>
                    <span>Zero fluff</span>
                  </div>
                </motion.div>
              </div>

              {/* Decorative Tech Illustration/Card */}
              <motion.div 
                variants={item}
                className="relative aspect-square border border-[#29f67a]/20 rounded-full flex items-center justify-center"
              >
                <div className="absolute inset-0 bg-[#29f67a]/5 blur-[100px] rounded-full" />
                <div className="w-3/4 h-3/4 border border-[#29f67a]/10 rounded-full animate-[spin_20s_linear_infinite]" />
                <div className="absolute w-1/2 h-1/2 border-t-2 border-[#29f67a] rounded-full animate-[spin_10s_linear_infinite]" />
                <div className="text-center z-10">
                    <p className="text-6xl font-black text-white">2.0</p>
                    <p className="text-[#29f67a] font-mono text-xs tracking-[0.4em] uppercase">Galileo Standard</p>
                </div>
              </motion.div>
            </motion.div>

            {/* --- BOTTOM SECTION: WHY WORK WITH US --- */}
            <motion.div
              variants={container}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              className="border-t border-white/10 pt-20"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
                <div className="max-w-xl">
                    <motion.h3 variants={item} className="text-[#29f67a] font-mono text-xs tracking-widest uppercase mb-4">
                        The Edge
                    </motion.h3>
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
                </div>
                <motion.p variants={item} className="text-gray-500 max-w-sm text-sm">
                    Because we combine logic, creativity, and accountability with the precision Galileo would respect.
                </motion.p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-1">
                {[
                  { title: "Code with Context", desc: "We balance pure engineering with your business's unique market reality.", icon: <FiHexagon /> },
                  { title: "Simplify Complexity", desc: "We distill intricate network and platform problems into elegant, scalable solutions.", icon: <FiZap /> },
                  { title: "Refine & Optimize", desc: "We never settle for 'good enough.' Everything is tested and tuned for maximum output.", icon: <FiTarget /> },
                  { title: "Tailored Strategy", desc: "We don't do templates. Every line of code and every plan is built specifically for your goals.", icon: <FiArrowRight /> },
                ].map((feature, idx) => (
                  <motion.div
                    key={idx}
                    variants={item}
                    whileHover={{ backgroundColor: "rgba(41, 246, 122, 0.05)" }}
                    className="p-10 border border-white/5 bg-[#080808] transition-colors group"
                  >
                    <div className="text-[#29f67a] text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <h4 className="text-white text-xl font-medium mb-4">{feature.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Background Detail */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#29f67a]/[0.02] to-transparent pointer-events-none" />
        </section>
      )}
    </InView>
  );
};

export default MissionVision;