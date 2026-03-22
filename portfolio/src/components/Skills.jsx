import { motion } from "framer-motion"

function Skills({ darkMode }) {
  const skills = [
    { name: "Programming Languages", icon: "💻", level: "Core", tech: ["C++", "Python", "Java", "JavaScript"] },
    { name: "Frontend Development", icon: "🌐", level: "Expert", tech: ["HTML5", "CSS3", "React", "Next.js", "Tailwind"] },
    { name: "Backend Development", icon: "⚙️", level: "Advanced", tech: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"] },
    { name: "Database Management", icon: "📁", level: "Specialist", tech: ["MySQL", "MongoDB"] },
    { name: "Tools & Platforms", icon: "🛠️", level: "Proficient", tech: ["Git", "GitHub", "Postman", "VS Code", "SQL", "Jupyter"] },
    { name: "Soft Skills", icon: "🤝", level: "Essential", tech: ["Problem-Solving", "Team Player", "Adaptability"] }
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
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    show: { opacity: 1, scale: 1, y: 0 }
  }

  return (
    <section id="skills" className={`scroll-mt-20 py-32 relative overflow-hidden transition-colors duration-500 ${darkMode ? "bg-gray-950 text-white" : "bg-white text-gray-900"}`}>
      
      {/* Aesthetic Decorations */}
      <div className={`absolute top-0 right-0 w-[800px] h-[800px] rounded-full blur-[150px] pointer-events-none ${darkMode ? "bg-red-900/5" : "bg-red-50/20"}`}></div>
      <div className={`absolute bottom-1/4 left-0 w-[600px] h-[600px] rounded-full blur-[150px] pointer-events-none ${darkMode ? "bg-gray-900" : "bg-gray-600/5"}`}></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">

        {/* Section Indicator */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex items-center justify-end gap-6 mb-12 lg:mb-16"
        >
          <span className={`text-5xl md:text-7xl font-mono font-black tracking-tighter leading-none ${darkMode ? "text-red-500" : "text-red-600"}`}>03</span>
          <div className="w-[60%] h-[3px] bg-red-600"></div>
        </motion.div>
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className={`text-left mb-20 md:pr-8 border-r-4 transition-colors ${darkMode ? "border-red-900" : "border-red-600"}`}
        >
          <h2 className={`text-sm md:text-lg font-mono tracking-[0.3em] uppercase mb-4 ${darkMode ? "text-red-500" : "text-red-600"}`}>
            Technological Stack
          </h2>
          <h3 className={`text-5xl md:text-8xl font-black tracking-tighter ${darkMode ? "text-white" : "text-gray-900"}`}>
            CORE <span className="font-serif italic font-medium text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-gray-800">SKILLS.</span>
          </h3>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          {skills.map((skill, index) => (
            <motion.div 
              key={index} 
              variants={item}
              className={`p-10 rounded-[2.5rem] border group transition-all duration-700 hover:-translate-y-4 hover:shadow-2xl ${
                darkMode 
                  ? "bg-gray-900/40 border-gray-800 hover:border-red-900 shadow-black/80 hover:shadow-red-900/20" 
                  : "bg-gray-50 border-gray-100 hover:border-red-100 shadow-red-100/10 hover:shadow-red-100/50"
              }`}
            >
              <div className="flex justify-between items-start mb-12">
                <span className="text-5xl group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 opacity-80 group-hover:opacity-100">
                  {skill.icon}
                </span>
                <span className={`text-[10px] font-mono font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border transition-colors ${
                  darkMode ? "text-red-500 border-red-900 bg-red-900/5" : "text-red-600 border-red-100 bg-red-50/50"
                }`}>
                  {skill.level}
                </span>
              </div>
              
              <h4 className={`text-3xl font-black mb-6 tracking-tighter uppercase transition-colors ${darkMode ? "text-white group-hover:text-red-500" : "text-gray-900 group-hover:text-red-600"}`}>
                {skill.name}
              </h4>
              
              <div className="flex flex-wrap gap-3">
                {skill.tech.map((t, i) => (
                  <span key={i} className={`text-xs font-mono font-bold tracking-widest px-4 py-2 transition-colors ${
                    darkMode ? "text-gray-400 group-hover:text-white" : "text-gray-500 group-hover:text-gray-900"
                  }`}>
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

export default Skills