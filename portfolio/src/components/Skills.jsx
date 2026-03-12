import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa"

function Skills() {
  return (
    <section className="bg-gray-900 text-white py-20">

      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-3xl font-bold mb-12">
          Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 text-5xl text-blue-400">

          <FaHtml5 />
          <FaCss3Alt />
          <FaJs />
          <FaReact />
          <FaGitAlt />

        </div>

      </div>

    </section>
  )
}

export default Skills