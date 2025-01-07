import { Construction } from 'lucide-react'
const Building = () => {
  return (
    <div className="min-h-screen bg-[#1c1c1c] flex items-center justify-center">
      <div className="text-center">
        <Construction className="w-24 h-24 text-white mx-auto mb-8 animate-bounce" />
        <h1 className="text-4xl font-bold text-white mb-4">
          Sorry, we're still building
        </h1>
        <p className="text-white/70 text-lg">
          Our team is working hard to bring you something amazing
        </p>
      </div>
    </div>
  )
}

export default Building