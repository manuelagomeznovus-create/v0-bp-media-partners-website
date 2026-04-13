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
    image: "/images/samsung.bpmedia2026.jpg",
  },
  {
    title: "Brand Activations",
    category: "Brand Experience",
    image:"/images/viveahora.jpeg",
  },
  {
    title: "Luxury Automotive Exhibition",
    category: "Corporate Event",
    image: "/images/cochelanzamiento.jpeg",
  },
  {
    title: "Experiential Marketing",
    category: "Corporate Event",
    image: "/images/avion.jpeg",
  },
  {
    title: "Product Launchest",
    category: "Product Launchest",
    image: "/images/estylo.jpeg",
  },
  {
    title: "Energy Drink Expansion Strategy",
    category: "Expansion Strategy",
    image: "/images/furniture.jpeg",
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
              Featured Projects
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
