import { FaGithub, FaLinkedin } from "react-icons/fa"
import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import cv from "../assets/shubham-cv.pdf"

function Hero({ darkMode }) {

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
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <section id="home" className={`min-h-screen flex flex-col items-center justify-center px-6 pt-32 relative overflow-hidden select-none transition-colors duration-500 ${darkMode ? "bg-gray-950 text-white" : "bg-white text-gray-900"}`}>

      {/* Background Architectural Elements */}
      <div className={`absolute top-0 left-0 w-full h-full pointer-events-none -z-10 ${darkMode ? "opacity-[0.05]" : "opacity-[0.03]"}`}>
        <div className={`absolute inset-0 ${darkMode ? "bg-[radial-gradient(circle_at_2px_2px,rgba(255,255,255,0.15)_1px,transparent_0)]" : "bg-[radial-gradient(circle_at_2px_2px,rgba(239,68,68,0.2)_1px,transparent_0)]"} bg-[size:40px_40px]`}></div>
      </div>
      <div className={`absolute top-1/4 -left-20 w-96 h-96 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse ${darkMode ? "bg-red-900/10" : "bg-red-100/30"}`}></div>
      <div className={`absolute bottom-1/4 -right-20 w-96 h-96 rounded-full blur-[120px] pointer-events-none -z-10 ${darkMode ? "bg-gray-800/10" : "bg-gray-100/50"}`}></div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10"
      >
        {/* Artistic Pre-title */}
        <motion.div
          variants={item}
          className="flex items-center gap-4 mb-4"
        >
          <div className="w-12 h-[1px] bg-red-600"></div>
          <span className={`text-sm font-mono font-bold uppercase tracking-[0.5em] leading-none ${darkMode ? "text-red-500" : "text-red-600"}`}>
            Creative Portfolio // 2026
          </span>
          <div className="w-12 h-[1px] bg-red-600"></div>
        </motion.div>

        {/* Massive Main Headline */}
        <motion.h1
          variants={item}
          className={`text-[60px] sm:text-7xl md:text-9xl lg:text-[160px] font-black mb-10 tracking-[-0.04em] leading-[0.85] flex flex-col ${darkMode ? "text-white" : "text-gray-900"}`}
        >
          <span className="inline-block">SHUBHAM</span>
          <span className={`font-serif italic font-medium text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-gray-800 -mt-2 md:-mt-6 lg:-mt-10 ${darkMode ? "to-white" : "to-gray-800"}`}>KUMAR<span className="text-red-600">.</span></span>
        </motion.h1>

        {/* Dynamic Typography Grid */}
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20 mb-16">
          <motion.div
            variants={item}
            className="text-left max-w-[280px]"
          >
            <p className={`text-xs font-mono font-bold uppercase tracking-widest leading-relaxed ${darkMode ? "text-gray-500" : "text-gray-400"}`}>
              Current Role: <br />
              <span className={`border-b ${darkMode ? "text-white border-red-900" : "text-gray-900 border-red-200"}`}>Full Stack Developer</span>
            </p>
          </motion.div>

          <motion.div
            variants={item}
            className={`text-3xl md:text-5xl font-mono font-black uppercase tracking-tighter ${darkMode ? "text-red-500" : "text-red-600"}`}
          >
            <TypeAnimation
              sequence={[
                "Algorithms",
                2000,
                "Scalability",
                2000,
                "Experience",
                2000,
                "Precision",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </motion.div>

          <motion.div
            variants={item}
            className="text-right max-w-[280px] hidden md:block"
          >
            <p className={`text-xs font-mono font-bold uppercase tracking-widest leading-relaxed ${darkMode ? "text-gray-500" : "text-gray-400"}`}>
              Based In: <br />
              <span className={`border-b ${darkMode ? "text-white border-red-900" : "text-gray-900 border-red-200"}`}>Punjab, India</span>
            </p>
          </motion.div>
        </div>

        {/* Call to Action - Architectural Buttons */}
        <motion.div
          variants={item}
          className="flex flex-wrap items-center justify-center gap-8 mb-20"
        >
          <a href="#projects" className="group relative">
            <div className={`absolute -inset-1 bg-red-600 rounded-lg blur opacity-10 group-hover:opacity-30 transition duration-500`}></div>
            <div className={`relative border px-14 py-6 rounded-lg text-lg font-black uppercase tracking-[0.2em] transition-all duration-300 ${darkMode
                ? "bg-gray-900 border-gray-800 text-white group-hover:bg-red-600 group-hover:border-red-600"
                : "bg-white border-gray-100 text-gray-900 group-hover:bg-red-600 group-hover:text-white"
              }`}>
              Explore Projects
            </div>
          </a>

          <a href="#contact" className="group py-4 px-2 overflow-hidden relative">
            <span className={`text-lg font-bold uppercase tracking-widest transition-colors ${darkMode ? "text-gray-400 group-hover:text-red-500" : "text-gray-500 group-hover:text-red-600"}`}>
              Start a Conversation
            </span>
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-red-600 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
          </a>

          <a href={cv} download className={`group relative ml-4`}>
            <div className={`absolute -inset-1 bg-red-600 rounded-lg blur opacity-10 group-hover:opacity-30 transition duration-500`}></div>
            <div className={`relative border px-10 py-5 rounded-lg text-sm font-black uppercase tracking-[0.2em] transition-all duration-300 ${darkMode
                ? "bg-gray-900 border-gray-800 text-white group-hover:bg-red-600 group-hover:border-red-600"
                : "bg-white border-gray-100 text-gray-900 group-hover:bg-red-600 group-hover:text-white"
              }`}>
              Download CV
            </div>
          </a>
        </motion.div>

        {/* Decorative Vertical Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 hidden sm:flex"
        >
          <span className={`text-[10px] font-mono font-black uppercase tracking-[0.5em] [writing-mode:vertical-lr] ${darkMode ? "text-gray-600" : "text-gray-300"}`}>Scroll Down</span>
          <div className="w-[1px] h-20 bg-gradient-to-b from-red-600 to-transparent"></div>
        </motion.div>

      </motion.div>
    </section>
  )
}

export default Hero;