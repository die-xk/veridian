const CompanyLogos = () => {
  const companies = [
    { 
      name: 'United Nations', 
      logo: '/company-logos/un.png',
      description: 'Presented at the United Nations'
    },
    { 
      name: 'IBM', 
      logo: '/company-logos/ibm.jpg',
      description: 'Mentored our AI development practices and LLM implementation'
    },
    { 
      name: 'GiZ', 
      logo: '/company-logos/giz.png',
      description: 'Trained 40+ youth in AI and ML'
    },
    { 
      name: 'Simplified', 
      logo: '/company-logos/sim.jpeg',
      description: 'Trained us in use of AI in marketing and sales'
    },
    { 
      name: 'Bolt Insights', 
      logo: '/company-logos/bolt.png',
      description: 'Tested our AI solutions'
    },
  ]

  return (
    <div className="bg-white py-16 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-[#1c1c1c]/60 uppercase tracking-wider mb-12">
          Mentored by Industry Leaders
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 lg:gap-8">
          {companies.map((company) => (
            <div 
              key={company.name} 
              className="flex flex-col items-center text-center space-y-4"
            >
              <div className="group relative">
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className="h-12 md:h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
                />
              </div>
              <p className="text-sm text-[#1c1c1c]/60 max-w-[200px] leading-snug">
                {company.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CompanyLogos 