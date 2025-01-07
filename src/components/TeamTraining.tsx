const TeamTraining = () => {
  const trainingModules = [
    {
      title: "AI Fundamentals",
      description: "Learn the basics of AI and how it can be applied in business contexts.",
      duration: "2 weeks",
      level: "Beginner"
    },
    {
      title: "Prompt Engineering",
      description: "Master the art of crafting effective prompts for AI models.",
      duration: "3 weeks",
      level: "Intermediate"
    },
    {
      title: "AI Implementation",
      description: "Hands-on training for implementing AI solutions in your workflow.",
      duration: "4 weeks",
      level: "Advanced"
    }
  ]

  return (
    <section id="training" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Team Training Programs
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-gray-600 lg:mx-auto">
            Empower your team with the knowledge and skills needed to leverage AI effectively
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {trainingModules.map((module, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900">{module.title}</h3>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  module.level === "Beginner" ? "bg-green-100 text-green-800" :
                  module.level === "Intermediate" ? "bg-blue-100 text-blue-800" :
                  "bg-purple-100 text-purple-800"
                }`}>
                  {module.level}
                </span>
              </div>
              <p className="text-gray-600 mb-4">{module.description}</p>
              <div className="flex items-center text-sm text-gray-500">
                <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {module.duration}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-emerald-600 text-white px-8 py-3 rounded-lg hover:bg-emerald-700">
            Schedule a Training Session
          </button>
        </div>
      </div>
    </section>
  )
}

export default TeamTraining 