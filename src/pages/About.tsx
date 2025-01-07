import ServiceLayout from '../components/ServiceLayout'
import { BiBrain } from 'react-icons/bi'
import { BsLightbulb } from 'react-icons/bs'
import { RiTeamLine } from 'react-icons/ri'

const About = () => {
  const values = [
    {
      icon: BiBrain,
      title: "Innovation First",
      description: "We're constantly pushing the boundaries of what's possible with AI technology."
    },
    {
      icon: BsLightbulb,
      title: "Practical Solutions",
      description: "We focus on delivering real-world results that drive business value."
    },
    {
      icon: RiTeamLine,
      title: "Client Success",
      description: "Your success is our success. We're committed to long-term partnerships."
    }
  ]

  const founders = [
    {
      name: "Endrit Morina",
      role: "AI Technical Lead",
      description: "IBM-certified AI developer specializing in LLMs, neural networks, and machine learning. Led multiple successful AI implementations and developed innovative solutions for enterprise clients.",
      image: "/team/endrit.jpg",
      linkedin: "https://www.linkedin.com/in/endritm/"
    },
    {
      name: "Diellon Bytyqi",
      role: "AI Solutions Architect",
      description: "Pioneering no-code AI solutions and leading strategic implementations across industries. Expertise in AI project management, business process optimization, and team development.",
      image: "/team/diellon.JPG",
      linkedin: "https://www.linkedin.com/in/diellonb/"
    }
  ]

  return (
    <ServiceLayout 
      title="About Veridian" 
      description="Building the future of business with intelligent AI solutions"
    >
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mission Section */}
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-3xl font-bold text-[#1c1c1c] mb-6">Our Mission</h2>
            <p className="text-lg text-[#1c1c1c]/60">
              At Veridian, we're on a mission to democratize AI technology, making it accessible and practical for businesses of all sizes. We believe in the power of AI to transform operations, enhance customer experiences, and drive innovation.
            </p>
          </div>

          {/* Values Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {values.map((value) => (
              <div 
                key={value.title}
                className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <value.icon className="h-8 w-8 text-[#1c1c1c]/80 mb-4" />
                <h3 className="text-xl font-semibold text-[#1c1c1c] mb-2">
                  {value.title}
                </h3>
                <p className="text-[#1c1c1c]/60">
                  {value.description}
                </p>
              </div>
            ))}
          </div>

          {/* Team Section */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1c1c1c] mb-6">Our Team</h2>
            <p className="text-lg text-[#1c1c1c]/60 max-w-2xl mx-auto">
              Led by experts in AI development and implementation, our team brings together deep technical expertise and practical business experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {founders.map((member) => (
              <div 
                key={member.name}
                className="flex flex-col md:flex-row gap-6 items-start bg-white p-6 rounded-lg shadow-sm"
              >
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-32 h-32 object-cover rounded-lg"
                />
                <div>
                  <h3 className="text-xl font-semibold text-[#1c1c1c]">{member.name}</h3>
                  <p className="text-[#1c1c1c]/80 mb-2">{member.role}</p>
                  <p className="text-[#1c1c1c]/60 mb-4">{member.description}</p>
                  <a 
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 flex items-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ServiceLayout>
  )
}

export default About 