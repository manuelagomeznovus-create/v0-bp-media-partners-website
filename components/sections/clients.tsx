"use client"

const clients = [
  { name: "Ferrari", logo: "/newsamsung.png" },
  { name: "Samsung", logo: "/newsamsung.png" },
  { name: "Apple", logo: "/newsamsung.png" },
  { name: "Nike", logo: "/newsamsung.png" },
  { name: "Adidas", logo: "/newsamsung.png" },
  { name: "Puma", logo: "/newsamsung.png" },
  { name: "Coca-Cola", logo: "/newsamsung.png" },
  { name: "Pepsi", logo: "/newsamsung.png" },
  { name: "Amazon", logo: "/newsamsung.png" },
  { name: "Google", logo: "/newsamsung.png" },
  { name: "Microsoft", logo: "/newsamsung.png" },
  { name: "Netflix", logo: "/newsamsung.png" },
  { name: "Spotify", logo: "/newsamsung.png" },
  { name: "Uber", logo: "/newsamsung.png" },
  { name: "Airbnb", logo: "/newsamsung.png" },
  { name: "BMW", logo: "/newsamsung.png" },
  { name: "Mercedes-Benz", logo: "/newsamsung.png" },
  { name: "Rolex", logo: "/newsamsung.png" },
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
