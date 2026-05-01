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
          className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto"
        >
          {solutionsList.map((solution) => (
            <motion.div
              key={solution.id}
              variants={fadeInUp}
              className="group relative p-1 bg-white/[0.02] border border-white/10 rounded-[2rem] hover:border-[#29f67a]/30 transition-all duration-500 overflow-hidden"
            >
              <div className="p-8 md:p-12 relative z-10">
                <div className="flex justify-between items-start mb-12">
                  <div className="w-16 h-16 rounded-2xl bg-[#29f67a]/10 flex items-center justify-center border border-[#29f67a]/20">
                    {solution.id === "calm" ? (
                      <FiBox className="w-8 h-8 text-[#29f67a]" />
                    ) : (
                      <FiCpu className="w-8 h-8 text-[#29f67a]" />
                    )}
                  </div>
                  <span className="font-mono text-[10px] text-slate-600 tracking-widest uppercase mt-2">
                    REF_{solution.id.toUpperCase()}
                  </span>
                </div>

                <h2 className="text-3xl font-bold mb-4 text-white group-hover:text-[#29f67a] transition-colors tracking-tight">
                  {solution.title}
                </h2>
                <p className="text-slate-400 mb-8 leading-relaxed font-light text-lg">
                  {solution.shortDescription}
                </p>

                <Link
                  to={`/solutions/${solution.id}`}
                  className="inline-flex items-center gap-3 text-white font-mono text-xs tracking-widest group/btn hover:text-[#29f67a] transition-colors"
                >
                  EXPLORE_CAPABILITIES
                  <ArrowRight className="w-4 h-4 text-[#29f67a] group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
                <FiLayers className="w-40 h-40" />
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
        category: "General", // You can add category logic here if needed
      })) || [],
    description: "Find answers to common questions about our platform",
  };

  return (
    <div className="bg-[#050505] text-slate-300 min-h-screen">
      {/* 1. CINEMATIC OVERLAY HEADER (Full Width Image BG) */}
      {/* 1. CINEMATIC OVERLAY HEADER (Full Width Image BG) */}
<header
  ref={headerRef}
  className="relative flex items-center justify-center  overflow-hidden bg-black"
>
  {/* Use TextParallaxContent as the main container */}
  <div className="w-full">
    <TextParallaxContent
      imgUrl={data.heroImage}
      subheading={data.subheading || "FEATURED SOLUTION"}
      heading={data.heroTitle}
      productUrl={data.productUrl}
      description={data.heroSubtext}
    >
      {/* Additional content can be added here if needed */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center mt-16">
        {/* Primary CTA Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16"
        >
          <button
            onClick={() => {
              navigate("/contact");
            }}
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
        // Skip FAQ section as it will be rendered separately with the FaqSection component
        if (section.type === "faq") return null;

        return (
          <section
            key={idx}
            className={`py-10 md:py-18 ${idx % 2 === 0 ? "bg-black" : "bg-[#080808] border-y border-white/5"}`}
          >
            <div className="container mx-auto px-6 max-w-7xl text-center ">
              <div className="flex flex-col md:flex-row   text-center justify-center mb-20 gap-8">
                <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight items-center text-center">
                  {section.heading}
                </h2>
              </div>
              <div className="flex items-center justify-center mb-12">
                {section.subtext && (
                  <p className="text-slate-500 max-w-sm text-lg">
                    {section.subtext}
                  </p>
                )}
              </div>

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
                            {item.icon}
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
                <div className="grid md:grid-cols-2 gap-2">
                  {section.items.map((cap, cIdx) => (
                    <div
                      key={cIdx}
                      className="flex items-center gap-4 p-2 border-b border-white/5 group"
                    >
                      {/* Fixed icon container */}
                      <span className="flex items-center justify-center w-6 h-6 shrink-0">
                        <FiCheck
                          className="text-[#29f67a] group-hover:scale-110 transition-transform"
                          size={20}
                          style={{
                            minWidth: "20px",
                            minHeight: "20px",
                            display: "block",
                          }}
                        />
                      </span>

                      <span className="text-lg text-slate-300 font-light">
                        {cap}
                      </span>
                    </div>
                  ))}

                  {section.outcomeLine && (
                    <div className="md:col-span-2 mt-8 p-6 bg-[#29f67a]/5 rounded-2xl border border-[#29f67a]/10">
                      <p className="text-center text-[#29f67a] font-light italic">
                        {section.outcomeLine}
                      </p>
                    </div>
                  )}
                </div>
              )}
              {/* Steps */}
              {section.type === "steps" && (
                <div className="grid md:grid-cols-4 gap-8">
                  {section.items.map((step, sIdx) => (
                    <div key={sIdx} className="text-center group">
                      <div className="text-5xl font-black text-[#29f67a]/20 group-hover:text-[#29f67a]/40 transition-colors mb-4">
                        {step.step}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">
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
                <div className="grid md:grid-cols-2 gap-4">
                  {section.items.map((useCase, uIdx) => (
                    <div
                      key={uIdx}
                      className="flex items-center gap-4 p-4 border border-white/10 rounded-xl hover:border-[#29f67a]/30 transition-all bg-white/[0.01]"
                    >
                      <span className="text-slate-300">{useCase}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Deployment */}
              {section.type === "deployment" && (
                <div>
                  {section.description && (
                    <p className="text-center text-slate-400 mb-12 text-lg">
                      {section.description}
                    </p>
                  )}
                  <div className="grid md:grid-cols-2 gap-6 mb-10">
                    {section.items.map((item, dIdx) => (
                      <div
                        key={dIdx}
                        className="flex items-center  gap-4 p-5 bg-white/[0.02] rounded-xl border border-white/5"
                      >
                        <div className="text-[#29f67a]">{item.icon}</div>
                        <span className="text-slate-300">{item.text}</span>
                      </div>
                    ))}
                  </div>
                  {section.deploymentOptions && (
                    <div className="flex flex-wrap justify-center gap-3">
                      {section.deploymentOptions.map((option, oIdx) => (
                        <span
                          key={oIdx}
                          className="px-4 py-2 bg-[#29f67a]/10 text-[#29f67a] rounded-full text-sm font-mono"
                        >
                          {option}
                        </span>
                      ))}
                    </div>
                  )}
                  {section.outcomeLine && (
                    <p className="text-center text-slate-400 mt-10 italic">
                      {section.outcomeLine}
                    </p>
                  )}
                  {section.proofLine && (
                    <p className="text-center text-slate-500 text-sm mt-6">
                      {section.proofLine}
                    </p>
                  )}
                </div>
              )}
            </div>
          </section>
        );
      })}

      {/* FAQ Section - Using your FaqSection component */}
      <FaqSection productData={productDataForFaq} />
    </div>
  );
}

// --- 404 ---
function SolutionNotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
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
