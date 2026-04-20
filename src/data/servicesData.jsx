import { FiPenTool, FiCode, FiSmartphone, FiCpu, FiActivity } from "react-icons/fi";

export const servicesData = [
    {
      title: "UI/UX Design",
      icon: <FiPenTool className="text-[#21047c]" />,
      path: "/services/ui-ux-design",
      id:"subHeadings",
      items: [
        { title: "Wireframing & Prototyping" },
        { title: "User Interface Design" },
        { title: "User Experience Research" },
        { title: "Web & Mobile App Design" },
      ],
    },
    {
      title: "Web Development",
      icon: <FiCode className="text-[#21047c]" />,
      path: "/services/web-development",
      id:"subHeadings",
      items: [
        { title: "Frontend & Backend Development" },
        { title: "Custom Web Applications" },
        { title: "E-commerce & CMS Integration" },
        { title: "API Development & Integration" },
      ],
    },
    {
      title: "Mobile App Development",
      icon: <FiSmartphone className="text-[#21047c]" />,
      path: "/services/mobile-app-development",
      id:"subHeadings",
      items: [
        { title: "iOS & Android Development" },
        { title: "Flutter & React Native" },
        { title: "App Store Deployment" },
        { title: "UI/UX for Mobile" },
      ],
    },
    {
      title: "Blockchain Development",
      icon: <FiCpu className="text-[#21047c]" />,
      path: "/services/blockchain-development",
      id:"subHeadings",
      items: [
        { title: "Smart Contract Development" },
        { title: "Ethereum, Polygon, BSC" },
        { title: "Wallet & Token Integration" },
        { title: "DApp & NFT Solutions" },
      ],
    },
    {
      title: "AI Solutions",
      icon: <FiActivity className="text-[#21047c]" />,
      path: "/services/ai-solutions",
      id:"subHeadings",
      items: [
        { title: "AI Chatbots & Assistants" },
        { title: "Predictive Analytics" },
        { title: "Natural Language Processing" },
        { title: "Machine Learning Models" },
      ],
    },
    {
      title: "Digital Marketing",
      icon: <FiActivity className="text-[#21047c]" />,
      path: "/services/digital-marketing",
      id:"subHeadings",
      items: [
        { title: "Search Engine Optimization (SEO)" },
        { title: "Paid Advertising (SEM & Social Ads)" },
        { title: "Social Media Strategy & Management" },
        { title: "Email Marketing & Automation" },
      ],
    },
  ];

  // data that sent to each component separately
  // blockchain development
export const blockchainPageData = {
  section1: {
    image: "/service/blockchain/blockchainBg.jpg",
    title: "Build Secure, Scalable Web3 Solutions",
    description:
      "We develop robust blockchain applications that enable transparency, automation, and trust. From smart contracts to full-scale decentralized platforms, our solutions are engineered for security, scalability, and real-world adoption.",
    cta: "Discover Blockchain Work",
  },

  section2: {
    title: "Our Blockchain Services",
    services: [
      {
        title: "Smart Contract Development",
        description:
          "Secure, audited, and gas-optimized smart contracts built using Solidity and Vyper for reliable on-chain execution.",
      },
      {
        title: "DApp Development",
        description:
          "End-to-end decentralized application development with seamless frontend and blockchain integration.",
      },
      {
        title: "Tokenization",
        description:
          "Custom token development including ERC-20, ERC-721, and ERC-1155 for digital assets, NFTs, and ecosystems.",
      },
      {
        title: "Wallet Integration",
        description:
          "Seamless integration with MetaMask, WalletConnect, and custom wallets for smooth user interactions.",
      },
      {
        title: "DeFi Platforms",
        description:
          "Development of decentralized finance solutions including staking, yield farming, and liquidity protocols.",
      },
      {
        title: "Blockchain Consulting",
        description:
          "Strategic guidance on architecture, protocol selection, and scalable Web3 ecosystem design.",
      },
    ],
  },

  section3: {
    title: "Blockchain Stack",
    technologies: [
      {
        name: "Solidity",
        icon: "/service/blockchain/solidityLogo.svg",
        description:
          "Primary language for building secure Ethereum smart contracts",
      },
      {
        name: "Hardhat",
        icon: "/service/blockchain/hardhat.png",
        description:
          "Development environment for testing, deploying, and debugging smart contracts",
      },
      {
        name: "Ethers.js",
        icon: "/service/blockchain/ether.png",
        description:
          "Lightweight library for interacting with Ethereum and smart contracts",
      },
      {
        name: "IPFS",
        icon: "/service/blockchain/ipfs.png",
        description:
          "Decentralized storage system for secure and distributed data hosting",
      },
      {
        name: "Polygon",
        icon: "/service/blockchain/pol.jpeg",
        description:
          "High-speed, low-cost Layer 2 scaling solution for Ethereum",
      },
      {
        name: "Cardano",
        icon: "/service/blockchain/cardanoimg.png",
        description:
          "Proof-of-stake blockchain platform for secure and scalable applications",
      },
      {
        name: "Metamask",
        icon: "/service/blockchain/metamask.png",
        description:
          "Popular Web3 wallet for interacting with decentralized applications",
      },
    ],
  },

  section4: {
    otherServices: [
      {
        name: "Ui Ux Design",
        path: "/services/ui-ux-design",
        imageUrl: "/service/additionalServices/uiux.avif",
      },
      {
        name: "Web Development",
        path: "/services/web-development",
        imageUrl: "/service/additionalServices/webDev.jpeg",
      },
      {
        name: "Mobile App Development",
        path: "/services/mobile-app-development",
        imageUrl: "/service/additionalServices/mobile.webp",
      },
      {
        name: "AI Solutions",
        path: "/services/ai-solutions",
        imageUrl: "/service/additionalServices/ai.jpeg",
      },
    ],
  },
};

  //mobile app development
 export const mobileAppPagedata = {
  section1: {
    image: "/service/mobileApp/mobile.avif",
    title: "Build Mobile Apps That Users Love",
    description:
      "We create high-performance mobile applications that deliver seamless user experiences across iOS and Android. From concept to deployment, our apps are engineered for speed, scalability, and real-world usability.",
    cta: "See Our Apps",
  },

  section2: {
    title: "Our Mobile App Services",
    services: [
      {
        title: "iOS & Android Apps",
        description:
          "Robust native applications built with Swift and Kotlin, optimized for performance and platform-specific excellence.",
      },
      {
        title: "Cross-Platform Apps",
        description:
          "Efficient cross-platform solutions using Flutter and React Native to accelerate development without compromising quality.",
      },
      {
        title: "UI/UX for Mobile",
        description:
          "Intuitive, mobile-first designs focused on usability, engagement, and smooth user journeys.",
      },
      {
        title: "App Store Deployment",
        description:
          "End-to-end deployment including store optimization, compliance, and seamless publishing on App Store and Google Play.",
      },
      {
        title: "Backend Integration",
        description:
          "Secure integration with APIs, databases, and third-party services to power dynamic mobile experiences.",
      },
      {
        title: "Maintenance & Updates",
        description:
          "Continuous support, performance optimization, and feature updates to keep your app competitive and reliable.",
      },
    ],
  },

  section3: {
    title: "Mobile Tech Stack",
    technologies: [
      {
        name: "Flutter",
        icon: "/service/mobileApp/flutter.svg",
        description:
          "High-performance UI toolkit for building natively compiled apps from a single codebase",
      },
      {
        name: "React Native",
        icon: "/service/mobileApp/react.svg",
        description:
          "Cross-platform framework for building mobile apps using React and reusable components",
      },
      {
        name: "Kotlin",
        icon: "/service/mobileApp/kotlin.svg",
        description:
          "Modern, concise language for developing powerful Android applications",
      },
      {
        name: "Swift",
        icon: "/service/mobileApp/swift.svg",
        description:
          "Fast and secure programming language for building iOS applications",
      },
      {
        name: "Firebase",
        icon: "/service/mobileApp/firebase.svg",
        description:
          "Backend-as-a-service platform for authentication, real-time data, and scalable infrastructure",
      },
    ],
  },

  section4: {
    otherServices: [
      {
        name: "Ui Ux Design",
        path: "/services/ui-ux-design",
        imageUrl: "/service/additionalServices/uiux.avif",
      },
      {
        name: "Web Development",
        path: "/services/web-development",
        imageUrl: "/service/additionalServices/webDev.jpeg",
      },
      {
        name: "Blockchain Development",
        path: "/services/blockchain-development",
        imageUrl: "/service/additionalServices/blockchainDev.webp",
      },
      {
        name: "AI Solutions",
        path: "/services/ai-solutions",
        imageUrl: "/service/additionalServices/ai.jpeg",
      },
    ],
  },
};

  //web dev

 export const webDevPageData = {
  section1: {
    image: "/service/webDevelopment/webDev.jpeg",
    title: "Build Fast, Scalable, and Future-Ready Web Apps",
    description:
      "We develop high-performance web applications engineered for scalability, security, and seamless user experience. From frontend to backend, our solutions are designed to handle real-world demands while delivering speed, reliability, and business impact.",
    cta: "Get Started",
  },

  section2: {
    title: "Our Web Development Services",
    services: [
      {
        title: "Frontend Development",
        description:
          "Responsive, high-performance interfaces built with modern frameworks like React, Vue, and Angular for seamless user experiences.",
      },
      {
        title: "Backend Development",
        description:
          "Scalable and secure server-side architectures using Node.js, Express, and Django to power robust applications.",
      },
      {
        title: "API Development",
        description:
          "Efficient RESTful and GraphQL APIs that ensure smooth communication between systems and services.",
      },
      {
        title: "CMS Integration",
        description:
          "Flexible CMS solutions including WordPress and headless platforms like Strapi for easy content management.",
      },
      {
        title: "E-commerce Solutions",
        description:
          "Custom and scalable e-commerce platforms designed to optimize user journeys and maximize conversions.",
      },
      {
        title: "Progressive Web Apps",
        description:
          "App-like web experiences with offline support, fast loading, and mobile-first performance.",
      },
    ],
  },

  section3: {
    title: "Our Tech Stack",
    technologies: [
      {
        name: "React",
        icon: "/service/webDevelopment/react.svg",
        description:
          "Component-based frontend library for building dynamic user interfaces",
      },
      {
        name: "Next.js",
        icon: "/service/webDevelopment/nextjs.svg",
        description:
          "Optimized React framework with SSR, SSG, and performance enhancements",
      },
      {
        name: "Node.js",
        icon: "/service/webDevelopment/nodejs.svg",
        description:
          "Scalable JavaScript runtime for building fast backend services",
      },
      {
        name: "Express",
        icon: "/service/webDevelopment/express.svg",
        description:
          "Lightweight backend framework for building APIs and web servers",
      },
      {
        name: "MongoDB",
        icon: "/service/webDevelopment/mongodb.svg",
        description:
          "Flexible NoSQL database for scalable and high-volume applications",
      },
      {
        name: "MySQL",
        icon: "/service/webDevelopment/mysql.svg",
        description:
          "Reliable relational database for structured data management",
      },
      {
        name: "Tailwind CSS",
        icon: "/service/webDevelopment/Tailwind.png",
        description:
          "Utility-first CSS framework for rapid and consistent UI development",
      },
    ],
  },

  section4: {
    otherServices: [
      {
        name: "Ui Ux Design",
        path: "/services/ui-ux-design",
        imageUrl: "/service/additionalServices/uiux.avif",
      },
      {
        name: "Mobile App Development",
        path: "/services/mobile-app-development",
        imageUrl: "/service/additionalServices/mobile.webp",
      },
      {
        name: "Blockchain Development",
        path: "/services/blockchain-development",
        imageUrl: "/service/additionalServices/blockchainDev.webp",
      },
      {
        name: "AI Solutions",
        path: "/services/ai-solutions",
        imageUrl: "/service/additionalServices/ai.jpeg",
      },
    ],
  },
};

  //uiux

  export const uiuxPageData = {
  section1: {
    image: "/service/uiux/uiuxBg.avif",
    title: "Design Experiences That Users Remember",
    description:
      "We design intuitive, high-impact digital experiences that balance usability with visual excellence. Our approach focuses on understanding user behavior, simplifying complexity, and crafting interfaces that not only look great but perform seamlessly.",
    cta: "View Our Work",
  },

  section2: {
    title: "Our UI/UX Design Services",
    services: [
      {
        title: "User Research",
        description:
          "Data-driven research to uncover user motivations, behaviors, and friction points, ensuring every design decision is backed by real insights.",
      },
      {
        title: "Wireframing & Prototyping",
        description:
          "Structured wireframes and interactive prototypes that validate ideas early, reduce risk, and accelerate product development.",
      },
      {
        title: "UI Design",
        description:
          "Modern, visually engaging interfaces designed with precision in typography, color systems, and component consistency.",
      },
      {
        title: "UX Strategy",
        description:
          "Strategic design planning that aligns user journeys with business objectives to maximize engagement and conversion.",
      },
      {
        title: "Design Systems",
        description:
          "Scalable design systems and reusable components that ensure consistency, speed, and efficiency across all digital products.",
      },
      {
        title: "Usability Testing",
        description:
          "Continuous testing and feedback loops to identify usability gaps, refine experiences, and improve overall product performance.",
      },
    ],
  },

  section3: {
    title: "Our Design Toolkit",
    technologies: [
      {
        name: "Figma",
        icon: "/service/uiux/figma.svg",
        description:
          "Collaborative interface design and real-time prototyping platform",
      },
      {
        name: "Adobe XD",
        icon: "/service/uiux/xd.svg",
        description:
          "Advanced prototyping tool for interactive user experiences",
      },
      {
        name: "Sketch",
        icon: "/service/uiux/sketch.svg",
        description:
          "Vector-based design tool for scalable UI creation",
      },
      {
        name: "Photoshop",
        icon: "/service/uiux/photoshop.svg",
        description:
          "High-end image editing and visual asset creation",
      },
      {
        name: "Illustrator",
        icon: "/service/uiux/illustrator.svg",
        description:
          "Precision vector graphics and iconography design",
      },
    ],
  },

  section4: {
    otherServices: [
      {
        name: "Web Development",
        path: "/services/web-development",
        imageUrl: "/service/additionalServices/webDev.jpeg",
      },
      {
        name: "Mobile App Development",
        path: "/services/mobile-app-development",
        imageUrl: "/service/additionalServices/mobile.webp",
      },
      {
        name: "Blockchain Development",
        path: "/services/blockchain-development",
        imageUrl: "/service/additionalServices/blockchainDev.webp",
      },
      {
        name: "AI Solutions",
        path: "/services/ai-solutions",
        imageUrl: "/service/additionalServices/ai.jpeg",
      },
    ],
  },
};

  //ai
 export const aiPageData = {
  section1: {
    image: "/service/ai/aiBg.jpg",
    title: "AI That Thinks, Learns, and Delivers",
    description:
      "We build intelligent AI systems that transform raw data into actionable insights. From automation to prediction, our solutions leverage machine learning and advanced NLP to streamline operations, enhance decision-making, and unlock new business opportunities.",
    cta: "View our works",
  },

  section2: {
    title: "Our AI Capabilities",
    services: [
      {
        title: "Machine Learning Models",
        description:
          "Custom-built predictive models designed to uncover patterns, optimize processes, and drive data-backed decisions.",
      },
      {
        title: "NLP Solutions",
        description:
          "Advanced natural language processing for chatbots, summarization, sentiment analysis, and intelligent text understanding.",
      },
      {
        title: "Computer Vision",
        description:
          "AI-powered image and video analysis including object detection, recognition, and automated visual inspection systems.",
      },
      {
        title: "AI Chatbots",
        description:
          "Context-aware conversational agents that handle real-world queries, automate support, and improve user engagement.",
      },
      {
        title: "Recommendation Systems",
        description:
          "Personalized recommendation engines using collaborative filtering and deep learning to boost user retention and conversions.",
      },
      {
        title: "AI Integration",
        description:
          "Seamless integration of AI capabilities into your existing products, workflows, and infrastructure for maximum impact.",
      },
    ],
  },

  section3: {
    title: "AI Tools & Platforms",
    technologies: [
      {
        name: "TensorFlow",
        icon: "/service/ai/tensflow.png",
        description:
          "Scalable machine learning framework for building and deploying production-ready models",
      },
      {
        name: "PyTorch",
        icon: "/service/ai/pyt.png",
        description:
          "Flexible deep learning library for rapid experimentation and research-driven development",
      },
      {
        name: "OpenAI",
        icon: "/service/ai/openai.webp",
        description:
          "State-of-the-art generative AI models for language, automation, and intelligent applications",
      },
    ],
  },

  section4: {
    otherServices: [
      {
        name: "Ui Ux Design",
        path: "/services/ui-ux-design",
        imageUrl: "/service/additionalServices/uiux.avif",
      },
      {
        name: "Web Development",
        path: "/services/web-development",
        imageUrl: "/service/additionalServices/webDev.jpeg",
      },
      {
        name: "Mobile App Development",
        path: "/services/mobile-app-development",
        imageUrl: "/service/additionalServices/mobile.webp",
      },
      {
        name: "Blockchain Development",
        path: "/services/blockchain-development",
        imageUrl: "/service/additionalServices/blockchainDev.webp",
      },
    ],
  },
};

  //digital marketing

  export const digitalMarketingPageData = {
  section1: {
    image: "/marketing.avif",
    title: "Marketing That Converts, Not Just Clicks",
    description:
      "Our digital marketing services combine data science, storytelling, and automation to transform visibility into measurable business growth. We craft campaigns driven by insights, not assumptions — helping you reach the right audience, on the right channels, with the right message.",
    cta: "View our works",
  },

  section2: {
    title: "Our Digital Marketing Capabilities",
    services: [
      {
        title: "Search Engine Optimization (SEO)",
        description:
          "Improve rankings with technical optimization, keyword intelligence, and content strategies designed for both users and search engines.",
      },
      {
        title: "Paid Advertising (SEM & Social Ads)",
        description:
          "High-performance ad campaigns across Google, Meta, LinkedIn, and more with precise targeting, A/B testing, and ROI-driven strategies.",
      },
      {
        title: "Social Media Strategy & Management",
        description:
          "Platform-specific strategies, content planning, and daily management to build engagement and strong brand communities.",
      },
      {
        title: "Email Marketing & Automation",
        description:
          "Personalized email campaigns and automation flows that nurture leads, improve engagement, and drive conversions.",
      },
      {
        title: "Content Marketing & Copywriting",
        description:
          "High-quality blogs, website copy, and marketing assets crafted to tell your brand story and attract the right audience.",
      },
      {
        title: "Analytics, Reporting & Optimization",
        description:
          "Data-driven insights, performance tracking, and continuous optimization to maximize ROI and campaign effectiveness.",
      },
    ],
  },

  section3: {
    title: "Marketing Tools & Platforms",
    technologies: [
      {
        name: "Google Analytics",
        icon: "https://play-lh.googleusercontent.com/Ac7UebUnwu5-zLt4gN1HlW5KgZhquPJbNhQk2chzdrMjoTPxKJQkxBL5FGAJgp3lCw",
        description: "Track user behavior and campaign performance",
      },
      {
        name: "Google Ads",
        icon: "https://isackdigital.com/wp-content/uploads/2024/09/Google-AdWords-logo-rectangle.png",
        description: "Search, display, and performance marketing platform",
      },
      {
        name: "Meta Ads",
        icon: "https://pngimg.com/uploads/meta/meta_PNG12.png",
        description: "Advertising across Facebook and Instagram",
      },
      {
        name: "HubSpot",
        icon: "https://cdn-icons-png.flaticon.com/512/5968/5968872.png",
        description: "CRM and marketing automation platform",
      },
      {
        name: "Mailchimp",
        icon: "https://yt3.googleusercontent.com/2gOvPzvvd7p6vWxWl3vB7WSv7pve9wW9Xz8JHR_WZQZcVTya0nAwEiHlSkXFR2J0tZJ47vb5kA=s900-c-k-c0x00ffffff-no-rj",
        description: "Email marketing and automation tool",
      },
    ],
  },

  section4: {
    otherServices: [
      {
        name: "Ui Ux Design",
        path: "/services/ui-ux-design",
        imageUrl: "/service/additionalServices/uiux.avif",
      },
      {
        name: "Web Development",
        path: "/services/web-development",
        imageUrl: "/service/additionalServices/webDev.jpeg",
      },
      {
        name: "Mobile App Development",
        path: "/services/mobile-app-development",
        imageUrl: "/service/additionalServices/mobile.webp",
      },
      {
        name: "Blockchain Development",
        path: "/services/blockchain-development",
        imageUrl: "/service/additionalServices/blockchainDev.webp",
      },
    ],
  },
};