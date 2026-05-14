import React, { useRef } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import {
  FiArrowRight,
  FiCheck,
  FiTarget,
  FiChevronRight,
  FiBox,
  FiCpu,
  FiShield,
  FiLayers,
} from "react-icons/fi";
import { solutionsList } from "../src/data/solutionPageData";
import FaqSection from "../src/components/productSection/FaqSection";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { TextParallaxContent } from "../src/components/productSection/ProductDetails";

// --- ANIMATION VARIANTS ---
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } },
};

function Solutions() {
  const { solutionId } = useParams();
  if (!solutionId) return <SolutionsListing />;
  const solution = solutionsList.find((s) => s.id === solutionId);
  if (!solution) return <SolutionNotFound />;

  return <SolutionDetail solution={solution} />;
}

// --- SOLUTIONS LISTING (The Grid) ---
function SolutionsListing() {
  return (
    <div className="min-h-screen bg-[#050505] text-slate-300">
      <div className="relative pt-32 pb-20 overflow-hidden border-b border-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[#29f67a]/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.span
            {...fadeInUp}
            className="font-mono text-[#29f67a] text-xs tracking-[0.4em] uppercase mb-4 block"
          >
            Enterprise Solutions
          </motion.span>
          <motion.h1
            {...fadeInUp}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-6"
          >
            Our Ecosystem<span className="text-[#29f67a]">.</span>
          </motion.h1>
          <motion.p
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-400 max-w-2xl mx-auto font-light"
          >
            Modular platforms architected for high-performance business
            operations and digital scale.
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-24">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-6 max-w-6xl mx-auto"
        >
          {solutionsList.map((solution) => (
            <motion.div
              key={solution.id}
              variants={fadeInUp}
              className="group relative p-1 bg-white/[0.02] border border-white/10 rounded-2xl hover:border-[#29f67a]/30 transition-all duration-500 overflow-hidden"
            >
              <div className="p-6 md:p-8 relative z-10">
                <div className="flex justify-between items-start mb-8">
                  <div className="w-14 h-14 rounded-xl bg-[#29f67a]/10 flex items-center justify-center border border-[#29f67a]/20">
                    {solution.id === "calm" ? (
                      <FiBox className="w-6 h-6 text-[#29f67a]" />
                    ) : (
                      <FiCpu className="w-6 h-6 text-[#29f67a]" />
                    )}
                  </div>
                  <span className="font-mono text-[10px] text-slate-600 tracking-widest uppercase">
                    REF_{solution.id.toUpperCase()}
                  </span>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white group-hover:text-[#29f67a] transition-colors tracking-tight">
                  {solution.title}
                </h2>
                <p className="text-slate-400 mb-6 leading-relaxed font-light text-base">
                  {solution.shortDescription}
                </p>

                <Link
                  to={`/solutions/${solution.id}`}
                  className="inline-flex items-center gap-2 text-white font-mono text-xs tracking-widest group/btn hover:text-[#29f67a] transition-colors"
                >
                  EXPLORE_CAPABILITIES
                  <ArrowRight className="w-3 h-3 text-[#29f67a] group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div className="absolute top-0 right-0 p-6 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
                <FiLayers className="w-32 h-32" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

// --- SOLUTION DETAIL (Refined UI) ---
function SolutionDetail({ solution }) {
  const { data } = solution;
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });
  const navigate = useNavigate();

  // Transform FAQ data to match FaqSection component format
  const faqSectionData = data.sections.find((s) => s.type === "faq");
  const productDataForFaq = {
    faqs:
      faqSectionData?.items.map((item, index) => ({
        id: index,
        question: item.question,
        answer: item.answer,
        category: "General",
      })) || [],
    description: "Find answers to common questions about our platform",
  };

  return (
    <div className=" text-slate-300 min-h-screen ">
       {/* Dynamic Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-1/2 transform -translate-x-1/2 w-[500px] h-[500px] bg-[#29f67a]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] left-1/2 transform -translate-x-1/2 w-[400px] h-[400px] bg-emerald-900/10 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-50 contrast-150" />
      </div>
      {/* 1. CINEMATIC OVERLAY HEADER (Full Width Image BG) */}
      <header
        ref={headerRef}
        className="relative flex items-center justify-center overflow-hidden bg-black"
      >
        <div className="w-full mx-5 lg:mx-15">
          <TextParallaxContent
            imgUrl={data.heroImage}
            subheading={data.subheading || "FEATURED SOLUTION"}
            heading={data.heroTitle}
            productUrl={data.productUrl}
            description={data.heroSubtext}
          >
            <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center mt-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-16"
              >
                <button
                  onClick={() => navigate("/contact")}
                  className="px-12 py-5 bg-[#29f67a] text-black rounded-full font-black uppercase tracking-widest text-xs hover:scale-105 active:scale-95 transition-all shadow-[0_20px_40px_-10px_rgba(41,246,122,0.3)]"
                >
                  {data.ctaText || "Get Started"}
                </button>
              </motion.div>
            </div>
          </TextParallaxContent>
        </div>
      </header>

      {/* 2. DYNAMIC CONTENT SECTIONS */}
      {data.sections.map((section, idx) => {
        if (section.type === "faq") return null;

        return (
          <section
            key={idx}
            className={`py-12 md:py-16 ${idx % 2 === 0 ? "bg-black" : "bg-[#080808] border-y border-white/5"}`}
          >
            <div className="container mx-auto px-6 max-w-6xl">
              {/* Section Header - Centered */}
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                  {section.heading}
                </h2>
                {section.subtext && (
                  <p className="text-slate-400 text-base md:text-lg mt-3 max-w-2xl mx-auto">
                    {section.subtext}
                  </p>
                )}
                <div className="w-12 h-px bg-[#29f67a]/30 mx-auto mt-5" />
              </div>

              {/* Features */}
              {/* Features */}
              {section.type === "features" && (
                <div className="grid md:grid-cols-3 gap-8">
                  {section.items.map((item, fIdx) => (
                    <motion.div
                      key={fIdx}
                      whileHover={{ y: -8, scale: 1.02 }}
                      className="group relative p-8 rounded-3xl bg-gradient-to-br from-white/[0.03] to-transparent border border-white/15 hover:border-[#29f67a]/50 transition-all duration-300 overflow-hidden"
                    >
                      {/* Animated gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-r from-[#29f67a]/0 via-[#29f67a]/5 to-[#29f67a]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <div className="relative z-10">
                        {/* Icon with enhanced hover animation */}
                        <div className="mb-6 transition-all duration-300 group-hover:scale-110 group-hover:translate-x-1">
                          <div className="text-[#29f67a] group-hover:text-[#29f67a]/80 transition-colors">
                            <img
                              src={item.icon}
                              alt="icon"
                              className="w-10 h-10 object-contain"
                            />
                          </div>
                        </div>

                        <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-[#29f67a] transition-colors duration-300">
                          {item.name}
                        </h3>

                        <p className="text-slate-400 text-sm font-light leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
              {/* Capabilities */}
              {section.type === "capabilities" && (
                <div>
                  <div className="grid md:grid-cols-2 gap-2 max-w-3xl mx-auto">
                    {section.items.map((cap, cIdx) => (
                      <div
                        key={cIdx}
                        className="flex items-center gap-3 p-2 border-b border-white/5 group"
                      >
                        <span className="flex items-center justify-center w-5 h-5 shrink-0">
                          <FiCheck
                            className="text-[#29f67a] group-hover:scale-110 transition-transform"
                            size={16}
                          />
                        </span>
                        <span className="text-slate-300 text-sm font-light">
                          {cap}
                        </span>
                      </div>
                    ))}
                  </div>

                  {section.outcomeLine && (
                    <div className="mt-6 p-4 bg-[#29f67a]/5 rounded-xl border border-[#29f67a]/10 text-center max-w-2xl mx-auto">
                      <p className="text-[#29f67a] text-sm font-light italic">
                        {section.outcomeLine}
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* Steps */}
              {section.type === "steps" && (
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                  {section.items.map((step, sIdx) => (
                    <div key={sIdx} className="text-center group">
                      <div className="text-4xl font-black text-[#29f67a]/20 group-hover:text-[#29f67a]/40 transition-colors mb-3">
                        {step.step}
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {step.name}
                      </h3>
                      <p className="text-slate-400 text-sm">
                        {step.description}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* Use Cases */}
              {section.type === "usecases" && (
                <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
                  {section.items.map((useCase, uIdx) => (
                    <span
                      key={uIdx}
                      className="px-3 py-1.5 bg-white/[0.03] border border-white/10 rounded-full text-slate-300 text-xs"
                    >
                      {useCase}
                    </span>
                  ))}
                </div>
              )}

              {/* Deployment */}
              {section.type === "deployment" && (
                <div>
                  {section.description && (
                    <p className="text-center text-slate-400 mb-8 max-w-2xl mx-auto">
                      {section.description}
                    </p>
                  )}
                  <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto mb-8">
                    {section.items.map((item, dIdx) => (
                      <div
                        key={dIdx}
                        className="flex items-center gap-3 p-4 bg-white/[0.02] rounded-lg border border-white/5"
                      >
                        <div className="text-[#29f67a]">{item.icon}</div>
                        <span className="text-slate-300 text-sm">
                          {item.text}
                        </span>
                      </div>
                    ))}
                  </div>
                  {section.deploymentOptions && (
                    <div className="flex flex-wrap justify-center gap-2">
                      {section.deploymentOptions.map((option, oIdx) => (
                        <span
                          key={oIdx}
                          className="px-3 py-1.5 bg-[#29f67a]/10 text-[#29f67a] rounded-full text-xs font-mono"
                        >
                          {option}
                        </span>
                      ))}
                    </div>
                  )}
                  {section.outcomeLine && (
                    <p className="text-center text-slate-400 mt-6 text-sm italic">
                      {section.outcomeLine}
                    </p>
                  )}
                  {section.proofLine && (
                    <p className="text-center text-slate-500 text-xs mt-4">
                      {section.proofLine}
                    </p>
                  )}
                </div>
              )}
            </div>
          </section>
        );
      })}

      {/* FAQ Section */}
      <div className="w-full flex justify-center">
        <div className="flex items-center justify-center max-w-4xl">
       <FaqSection productData={productDataForFaq} />  
      </div>
      </div>
       
    </div>
  );
}

// --- 404 ---
function SolutionNotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6">
      <h1 className="text-[15vw] font-black text-white/5 absolute">404</h1>
      <div className="relative z-10 text-center">
        <FiShield className="w-20 h-20 text-[#29f67a] mx-auto mb-8" />
        <p className="text-2xl font-light text-slate-400 mb-10 tracking-widest uppercase">
          Unauthorized ID // Solution Not Found
        </p>
        <Link
          to="/solutions"
          className="px-8 py-3 border border-[#29f67a] text-[#29f67a] rounded-full hover:bg-[#29f67a] hover:text-black transition-all"
        >
          Return to Hub
        </Link>
      </div>
    </div>
  );
}

export default Solutions;