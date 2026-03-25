import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

// Professional Tech-Focused Data
const data = [
  { year: "2023", title: "Project Galileo Inception", description: "Initialization of the core satellite data processing framework and neural architecture." },
  { year: "2024", title: "Global Expansion", description: "Successfully established infrastructure nodes across 12 strategic international regions." },
  { year: "2025", title: "AI Integration", description: "Implementation of advanced predictive modeling for real-time data interpretation." },
  { year: "2026", title: "Next-Gen Interface", description: "Launch of the Galileo 2.0 user experience, redefining human-data interaction." },
];

const Timeline = () => {
  return (
    <div className="bg-black py-24 px-6 min-h-screen w-full font-sans antialiased">
      {/* Header Section */}
      <header className="max-w-4xl mx-auto text-center mb-24">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#29f67a]/30 mb-6">
          <div className="w-1.5 h-1.5 rounded-full bg-[#29f67a]" />
          <span className="text-[10px] font-mono tracking-wider text-[#29f67a] uppercase">
            Our Evolution
          </span>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-light text-white tracking-tight">
          The <span className="font-bold text-[#29f67a]">Galileo</span> Timeline
        </h1>
        
        <div className="w-16 h-0.5 bg-[#29f67a] mx-auto my-6" />
        
        <p className="text-gray-400 text-lg max-w-xl mx-auto font-light leading-relaxed">
          Charting our trajectory through innovation and strategic milestones in the industry.
        </p>
      </header>

      {/* Timeline Section */}
      <div className="max-w-7xl mx-auto">
        <VerticalTimeline 
            lineColor="rgba(41, 246, 122, 0.2)" 
            animate={false}
        >
          {data.map((event, index) => (
            <VerticalTimelineElement
              key={index}
              contentStyle={{
                background: "transparent",
                boxShadow: "none",
                padding: "0",
                textAlign: index % 2 === 0 ? "left" : "right",
              }}
              contentArrowStyle={{ display: "none" }}
              iconStyle={{
                background: "#000",
                boxShadow: "0 0 0 4px #29f67a",
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              icon={
                <div className="h-2 w-2 bg-[#29f67a] rounded-full shadow-[0_0_12px_#29f67a]" />
              }
            >
              <div className="group relative p-8 rounded-2xl bg-[#06120a] border border-[#29f67a]/10 hover:border-[#29f67a]/50 transition-all duration-500 shadow-xl">
                {/* Year Badge */}
                <div className={`flex mb-4 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <span className="inline-block px-3 py-1 text-[10px] font-bold tracking-widest text-black bg-[#29f67a] rounded-sm uppercase">
                    {event.year}
                  </span>
                </div>

                <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-[#29f67a] transition-colors">
                  {event.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed font-light">
                  {event.description}
                </p>

                {/* Subtle Glow Background Effect */}
                <div className="absolute inset-0 bg-[#29f67a]/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
                
                {/* Edge Accent */}
                {/* <div className={`absolute top-0 bottom-0 w-[2px] bg-[#29f67a] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-center ${index % 2 === 0 ? '-left-[1px]' : '-right-[1px]'}`} /> */}
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Timeline;