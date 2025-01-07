const TeamTraining = () => {
  const trainingModules = [
    {
      title: "AI Fundamentals",
      description: "Learn the basics of AI and how it can be applied in business contexts.",
      duration: "2 weeks",
      level: "Beginner",
      price: "$499"
    },
    {
      title: "Prompt Engineering",
      description: "Master the art of crafting effective prompts for AI models.",
      duration: "3 weeks",
      level: "Intermediate",
      price: "$799"
    },
    {
      title: "AI Implementation",
      description: "Hands-on training for implementing AI solutions in your workflow.",
      duration: "4 weeks",
      level: "Advanced",
      price: "$1,299"
    }
  ]

  return (
    <section id="training" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1c1c1c] sm:text-4xl">
            Team Training Programs
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-[#1c1c1c]/60">
            Empower your team with the knowledge and skills needed to leverage AI effectively
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {trainingModules.map((module, index) => (
            <div 
              key={index} 
              className="bg-[#1c1c1c]/5 p-6 rounded-xl hover:bg-[#1c1c1c]/10 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-[#1c1c1c]">{module.title}</h3>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  module.level === "Beginner" ? "bg-emerald-100 text-emerald-800" :
                  module.level === "Intermediate" ? "bg-emerald-100 text-emerald-800" :
                  "bg-emerald-100 text-emerald-800"
                }`}>
                  {module.level}
                </span>
              </div>
              <p className="text-[#1c1c1c]/60 mb-4">{module.description}</p>
              <div className="flex items-center justify-between border-t border-[#1c1c1c]/10 pt-4 mt-4">
                <div className="flex items-center text-sm text-[#1c1c1c]/60">
                  <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {module.duration}
                </div>
                <span className="text-xl font-bold text-[#1c1c1c]">{module.price}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-[#1c1c1c] text-white px-8 py-3 rounded-lg hover:bg-[#1c1c1c]/90 transition-colors duration-200 ease-in-out shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
            Schedule a Training Session
          </button>
        </div>
      </div>
    </section>
  )
}

export default TeamTraining 