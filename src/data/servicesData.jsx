import React from 'react';
import { 
  FiCode, FiSmartphone, FiCloud, FiServer, FiShield, 
  FiTrendingUp, FiActivity,
} from "react-icons/fi";


// ============================================================
// MAIN SERVICES DATA
// ============================================================
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

// ============================================================
// SOFTWARE DEVELOPMENT DATA
// ============================================================
export const softwareDevelopmentData = {
  title: "Software Development",
  intro: "We design and build custom platforms that solve real business problems — from internal tools to full-scale digital products.",
  description: "Every business faces unique challenges that off-the-shelf software can't always solve. We take the time to understand your workflows, pain points, and goals before writing a single line of code. The result is software that fits your business like a glove — intuitive, efficient, and built to scale as you grow.",
  coverImage: "https://thumbs.dreamstime.com/b/software-development-word-cloud-concept-grey-background-88535408.jpg",
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
      title: "TECHNOLOGY STACK",
      description: "We use modern, battle-tested technologies to build reliable and maintainable systems that stand the test of time. Our stack is carefully selected for performance, developer productivity, and long-term maintainability.",

      categories: [
        { 
          name: "Frontend", 
          technologies: [
            { name: "React", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" }, 
            { name: "Next.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" }, 
            { name: "Tailwind", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
            { name: "TypeScript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
            { name: "Vue.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" }
          ] 
        },
        { 
          name: "Backend", 
          technologies: [
            { name: "Node.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" }, 
            { name: "Express", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
            { name: "Python", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
            { name: "Django", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
            { name: "GraphQL", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" }
          ] 
        },
        { 
          name: "Mobile", 
          technologies: [
            { name: "Flutter", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" }, 
            { name: "React Native", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" }, 
            { name: "Swift", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" }, 
            { name: "Kotlin", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" }
          ] 
        },
        { 
          name: "Database", 
          technologies: [
            { name: "MongoDB", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" }, 
            { name: "PostgreSQL", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
            { name: "Redis", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
            { name: "MySQL", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" }
          ] 
        },
        { 
          name: "Cloud & DevOps", 
          technologies: [
            { name: "AWS", image: "https://img.appmaster.io/p/6sYOW9pi7Bc/rs:fit:640:0/q:70/f:webp/plain/019b86d6-bd35-7e11-8dbc-335896b200fc/blog/019be26c-8356-7b5c-b0a6-d580eede0309/019be26c83.webp" }, 
            { name: "Docker", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" }, 
            { name: "Kubernetes", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
            { name: "GitHub Actions", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" }
          ] 
        },
        { 
          name: "Design", 
          technologies: [
            { name: "Figma", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
            { name: "Adobe XD", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg" }
          ] 
        }
      ]
    },
    {
      title: "SUB-SERVICES",
      description: "Explore our specialised development services, each tailored to specific business needs and technical requirements. Every sub-service is delivered with the same commitment to quality, scalability, and long-term thinking.",
      coverImage: "https://miro.medium.com/v2/resize:fit:1400/1*j0gjLpN1aaHuRowTKgr6yQ.jpeg",
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
      title: "OUTCOMES",
      description: "The tangible results you can expect when you partner with us for software development. We measure our success by the impact we have on your business.",
      coverImage: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
      items: [
        { name: "Faster operations", description: "Streamlined workflows that eliminate bottlenecks and reduce time-to-completion for critical business processes by up to 40%." },
        { name: "Reduced manual work", description: "Intelligent automation that frees your team from repetitive tasks, allowing them to focus on strategic initiatives that move the needle." },
        { name: "Scalable systems", description: "Architecture designed to handle 10x or 100x growth without requiring a complete rebuild or causing performance degradation." },
        { name: "Better data visibility", description: "Real-time dashboards and reporting tools that give stakeholders clear insight into business performance at a glance." },
        { name: "Improved user satisfaction", description: "Intuitive interfaces and smooth performance that keep users engaged and reduce churn across your platforms." },
        { name: "Faster time to market", description: "Efficient development processes that help you launch new features and products ahead of the competition." }
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
  coverImage: "https://miro.medium.com/v2/resize:fit:1400/1*j0gjLpN1aaHuRowTKgr6yQ.jpeg",
  sections: [
    { 
      title: "TECHNOLOGIES USED", 
      description: "Our carefully curated tech stack ensures your web application is fast, maintainable, and built on industry best practices. Every technology choice is intentional and aligned with your project goals.",
      coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
      categories: [
        { 
          name: "Frontend", 
          technologies: [
            { name: "React", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
            { name: "Next.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
            { name: "Tailwind CSS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
            { name: "TypeScript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" }
          ] 
        }, 
        { 
          name: "Backend", 
          technologies: [
            { name: "Node.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
            { name: "Express", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
            { name: "Python", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
            { name: "Django", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" }
          ] 
        }, 
        { 
          name: "Database", 
          technologies: [
            { name: "MongoDB", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
            { name: "PostgreSQL", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
            { name: "MySQL", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
            { name: "Redis", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" }
          ] 
        }, 
        { 
          name: "Deployment", 
          technologies: [
            { name: "AWS", image: "https://img.appmaster.io/p/6sYOW9pi7Bc/rs:fit:640:0/q:70/f:webp/plain/019b86d6-bd35-7e11-8dbc-335896b200fc/blog/019be26c-8356-7b5c-b0a6-d580eede0309/019be26c83.webp" },
            { name: "Docker", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
            { name: "Vercel", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" },
            { name: "Netlify", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg" }
          ] 
        }
      ] 
    },
    { 
      title: "USE CASES", 
      description: "Common scenarios where our web applications deliver exceptional value for businesses of all sizes and across industries.",
      coverImage: "https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?w=800&q=80",
      items: [
        { name: "Internal tools and admin panels", description: "Custom dashboards and management interfaces that streamline daily operations and provide complete visibility into business processes." }, 
        { name: "SaaS platforms and customer portals", description: "Multi-tenant platforms with user management, subscription billing, and role-based access control built in from day one." }, 
        { name: "Client-facing web applications", description: "Polished, responsive web experiences that engage your customers and reflect the quality of your brand." },
        { name: "E-commerce platforms", description: "Custom online stores and marketplaces with seamless payment integration and inventory management." },
        { name: "Content management systems", description: "Flexible CMS solutions that give your team complete control over content without requiring technical expertise." },
        { name: "Real-time collaboration tools", description: "Websockets-powered applications that enable seamless communication and teamwork across distributed teams." }
      ] 
    },
    { 
      title: "OUTCOMES", 
      description: "What you can expect from our web application development process. Our focus on quality and performance delivers measurable business impact.",
      coverImage: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
      items: [
        { name: "High performance", description: "Lightning-fast load times and smooth interactions that keep users engaged and improve conversion rates across every page." }, 
        { name: "Scalable architecture", description: "Systems designed to handle growth from hundreds to millions of users without requiring fundamental rearchitecture." }, 
        { name: "Strong user experience", description: "Intuitive interfaces that users love, reducing training time and support requests while increasing satisfaction." },
        { name: "Security by default", description: "Built-in protection against common vulnerabilities with proper authentication, encryption, and security best practices." }
      ] 
    },
  ]
};

// ============================================================
// MOBILE APP DEVELOPMENT DATA
// ============================================================
export const mobileAppDevData = {
  title: "Mobile App Development",
  intro: "We build high-performance mobile apps for iOS and Android.",
  description: "Mobile is where your customers spend their time. We help you meet them there with polished, performant applications that work flawlessly across devices. Whether you need a consumer app, an enterprise solution, or something in between, we deliver mobile experiences that users love to use and that drive real business results.",
  coverImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80",
  sections: [
    { 
      title: "TECHNOLOGIES USED", 
      description: "We select the right technology based on your project's specific requirements, performance needs, and budget considerations. Our team has deep expertise across native and cross-platform frameworks.",
      coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
      categories: [
        { 
          name: "Cross-Platform Frameworks", 
          technologies: [
            { name: "Flutter", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
            { name: "React Native", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
            { name: "Ionic", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original.svg" }
          ] 
        },
        { 
          name: "Native Languages", 
          technologies: [
            { name: "Swift", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" },
            { name: "Kotlin", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" },
            { name: "Java", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" }
          ] 
        },
        { 
          name: "Backend Services", 
          technologies: [
            { name: "Firebase", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
            { name: "Supabase", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" },
            // { name: "AWS Amplify", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" }
          ] 
        }
      ] 
    },
    { 
      title: "OUR APPROACH", 
      description: "A strategic methodology that ensures your mobile app delivers real business value and exceptional user experiences. We combine technical expertise with product thinking.",
      coverImage: "https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?w=800&q=80",
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
      coverImage: "https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?w=800&q=80",
      items: [
        { name: "Consumer-facing applications", description: "Engaging mobile experiences for retail, hospitality, entertainment, and direct-to-consumer brands that build loyalty and drive revenue." },
        { name: "Enterprise mobility solutions", description: "Secure, scalable apps for workforce management, field operations, and internal communication across large organisations." },
        { name: "Mobile-first startups", description: "MVP development for startups that need to validate their concept and reach early adopters quickly on mobile platforms." },
        { name: "E-commerce mobile apps", description: "Feature-rich shopping experiences with seamless checkout, push notifications, and personalised recommendations." },
        { name: "Healthcare and wellness apps", description: "HIPAA-compliant applications for patient engagement, telemedicine, appointment scheduling, and health tracking." },
        { name: "On-demand service platforms", description: "Real-time booking, tracking, and payment systems for delivery, transportation, and service-based businesses." }
      ] 
    },
    { 
      title: "OUTCOMES", 
      description: "The results you can expect from our mobile development process. Every project is measured against these success criteria.",
      coverImage: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
      items: [
        { name: "Faster time to market", description: "Efficient development processes and smart technology choices help you launch quickly without sacrificing quality." }, 
        { name: "Optimised performance", description: "Smooth animations, fast load times, and responsive interactions that keep users engaged and app store ratings high." }, 
        { name: "Scalable applications", description: "Architecture that supports feature expansion and growing user bases without performance degradation." },
        { name: "Cross-platform consistency", description: "Uniform experience across iOS and Android devices while respecting platform-specific design conventions." }
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
  coverImage: "https://www.techfunnel.com/wp-content/uploads/2023/11/SaaS-management-platforms.jpg",
  sections: [
    { 
      title: "TECHNOLOGIES", 
      description: "Our core stack for building robust, scalable SaaS platforms that can grow with your business from initial launch through enterprise scale.",
      coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
      categories: [
        { 
          name: "Full Stack", 
          technologies: [
            { name: "React/Next.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
            { name: "Node.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
            { name: "PostgreSQL", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
            { name: "Redis", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
            { name: "AWS", image: "https://img.appmaster.io/p/6sYOW9pi7Bc/rs:fit:640:0/q:70/f:webp/plain/019b86d6-bd35-7e11-8dbc-335896b200fc/blog/019be26c-8356-7b5c-b0a6-d580eede0309/019be26c83.webp" },
            { name: "Docker", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
            { name: "Stripe", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/stripe/stripe-original.svg" }
          ] 
        }
      ] 
    },
    { 
      title: "USE CASES", 
      description: "Common scenarios where our SaaS development expertise helps businesses launch and scale their subscription products successfully.",
      coverImage: "https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?w=800&q=80",
      items: [
        { name: "B2B SaaS platforms", description: "Enterprise-grade solutions with multi-tenant architecture, role-based access, and white-labelling capabilities." },
        { name: "B2C subscription services", description: "Consumer subscription platforms with flexible pricing tiers, free trials, and seamless payment processing." },
        { name: "Marketplace platforms", description: "Two-sided marketplaces connecting buyers and sellers with complex transaction workflows and commission structures." },
        { name: "API-first SaaS products", description: "Developer platforms and API-based services with usage-based billing and comprehensive documentation." },
        { name: "Vertical SaaS solutions", description: "Industry-specific platforms for healthcare, real estate, education, and other specialised verticals." },
        { name: "Internal SaaS tools", description: "Company-wide platforms for HR, finance, operations, and other internal functions that serve hundreds of employees." }
      ] 
    },
    { 
      title: "OUTCOMES", 
      description: "What our SaaS development process delivers for your business. We focus on building platforms that can sustain long-term growth.",
      coverImage: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
      items: [
        { name: "Scalable multi-tenant systems", description: "Architecture that efficiently serves multiple customers from a single codebase while maintaining data isolation and security." }, 
        { name: "Monetisation-ready platform", description: "Built-in subscription management, billing integration, and pricing flexibility to support your revenue model from day one." }, 
        { name: "Growth-ready foundation", description: "Designed for feature expansion, user growth, and increasing transaction volumes without requiring architectural overhauls." },
        { name: "Reliable uptime", description: "Production systems with proper monitoring, error handling, and disaster recovery procedures to ensure business continuity." }
      ] 
    },
  ]
};

// ============================================================
// API & INTEGRATION DATA
// ============================================================
export const apiIntegrationData = {
  title: "API Development & Integrations",
  intro: "We connect systems and enable seamless data exchange.",
  description: "In today's interconnected digital landscape, your systems need to talk to each other. We build the bridges that make that happen — designing APIs that are secure, performant, and well-documented. Whether you need to connect internal tools or integrate with third-party services, we ensure your data flows exactly where it needs to go.",
  coverImage: "https://t3.ftcdn.net/jpg/03/35/96/92/360_F_335969210_gT7ynWgbPBSHXwt6Sp0YzZg0VqmouOsR.jpg",
  sections: [
    { 
      title: "TECHNOLOGIES", 
      description: "The tools and frameworks we use to build reliable, well-documented APIs that serve as the backbone of your digital infrastructure.",
      categories: [
        { 
          name: "API Stack", 
          technologies: [
            { name: "Node.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
            { name: "Express", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
            { name: "GraphQL", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
            { name: "REST", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
            { name: "Swagger", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg" }
          ] 
        }
      ] 
    },
    { 
      title: "USE CASES", 
      description: "Scenarios where API development and system integration deliver transformative business impact.",
      coverImage: "https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?w=800&q=80",
      items: [
        { name: "Third-party service integration", description: "Connecting your platform with payment gateways, CRM systems, marketing tools, and other essential business services." },
        { name: "Internal system unification", description: "Bridging legacy systems with modern applications to create a cohesive technology ecosystem." },
        { name: "Mobile backend development", description: "Building robust API backends that power mobile applications with efficient data delivery and real-time updates." },
        { name: "Partner integrations", description: "Creating developer portals and API documentation that enable external partners to integrate with your platform." },
        { name: "Data synchronisation", description: "Automating bi-directional data flows between systems to ensure consistency across your entire tool stack." },
        { name: "Microservices architecture", description: "Decomposing monolithic applications into manageable, independently deployable microservices." }
      ] 
    },
    { 
      title: "OUTCOMES", 
      description: "The benefits of well-designed API architecture and integrations for your business operations and technology strategy.",
      coverImage: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
      items: [
        { name: "Connected ecosystem", description: "Seamless data flow between all your business tools, eliminating silos and ensuring everyone works with accurate, up-to-date information." }, 
        { name: "Process automation", description: "Reduce manual data entry and the errors that come with it by automating data transfer between your critical systems." }, 
        { name: "Operational efficiency", description: "Faster processes, better data accuracy, and reduced operational overhead through intelligent system integration." },
        { name: "Scalable architecture", description: "Well-designed APIs that can handle increasing load without degradation, supporting your business growth." }
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
  description: "Off-the-shelf solutions often force you to adapt your processes to the software. We believe it should be the other way around. Our custom systems and dashboards are built around your exact workflows, giving your team the precise tools they need to work efficiently and make informed decisions.",
  coverImage: "https://www.kaartech.com/us/wp-content/uploads/2024/05/Cloud-Engineering-2.jpg",
  sections: [
    { 
      title: "USE CASES", 
      description: "Common scenarios where custom systems and dashboards deliver exceptional value for growing businesses.",
      coverImage: "https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?w=800&q=80",
      items: [
        { name: "Operational dashboards", description: "Real-time views of KPIs, order volumes, support tickets, and other critical metrics that keep your team informed and responsive." },
        { name: "Workflow automation systems", description: "Tools that automate approval processes, notifications, and task assignments across departments." },
        { name: "Inventory and resource management", description: "Systems for tracking physical or digital assets across locations with real-time availability data." },
        { name: "Reporting and analytics platforms", description: "Consolidated views of data from multiple sources, automated report generation, and drill-down capabilities." },
        { name: "Client management portals", description: "Self-service platforms where your clients can access their data, track progress, and communicate with your team." },
        { name: "Compliance and audit tools", description: "Systems that track regulatory compliance, maintain audit trails, and generate compliance reports automatically." }
      ] 
    },
    { 
      title: "OUTCOMES", 
      description: "The impact of purpose-built internal tools on your business operations and team productivity.",
      coverImage: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
      items: [
        { name: "Better decision-making", description: "Data-driven insights delivered through intuitive dashboards that surface the metrics that matter most to your business." }, 
        { name: "Real-time visibility", description: "Live dashboards that reflect your current business state, not yesterday's data, so you can spot trends and issues as they happen." }, 
        { name: "Reduced manual overhead", description: "Automate reporting, data consolidation, and routine tasks so your team can focus on work that actually moves the needle." },
        { name: "Improved team alignment", description: "Shared visibility into goals, progress, and performance that keeps everyone working toward the same objectives." }
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
  description: "Infrastructure is the foundation every digital product is built on. When it's done right, nobody notices. When it's done wrong, everyone suffers. We make sure your infrastructure is solid, secure, and ready to handle whatever comes next — whether that's a traffic surge, a new product launch, or rapid business growth.",
  coverImage: "https://www.kaartech.com/us/wp-content/uploads/2024/05/Cloud-Engineering-2.jpg",
  sections: [
    {
      title: "INFRASTRUCTURE STACK",
      description: "The technologies and platforms we leverage to build and manage robust, production-grade infrastructure that scales with your business.",
      
      categories: [
        { 
          name: "Cloud Platform", 
          technologies: [
            { name: "AWS", image: "https://img.appmaster.io/p/6sYOW9pi7Bc/rs:fit:640:0/q:70/f:webp/plain/019b86d6-bd35-7e11-8dbc-335896b200fc/blog/019be26c-8356-7b5c-b0a6-d580eede0309/019be26c83.webp" }
          ] 
        },
        { 
          name: "Containerisation", 
          technologies: [
            { name: "Docker", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" }, 
            { name: "Kubernetes", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" }
          ] 
        },
        { 
          name: "CDN & Edge", 
          technologies: [
            { name: "Cloudflare", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudflare/cloudflare-original.svg" }
          ] 
        },
        { 
          name: "Operating Systems", 
          technologies: [
            { name: "Linux", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" }
          ] 
        },
        { 
          name: "Monitoring", 
          technologies: [
            { name: "CloudWatch", image: "https://miro.medium.com/1*ffbynFsxn43lPdne2kaHMQ.png" },
            { name: "Grafana", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg" },
            { name: "Prometheus", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg" }
          ] 
        },
        { 
          name: "Security", 
          technologies: [
            { name: "AWS IAM", image: "https://img.appmaster.io/p/6sYOW9pi7Bc/rs:fit:640:0/q:70/f:webp/plain/019b86d6-bd35-7e11-8dbc-335896b200fc/blog/019be26c-8356-7b5c-b0a6-d580eede0309/019be26c83.webp" }
          ] 
        }
      ]
    },
    {
      title: "SUB-SERVICES",
      description: "Specialised infrastructure services tailored to different operational needs. Each service is designed to address specific challenges while maintaining a cohesive overall architecture.",
      coverImage: "https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?w=800&q=80",
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
      title: "OUTCOMES",
      description: "The results of well-designed and properly managed infrastructure. We measure success by reliability, performance, and security metrics.",
      coverImage: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
      items: [
        { name: "High availability", description: "Your systems stay online when it matters most, with redundancy and failover strategies that minimise downtime and protect revenue." },
        { name: "Optimised performance", description: "Applications that load quickly and respond instantly, delivering the experience your users expect and deserve." },
        { name: "Robust security", description: "Multi-layered protection against threats, with proper access controls, encryption, and monitoring to keep your data safe." },
        { name: "Cost efficiency", description: "Right-sized resources and intelligent architecture decisions that keep your infrastructure costs predictable and under control." }
      ]
    }
  ]
};

// Cloud Architecture
export const cloudArchData = {
  title: "Cloud Architecture",
  intro: "We design scalable, resilient cloud infrastructure tailored to your application and business needs.",
  description: "Cloud architecture done right means your applications can scale effortlessly while keeping costs predictable. We design systems that take full advantage of cloud-native services, ensuring you get the reliability of enterprise infrastructure without the enterprise price tag.",
  coverImage: "https://i0.wp.com/marketingstockport.co.uk/wp-content/uploads/2021/11/How-cloud-computing-can-advance-your-business.jpg?resize=780%2C400&ssl=1",
  sections: [
    { 
      title: "TECHNOLOGIES USED", 
      description: "Our primary cloud platform and the services we leverage to build robust architectures that scale with your business requirements.",
      
      categories: [
        { 
          name: "Cloud Services", 
          technologies: [
            { name: "AWS EC2", image: "https://miro.medium.com/v2/resize:fit:1400/0*4wH4cELmFcIy4PRy.png" },
            { name: "AWS RDS", image: "https://miro.medium.com/0*MrmTlTA5NVfbT8Vm.png" },
            { name: "AWS S3", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF4LEMdBhV5kTDcDY364cy-ygCUts8HgdjIQ&s" },
            { name: "AWS Lambda", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Amazon_Lambda_architecture_logo.svg/1280px-Amazon_Lambda_architecture_logo.svg.png" }
          ] 
        }
      ] 
    },
    { 
      title: "USE CASES", 
      description: "Scenarios where our cloud architecture expertise delivers the most value for businesses at different stages of cloud adoption.",
      coverImage: "https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?w=800&q=80",
      items: [
        { name: "Cloud migration", description: "Moving legacy on-premise systems to the cloud with careful planning to minimise disruption and ensure a smooth transition." },
        { name: "New application launches", description: "Starting with a cloud-native architecture that gives you maximum flexibility and scalability from day one." },
        { name: "Scaling for growth", description: "Preparing your infrastructure to handle increased demand, whether gradual growth or sudden traffic spikes." },
        { name: "Hybrid cloud setups", description: "Connecting on-premise infrastructure with cloud services for maximum flexibility during phased migrations." },
        { name: "Disaster recovery planning", description: "Multi-region architectures that ensure business continuity even in worst-case scenarios." },
        { name: "Cost optimisation reviews", description: "Analysing existing cloud spend and identifying opportunities for significant savings without sacrificing performance." }
      ] 
    },
    { 
      title: "OUTCOMES", 
      description: "What you can expect from our cloud architecture services. Every architecture decision is guided by real-world operational experience.",
      coverImage: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
      items: [
        { name: "Elastic scalability", description: "Infrastructure that automatically adjusts to demand, so you never pay for idle resources or struggle during traffic peaks." },
        { name: "High availability", description: "Multi-zone redundancy and automated failover that keeps your applications running even when individual components fail." },
        { name: "Cost optimisation", description: "Right-sized resources and intelligent architecture decisions that keep your cloud costs predictable and under control." },
        { name: "Operational clarity", description: "Well-documented architecture with clear runbooks, monitoring dashboards, and alerting for your operations team." }
      ] 
    },
  ]
};

// Server & DevOps
export const serverDevopsData = {
  title: "Server & DevOps Management",
  intro: "We manage and optimise servers and deployment pipelines to ensure stability and efficiency.",
  description: "DevOps is about more than tools — it's about creating a culture of reliability, automation, and continuous improvement. We handle the operational complexity so your development team can focus on building features that matter to your customers.",
  coverImage: "https://t4.ftcdn.net/jpg/19/20/66/61/360_F_1920666113_ut8vI9MGoZh2shXt8vQcbvS4DQYuhUbz.jpg",
  sections: [
    { 
      title: "TECHNOLOGIES USED", 
      description: "The tools and platforms that power our DevOps and server management workflows. Each tool is selected for reliability and industry adoption.",
     
      categories: [
        { 
          name: "DevOps Stack", 
          technologies: [
            { name: "Linux", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
            { name: "Docker", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
            { name: "Kubernetes", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
            { name: "GitHub Actions", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" }
          ] 
        }
      ] 
    },
    { 
      title: "USE CASES", 
      description: "Common scenarios where our DevOps expertise makes a measurable difference in system reliability and team productivity.",
      coverImage: "https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?w=800&q=80",
      items: [
        { name: "Production server management", description: "Keeping live environments stable, secure, and performant with proactive monitoring and rapid incident response." },
        { name: "CI/CD pipeline automation", description: "Automating testing and deployment so your team can ship confidently and frequently without manual intervention." },
        { name: "Reliability improvement", description: "Implementing monitoring, alerting, and runbooks that catch issues before they become outages." },
        { name: "Container orchestration", description: "Migrating applications to containerised environments with Docker and Kubernetes for improved resource utilisation." },
        { name: "Infrastructure as Code", description: "Managing infrastructure through version-controlled configuration files for consistency and auditability." },
        { name: "Development environment standardisation", description: "Creating consistent development environments that eliminate it works on my machine problems." }
      ] 
    },
    { 
      title: "OUTCOMES", 
      description: "The results of professional DevOps and server management. Our goal is to make operations invisible so your team can focus on building.",
      coverImage: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
      items: [
        { name: "Stable production environments", description: "Fewer outages, faster recovery times, and consistent performance your users can rely on." },
        { name: "Accelerated deployments", description: "Ship features and fixes faster with automated pipelines that reduce manual work and human error." },
        { name: "Minimised downtime", description: "Proactive monitoring and alerting that catches potential issues before they impact your users." },
        { name: "Improved developer experience", description: "Self-service infrastructure and streamlined workflows that let developers focus on writing code." }
      ] 
    },
  ]
};

// Performance Optimisation
export const performanceOptData = {
  title: "Performance Optimisation",
  intro: "We improve system speed, responsiveness, and efficiency across applications and infrastructure.",
  description: "Slow systems cost you users and revenue. Research shows that even a one-second delay in page load time can reduce conversions significantly. We identify bottlenecks and implement solutions that make a measurable difference to your bottom line.",
  coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
  sections: [
    { 
      title: "TECHNOLOGIES USED", 
      description: "Tools and techniques we employ for comprehensive performance analysis and optimisation across your entire technology stack.",
      coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
      categories: [
        { 
          name: "Performance Tools", 
          technologies: [
            { name: "Redis Cache", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
            { name: "AWS CloudFront", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaBvwRoNO5__mwhQ9mR_VZ0OvSfEgdH2-TFA&s" },
            { name: "Grafana", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg" }
          ] 
        }
      ] 
    },
    { 
      title: "USE CASES", 
      description: "When performance optimisation delivers the biggest impact for your business and user experience.",
      coverImage: "https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?w=800&q=80",
      items: [
        { name: "Underperforming applications", description: "Websites or apps that load slowly, feel sluggish, or struggle under normal user loads — we find and fix the root causes." },
        { name: "Scaling preparation", description: "Optimising your system to handle traffic spikes and growth without degradation in user experience." },
        { name: "User experience enhancement", description: "Improving load times and interaction responsiveness to reduce bounce rates and increase engagement." },
        { name: "Database query optimisation", description: "Identifying and fixing slow database queries that bottleneck your application's performance." },
        { name: "Frontend asset optimisation", description: "Minimising, bundling, and efficiently serving JavaScript, CSS, and images for faster page loads." },
        { name: "API response time improvement", description: "Reducing API latency through caching strategies, connection pooling, and efficient data serialisation." }
      ] 
    },
    { 
      title: "OUTCOMES", 
      description: "The measurable improvements you can expect from comprehensive performance optimisation across your stack.",
      coverImage: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
      items: [
        { name: "Faster load times", description: "Pages that load in under two seconds, keeping users engaged and reducing abandonment rates significantly." },
        { name: "Improved user experience", description: "Smooth, responsive interactions that make your application a pleasure to use and keep users coming back." },
        { name: "Better resource efficiency", description: "Do more with less — optimised systems that reduce infrastructure costs while improving performance." },
        { name: "Higher conversion rates", description: "Fast-loading pages and responsive interfaces that directly contribute to increased conversions and revenue." }
      ] 
    },
  ]
};

// Security & Monitoring
export const securityMonitoringData = {
  title: "Security & Monitoring",
  intro: "We secure your systems and ensure continuous monitoring for uptime and performance.",
  description: "Security isn't optional — it's fundamental. We implement defence-in-depth strategies that protect your business, your data, and your customers. Combined with comprehensive monitoring, you get both protection and visibility into your systems' health.",
  coverImage: "https://cdn.prod.website-files.com/670cce27577a0eeb27e1c56b/699d51c2e6e8a264d5e856e2_computer%20monitoring.webp",
  sections: [
    { 
      title: "TECHNOLOGIES USED", 
      description: "Our security and monitoring toolkit for comprehensive system protection and observability.",
      categories: [
        { 
          name: "Security Stack", 
          technologies: [
            { name: "CloudWatch", image: "https://miro.medium.com/1*ffbynFsxn43lPdne2kaHMQ.png" },
            { name: "Cloudflare", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudflare/cloudflare-original.svg" },
            { name: "AWS IAM", image: "https://miro.medium.com/0*g5pOOGcbNto89o-b" }
          ] 
        }
      ] 
    },
    { 
      title: "USE CASES", 
      description: "When security and monitoring become critical priorities for protecting your business and maintaining customer trust.",
      coverImage: "https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?w=800&q=80",
      items: [
        { name: "Production system hardening", description: "Protecting live environments from threats with proper configuration, access controls, and security best practices." },
        { name: "Downtime prevention", description: "Comprehensive monitoring that catches potential issues before they escalate into outages that impact your users." },
        { name: "System health visibility", description: "Full observability into infrastructure performance, resource utilisation, and potential vulnerabilities." },
        { name: "Compliance preparation", description: "Implementing security controls and audit trails required for SOC 2, HIPAA, GDPR, or other regulatory frameworks." },
        { name: "Incident response planning", description: "Establishing clear procedures for detecting, responding to, and recovering from security incidents." },
        { name: "Access control implementation", description: "Setting up role-based access control and least-privilege policies across your entire infrastructure." }
      ] 
    },
    { 
      title: "OUTCOMES", 
      description: "What you gain from professional security and monitoring implementation. Peace of mind comes standard.",
      coverImage: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
      items: [
        { name: "Protected assets", description: "Your data and infrastructure secured with multiple layers of defence against external threats and internal risks." },
        { name: "Reduced risk profile", description: "Fewer vulnerabilities, faster patching, and robust incident response capabilities that minimise potential damage." },
        { name: "Consistent uptime", description: "Systems that stay online and perform well, backed by alerting that ensures problems are addressed before users notice." },
        { name: "Compliance confidence", description: "Documentation and controls that give you confidence during audits and when answering security questionnaires from clients." }
      ] 
    },
  ]
};

// ============================================================
// DIGITAL GROWTH DATA
// ============================================================
export const digitalGrowthData = {
  title: "Digital Growth",
  intro: "We help businesses grow through data-driven digital strategies.",
  description: "Growth doesn't happen by accident. It requires a strategic combination of data analysis, creative execution, and continuous optimisation. We bring all three together to help your business attract more customers, convert more leads, and achieve measurable ROI from your digital investments.",
  coverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
  sections: [
    {
      title: "SUB-SERVICES",
      description: "Explore our comprehensive suite of digital growth services, each designed to drive specific business outcomes and deliver measurable results.",
      coverImage: "https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?w=800&q=80",
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
    {
      title: "OUTCOMES",
      description: "The measurable business results our digital growth strategies consistently deliver for clients across industries.",
      coverImage: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
      items: [
        { name: "Increased lead volume", description: "More qualified prospects entering your pipeline through optimised campaigns and conversion-focused strategies." },
        { name: "Better marketing ROI", description: "Every dollar works harder with data-driven targeting, continuous optimisation, and systematic performance improvement." },
        { name: "Higher conversion rates", description: "Turn more of your existing traffic into paying customers through strategic optimisation of every step in the user journey." },
        { name: "Scalable growth engine", description: "Systems and processes that allow you to increase marketing spend while maintaining or improving efficiency metrics." }
      ]
    }
  ]
};

// Performance Marketing
export const perfMarketingData = {
  title: "Performance Marketing",
  intro: "We run data-driven advertising campaigns focused on measurable results and ROI.",
  description: "We don't just spend your budget — we invest it strategically. Every campaign we run is measured, analysed, and continuously optimised to ensure your marketing dollars generate real business results. From audience targeting to creative testing to bid optimisation, we manage every aspect of your paid media.",
  coverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
  sections: [
    { 
      title: "ADVERTISING CHANNELS", 
      description: "The platforms where we run and optimise performance marketing campaigns to reach your target audience wherever they spend their time.",
      coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
      categories: [
        { 
          name: "Paid Media Platforms", 
          technologies: [
            { name: "Google Ads", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" },
            { name: "Meta Ads", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg" },
            { name: "LinkedIn Ads", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" }
          ] 
        }
      ] 
    },
    { 
      title: "USE CASES", 
      description: "When performance marketing makes the biggest impact on your business growth and customer acquisition.",
      coverImage: "https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?w=800&q=80",
      items: [
        { name: "Lead generation campaigns", description: "Fill your sales pipeline with qualified prospects by targeting the right audience with compelling offers and optimised landing experiences." },
        { name: "Product launches", description: "Generate awareness and drive early adoption with strategic campaigns that build momentum and capture demand." },
        { name: "Campaign scaling", description: "Take successful campaigns to the next level by increasing budget strategically while maintaining or improving efficiency metrics." },
        { name: "E-commerce growth", description: "Drive online sales through shopping ads, dynamic remarketing, and feed-optimised campaigns." },
        { name: "Brand awareness building", description: "Strategic top-of-funnel campaigns that introduce your brand to new audiences and create future demand." },
        { name: "Retargeting and retention", description: "Bring back visitors who didn't convert and re-engage past customers with tailored messaging." }
      ] 
    },
    { 
      title: "OUTCOMES", 
      description: "Measurable results from professionally managed performance marketing campaigns.",
      coverImage: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
      items: [
        { name: "Increased lead flow", description: "Consistent, predictable lead generation that keeps your sales team busy with qualified opportunities." },
        { name: "Lower acquisition costs", description: "Continuous optimisation that drives down your cost per lead or cost per acquisition over time." },
        { name: "Improved return on ad spend", description: "Better results from every dollar invested, with clear attribution between spend and revenue." },
        { name: "Scalable campaign structure", description: "Well-organised accounts and campaigns that can grow efficiently without hitting performance ceilings." }
      ] 
    },
  ]
};

// Conversion Optimisation
export const convOptData = {
  title: "Conversion Optimisation",
  intro: "We improve how users interact with your website to increase conversions and results.",
  description: "Small changes can lead to big results. We use data, user research, and systematic testing to optimise every step of your conversion funnel. Whether you're looking to generate more leads, increase sales, or improve engagement, we find and fix the friction points holding your conversion rates back.",
  coverImage: "https://media.licdn.com/dms/image/v2/D4E12AQGohY_cCOIyzQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1738181768118?e=2147483647&v=beta&t=jTyff8QSonsNqXG9Y2Vin6U1LwNoS1AE8oxsFhP_tKo",
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
    { 
      title: "OUTCOMES", 
      description: "The impact of systematic conversion optimisation on your business metrics and bottom line.",
      coverImage: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
      items: [
        { name: "Higher conversion rates", description: "More of your visitors take the actions that matter — whether that's purchasing, signing up, or booking a consultation." },
        { name: "Improved user experience", description: "Smoother, more intuitive journeys that build trust and make it easy for users to accomplish their goals." },
        { name: "Revenue growth", description: "Grow your bottom line by converting more of the traffic you already have, maximising the value of every visitor." },
        { name: "Data-informed culture", description: "Establish a testing mindset across your organisation, where decisions are based on evidence rather than opinions." }
      ] 
    },
  ]
};

// Analytics & Tracking
export const analyticsTrackData = {
  title: "Analytics & Tracking",
  intro: "We implement tracking systems to give you clear visibility into user behaviour and performance.",
  description: "You can't improve what you can't measure. We set up comprehensive analytics and tracking infrastructure that gives you actionable insights into every aspect of your digital presence — from user behaviour to campaign performance to revenue attribution.",
  coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
  sections: [
    { 
      title: "TOOLS & PLATFORMS", 
      description: "The analytics and tracking tools we configure and integrate for complete visibility into your digital performance.",
      coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
      categories: [
        { 
          name: "Analytics Stack", 
          technologies: [
            { name: "Google Analytics 4", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" },
            { name: "Google Tag Manager", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" },
            { name: "Looker Studio", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" }
          ] 
        }
      ] 
    },
    { 
      title: "USE CASES", 
      description: "When proper analytics and tracking infrastructure becomes essential for informed decision-making.",
      coverImage: "https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?w=800&q=80",
      items: [
        { name: "Understanding user behaviour", description: "See exactly how users navigate your site, where they drop off, and what drives them to convert — no more guessing." },
        { name: "Campaign performance tracking", description: "Know precisely which campaigns, channels, and creatives are driving results with proper attribution set up." },
        { name: "ROI measurement", description: "Connect your marketing spend directly to revenue, enabling smarter budget allocation and strategy decisions." },
        { name: "Funnel analysis", description: "Identify where users drop out of your conversion funnel and prioritise fixes based on potential impact." },
        { name: "Content performance", description: "Understand which content drives engagement, leads, and conversions to inform your content strategy." },
        { name: "Cross-device tracking", description: "Follow user journeys across devices and sessions for a complete picture of the customer experience." }
      ] 
    },
    { 
      title: "OUTCOMES", 
      description: "What you gain from properly implemented analytics and tracking. Data becomes your competitive advantage.",
      coverImage: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
      items: [
        { name: "Data-driven decisions", description: "Base your strategy on real data, not assumptions or gut feelings, leading to better outcomes and fewer costly mistakes." },
        { name: "Clear performance visibility", description: "Know exactly what's working, what isn't, and where to focus your resources for maximum impact." },
        { name: "Optimised marketing strategy", description: "Continuously improve your marketing based on performance data, allocating budget to what delivers the best results." },
        { name: "Stakeholder confidence", description: "Present clear, reliable data to investors, board members, and leadership that demonstrates marketing's impact." }
      ] 
    },
  ]
};

// Funnels & Landing Pages
export const funnelsData = {
  title: "Funnels & Landing Pages",
  intro: "We design and optimise funnels that convert visitors into leads and customers.",
  description: "A great funnel guides users naturally toward conversion, removing friction at every step. We design and build landing pages and conversion funnels that are strategically crafted to turn more of your visitors into customers — whether they come from ads, search, social media, or email.",
  coverImage: "https://e1.pxfuel.com/desktop-wallpaper/380/345/desktop-wallpaper-software-development-computer-software.jpg",
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
    { 
      title: "OUTCOMES", 
      description: "Results from professionally designed and optimised funnels and landing pages.",
      coverImage: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
      items: [
        { name: "More qualified leads", description: "Landing pages and funnels that attract and convert prospects who are genuinely interested in your offering." },
        { name: "Higher conversion rates", description: "Purpose-built pages that remove friction and guide visitors toward conversion with clear, compelling calls to action." },
        { name: "Better campaign performance", description: "Tighter alignment between ad creative and landing page content, resulting in higher quality scores and lower costs." },
        { name: "Faster iteration cycles", description: "Well-structured funnels that make it easy to test variations and continuously improve performance over time." }
      ] 
    },
  ]
};