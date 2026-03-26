import { motion } from "framer-motion";
import { FaGraduationCap, FaCode, FaLaptopCode, FaBrain } from "react-icons/fa";
import image from "../assets/image.jpeg";

function About({ darkMode }) {
  const coreValues = [
    {
      id: "01",
      icon: <FaGraduationCap className="text-5xl text-red-600 mb-6" />,
      title: "Computer Science",
      description: "Pursuing my B.Tech at LPU with a strong academic foundation and a constant thirst for foundational knowledge.",
    },
    {
      id: "02",
      icon: <FaCode className="text-5xl text-gray-100 mb-6" />,
      title: "Web Development",
      description: "Crafting beautiful, highly responsive frontend experiences utilizing modern frameworks and clean architecture.",
    },
    {
      id: "03",
      icon: <FaBrain className="text-5xl text-red-500 mb-6" />,
      title: "DSA Enthusiast",
      description: "Continuously sharpening my analytical logic by solving complex algorithmic puzzles and brain teasers.",
    },
    {
      id: "04",
      icon: <FaLaptopCode className="text-5xl text-gray-300 mb-6" />,
      title: "Problem Solver",
      description: "Approaching development challenges creatively and methodically to deliver efficient, optimized solutions.",
    },
  ];

  return (
    <section id="about" className={`scroll-mt-20 py-32 relative overflow-hidden transition-colors duration-500 ${darkMode ? "bg-gray-950 text-white" : "bg-white text-gray-900"}`}>
      
      {/* Aesthetic Background Splashes */}
      <div className={`absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none ${darkMode ? "bg-red-900/10" : "bg-gradient-to-bl from-red-600/5 via-transparent to-transparent"}`}></div>
      <div className={`absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none ${darkMode ? "bg-gray-800/20" : "bg-gradient-to-tr from-gray-200 via-transparent to-transparent"}`}></div>

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
          <span className={`text-5xl md:text-7xl font-mono font-black tracking-tighter leading-none ${darkMode ? "text-red-500" : "text-red-600"}`}>01</span>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          {/* Left Side: Large Portrait Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="w-full lg:w-[45%] sticky top-32"
          >
            <div className="relative group">
              <div className={`absolute -inset-4 rounded-[3rem] blur-2xl opacity-50 group-hover:opacity-80 transition duration-1000 ${darkMode ? "bg-red-900/20" : "bg-gradient-to-r from-red-600/20 to-gray-100/50"}`}></div>
              <img 
                src={image} 
                alt="Shubham Kumar" 
                className={`relative w-full aspect-[3/4] md:aspect-[4/5] object-cover rounded-[3rem] border shadow-2xl transition-colors duration-500 ${
                  darkMode ? "border-gray-800 shadow-black/50" : "border-gray-100 shadow-red-50/50"
                }`}
              />
              {/* Optional Aesthetic Tag */}
              <div className={`absolute -bottom-6 -right-6 p-6 rounded-2xl shadow-xl border hidden md:block ${
                darkMode ? "bg-gray-950 border-gray-800" : "bg-white border-gray-50"
              }`}>
                <span className="text-sm font-mono font-bold text-red-600 block uppercase tracking-widest leading-none mb-1">Status</span>
                <span className={`text-xl font-bold leading-none ${darkMode ? "text-white" : "text-gray-900"}`}>Available for Work</span>
              </div>
            </div>
          </motion.div>

          {/* Right Side: All Details (Bio + Grid) */}
          <div className="w-full lg:w-[55%]">
            
            {/* Bio Section */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <h2 className={`text-sm md:text-lg font-mono tracking-[0.3em] uppercase mb-6 ${darkMode ? "text-red-500" : "text-red-600"}`}>
                Behind the Code
              </h2>
              
              <h3 className={`text-5xl md:text-6xl font-black mb-10 tracking-tighter leading-[1.1] ${darkMode ? "text-white" : "text-gray-900"}`}>
                Driven by curiosity. <br />
                <span className={`font-serif italic font-medium text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 ${darkMode ? "to-white" : "to-gray-800"}`}>Defined by logic.</span>
              </h3>
              
              <div className="flex flex-col gap-8">
                <p className={`text-xl font-light leading-relaxed ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                  Hello! I'm <span className={`${darkMode ? "text-white" : "text-gray-900"} font-medium`}>Shubham Kumar</span>, 3rd year Computer Science undergraduate student at <span className="text-red-600 font-bold">Lovely Professional University</span>. 
                </p>
                <p className={`text-lg font-light leading-relaxed ${darkMode ? "text-gray-500" : "text-gray-500"}`}>
                  My digital journey began with a deep curiosity for how things work behind the screen, evolving into a profound passion for software engineering. Whether I'm optimizing a complex DSA algorithm or hunting down hidden bugs, I believe writing code is about crafting experiences that leave a lasting impact.
                </p>
              </div>
            </motion.div>

            {/* Integrated Compact Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10">
              {coreValues.map((value, index) => (
                <motion.div
                  key={value.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative group p-8 rounded-3xl border transition-all duration-500 hover:shadow-xl ${
                    darkMode 
                      ? "bg-gray-900/50 border-gray-800 hover:border-red-900 hover:shadow-red-900/20" 
                      : "bg-gray-50 border-gray-100 hover:border-red-100 hover:shadow-red-50"
                  }`}
                >
                  <span className={`text-3xl font-serif italic absolute top-6 right-8 transition-colors ${darkMode ? "text-gray-800 group-hover:text-red-900" : "text-gray-200 group-hover:text-red-100"}`}>
                    {value.id}
                  </span>

                  <div className="relative z-10">
                    <div className={`mb-4 group-hover:scale-110 transition-all duration-300 inline-block font-bold ${darkMode ? "text-gray-600 group-hover:text-red-500" : "text-gray-400 group-hover:text-red-600"}`}>
                      {value.icon}
                    </div>
                    
                    <h4 className={`text-xl font-bold mb-3 transition-colors tracking-tight uppercase ${darkMode ? "text-white group-hover:text-red-500" : "text-gray-900 group-hover:text-red-600"}`}>
                      {value.title}
                    </h4>
                    
                    <p className={`text-sm font-light leading-relaxed ${darkMode ? "text-gray-500" : "text-gray-500"}`}>
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default About;