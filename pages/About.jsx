import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FiArrowRight, FiTarget, FiZap, FiCheckCircle, FiUsers } from "react-icons/fi";

const About = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-24">
        {/* Header Section */}
        <header className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center justify-center gap-3 text-[#29f67a] font-bold tracking-[0.3em] uppercase text-xs mb-6"
          >
            <span className="w-8 h-[1px] bg-[#29f67a]" />
            About Galileo Ventures
            <span className="w-8 h-[1px] bg-[#29f67a]" />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-light text-white tracking-tighter leading-[1.1]"
          >
            We bridge the gap between<br/>
            <span className="text-slate-500 font-bold">ideas</span> and <span className="text-[#29f67a] font-bold">execution.</span>
          </motion.h1>
        </header>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-32"
        >
          {/* Why We Exist */}
          <motion.section variants={itemVariants} className="text-center max-w-3xl mx-auto">
            <FiTarget className="w-12 h-12 text-[#29f67a] mx-auto mb-8" />
            <h2 className="text-3xl font-bold text-white mb-6">WHY WE EXIST</h2>
            <p className="text-xl text-slate-400 leading-relaxed">
              Most digital projects fail not because of bad ideas, but because of poor execution. 
              <br/><br/>
              <span className="text-white font-medium">Galileo Ventures was built to bridge that gap.</span>
            </p>
          </motion.section>

          {/* Grid Layout for Our Approach, What Makes Us Different, Who We Work With */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Our Approach */}
            <motion.div variants={itemVariants} className="p-10 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-[#29f67a]/30 transition-all text-center">
              <FiZap className="w-8 h-8 text-[#29f67a] mx-auto mb-6" />
              <h3 className="text-xl font-bold text-white mb-8 tracking-wide">OUR APPROACH</h3>
              <ul className="space-y-4">
                {["No overengineering", "No unnecessary complexity", "No buzzwords"].map((item, idx) => (
                  <li key={idx} className="flex flex-col items-center gap-2 text-slate-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#29f67a] opacity-50" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* What Makes Us Different */}
            <motion.div variants={itemVariants} className="p-10 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-[#29f67a]/30 transition-all text-center relative overflow-hidden">
               <div className="absolute top-0 right-0 p-32 bg-[#29f67a] opacity-[0.02] blur-3xl pointer-events-none rounded-full" />
              <FiCheckCircle className="w-8 h-8 text-[#29f67a] mx-auto mb-6" />
              <h3 className="text-xl font-bold text-white mb-8 tracking-wide">WHAT MAKES US DIFFERENT</h3>
              <ul className="space-y-4 relative z-10">
                {["Built by practitioners", "Execution-first", "Business-first"].map((item, idx) => (
                  <li key={idx} className="flex flex-col items-center gap-2 text-slate-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#29f67a] opacity-50" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Who We Work With */}
            <motion.div variants={itemVariants} className="p-10 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-[#29f67a]/30 transition-all text-center">
              <FiUsers className="w-8 h-8 text-[#29f67a] mx-auto mb-6" />
              <h3 className="text-xl font-bold text-white mb-8 tracking-wide">WHO WE WORK WITH</h3>
              <ul className="space-y-4">
                {["Growing companies", "Product builders", "Operations teams"].map((item, idx) => (
                  <li key={idx} className="flex flex-col items-center gap-2 text-slate-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#29f67a] opacity-50" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mt-32 relative rounded-[3rem] bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 p-12 overflow-hidden text-center"
        >
          <div className="absolute inset-0 bg-[#29f67a]/5 blur-3xl rounded-full translate-y-1/2" />
          
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tight relative z-10">
            Let’s Build Something <span className="text-[#29f67a]">That Works</span>
          </h2>
          
          <button
            onClick={() => navigate("/contact")}
            className="group relative z-10 inline-flex items-center gap-4 bg-[#29f67a] text-black px-8 py-4 rounded-full font-black uppercase text-sm tracking-widest hover:scale-105 active:scale-95 transition-all shadow-[0_20px_40px_-10px_rgba(41,246,122,0.3)] mx-auto"
          >
            Start Your Project
            <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default About;