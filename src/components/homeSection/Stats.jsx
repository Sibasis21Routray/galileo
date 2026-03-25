import React from 'react';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import { InView } from 'react-intersection-observer';

function Stats() {
  const stats = [
    { value: 42, label: "Global Partners", suffix: "+" },
    { value: 128, label: "Systems Deployed", suffix: "" },
    { value: 99, label: "Success Rate", suffix: "%" },
    { value: "24/7", label: "Availability", suffix: "" }
  ];

  return (
    <section className="relative py-24 bg-black overflow-hidden border-y border-white/5">
      {/* Background Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.15]" 
        style={{ 
          backgroundImage: `linear-gradient(#29f67a 1px, transparent 1px), linear-gradient(90deg, #29f67a 1px, transparent 1px)`,
          backgroundSize: '40px 40px' 
        }}
      />
      
      {/* Radial Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10" />

      <InView threshold={0.3} triggerOnce>
        {({ inView, ref }) => (
          <div ref={ref} className="relative z-20 max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.1,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  className="flex flex-col items-center group"
                >
                  <div className="relative">
                    {/* Animated Ring on Hover */}
                    <div className="absolute -inset-4 border border-[#29f67a]/0 group-hover:border-[#29f67a]/20 rounded-full transition-all duration-700 scale-75 group-hover:scale-100" />
                    
                    <div className="text-5xl md:text-6xl font-bold tracking-tighter text-white mb-3">
                      {typeof stat.value === 'number' ? (
                        <div className="flex items-baseline justify-center">
                          <CountUp
                            end={inView ? stat.value : 0}
                            duration={3}
                            separator=","
                          />
                          <span className="text-[#29f67a] text-3xl ml-1">{stat.suffix}</span>
                        </div>
                      ) : (
                        <span className="text-white italic">{stat.value}</span>
                      )}
                    </div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, letterSpacing: "0.2em" }}
                    animate={inView ? { opacity: 1, letterSpacing: "0.1em" } : {}}
                    transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                    className="text-[#29f67a] font-mono text-xs uppercase font-medium tracking-widest"
                  >
                    {stat.label}
                  </motion.div>
                  
                  {/* Small underline detail */}
                  <div className="w-8 h-[2px] bg-white/10 mt-4 group-hover:w-12 group-hover:bg-[#29f67a] transition-all duration-500" />
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </InView>
    </section>
  );
}

export default Stats;