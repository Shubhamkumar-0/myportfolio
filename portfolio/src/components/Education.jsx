import { motion } from "framer-motion"
import { FiBookOpen, FiStar, FiAward } from "react-icons/fi"

function Education({ darkMode }) {
  const education = [
    {
      id: 1,
      title: "Bachelor of Technology",
      institution: "Lovely Professional University",
      specialization: "Computer Science and Engineering",
      period: "Aug' 23 - Present",
      location: "Phagwara, Punjab",
      score: "CGPA: 6.6",
      status: "Currently Pursuing",
      description: "Honing my technical skills in full-stack development and system architectural patterns.",
      icon: <FiStar className="text-2xl" />
    },
    {
      id: 2,
      title: "Intermediate (12th)",
      institution: "Syed Nehal Ahsan college",
      period: "Apr' 20 - Mar' 22",
      location: "Barh, Patna",
      score: "Percentage: 66.7%",
      status: "Completed",
      description: "Focused on building a strong foundation in core sciences and analytical thinking.",
      icon: <FiBookOpen className="text-2xl" />
    },
    {
      id: 3,
      title: "High School (10th)",
      institution: "High School Harnaut",
      period: "Apr' 19 - Mar' 20",
      location: "Harnaut, Nalanda",
      score: "Percentage: 78%",
      status: "Completed",
      description: "Started my academic journey with a focus on mathematical and logical reasoning.",
      icon: <FiAward className="text-2xl" />
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const item = {
    hidden: { opacity: 0, x: -50 },
    show: { 
      opacity: 1, 
      x: 0, 
      transition: { 
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      } 
    }
  }

  return (
    <section id="education" className={`relative py-32 overflow-hidden transition-colors duration-700 ${darkMode ? "bg-black" : "bg-gray-50"}`}>
      
      {/* Visual Journey Line Decoration */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent"></div>
      <div className={`absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[150px] pointer-events-none opacity-20 ${darkMode ? "bg-red-600/10" : "bg-red-400/5"}`}></div>

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
                The Journey
              </span>
            </div>
            <h2 className={`text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] ${darkMode ? "text-white" : "text-gray-900"}`}>
              MY ACADEMIC <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-pink-500 to-red-400">
                EVOLUTION.
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
            A timeline of milestones documenting the transition from foundational learning to specialized engineering.
          </motion.p>
        </div>

        {/* Journey Timeline */}
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Central Vertical Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-red-600 via-red-500/20 to-transparent md:-translate-x-1/2 opacity-30"></div>

          <div className="space-y-24">
            {education.map((edu, index) => (
              <motion.div 
                key={edu.id} 
                variants={item}
                className="relative flex flex-col md:flex-row items-start md:items-center"
              >
                {/* Year Marker */}
                <div className={`absolute left-6 md:left-1/2 w-12 h-12 rounded-2xl ${darkMode ? "bg-gray-900 border-white/10" : "bg-white border-gray-200"} border-2 flex items-center justify-center -translate-x-1/2 z-20 shadow-xl group hover:border-red-600 transition-colors`}>
                  <div className={`text-sm font-bold ${darkMode ? "text-white" : "text-gray-900"}`}>
                    {index + 1}
                  </div>
                </div>

                {/* Left/Right Card Logic */}
                <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${index % 2 === 0 ? "md:pr-24 md:text-right" : "md:ml-auto md:pl-24"}`}>
                  <div className={`p-10 rounded-[3rem] border transition-all duration-700 hover:shadow-2xl hover:shadow-red-500/10 ${
                    darkMode ? "bg-gray-900/40 border-white/5 hover:bg-gray-900/60" : "bg-white border-gray-100 hover:bg-white"
                  }`}>
                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-6 shadow-lg ${
                      darkMode ? "bg-red-600 text-white" : "bg-red-600 text-white"
                    }`}>
                      {edu.icon}
                    </div>
                    
                    <span className={`block text-xs font-mono font-bold uppercase tracking-[0.2em] mb-3 ${
                      darkMode ? "text-red-500" : "text-red-600"
                    }`}>
                      {edu.period}
                    </span>
                    
                    <h3 className={`text-2xl font-black mb-2 tracking-tight ${darkMode ? "text-white" : "text-gray-900"}`}>
                      {edu.title}
                    </h3>
                    
                    <h4 className={`text-lg font-medium mb-3 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                      {edu.institution}
                    </h4>
                    
                    <div className={`flex items-center gap-2 text-xs font-mono font-bold transition-opacity mb-6 ${
                      darkMode ? "text-gray-500" : "text-gray-400"
                    }`}>
                      <span>{edu.location}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-red-600/50"></span>
                      <span className="text-red-500">{edu.score}</span>
                    </div>
                    
                    <div className={`h-[2px] w-12 bg-red-600/30 mb-6 ${index % 2 === 0 ? "md:ml-auto" : ""}`}></div>
                    
                    <p className={`text-sm font-light leading-relaxed ${darkMode ? "text-gray-500" : "text-gray-500"}`}>
                      {edu.description}
                    </p>
                    
                    <div className={`mt-8 flex items-center gap-3 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                      <span className={`w-2 h-2 rounded-full ${edu.status === "Currently Pursuing" ? "bg-green-500 animate-pulse" : "bg-red-600"}`}></span>
                      <span className={`text-[10px] font-mono font-bold uppercase tracking-[0.3em] ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                        {edu.status}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Education
