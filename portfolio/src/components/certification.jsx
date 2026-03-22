import { motion } from "framer-motion"
import { FiAward, FiExternalLink, FiSearch } from "react-icons/fi"
import computerNetworking from "../assets/certificates-image/computer-networking-google.png"
import javaNeocollab from "../assets/certificates-image/java-neocollab.png"
import operatingSystem from "../assets/certificates-image/operating-system-ibm.png"

function Certification({ darkMode }) {
  const certifications = [
    {
      id: 1,
      title: "Computer Networking",
      company: "GOOGLE",
      image: computerNetworking,
      link: "https://drive.google.com/file/d/1TgrRhTda1OOlZ89EIBP3HsdedAl22qNq/view?usp=drive_link",
      date: "2024"
    },
    {
      id: 2,
      title: "Java Programming",
      company: "NEOCOLLAB",
      image: javaNeocollab,
      link: "https://drive.google.com/file/d/1hqFi-Bkuuf27Zy5AF5AQLBiCJ3Aqdx8h/view?usp=drive_link",
      date: "2023"
    },
    {
      id: 3,
      title: "Operating Systems",
      company: "IBM",
      image: operatingSystem,
      link: "https://drive.google.com/file/d/14LERhjKNu8DC4dY2Nm-DYlHZOGjVypwl/view?usp=drive_link",
      date: "2023"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const item = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    show: { 
      opacity: 1, 
      scale: 1, 
      y: 0, 
      transition: { 
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      } 
    }
  };

  return (
    <section id="certification" className={`relative py-32 overflow-hidden transition-colors duration-700 ${darkMode ? "bg-black" : "bg-white"}`}>
      
      {/* Dynamic Background Elements */}
      <div className={`absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[150px] pointer-events-none opacity-20 ${darkMode ? "bg-red-600/20" : "bg-red-400/10"}`}></div>
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Header Consistent with Projects */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-px bg-red-600"></span>
              <span className={`text-sm font-mono font-bold tracking-[0.4em] uppercase ${darkMode ? "text-red-500" : "text-red-600"}`}>
                Milestones
              </span>
            </div>
            <h2 className={`text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] ${darkMode ? "text-white" : "text-gray-900"}`}>
              VALIDATED <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-pink-500 to-red-400">
                EXCELLENCE.
              </span>
            </h2>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className={`max-w-xs text-lg font-light leading-relaxed ${darkMode ? "text-gray-400" : "text-gray-500"}`}
          >
            A showcase of professional certifications and accolades earned through rigorous training and practice.
          </motion.p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {certifications.map((cert) => (
            <motion.div 
              key={cert.id} 
              variants={item} 
              className="group"
            >
              <div className={`relative h-[480px] rounded-[2.5rem] overflow-hidden border transition-all duration-700 ${
                darkMode 
                  ? "bg-gray-900/40 border-white/5 hover:bg-gray-900/60" 
                  : "bg-gray-50 border-gray-100 hover:bg-white"
              } hover:shadow-2xl hover:shadow-red-500/10`}>
                
                {/* Visual Header */}
                <div className="relative h-[45%] overflow-hidden">
                  <img 
                    src={cert.image} 
                    alt={cert.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[0.4] group-hover:grayscale-0"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${darkMode ? "from-gray-900" : "from-gray-50"} to-transparent`}></div>
                  
                  {/* Badge */}
                  <div className="absolute top-6 left-6 w-12 h-12 rounded-2xl bg-red-600/90 backdrop-blur-md flex items-center justify-center text-white shadow-lg">
                    <FiAward size={24} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 h-[55%] flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className={`text-[10px] font-mono font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full ${
                        darkMode ? "bg-red-500/10 text-red-400" : "bg-red-50 text-red-600"
                      }`}>
                        {cert.company}
                      </span>
                      <span className={`text-xs font-mono font-medium ${darkMode ? "text-gray-500" : "text-gray-400"}`}>
                        {cert.date}
                      </span>
                    </div>
                    <h4 className={`text-2xl font-black mb-4 tracking-tight leading-tight ${darkMode ? "text-white" : "text-gray-900"}`}>
                      {cert.title}
                    </h4>
                  </div>

                  <div className="flex items-center gap-4 mt-auto">
                    <a 
                      href={cert.link} 
                      className={`flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl font-bold text-sm transition-all duration-500 ${
                        darkMode 
                          ? "bg-white text-black hover:bg-red-600 hover:text-white" 
                          : "bg-gray-900 text-white hover:bg-red-600"
                      }`}
                    >
                      <FiSearch size={16} />
                      Verify Credential
                    </a>
                    <a 
                      href={cert.link}
                      className={`w-14 h-14 flex items-center justify-center rounded-2xl border transition-all duration-500 ${
                        darkMode 
                          ? "border-white/10 text-white hover:bg-white hover:text-black" 
                          : "border-gray-200 text-gray-900 hover:bg-gray-900 hover:text-white"
                      }`}
                    >
                      <FiExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

export default Certification

