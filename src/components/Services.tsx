import { HiChatBubbleBottomCenterText } from "react-icons/hi2"
import { BsRobot } from "react-icons/bs"
import { PiProjectorScreenChartBold } from "react-icons/pi"
import { FaChalkboardTeacher } from "react-icons/fa"

const Services = () => {
  const services = [
    {
      number: "01",
      icon: HiChatBubbleBottomCenterText,
      title: "AI Chatbots",
      description: "Custom-built conversational AI solutions that understand your business context and engage naturally with your customers."
    },
    {
      number: "02",
      icon: BsRobot,
      title: "Process Automation",
      description: "Intelligent automation solutions that streamline workflows and reduce manual tasks, increasing operational efficiency."
    },
    {
      number: "03",
      icon: PiProjectorScreenChartBold,
      title: "AI Consulting",
      description: "Strategic guidance on implementing AI solutions that align with your business goals and drive measurable results."
    },
    {
      number: "04",
      icon: FaChalkboardTeacher,
      title: "Team Training",
      description: "Comprehensive AI training programs to empower your team with the skills needed for the future of work."
    }
  ]

  return (
    <section id="services" className="bg-[#1c1c1c] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-white/60">
            Comprehensive AI solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div 
              key={service.title}
              className="relative p-8 bg-white/5 rounded-lg border border-white/10 group hover:bg-white/10 transition-colors duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <service.icon className="h-8 w-8 text-white/80" />
                <span className="text-2xl font-bold text-white/20">
                  {service.number}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-white/60">
                {service.description}
              </p>
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services 