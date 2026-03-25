"use client"

const clients = [
  { name: "Samsung", logo: "/definitivosamsung.webp" },
  { name: "Range Rover", logo: "/rangerover.png" },
  { name: "Ferrari", logo: "/ferraridefinitivo.png" },
  { name: "Porsche", logo: "/porschelogo.png" },
  { name: "Mercedes-Benz", logo: "/mercedeslogo.png" },
  { name: "Four Seasons", logo: "/fourlogo.png" },
  { name: "The Ritz-Carlton", logo: "/theritzlogo.png" },
  { name: "Mandarin Oriental", logo: "/mandarinlogo.png" },
  { name: "Bank", logo: "/banklogo.png" },
  { name: "Cartier", logo: "/cartierlogo.png" },
  { name: "Barceló", logo: "/barcelo.png" },
  { name: "Cap Cana", logo: "/capcana.png" },
  { name: "Universal", logo: "/unilogo.png" },
]

export function ClientsSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-white">
            About Our Clients
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We collaborate with leading global brands to create impactful experiences and unforgettable events.
          </p>
        </div>

        {/* Logos */}
     <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
  {clients.map((client) => (
    <div
      key={client.name}
      className="bg-white/20 border border-white/20 rounded-xl flex items-center justify-center h-28 hover:bg-white/20 transition duration-300 overflow-hidden"
    >
     <img
  src={client.logo}
  alt={client.name}
  className="h-20 w-auto object-contain mx-auto"
 />
    </div>
  ))}
</div>

      </div>
    </section>
  )
}
