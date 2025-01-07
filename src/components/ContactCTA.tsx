const ContactCTA = () => {
  return (
    <section className="bg-emerald-700">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="mt-4 text-lg leading-6 text-emerald-100">
            Get in touch with our experts and discover how Veridian can help you leverage the power of AI
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <button className="bg-white text-emerald-700 px-8 py-3 rounded-lg hover:bg-emerald-50">
              Schedule a Demo
            </button>
            <button className="bg-transparent text-white px-8 py-3 rounded-lg border border-white hover:bg-emerald-600">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactCTA 