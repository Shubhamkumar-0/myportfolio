import { motion } from "framer-motion"
import { FiTrendingUp, FiTarget, FiAward, FiActivity } from "react-icons/fi"
import { SiLeetcode } from "react-icons/si"

function Achievements({ darkMode }) {
  const stats = [
    { label: "Easy", value: 54, total: 933, color: "bg-emerald-500" },
    { label: "Med.", value: 36, total: 2029, color: "bg-amber-500" },
    { label: "Hard", value: 12, total: 916, color: "bg-rose-500" }
  ];

  const highlights = [
    { 
      title: "Global Ranking", 
      value: "1,447,781", 
      icon: <FiTarget />, 
      desc: "Top percentile in problem solving" 
    },
    { 
      title: "Active Streak", 
      value: "49 Days", 
      icon: <FiTrendingUp />, 
      desc: "Maximum consistent coding" 
    },
    { 
      title: "Yearly Submissions", 
      value: "240+", 
      icon: <FiActivity />, 
      desc: "High volume consistency" 
    },
    { 
      title: "Recent Badge", 
      value: "50 Days '26", 
      icon: <FiAward />, 
      desc: "Dedicated practice streak" 
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
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  }

  return (
    <section id="achievements" className={`relative py-32 overflow-hidden transition-colors duration-700 ${darkMode ? "bg-black" : "bg-white"}`}>
      
      {/* Background Decor */}
      <div className={`absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[150px] pointer-events-none opacity-10 ${darkMode ? "bg-amber-500/20" : "bg-amber-500/10"}`}></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-px bg-amber-500"></span>
              <span className={`text-sm font-mono font-bold tracking-[0.4em] uppercase ${darkMode ? "text-amber-500" : "text-amber-600"}`}>
                Performance
              </span>
            </div>
            <h2 className={`text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] ${darkMode ? "text-white" : "text-gray-900"}`}>
              TECHNICAL <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-400 to-amber-600">
                MILESTONES.
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
            A real-time snapshot of my algorithmic journey and consistent contribution to the coding community.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* LeetCode Main Card */}
          <motion.div 
            variants={item}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className={`lg:col-span-12 xl:col-span-7 rounded-[3rem] border p-12 relative overflow-hidden transition-all duration-700 ${
              darkMode ? "bg-gray-900/40 border-white/5 hover:bg-gray-900/60" : "bg-gray-50 border-gray-100 hover:bg-white"
            } hover:shadow-2xl hover:shadow-amber-500/10`}
          >
            <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
              
              {/* LeetCode Progress Circle */}
              <div className="relative w-48 h-48 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90">
                  <circle 
                    cx="96" cy="96" r="80" 
                    className={`${darkMode ? "stroke-gray-800" : "stroke-gray-200"} fill-none`}
                    strokeWidth="12"
                  />
                  <circle 
                    cx="96" cy="96" r="80" 
                    className="stroke-amber-500 fill-none"
                    strokeWidth="12"
                    strokeDasharray={`${(102/3878) * 502} 502`}
                    strokeLinecap="round"
                    style={{ transition: 'stroke-dasharray 2s ease-in-out' }}
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className={`text-4xl font-black ${darkMode ? "text-white" : "text-gray-900"}`}>102</span>
                  <span className="text-[10px] font-mono font-bold text-gray-500 uppercase tracking-widest">Solved</span>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="flex-1 w-full space-y-8">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-500">
                    <SiLeetcode size={28} />
                  </div>
                  <h4 className={`text-3xl font-black ${darkMode ? "text-white" : "text-gray-900"}`}>LeetCode Profile</h4>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {stats.map((stat, i) => (
                    <div key={i} className={`p-6 rounded-3xl border ${darkMode ? "bg-black/40 border-white/5" : "bg-white border-gray-100 shadow-sm"}`}>
                      <span className={`text-[10px] font-mono font-bold uppercase tracking-widest mb-3 block ${darkMode ? "text-gray-500" : "text-gray-400"}`}>
                        {stat.label}
                      </span>
                      <div className="flex items-baseline gap-2">
                        <span className={`text-2xl font-black ${darkMode ? "text-white" : "text-gray-900"}`}>{stat.value}</span>
                        <span className="text-[10px] text-gray-500 font-mono">/ {stat.total}</span>
                      </div>
                      <div className="mt-4 h-1.5 w-full bg-gray-200/20 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${(stat.value / stat.total) * 100}%` }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                          className={`h-full ${stat.color}`}
                        ></motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Background LeetCode Logo Decor */}
            <SiLeetcode className="absolute -bottom-10 -right-10 text-[20rem] opacity-[0.03] pointer-events-none" />
          </motion.div>

          {/* Highlights Grid */}
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:col-span-12 xl:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {highlights.map((h, i) => (
              <motion.div 
                key={i} 
                variants={item}
                className={`p-10 rounded-[2.5rem] border transition-all duration-500 flex flex-col justify-between ${
                  darkMode 
                    ? "bg-gray-950 border-white/5 hover:border-amber-500/50" 
                    : "bg-white border-gray-100 hover:border-amber-200 shadow-sm"
                } group cursor-default`}
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl transition-all duration-500 ${
                  darkMode ? "bg-amber-500/10 text-amber-500 group-hover:bg-amber-500 group-hover:text-white" : "bg-amber-50 text-amber-600 group-hover:bg-amber-600 group-hover:text-white"
                }`}>
                  {h.icon}
                </div>
                <div className="mt-12">
                  <h5 className={`text-[10px] font-mono font-bold uppercase tracking-[0.2em] mb-3 ${darkMode ? "text-gray-500" : "text-gray-400"}`}>
                    {h.title}
                  </h5>
                  <div className={`text-3xl font-black mb-2 tracking-tighter ${darkMode ? "text-white" : "text-gray-900"}`}>
                    {h.value}
                  </div>
                  <p className="text-[10px] font-mono text-amber-500/80 uppercase tracking-widest">{h.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  )
}

export default Achievements
