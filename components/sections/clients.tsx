"use client"

const clients = [
  { name: "Samsung", logo: "/definitivosamsung.webp" },
  { name: "Range Rover", logo: "/rangerover.png" },
  { name: "Ferrari", logo: "/ferraridefinitivo.png" },
  { name: "Porsche", logo: "/porschelogo.png" },
  { name: "Mercedes-Benz", logo: "/mercedeslogo.png" },
  { name: "The Ritz-Carlton", logo: "/theritzlogo.png" },
  { name: "Mandarin Oriental", logo: "/mandarinlogo.png" },
  { name: "Bank", logo: "/banklogo.png" },
  { name: "Cartier", logo: "/cartierlogo.png" },
  { name: "Cap Cana", logo: "/capcana.png" },
  { name: "Universal", logo: "/unilogo.png" },
  { name: "RumLab", logo: "/rumlab.png" }, 
  { name: "CasaCampo", logo: "/casacampo.png" },
  { name: "La Concha", logo: "/laconcha.webp" },
  { name: "David", logo: "/david.webp" },
  { name: "HISO", logo: "/hiso.png" },
  { name: "Miamilogo", logo: "/citylogo.png" },
  { name: "Client 1", logo: "/loggo1.png" },
  { name: "Client 2", logo: "/loggo2.png" },
  { name: "Client 4", logo: "/loggo 4.png" },
  { name: "Client 5", logo: "/loggo5.png" },
  { name: "Client 7", logo: "/loggo7.png" },
  { name: "Client 8", logo: "/loggo8.png" },
  { name: "Client 9", logo: "/loggo9.png" },
  { name: "Client 10", logo: "/loggo10.png" },
  { name: "Client 11", logo: "/loggo11.png" },
  { name: "Client 12", logo: "/loggo12.png" },
  { name: "Client 13", logo: "/loggo13.png" },
]

export function ClientsSection() {
  return (
   <section id="clients" className="py-24 scroll-mt-32">
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
      className="flex items-center justify-center h-28"
    >
     <img
  src={client.logo}
  alt={client.name}
  className="h-25 w-auto object-contain mx-auto"
 />
    </div>
  ))}
</div>

      </div>
    </section>
  )
}
