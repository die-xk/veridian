const CaseStudies = () => {
  const cases = [
    {
      title: "E-commerce Revolution",
      company: "ShopSmart Inc.",
      description: "Implemented an AI chatbot that increased customer satisfaction by 45% and reduced support tickets by 60%.",
      metrics: ["45% Higher Satisfaction", "60% Less Support Tickets", "24/7 Availability"],
      image: "/case-study-1.jpg"
    },
    {
      title: "Workflow Automation",
      company: "TechCorp Solutions",
      description: "Automated document processing workflow resulting in 80% time savings and 90% reduction in errors.",
      metrics: ["80% Time Saved", "90% Error Reduction", "ROI in 3 months"],
      image: "/case-study-2.jpg"
    }
  ]

  return (
    <section id="case-studies" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Success Stories</h2>
          <p className="mt-4 text-lg text-gray-600">
            See how we've helped businesses transform with AI
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {cases.map((case_, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 bg-gray-200">
                {/* Add actual image in production */}
                <div className="w-full h-full bg-gradient-to-r from-emerald-500 to-emerald-700" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{case_.title}</h3>
                <p className="text-emerald-600 mt-1">{case_.company}</p>
                <p className="mt-4 text-gray-600">{case_.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {case_.metrics.map((metric, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm"
                    >
                      {metric}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CaseStudies 