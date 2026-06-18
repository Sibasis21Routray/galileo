import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function IntroImage({ title, imageUrl }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  return (
    <section ref={ref} className="relative w-full bg-black overflow-hidden border-y border-white/5">
      
      {/* 1. Viewfinder Overlays (Corners) */}
      <div className="absolute inset-8 pointer-events-none z-20">
        <div className="absolute top-0 left-0 w-8 h-[1px] bg-[#29f67a]/40" />
        <div className="absolute top-0 left-0 w-[1px] h-8 bg-[#29f67a]/40" />
        <div className="absolute bottom-0 right-0 w-8 h-[1px] bg-[#29f67a]/40" />
        <div className="absolute bottom-0 right-0 w-[1px] h-8 bg-[#29f67a]/40" />
      </div>

      {/* 2. Text Content Layer */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="text-center"
        >
          {/* Subtle Prefix */}
          <motion.p 
            initial={{ y: 10, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-[#29f67a] font-mono text-[10px] uppercase tracking-[0.5em] mb-4"
          >
            Unlock A New Reality
          </motion.p>

          {/* Main Title with Letter Spacing Animation */}
          <motion.h2
            className="text-5xl md:text-8xl font-bold text-white tracking-tight uppercase italic"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            {title}
          </motion.h2>

         
        </motion.div>
      </div>

      {/* 3. Image Layer with Cinematic Scale */}
      <motion.div
        initial={{ scale: 1.2, filter: "grayscale(100%)" }}
        animate={isInView ? { scale: 1, filter: "grayscale(40%) blur(0px)" } : {}}
        transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
        className="w-full h-[60vh] md:h-[50vh] relative"
      >
        <img
          src={"/entroBg.jpg"}
          alt={title}
          className="w-full h-full object-cover opacity-60 transition-all duration-1000"
        />
     
        {/* A. Vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-80" />
        
      

        
      </motion.div>

      

    </section>
  );
}