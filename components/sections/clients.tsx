"use client"

const clients = [
  { name: "Ferrari", logo: "/test-logo.png" },
  { name: "Samsung", logo: "/test-logo.png" },
  { name: "Apple", logo: "/test-logo.png" },
  { name: "Nike", logo: "/test-logo.png" },
  { name: "Adidas", logo: "/test-logo.png" },
  { name: "Puma", logo: "/test-logo.png" },
  { name: "Coca-Cola", logo: "/test-logo.png" },
  { name: "Pepsi", logo: "/test-logo.png" },
  { name: "Amazon", logo: "/test-logo.png" },
  { name: "Google", logo: "/test-logo.png" },
  { name: "Microsoft", logo: "/test-logo.png" },
  { name: "Netflix", logo: "/test-logo.png" },
  { name: "Spotify", logo: "/test-logo.png" },
  { name: "Uber", logo: "/test-logo.png" },
  { name: "Airbnb", logo: "/test-logo.png" },
  { name: "BMW", logo: "/test-logo.png" },
  { name: "Mercedes-Benz", logo: "/test-logo.png" },
  { name: "Rolex", logo: "/test-logo.png" },
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
              className="bg-white/5 border border-white/10 rounded-2xl p-10 flex items-center justify-center hover:bg-white/10 transition duration-300"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-10 object-contain opacity-80 hover:opacity-100 transition"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
