import ServiceLayout from '../components/ServiceLayout'

const AIAgents = () => {
  const capabilities = [
    {
      title: "Task Automation",
      description: "AI agents that can perform complex tasks autonomously.",
      details: ["Email management", "Calendar scheduling", "Data analysis", "Report generation"]
    },
    {
      title: "Decision Support",
      description: "Intelligent systems that assist in decision-making processes.",
      details: ["Risk assessment", "Market analysis", "Predictive analytics", "Resource optimization"]
    },
    {
      title: "Process Optimization",
      description: "Agents that continuously improve business processes.",
      details: ["Workflow analysis", "Bottleneck identification", "Performance optimization", "Cost reduction"]
    }
  ]

  return (
    <ServiceLayout 
      title="AI Agents" 
      description="Advanced AI agents that work autonomously to handle complex tasks and improve business processes."
    >
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {capabilities.map((capability) => (
              <div 
                key={capability.title}
                className="bg-gradient-to-b from-[#1c1c1c] to-[#2c2c2c] text-white rounded-xl p-8"
              >
                <h3 className="text-xl font-semibold mb-3">
                  {capability.title}
                </h3>
                <p className="text-white/60 mb-6">
                  {capability.description}
                </p>
                <ul className="space-y-2">
                  {capability.details.map((detail) => (
                    <li key={detail} className="flex items-center space-x-2">
                      <span className="text-emerald-400">✓</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ServiceLayout>
  )
}

export default AIAgents 