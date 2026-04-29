import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Solutions from "../pages/Solutions";

const About = lazy(() => import("../pages/About"));
const Product = lazy(() => import("../pages/Product"));
const Contact = lazy(() => import("../pages/Contact"));
const PageNotFound = lazy(() => import("../pages/PageNotFound"));

// Level 2 Services
const SoftwareDevelopment = lazy(() => import("../src/components/servicePages/SoftwareDevelopment"));
const ItInfrastructureAndCloud = lazy(() => import("../src/components/servicePages/ItInfrastructureAndCloud"));
const DigitalGrowth = lazy(() => import("../src/components/servicePages/DigitalGrowth"));

// Level 3 Services - Software Development
const WebApplications = lazy(() => import("../src/components/servicePages/WebApplications"));
const MobileApplications = lazy(() => import("../src/components/servicePages/MobileApplications"));
const SaaSPlatforms = lazy(() => import("../src/components/servicePages/SaaSPlatforms"));
const ApiIntegrations = lazy(() => import("../src/components/servicePages/ApiIntegrations"));
const CustomSystems = lazy(() => import("../src/components/servicePages/CustomSystems"));

// Level 3 Services - IT Infra
const CloudArchitecture = lazy(() => import("../src/components/servicePages/CloudArchitecture"));
const ServerDevOps = lazy(() => import("../src/components/servicePages/ServerDevOps"));
const PerformanceOptimisation = lazy(() => import("../src/components/servicePages/PerformanceOptimisation"));
const SecurityMonitoring = lazy(() => import("../src/components/servicePages/SecurityMonitoring"));

// Level 3 Services - Digital Growth
const PerformanceMarketing = lazy(() => import("../src/components/servicePages/PerformanceMarketing"));
const ConversionOptimisation = lazy(() => import("../src/components/servicePages/ConversionOptimisation"));
const AnalyticsTracking = lazy(() => import("../src/components/servicePages/AnalyticsTracking"));
const FunnelsLandingPages = lazy(() => import("../src/components/servicePages/FunnelsLandingPages"));

export default function AppRoutes() {
  return (
    <Suspense fallback={<div> </div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />

        
        
        <Route path="/product/naturopura" element={<Product />} />
        <Route path="/product/arthaProAi" element={<Product />} />
        <Route path="/product/swiftrooms" element={<Product />} />
        <Route path="/product/agrieye" element={<Product />} />
        <Route path="/product/feedora" element={<Product />} />
        <Route path="/product/cv-builder" element={<Product />} />

        // Add this line with your other routes
<Route path="/solutions" element={<Solutions />} />
<Route path="/solutions/:solutionId" element={<Solutions />} />
        


        {/* Level 2 service routes */}
        <Route path="/services/software-development" element={<SoftwareDevelopment />} />
        <Route path="/services/it-infrastructure-cloud" element={<ItInfrastructureAndCloud />} />
        <Route path="/services/digital-growth" element={<DigitalGrowth />} />

        {/* Level 3 service routes */}
        <Route path="/services/software-development/web-applications" element={<WebApplications />} />
        <Route path="/services/software-development/mobile-applications" element={<MobileApplications />} />
        <Route path="/services/software-development/saas-platforms" element={<SaaSPlatforms />} />
        <Route path="/services/software-development/api-integrations" element={<ApiIntegrations />} />
        <Route path="/services/software-development/custom-systems" element={<CustomSystems />} />

        <Route path="/services/it-infrastructure-cloud/cloud-architecture" element={<CloudArchitecture />} />
        <Route path="/services/it-infrastructure-cloud/server-devops" element={<ServerDevOps />} />
        <Route path="/services/it-infrastructure-cloud/performance-optimisation" element={<PerformanceOptimisation />} />
        <Route path="/services/it-infrastructure-cloud/security-monitoring" element={<SecurityMonitoring />} />

        <Route path="/services/digital-growth/performance-marketing" element={<PerformanceMarketing />} />
        <Route path="/services/digital-growth/conversion-optimisation" element={<ConversionOptimisation />} />
        <Route path="/services/digital-growth/analytics-tracking" element={<AnalyticsTracking />} />
        <Route path="/services/digital-growth/funnels-landing-pages" element={<FunnelsLandingPages />} />

        <Route path="/contact" element={<Contact />} />

        {/* unmatched paths */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Suspense>
  );
}
