import { ReactNode } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import ContactCTA from './ContactCTA'

interface ServiceLayoutProps {
  children: ReactNode
  title: string
  description: string
}

const ServiceLayout = ({ children, title, description }: ServiceLayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-50 to-white">
      <Navbar />
      <header className="pt-32 pb-16 bg-[#1c1c1c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-xl text-white/60 max-w-3xl">
            {description}
          </p>
        </div>
      </header>
      <main>
        {children}
      </main>
      <ContactCTA />
      <Footer />
    </div>
  )
}

export default ServiceLayout 