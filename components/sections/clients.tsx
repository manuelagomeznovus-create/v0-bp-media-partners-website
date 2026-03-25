"use client"

const clients = [
  { name: "Ferrari", logo: "/definitivosamsung.webp" },
  { name: "Samsung", logo: "/definitivosamsung.webp" },
  { name: "Apple", logo: "/definitivosamsung.webp" },
  { name: "Nike", logo: "/definitivosamsung.webp" },
  { name: "Adidas", logo: "/definitivosamsung.webp" },
  { name: "Puma", logo: "/definitivosamsung.webp" },
  { name: "Coca-Cola", logo: "/definitivosamsung.webp" },
  { name: "Pepsi", logo: "/definitivosamsung.webp" },
  { name: "Amazon", logo: "/definitivosamsung.webp" },
  { name: "Google", logo: "/definitivosamsung.webp" },
  { name: "Microsoft", logo: "/definitivosamsung.webp" },
  { name: "Netflix", logo: "/definitivosamsung.webp" },
  { name: "Spotify", logo: "/definitivosamsung.webp" },
  { name: "Uber", logo: "/definitivosamsung.webp" },
  { name: "Airbnb", logo: "/definitivosamsung.webp" },
  { name: "BMW", logo: "/definitivosamsung.webp" },
  { name: "Mercedes-Benz", logo: "/definitivosamsung.webp" },
  { name: "Rolex", logo: "/definitivosamsung.webp" },
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
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
  {clients.map((client) => (
    <div
      key={client.name}
      className="bg-white/10 border border-white/20 rounded-2xl p-6 flex items-center justify-center h-32 hover:bg-white/20 transition duration-300"
    >
      <img
        src={client.logo}
        alt={client.name}
        className="max-h-full max-w-full object-contain"
      />
    </div>
  ))}
</div>

      </div>
    </section>
  )
}
