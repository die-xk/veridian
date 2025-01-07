"use client"
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const solutions = [
    { name: 'AI Chatbots', path: '/ai-chatbots' },
    { name: 'Automation', path: '/automation' },
    { name: 'AI Agents', path: '/ai-agents' },
    { name: 'Team Training', path: '/team-training' },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 w-full bg-[#1c1c1c]/95 backdrop-blur-lg z-50 border-b border-white/10 shadow-sm" role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center space-x-3 transition duration-300 ease-in-out hover:opacity-80">
            <Link to="/" className="flex items-center">
              <img
                className="h-8 w-auto"
                src="/logo-png.png"
                alt="Veridian AI"
              />
            </Link>
            <span className="text-white text-xl sm:text-2xl font-bold tracking-wider">Veridian</span>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2 rounded-lg hover:bg-white/10"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8 lg:space-x-10">
              <div ref={dropdownRef} className="relative">
                <button 
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="text-white/90 hover:text-white font-medium transition-colors duration-200 ease-in-out relative group flex items-center"
                  aria-expanded={isDropdownOpen}
                  aria-haspopup="true"
                >
                  Solutions
                  <svg 
                    className={`ml-2 h-4 w-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown menu */}
                {isDropdownOpen && (
                  <div 
                    className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transform opacity-100 scale-100 transition-all duration-200"
                    role="menu"
                  >
                    <div className="py-1">
                      {solutions.map((solution) => (
                        <Link
                          key={solution.name}
                          to={solution.path}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          role="menuitem"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          {solution.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

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

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <div className="space-y-1">
                <div className="px-3 py-2 text-white/90 font-medium">Solutions</div>
                {solutions.map((solution) => (
                  <Link
                    key={solution.name}
                    to={solution.path}
                    className="block px-3 py-2 text-sm text-white/80 hover:text-white pl-6"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {solution.name}
                  </Link>
                ))}
              </div>
              <Link 
                to="/" 
                className="text-white/90 hover:text-white block px-3 py-2 font-medium transition-colors duration-200 ease-in-out"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <button 
                className="w-full mt-2 bg-white text-[#1c1c1c] px-6 py-2.5 rounded-lg hover:bg-white/90 transition-colors duration-200 ease-in-out shadow-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar 