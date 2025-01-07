import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CompanyLogos from './components/CompanyLogos'
import Services from './components/Services'
import Features from './components/Features'
import CaseStudies from './components/CaseStudies'
import TeamTraining from './components/TeamTraining'
import ContactCTA from './components/ContactCTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-50 to-white">
      <Navbar />
      <Hero />
      <CompanyLogos />
      <Services />
      <Features />
      <CaseStudies />
      <TeamTraining />
      <ContactCTA />
      <Footer />
    </div>
  )
}

export default App
