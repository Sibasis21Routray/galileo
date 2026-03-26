import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Link, useLocation } from "react-router-dom";
import ServicePage from "../../pages/Services";
import { servicesData } from "../data/servicesData";
import { useNavigate } from "react-router-dom";
import { ourProducts } from "../data/ProductPageData";

export const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services", hasDropdown: true },
  { name: "Product", href: "/product", hasDropdown: true },
  { name: "Contact", href: "/contact" },
];

// Filter services data for desktop dropdown
const filteredServicesData = servicesData.filter(service => 
  ["SOFTWARE DEVELOPMENT", "SOFTWARE SOLUTIONS", "IT SERVICES", "DIGITAL MARKETING"].includes(service.title)
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [showProductDropdown, setShowProductDropdown] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileProductOpen, setMobileProductOpen] = useState(false);
  const navigate = useNavigate();
  const [itemWidths, setItemWidths] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Measure the width of each nav item
  useEffect(() => {
    if (typeof window !== "undefined") {
      const widths = {};
      navItems.forEach((item) => {
        const element = document.createElement("span");
        element.style.visibility = "hidden";
        element.style.position = "absolute";
        element.style.fontSize = "1rem";
        element.style.fontWeight = "500";
        element.style.fontFamily = "inherit";
        element.textContent = item.name;
        document.body.appendChild(element);
        widths[item.name] = element.offsetWidth;
        document.body.removeChild(element);
      });
      setItemWidths(widths);
    }
  }, []);

  // Check if a nav item is active
  const isActive = (href) => {
    if (href === "/") {
      return location.pathname === href;
    }
    return location.pathname.startsWith(href);
  };

  // Reset mobile dropdowns when sheet closes
  useEffect(() => {
    if (!isOpen) {
      setMobileServicesOpen(false);
      setMobileProductOpen(false);
    }
  }, [isOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black" style={{ backgroundColor: "#000000" }}>
      {/* Animated Background - Black with subtle shadow */}
      <motion.div
        className="absolute inset-0 bg-black"
        initial={{ opacity: 0, y: -100 }}
        animate={{
          opacity: 1,
          y: 0,
          boxShadow: scrolled ? "0 4px 20px rgba(0, 0, 0, 0.3)" : "none",
          borderBottom: scrolled ? "1px solid rgba(41, 246, 122, 0.2)" : "none",
        }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      />

      <div className="relative px-0 md:px-4 pr-3 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="z-10 block">
            <motion.div
              whileTap={{
                scale: 0.95,
                transition: { duration: 0.1 },
              }}
              className="flex items-center space-x-2"
            >
              <div className="relative w-50 h-15">
                <motion.div
                  whileHover={{
                    transition: { duration: 0.6 },
                  }}
                  className="relative w-full h-full p-1 rounded-lg bg-black flex items-center justify-center overflow-hidden"
                >
                  <div className="relative flex items-center justify-center">
                    <img
                      src="https://galileonext.com/wp-content/uploads/2025/06/galileo.png"
                      alt="Logo"
                      className="object-contain h-10"
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const isServices = item.name === "Services";
              const isProduct = item.name === "Product";
              const active = isActive(item.href);

              return (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => {
                    if (item.hasDropdown) {
                      if (item.name === "Services") setShowServicesDropdown(true);
                      if (item.name === "Product") setShowProductDropdown(true);
                    }
                  }}
                  onMouseLeave={() => {
                    if (item.hasDropdown) {
                      if (item.name === "Services") setShowServicesDropdown(false);
                      if (item.name === "Product") setShowProductDropdown(false);
                    }
                  }}
                >
                  <Link
                    to={item.href}
                    className="relative px-4 py-2 flex flex-col items-center"
                    onClick={(e) => {
                      if (item.hasDropdown) {
                        e.preventDefault();
                      }
                    }}
                  >
                    <motion.span
                      className={`relative z-10 font-medium text-md flex items-center ${
                        active
                          ? "text-[#29f67a]"
                          : "text-gray-300 hover:text-[#29f67a]"
                      }`}
                      whileHover={{ scale: 1.05 }}
                    >
                      {item.name}
                      {(isServices || isProduct) && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-inherit mt-[2px] ml-1"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </motion.span>

                    {active && (
                      <motion.div
                        layoutId="nav-underline"
                        className="absolute bottom-0 h-0.5 bg-[#29f67a]"
                        style={{
                          width: itemWidths[item.name]
                            ? `${itemWidths[item.name]}px`
                            : "auto",
                        }}
                        initial={false}
                        transition={{
                          type: "spring",
                          bounce: 0.2,
                          duration: 0.6,
                        }}
                      />
                    )}
                  </Link>

                  {/* Services Dropdown - Desktop */}
                  <AnimatePresence>
                    {isServices && showServicesDropdown && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full right-40 mt-2 w-[300px]"
                      >
                        <ServicePage
                          servicesData={filteredServicesData}
                          onClose={() => setShowServicesDropdown(false)}
                          theme="dark"
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Product Dropdown - Desktop */}
                  <AnimatePresence>
                    {isProduct && showProductDropdown && (
                      <motion.div
                        initial={{ opacity: 0, y: -15, scale: 0.98 }}
                        animate={{
                          opacity: 1,
                          y: 0,
                          scale: 1,
                          transition: {
                            type: "spring",
                            bounce: 0.3,
                            duration: 0.4,
                          },
                        }}
                        exit={{
                          opacity: 0,
                          y: -5,
                          transition: { duration: 0.15 },
                        }}
                        className="absolute top-full right-0 mt-2 w-100 bg-black shadow-2xl rounded-xl border border-[#29f67a]/20"
                        style={{
                          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                        }}
                      >
                        <div className="flex flex-col py-1.5">
                          {ourProducts.map((product, index) => (
                            <div key={product.productHeadingSection.pathUrl}>
                              {index > 0 && (
                                <div className="border-t border-[#29f67a]/10 mx-3 my-1" />
                              )}
                              <motion.div
                                initial={{ x: -5, opacity: 0 }}
                                animate={{
                                  x: 0,
                                  opacity: 1,
                                  transition: {
                                    delay: 0.1 + index * 0.05,
                                    ease: "easeOut",
                                  },
                                }}
                              >
                                <Link
                                  to={product.productHeadingSection.pathUrl}
                                  className="group px-4 py-3 hover:bg-[#29f67a]/10 transition-all duration-200 flex items-center text-[#29f67a]"
                                  onClick={() => setShowProductDropdown(false)}
                                >
                                  <span className="mr-3 group-hover:scale-110 transition-transform duration-200 bg-white">
                                    <img
                                      src={product.productHeadingSection.navIcon}
                                      className="rounded-full w-9 h-9 object-contain"
                                      alt="Product Icon"
                                    />
                                  </span>

                                  <div>
                                    <p className="font-medium text-white group-hover:text-[#29f67a] transition-colors">
                                      {product.productHeadingSection.name}
                                    </p>
                                    <p className="text-xs text-gray-400 mt-0.5">
                                      {product.productHeadingSection.heading}
                                    </p>
                                  </div>
                                  <svg
                                    className="ml-auto h-4 w-4 text-gray-500 group-hover:text-[#29f67a] transition-colors"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M9 5l7 7-7 7"
                                    />
                                  </svg>
                                </Link>
                              </motion.div>
                            </div>
                          ))}
                        </div>

                        {/* Footer */}
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1, transition: { delay: 0.2 } }}
                          className="px-4 py-2.5 text-xs text-gray-400 border-t border-[#29f67a]/10 flex justify-between items-center"
                        >
                          <span
                            className="hover:text-[#29f67a] cursor-pointer transition-colors"
                            onClick={() => {
                              navigate("/contact");
                              setShowProductDropdown(false);
                            }}
                          >
                            Need help?
                          </span>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <div
                className="lg:hidden relative z-10 text-gray-300 hover:text-[#29f67a] hover:bg-[#29f67a]/10 cursor-pointer p-2 rounded-lg transition-all"
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
                <span className="sr-only">Toggle menu</span>
              </div>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-[320px] sm:w-[380px] bg-black border-l border-[#29f67a]/20 p-0"
            >
              <div className="flex flex-col h-full">
                {/* Mobile Header logo */}
                <div className="flex items-center justify-between p-4 border-b border-[#29f67a]/20">
                  <Link to="/" className="z-10 block" onClick={() => setIsOpen(false)}>
                    <motion.div
                      whileTap={{
                        scale: 0.95,
                        transition: { duration: 0.1 },
                      }}
                      className="flex items-center space-x-2"
                    >
                      <div className="relative w-50 h-15">
                        <motion.div
                          whileHover={{
                            transition: { duration: 0.6 },
                          }}
                          className="relative w-full h-full p-1 rounded-lg bg-black flex items-center justify-left overflow-hidden"
                        >
                          <div className="relative flex items-center justify-center">
                            <img
                              src="https://galileonext.com/wp-content/uploads/2025/06/galileo.png"
                              alt="Logo"
                              className="object-contain h-10"
                            />
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  </Link>
                </div>

                {/* Mobile Navigation */}
                <div className="flex-1 py-2 overflow-y-auto">
                  {navItems.map((item) => {
                    const active = isActive(item.href);
                    const isServices = item.name === "Services";
                    const isProduct = item.name === "Product";

                    if (isServices || isProduct) {
                      const isOpenState = isServices ? mobileServicesOpen : mobileProductOpen;
                      const setIsOpenState = isServices ? setMobileServicesOpen : setMobileProductOpen;
                      const dataToShow = isServices ? servicesData : ourProducts;
                      
                      return (
                        <div key={item.name} className="border-b border-[#29f67a]/10 mx-2">
                          {/* Dropdown Header */}
                          <button
                            onClick={() => {
                              if (isServices && mobileProductOpen) setMobileProductOpen(false);
                              if (isProduct && mobileServicesOpen) setMobileServicesOpen(false);
                              setIsOpenState(!isOpenState);
                            }}
                            className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all ${
                              active
                                ? "text-[#29f67a]"
                                : "text-gray-300 hover:text-[#29f67a]"
                            }`}
                          >
                            <span className="font-medium text-base">{item.name}</span>
                            <motion.div
                              animate={{ rotate: isOpenState ? 180 : 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </motion.div>
                          </button>

                          {/* Dropdown Content */}
                          <AnimatePresence>
                            {isOpenState && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden"
                              >
                                <div className="pl-8 py-2 space-y-1">
                                  {dataToShow.map((item_data, idx) => {
                                    const itemPath = isServices ? item_data.path : item_data.productHeadingSection?.pathUrl;
                                    const itemTitle = isServices ? item_data.title : item_data.productHeadingSection?.name;
                                    const itemIcon = isServices ? item_data.icon : item_data.productHeadingSection?.navIcon;
                                    const isItemActive = location.pathname === itemPath;
                                    
                                    return (
                                      <Link
                                        key={idx}
                                        to={itemPath}
                                        onClick={() => {
                                          setIsOpenState(false);
                                          setTimeout(() => setIsOpen(false), 100);
                                        }}
                                        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition text-sm ${
                                          isItemActive
                                            ? "text-[#29f67a] bg-[#29f67a]/10"
                                            : "text-gray-400 hover:text-[#29f67a] hover:bg-[#29f67a]/5"
                                        }`}
                                      >
                                       
                                        <span>{itemTitle}</span>
                                      </Link>
                                    );
                                  })}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    }

                    // Regular nav items (Home, About, Contact)
                    return (
                      <Link
                        key={item.name}
                        to={item.href}
                        onClick={() => {
                          setIsOpen(false);
                        }}
                        className={`block px-6 py-3 rounded-lg transition-all mx-2 my-1 font-medium ${
                          active
                            ? "text-[#29f67a] bg-[#29f67a]/10"
                            : "text-gray-300 hover:text-[#29f67a] hover:bg-[#29f67a]/5"
                        }`}
                      >
                        {item.name}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}