import React from 'react';
import { 
  FiCode, FiSmartphone, FiCloud, FiServer, FiShield, 
  FiTrendingUp, FiActivity,
  FiEye,
  FiBarChart2,
  FiUsers,
} from "react-icons/fi";
import {
  // From first set
  Gauge, Scale, Users, Shield,
  // From second set  
  Rocket, Smartphone,
  // From third set
  Zap, UserMinus, TrendingUp, Eye, Smile, Timer,
  // From fourth set
  Building2, CreditCard, LineChart, Activity,
  // From fifth set
  Network, Brain,
  // From sixth set
  Bot,
  // From seventh set
  DollarSign,
  // From eighth set
  ClipboardList,
  // From ninth set
  Server, Code2,
  // From tenth set
  Sparkles, Battery,
  // From eleventh set
  ShieldAlert, FileCheck,
  // From twelfth set
  Target,
  // From thirteenth set
  LayoutGrid,
  // From fourteenth set
  BarChart3,
  // From fifteenth set
  RefreshCw
} from "lucide-react";


// ============================================================
// MAIN SERVICES DATA
// ============================================================
export const servicesData = [
  {
    title: "Software Development",
    description: "Design and build custom platforms tailored to your business — from web and mobile applications to full-scale SaaS products and internal systems.",
    icon: <FiCode className="text-[#29f67a]" size={32} />,
    path: "/services/software-development",
  },
  {
    title: "IT Infrastructure & Cloud",
    description: "Set up, optimise, and manage scalable infrastructure that ensures performance, reliability, and security across your systems.",
    icon: <FiCloud className="text-[#29f67a]" size={32} />,
    path: "/services/it-infrastructure-cloud",
  },
  {
    title: "Digital Growth",
    description: "Drive measurable growth through data-driven strategies, performance marketing, and conversion-focused digital optimisation.",
    icon: <FiActivity className="text-[#29f67a]" size={32} />,
    path: "/services/digital-growth",
  },
];

// ============================================================
// SOFTWARE DEVELOPMENT DATA
// ============================================================
export const softwareDevelopmentData = {
  title: "Software Development",
  intro: "We design and build custom platforms that solve real business problems — from internal tools to full-scale digital products.",
  description: "Every business faces unique challenges that off-the-shelf software can't always solve. We take the time to understand your workflows, pain points, and goals before writing a single line of code. The result is software that fits your business like a glove — intuitive, efficient, and built to scale as you grow.",
  coverImage: "/service/serviceNew/softwareDev.jpg",
  sections: [
      // {
      //   title: "ADVANCED CAPABILITIES",
      //   description: "We go beyond standard development to integrate cutting-edge technologies that give your business a genuine competitive advantage in the market.",

      //   items: [
      //     { 
      //       name: "AI-driven automation", 
      //       description: "Integrate intelligent automation into your workflows to eliminate repetitive tasks, reduce human error, and free your team to focus on high-value strategic work that drives growth."
      //     },
      //     { 
      //       name: "Machine learning integrations", 
      //       description: "Leverage predictive models and data-driven insights to make smarter business decisions. From recommendation engines to anomaly detection, we help you harness the power of your data."
      //     },
      //     { 
      //       name: "Blockchain-based applications", 
      //       description: "Build transparent, secure, and decentralised solutions for industries that require immutable records, smart contracts, or trustless verification systems."
      //     },
      //     { 
      //       name: "Data processing pipelines", 
      //       description: "Handle large-scale data ingestion, transformation, and analysis with robust pipeline architecture designed for reliability and real-time processing capabilities."
      //     }
      //   ]
      // },
      {
      title: "SUB-SERVICES",
      description: "Explore our specialised development services, each tailored to specific business needs and technical requirements. Every sub-service is delivered with the same commitment to quality, scalability, and long-term thinking.",
      
      items: [
        { 
          name: "Web Applications", 
          description: "Fast, scalable web platforms built with modern frameworks like React and Next.js. From customer-facing portals to complex SaaS dashboards, we build web apps that perform at scale and delight users with intuitive interfaces.", 
          link: "/services/software-development/web-applications", 
        },
        { 
          name: "Mobile Applications", 
          description: "Native and cross-platform iOS and Android apps that deliver exceptional user experiences. We help you reach your customers wherever they are with polished, performant mobile solutions that work flawlessly across devices.", 
          link: "/services/software-development/mobile-applications", 
        },
        { 
          name: "SaaS Platforms", 
          description: "Subscription-based solutions designed for growth and monetisation. We build multi-tenant architectures that scale effortlessly while keeping your operational costs predictable and under control.", 
          link: "/services/software-development/saas-platforms", 
        },
        { 
          name: "API & Integrations", 
          description: "Connect your systems and enable seamless data exchange. Our APIs are designed for reliability, security, and performance — ensuring your tools and services work together flawlessly.", 
          link: "/services/software-development/api-integrations", 
        },
        { 
          name: "Custom Systems & Dashboards", 
          description: "Internal tooling and reporting dashboards that give your team real-time visibility into business performance. Stop wrestling with spreadsheets and start making confident, data-driven decisions.", 
          link: "/services/software-development/custom-systems", 
        }
      ]
    },
    {
      title: "TECHNOLOGY STACK",
      description: "We use modern, battle-tested technologies to build reliable and maintainable systems that stand the test of time. Our stack is carefully selected for performance, developer productivity, and long-term maintainability.",

      categories: [
        { 
          name: "Frontend", 
          technologies: [
            { name: "React", image: "/service/serviceNew/react.svg" }, 
            { name: "Next.js", image: "/service/serviceNew/next.svg" }, 
            { name: "Tailwind", image: "/service/serviceNew//tailwindcss.svg" },
            { name: "TypeScript", image: "/service/serviceNew/ts.svg" },
            { name: "Vue.js", image: "/service/serviceNew/vue.svg" }
          ] 
        },
        { 
          name: "Backend", 
          technologies: [
            { name: "Node.js", image: "/service/serviceNew/node.svg" }, 
            { name: "Express", image: "/service/serviceNew/express.svg" },
            { name: "Python", image: "/service/serviceNew/py.svg" },
            { name: "Django", image: "/service/serviceNew/django.svg" },
            { name: "GraphQL", image: "/service/serviceNew/graphql.svg" }
          ] 
        },
        { 
          name: "Mobile", 
          technologies: [
            { name: "Flutter", image: "/service/serviceNew/flutter.svg" }, 
            { name: "React Native", image: "/service/serviceNew/react.svg" }, 
            { name: "Swift", image: "/service/serviceNew/swift.svg" }, 
            { name: "Kotlin", image: "/service/serviceNew/kotlin.svg" }
          ] 
        },
        { 
          name: "Database", 
          technologies: [
            { name: "MongoDB", image: "/service/serviceNew/mongodb.svg" }, 
            { name: "PostgreSQL", image: "/service/serviceNew/postgresql.svg" },
            { name: "Redis", image: "/service/serviceNew/redis.svg" },
            { name: "MySQL", image: "/service/serviceNew/mysql.svg" }
          ] 
        },
        { 
          name: "Cloud & DevOps", 
          technologies: [
            { name: "AWS", image: "/service/serviceNew/aws.webp" }, 
            { name: "Docker", image: "/service/serviceNew/docker.svg" }, 
            { name: "Kubernetes", image: "/service/serviceNew/kubernetes.svg" },
            { name: "GitHub Actions", image: "/service/serviceNew/github.svg" }
          ] 
        },
        { 
          name: "Design", 
          technologies: [
            { name: "Figma", image: "/service/serviceNew/figma.svg" },
            { name: "Adobe XD", image: "/service/serviceNew/xd.svg" }
          ] 
        }
      ]
    },
    
  
// ============================================================
// OUTCOMES SECTION
// ============================================================
{
  title: "OUTCOMES",
  description: "The tangible results you can expect when you partner with us for software development. We measure our success by the impact we have on your business.",
  
  items: [
    { 
      name: "Faster operations", 
      description: "Streamlined workflows that eliminate bottlenecks and reduce time-to-completion for critical business processes by up to 40%.",
      icon: <Zap className="w-8 h-8 text-[#29f67a]" />,
      iconBg: "bg-[#29f67a]/10"
    },
    { 
      name: "Reduced manual work", 
      description: "Intelligent automation that frees your team from repetitive tasks, allowing them to focus on strategic initiatives that move the needle.",
      icon: <UserMinus className="w-8 h-8 text-[#29f67a]" />,
      iconBg: "bg-[#29f67a]/10"
    },
    { 
      name: "Scalable systems", 
      description: "Architecture designed to handle 10x or 100x growth without requiring a complete rebuild or causing performance degradation.",
      icon: <TrendingUp className="w-8 h-8 text-[#29f67a]" />,
      iconBg: "bg-[#29f67a]/10"
    },
    { 
      name: "Better data visibility", 
      description: "Real-time dashboards and reporting tools that give stakeholders clear insight into business performance at a glance.",
      icon: <Eye className="w-8 h-8 text-[#29f67a]" />,
      iconBg: "bg-[#29f67a]/10"
    },
    { 
      name: "Improved user satisfaction", 
      description: "Intuitive interfaces and smooth performance that keep users engaged and reduce churn across your platforms.",
      icon: <Smile className="w-8 h-8 text-[#29f67a]" />,
      iconBg: "bg-[#29f67a]/10"
    },
    { 
      name: "Faster time to market", 
      description: "Efficient development processes that help you launch new features and products ahead of the competition.",
      icon: <Timer className="w-8 h-8 text-[#29f67a]" />,
      iconBg: "bg-[#29f67a]/10"
    }
  ]
}
  ]
};

// ============================================================
// WEB APPLICATION DEVELOPMENT DATA
// ============================================================
export const webAppDevData = {
  title: "Web Application Development",
  intro: "We build fast, scalable web applications designed for performance and long-term growth.",
  description: "The web is where your business lives. Whether you need a customer-facing platform, an internal tool, or a full-scale SaaS product, we build web applications that are secure, responsive, and engineered to scale. Our team stays at the forefront of web technology to deliver solutions that don't just work today — they're built for tomorrow.",
  coverImage: "/service/serviceNew/webApp.jpg",
  sections: [
    { 
      title: "TECHNOLOGIES USED", 
      description: "Our carefully curated tech stack ensures your web application is fast, maintainable, and built on industry best practices. Every technology choice is intentional and aligned with your project goals.",
     
      categories: [
        { 
          name: "Frontend", 
          technologies: [
            { name: "React", image: "/service/serviceNew/react.svg" },
            { name: "Next.js", image: "/service/serviceNew/next.svg" },
            { name: "Tailwind CSS", image: "/service/serviceNew/tailwindcss.svg" },
            { name: "TypeScript", image: "/service/serviceNew/ts.svg" }
          ] 
        }, 
        { 
          name: "Backend", 
          technologies: [
            { name: "Node.js", image: "/service/serviceNew/node.svg" },
            { name: "Express", image: "/service/serviceNew/express.svg" },
            { name: "Python", image: "/service/serviceNew/py.svg" },
            { name: "Django", image: "/service/serviceNew/django.svg" }
          ] 
        }, 
        { 
          name: "Database", 
          technologies: [
            { name: "MongoDB", image: "/service/serviceNew/mongodb.svg" },
            { name: "PostgreSQL", image: "/service/serviceNew/postgresql.svg" },
            { name: "MySQL", image: "/service/serviceNew/mysql.svg" },
            { name: "Redis", image: "/service/serviceNew/redis.svg" }
          ] 
        }, 
        { 
          name: "Deployment", 
          technologies: [
            { name: "AWS", image: "/service/serviceNew/aws.webp" },
            { name: "Docker", image: "/service/serviceNew/docker.svg" },
            { name: "Vercel", image: "/service/serviceNew/vercel.svg" },
            { name: "Netlify", image: "/service/serviceNew/netlify.svg" }
          ] 
        }
      ] 
    },
    { 
      title: "USE CASES", 
      description: "Common scenarios where our web applications deliver exceptional value for businesses of all sizes and across industries.",
     
      items: [
        { name: "Internal tools and admin panels", description: "Custom dashboards and management interfaces that streamline daily operations and provide complete visibility into business processes." }, 
        { name: "SaaS platforms and customer portals", description: "Multi-tenant platforms with user management, subscription billing, and role-based access control built in from day one." }, 
        { name: "Client-facing web applications", description: "Polished, responsive web experiences that engage your customers and reflect the quality of your brand." },
        { name: "E-commerce platforms", description: "Custom online stores and marketplaces with seamless payment integration and inventory management." },
        { name: "Content management systems", description: "Flexible CMS solutions that give your team complete control over content without requiring technical expertise." },
        { name: "Real-time collaboration tools", description: "Websockets-powered applications that enable seamless communication and teamwork across distributed teams." }
      ] 
    },
 
// ============================================================
// OUTCOMES SECTION
// ============================================================
{ 
  title: "OUTCOMES", 
  description: "What you can expect from our web application development process. Our focus on quality and performance delivers measurable business impact.",
 
  items: [
    { 
      name: "High performance", 
      description: "Lightning-fast load times and smooth interactions that keep users engaged and improve conversion rates across every page.",
      icon: <Gauge className="w-7 h-7 text-[#29f67a]" />,
      iconBg: "bg-[#29f67a]/10"
    }, 
    { 
      name: "Scalable architecture", 
      description: "Systems designed to handle growth from hundreds to millions of users without requiring fundamental rearchitecture.",
      icon: <Scale className="w-7 h-7 text-[#29f67a]" />,
      iconBg: "bg-[#29f67a]/10"
    }, 
    { 
      name: "Strong user experience", 
      description: "Intuitive interfaces that users love, reducing training time and support requests while increasing satisfaction.",
      icon: <Users className="w-7 h-7 text-[#29f67a]" />,
      iconBg: "bg-[#29f67a]/10"
    },
    { 
      name: "Security by default", 
      description: "Built-in protection against common vulnerabilities with proper authentication, encryption, and security best practices.",
      icon: <Shield className="w-7 h-7 text-[#29f67a]" />,
      iconBg: "bg-[#29f67a]/10"
    }
  ] 
}
  ]
};

// ============================================================
// MOBILE APP DEVELOPMENT DATA
// ============================================================
export const mobileAppDevData = {
  title: "Mobile App Development",
  intro: "We build high-performance mobile apps for iOS and Android.",
  description: "Mobile is where your customers spend their time. We help you meet them there with polished, performant applications that work flawlessly across devices. Whether you need a consumer app, an enterprise solution, or something in between, we deliver mobile experiences that users love to use and that drive real business results.",
  coverImage: "/service/serviceNew/mobileApp.jpeg",
  sections: [
    { 
      title: "TECHNOLOGIES USED", 
      description: "We select the right technology based on your project's specific requirements, performance needs, and budget considerations. Our team has deep expertise across native and cross-platform frameworks.",
     
      categories: [
        { 
          name: "Cross-Platform Frameworks", 
          technologies: [
            { name: "Flutter", image: "/service/serviceNew/flutter.svg" },
            { name: "React Native", image: "/service/serviceNew/react.svg" },
            { name: "Ionic", image: "/service/serviceNew/ionic.svg" }
          ] 
        },
        { 
          name: "Native Languages", 
          technologies: [
            { name: "Swift", image: "/service/serviceNew/swift.svg" },
            { name: "Kotlin", image: "/service/serviceNew/kotlin.svg" },
            { name: "Java", image: "/service/serviceNew/java.svg" }
          ] 
        },
        { 
          name: "Backend Services", 
          technologies: [
            { name: "Firebase", image: "/service/serviceNew/firebase.svg" },
            { name: "Supabase", image: "/service/serviceNew/supabase.svg" },
          ] 
        }
      ] 
    },
    { 
      title: "OUR APPROACH", 
      description: "A strategic methodology that ensures your mobile app delivers real business value and exceptional user experiences. We combine technical expertise with product thinking.",
      
      items: [
        { 
          name: "Technology Selection", 
          description: "We carefully evaluate whether native or cross-platform development is right for your project based on performance requirements, timeline, budget, and long-term maintenance considerations. There's no one-size-fits-all answer — we help you make the right choice for your specific situation." 
        },
        { 
          name: "Iterative Development", 
          description: "We build in focused sprints with regular demos and feedback loops. This approach ensures you see progress early and often, and that the final product aligns perfectly with your vision and user needs before launch." 
        }
      ] 
    },
    { 
      title: "USE CASES", 
      description: "Scenarios where our mobile app development expertise delivers the most value for businesses across different industries and stages of growth.",
      
      items: [
        { name: "Consumer-facing applications", description: "Engaging mobile experiences for retail, hospitality, entertainment, and direct-to-consumer brands that build loyalty and drive revenue." },
        { name: "Enterprise mobility solutions", description: "Secure, scalable apps for workforce management, field operations, and internal communication across large organisations." },
        { name: "Mobile-first startups", description: "MVP development for startups that need to validate their concept and reach early adopters quickly on mobile platforms." },
        { name: "E-commerce mobile apps", description: "Feature-rich shopping experiences with seamless checkout, push notifications, and personalised recommendations." },
        { name: "Healthcare and wellness apps", description: "HIPAA-compliant applications for patient engagement, telemedicine, appointment scheduling, and health tracking." },
        { name: "On-demand service platforms", description: "Real-time booking, tracking, and payment systems for delivery, transportation, and service-based businesses." }
      ] 
    },
// =======================================================
// OUTCOMES SECTION - MOBILE DEVELOPMENT
// ============================================================
{ 
  title: "OUTCOMES", 
  description: "The results you can expect from our mobile development process. Every project is measured against these success criteria.",
  
  items: [
    { 
      name: "Faster time to market", 
      description: "Efficient development processes and smart technology choices help you launch quickly without sacrificing quality.",
      icon: <Rocket className="w-7 h-7 text-[#29f67a]" />,
      iconBg: "bg-[#29f67a]/10"
    }, 
    { 
      name: "Optimised performance", 
      description: "Smooth animations, fast load times, and responsive interactions that keep users engaged and app store ratings high.",
      icon: <Gauge className="w-7 h-7 text-[#29f67a]" />,
      iconBg: "bg-[#29f67a]/10"
    }, 
    { 
      name: "Scalable applications", 
      description: "Architecture that supports feature expansion and growing user bases without performance degradation.",
      icon: <Scale className="w-7 h-7 text-[#29f67a]" />,
      iconBg: "bg-[#29f67a]/10"
    },
    { 
      name: "Cross-platform consistency", 
      description: "Uniform experience across iOS and Android devices while respecting platform-specific design conventions.",
      icon: <Smartphone className="w-7 h-7 text-[#29f67a]" />,
      iconBg: "bg-[#29f67a]/10"
    }
  ] 
},
  ]
};

// ============================================================
// SAAS PLATFORM DEVELOPMENT DATA
// ============================================================
export const saasPlatformDevData = {
  title: "SaaS Platform Development",
  intro: "We build scalable SaaS products designed for growth and monetisation.",
  description: "Building a successful SaaS product requires more than just good code. It demands thoughtful architecture around multi-tenancy, subscription management, security, and scalability. We bring years of experience building SaaS platforms to your project, helping you avoid common pitfalls and accelerate your path to revenue.",
  coverImage: "/service/serviceNew/saas.webp",
  sections: [
    { 
      title: "TECHNOLOGIES", 
      description: "Our core stack for building robust, scalable SaaS platforms that can grow with your business from initial launch through enterprise scale.",
      
      categories: [
        { 
          name: "Full Stack", 
          technologies: [
            { name: "React/Next.js", image: "/service/serviceNew/react.svg" },
            { name: "Node.js", image: "/service/serviceNew/node.svg" },
            { name: "PostgreSQL", image: "/service/serviceNew/postgresql.svg" },
            { name: "Redis", image: "/service/serviceNew/redis.svg" },
            { name: "AWS", image: "/service/serviceNew/aws.webp" },
            { name: "Docker", image: "/service/serviceNew/docker.svg" },
          ] 
        }
      ] 
    },
    { 
      title: "USE CASES", 
      description: "Common scenarios where our SaaS development expertise helps businesses launch and scale their subscription products successfully.",
      
      items: [
        { name: "B2B SaaS platforms", description: "Enterprise-grade solutions with multi-tenant architecture, role-based access, and white-labelling capabilities." },
        { name: "B2C subscription services", description: "Consumer subscription platforms with flexible pricing tiers, free trials, and seamless payment processing." },
        { name: "Marketplace platforms", description: "Two-sided marketplaces connecting buyers and sellers with complex transaction workflows and commission structures." },
        { name: "API-first SaaS products", description: "Developer platforms and API-based services with usage-based billing and comprehensive documentation." },
        { name: "Vertical SaaS solutions", description: "Industry-specific platforms for healthcare, real estate, education, and other specialised verticals." },
        { name: "Internal SaaS tools", description: "Company-wide platforms for HR, finance, operations, and other internal functions that serve hundreds of employees." }
      ] 
    },

// ============================================================
// OUTCOMES SECTION - SAAS DEVELOPMENT
// ============================================================
{ 
  title: "OUTCOMES", 
  description: "What our SaaS development process delivers for your business. We focus on building platforms that can sustain long-term growth.",
  
  items: [
    { 
      name: "Scalable multi-tenant systems", 
      description: "Architecture that efficiently serves multiple customers from a single codebase while maintaining data isolation and security.",
      icon: <Building2 className="w-7 h-7 text-[#29f67a]" />,
      iconBg: "bg-[#29f67a]/10"
    }, 
    { 
      name: "Monetisation-ready platform", 
      description: "Built-in subscription management, billing integration, and pricing flexibility to support your revenue model from day one.",
      icon: <CreditCard className="w-7 h-7 text-[#29f67a]" />,
      iconBg: "bg-[#29f67a]/10"
    }, 
    { 
      name: "Growth-ready foundation", 
      description: "Designed for feature expansion, user growth, and increasing transaction volumes without requiring architectural overhauls.",
      icon: <LineChart className="w-7 h-7 text-[#29f67a]" />,
      iconBg: "bg-[#29f67a]/10"
    },
    { 
      name: "Reliable uptime", 
      description: "Production systems with proper monitoring, error handling, and disaster recovery procedures to ensure business continuity.",
      icon: <Activity className="w-7 h-7 text-[#29f67a]" />,
      iconBg: "bg-[#29f67a]/10"
    }
  ] 
}
  ]
};

// ============================================================
// API & INTEGRATION DATA
// ============================================================
export const apiIntegrationData = {
  title: "API Development & Integrations",
  intro: "We connect systems and enable seamless data exchange.",
  description: "In today's interconnected digital landscape, your systems need to talk to each other. We build the bridges that make that happen — designing APIs that are secure, performant, and well-documented. Whether you need to connect internal tools or integrate with third-party services, we ensure your data flows exactly where it needs to go.",
  coverImage: "/service/serviceNew//apiIntegration.jpg",
  sections: [
    { 
      title: "TECHNOLOGIES", 
      description: "The tools and frameworks we use to build reliable, well-documented APIs that serve as the backbone of your digital infrastructure.",
      categories: [
        { 
          name: "API Stack", 
          technologies: [
            { name: "Node.js", image: "/service/serviceNew/node.svg" },
            { name: "Express", image: "/service/serviceNew/express.svg" },
            { name: "GraphQL", image: "/service/serviceNew/graphql.svg" },
            { name: "REST", image: "/service/serviceNew/postman.svg" },
            { name: "Swagger", image: "/service/serviceNew/swagger.svg" }
          ] 
        }
      ] 
    },
    { 
      title: "USE CASES", 
      description: "Scenarios where API development and system integration deliver transformative business impact.",
      items: [
        { name: "Third-party service integration", description: "Connecting your platform with payment gateways, CRM systems, marketing tools, and other essential business services." },
        { name: "Internal system unification", description: "Bridging legacy systems with modern applications to create a cohesive technology ecosystem." },
        { name: "Mobile backend development", description: "Building robust API backends that power mobile applications with efficient data delivery and real-time updates." },
        { name: "Partner integrations", description: "Creating developer portals and API documentation that enable external partners to integrate with your platform." },
        { name: "Data synchronisation", description: "Automating bi-directional data flows between systems to ensure consistency across your entire tool stack." },
        { name: "Microservices architecture", description: "Decomposing monolithic applications into manageable, independently deployable microservices." }
      ] 
    },

// ============================================================
// OUTCOMES SECTION - API & INTEGRATIONS
// ============================================================
{ 
  title: "OUTCOMES", 
  description: "The benefits of well-designed API architecture and integrations for your business operations and technology strategy.",
  items: [
    { 
      name: "Connected ecosystem", 
      description: "Seamless data flow between all your business tools, eliminating silos and ensuring everyone works with accurate, up-to-date information.",
      icon: <Network className="w-7 h-7 text-[#29f67a]" />,
      iconBg: "bg-[#29f67a]/10"
    }, 
    { 
      name: "Process automation", 
      description: "Reduce manual data entry and the errors that come with it by automating data transfer between your critical systems.",
      icon: <Brain className="w-7 h-7 text-[#29f67a]" />,
      iconBg: "bg-[#29f67a]/10"
    }, 
    { 
      name: "Operational efficiency", 
      description: "Faster processes, better data accuracy, and reduced operational overhead through intelligent system integration.",
      icon: <Gauge className="w-7 h-7 text-[#29f67a]" />,
      iconBg: "bg-[#29f67a]/10"
    },
    { 
      name: "Scalable architecture", 
      description: "Well-designed APIs that can handle increasing load without degradation, supporting your business growth.",
      icon: <Building2 className="w-7 h-7 text-[#29f67a]" />,
      iconBg: "bg-[#29f67a]/10"
    }
  ] 
}
  ]
};

// ============================================================
// CUSTOM SYSTEMS DATA
// ============================================================
export const customSystemsData = {
  title: "Custom Systems & Dashboards",
  intro: "We build internal tools that improve efficiency and visibility.",
  description: "Off-the-shelf solutions often force you to adapt your processes to the software. We believe it should be the other way around. Our custom systems and dashboards are built around your exact workflows, giving your team the precise tools they need to work efficiently and make informed decisions.",
  coverImage: "/service/serviceNew/customData.jpg",
  sections: [
    { 
      title: "USE CASES", 
      description: "Common scenarios where custom systems and dashboards deliver exceptional value for growing businesses.",
      items: [
        { name: "Operational dashboards", description: "Real-time views of KPIs, order volumes, support tickets, and other critical metrics that keep your team informed and responsive." },
        { name: "Workflow automation systems", description: "Tools that automate approval processes, notifications, and task assignments across departments." },
        { name: "Inventory and resource management", description: "Systems for tracking physical or digital assets across locations with real-time availability data." },
        { name: "Reporting and analytics platforms", description: "Consolidated views of data from multiple sources, automated report generation, and drill-down capabilities." },
        { name: "Client management portals", description: "Self-service platforms where your clients can access their data, track progress, and communicate with your team." },
        { name: "Compliance and audit tools", description: "Systems that track regulatory compliance, maintain audit trails, and generate compliance reports automatically." }
      ] 
    },

// ============================================================
// OUTCOMES SECTION - CUSTOM SYSTEMS
// ============================================================
{ 
  title: "OUTCOMES", 
  description: "The impact of purpose-built internal tools on your business operations and team productivity.",
  items: [
    { 
      name: "Better decision-making", 
      description: "Data-driven insights delivered through intuitive dashboards that surface the metrics that matter most to your business.",
      icon: <TrendingUp className="w-7 h-7 text-[#29f67a]" />,
      iconBg: "bg-[#29f67a]/10"
    }, 
    { 
      name: "Real-time visibility", 
      description: "Live dashboards that reflect your current business state, not yesterday's data, so you can spot trends and issues as they happen.",
      icon: <Activity className="w-7 h-7 text-[#29f67a]" />,
      iconBg: "bg-[#29f67a]/10"
    }, 
    { 
      name: "Reduced manual overhead", 
      description: "Automate reporting, data consolidation, and routine tasks so your team can focus on work that actually moves the needle.",
      icon: <Bot className="w-7 h-7 text-[#29f67a]" />,
      iconBg: "bg-[#29f67a]/10"
    },
    { 
      name: "Improved team alignment", 
      description: "Shared visibility into goals, progress, and performance that keeps everyone working toward the same objectives.",
      icon: <Users className="w-7 h-7 text-[#29f67a]" />,
      iconBg: "bg-[#29f67a]/10"
    }
  ] 
}
  ]
};

// ============================================================
// IT INFRASTRUCTURE & CLOUD DATA
// ============================================================
export const itInfraData = {
  title: "IT Infrastructure & Cloud",
  intro: "We design and manage infrastructure that ensures performance, scalability, and security.",
  description: "Infrastructure is the foundation every digital product is built on. When it's done right, nobody notices. When it's done wrong, everyone suffers. We make sure your infrastructure is solid, secure, and ready to handle whatever comes next — whether that's a traffic surge, a new product launch, or rapid business growth.",
  coverImage: "/service/serviceNew/it-infra-cloud.jpg",
  sections: [
    {
      title: "SUB-SERVICES",
      description: "Specialised infrastructure services tailored to different operational needs. Each service is designed to address specific challenges while maintaining a cohesive overall architecture.",
      
      items: [
        { 
          name: "Cloud Architecture", 
          description: "Design scalable, resilient cloud infrastructure from scratch or migrate existing systems to the cloud with minimal disruption to your operations.", 
          link: "/services/it-infrastructure-cloud/cloud-architecture", 
        },
        { 
          name: "Server & DevOps Management", 
          description: "Comprehensive server management and deployment pipeline automation to ensure your systems stay stable, secure, and efficient around the clock.", 
          link: "/services/it-infrastructure-cloud/server-devops", 
        },
        { 
          name: "Performance Optimisation", 
          description: "Identify and eliminate bottlenecks across your entire stack — from frontend load times to database query performance and server response times.", 
          link: "/services/it-infrastructure-cloud/performance-optimisation", 
        },
        { 
          name: "Security & Monitoring", 
          description: "Implement defence-in-depth security measures and comprehensive monitoring to protect your systems and ensure continuous uptime.", 
          link: "/services/it-infrastructure-cloud/security-monitoring", 
        }
      ]
    },
    {
      title: "INFRASTRUCTURE STACK",
      description: "The technologies and platforms we leverage to build and manage robust, production-grade infrastructure that scales with your business.",
      
      categories: [
        { 
          name: "Cloud Platform", 
          technologies: [
            { name: "AWS", image: "/service/serviceNew/aws.webp" }
          ] 
        },
        { 
          name: "Containerisation", 
          technologies: [
            { name: "Docker", image: "/service/serviceNew/docker.svg" }, 
            { name: "Kubernetes", image: "/service/serviceNew/kubernetes.svg" }
          ] 
        },
        { 
          name: "CDN & Edge", 
          technologies: [
            { name: "Cloudflare", image: "/service/serviceNew/cloudflare.svg" }
          ] 
        },
        { 
          name: "Operating Systems", 
          technologies: [
            { name: "Linux", image: "/service/serviceNew/linux.svg" }
          ] 
        },
        { 
          name: "Monitoring", 
          technologies: [
            { name: "CloudWatch", image: "/service/serviceNew/cloudWatch.png" },
            { name: "Grafana", image: "/service/serviceNew/grafana.svg" },
            { name: "Prometheus", image: "/service/serviceNew/prometheus.svg" }
          ] 
        },
        { 
          name: "Security", 
          technologies: [
            { name: "AWS IAM", image: "/service/serviceNew/aws.webp" }
          ] 
        }
      ]
    },
    

// ============================================================
// OUTCOMES SECTION - IT INFRASTRUCTURE & CLOUD
// ============================================================
{
  title: "OUTCOMES",
  description: "The results of well-designed and properly managed infrastructure. We measure success by reliability, performance, and security metrics.",
  
  items: [
    { 
      name: "High availability", 
      description: "Your systems stay online when it matters most, with redundancy and failover strategies that minimise downtime and protect revenue.",
      icon: <Activity className="w-7 h-7 text-[#29f67a]" />,
      iconBg: "bg-[#29f67a]/10"
    },
    { 
      name: "Optimised performance", 
      description: "Applications that load quickly and respond instantly, delivering the experience your users expect and deserve.",
      icon: <Gauge className="w-7 h-7 text-[#29f67a]" />,
      iconBg: "bg-[#29f67a]/10"
    },
    { 
      name: "Robust security", 
      description: "Multi-layered protection against threats, with proper access controls, encryption, and monitoring to keep your data safe.",
      icon: <Shield className="w-7 h-7 text-[#29f67a]" />,
      iconBg: "bg-[#29f67a]/10"
    },
    { 
      name: "Cost efficiency", 
      description: "Right-sized resources and intelligent architecture decisions that keep your infrastructure costs predictable and under control.",
      icon: <DollarSign className="w-7 h-7 text-[#29f67a]" />,
      iconBg: "bg-[#29f67a]/10"
    }
  ]
}
  ]
};

// Cloud Architecture
export const cloudArchData = {
  title: "Cloud Architecture",
  intro: "We design scalable, resilient cloud infrastructure tailored to your application and business needs.",
  description: "Cloud architecture done right means your applications can scale effortlessly while keeping costs predictable. We design systems that take full advantage of cloud-native services, ensuring you get the reliability of enterprise infrastructure without the enterprise price tag.",
  coverImage: "/service/serviceNew/cloudArch.webp",
  sections: [
    { 
      title: "TECHNOLOGIES USED", 
      description: "Our primary cloud platform and the services we leverage to build robust architectures that scale with your business requirements.",
      
      categories: [
        { 
          name: "Cloud Services", 
          technologies: [
            { name: "AWS EC2", image: "/service/serviceNew/awsEc2.png" },
            { name: "AWS RDS", image: "/service/serviceNew/awsRds.png" },
            { name: "AWS S3", image: "/service/serviceNew/awsS3.png" },
            { name: "AWS Lambda", image: "/service/serviceNew/amazonLambda.png" }
          ] 
        }
      ] 
    },
    { 
      title: "USE CASES", 
      description: "Scenarios where our cloud architecture expertise delivers the most value for businesses at different stages of cloud adoption.",
      
      items: [
        { name: "Cloud migration", description: "Moving legacy on-premise systems to the cloud with careful planning to minimise disruption and ensure a smooth transition." },
        { name: "New application launches", description: "Starting with a cloud-native architecture that gives you maximum flexibility and scalability from day one." },
        { name: "Scaling for growth", description: "Preparing your infrastructure to handle increased demand, whether gradual growth or sudden traffic spikes." },
        { name: "Hybrid cloud setups", description: "Connecting on-premise infrastructure with cloud services for maximum flexibility during phased migrations." },
        { name: "Disaster recovery planning", description: "Multi-region architectures that ensure business continuity even in worst-case scenarios." },
        { name: "Cost optimisation reviews", description: "Analysing existing cloud spend and identifying opportunities for significant savings without sacrificing performance." }
      ] 
    },

// ============================================================
// OUTCOMES SECTION - CLOUD ARCHITECTURE
// ============================================================
{ 
  title: "OUTCOMES", 
  description: "What you can expect from our cloud architecture services. Every architecture decision is guided by real-world operational experience.",
  
  items: [
    { 
      name: "Elastic scalability", 
      description: "Infrastructure that automatically adjusts to demand, so you never pay for idle resources or struggle during traffic peaks.",
      icon: <Scale className="w-7 h-7 text-[#29f67a]" />,
      iconBg: "bg-[#29f67a]/10"
    },
    { 
      name: "High availability", 
      description: "Multi-zone redundancy and automated failover that keeps your applications running even when individual components fail.",
      icon: <Activity className="w-7 h-7 text-[#29f67a]" />,
      iconBg: "bg-[#29f67a]/10"
    },
    { 
      name: "Cost optimisation", 
      description: "Right-sized resources and intelligent architecture decisions that keep your cloud costs predictable and under control.",
      icon: <DollarSign className="w-7 h-7 text-[#29f67a]" />,
      iconBg: "bg-[#29f67a]/10"
    },
    { 
      name: "Operational clarity", 
      description: "Well-documented architecture with clear runbooks, monitoring dashboards, and alerting for your operations team.",
      icon: <ClipboardList className="w-7 h-7 text-[#29f67a]" />,
      iconBg: "bg-[#29f67a]/10"
    }
  ] 
}
  ]
};

// Server & DevOps
export const serverDevopsData = {
  title: "Server & DevOps Management",
  intro: "We manage and optimise servers and deployment pipelines to ensure stability and efficiency.",
  description: "DevOps is about more than tools — it's about creating a culture of reliability, automation, and continuous improvement. We handle the operational complexity so your development team can focus on building features that matter to your customers.",
  coverImage: "/service/serviceNew/devOps.jpg",
  sections: [
    { 
      title: "TECHNOLOGIES USED", 
      description: "The tools and platforms that power our DevOps and server management workflows. Each tool is selected for reliability and industry adoption.",
     
      categories: [
        { 
          name: "DevOps Stack", 
          technologies: [
            { name: "Linux", image: "/service/serviceNew/linux.svg" },
            { name: "Docker", image: "/service/serviceNew/docker.svg" },
            { name: "Kubernetes", image: "/service/serviceNew/kubernetes.svg" },
            { name: "GitHub Actions", image: "/service/serviceNew/github.svg" }
          ] 
        }
      ] 
    },
    { 
      title: "USE CASES", 
      description: "Common scenarios where our DevOps expertise makes a measurable difference in system reliability and team productivity.",
      
      items: [
        { name: "Production server management", description: "Keeping live environments stable, secure, and performant with proactive monitoring and rapid incident response." },
        { name: "CI/CD pipeline automation", description: "Automating testing and deployment so your team can ship confidently and frequently without manual intervention." },
        { name: "Reliability improvement", description: "Implementing monitoring, alerting, and runbooks that catch issues before they become outages." },
        { name: "Container orchestration", description: "Migrating applications to containerised environments with Docker and Kubernetes for improved resource utilisation." },
        { name: "Infrastructure as Code", description: "Managing infrastructure through version-controlled configuration files for consistency and auditability." },
        { name: "Development environment standardisation", description: "Creating consistent development environments that eliminate it works on my machine problems." }
      ] 
    },


// ============================================================
// OUTCOMES SECTION - DEVOPS & SERVER MANAGEMENT
// ============================================================
{ 
  title: "OUTCOMES", 
  description: "The results of professional DevOps and server management. Our goal is to make operations invisible so your team can focus on building.",
  
  items: [
    { 
      name: "Stable production environments", 
      description: "Fewer outages, faster recovery times, and consistent performance your users can rely on.",
      icon: <Server className="w-7 h-7 text-[#29f67a]" />,
      iconBg: "bg-[#29f67a]/10"
    },
    { 
      name: "Accelerated deployments", 
      description: "Ship features and fixes faster with automated pipelines that reduce manual work and human error.",
      icon: <Rocket className="w-7 h-7 text-[#29f67a]" />,
      iconBg: "bg-[#29f67a]/10"
    },
    { 
      name: "Minimised downtime", 
      description: "Proactive monitoring and alerting that catches potential issues before they impact your users.",
      icon: <Activity className="w-7 h-7 text-[#29f67a]" />,
      iconBg: "bg-[#29f67a]/10"
    },
    { 
      name: "Improved developer experience", 
      description: "Self-service infrastructure and streamlined workflows that let developers focus on writing code.",
      icon: <Code2 className="w-7 h-7 text-[#29f67a]" />,
      iconBg: "bg-[#29f67a]/10"
    }
  ] 
}
  ]
};

// Performance Optimisation
export const performanceOptData = {
  title: "Performance Optimisation",
  intro: "We improve system speed, responsiveness, and efficiency across applications and infrastructure.",
  description: "Slow systems cost you users and revenue. Research shows that even a one-second delay in page load time can reduce conversions significantly. We identify bottlenecks and implement solutions that make a measurable difference to your bottom line.",
  coverImage: "/service/serviceNew/performanceMarketing.jpg",
  sections: [
    { 
      title: "TECHNOLOGIES USED", 
      description: "Tools and techniques we employ for comprehensive performance analysis and optimisation across your entire technology stack.",
      
      categories: [
        { 
          name: "Performance Tools", 
          technologies: [
            { name: "Redis Cache", image: "/service/serviceNew/redis.svg" },
            { name: "AWS CloudFront", image: "/service/serviceNew/awsCloud.png" },
            { name: "Grafana", image: "/service/serviceNew/grafana.svg" }
          ] 
        }
      ] 
    },
    { 
      title: "USE CASES", 
      description: "When performance optimisation delivers the biggest impact for your business and user experience.",
      
      items: [
        { name: "Underperforming applications", description: "Websites or apps that load slowly, feel sluggish, or struggle under normal user loads — we find and fix the root causes." },
        { name: "Scaling preparation", description: "Optimising your system to handle traffic spikes and growth without degradation in user experience." },
        { name: "User experience enhancement", description: "Improving load times and interaction responsiveness to reduce bounce rates and increase engagement." },
        { name: "Database query optimisation", description: "Identifying and fixing slow database queries that bottleneck your application's performance." },
        { name: "Frontend asset optimisation", description: "Minimising, bundling, and efficiently serving JavaScript, CSS, and images for faster page loads." },
        { name: "API response time improvement", description: "Reducing API latency through caching strategies, connection pooling, and efficient data serialisation." }
      ] 
    },

// ============================================================
// OUTCOMES SECTION - PERFORMANCE OPTIMISATION
// ============================================================
{ 
  title: "OUTCOMES", 
  description: "The measurable improvements you can expect from comprehensive performance optimisation across your stack.",
  
  items: [
    { 
      name: "Faster load times", 
      description: "Pages that load in under two seconds, keeping users engaged and reducing abandonment rates significantly.",
      icon: <Timer className="w-7 h-7 text-[#29f67a]" />,
      iconBg: "bg-[#29f67a]/10"
    },
    { 
      name: "Improved user experience", 
      description: "Smooth, responsive interactions that make your application a pleasure to use and keep users coming back.",
      icon: <Sparkles className="w-7 h-7 text-[#29f67a]" />,
      iconBg: "bg-[#29f67a]/10"
    },
    { 
      name: "Better resource efficiency", 
      description: "Do more with less — optimised systems that reduce infrastructure costs while improving performance.",
      icon: <Battery className="w-7 h-7 text-[#29f67a]" />,
      iconBg: "bg-[#29f67a]/10"
    },
    { 
      name: "Higher conversion rates", 
      description: "Fast-loading pages and responsive interfaces that directly contribute to increased conversions and revenue.",
      icon: <TrendingUp className="w-7 h-7 text-[#29f67a]" />,
      iconBg: "bg-[#29f67a]/10"
    }
  ] 
}
  ]
};

// Security & Monitoring
export const securityMonitoringData = {
  title: "Security & Monitoring",
  intro: "We secure your systems and ensure continuous monitoring for uptime and performance.",
  description: "Security isn't optional — it's fundamental. We implement defence-in-depth strategies that protect your business, your data, and your customers. Combined with comprehensive monitoring, you get both protection and visibility into your systems' health.",
  coverImage: "/service/serviceNew/security.webp",
  sections: [
    { 
      title: "TECHNOLOGIES USED", 
      description: "Our security and monitoring toolkit for comprehensive system protection and observability.",
      categories: [
        { 
          name: "Security Stack", 
          technologies: [
            { name: "CloudWatch", image: "/service/serviceNew/cloudWatch.png" },
            { name: "Cloudflare", image: "/service/serviceNew/cloudflare.svg" },
            { name: "AWS IAM", image: "/service/serviceNew/awsIam.png" }
          ] 
        }
      ] 
    },
    { 
      title: "USE CASES", 
      description: "When security and monitoring become critical priorities for protecting your business and maintaining customer trust.",
    
      items: [
        { name: "Production system hardening", description: "Protecting live environments from threats with proper configuration, access controls, and security best practices." },
        { name: "Downtime prevention", description: "Comprehensive monitoring that catches potential issues before they escalate into outages that impact your users." },
        { name: "System health visibility", description: "Full observability into infrastructure performance, resource utilisation, and potential vulnerabilities." },
        { name: "Compliance preparation", description: "Implementing security controls and audit trails required for SOC 2, HIPAA, GDPR, or other regulatory frameworks." },
        { name: "Incident response planning", description: "Establishing clear procedures for detecting, responding to, and recovering from security incidents." },
        { name: "Access control implementation", description: "Setting up role-based access control and least-privilege policies across your entire infrastructure." }
      ] 
    },


// ============================================================
// OUTCOMES SECTION - SECURITY & MONITORING
// ============================================================
{ 
  title: "OUTCOMES", 
  description: "What you gain from professional security and monitoring implementation. Peace of mind comes standard.",
  
  items: [
    { 
      name: "Protected assets", 
      description: "Your data and infrastructure secured with multiple layers of defence against external threats and internal risks.",
      icon: <Shield className="w-7 h-7 text-[#29f67a]" />,
      iconBg: "bg-[#29f67a]/10"
    },
    { 
      name: "Reduced risk profile", 
      description: "Fewer vulnerabilities, faster patching, and robust incident response capabilities that minimise potential damage.",
      icon: <ShieldAlert className="w-7 h-7 text-[#29f67a]" />,
      iconBg: "bg-[#29f67a]/10"
    },
    { 
      name: "Consistent uptime", 
      description: "Systems that stay online and perform well, backed by alerting that ensures problems are addressed before users notice.",
      icon: <Activity className="w-7 h-7 text-[#29f67a]" />,
      iconBg: "bg-[#29f67a]/10"
    },
    { 
      name: "Compliance confidence", 
      description: "Documentation and controls that give you confidence during audits and when answering security questionnaires from clients.",
      icon: <FileCheck className="w-7 h-7 text-[#29f67a]" />,
      iconBg: "bg-[#29f67a]/10"
    }
  ] 
}
  ]
};

// ============================================================
// DIGITAL GROWTH DATA
// ============================================================
export const digitalGrowthData = {
  title: "Digital Growth",
  intro: "We help businesses grow through data-driven digital strategies.",
  description: "Growth doesn't happen by accident. It requires a strategic combination of data analysis, creative execution, and continuous optimisation. We bring all three together to help your business attract more customers, convert more leads, and achieve measurable ROI from your digital investments.",
  coverImage: "/service/serviceNew/digitalDiagram.jpg",
  sections: [
    {
      title: "SUB-SERVICES",
      description: "Explore our comprehensive suite of digital growth services, each designed to drive specific business outcomes and deliver measurable results.",
      
      items: [
        { 
          name: "Performance Marketing", 
          description: "Data-driven advertising campaigns across multiple channels, continuously optimised to lower acquisition costs and maximise return on your marketing investment.", 
          link: "/services/digital-growth/performance-marketing", 
        },
        { 
          name: "Conversion Optimisation", 
          description: "Systematic testing and improvement of your website's user experience to turn more visitors into leads and customers without increasing your ad spend.", 
          link: "/services/digital-growth/conversion-optimisation", 
        },
        { 
          name: "Analytics & Tracking", 
          description: "Complete visibility into user behaviour and campaign performance through properly implemented tracking, custom dashboards, and actionable reporting.", 
          link: "/services/digital-growth/analytics-tracking", 
        },
        { 
          name: "Funnels & Landing Pages", 
          description: "Strategic funnel design and high-converting landing pages that guide visitors through a seamless journey from first click to completed purchase.", 
          link: "/services/digital-growth/funnels-landing-pages", 
        }
      ]
    },


// ============================================================
// OUTCOMES SECTION - DIGITAL GROWTH
// ============================================================
{
  title: "OUTCOMES",
  description: "The measurable business results our digital growth strategies consistently deliver for clients across industries.",
  
  items: [
    { 
      name: "Increased lead volume", 
      description: "More qualified prospects entering your pipeline through optimised campaigns and conversion-focused strategies.",
      icon: <Users className="w-7 h-7 text-[#29f67a]" />,
      iconBg: "bg-[#29f67a]/10"
    },
    { 
      name: "Better marketing ROI", 
      description: "Every dollar works harder with data-driven targeting, continuous optimisation, and systematic performance improvement.",
      icon: <TrendingUp className="w-7 h-7 text-[#29f67a]" />,
      iconBg: "bg-[#29f67a]/10"
    },
    { 
      name: "Higher conversion rates", 
      description: "Turn more of your existing traffic into paying customers through strategic optimisation of every step in the user journey.",
      icon: <Target className="w-7 h-7 text-[#29f67a]" />,
      iconBg: "bg-[#29f67a]/10"
    },
    { 
      name: "Scalable growth engine", 
      description: "Systems and processes that allow you to increase marketing spend while maintaining or improving efficiency metrics.",
      icon: <Gauge className="w-7 h-7 text-[#29f67a]" />,
      iconBg: "bg-[#29f67a]/10"
    }
  ]
}
  ]
};

// Performance Marketing
export const perfMarketingData = {
  title: "Performance Marketing",
  intro: "We run data-driven advertising campaigns focused on measurable results and ROI.",
  description: "We don't just spend your budget — we invest it strategically. Every campaign we run is measured, analysed, and continuously optimised to ensure your marketing dollars generate real business results. From audience targeting to creative testing to bid optimisation, we manage every aspect of your paid media.",
  coverImage: "/service/serviceNew/performanceMarketing.jpg",
  sections: [
    { 
      title: "ADVERTISING CHANNELS", 
      description: "The platforms where we run and optimise performance marketing campaigns to reach your target audience wherever they spend their time.",
      
      categories: [
        { 
          name: "Paid Media Platforms", 
          technologies: [
            { name: "Google Ads", image: "/service/serviceNew/google.svg" },
            { name: "Meta Ads", image: "/service/serviceNew/fb.svg" },
            { name: "LinkedIn Ads", image: "/service/serviceNew/linkedin.svg" }
          ] 
        }
      ] 
    },
    { 
      title: "USE CASES", 
      description: "When performance marketing makes the biggest impact on your business growth and customer acquisition.",
      items: [
        { name: "Lead generation campaigns", description: "Fill your sales pipeline with qualified prospects by targeting the right audience with compelling offers and optimised landing experiences." },
        { name: "Product launches", description: "Generate awareness and drive early adoption with strategic campaigns that build momentum and capture demand." },
        { name: "Campaign scaling", description: "Take successful campaigns to the next level by increasing budget strategically while maintaining or improving efficiency metrics." },
        { name: "E-commerce growth", description: "Drive online sales through shopping ads, dynamic remarketing, and feed-optimised campaigns." },
        { name: "Brand awareness building", description: "Strategic top-of-funnel campaigns that introduce your brand to new audiences and create future demand." },
        { name: "Retargeting and retention", description: "Bring back visitors who didn't convert and re-engage past customers with tailored messaging." }
      ] 
    },
 

// ============================================================
// OUTCOMES SECTION - PERFORMANCE MARKETING
// ============================================================
{ 
  title: "OUTCOMES", 
  description: "Measurable results from professionally managed performance marketing campaigns.",
  items: [
    { 
      name: "Increased lead flow", 
      description: "Consistent, predictable lead generation that keeps your sales team busy with qualified opportunities.",
      icon: <TrendingUp className="w-7 h-7 text-[#29f67a]" />,
      iconBg: "bg-[#29f67a]/10"
    },
    { 
      name: "Lower acquisition costs", 
      description: "Continuous optimisation that drives down your cost per lead or cost per acquisition over time.",
      icon: <DollarSign className="w-7 h-7 text-[#29f67a]" />,
      iconBg: "bg-[#29f67a]/10"
    },
    { 
      name: "Improved return on ad spend", 
      description: "Better results from every dollar invested, with clear attribution between spend and revenue.",
      icon: <LineChart className="w-7 h-7 text-[#29f67a]" />,
      iconBg: "bg-[#29f67a]/10"
    },
    { 
      name: "Scalable campaign structure", 
      description: "Well-organised accounts and campaigns that can grow efficiently without hitting performance ceilings.",
      icon: <LayoutGrid className="w-7 h-7 text-[#29f67a]" />,
      iconBg: "bg-[#29f67a]/10"
    }
  ] 
}
  ]
};

// Conversion Optimisation
export const convOptData = {
  title: "Conversion Optimisation",
  intro: "We improve how users interact with your website to increase conversions and results.",
  description: "Small changes can lead to big results. We use data, user research, and systematic testing to optimise every step of your conversion funnel. Whether you're looking to generate more leads, increase sales, or improve engagement, we find and fix the friction points holding your conversion rates back.",
  coverImage: "/service/serviceNew/cro.jpeg",
  sections: [
    { 
      title: "USE CASES", 
      description: "Scenarios where conversion optimisation delivers transformative results for businesses of all sizes.",
      
      items: [
        { name: "Underperforming websites", description: "When your traffic is solid but conversions are disappointing, we diagnose the issues and implement solutions that turn browsers into buyers." },
        { name: "Lead generation improvement", description: "Optimising forms, CTAs, and landing pages to capture more qualified leads from your existing website traffic." },
        { name: "Revenue growth", description: "Increasing sales and average order value without spending a dollar more on advertising — pure conversion improvement." },
        { name: "Checkout optimisation", description: "Reducing cart abandonment by streamlining the purchase process and addressing common friction points." },
        { name: "Mobile conversion enhancement", description: "Improving the mobile experience to capture conversions from the growing mobile traffic segment." },
        { name: "Pricing page optimisation", description: "Testing pricing presentation, plan structure, and value communication to increase plan selection and upgrades." }
      ] 
    },


// ============================================================
// OUTCOMES SECTION - CONVERSION OPTIMISATION
// ============================================================
{ 
  title: "OUTCOMES", 
  description: "The impact of systematic conversion optimisation on your business metrics and bottom line.",
  
  items: [
    { 
      name: "Higher conversion rates", 
      description: "More of your visitors take the actions that matter — whether that's purchasing, signing up, or booking a consultation.",
      icon: <Target className="w-7 h-7 text-[#29f67a]" />,
      iconBg: "bg-[#29f67a]/10"
    },
    { 
      name: "Improved user experience", 
      description: "Smoother, more intuitive journeys that build trust and make it easy for users to accomplish their goals.",
      icon: <Sparkles className="w-7 h-7 text-[#29f67a]" />,
      iconBg: "bg-[#29f67a]/10"
    },
    { 
      name: "Revenue growth", 
      description: "Grow your bottom line by converting more of the traffic you already have, maximising the value of every visitor.",
      icon: <TrendingUp className="w-7 h-7 text-[#29f67a]" />,
      iconBg: "bg-[#29f67a]/10"
    },
    { 
      name: "Data-informed culture", 
      description: "Establish a testing mindset across your organisation, where decisions are based on evidence rather than opinions.",
      icon: <BarChart3 className="w-7 h-7 text-[#29f67a]" />,
      iconBg: "bg-[#29f67a]/10"
    }
  ] 
}
  ]
};

// Analytics & Tracking
export const analyticsTrackData = {
  title: "Analytics & Tracking",
  intro: "We implement tracking systems to give you clear visibility into user behaviour and performance.",
  description: "You can't improve what you can't measure. We set up comprehensive analytics and tracking infrastructure that gives you actionable insights into every aspect of your digital presence — from user behaviour to campaign performance to revenue attribution.",
  coverImage: "/service/serviceNew/analytics.jpeg",
  sections: [
    { 
      title: "TOOLS & PLATFORMS", 
      description: "The analytics and tracking tools we configure and integrate for complete visibility into your digital performance.",
      
      categories: [
        { 
          name: "Analytics Stack", 
          technologies: [
            { name: "Google Analytics 4", image: "/service/serviceNew/google.svg" },
            { name: "Google Tag Manager", image: "/service/serviceNew/google.svg" },
            { name: "Looker Studio", image: "/service/serviceNew/google.svg" }
          ] 
        }
      ] 
    },
    { 
      title: "USE CASES", 
      description: "When proper analytics and tracking infrastructure becomes essential for informed decision-making.",
      
      items: [
        { name: "Understanding user behaviour", description: "See exactly how users navigate your site, where they drop off, and what drives them to convert — no more guessing." },
        { name: "Campaign performance tracking", description: "Know precisely which campaigns, channels, and creatives are driving results with proper attribution set up." },
        { name: "ROI measurement", description: "Connect your marketing spend directly to revenue, enabling smarter budget allocation and strategy decisions." },
        { name: "Funnel analysis", description: "Identify where users drop out of your conversion funnel and prioritise fixes based on potential impact." },
        { name: "Content performance", description: "Understand which content drives engagement, leads, and conversions to inform your content strategy." },
        { name: "Cross-device tracking", description: "Follow user journeys across devices and sessions for a complete picture of the customer experience." }
      ] 
    },
  
// ============================================================
// OUTCOMES SECTION - ANALYTICS & TRACKING
// ============================================================
{ 
  title: "OUTCOMES", 
  description: "What you gain from properly implemented analytics and tracking. Data becomes your competitive advantage.",
  
  items: [
    { 
      name: "Data-driven decisions", 
      description: "Base your strategy on real data, not assumptions or gut feelings, leading to better outcomes and fewer costly mistakes.",
      icon: <FiTrendingUp className="w-7 h-7 text-[#29f67a]" />
    },
    { 
      name: "Clear performance visibility", 
      description: "Know exactly what's working, what isn't, and where to focus your resources for maximum impact.",
      icon: <FiEye className="w-7 h-7 text-[#29f67a]" />
    },
    { 
      name: "Optimised marketing strategy", 
      description: "Continuously improve your marketing based on performance data, allocating budget to what delivers the best results.",
      icon: <FiBarChart2 className="w-7 h-7 text-[#29f67a]" />
    },
    { 
      name: "Stakeholder confidence", 
      description: "Present clear, reliable data to investors, board members, and leadership that demonstrates marketing's impact.",
      icon: <FiUsers className="w-7 h-7 text-[#29f67a]" />
    }
  ] 
}
  ]
};

// Funnels & Landing Pages
export const funnelsData = {
  title: "Funnels & Landing Pages",
  intro: "We design and optimise funnels that convert visitors into leads and customers.",
  description: "A great funnel guides users naturally toward conversion, removing friction at every step. We design and build landing pages and conversion funnels that are strategically crafted to turn more of your visitors into customers — whether they come from ads, search, social media, or email.",
  coverImage: "/service/serviceNew/funnelData.jpg",
  sections: [
    { 
      title: "USE CASES", 
      description: "When strategic funnel design and landing pages make the biggest difference in your marketing performance.",
      
      items: [
        { name: "Lead generation funnels", description: "Multi-step journeys designed to capture and nurture potential customers, turning anonymous visitors into qualified leads ready for your sales team." },
        { name: "Sales funnels", description: "From product discovery to checkout, we optimise every step to reduce abandonment and increase completed purchases." },
        { name: "Campaign landing pages", description: "Dedicated, conversion-focused pages that align perfectly with your ad messaging, maximising the return on your campaign spend." },
        { name: "Event and webinar registration", description: "High-converting registration pages and confirmation sequences that maximise attendance rates." },
        { name: "Content download funnels", description: "Gated content experiences that capture leads while delivering value to your audience." },
        { name: "Product launch sequences", description: "Strategic multi-touch funnels that build anticipation and drive early adoption for new product releases." }
      ] 
    },
   

// ============================================================
// OUTCOMES SECTION - FUNNELS & LANDING PAGES
// ============================================================
{ 
  title: "OUTCOMES", 
  description: "Results from professionally designed and optimised funnels and landing pages.",
  
  items: [
    { 
      name: "More qualified leads", 
      description: "Landing pages and funnels that attract and convert prospects who are genuinely interested in your offering.",
      icon: <Users className="w-7 h-7 text-[#29f67a]" />,
      iconBg: "bg-[#29f67a]/10"
    },
    { 
      name: "Higher conversion rates", 
      description: "Purpose-built pages that remove friction and guide visitors toward conversion with clear, compelling calls to action.",
      icon: <Target className="w-7 h-7 text-[#29f67a]" />,
      iconBg: "bg-[#29f67a]/10"
    },
    { 
      name: "Better campaign performance", 
      description: "Tighter alignment between ad creative and landing page content, resulting in higher quality scores and lower costs.",
      icon: <TrendingUp className="w-7 h-7 text-[#29f67a]" />,
      iconBg: "bg-[#29f67a]/10"
    },
    { 
      name: "Faster iteration cycles", 
      description: "Well-structured funnels that make it easy to test variations and continuously improve performance over time.",
      icon: <RefreshCw className="w-7 h-7 text-[#29f67a]" />,
      iconBg: "bg-[#29f67a]/10"
    }
  ] 
}
  ]
};