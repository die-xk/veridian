import ServiceLayout from '../components/ServiceLayout'

const Automation = () => {
  const features = [
    {
      title: "Document Processing",
      description: "Automate data extraction and processing from invoices, receipts, and forms.",
      icon: "📄"
    },
    {
      title: "Workflow Automation",
      description: "Streamline business processes and eliminate repetitive tasks.",
      icon: "⚡"
    },
    {
      title: "Data Integration",
      description: "Connect multiple systems and automate data flow between applications.",
      icon: "🔄"
    },
    {
      title: "Quality Assurance",
      description: "Automated checking and validation of processes and data.",
      icon: "✓"
    }
  ]

  return (
    <ServiceLayout 
      title="Process Automation" 
      description="Intelligent automation solutions that streamline workflows and reduce manual tasks, increasing operational efficiency."
    >
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div 
                key={feature.title}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-[#1c1c1c] mb-2">
                  {feature.title}
                </h3>
                <p className="text-[#1c1c1c]/60">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ServiceLayout>
  )
}

export default Automation 