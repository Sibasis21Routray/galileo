import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo } from "react";
import { Search, ChevronDown, HelpCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { FiMessageSquare } from "react-icons/fi";

const FaqSection = ({ productData }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const navigate = useNavigate();
  const categories = ["All", ...new Set(productData.faqs.map(faq => faq.category))];

  const filteredFaqs = useMemo(() => {
    let result = productData.faqs;
    if (activeCategory !== "All") {
      result = result.filter((faq) => faq.category === activeCategory);
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (faq) =>
          faq.question.toLowerCase().includes(query) ||
          faq.answer.toLowerCase().includes(query)
      );
    }

    return result;
  }, [productData, activeCategory, searchQuery]);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#29f67a]/30 mb-6"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#29f67a]" />
            <span className="text-[10px] font-mono tracking-wider text-[#29f67a] uppercase">
              Help Center
            </span>
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Frequently Asked Questions
          </motion.h2>

          <div className="w-16 h-0.5 bg-[#29f67a] mx-auto mb-6" />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            {productData.description || "Find answers to common questions about our products and services"}
          </motion.p>
        </motion.div>

        {/* Search and Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto mb-8">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-500" />
            </div>
            <input
              type="text"
              placeholder="Search questions..."
              className="block w-full pl-11 pr-4 py-3 bg-black border border-gray-800 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#29f67a] transition-colors"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeCategory === category
                    ? "bg-[#29f67a] text-black"
                    : "bg-gray-900 text-gray-400 hover:bg-gray-800 border border-gray-800"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* FAQ Grid */}
        {filteredFaqs.length > 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-6"
          >
            {/* Left Column */}
            <div className="space-y-4">
              {filteredFaqs
                .filter((_, index) => index % 2 === 0)
                .map((faq) => (
                  <motion.div
                    key={faq.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: faq.id * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <div
                      onClick={() => toggleFAQ(faq.id)}
                      className={`border rounded-xl cursor-pointer transition-all ${
                        activeIndex === faq.id
                          ? "border-[#29f67a] bg-[#29f67a]/5"
                          : "border-gray-800 bg-black hover:border-gray-700"
                      }`}
                    >
                      <div className="p-5">
                        <div className="flex items-start justify-between gap-4">
                          <h3 className="text-base font-medium text-white pr-4">
                            {faq.question}
                          </h3>
                          <motion.div
                            animate={{ rotate: activeIndex === faq.id ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="flex-shrink-0 mt-1"
                          >
                            <ChevronDown
                              className={`h-5 w-5 ${
                                activeIndex === faq.id ? "text-[#29f67a]" : "text-gray-500"
                              }`}
                            />
                          </motion.div>
                        </div>

                        <AnimatePresence>
                          {activeIndex === faq.id && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                              className="overflow-hidden"
                            >
                              <p className="pt-4 text-gray-400 text-sm leading-relaxed border-t border-gray-800 mt-3">
                                {faq.answer}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </motion.div>
                ))}
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              {filteredFaqs
                .filter((_, index) => index % 2 === 1)
                .map((faq) => (
                  <motion.div
                    key={faq.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: faq.id * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <div
                      onClick={() => toggleFAQ(faq.id)}
                      className={`border rounded-xl cursor-pointer transition-all ${
                        activeIndex === faq.id
                          ? "border-[#29f67a] bg-[#29f67a]/5"
                          : "border-gray-800 bg-black hover:border-gray-700"
                      }`}
                    >
                      <div className="p-5">
                        <div className="flex items-start justify-between gap-4">
                          <h3 className="text-base font-medium text-white pr-4">
                            {faq.question}
                          </h3>
                          <motion.div
                            animate={{ rotate: activeIndex === faq.id ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="flex-shrink-0 mt-1"
                          >
                            <ChevronDown
                              className={`h-5 w-5 ${
                                activeIndex === faq.id ? "text-[#29f67a]" : "text-gray-500"
                              }`}
                            />
                          </motion.div>
                        </div>

                        <AnimatePresence>
                          {activeIndex === faq.id && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                              className="overflow-hidden"
                            >
                              <p className="pt-4 text-gray-400 text-sm leading-relaxed border-t border-gray-800 mt-3">
                                {faq.answer}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </motion.div>
                ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="w-16 h-16 rounded-full bg-gray-900 flex items-center justify-center mx-auto mb-4">
              <HelpCircle className="h-8 w-8 text-gray-600" />
            </div>
            <p className="text-gray-500 text-lg">
              No results found. Try a different search term.
            </p>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center pt-8 border-t border-gray-800"
        >
          <h3 className="text-xl font-semibold text-white mb-3">
            Still have questions?
          </h3>
          <p className="text-gray-500 mb-6">
            We're here to help you with any additional queries
          </p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate("/contact")}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#29f67a] text-black font-medium rounded-lg hover:bg-[#29f67a]/90 transition-all"
          >
            <FiMessageSquare className="w-4 h-4" />
            <span>Contact Us</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection;