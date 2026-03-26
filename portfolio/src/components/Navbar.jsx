import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaSun, FaMoon } from "react-icons/fa";

function Navbar({ darkMode, toggleDarkMode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Training", href: "#training" },
    { name: "Certs.", href: "#certification" },
    { name: "Stats", href: "#achievements" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 px-2 lg:px-6 ${
        isScrolled ? "py-4 md:py-6" : "py-8 md:py-10"
      }`}
    >
      <div 
        className={`max-w-[1400px] mx-auto flex justify-between items-center transition-all duration-500 rounded-full px-4 md:px-6 lg:px-8 ${
          isScrolled 
            ? (darkMode ? "bg-gray-900/90 border-gray-800 shadow-2xl" : "bg-white/90 border-gray-100 shadow-xl shadow-red-100/10") 
            : "bg-transparent py-2 border-transparent"
        } backdrop-blur-2xl border`}
      >
        {/* Compact Logo */}
        <motion.a 
          href="#home" 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className={`text-lg lg:text-2xl font-black tracking-tighter transition-colors ${darkMode ? "text-white" : "text-gray-900"} whitespace-nowrap group shrink-0`}
        >
          Shubham <span className="text-red-600 font-serif italic font-medium">Kumar.</span>
        </motion.a>

        {/* Desktop Links - Ultra Compact */}
        <div className="hidden md:flex items-center gap-0.5 lg:gap-2 xl:gap-4">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className={`relative text-[10px] lg:text-[11px] xl:text-[13px] font-bold uppercase tracking-widest transition-colors group py-6 px-1.5 lg:px-3 ${
                darkMode ? "text-gray-400 hover:text-white" : "text-gray-400 hover:text-red-600"
              } whitespace-nowrap`}
            >
              {link.name}
              <span className="absolute bottom-4 left-0 w-0 h-[2px] bg-red-600 transition-all duration-300 group-hover:w-full"></span>
            </motion.a>
          ))}
        </div>

        {/* Theme Toggle Button */}
        <button 
          onClick={toggleDarkMode}
          className={`p-2 lg:p-3 rounded-full transition-all duration-300 hover:scale-110 shrink-0 ${
            darkMode ? "bg-gray-800 text-yellow-400 hover:bg-gray-700" : "bg-gray-100 text-gray-900 hover:bg-gray-200"
          }`}
        >
          {darkMode ? <FaSun size={16} /> : <FaMoon size={16} />}
        </button>

        {/* Mobile menu toggle button */}
        <div className="flex items-center gap-4 md:hidden">
          <button 
            onClick={toggleDarkMode}
            className={`p-2 rounded-full ${darkMode ? "text-yellow-400" : "text-gray-900"}`}
          >
            {darkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
          </button>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`${darkMode ? "text-white" : "text-gray-900"}`}
          >
            {mobileMenuOpen ? <HiX size={32} /> : <HiMenuAlt3 size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 mx-6"
          >
            <div className={`rounded-[2.5rem] shadow-2xl border p-10 flex flex-col gap-8 text-center ${
              darkMode ? "bg-gray-900 border-gray-800" : "bg-white border-gray-100"
            }`}>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-3xl font-black tracking-tighter transition-colors ${
                    darkMode ? "text-white hover:text-red-500" : "text-gray-900 hover:text-red-600"
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;