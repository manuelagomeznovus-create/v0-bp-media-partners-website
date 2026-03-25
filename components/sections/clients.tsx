"use client"

import Image from "next/image"
import { AnimatedSection } from "@/components/animated-section"

// Placeholder client names - these would be replaced with actual client logos
const clients = [
  { name: "SAMSUNG", logo: "/images/test-logo.png" },
]

export function ClientsSection() {
  return (
    <section id="clients" className="py-24 lg:py-32">
      <h1 style={{ color: "red" }}>ESTOY AQUI</h1>
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-accent text-sm font-medium uppercase tracking-[0.2em] mb-4">
            Our Clients
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Trusted by Global Brands
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            We have had the privilege of working with some of the world&apos;s most recognized brands, delivering exceptional experiences that elevate their stories.
          </p>
        </AnimatedSection>

        {/* Clients Grid */}
        <AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
            {clients.map((client) => (
              <div
                key={client.name}
                className="group flex items-center justify-center p-8 lg:p-10 bg-card rounded-lg border border-border hover:border-accent/30 transition-all duration-300"
           <img src="/test-logo.png" width="200" />
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
