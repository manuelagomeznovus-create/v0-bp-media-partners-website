"use client"

import Image from "next/image"

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
          <div
            key={client.name}
            style={{ background: "white", padding: "20px" }}
          >
            <img src="/test-logo.png" width="200" />
          </div>
        ))}
      </div>
    </section>
  )
}
