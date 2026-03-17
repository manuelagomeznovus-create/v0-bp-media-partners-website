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
    <section className="section-spacing bg-card relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full filter blur-3xl pointer-events-none" />
      
      <div className="container-padding mx-auto relative z-10">
        {/* Header */}
        <AnimatedSection className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 md:gap-8 mb-16 lg:mb-20">
          <div className="max-w-2xl">
            <p className="text-accent text-xs md:text-sm font-medium uppercase tracking-[0.3em] mb-6">
              Our Team
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance leading-tight">
              The Experts Behind the Magic
            </h2>
          </div>
          <Button
            asChild
            variant="outline"
            className="border border-accent text-accent hover:bg-accent/5 font-semibold px-8 py-6 rounded-lg transition-all duration-300 whitespace-nowrap"
          >
            <Link href="/about" className="flex items-center gap-2">
              Meet the Team
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </AnimatedSection>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {team.map((member, index) => (
            <AnimatedSection key={member.role} delay={index * 100}>
              <div className="group relative overflow-hidden rounded-xl h-96">
                {/* Image */}
                <Image
                  src={member.image}
                  alt={member.name}
                  width={400}
                  height={500}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-serif text-xl lg:text-2xl font-semibold text-foreground mb-1">
                      {member.name}
                    </h3>
                    <p className="text-accent text-sm font-medium uppercase tracking-wider mb-4">
                      {member.role}
                    </p>
                    <a
                      href="#"
                      className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent/20 hover:bg-accent/30 text-accent transition-all duration-300 opacity-0 group-hover:opacity-100"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
