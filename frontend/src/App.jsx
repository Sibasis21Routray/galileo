import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AppRoutes from '../routes/AppRoutes';
import SmoothScroll from './components/overlays/SmoothScroll';
import ScrollToTopButton from './components/ui/ScrollToTopButton';

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
  }, [pathname]);

  return (
    <>
      <SmoothScroll />

      <div className="min-h-screen w-screen bg-black">
        <Navbar />
        <AppRoutes />
        <Footer />
      </div>

      <ScrollToTopButton />
    </>
  );
}

export default App;