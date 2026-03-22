import { useState } from "react"
import { motion } from "framer-motion"
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa"

import portfolioImage from "../assets/image.jpeg"

function Contact({ darkMode }) {
  const contactInfo = [
    { icon: <FaEnvelope />, label: "Email", value: "shubhanmkumarhrt1@gmail.com", link: "mailto:shubhanmkumarhrt1@gmail.com" },
    { icon: <FaPhone />, label: "Phone", value: "+91 62053 92811", link: "tel:+916205392811" },
    { icon: <FaMapMarkerAlt />, label: "Location", value: "LPU, Punjab, India", link: "https://maps.app.goo.gl/YourLocation" }
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 }
  }

  const [status, setStatus] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("Sending...");

    const formData = new FormData(e.target);
    // Note: The user needs to replace 'YOUR_ACCESS_KEY_HERE' with a real key from web3forms.com
    formData.append("access_key", "c8f2b7a0-0000-0000-0000-000000000000"); 

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus("Message Sent!");
        e.target.reset();
      } else {
        setStatus("Error!");
      }
    } catch (error) {
      setStatus("Error!");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setStatus(""), 5000);
    }
  };

  return (
    <section id="contact" className={`scroll-mt-20 py-32 relative overflow-hidden transition-colors duration-500 ${darkMode ? "bg-gray-950 text-white" : "bg-white text-gray-900"}`}>
      
      {/* Background Graphic Elements */}
      <div className={`absolute top-0 left-0 w-96 h-96 rounded-full blur-[120px] pointer-events-none ${darkMode ? "bg-red-900/10" : "bg-red-100/30"}`}></div>
      <div className={`absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full blur-[150px] pointer-events-none ${darkMode ? "bg-gray-900" : "bg-gray-100"}`}></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">

        {/* Section Indicator */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex items-center gap-6 mb-12 lg:mb-20"
        >
          <div className="w-[40%] md:w-[60%] h-[3px] bg-red-600"></div>
          <span className={`text-5xl md:text-7xl font-mono font-black tracking-tighter leading-none ${darkMode ? "text-red-500" : "text-red-600"}`}>05</span>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          {/* Left Side: Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row items-start md:items-center gap-10 mb-10">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="relative shrink-0"
              >
                <div className="absolute inset-0 bg-red-600 rounded-full blur-[20px] opacity-40 animate-pulse"></div>
                <div className={`w-36 h-36 rounded-full border-4 ${darkMode ? "border-gray-800" : "border-gray-50"} overflow-hidden relative shadow-2xl`}>
                  <img src={portfolioImage} alt="Shubham Kumar" className="w-full h-full object-cover" />
                </div>
              </motion.div>
              
              <div>
                <h2 className={`text-sm md:text-lg font-mono tracking-[0.3em] uppercase mb-4 ${darkMode ? "text-red-500" : "text-red-600"}`}>
                  Let's Connect
                </h2>
                <h3 className={`text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] ${darkMode ? "text-white" : "text-gray-900"}`}>
                  START A <br />
                  <span className={`font-serif italic font-medium text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-gray-800`}>TALK.</span>
                </h3>
              </div>
            </div>

            <p className={`text-xl font-light leading-relaxed mb-12 max-w-lg ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
              Have a question, a project idea, or just want to say hi? I am always open to discussing new opportunities and creative collaborations.
            </p>

            <motion.div 
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-col gap-8"
            >
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  variants={item}
                  className={`flex items-center gap-6 group transition-all duration-300 p-6 rounded-3xl border ${
                    darkMode ? "bg-gray-900/50 border-gray-800 hover:border-red-900" : "bg-gray-50 border-gray-100 hover:border-red-100 shadow-sm"
                  }`}
                >
                  <div className={`p-5 rounded-2xl text-2xl transition-all duration-300 ${
                    darkMode ? "bg-gray-800 text-red-500 group-hover:bg-red-600 group-hover:text-white" : "bg-white text-red-600 group-hover:bg-red-600 group-hover:text-white shadow-md shadow-red-100"
                  }`}>
                    {info.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className={`text-xs font-mono font-bold uppercase tracking-widest leading-none mb-2 ${darkMode ? "text-gray-500" : "text-gray-400"}`}>
                      {info.label}
                    </span>
                    <span className={`text-xl md:text-2xl font-bold transition-colors ${darkMode ? "text-white group-hover:text-red-500" : "text-gray-900 group-hover:text-red-600"}`}>
                      {info.value}
                    </span>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side: High-End Minimalist UI */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className={`p-10 md:p-14 rounded-[3.5rem] border shadow-2xl transition-all duration-500 flex flex-col justify-center items-center text-center ${
              darkMode ? "bg-gray-900 border-gray-800 shadow-black/80" : "bg-white border-gray-100 shadow-gray-200/50"
            }`}
          >
            <div className={`w-24 h-24 rounded-full flex items-center justify-center mb-8 ${darkMode ? "bg-red-600/10 text-red-500" : "bg-red-50 text-red-600"}`}>
              <FaEnvelope size={48} />
            </div>

            <h4 className={`text-4xl font-black mb-6 tracking-tighter ${darkMode ? "text-white" : "text-gray-900"}`}>
              Ready to <br /> <span className="font-serif italic font-medium text-red-600 underline">Collaborate?</span>
            </h4>

            <p className={`text-lg font-light leading-relaxed mb-10 max-w-xs ${darkMode ? "text-gray-500" : "text-gray-600"}`}>
              The most direct way to get in touch is via email. I’m currently accepting new projects and job opportunities.
            </p>

            <a 
              href="mailto:shubhanmkumarhrt1@gmail.com"
              className={`w-full py-8 text-2xl font-black uppercase tracking-[0.3em] rounded-3xl transition-all duration-500 shadow-xl flex items-center justify-center gap-4 ${
                darkMode ? "bg-red-600 text-white hover:bg-red-700" : "bg-gray-900 text-white hover:bg-red-600"
              }`}
            >
              SEND EMAIL
            </a>
          </motion.div>

        </div>

      </div>
    </section>
  )
}

export default Contact