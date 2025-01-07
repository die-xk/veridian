const Hero = () => {
  return (
    <div className="bg-white pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-32 lg:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="relative inline-block text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            <span className="block text-[#1c1c1c] mb-2">
              Transform Your Business with
              
            </span>
            <span className="block text-[#1c1c1c]/80 mt-2">
              Intelligent AI Solutions
            </span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-[#1c1c1c]/60">
            Empower your organization with custom AI chatbots, automation solutions, and expert training. 
            Let us help you navigate the future of AI technology.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <button className="bg-[#1c1c1c] text-white px-8 py-3 rounded-lg hover:bg-[#1c1c1c]/90 transition-colors duration-200 ease-in-out shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              Get Started
            </button>
            <button className="bg-transparent text-[#1c1c1c] px-8 py-3 rounded-lg border border-[#1c1c1c] hover:bg-[#1c1c1c]/5 transition-colors duration-200 ease-in-out">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero 