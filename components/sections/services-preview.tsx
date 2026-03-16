"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/animated-section"
import { ArrowRight, Sparkles, Megaphone, Users, Palette, Music, Sofa } from "lucide-react"

const services = [
  {
    icon: Sparkles,
    title: "Event Production",
    description: "End-to-end event production for corporate conferences, product launches, galas, and large-scale productions with meticulous attention to detail.",
  },
  {
    icon: Megaphone,
    title: "Experiential Marketing",
    description: "Immersive brand experiences that engage audiences, create emotional connections, and generate lasting brand loyalty.",
  },
  {
    icon: Users,
    title: "Public Relations",
    description: "Strategic communications and media relations that amplify your brand story and build meaningful connections with your audiences.",
  },
  {
    icon: Palette,
    title: "Brand Activations",
    description: "Creative activations that bring brands to life through interactive experiences, pop-ups, and memorable touchpoints.",
  },
  {
    icon: Music,
    title: "Cultural Productions",
    description: "Festival productions, cultural events, and entertainment experiences that celebrate art, music, and community.",
  },
  {
    icon: Sofa,
    title: "Event Furniture & Rentals",
    description: "Premium event furniture and decor rentals to transform any space into an extraordinary venue.",
  },
]

export function ServicesPreviewSection() {
  return (
    <section className="py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-accent text-sm font-medium uppercase tracking-[0.2em] mb-4">
            What We Do
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Full-Service Experiential Agency
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            From strategy to execution, we deliver comprehensive solutions that transform your vision into extraordinary experiences.
          </p>
        </AnimatedSection>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {services.map((service, index) => (
            <AnimatedSection key={service.title} delay={index * 100}>
              <div className="group relative p-8 bg-background rounded-lg border border-border hover:border-accent/50 transition-all duration-500 h-full">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                  <service.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
                <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowRight className="w-5 h-5 text-accent" />
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection className="text-center">
          <Button
            asChild
            className="bg-accent text-accent-foreground hover:bg-accent/90 font-medium"
          >
            <Link href="/services" className="flex items-center gap-2">
              Explore All Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  )
}
