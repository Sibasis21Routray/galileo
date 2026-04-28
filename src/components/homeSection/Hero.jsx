import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { use, useEffect, useRef, useState } from "react";
import { SiJavascript, SiMongodb, SiExpress, SiReact, SiNodedotjs, SiEthereum, SiDotnet, SiFlutter } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi"; // Added for professional CTA feel
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const containerRef = useRef(null);
  const orbitProgress = useMotionValue(0);
  const [screenSize, setScreenSize] = useState({ isMobile: false, isTablet: false, isDesktop: false });
  const navigate=useNavigate();
  const techLogos = [
    { name: "React", icon: <SiReact />, color: "#29f67a" },
    { name: "Java", icon: <FaJava />, color: "#29f67a" },
    { name: "Web3", icon: <SiEthereum />, color: "#29f67a" },
    { name: ".NET", icon: <SiDotnet />, color: "#29f67a" },
    { name: "Flutter", icon: <SiFlutter />, color: "#29f67a" },
    { name: "Node", icon: <SiNodedotjs />, color: "#29f67a" },
    { name: "Mongo", icon: <SiMongodb />, color: "#29f67a" },
    { name: "JS", icon: <SiJavascript />, color: "#29f67a" },
  ];

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setScreenSize({ isMobile: width < 640, isTablet: width >= 640 && width < 1024, isDesktop: width >= 1024 });
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    const animation = animate(orbitProgress, 1, {
      duration: 30, // Faster, smoother orbit
      repeat: Infinity,
      ease: "linear",
    });
    return () => {
      window.removeEventListener('resize', checkScreenSize);
      animation.stop();
    };
  }, [orbitProgress]);

  const orbitRotation = useTransform(orbitProgress, [0, 1], [0, 360]);

  return (
    <div ref={containerRef} className="relative min-h-screen w-full overflow-hidden bg-[#050505] flex flex-col lg:flex-row items-center px-6 md:px-12 lg:px-20 py-20 mt-10 md:mt-0">
      
      {/* 1. Background Layer: The "Scientific Grid" */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ backgroundImage: `linear-gradient(#29f67a 1px, transparent 1px), linear-gradient(90deg, #29f67a 1px, transparent 1px)`, backgroundSize: '50px 50px' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black" />
      </div>

      {/* 2. Left Content: Minimalist & Bold */}
      <div className="relative z-10 w-full lg:w-3/5 text-center lg:text-left">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="inline-flex items-center gap-3 px-4 py-1.5 mb-8 rounded-full border border-[#29f67a]/20 bg-[#29f67a]/5 backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#29f67a] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#29f67a]"></span>
          </span>
          <span className="text-[10px] font-mono tracking-[0.3em] text-[#29f67a] uppercase">Systems Online</span>
        </motion.div>

        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-light text-white leading-[0.9] tracking-tighter mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          GALILEO <br />
          <span className="font-bold text-[#29f67a]">VENTURES</span>
        </motion.h1>

        <motion.p 
          className="max-w-xl text-gray-400 text-lg md:text-xl font-light leading-relaxed mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Inspired by 17th-century perspective, we engineer the tools that define 21st-century commerce. Custom software, scalable infrastructure, and data-driven growth.
        </motion.p>

        <motion.div 
          className="flex flex-wrap items-center justify-center lg:justify-start gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <button onClick={()=>{navigate("/contact")}} 
            className="group relative px-8 py-4 bg-[#29f67a] text-black font-bold text-sm uppercase tracking-widest overflow-hidden transition-all hover:pr-12">
            <span className="relative z-10 flex items-center gap-2">Start Project <FiArrowUpRight /></span>
            <div className="absolute top-0 -right-full w-full h-full bg-white/20 group-hover:right-0 transition-all duration-300" />
          </button>
          
          <div className="flex items-center gap-3 border-l border-white/10 pl-6 text-gray-500 font-mono text-xs uppercase tracking-widest">
            <div className="flex -space-x-3">
               {[1,2,3].map(i => <div key={i} className="w-8 h-8 rounded-full border-2 border-black bg-neutral-900 flex items-center justify-center text-[10px]">0{i}</div>)}
            </div>
            Expert Teams
          </div>
        </motion.div>
      </div>

      {/* 3. Right Content: The "Astro-Engine" */}
      <div className="relative z-10 w-full lg:w-2/5 h-[400px] lg:h-[600px] mt-20 lg:mt-0 flex items-center justify-center">
        
        {/* The Core Image */}
        <motion.div 
          className="relative z-20 w-48 h-48 lg:w-72 lg:h-72"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
           <div className="absolute inset-0 bg-[#29f67a]/20 blur-[80px] rounded-full animate-pulse" />
           <img
              src="/robo.png"
              alt="Galileo"
              className="relative z-10 w-full h-full object-contain filter drop-shadow-[0_0_30px_rgba(41,246,122,0.3)]"
            />
        </motion.div>

        {/* Orbiting Icons */}
        <motion.div 
          className="absolute w-full h-full flex items-center justify-center"
          style={{ rotate: orbitRotation }}
        >
          {techLogos.map((tech, i) => {
            const angle = (i / techLogos.length) * (Math.PI * 2);
            const radius = screenSize.isMobile ? 140 : 220;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            return (
              <motion.div
                key={i}
                className="absolute w-12 h-12 lg:w-16 lg:h-16 bg-black border border-white/10 rounded-xl flex items-center justify-center text-2xl text-[#29f67a] shadow-[0_0_20px_rgba(41,246,122,0.1)] group transition-all"
                style={{ x, y, rotate: useTransform(orbitRotation, r => -r) }} // Counter-rotate icons to stay upright
                whileHover={{ scale: 1.2, borderColor: "#29f67a" }}
              >
                <div className="opacity-60 group-hover:opacity-100 transition-opacity">{tech.icon}</div>
                
                {/* Micro-label */}
                <div className="absolute -bottom-6 opacity-0 group-hover:opacity-100 transition-opacity text-[8px] font-mono uppercase tracking-widest text-[#29f67a]">
                  {tech.name}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Outer Ring Decor */}
        <div className="absolute w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] border border-white/5 rounded-full" />
        <div className="absolute w-[320px] h-[320px] lg:w-[520px] lg:h-[520px] border-t border-[#29f67a]/20 rounded-full animate-[spin_10s_linear_infinite]" />
      </div>

      {/* 4. Bottom Detail: Global Stat Line */}
      <div className="absolute bottom-10 left-0 w-full px-6 md:px-20 hidden md:flex justify-between items-end border-t border-white/5 pt-6 pointer-events-none">
        <div className="text-[10px] font-mono text-gray-600 uppercase tracking-[0.5em]">
          Coordinates: 20.2961° N, 85.8245° E
        </div>
        <div className="flex gap-10">
           {['Software', 'Cloud', 'Vision'].map(tag => (
             <div key={tag} className="flex items-center gap-2 text-[9px] font-mono text-gray-400 uppercase tracking-widest">
               <div className="w-1 h-1 bg-[#29f67a]" /> {tag}
             </div>
           ))}
        </div>
      </div>
    </div>
  );
}