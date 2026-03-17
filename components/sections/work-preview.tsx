"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/animated-section"
import { ArrowRight } from "lucide-react"

const projects = [
  {
    title: "Samsung S26 Product Launch",
    category: "Technology Event",
    image: "2026.3.10_BPMedia t_Wellington_Miami_WGP_5511.jpg",
  },
  {
    title: "Luxury Brand Activation",
    category: "Brand Experience",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop",
  },
  {
    title: "Global Technology Conference",
    category: "Corporate Event",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Fashion Week Production",
    category: "Fashion Event",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2032&auto=format&fit=crop",
  },
  {
    title: "Cultural Festival Production",
    category: "Cultural Event",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Corporate Leadership Summit",
    category: "Executive Event",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop",
  },
]

export function WorkPreviewSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <AnimatedSection className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="text-accent text-sm font-medium uppercase tracking-[0.2em] mb-4">
              Featured Work
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
              Selected Projects
            </h2>
          </div>
          <Button
            asChild
            variant="outline"
            className="border-foreground/20 text-foreground hover:bg-foreground/10 font-medium w-fit"
          >
            <Link href="/work" className="flex items-center gap-2">
              View Full Portfolio
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </AnimatedSection>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <AnimatedSection key={project.title} delay={index * 100}>
              <Link href="/work" className="group block relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <p className="text-accent text-xs uppercase tracking-wider mb-2 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    {project.category}
                  </p>
                  <h3 className="font-serif text-xl font-semibold text-foreground transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    {project.title}
                  </h3>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
