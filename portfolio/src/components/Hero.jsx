import { FaGithub, FaLinkedin } from "react-icons/fa"

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-950 text-white px-6">

      <div className="text-center max-w-3xl">

        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Shubham Kumar
          </span>
        </h1>

        <p className="text-gray-400 text-lg mb-8">
          Computer Science Student | React Developer | DSA Enthusiast
        </p>

        <div className="flex justify-center gap-6">

          <a
            href="https://github.com"
            className="text-2xl hover:text-blue-400 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com"
            className="text-2xl hover:text-blue-400 transition"
          >
            <FaLinkedin />
          </a>

        </div>

      </div>

    </section>
  )
}

export default Hero