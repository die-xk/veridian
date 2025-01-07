const Navbar = () => {
  return (
    <nav className="top-0 w-full bg-[#1c1c1c]/95 backdrop-blur-lg z-50 border-b border-white/10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 transition duration-300 ease-in-out hover:opacity-80">
            <img 
              src="/logo.png" 
              alt="Veridian Logo" 
              className="h-10 w-auto" 
            />
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-10">
              <a 
                href="#services" 
                className="text-white/90 hover:text-white font-medium transition-colors duration-200 ease-in-out relative group"
              >
                Services
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-in-out" />
              </a>
              <a 
                href="#features" 
                className="text-white/90 hover:text-white font-medium transition-colors duration-200 ease-in-out relative group"
              >
                Features
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-in-out" />
              </a>
              <a 
                href="#case-studies" 
                className="text-white/90 hover:text-white font-medium transition-colors duration-200 ease-in-out relative group"
              >
                Case Studies
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-in-out" />
              </a>
              <a 
                href="#training" 
                className="text-white/90 hover:text-white font-medium transition-colors duration-200 ease-in-out relative group"
              >
                Training
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-in-out" />
              </a>
              <button className="bg-white text-[#1c1c1c] px-6 py-2.5 rounded-lg hover:bg-white/90 transition-colors duration-200 ease-in-out shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 