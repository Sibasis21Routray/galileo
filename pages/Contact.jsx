import { motion } from "framer-motion";
import { FiSend, FiMapPin, FiMail, FiClock, FiArrowRight } from "react-icons/fi";
import ContactForm from "../src/components/contactSection/ContactForm";
import SEO from "../src/SEO";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: FiMail,
      title: "Email",
      value: "connect@galileonext.com",
      link: "mailto:connect@galileonext.com"
    },
    // {
    //   icon: FiMapPin,
    //   title: "Location",
    //   value: "Arena-3, 3rd Floor, STPI ELITE Building, Gothapatna, Khordha, Odisha - 751003"
    // },
    {
      icon: FiClock,
      title: "Response Time",
      value: "< 24 hours"
    }
  ];

  return (
    <section className="bg-black min-h-screen py-24 px-6 md:px-12 lg:px-24">
     

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-light text-white mb-4">
            Let's work together
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? We'd love to hear from you.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="border border-gray-800 rounded-xl p-6 md:p-8">
              <h2 className="text-white text-lg font-medium mb-6">Send a message</h2>
              <ContactForm />
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <div className="border border-gray-800 rounded-xl p-6 md:p-8">
              <img src="/contactImg.jpg" alt="Contact Us" className="w-full h-90 object-cover rounded-lg mb-6" />
              <h2 className="text-white text-lg font-medium mb-6">Contact info</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <info.icon className="text-gray-500 mt-1 text-lg" />
                    <div>
                      <p className="text-gray-500 text-sm mb-1">{info.title}</p>
                      {info.link ? (
                        <a 
                          href={info.link} 
                          className="text-white hover:text-[#29f67a] transition-colors text-sm"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-white text-sm">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;