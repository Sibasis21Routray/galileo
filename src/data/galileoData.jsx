import React from 'react';
import { 
  FiCode, FiSmartphone, FiActivity, FiCloud, FiServer, FiShield, 
  FiTrendingUp, FiTarget, FiPieChart, FiLayout, FiBox, FiDatabase, 
  FiCpu, FiZap, FiGlobe, FiBarChart2, FiMail, FiMessageCircle, 
  FiShoppingCart, FiUsers, FiLock, FiMonitor, FiHardDrive, FiChip,
  FiWifi, FiAnchor, FiAward, FiStar, FiCheckCircle, FiLoader,
  FiCalendar, FiClock, FiDollarSign, FiHeart, FiThumbsUp, FiCompass,
  FiMap, FiFlag, FiEye, FiHeadphones, FiLayers, FiMenu, FiGrid,
  FiList, FiSliders, FiSettings, FiTool, FiUserCheck, FiUserPlus
} from "react-icons/fi";

// Image mapping for dynamic images
export const imageMap = {
  // Software Development Images
  "Web applications": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Mobile applications": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
  "SaaS platforms": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
  "APIs and integrations": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "Custom systems and dashboards": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  
  // Advanced Capabilities Images
  "AI-driven automation": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  "Machine learning integrations": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
  "Blockchain-based applications (where relevant)": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ethereum/ethereum-original.svg",
  "Data processing pipelines": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg",
  
  // IT Infrastructure Images
  "Cloud architecture": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
  "Server management": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  "Performance optimisation": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg",
  "Monitoring": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg",
  "Security": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudflare/cloudflare-original.svg",
  
  // Digital Growth Images
  "Paid campaigns": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
  "Conversion optimisation": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
  "Analytics": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
  "Funnels": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  
  // Sub-services Images
  "Web Applications": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Mobile Applications": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
  "API & Integrations": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "Custom Systems & Dashboards": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  
  // Performance Marketing
  "Performance Marketing": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
  "Analytics & Tracking": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
  "Funnels & Landing Pages": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  
  // Default fallback image
  "default": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg"
};

// Main Services Data
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
    icon: <FiTrendingUp className="text-[#29f67a]" size={32} />,
    path: "/services/digital-growth",
  },
];

// ============================================================
// SOFTWARE DEVELOPMENT DATA
// ============================================================
export const softwareDevelopmentData = {
  title: "Software Development",
  intro: "We design and build custom platforms that solve real business problems — from internal tools to full-scale digital products.",
  sections: [
    {
      title: "WHAT WE BUILD",
      icon: "FiPackage",
      items: [
        { name: "Web applications", image: imageMap["Web applications"] },
        { name: "Mobile applications", image: imageMap["Mobile applications"] },
        { name: "SaaS platforms", image: imageMap["SaaS platforms"] },
        { name: "APIs and integrations", image: imageMap["APIs and integrations"] },
        { name: "Custom systems and dashboards", image: imageMap["Custom systems and dashboards"] }
      ]
    },
    {
      title: "ADVANCED CAPABILITIES",
      icon: "FiCpu",
      items: [
        { name: "AI-driven automation", image: imageMap["AI-driven automation"] },
        { name: "Machine learning integrations", image: imageMap["Machine learning integrations"] },
        { name: "Blockchain-based applications (where relevant)", image: imageMap["Blockchain-based applications (where relevant)"] },
        { name: "Data processing pipelines", image: imageMap["Data processing pipelines"] }
      ]
    },
    {
      title: "TECHNOLOGY STACK",
      icon: "FiTool",
      categories: [
        { name: "Frontend", icon: "FiMonitor", technologies: [{ name: "React", image: "/icons/react.svg" }, { name: "Next.js", image: "/icons/nextjs.svg" }, { name: "Tailwind", image: "/icons/tailwind.svg" }] },
        { name: "Backend", icon: "FiServer", technologies: [{ name: "Node.js", image: "/icons/nodejs.svg" }, { name: "Express", image: "/icons/express.svg" }] },
        { name: "Mobile", icon: "FiSmartphone", technologies: [{ name: "Flutter", image: "/icons/flutter.svg" }, { name: "React Native", image: "/icons/react.svg" }, { name: "Swift", image: "/icons/swift.svg" }, { name: "Kotlin", image: "/icons/kotlin.svg" }] },
        { name: "Database", icon: "FiDatabase", technologies: [{ name: "MongoDB", image: "/icons/mongodb.svg" }, { name: "MySQL", image: "/icons/mysql.svg" }] },
        { name: "Cloud", icon: "FiCloud", technologies: [{ name: "AWS", image: "/icons/aws.svg" }, { name: "Docker", image: "/icons/docker.svg" }, { name: "Kubernetes", image: "/icons/kubernetes.svg" }] },
        { name: "Design", icon: "FiPenTool", technologies: [{ name: "Adobe Photoshop", image: "/icons/photoshop.svg" }, { name: "Illustrator", image: "/icons/illustrator.svg" }] }
      ]
    },
    {
      title: "SUB-SERVICES",
      icon: "FiLayers",
      items: [
        { name: "Web Applications", description: "Fast, scalable web platforms", link: "/services/software-development/web-applications", image: imageMap["Web Applications"] },
        { name: "Mobile Applications", description: "iOS and Android apps", link: "/services/software-development/mobile-applications", image: imageMap["Mobile Applications"] },
        { name: "SaaS Platforms", description: "Subscription-based solutions", link: "/services/software-development/saas-platforms", image: imageMap["SaaS platforms"] },
        { name: "API & Integrations", description: "Connect underlying systems", link: "/services/software-development/api-integrations", image: imageMap["API & Integrations"] },
        { name: "Custom Systems & Dashboards", description: "Internal tooling", link: "/services/software-development/custom-systems", image: imageMap["Custom Systems & Dashboards"] }
      ]
    },
    {
      title: "OUTCOMES",
      icon: "FiAward",
      items: [
        { name: "Faster operations" },
        { name: "Reduced manual work" },
        { name: "Scalable systems" },
        { name: "Better data visibility" }
      ]
    }
  ]
};

// Web Application Development
// ============================================================
// WEB APPLICATION DEVELOPMENT DATA WITH TECH IMAGES
// ============================================================
export const webAppDevData = {
  title: "Web Application Development",
  intro: "We build fast, scalable web applications designed for performance and long-term growth.",
  sections: [
    { 
      title: "WHAT WE BUILD", 
      icon: "FiPackage", 
      items: [
        { name: "SaaS platforms", image: imageMap["SaaS platforms"] }, 
        { name: "Admin dashboards", image: imageMap["Custom systems and dashboards"] }, 
        { name: "Customer portals", image: imageMap["Web applications"] }, 
        { name: "Business applications", image: imageMap["Web applications"] }
      ] 
    },
    { 
      title: "TECHNOLOGIES USED", 
      icon: "FiTool", 
      categories: [
        { 
          name: "Frontend", 
          icon: "FiMonitor", 
          technologies: [
            { name: "React", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
            { name: "Next.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
            { name: "Tailwind", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
            { name: "TypeScript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" }
          ] 
        }, 
        { 
          name: "Backend", 
          icon: "FiServer", 
          technologies: [
            { name: "Node.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
            { name: "Express", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
            { name: "Python", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
            { name: "Django", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" }
          ] 
        }, 
        { 
          name: "Database", 
          icon: "FiDatabase", 
          technologies: [
            { name: "MongoDB", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
            { name: "PostgreSQL", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
            { name: "MySQL", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
            { name: "Redis", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" }
          ] 
        }, 
        { 
          name: "Cloud", 
          icon: "FiCloud", 
          technologies: [
            { name: "AWS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
            { name: "Docker", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
            { name: "Vercel", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" },
            { name: "Netlify", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg" }
          ] 
        }
      ] 
    },
    { 
      title: "USE CASES", 
      icon: "FiTarget", 
      items: [
        { name: "Internal tools" }, 
        { name: "SaaS platforms" }, 
        { name: "Client-facing systems" }
      ] 
    },
    { 
      title: "OUTCOMES", 
      icon: "FiAward", 
      items: [
        { name: "High performance" }, 
        { name: "Scalable architecture" }, 
        { name: "Strong UX" }
      ] 
    },
  ]
};

// ============================================================
// MOBILE APP DEVELOPMENT DATA WITH TECH IMAGES
// ============================================================
export const mobileAppDevData = {
  title: "Mobile App Development",
  intro: "We build high-performance mobile apps for iOS and Android.",
  sections: [
    { 
      title: "WHAT WE BUILD", 
      icon: "FiPackage", 
      items: [
        { name: "Consumer apps", image: imageMap["Mobile applications"] }, 
        { name: "Business apps", image: imageMap["Mobile applications"] }, 
        { name: "Cross-platform apps", image: imageMap["Mobile applications"] }, 
        { name: "Native apps", image: imageMap["Mobile applications"] }
      ] 
    },
    { 
      title: "TECHNOLOGIES USED", 
      icon: "FiTool", 
      categories: [
        { 
          name: "Frameworks", 
          icon: "FiChip", 
          technologies: [
            { name: "Flutter", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
            { name: "React Native", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
            { name: "Ionic", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original.svg" }
          ] 
        },
        { 
          name: "Native Languages", 
          icon: "FiCode", 
          technologies: [
            { name: "Swift", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" },
            { name: "Kotlin", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" },
            { name: "Java", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" }
          ] 
        },
        { 
          name: "Backend Services", 
          icon: "FiCloud", 
          technologies: [
            { name: "Firebase", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
            { name: "Supabase", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" },
            { name: "AWS Amplify", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" }
          ] 
        }
      ] 
    },
    { 
      title: "APPROACH", 
      icon: "FiCompass", 
      items: [{ name: "We select native or cross-platform based on performance, scalability, and product requirements." }] 
    },
    { 
      title: "OUTCOMES", 
      icon: "FiAward", 
      items: [
        { name: "Faster launch" }, 
        { name: "Optimised performance" }, 
        { name: "Scalable apps" }
      ] 
    },
  ]
};

// ============================================================
// SAAS PLATFORM DEVELOPMENT DATA WITH TECH IMAGES
// ============================================================
export const saasPlatformDevData = {
  title: "SaaS Platform Development",
  intro: "We build scalable SaaS products designed for growth and monetisation.",
  sections: [
    { 
      title: "WHAT WE BUILD", 
      icon: "FiPackage", 
      items: [
        { name: "Multi-tenant systems", image: imageMap["SaaS platforms"] }, 
        { name: "Subscription platforms", image: imageMap["SaaS platforms"] }, 
        { name: "Admin dashboards", image: imageMap["Custom systems and dashboards"] }
      ] 
    },
    { 
      title: "TECHNOLOGIES", 
      icon: "FiTool", 
      categories: [
        { 
          name: "Full Stack", 
          icon: "FiCpu", 
          technologies: [
            { name: "React/Next.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
            { name: "Node.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
            { name: "PostgreSQL", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
            { name: "Redis", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
            { name: "AWS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
            { name: "Docker", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" }
          ] 
        }
      ] 
    },
    { 
      title: "OUTCOMES", 
      icon: "FiAward", 
      items: [
        { name: "Scalable systems" }, 
        { name: "Monetisation-ready" }, 
        { name: "Growth-ready" }
      ] 
    },
  ]
};

// ============================================================
// API & INTEGRATION DATA WITH TECH IMAGES
// ============================================================
export const apiIntegrationData = {
  title: "API Development & Integrations",
  intro: "We connect systems and enable seamless data exchange.",
  sections: [
    { 
      title: "WHAT WE DO", 
      icon: "FiPackage", 
      items: [
        { name: "API development", image: imageMap["APIs and integrations"] }, 
        { name: "Third-party integrations", image: imageMap["APIs and integrations"] }, 
        { name: "System connectivity", image: imageMap["APIs and integrations"] }
      ] 
    },
    { 
      title: "TECHNOLOGIES", 
      icon: "FiTool", 
      categories: [
        { 
          name: "API Stack", 
          icon: "FiCpu", 
          technologies: [
            { name: "Node.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
            { name: "Express", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
            { name: "GraphQL", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
            { name: "REST APIs", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
            { name: "Swagger", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg" }
          ] 
        }
      ] 
    },
    { 
      title: "OUTCOMES", 
      icon: "FiAward", 
      items: [
        { name: "Connected systems" }, 
        { name: "Automation" }, 
        { name: "Efficiency" }
      ] 
    },
  ]
};

// ============================================================
// CUSTOM SYSTEMS DATA
// ============================================================
export const customSystemsData = {
  title: "Custom Systems & Dashboards",
  intro: "We build internal tools that improve efficiency and visibility.",
  sections: [
    { 
      title: "WHAT WE BUILD", 
      icon: "FiPackage", 
      items: [
        { name: "Dashboards", image: imageMap["Custom systems and dashboards"] }, 
        { name: "Reporting tools", image: imageMap["Custom systems and dashboards"] }, 
        { name: "Workflow systems", image: imageMap["Custom systems and dashboards"] }
      ] 
    },
    { 
      title: "OUTCOMES", 
      icon: "FiAward", 
      items: [
        { name: "Better decisions" }, 
        { name: "Real-time insights" }, 
        { name: "Reduced manual work" }
      ] 
    },
  ]
};

// ============================================================
// IT INFRASTRUCTURE & CLOUD DATA
// ============================================================
export const itInfraData = {
  title: "IT Infrastructure & Cloud",
  intro: "We design and manage infrastructure that ensures performance, scalability, and security.",
  sections: [
    {
      title: "WHAT WE DO",
      icon: "FiServer",
      items: [
        { name: "Cloud architecture", image: imageMap["Cloud architecture"] },
        { name: "Server management", image: imageMap["Server management"] },
        { name: "Performance optimisation", image: imageMap["Performance optimisation"] },
        { name: "Monitoring", image: imageMap["Monitoring"] },
        { name: "Security", image: imageMap["Security"] }
      ]
    },
    {
      title: "INFRASTRUCTURE STACK",
      icon: "FiTool",
      categories: [
        { name: "Cloud", icon: "FiCloud", technologies: [{ name: "AWS (EC2, RDS, S3, CloudFront, Lambda, VPC)" }] },
        { name: "Containers", icon: "FiBox", technologies: [{ name: "Docker" }, { name: "Kubernetes" }] },
        { name: "Edge", icon: "FiWifi", technologies: [{ name: "Cloudflare" }] },
        { name: "Servers", icon: "FiHardDrive", technologies: [{ name: "Linux" }, { name: "DirectAdmin" }] },
        { name: "Monitoring", icon: "FiActivity", technologies: [{ name: "CloudWatch" }] },
        { name: "Security", icon: "FiShield", technologies: [{ name: "IAM" }, { name: "Firewall" }] }
      ]
    },
    {
      title: "SUB-SERVICES",
      icon: "FiLayers",
      items: [
        { name: "Cloud Architecture", link: "/services/it-infrastructure-cloud/cloud-architecture", image: imageMap["Cloud architecture"] },
        { name: "Server & DevOps Management", link: "/services/it-infrastructure-cloud/server-devops", image: imageMap["Server management"] },
        { name: "Performance Optimisation", link: "/services/it-infrastructure-cloud/performance-optimisation", image: imageMap["Performance optimisation"] },
        { name: "Security & Monitoring", link: "/services/it-infrastructure-cloud/security-monitoring", image: imageMap["Security"] }
      ]
    },
    {
      title: "OUTCOMES",
      icon: "FiAward",
      items: [
        { name: "High availability" },
        { name: "Faster systems" },
        { name: "Secure environments" }
      ]
    }
  ]
};

// Cloud Architecture
export const cloudArchData = {
  title: "Cloud Architecture",
  intro: "We design scalable, resilient cloud infrastructure tailored to your application and business needs.",
  sections: [
    { title: "WHAT WE DO", icon: "FiCloud", items: [{ name: "Design cloud architecture from scratch", image: imageMap["Cloud architecture"] }, { name: "Migrate systems to AWS", image: imageMap["Cloud architecture"] }, { name: "Set up scalable environments", image: imageMap["Cloud architecture"] }, { name: "Optimise cloud cost and performance", image: imageMap["Cloud architecture"] }] },
    { title: "TECHNOLOGIES USED", icon: "FiTool", categories: [{ name: "Tech", icon: "FiCpu", technologies: [{ name: "AWS (EC2, RDS, S3, CloudFront, Lambda, VPC)" }, { name: "Infrastructure design patterns" }] }] },
    { title: "USE CASES", icon: "FiTarget", items: [{ name: "Migrating legacy systems to cloud" }, { name: "Launching new applications" }, { name: "Scaling platforms for growth" }] },
    { title: "OUTCOMES", icon: "FiAward", items: [{ name: "Scalable infrastructure" }, { name: "High availability" }, { name: "Cost-efficient systems" }] },
  ]
};

// Server & DevOps
export const serverDevopsData = {
  title: "Server & DevOps Management",
  intro: "We manage and optimise servers and deployment pipelines to ensure stability and efficiency.",
  sections: [
    { title: "WHAT WE DO", icon: "FiServer", items: [{ name: "Server setup and configuration", image: imageMap["Server management"] }, { name: "Deployment automation", image: imageMap["Server management"] }, { name: "CI/CD pipeline setup", image: imageMap["Server management"] }, { name: "Environment management", image: imageMap["Server management"] }] },
    { title: "TECHNOLOGIES USED", icon: "FiTool", categories: [{ name: "Tech", icon: "FiCpu", technologies: [{ name: "Linux" }, { name: "Docker" }, { name: "Kubernetes" }, { name: "DirectAdmin" }] }] },
    { title: "USE CASES", icon: "FiTarget", items: [{ name: "Managing production servers" }, { name: "Automating deployments" }, { name: "Improving system reliability" }] },
    { title: "OUTCOMES", icon: "FiAward", items: [{ name: "Stable environments" }, { name: "Faster deployments" }, { name: "Reduced downtime" }] },
  ]
};

// Performance Optimisation
export const performanceOptData = {
  title: "Performance Optimisation",
  intro: "We improve system speed, responsiveness, and efficiency across applications and infrastructure.",
  sections: [
    { title: "WHAT WE DO", icon: "FiZap", items: [{ name: "Identify bottlenecks", image: imageMap["Performance optimisation"] }, { name: "Optimise server performance", image: imageMap["Performance optimisation"] }, { name: "Improve application speed", image: imageMap["Performance optimisation"] }, { name: "Enhance database performance", image: imageMap["Performance optimisation"] }] },
    { title: "TECHNOLOGIES USED", icon: "FiTool", categories: [{ name: "Tech", icon: "FiCpu", technologies: [{ name: "Caching systems" }, { name: "Cloud optimisation tools" }, { name: "Performance monitoring tools" }] }] },
    { title: "USE CASES", icon: "FiTarget", items: [{ name: "Slow websites or apps" }, { name: "Scaling under load" }, { name: "Improving user experience" }] },
    { title: "OUTCOMES", icon: "FiAward", items: [{ name: "Faster load times" }, { name: "Better user experience" }, { name: "Improved system efficiency" }] },
  ]
};

// Security & Monitoring
export const securityMonitoringData = {
  title: "Security & Monitoring",
  intro: "We secure your systems and ensure continuous monitoring for uptime and performance.",
  sections: [
    { title: "WHAT WE DO", icon: "FiShield", items: [{ name: "System security hardening", image: imageMap["Security"] }, { name: "Access control management", image: imageMap["Security"] }, { name: "Monitoring and alert systems", image: imageMap["Monitoring"] }, { name: "Backup and recovery setup", image: imageMap["Security"] }] },
    { title: "TECHNOLOGIES USED", icon: "FiTool", categories: [{ name: "Tech", icon: "FiCpu", technologies: [{ name: "CloudWatch" }, { name: "Cloudflare" }, { name: "Firewall configurations" }, { name: "IAM systems" }] }] },
    { title: "USE CASES", icon: "FiTarget", items: [{ name: "Securing production systems" }, { name: "Preventing downtime" }, { name: "Monitoring system health" }] },
    { title: "OUTCOMES", icon: "FiAward", items: [{ name: "Secure systems" }, { name: "Reduced risk" }, { name: "Reliable uptime" }] },
  ]
};

// ============================================================
// DIGITAL GROWTH DATA
// ============================================================
export const digitalGrowthData = {
  title: "Digital Growth",
  intro: "We help businesses grow through data-driven digital strategies.",
  sections: [
    {
      title: "WHAT WE DO",
      icon: "FiTrendingUp",
      items: [
        { name: "Paid campaigns", image: imageMap["Paid campaigns"] },
        { name: "Conversion optimisation", image: imageMap["Conversion optimisation"] },
        { name: "Analytics", image: imageMap["Analytics"] },
        { name: "Funnels", image: imageMap["Funnels"] }
      ]
    },
    {
      title: "SUB-SERVICES",
      icon: "FiLayers",
      items: [
        { name: "Performance Marketing", link: "/services/digital-growth/performance-marketing", image: imageMap["Performance Marketing"] },
        { name: "Conversion Optimisation", link: "/services/digital-growth/conversion-optimisation", image: imageMap["Conversion optimisation"] },
        { name: "Analytics & Tracking", link: "/services/digital-growth/analytics-tracking", image: imageMap["Analytics & Tracking"] },
        { name: "Funnels & Landing Pages", link: "/services/digital-growth/funnels-landing-pages", image: imageMap["Funnels & Landing Pages"] }
      ]
    },
    {
      title: "OUTCOMES",
      icon: "FiAward",
      items: [
        { name: "More leads" },
        { name: "Better ROI" },
        { name: "Higher conversions" }
      ]
    }
  ]
};

// Performance Marketing
export const perfMarketingData = {
  title: "Performance Marketing",
  intro: "We run data-driven advertising campaigns focused on measurable results and ROI.",
  sections: [
    { title: "WHAT WE DO", icon: "FiTrendingUp", items: [{ name: "Paid advertising campaigns", image: imageMap["Paid campaigns"] }, { name: "Campaign optimisation", image: imageMap["Conversion optimisation"] }, { name: "Audience targeting", image: imageMap["Analytics"] }, { name: "Budget allocation", image: imageMap["Paid campaigns"] }] },
    { title: "CHANNELS", icon: "FiGlobe", categories: [{ name: "Tech", icon: "FiCpu", technologies: [{ name: "Google Ads" }, { name: "Meta Ads" }, { name: "Other paid platforms" }] }] },
    { title: "USE CASES", icon: "FiTarget", items: [{ name: "Lead generation" }, { name: "Product launches" }, { name: "Scaling marketing campaigns" }] },
    { title: "OUTCOMES", icon: "FiAward", items: [{ name: "More leads" }, { name: "Lower cost per acquisition" }, { name: "Improved ROI" }] },
  ]
};

// Conversion Optimisation
export const convOptData = {
  title: "Conversion Optimisation",
  intro: "We improve how users interact with your website to increase conversions and results.",
  sections: [
    { title: "WHAT WE DO", icon: "FiTarget", items: [{ name: "Landing page optimisation", image: imageMap["Funnels"] }, { name: "A/B testing", image: imageMap["Conversion optimisation"] }, { name: "User journey improvements", image: imageMap["Funnels"] }, { name: "UX enhancements", image: imageMap["Conversion optimisation"] }] },
    { title: "USE CASES", icon: "FiCompass", items: [{ name: "Low conversion websites" }, { name: "Improving lead generation" }, { name: "Increasing sales" }] },
    { title: "OUTCOMES", icon: "FiAward", items: [{ name: "Higher conversion rates" }, { name: "Better user experience" }, { name: "Increased revenue" }] },
  ]
};

// Analytics & Tracking
export const analyticsTrackData = {
  title: "Analytics & Tracking",
  intro: "We implement tracking systems to give you clear visibility into user behaviour and performance.",
  sections: [
    { title: "WHAT WE DO", icon: "FiBarChart2", items: [{ name: "Analytics setup", image: imageMap["Analytics"] }, { name: "Event tracking", image: imageMap["Analytics"] }, { name: "Funnel tracking", image: imageMap["Funnels"] }, { name: "Reporting dashboards", image: imageMap["Analytics"] }] },
    { title: "TOOLS", icon: "FiTool", categories: [{ name: "Tech", icon: "FiCpu", technologies: [{ name: "Google Analytics" }, { name: "Tracking tools" }, { name: "Custom dashboards" }] }] },
    { title: "USE CASES", icon: "FiTarget", items: [{ name: "Understanding user behaviour" }, { name: "Tracking campaign performance" }, { name: "Measuring ROI" }] },
    { title: "OUTCOMES", icon: "FiAward", items: [{ name: "Better decision-making" }, { name: "Clear performance insights" }, { name: "Data-driven strategy" }] },
  ]
};

// Funnels & Landing Pages
export const funnelsData = {
  title: "Funnels & Landing Pages",
  intro: "We design and optimise funnels that convert visitors into leads and customers.",
  sections: [
    { title: "WHAT WE DO", icon: "FiFlag", items: [{ name: "Funnel design", image: imageMap["Funnels"] }, { name: "Landing page creation", image: imageMap["Funnels"] }, { name: "Lead capture systems", image: imageMap["Funnels"] }, { name: "Conversion-focused design", image: imageMap["Funnels"] }] },
    { title: "USE CASES", icon: "FiTarget", items: [{ name: "Lead generation funnels" }, { name: "Sales funnels" }, { name: "Campaign landing pages" }] },
    { title: "OUTCOMES", icon: "FiAward", items: [{ name: "More qualified leads" }, { name: "Higher conversion rates" }, { name: "Better campaign performance" }] },
  ]
};