"use client"
import logo from "@/public/test-logo.png"

const clients = [
  { name: "Ferrari", logo: "/test-logo.png" },
  { name: "Samsung", logo: "/test-logo.png" },
]

export function ClientsSection() {
  return (
    <section className="py-24">
      <h2>Clients</h2>

      <div className="grid grid-cols-2 gap-6">
        {clients.map((client) => (
          <div key={client.name}>
          
              <Image 
                src={client.logo}
                alt={client.name}
                width={120}
                height={60}
                unoptimized
/>
          </div>
        ))}
      </div>
    </section>
  )
}
