import { BiBrain } from "react-icons/bi"
import { BsLightbulb } from "react-icons/bs"
import { RiTeamLine } from "react-icons/ri"
import { MdOutlineTrendingUp } from "react-icons/md"
import { FaLinkedin } from "react-icons/fa"

const Features = () => {
  const features = [
    {
      icon: BiBrain,
      title: "Deep AI Expertise",
      points: [
        "IBM-certified AI development expertise in machine learning and LLMs",
        "Proven track record in leading AI teams and developing no-code solutions",
      ]
    },
    {
      icon: BsLightbulb,
      title: "Focus on Practical AI Solutions",
      points: [
        "Inclusive AI adoption strategies with comprehensive team training",
        "Bridge the knowledge gap in traditional industries and government sectors",
      ]
    },
    {
      icon: RiTeamLine,
      title: "Commitment to Client Success",
      points: [
        "End-to-end guidance from consultation to implementation",
        "Phased approach ensuring measurable success and ROI",
      ]
    },
    {
      icon: MdOutlineTrendingUp,
      title: "Proven Thought Leadership",
      points: [
        "Featured on Kosovo's National TV Channel RTK",
        "Presentations at UN Arab Forum and KosovaPAR",
      ]
    },
  ]

  const founders = [
    {
      name: "Endrit Morina",
      role: "AI Technical Lead",
      description: "IBM-certified AI developer specializing in LLMs, neural networks, and machine learning. Led multiple successful AI implementations and developed innovative solutions for enterprise clients. Expert in Python, TensorFlow, and cloud-based AI architectures.",
      image: "/team/endrit.jpg",
      linkedin: "https://www.linkedin.com/in/endritm/"
    },
    {
      name: "Diellon Bytyqi",
      role: "AI Solutions Architect",
      description: "Pioneering no-code AI solutions and leading strategic implementations across industries. Expertise in AI project management, business process optimization, and team development. Recognized speaker at international tech conferences.",
      image: "/team/diellon.JPG",
      linkedin: "https://www.linkedin.com/in/diellonb/"
    }
  ]

  return (
    <section id="features" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1c1c1c] sm:text-4xl">
            Why Choose Veridian?
          </h2>
          <p className="mt-4 text-lg text-[#1c1c1c]/60 max-w-3xl mx-auto">
            Bridging the Gap Between AI and Business Needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {features.map((feature) => (
            <div 
              key={feature.title}
              className="relative p-8 bg-[#1c1c1c]/5 rounded-lg hover:bg-[#1c1c1c]/10 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <feature.icon className="h-8 w-8 text-[#1c1c1c]/80" />
                <h3 className="text-xl font-semibold text-[#1c1c1c]">
                  {feature.title}
                </h3>
              </div>
              <ul className="space-y-3">
                {feature.points.map((point, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-[#1c1c1c]/60 text-sm mt-1">•</span>
                    <p className="text-[#1c1c1c]/80">{point}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-xl font-semibold text-[#1c1c1c] mb-10">
            Meet Our Co-founders
          </h3>
          <div className="grid md:grid-cols-2 gap-12">
            {founders.map((founder) => (
              <div 
                key={founder.name}
                className="group relative p-6 bg-[#1c1c1c]/5 rounded-lg overflow-hidden transition-all duration-300 hover:bg-[#1c1c1c]/10"
              >
                <div className="mb-6">
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <div className="absolute inset-0 rounded-full overflow-hidden">
                      <img 
                        src={founder.image} 
                        alt={founder.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <a 
                      href={founder.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute bottom-0 right-0 bg-[#1c1c1c] p-2 rounded-full transform translate-x-1/4 translate-y-1/4 transition-all duration-300 hover:bg-[#0077b5] group-hover:translate-y-0 group-hover:translate-x-0"
                    >
                      <FaLinkedin className="w-4 h-4 text-white" />
                    </a>
                  </div>
                  <h4 className="font-medium text-[#1c1c1c] text-lg mb-1">
                    {founder.name}
                  </h4>
                  <p className="text-[#1c1c1c]/80 text-sm font-medium mb-3">
                    {founder.role}
                  </p>
                  <p className="text-[#1c1c1c]/60 text-sm leading-relaxed">
                    {founder.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features 