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
    title: "Integrated Branding",
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
    title: "Event Elements & Decor Rentals",
    description: "Premium event furniture and decor rentals to transform any space into an extraordinary venue.",
  },
]

export function ServicesPreviewSection() {
  return (
    <section className="section-spacing bg-background relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full filter blur-3xl pointer-events-none" />
      
      <div className="container-padding mx-auto relative z-10">
        {/* Header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <p className="text-accent text-xs md:text-sm font-medium uppercase tracking-[0.3em] mb-6">
            What We Do
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 text-balance leading-tight">
            Full-Service Experiential Agency
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            From strategy to execution, we deliver comprehensive solutions that transform your vision into extraordinary experiences.
          </p>
        </AnimatedSection>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {services.map((service, index) => (
            <AnimatedSection key={service.title} delay={index * 100}>
              <div className="group relative p-8 lg:p-10 bg-card rounded-xl border border-border hover:border-accent/50 transition-all duration-500 h-full hover-lift hover:bg-card/50">
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-8 group-hover:bg-accent/20 transition-all duration-300">
                  <service.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="flex items-center text-accent opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-2">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-10 py-6 text-base rounded-lg transition-all duration-300 hover-lift shadow-lg hover:shadow-xl"
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
