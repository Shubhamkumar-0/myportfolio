import { motion } from "framer-motion"
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa"

function Footer({ darkMode }) {
  const socialLinks = [
    { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/shubham-kumar-692161217/" },
    { icon: <FaGithub />, url: "https://github.com/Shubhamkumar-0" },
    { icon: <FaInstagram />, url: "#" },
    { icon: <FaTwitter />, url: "#" }
  ]

  return (
    <footer className={`py-24 relative overflow-hidden transition-all duration-700 border-t ${
      darkMode 
        ? "bg-gradient-to-br from-black via-black to-red-950/20 border-white/5" 
        : "bg-gradient-to-br from-white via-gray-50 to-red-50 border-gray-100"
    }`}>
      
      {/* Dynamic Aesthetic Overlay */}
      <div className={`absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none select-none ${darkMode ? "invert" : ""}`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,rgba(239,68,68,0.2)_1px,transparent_0)] bg-[size:40px_40px]"></div>
      </div>

      <div className={`absolute -top-24 -left-24 w-[400px] h-[400px] rounded-full blur-[150px] pointer-events-none opacity-30 ${
        darkMode ? "bg-red-600/20" : "bg-red-200/40"
      }`}></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-20">
          
          <div className="text-center md:text-left">
            <h4 className={`text-4xl font-black mb-4 tracking-tighter ${darkMode ? "text-white" : "text-gray-900"}`}>
              Let’s build something <span className="font-serif italic font-medium text-red-600">Legendary.</span>
            </h4>
            <p className={`text-lg font-light ${darkMode ? "text-gray-500" : "text-gray-500"}`}>
              Turning complex logic into human-centric experiences.
            </p>
          </div>

          <div className="flex gap-10">
            {socialLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.url} 
                target="_blank" 
                rel="noreferrer"
                className={`text-3xl transition-all duration-300 hover:scale-125 ${
                  darkMode ? "text-gray-600 hover:text-red-500" : "text-gray-300 hover:text-red-600"
                }`}
              >
                {link.icon}
              </a>
            ))}
          </div>

        </div>

        {/* Divider Line */}
        <div className={`w-full h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent mb-12`}></div>

        <div className={`flex flex-col md:flex-row justify-between items-center transition-colors ${
          darkMode ? "text-white" : "text-black"
        }`}>
          <p className="text-xs font-mono font-bold uppercase tracking-widest opacity-80">
            © 2026 Shubham Kumar. ALL RIGHTS RESERVED.
          </p>
          
          <div className="flex gap-8 mt-6 md:mt-0">
            <a href="#home" className={`text-xs font-mono font-bold uppercase tracking-[0.3em] hover:text-red-600 transition-colors ${darkMode ? "text-gray-600" : "text-gray-400"}`}>
              BACK TO TOP
            </a>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer
