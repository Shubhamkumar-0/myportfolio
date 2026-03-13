// import { FaGithub, FaLinkedin } from "react-icons/fa"
// import portfolioImage from "../assets/portfolio-image.jpeg"
// import Hero from "./Hero"
// import About from "./About"
// import Projects from "./Projects"
// import Contact from "./Contact"
// import Skills from "./Skills"





function Navbar() {
  return (
    <nav className="fixed w-full bg-black text-white shadow-md z-50">

      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">

        <h1 className="text-xl font-bold text-blue-400">
          Shubham.dev
        </h1>

        <ul className="flex gap-6 text-sm">

          <li><a href="#home" className="hover:text-blue-400 scroll-mt-20">Home</a></li>
          <li><a href="#about" className="hover:text-blue-400 scroll-mt-20">About</a></li>
          <li><a href="#skills" className="hover:text-blue-400 scroll-mt-20">Skills</a></li>
          <li><a href="#projects" className="hover:text-blue-400 scroll-mt-20">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-400 scroll-mt-20">Contact</a></li>
        

        </ul>

      </div>

    </nav>
  )
}

export default Navbar