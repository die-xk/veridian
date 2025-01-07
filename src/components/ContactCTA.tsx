const ContactCTA = () => {
  return (
    <section className="relative bg-[#1c1c1c]/95 backdrop-blur-lg">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1c1c1c]/50 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="mt-4 text-lg leading-6 text-white/60">
            Get in touch with our experts and discover how Veridian can help you leverage the power of AI
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <button className="bg-white text-[#1c1c1c] px-8 py-3 rounded-lg hover:bg-white/90 transition-colors duration-200 ease-in-out shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              Schedule a Demo
            </button>
            <button className="bg-white/10 text-white px-8 py-3 rounded-lg border border-white/20 hover:bg-white/20 transition-colors duration-200 ease-in-out backdrop-blur-sm">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactCTA 