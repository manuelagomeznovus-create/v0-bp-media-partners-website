"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/animated-section"
import { ArrowRight, Linkedin } from "lucide-react"

const team = [
  {
    name: "Bryan Pena",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop",
  },
  {
    name: "Project Lead",
    role: "Project Manager",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
  },
  {
    name: "Creative Lead",
    role: "Designer",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop",
  },
  {
    name: "Tech Lead",
    role: "Developer",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop",
  },
  {
    name: "Growth Lead",
    role: "Marketing Manager",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
  },
  {
    name: "Business Lead",
    role: "Sales Manager",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1970&auto=format&fit=crop",
  },
  {
    name: "Client Lead",
    role: "Customer Support",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1970&auto=format&fit=crop",
  },
  {
    name: "Operations Lead",
    role: "Operations Manager",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop",
  },
]

export function TeamSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <AnimatedSection className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <p className="text-accent text-sm font-medium uppercase tracking-[0.2em] mb-4">
              Our Team
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
              Meet the Experts Behind Every Experience
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Our talented team brings together decades of combined experience in experiential marketing, event production, and creative design.
            </p>
          </div>
          <Button
            asChild
            variant="outline"
            className="border-foreground/20 text-foreground hover:bg-foreground/10 font-medium w-fit shrink-0"
          >
            <Link href="/about" className="flex items-center gap-2">
              Learn More About Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </AnimatedSection>

        {/* Team Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {team.map((member, index) => (
            <AnimatedSection key={member.role} delay={index * 75}>
              <div className="group cursor-pointer">
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg mb-4">
                  <Image
                    src={member.image}
                    alt={member.role}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Hover Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <button
                      className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-accent-foreground hover:bg-accent/90 transition-colors"
                      aria-label={`Connect with ${member.name} on LinkedIn`}
                    >
                      <Linkedin size={18} />
                    </button>
                  </div>
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-1 group-hover:text-accent transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-accent text-sm font-medium">
                  {member.role}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
