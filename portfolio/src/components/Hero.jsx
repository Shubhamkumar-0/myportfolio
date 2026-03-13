import { FaGithub, FaLinkedin } from "react-icons/fa"
import portfolioImage from "../assets/portfolio-image.jpeg"
import cv from "../assets/shubham-cv.pdf"


function Hero() {
  return (
    <section id="home" className="min-h-screen scroll-mt-20 flex items-center bg-gray-950 text-white px-6">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* Left Side */}
        <div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Shubham Kumar
            </span>
          </h1>

          <p className="text-gray-400 text-lg mb-6">
            Computer Science Student passionate about building web applications,
            solving DSA problems, and creating impactful software.
          </p>

          <div className="flex gap-4 mb-6">

           <a href="#projects" className="bg-blue-500 px-6 py-2 rounded hover:bg-blue-600 inline-block">
              View Projects
           </a>

            <a href="#contact" className="border border-gray-600 px-6 py-2 rounded hover:bg-gray-800">
              Contact Me
            </a>

            <a href={cv} 
              download className="border border-gray-600 px-6 py-2 rounded hover:bg-gray-800">
             Download Resume
            </a>

          </div>

          <div className="flex gap-5 text-2xl">

            <a href="https://github.com/Shubhamkumar-0" className="hover:text-blue-400">
              <FaGithub />
            </a>

            <a href="https://www.linkedin.com/in/shubham-kumar-692161217/" className="hover:text-blue-400">
              <FaLinkedin />
            </a>

          </div>

        </div>

        {/* Right Side */}
        <div className="flex justify-center" br="50%">

          <img
            src={portfolioImage}
            alt="developer"
            className="w-80 h-80 rounded-full object-cover"
          />

        </div>

      </div>

    </section>
  )
}

export default Hero