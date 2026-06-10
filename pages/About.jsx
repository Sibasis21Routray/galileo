import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import { ArrowBigLeftIcon, MoveLeftIcon, MoveRightIcon, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  FiArrowRight,
  FiTarget,
  FiZap,
  FiCheckCircle,
  FiUsers,
  FiAlignLeft,
} from "react-icons/fi";

const About = () => {
  const navigate = useNavigate();
  const [selectedMember, setSelectedMember] = useState(null);

  const teamMembers = [
    {
      name: "Anosha Antony",
      role: "Corporate Governance, Compliance & Risk Management",
      position: "CEO",
      image: "/crew/Ano.jpg",
      description: `Anosha Antony is a corporate governance and compliance specialist with extensive experience in company secretarial practice, regulatory compliance, risk management, and corporate administration. Having advised more than 25 public and private companies on governance and statutory matters, she brings a deep understanding of how organizations can build strong governance frameworks while maintaining operational agility.
A graduate of the Institute of Chartered Secretaries and Administrators (ICSA), UK, Anosha has worked across corporate services, consulting, education, and technology sectors. Her expertise includes board governance, shareholder affairs, corporate filings, regulatory compliance, and enterprise-wide quality management.
Throughout her career, she has led governance and operational initiatives ranging from company secretarial functions and board administration to ISO 9002 implementation and process standardization programmes. Her ability to translate regulatory requirements into practical business processes has helped organizations strengthen accountability, transparency, and compliance.
As CEO of Galileo Ventures, Anosha oversees the company's governance, compliance, risk management, and corporate affairs functions.
She also served as a Council Member of the Institute of Chartered Secretaries and Administrators, Sri Lanka Branch, contributing to the advancement of governance and company secretarial standards within the profession.`,
    },
    {
      name: "Arun Augustine",
      role: "Business Strategy, Growth & Innovation",
      position: "CEO",
      image: "/crew/Arun.png",
      description: `Arun Augustine is a business leader and serial entrepreneur with over 30 years of global experience across technology, healthcare, digital businesses, and consumer products.

He spent over two decades with a leading IT services and solutions company in Southeast Asia, where he served as Managing Director and Chief Marketing Officer, overseeing operations across 14 countries in Southeast Asia, as well as the UK, Germany, and select businesses in the United States. Following the company's acquisition by NTT (now NTT Data), Arun continued in an expanded leadership role for over eight years, driving regional growth and integration. After stepping down from his executive role, he continued to serve as a Board Member and an advisor to NTT.

Following this, Arun transitioned into entrepreneurship, building, scaling, and exiting ventures across sectors. He co-founded Angstrohm Technologies, a health-tech platform, leading the business through growth and a successful partial exit in 2022, divesting 80% while remaining a shareholder.

He is the co-founder of Angstrohm Consulting (established 2013), where he has led strategic advisory engagements, including working with the Malaysian government to develop the digital regulatory framework for digital health during the COVID-19 period. He also founded Angstrohm Digital, a digital marketing company, and Angstrohm Foods, a protein energy bar manufacturing business operating since 2014.

Arun is the majority shareholder and driving force behind several ventures across Sri Lanka and the region, including Galileo Ventures (Sri Lanka and Malaysia), SeaChange Solutions (a compliance and learning management SaaS platform serving over 8,000 users), and ASAP Solutions (real estate and proptech).

He has also contributed to industry development as a committee member and later as an advisor to OM - PIKOM (the National ICT Association of Malaysia).

In addition to his business interests, Arun contributes to social impact initiatives and serves as an independent director of Happy Bar Nutrition Inc., a nutrition-focused charity.`,
    },
    {
      name: "K J Giridhar Singh",
      role: "Chief Technology Officer",
      position: "",
      image: "/crew/Giri.jpg",
      description: `K J Giridhar Singh is a technology architect and engineering leader with more than 25 years of experience designing, building, and scaling complex digital platforms across gaming, fintech, healthcare, artificial intelligence, blockchain, and SaaS environments.
His expertise lies in turning ambitious business ideas into scalable technology platforms. Throughout his career, he has architected high-volume transaction systems, cloud-native applications, sportsbook platforms, gaming ecosystems, payment integrations, and healthcare technology solutions capable of supporting large user communities and demanding operational requirements.
Before joining Galileo Ventures, Giri held senior technology leadership positions with gaming and technology companies across India and Southeast Asia, where he led engineering organizations, modernized technology stacks, and implemented cloud-first architectures that improved scalability, performance, and operational efficiency.
He is also the co-founder of Angstrohm Technologies, where he led the development of a healthcare SaaS platform from concept through growth and eventual partial exit. Through his consulting company, Technoshaastra Solutions, he advised startups and enterprises on software architecture, performance engineering, cloud infrastructure, and Agile delivery.
At Galileo Ventures, Giri leads technology strategy, product engineering, cloud architecture, artificial intelligence initiatives, and software delivery, ensuring that every solution is built on a foundation that is secure, scalable, and future-ready.`,
    },
    {
      name: "Helmar ten Winkel",
      role: "Advisor",
      position: "",
      image: "/crew/Helmar.png",
      description: `Helmar ten Winkel is a business transformation specialist and former multinational executive with more than 30 years of experience helping organizations improve performance through better alignment of people, processes, and technology.
With an academic background in Mathematics, Physics, and Information Technology, Helmar has spent much of his career leading large-scale transformation programmes focused on operational efficiency, service delivery, outsourcing, process management, and organizational development.
His leadership experience includes senior executive roles with Philips, Atos Origin, Emerio, and NTT, where he managed global service organizations, large international teams, and multi-million-dollar operational improvement programmes. During his tenure at Atos Origin and Emerio, he was responsible for global infrastructure services, portfolio management, support operations, and enterprise-wide efficiency initiatives that delivered significant business value.
Helmar's consulting and advisory work has focused on business process redesign, organizational effectiveness, change management, governance, and service optimization. His particular interest lies in human performance within organizations—understanding how people, processes, and culture can be aligned to achieve sustainable business outcomes.
At Galileo Ventures, Helmar advises clients on organizational transformation, process excellence, operating model design, and business improvement initiatives, helping organizations achieve measurable and lasting results.`,
    },
    {
      name: "Job Van Hasselt",
      role: "Advisor",
      position: "",
      image: "/crew/Job.jpg",
      description: `Job van Hasselt is an international commercial leader whose career spans more than four decades across Europe, Asia Pacific, the Middle East, and Africa. His expertise lies in building markets, establishing regional operations, and driving commercial growth in highly competitive industries.
Throughout his career, he has held senior leadership positions with global organizations including Bobst, Manroland, QI Press Controls, and Kama GmbH, where he was responsible for sales, marketing, business development, and regional management across multiple countries and business units.
Job has successfully launched regional headquarters, developed distributor and service networks, negotiated major commercial agreements, and led market expansion initiatives throughout Southeast Asia. His experience spans both mature and emerging markets, giving him a practical understanding of how businesses can successfully enter, grow, and scale across diverse operating environments.
At Galileo Ventures, Job provides strategic advice on market expansion, commercial strategy, partnership development, and international business growth, drawing upon decades of hands-on experience building successful regional businesses.
His extensive network across Asia and Europe, coupled with his multicultural business experience, provides valuable insight for organizations seeking to expand beyond their home markets.
`,
    },
  ];

  useEffect(() => {
    if (selectedMember) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      window.lenis?.stop();
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      window.lenis?.start();
    }

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      window.lenis?.start();
    };
  }, [selectedMember]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easeInOut },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen bg-[#050505] text-slate-200 selection:bg-[#29f67a]/30 selection:text-[#29f67a]">
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-1/2 transform -translate-x-1/2 w-[500px] h-[500px] bg-[#29f67a]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] left-1/2 transform -translate-x-1/2 w-[400px] h-[400px] bg-emerald-900/10 rounded-full blur-[100px]" />
        <div className="absolute inset-0 opacity-20 brightness-50 contrast-150" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24">
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
            We bridge the gap between
            <br />
            <span className="text-slate-500 font-bold">ideas</span> and{" "}
            <span className="text-[#29f67a] font-bold">execution.</span>
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
          <motion.section
            variants={itemVariants}
            className="text-center max-w-3xl mx-auto"
          >
            <FiTarget className="w-12 h-12 text-[#29f67a] mx-auto mb-8" />
            <h2 className="text-3xl font-bold text-white mb-6">WHY WE EXIST</h2>
            <p className="text-xl text-slate-400 leading-relaxed">
              Most digital projects fail not because of bad ideas, but because
              of poor execution.
              <br />
              <br />
              <span className="text-white font-medium">
                Galileo Ventures was built to bridge that gap.
              </span>
            </p>
          </motion.section>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                title: "OUR APPROACH",
                icon: <FiZap />,
                items: [
                  "No overengineering",
                  "No unnecessary complexity",
                  "No buzzwords",
                ],
                delay: 0.1,
              },
              {
                title: "WHAT MAKES US DIFFERENT",
                icon: <FiCheckCircle />,
                items: [
                  "Built by practitioners",
                  "Execution-first",
                  "Business-first",
                ],
                delay: 0.2,
              },
              {
                title: "WHO WE WORK WITH",
                icon: <FiUsers />,
                items: [
                  "Growing companies",
                  "Product builders",
                  "Operations teams",
                ],
                delay: 0.3,
              },
            ].map((card, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group relative p-8 rounded-3xl bg-gradient-to-b from-white/[0.05] to-transparent border border-white/10 hover:border-[#29f67a]/40 transition-all duration-300 overflow-hidden"
              >
                {/* Background Glow Effect on Hover */}
                <div className="absolute inset-0 bg-[#29f67a]/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Icon with Soft Glow */}
                <div className="relative z-10 mb-8">
                  <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/[0.03] text-[#29f67a] text-2xl group-hover:scale-110 group-hover:bg-[#29f67a]/10 transition-all duration-300">
                    {card.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-sm font-black tracking-[0.15em] text-white/90 mb-6 uppercase">
                    {card.title}
                  </h3>

                  <ul className="space-y-4">
                    {card.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-3 text-slate-400 group-hover:text-slate-200 transition-colors"
                      >
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#29f67a] shadow-[0_0_8px_rgba(41,246,122,0.6)]" />
                        <span className="text-sm lg:text-base font-medium tracking-tight">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Grid Section - Updated with Black/Green Theme */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="pb-12 sm:pb-20"
        >
          <motion.h2 className="text-5xl md:text-7xl font-light text-white tracking-tighter leading-[1.1] my-30 items-center justify-center text-center mb-16 relative z-10">
            Leadership
          </motion.h2>
          <div className="container max-w-7xl">
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-items-center"
            >
              {teamMembers.map((member, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  
                  className="group w-full max-w-[340px] flex flex-col h-full bg-gradient-to-b from-white/[0.05] to-transparent border border-white/10 hover:border-[#29f67a]/40 transition-all duration-300 cursor-pointer rounded-2xl overflow-hidden backdrop-blur-sm"
                >
                  {/* Image Container */}
                  <div className="aspect-[5/6] overflow-hidden bg-black/30 relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                      loading="lazy"
                    />
                    {/* Green overlay gradient on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#29f67a]/0 via-transparent to-transparent group-hover:from-[#29f67a]/5 transition-all duration-500" />
                  </div>

                  {/* Content Container */}
                  <div className="p-4 sm:p-5 text-center flex flex-col flex-grow justify-between">
                    <div>
                      <h3 className="text-gray-200 text-lg sm:text-2xl font-semibold mb-1 tracking-wide group-hover:text-[#29f67a] transition-colors">
                        {member.name}{" "}
                        {member.position && (
                          <span className="text-sm text-gray-500 pl-1">
                            ({member.position})
                          </span>
                        )}
                      </h3>
                      <p className="text-[#29f67a]/70 text-[12px] sm:text-[14px] font-bold uppercase tracking-wider leading-tight">
                        {member.role}
                      </p>
                    </div>

                    {/* Description snippet */}
                    <p className="text-gray-400 text-sm sm:text-md mt-3 sm:text-left leading-relaxed border-t border-white/5 pt-3 line-clamp-2">
                      {member.description.trim()}
                    </p>

                    {/* Read more link */}
                    <p onClick={() => setSelectedMember(member)} className="group flex gap-2 items-center justify-center sm:justify-start text-gray-400 text-md sm:text-md mt-3 leading-relaxed border-t border-white/5 pt-3 cursor-pointer transition-all duration-300 hover:text-[#29f67a]">
                      Read more
                      <MoveRightIcon className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-2" />
                    </p>

                    {/* Decorative line */}
                    <div className="mt-4 w-8 h-px bg-[#29f67a]/30 mx-auto group-hover:w-12 group-hover:bg-[#29f67a] transition-all duration-300" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Dynamic Pop-up Modal Box for Credentials - Updated with Black/Green Theme */}
        <AnimatePresence>
          {selectedMember && (
            <div 
              data-lenis-prevent
              className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md"
            >
              {/* Click backdrop area to close modal */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.1 }}
                onClick={() => setSelectedMember(null)}
                className="absolute inset-0"
              />

              {/* Modal Inner Window */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: 5 }}
                transition={{
                  duration: 0.15,
                  ease: "easeOut",
                }}
                className="bg-gradient-to-br from-gray-900 to-black w-full max-w-lg md:max-w-2xl lg:max-w-7xl mt-10 shadow-2xl relative z-10 border border-white/10 rounded-2xl flex flex-col lg:flex-row h-auto max-h-[80vh] lg:h-[600px] overflow-y-auto lg:overflow-hidden"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedMember(null)}
                  className="sticky lg:absolute top-3 right-3 sm:top-4 sm:right-4 ml-auto lg:ml-0 z-20 bg-black/50 backdrop-blur-sm p-2 rounded-full text-gray-400 hover:text-[#29f67a] hover:bg-black/70 transition-all shadow-lg focus:outline-none border border-white/10"
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>

                {/* Modal Left - Image Container */}
                <div className="w-full lg:w-[520px] shrink-0 bg-black/50 aspect-[3/3] lg:aspect-auto lg:self-stretch relative rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none overflow-hidden">
                  <img
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    className="w-full h-full object-cover object-top"
                  />
                  {/* Green accent overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </div>

                {/* Modal Right - Content Container */}
                <div className="w-full lg:flex-1 p-5 sm:p-6 md:p-8 flex flex-col justify-center lg:min-h-0">
                  {/* Header */}
                  <div className="shrink-0 pb-4 pr-8 lg:pr-0">
                    <h3 className="text-white text-lg sm:text-2xl md:text-2xl font-bold tracking-tight">
                      {selectedMember.name}
                      {selectedMember.position && (
                        <span className="text-md text-gray-400 pl-2">
                          ({selectedMember.position})
                        </span>
                      )}
                    </h3>

                    <span className="inline-block mt-1.5 text-[12px] sm:text-[14px] font-bold text-[#29f67a] rounded-sm uppercase tracking-widest leading-tight">
                      {selectedMember.role}
                    </span>
                  </div>

                  {/* Description */}
                  <div className="mt-2 sm:mt-4 border-t border-white/10 pt-3 sm:pt-4 pr-1 lg:flex-1 lg:overflow-y-auto lg:min-h-0">
                    <p className="text-gray-300 text-md md:text-lg leading-relaxed whitespace-pre-line pb-2">
                      {selectedMember.description.trim()}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 relative rounded-[3rem] bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 p-12 overflow-hidden text-center"
        >
          <div className="absolute inset-0 bg-[#29f67a]/5 blur-3xl rounded-full translate-y-1/2" />

          <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tight relative z-10">
            Let's Build Something{" "}
            <span className="text-[#29f67a]">That Works</span>
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
