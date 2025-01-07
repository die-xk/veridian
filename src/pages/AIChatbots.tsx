import ServiceLayout from '../components/ServiceLayout'

const AIChatbots = () => {
  const benefits = [
    {
      title: "24/7 Customer Support",
      description: "Provide instant responses to customer inquiries around the clock, improving satisfaction and reducing support costs.",
      icon: "🤖"
    },
    {
      title: "Multilingual Support",
      description: "Communicate with customers in multiple languages, expanding your global reach.",
      icon: "🌍"
    },
    {
      title: "Scalable Solutions",
      description: "Handle thousands of conversations simultaneously without compromising quality.",
      icon: "📈"
    },
    {
      title: "Data-Driven Insights",
      description: "Gather valuable customer insights and analytics to improve your service.",
      icon: "📊"
    }
  ]

  return (
    <ServiceLayout 
      title="AI Chatbots" 
      description="Custom-built conversational AI solutions that understand your business context and engage naturally with your customers."
    >
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#1c1c1c]">
                Transform Your Customer Experience
              </h2>
              <p className="mt-4 text-lg text-[#1c1c1c]/60">
                Our AI chatbots go beyond simple Q&A. They understand context, learn from interactions, and provide personalized responses that feel natural and engaging.
              </p>
            </div>
            <div className="bg-[#1c1c1c]/5 rounded-xl p-8">
              <div className="space-y-6">
                {benefits.map((benefit) => (
                  <div key={benefit.title} className="flex gap-4">
                    <div className="text-2xl">{benefit.icon}</div>
                    <div>
                      <h3 className="font-semibold text-[#1c1c1c]">
                        {benefit.title}
                      </h3>
                      <p className="mt-1 text-[#1c1c1c]/60">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </ServiceLayout>
  )
}

export default AIChatbots 