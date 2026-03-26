import { useState } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Education from "./components/Education"
import Projects from "./components/Projects"
import Training from "./components/Training"
import Achievements from "./components/Achievements"
import Contact from "./components/Contact"
import Skills from "./components/Skills"
import CustomCursor from "./components/CustomCursor"
import Certification from "./components/certification"
import Footer from "./components/Footer"

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`selection:bg-red-400 selection:text-white transition-colors duration-500 ${darkMode ? "dark bg-gray-950 text-white" : "bg-white text-gray-900"}`}>
      <CustomCursor darkMode={darkMode} />
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Hero darkMode={darkMode} />
        <About darkMode={darkMode} />
        <Skills darkMode={darkMode} />
        <Projects darkMode={darkMode} />
        <Training darkMode={darkMode} />
        <Certification darkMode={darkMode} />
        <Achievements darkMode={darkMode} />
        <Education darkMode={darkMode} />
        <Contact darkMode={darkMode} />
      </main>
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;