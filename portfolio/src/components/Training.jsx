import { motion } from "framer-motion"
import { FiMonitor, FiCheckCircle, FiExternalLink, FiCode } from "react-icons/fi"
import javaBootcamp from "../assets/certificates-image/java-bootcamp.png"

function Training({ darkMode }) {
  const trainings = [
    {
      id: 1,
      title: "Placement Ace: Java Bootcamp",
      subtitle: "(LeetCode - Codeforces Edition)",
      organization: "Centre for Professional Enhancement, LPU",
      period: "10 June 2025 - 11 July 2025",
      grade: "Grade: A",
      image: javaBootcamp,
      certificateLink: "https://drive.google.com/file/d/1uhovTJU5QoJJuI2_IUZ1yiT0KycIlzf2/view?usp=drive_link",
      description: "Intensive training focused on competitive programming, data structures, and algorithmic optimization for high-level technical interviews."
    },
    {
      id: 2,
      title: "Shopping Cart System",
      subtitle: "Java Terminal Application",
      organization: "Self-Directed Development Project",
      period: "July 2025",
      grade: "OOP & DSA Focus",
      icon: <FiMonitor size={40} className="text-red-500" />,
      githubLink: "https://github.com/Shubhamkumar-0/shopingcart.git",
      description: "A robust console-based system demonstrating advanced concepts of Linked Lists, Arrays, and File I/O. Features includes dynamic cart management and persistent data storage in text format."
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const item = {
    hidden: { opacity: 0, scale: 0.95 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } }
  }

  return (
    <section id="training" className={`relative py-32 overflow-hidden transition-colors duration-700 ${darkMode ? "bg-black" : "bg-white"}`}>
      
      {/* Aesthetic Background Elements */}
      <div className={`absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[150px] pointer-events-none opacity-10 ${darkMode ? "bg-red-600/30" : "bg-red-400/20"}`}></div>
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">

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
                Professional Upskilling
              </span>
            </div>
            <h2 className={`text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] ${darkMode ? "text-white" : "text-gray-900"}`}>
              PRACTICAL <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-pink-500 to-red-400">
                TRAINING.
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
            Focused skill development through intensive bootcamps and hands-on laboratory projects.
          </motion.p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {trainings.map((train) => (
            <motion.div 
              key={train.id} 
              variants={item}
              className="group relative"
            >
              <div className={`h-full rounded-[3.5rem] border overflow-hidden p-8 flex flex-col md:flex-row gap-10 transition-all duration-700 ${
                darkMode ? "bg-gray-950/50 border-white/5 hover:bg-gray-900/80" : "bg-gray-50 border-gray-100 hover:bg-white shadow-sm"
              } hover:shadow-2xl hover:shadow-red-500/10`}>
                
                {/* Visual Section */}
                <div className={`w-full md:w-[40%] aspect-square rounded-[2.5rem] overflow-hidden relative shadow-inner ${
                  darkMode ? "bg-black" : "bg-white"
                } flex items-center justify-center`}>
                  {train.image ? (
                    <img 
                      src={train.image} 
                      alt={train.title} 
                      className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-1000"
                    />
                  ) : (
                    <div className="flex flex-col items-center gap-4">
                      {train.icon}
                      <FiCode size={24} className="text-gray-500 animate-pulse" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Content Section */}
                <div className="flex-1 flex flex-col justify-between py-2">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className={`text-[10px] font-mono font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full ${
                        darkMode ? "bg-red-500/10 text-red-400" : "bg-red-50 text-red-600"
                      }`}>
                        {train.grade}
                      </span>
                    </div>
                    
                    <h3 className={`text-2xl font-black mb-1 tracking-tight leading-tight ${darkMode ? "text-white" : "text-gray-900"}`}>
                      {train.title}
                    </h3>
                    <p className={`text-xs font-bold uppercase tracking-widest mb-4 ${darkMode ? "text-gray-400" : "text-red-500"}`}>
                      {train.subtitle}
                    </p>
                    
                    <h4 className={`text-sm font-medium mb-6 ${darkMode ? "text-gray-500" : "text-gray-600"}`}>
                      {train.organization}
                    </h4>

                    <p className={`text-xs font-light leading-relaxed mb-8 ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                      {train.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-auto">
                    <span className={`text-[10px] font-mono font-bold ${darkMode ? "text-gray-600" : "text-gray-400"}`}>
                      {train.period}
                    </span>
                    
                    {train.certificateLink ? (
                      <a 
                        href={train.certificateLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 font-black text-[10px] uppercase tracking-widest group/btn ${
                          darkMode ? "text-white hover:text-red-500" : "text-gray-900 hover:text-red-600"
                        }`}
                      >
                        View Credential
                        <FiExternalLink className="group-hover/btn:scale-125 transition-transform" />
                      </a>
                    ) : train.githubLink && (
                      <a 
                        href={train.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 font-black text-[10px] uppercase tracking-widest group/btn ${
                          darkMode ? "text-white hover:text-red-500" : "text-gray-900 hover:text-red-600"
                        }`}
                      >
                        View Repository
                        <FiExternalLink className="group-hover/btn:scale-125 transition-transform" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Dynamic Skills Badge for Training */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-20 flex flex-wrap justify-center gap-6"
        >
          {['Problem Solving', 'Unit Testing', 'Software Lifecycle', 'Algorithmic Logic'].map((skill, i) => (
            <div key={i} className="flex items-center gap-2">
              <FiCheckCircle className="text-red-600" />
              <span className={`text-xs font-mono font-bold tracking-widest uppercase ${darkMode ? "text-gray-500" : "text-gray-400"}`}>
                {skill}
              </span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

export default Training
