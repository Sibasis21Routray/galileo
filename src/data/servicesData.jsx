import React from 'react';
import { FiCode, FiSmartphone, FiActivity, FiCloud, FiServer, FiShield, FiTrendingUp, FiTarget, FiPieChart, FiLayout } from "react-icons/fi";

export const servicesData = [
  {
    title: "Software Development",
    description: "Build custom platforms, applications, and systems tailored to your business.",
    icon: <FiCode className="text-[#29f67a]" size={32} />,
    path: "/services/software-development",
  },
  {
    title: "IT Infrastructure & Cloud",
    description: "Design and manage scalable, secure, and high-performance infrastructure.",
    icon: <FiCloud className="text-[#29f67a]" size={32} />,
    path: "/services/it-infrastructure-cloud",
  },
  {
    title: "Digital Growth",
    description: "Drive measurable growth through data-driven digital strategies.",
    icon: <FiActivity className="text-[#29f67a]" size={32} />,
    path: "/services/digital-growth",
  },
];

export const softwareDevelopmentData = {
  title: "Software Development",
  intro: "We design and build custom platforms that solve real business problems — from internal tools to full-scale digital products.",
  sections: [
    {
      title: "WHAT WE BUILD",
      items: [
        { name: "Web applications" },
        { name: "Mobile applications" },
        { name: "SaaS platforms" },
        { name: "APIs and integrations" },
        { name: "Custom systems and dashboards" }
      ]
    },
    {
      title: "ADVANCED CAPABILITIES",
      items: [
        { name: "AI-driven automation" },
        { name: "Machine learning integrations" },
        { name: "Blockchain-based applications (where relevant)" },
        { name: "Data processing pipelines" }
      ]
    },
    {
      title: "TECHNOLOGY STACK",
      categories: [
        { name: "Frontend", technologies: [ { name: "React" }, { name: "Next.js" }, { name: "Tailwind" } ] },
        { name: "Backend", technologies: [ { name: "Node.js" }, { name: "Express" } ] },
        { name: "Mobile", technologies: [ { name: "Flutter" }, { name: "React Native" }, { name: "Swift" }, { name: "Kotlin" } ] },
        { name: "Database", technologies: [ { name: "MongoDB" }, { name: "MySQL" } ] },
        { name: "Cloud", technologies: [ { name: "AWS" }, { name: "Docker" }, { name: "Kubernetes" } ] },
        { name: "Design", technologies: [ { name: "Adobe Photoshop" }, { name: "Illustrator" } ] }
      ]
    },
    {
      title: "SUB-SERVICES",
      items: [
        { name: "Web Applications", description: "Fast, scalable web platforms", link: "/services/software-development/web-applications" },
        { name: "Mobile Applications", description: "iOS and Android apps", link: "/services/software-development/mobile-applications" },
        { name: "SaaS Platforms", description: "Subscription-based solutions", link: "/services/software-development/saas-platforms" },
        { name: "API & Integrations", description: "Connect underlying systems", link: "/services/software-development/api-integrations" },
        { name: "Custom Systems & Dashboards", description: "Internal tooling", link: "/services/software-development/custom-systems" }
      ]
    },
    {
      title: "OUTCOMES",
      items: [
        { name: "Faster operations" },
        { name: "Reduced manual work" },
        { name: "Scalable systems" },
        { name: "Better data visibility" }
      ]
    }
  ]
};

export const webAppDevData = {
  title: "Web Application Development",
  intro: "We build fast, scalable web applications designed for performance and long-term growth.",
  sections: [
    { title: "WHAT WE BUILD", items: [ { name: "SaaS platforms" }, { name: "Admin dashboards" }, { name: "Customer portals" }, { name: "Business applications" } ] },
    { title: "TECHNOLOGIES USED", categories: [ { name: "Frontend", technologies: [ {name: "React"}, {name: "Next.js"}, {name: "Tailwind"} ] }, { name: "Backend", technologies: [ {name: "Node.js"}, {name: "Express"} ] }, { name: "Database", technologies: [ {name: "MongoDB"}, {name: "MySQL"} ] }, { name: "Cloud", technologies: [ {name: "AWS"} ] } ] },
    { title: "USE CASES", items: [ { name: "Internal tools" }, { name: "SaaS platforms" }, { name: "Client-facing systems" } ] },
    { title: "OUTCOMES", items: [ { name: "High performance" }, { name: "Scalable architecture" }, { name: "Strong UX" } ] },
  ]
};

export const mobileAppDevData = {
  title: "Mobile App Development",
  intro: "We build high-performance mobile apps for iOS and Android.",
  sections: [
    { title: "WHAT WE BUILD", items: [ { name: "Consumer apps" }, { name: "Business apps" }, { name: "Cross-platform apps" }, { name: "Native apps" } ] },
    { title: "TECHNOLOGIES USED", categories: [ { name: "Tech", technologies: [ {name: "Flutter"}, {name: "React Native"}, {name: "Swift"}, {name: "Kotlin"}, {name: "Firebase"} ] } ] },
    { title: "APPROACH", items: [ { name: "We select native or cross-platform based on performance, scalability, and product requirements." } ] },
    { title: "OUTCOMES", items: [ { name: "Faster launch" }, { name: "Optimised performance" }, { name: "Scalable apps" } ] },
  ]
};

export const saasPlatformDevData = {
  title: "SaaS Platform Development",
  intro: "We build scalable SaaS products designed for growth and monetisation.",
  sections: [
    { title: "WHAT WE BUILD", items: [ { name: "Multi-tenant systems" }, { name: "Subscription platforms" }, { name: "Admin dashboards" } ] },
    { title: "TECHNOLOGIES", categories: [ { name: "Tech", technologies: [ {name: "Full modern stack (frontend, backend, cloud, database)"} ] } ] },
    { title: "OUTCOMES", items: [ { name: "Scalable systems" }, { name: "Monetisation-ready" }, { name: "Growth-ready" } ] },
  ]
};

export const apiIntegrationData = {
  title: "API Development & Integrations",
  intro: "We connect systems and enable seamless data exchange.",
  sections: [
    { title: "WHAT WE DO", items: [ { name: "API development" }, { name: "Third-party integrations" }, { name: "System connectivity" } ] },
    { title: "TECHNOLOGIES", categories: [ { name: "Tech", technologies: [ {name: "Node.js"}, {name: "REST APIs"}, {name: "Cloud services"} ] } ] },
    { title: "OUTCOMES", items: [ { name: "Connected systems" }, { name: "Automation" }, { name: "Efficiency" } ] },
  ]
};

export const customSystemsData = {
  title: "Custom Systems & Dashboards",
  intro: "We build internal tools that improve efficiency and visibility.",
  sections: [
    { title: "WHAT WE BUILD", items: [ { name: "Dashboards" }, { name: "Reporting tools" }, { name: "Workflow systems" } ] },
    { title: "OUTCOMES", items: [ { name: "Better decisions" }, { name: "Real-time insights" }, { name: "Reduced manual work" } ] },
  ]
};

export const itInfrastructureCloudData = {
  title: "IT Infrastructure & Cloud",
  intro: "We design and manage infrastructure that ensures performance, scalability, and security.",
  sections: [
    {
      title: "WHAT WE DO",
      items: [
        { name: "Cloud architecture" },
        { name: "Server management" },
        { name: "Performance optimisation" },
        { name: "Monitoring" },
        { name: "Security" }
      ]
    },
    {
      title: "INFRASTRUCTURE STACK",
      categories: [
        { name: "Cloud", technologies: [ { name: "AWS (EC2, RDS, S3, CloudFront, Lambda, VPC)" } ] },
        { name: "Containers", technologies: [ { name: "Docker" }, { name: "Kubernetes" } ] },
        { name: "Edge", technologies: [ { name: "Cloudflare" } ] },
        { name: "Servers", technologies: [ { name: "Linux" }, { name: "DirectAdmin" } ] },
        { name: "Monitoring", technologies: [ { name: "CloudWatch" } ] },
        { name: "Security", technologies: [ { name: "IAM" }, { name: "Firewall" } ] }
      ]
    },
    {
      title: "SUB-SERVICES",
      items: [
        { name: "Cloud Architecture", link: "/services/it-infrastructure-cloud/cloud-architecture" },
        { name: "Server & DevOps Management", link: "/services/it-infrastructure-cloud/server-devops" },
        { name: "Performance Optimisation", link: "/services/it-infrastructure-cloud/performance-optimisation" },
        { name: "Security & Monitoring", link: "/services/it-infrastructure-cloud/security-monitoring" }
      ]
    },
    {
      title: "OUTCOMES",
      items: [
        { name: "High availability" },
        { name: "Faster systems" },
        { name: "Secure environments" }
      ]
    }
  ]
};

export const cloudArchData = {
  title: "Cloud Architecture",
  intro: "We design scalable, resilient cloud infrastructure tailored to your application and business needs.",
  sections: [
    { title: "WHAT WE DO", items: [ { name: "Design cloud architecture from scratch" }, { name: "Migrate systems to AWS" }, { name: "Set up scalable environments" }, { name: "Optimise cloud cost and performance" } ] },
    { title: "TECHNOLOGIES USED", categories: [ { name: "Tech", technologies: [ {name: "AWS (EC2, RDS, S3, CloudFront, Lambda, VPC)"}, {name: "Infrastructure design patterns"} ] } ] },
    { title: "USE CASES", items: [ { name: "Migrating legacy systems to cloud" }, { name: "Launching new applications" }, { name: "Scaling platforms for growth" } ] },
    { title: "OUTCOMES", items: [ { name: "Scalable infrastructure" }, { name: "High availability" }, { name: "Cost-efficient systems" } ] },
  ]
};

export const serverDevopsData = {
  title: "Server & DevOps Management",
  intro: "We manage and optimise servers and deployment pipelines to ensure stability and efficiency.",
  sections: [
    { title: "WHAT WE DO", items: [ { name: "Server setup and configuration" }, { name: "Deployment automation" }, { name: "CI/CD pipeline setup" }, { name: "Environment management" } ] },
    { title: "TECHNOLOGIES USED", categories: [ { name: "Tech", technologies: [ {name: "Linux"}, {name: "Docker"}, {name: "Kubernetes"}, {name: "DirectAdmin"} ] } ] },
    { title: "USE CASES", items: [ { name: "Managing production servers" }, { name: "Automating deployments" }, { name: "Improving system reliability" } ] },
    { title: "OUTCOMES", items: [ { name: "Stable environments" }, { name: "Faster deployments" }, { name: "Reduced downtime" } ] },
  ]
};

export const performanceOptData = {
  title: "Performance Optimisation",
  intro: "We improve system speed, responsiveness, and efficiency across applications and infrastructure.",
  sections: [
    { title: "WHAT WE DO", items: [ { name: "Identify bottlenecks" }, { name: "Optimise server performance" }, { name: "Improve application speed" }, { name: "Enhance database performance" } ] },
    { title: "TECHNOLOGIES USED", categories: [ { name: "Tech", technologies: [ {name: "Caching systems"}, {name: "Cloud optimisation tools"}, {name: "Performance monitoring tools"} ] } ] },
    { title: "USE CASES", items: [ { name: "Slow websites or apps" }, { name: "Scaling under load" }, { name: "Improving user experience" } ] },
    { title: "OUTCOMES", items: [ { name: "Faster load times" }, { name: "Better user experience" }, { name: "Improved system efficiency" } ] },
  ]
};

export const securityMonitoringData = {
  title: "Security & Monitoring",
  intro: "We secure your systems and ensure continuous monitoring for uptime and performance.",
  sections: [
    { title: "WHAT WE DO", items: [ { name: "System security hardening" }, { name: "Access control management" }, { name: "Monitoring and alert systems" }, { name: "Backup and recovery setup" } ] },
    { title: "TECHNOLOGIES USED", categories: [ { name: "Tech", technologies: [ {name: "CloudWatch"}, {name: "Cloudflare"}, {name: "Firewall configurations"}, {name: "IAM systems"} ] } ] },
    { title: "USE CASES", items: [ { name: "Securing production systems" }, { name: "Preventing downtime" }, { name: "Monitoring system health" } ] },
    { title: "OUTCOMES", items: [ { name: "Secure systems" }, { name: "Reduced risk" }, { name: "Reliable uptime" } ] },
  ]
};

export const digitalGrowthData = {
  title: "Digital Growth",
  intro: "We help businesses grow through data-driven digital strategies.",
  sections: [
    {
      title: "WHAT WE DO",
      items: [
        { name: "Paid campaigns" },
        { name: "Conversion optimisation" },
        { name: "Analytics" },
        { name: "Funnels" }
      ]
    },
    {
      title: "SUB-SERVICES",
      items: [
        { name: "Performance Marketing", link: "/services/digital-growth/performance-marketing" },
        { name: "Conversion Optimisation", link: "/services/digital-growth/conversion-optimisation" },
        { name: "Analytics & Tracking", link: "/services/digital-growth/analytics-tracking" },
        { name: "Funnels & Landing Pages", link: "/services/digital-growth/funnels-landing-pages" }
      ]
    },
    {
      title: "OUTCOMES",
      items: [
        { name: "More leads" },
        { name: "Better ROI" },
        { name: "Higher conversions" }
      ]
    }
  ]
};

export const perfMarketingData = {
  title: "Performance Marketing",
  intro: "We run data-driven advertising campaigns focused on measurable results and ROI.",
  sections: [
    { title: "WHAT WE DO", items: [ { name: "Paid advertising campaigns" }, { name: "Campaign optimisation" }, { name: "Audience targeting" }, { name: "Budget allocation" } ] },
    { title: "CHANNELS", categories: [ { name: "Tech", technologies: [ {name: "Google Ads"}, {name: "Meta Ads"}, {name: "Other paid platforms"} ] } ] },
    { title: "USE CASES", items: [ { name: "Lead generation" }, { name: "Product launches" }, { name: "Scaling marketing campaigns" } ] },
    { title: "OUTCOMES", items: [ { name: "More leads" }, { name: "Lower cost per acquisition" }, { name: "Improved ROI" } ] },
  ]
};

export const convOptData = {
  title: "Conversion Optimisation",
  intro: "We improve how users interact with your website to increase conversions and results.",
  sections: [
    { title: "WHAT WE DO", items: [ { name: "Landing page optimisation" }, { name: "A/B testing" }, { name: "User journey improvements" }, { name: "UX enhancements" } ] },
    { title: "USE CASES", items: [ { name: "Low conversion websites" }, { name: "Improving lead generation" }, { name: "Increasing sales" } ] },
    { title: "OUTCOMES", items: [ { name: "Higher conversion rates" }, { name: "Better user experience" }, { name: "Increased revenue" } ] },
  ]
};

export const analyticsTrackData = {
  title: "Analytics & Tracking",
  intro: "We implement tracking systems to give you clear visibility into user behaviour and performance.",
  sections: [
    { title: "WHAT WE DO", items: [ { name: "Analytics setup" }, { name: "Event tracking" }, { name: "Funnel tracking" }, { name: "Reporting dashboards" } ] },
    { title: "TOOLS", categories: [ { name: "Tech", technologies: [ {name: "Google Analytics"}, {name: "Tracking tools"}, {name: "Custom dashboards"} ] } ] },
    { title: "USE CASES", items: [ { name: "Understanding user behaviour" }, { name: "Tracking campaign performance" }, { name: "Measuring ROI" } ] },
    { title: "OUTCOMES", items: [ { name: "Better decision-making" }, { name: "Clear performance insights" }, { name: "Data-driven strategy" } ] },
  ]
};

export const funnelsData = {
  title: "Funnels & Landing Pages",
  intro: "We design and optimise funnels that convert visitors into leads and customers.",
  sections: [
    { title: "WHAT WE DO", items: [ { name: "Funnel design" }, { name: "Landing page creation" }, { name: "Lead capture systems" }, { name: "Conversion-focused design" } ] },
    { title: "USE CASES", items: [ { name: "Lead generation funnels" }, { name: "Sales funnels" }, { name: "Campaign landing pages" } ] },
    { title: "OUTCOMES", items: [ { name: "More qualified leads" }, { name: "Higher conversion rates" }, { name: "Better campaign performance" } ] },
  ]
};
