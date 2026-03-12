function Projects() {
  return (
    <section className="bg-gray-950 text-white py-20">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl font-bold text-center mb-12">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-gray-900 p-6 rounded-lg hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2">
              WHCode Platform
            </h3>
            <p className="text-gray-400">
              A platform for students to learn theory topics and prepare for exams.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2">
              DSA Practice Tracker
            </h3>
            <p className="text-gray-400">
              Helps students track solved problems and revision topics.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2">
              Networking Notes Platform
            </h3>
            <p className="text-gray-400">
              A platform containing structured networking study material.
            </p>
          </div>

        </div>

      </div>

    </section>
  )
}

export default Projects