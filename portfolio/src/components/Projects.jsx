import { motion } from "framer-motion"
import { FiExternalLink, FiArrowRight, FiGithub } from "react-icons/fi"
import ruralImage from "../assets/project-image/rural-image.png"
import skillIndiaImage from "../assets/project-image/skill-india.png"
import financeTrackerImage from "../assets/project-image/finance-tracker.png"

function Projects({ darkMode }) {
  const projects = [
    {
      title: "E-Platform in Rural Areas",
      description: "A full-stack messaging application with instant delivery and secure authentication.",
      tech: ["MERN", "React", "Node.js", "Express", "MongoDB"],
      image: ruralImage,
      link: "https://class-project-swart.vercel.app/",
      github: "https://github.com/Shubhamkumar-0/Class-project-.git"
    },
    {
      title: "Skill India Website",
      description: "This is a project aimed at providing skill development resources and opportunities.",
      tech: ["HTML", "Tailwind CSS", "JavaScript", "PHP"],
      image: skillIndiaImage,
      link: "https://anuragag26.github.io/Skill-India-Website-demo/",
      github: "https://github.com/Shubhamkumar-0/shopingcart.git"
    },
    {
      title: "Personal Finance Tracker",
      description: "A personal finance management application with an integrated AI-powered chatbot assistant.",
      tech: ["HTML", "CSS", "JavaScript", "AI"],
      image: financeTrackerImage,
      link: "https://shubhamkumar-0.github.io/AI-Project/",
      github: "https://github.com/Shubhamkumar-0/AI-Project.git"
    }
  ]

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
    hidden: { opacity: 0, y: 50 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }

  return (
    <section id="projects" className={`relative py-32 overflow-hidden transition-colors duration-700 ${darkMode ? "bg-black" : "bg-gray-50"}`}>
      
      {/* Premium Decorative Background Elements */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent"></div>
      <div className={`absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none opacity-20 ${darkMode ? "bg-red-600/30" : "bg-red-400/20"}`}></div>
      <div className={`absolute -bottom-24 left-0 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none opacity-20 ${darkMode ? "bg-blue-600/20" : "bg-blue-400/10"}`}></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Modern Section Header */}
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
                Selected Works
              </span>
            </div>
            <h2 className={`text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] ${darkMode ? "text-white" : "text-gray-900"}`}>
              CRAFTING <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-pink-500 to-red-400">
                DIGITAL STORIES.
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
            A collection of projects where design meets functionality to create impactful user experiences.
          </motion.p>
        </div>

        {/* Dynamic Project Grid */}
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              variants={item}
              className="group"
            >
              <div className={`relative h-[550px] overflow-hidden rounded-[3rem] transition-all duration-700 ${
                darkMode ? "bg-gray-900/40 border-gray-800" : "bg-white border-gray-100"
              } border shadow-xl hover:shadow-2xl hover:shadow-red-500/10`}>
                
                {/* Image Section */}
                <div className="h-[60%] overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700"></div>
                  
                  {/* Floating Tech Tags */}
                  <div className="absolute top-6 left-6 flex flex-wrap gap-2">
                    {project.tech.slice(0, 2).map((tag, t) => (
                      <span key={t} className="text-[10px] font-bold text-white uppercase tracking-widest bg-black/40 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Quick Action Overlay */}
                  <div className="absolute top-6 right-6 flex flex-col gap-3 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:bg-red-600 transition-all duration-300"
                    >
                      <FiExternalLink size={18} />
                    </a>
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:bg-black transition-all duration-300"
                      >
                        <FiGithub size={18} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-10 flex flex-col h-[40%] justify-between">
                  <div>
                    <h3 className={`text-2xl font-black mb-3 tracking-tight ${darkMode ? "text-white" : "text-gray-900"}`}>
                      {project.title}
                    </h3>
                    <p className={`text-sm font-light leading-relaxed line-clamp-2 ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                      {project.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-500/10">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.slice(2).map((tag, t) => (
                        <span key={t} className={`text-[10px] font-mono font-bold ${darkMode ? "text-red-500/80" : "text-red-600/80 uppercase tracking-widest"}`}>
                          #{tag.toLowerCase()}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-4">
                      {project.github && (
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className={`text-xl transition-colors ${darkMode ? "text-gray-500 hover:text-white" : "text-gray-400 hover:text-gray-900"}`}
                        >
                          <FiGithub />
                        </a>
                      )}
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 font-black text-xs uppercase tracking-widest group/link transition-colors ${
                          darkMode ? "text-white hover:text-red-500" : "text-gray-900 hover:text-red-600"
                        }`}
                      >
                        Case Study
                        <FiArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer Link */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-24 text-center"
        >
          <a href="#" className={`inline-flex items-center gap-4 text-sm font-mono font-bold tracking-[0.2em] uppercase transition-all ${
            darkMode ? "text-gray-500 hover:text-white" : "text-gray-400 hover:text-gray-900"
          }`}>
            Explore More Archive
            <span className="w-12 h-px bg-current opacity-30"></span>
            <span className="text-xl">↗</span>
          </a>
        </motion.div>

      </div>
    </section>
  )
}

export default Projects