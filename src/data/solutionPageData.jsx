import { 
  FiBookOpen, FiShield, FiClipboard, FiBarChart2, FiLink, FiLayout,
  FiUsers, FiFileText, FiDollarSign, FiBriefcase, FiHome, FiCalendar,
  FiAward, FiGlobe, FiClock, FiCheckCircle, FiSettings, FiSmartphone,
  FiLayers, FiTarget, FiTrendingUp, FiServer, FiGrid
} from "react-icons/fi";

// ============================================================
// SOLUTION 1: COMPLIANCE & LEARNING MANAGEMENT PLATFORM (CALM)
// ============================================================
export const calmSolutionData = {
  title: "Compliance & Learning Management Platform",
  subtitle: "Enterprise Learning & Compliance Platform",
  heroTitle: "A Scalable Learning & Compliance Platform Built for Real-World Organisations",
  heroSubtext: "Deliver training, enforce compliance, and track performance across your organisation — all in one fully customisable, enterprise-ready platform.",
  trustLine: "Trusted by organisations with 9,000+ active users",
  ctaText: "Request a Demo",
  heroImage: "https://cdn.pixabay.com/photo/2016/11/21/06/53/beautiful-natural-image-1844362_1280.jpg",
  ctaPath: "/contact",

  sections: [
    // SECTION 2: KEY FEATURES
    {
      title: "KEY FEATURES",
      heading: "Everything You Need to Train, Track, and Stay Compliant",
      subtext: "Our platform combines learning management with compliance tracking — giving you full visibility and control over training, policies, and performance.",
      type: "features",
      items: [
        {
          icon: <FiLayers className="w-6 h-6 text-[#29f67a]" />,
          name: "Learning & Course Management",
          description: "Create and manage engaging courses with multimedia content, quizzes, and structured learning paths."
        },
        {
          icon: <FiShield className="w-6 h-6 text-[#29f67a]" />,
          name: "Compliance & Policy Tracking",
          description: "Ensure policies are reviewed and accepted through structured modules, with full audit trails and tracking."
        },
        {
          icon: <FiClipboard className="w-6 h-6 text-[#29f67a]" />,
          name: "Advanced Assessments",
          description: "Run quizzes, tests, and evaluations with timed assessments, grading systems, and automated scoring."
        },
        {
          icon: <FiBarChart2 className="w-6 h-6 text-[#29f67a]" />,
          name: "Custom Reporting & Insights",
          description: "Access powerful, real-time reports on user progress, compliance status, and performance metrics."
        },
        {
          icon: <FiLink className="w-6 h-6 text-[#29f67a]" />,
          name: "Integrations & Automation",
          description: "Seamlessly integrate with corporate systems, HR platforms, and email tools to automate workflows."
        },
        {
          icon: <FiLayout className="w-6 h-6 text-[#29f67a]" />,
          name: "Fully Customisable & Branded",
          description: "White-label the platform with your branding, customise workflows, and tailor features to your organisation."
        }
      ]
    },

    // SECTION 3: PLATFORM CAPABILITIES
    {
      title: "PLATFORM CAPABILITIES",
      heading: "Built for Engagement, Scalability, and Control",
      subtext: null,
      type: "capabilities",
      description: "Our platform is designed to go beyond basic learning systems — combining engagement, flexibility, and enterprise-level performance.",
      items: [
        "Mobile-friendly and fully responsive design",
        "Gamification features including badges, certificates, and leaderboards",
        "Multilingual support for global teams",
        "Drip-feed content delivery and structured learning journeys",
        "Powerful course builder with multimedia support",
        "Assignments, quizzes, and interactive content",
        "Role-based access and user segmentation"
      ],
      outcomeLine: "Designed to keep users engaged while giving administrators full control."
    },

    // SECTION 4: HOW IT WORKS
    {
      title: "HOW IT WORKS",
      heading: "How the Platform Fits Into Your Organisation",
      subtext: null,
      type: "steps",
      items: [
        {
          step: "01",
          name: "Create & Configure",
          description: "Build courses, policies, and assessments tailored to your organisation."
        },
        {
          step: "02",
          name: "Assign & Deliver",
          description: "Assign content to teams, departments, or individuals."
        },
        {
          step: "03",
          name: "Track & Monitor",
          description: "Monitor progress, completion, and compliance in real-time."
        },
        {
          step: "04",
          name: "Report & Improve",
          description: "Generate insights and continuously improve training effectiveness."
        }
      ]
    },

    // SECTION 5: USE CASES
    {
      title: "USE CASES",
      heading: "Designed for Real Business Needs",
      subtext: null,
      type: "usecases",
      items: [
        "Corporate training and onboarding",
        "Compliance and regulatory training",
        "Policy acceptance and tracking",
        "Continuous professional development",
        "Multi-location or global workforce training"
      ]
    },

    // SECTION 6: DEPLOYMENT & FLEXIBILITY
    {
      title: "DEPLOYMENT & FLEXIBILITY",
      heading: "Flexible Deployment, Built Around You",
      subtext: null,
      type: "deployment",
      description: "We offer the platform as a fully managed solution tailored to your needs:",
      items: [
        { icon: <FiServer className="w-5 h-5 text-[#29f67a]" />, text: "Fully hosted (no infrastructure required)" },
        { icon: <FiSettings className="w-5 h-5 text-[#29f67a]" />, text: "Fully customised based on your workflows" },
        { icon: <FiLayout className="w-5 h-5 text-[#29f67a]" />, text: "Fully branded to match your organisation" },
        { icon: <FiTrendingUp className="w-5 h-5 text-[#29f67a]" />, text: "Scalable for thousands of users" }
      ],
      proofLine: "Currently supporting organisations with thousands of active users across multiple departments."
    },

    // SECTION 7: FAQ
    {
      title: "FAQ",
      heading: "Frequently Asked Questions",
      subtext: null,
      type: "faq",
      items: [
        {
          question: "Can the platform be customised for our organisation?",
          answer: "Yes — workflows, branding, and features can be tailored to your needs."
        },
        {
          question: "Is the platform suitable for large organisations?",
          answer: "Yes — it is designed to scale and already supports thousands of users."
        },
        {
          question: "Can we integrate it with our existing systems?",
          answer: "Yes — we support integrations with HR systems, email platforms, and other tools."
        },
        {
          question: "Does it support compliance tracking?",
          answer: "Yes — policies, acknowledgements, and training can all be tracked and reported."
        },
        {
          question: "Is the platform mobile-friendly?",
          answer: "Yes — it is fully responsive and works across devices."
        }
      ]
    },

    // SECTION 8: FINAL CTA
    {
      title: "FINAL CTA",
      heading: "Ready to Transform Training and Compliance?",
      subtext: "Whether you're looking to improve learning outcomes or enforce compliance at scale, we can help you implement a platform that works for your organisation.",
      type: "cta",
      ctaText: "Request a Demo",
      ctaPath: "/contact"
    }
  ]
};

// ============================================================
// SOLUTION 2: SONAR
// ============================================================
export const sonarSolutionData = {
  title: "SONAR",
  subtitle: "Enterprise Operations Platform",
  heroTitle: "One Platform to Manage People, Operations, and Resources",
  heroSubtext: "SONAR brings together HR, operations, scheduling, and resource management into a single, unified system — designed to simplify complex workflows and improve organisational efficiency.",
  trustLine: "Built for organisations managing large teams, multiple processes, and operational complexity",
  ctaText: "Request a Demo",
  heroImage: "../../public/solutions/erp.jpg",
  ctaPath: "/contact",

  sections: [
    // SECTION 2: KEY FEATURES
    {
      title: "KEY FEATURES",
      heading: "Everything You Need to Run Your Operations Efficiently",
      subtext: "SONAR is designed as a modular, enterprise-ready platform that centralises your key business processes.",
      type: "features",
      items: [
        {
          icon: <FiUsers className="w-6 h-6 text-[#29f67a]" />,
          name: "Employee Onboarding & HR Management",
          description: "Manage employee lifecycle from onboarding to core HR processes in a structured, centralised system."
        },
        {
          icon: <FiFileText className="w-6 h-6 text-[#29f67a]" />,
          name: "Visa & Compliance Management",
          description: "Handle visa processing, documentation, and compliance workflows with full visibility and tracking."
        },
        {
          icon: <FiDollarSign className="w-6 h-6 text-[#29f67a]" />,
          name: "Payroll & Performance Management",
          description: "Streamline payroll operations and track employee performance through structured evaluation systems."
        },
        {
          icon: <FiBriefcase className="w-6 h-6 text-[#29f67a]" />,
          name: "Client & Contract Management",
          description: "Manage client relationships, contracts, and associated workflows within a unified system."
        },
        {
          icon: <FiHome className="w-6 h-6 text-[#29f67a]" />,
          name: "Facility & Resource Management",
          description: "Handle room bookings, facility usage, and resource allocation with real-time availability tracking."
        },
        {
          icon: <FiCalendar className="w-6 h-6 text-[#29f67a]" />,
          name: "Scheduling & Appointments",
          description: "Manage appointments, staff schedules, and operational timelines efficiently."
        }
      ]
    },

    // SECTION 3: PLATFORM CAPABILITIES
    {
      title: "PLATFORM CAPABILITIES",
      heading: "Built for Complex Operations and Scalable Growth",
      subtext: null,
      type: "capabilities",
      description: "SONAR is designed to bring structure and visibility to organisations managing multiple workflows across teams and departments.",
      items: [
        "Centralised system for HR, operations, and resource management",
        "Role-based access and user segmentation",
        "Real-time visibility across processes",
        "Customisable workflows based on business needs",
        "Integration with finance and external systems",
        "Scalable architecture for growing organisations"
      ],
      outcomeLine: "Designed to reduce complexity, improve coordination, and increase operational efficiency."
    },

    // SECTION 4: HOW IT WORKS
    {
      title: "HOW IT WORKS",
      heading: "How SONAR Supports Your Operations",
      subtext: null,
      type: "steps",
      items: [
        {
          step: "01",
          name: "Configure & Customise",
          description: "Set up workflows, modules, and processes based on your organisation."
        },
        {
          step: "02",
          name: "Manage & Operate",
          description: "Handle HR, scheduling, resources, and contracts within a single platform."
        },
        {
          step: "03",
          name: "Track & Monitor",
          description: "Get real-time visibility into operations, employees, and resources."
        },
        {
          step: "04",
          name: "Integrate & Scale",
          description: "Connect with finance systems and scale as your organisation grows."
        }
      ]
    },

    // SECTION 5: USE CASES
    {
      title: "USE CASES",
      heading: "Designed for Operational Efficiency",
      subtext: null,
      type: "usecases",
      items: [
        "Managing employee onboarding and HR processes",
        "Handling visa and compliance workflows",
        "Streamlining payroll and performance tracking",
        "Managing client contracts and relationships",
        "Coordinating facilities and resource allocation",
        "Scheduling staff and appointments across teams"
      ]
    },

    // SECTION 6: INTEGRATIONS & FLEXIBILITY
    {
      title: "INTEGRATIONS & FLEXIBILITY",
      heading: "Flexible, Connected, and Built Around You",
      subtext: null,
      type: "deployment",
      description: "SONAR is designed to fit into your existing ecosystem while centralising operations.",
      items: [
        { icon: <FiLink className="w-5 h-5 text-[#29f67a]" />, text: "Integrates with finance systems" },
        { icon: <FiGrid className="w-5 h-5 text-[#29f67a]" />, text: "Connects with external tools and platforms" },
        { icon: <FiSettings className="w-5 h-5 text-[#29f67a]" />, text: "Customisable modules and workflows" },
        { icon: <FiTarget className="w-5 h-5 text-[#29f67a]" />, text: "Fully adaptable to different industries" }
      ],
      deploymentOptions: [
        "Fully hosted solution",
        "Custom implementation",
        "Fully branded to your organisation"
      ],
      outcomeLine: "A flexible platform that adapts to your operations — not the other way around."
    },

    // SECTION 7: FAQ
    {
      title: "FAQ",
      heading: "Frequently Asked Questions",
      subtext: null,
      type: "faq",
      items: [
        {
          question: "Can SONAR be customised for our organisation?",
          answer: "Yes — workflows, modules, and features can be tailored to your requirements."
        },
        {
          question: "Is SONAR suitable for large organisations?",
          answer: "Yes — it is designed to handle complex operations and scale with your business."
        },
        {
          question: "Can it integrate with finance systems?",
          answer: "Yes — SONAR is built to integrate with finance and other external systems."
        },
        {
          question: "Does it support multiple departments?",
          answer: "Yes — the platform is designed for cross-functional usage across teams."
        },
        {
          question: "Can we manage scheduling and resources together?",
          answer: "Yes — scheduling and resource management are fully integrated within the platform."
        }
      ]
    },

    // SECTION 8: FINAL CTA
    {
      title: "FINAL CTA",
      heading: "Simplify Your Operations with One Unified Platform",
      subtext: "If you're managing multiple systems, processes, and teams, SONAR brings everything together into a single, efficient solution.",
      type: "cta",
      ctaText: "Request a Demo",
      ctaPath: "/contact"
    }
  ]
};

// ============================================================
// SOLUTIONS LIST FOR LANDING PAGE
// ============================================================
export const solutionsList = [
  {
    id: "calm",
    title: "Compliance & Learning Management Platform",
    shortDescription: "Deliver training, enforce compliance, and track performance across your organisation.",
    path: "/solutions/calm",
    data: calmSolutionData
  },
  {
    id: "sonar",
    title: "SONAR — Operations & Resource Management",
    shortDescription: "Manage HR, operations, scheduling, and resources in one unified system.",
    path: "/solutions/sonar",
    data: sonarSolutionData
  }
];