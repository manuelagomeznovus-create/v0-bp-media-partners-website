"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AnimatedSection } from "@/components/animated-section"
import { Button } from "@/components/ui/button"
import { ArrowRight, Filter } from "lucide-react"
import { cn } from "@/lib/utils"

const categories = [
  "All",
  "Corporate Events",
  "Brand Activations",
  "Experiential Marketing",
  "Cultural Productions",
  "Product Launches",
]

const projects = [
  {
    id: 1,
    title: "Samsung S26 Product Launch",
    category: "Product Launches",
    client: "SAMSUNG",
    location: "Dominican Republic",
    year: "2026",
    description: "Launch of Samsung’s S26 in the Dominican Republic, delivering a powerful brand experience.",
    image: "/images/samsung.bpmedia2026.jpg",
    featured: true,
  },
  {
    id: 2,
    title: "Brand Activation",
    category: "Brand Activations",
    client: "Premium Fashion House",
    location: "Miami Beach, FL",
    year: "2024",
    description: "Days to Shine: A Brand Activation Experience for Ron Barceló",
    image: "/images/viveahora.jpeg",
    featured: true,
  },
  {
    id: 3,
    title: "Estylo Magazine Cover Release",
    category: "Corporate Events",
    client: "Estylo Magazine",
    location: "Miami",
    year: "2024",
    description: "A fashion magazine launch event in Miami, where we handled the event communication to promote and give visibility to the release.",
    image: "/images/estylo.jpeg",
    featured: false,
  },
  {
    id: 4,
    title: "Estylo Magazine Cover Release",
    category: "Product Launches",
    client: "Estylo Magazine",
    location: "Miami" ,
    year: "2023",
    description: "A fashion magazine launch event in Miami, where we handled the event communication to promote and give visibility to the release.",
    image: "/images/estylo.jpeg",
    featured: false,
  },
  {
    id: 5,
    title: "Estylo Magazine Cover Release",
    category: "Product Launches",
    client: "Estylo Magazine",
    location: "Miami, FL",
    year: "2023",
    description: "A fashion magazine launch event in Miami, where we handled the event communication to promote and give visibility to the",
    image: "/images/estylo.jpeg",
    featured: true,
  },
  {
    id: 6,
    title: "Corporate Leadership Summit",
    category: "Corporate Events",
    client: "Global Financial Institution",
    location: "Miami, FL",
    year: "2023",
    description: "Executive summit bringing together C-suite leaders from around the world for strategic discussions and networking.",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=2070&auto=format&fit=crop",
    featured: true,
  },
  {
    id: 7,
    title: "Automotive Brand Experience",
    category: "Experiential Marketing",
    client: "Luxury Auto Brand",
    location: "Los Angeles, CA",
    year: "2023",
    description: "Interactive brand experience center featuring test drives, product demonstrations, and personalized customer journeys.",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop",
    featured: false,
  },
  {
    id: 8,
    title: "Art Basel Brand Activation",
    category: "Brand Activations",
    client: "Global Spirits Brand",
    location: "Miami Beach, FL",
    year: "2023",
    description: "Exclusive brand experience during Art Basel featuring custom art installations, VIP events, and influencer programming.",
    image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=2070&auto=format&fit=crop",
    featured: false,
  },
  {
    id: 9,
    title: "Tech Startup Launch",
    category: "Product Launches",
    client: "Emerging Tech Company",
    location: "Austin, TX",
    year: "2023",
    description: "High-energy product launch event featuring live demonstrations, media opportunities, and investor presentations.",
    image: "https://images.unsplash.com/photo-1591115765373-5207764f72e4?q=80&w=2070&auto=format&fit=crop",
    featured: false,
  },
  {
    id: 10,
    title: "Beverage Brand Pop-Up",
    category: "Experiential Marketing",
    client: "Major Beverage Brand",
    location: "Chicago, IL",
    year: "2023",
    description: "Immersive pop-up experience featuring product sampling, interactive games, and social media activations.",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2069&auto=format&fit=crop",
    featured: false,
  },
  {
    id: 11,
    title: "Annual Charity Gala",
    category: "Corporate Events",
    client: "Non-Profit Foundation",
    location: "Palm Beach, FL",
    year: "2022",
    description: "Prestigious black-tie gala event featuring world-class entertainment, live auctions, and philanthropic celebrations.",
    image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=2070&auto=format&fit=crop",
    featured: false,
  },
  {
    id: 12,
    title: "Caribbean Music Festival",
    category: "Cultural Productions",
    client: "Tourism Board",
    location: "San Juan, PR",
    year: "2022",
    description: "Multi-day cultural celebration featuring local and international artists, culinary experiences, and community engagement.",
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=2070&auto=format&fit=crop",
    featured: false,
  },
]

export default function WorkPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [showFilters, setShowFilters] = useState(false)

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(project => project.category === selectedCategory)

  const featuredProjects = filteredProjects.filter(p => p.featured)
  const otherProjects = filteredProjects.filter(p => !p.featured)

  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
          <div className="container mx-auto px-6 lg:px-12">
            <AnimatedSection className="max-w-3xl">
              <p className="text-accent text-sm font-medium uppercase tracking-[0.2em] mb-4">
                Our Work
              </p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
                Selected Projects
              </h1>
              <p className="text-muted-foreground text-lg lg:text-xl leading-relaxed">
                Explore our portfolio of experiential marketing campaigns, corporate events, brand activations, and cultural productions for global brands.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Filters */}
        <section className="pb-8">
          <div className="container mx-auto px-6 lg:px-12">
            <AnimatedSection delay={100}>
              {/* Mobile Filter Toggle */}
              <div className="lg:hidden mb-4">
                <Button
                  variant="outline"
                  onClick={() => setShowFilters(!showFilters)}
                  className="border-foreground/20 text-foreground"
                >
                  <Filter className="w-4 h-4 mr-2" />
                  Filter by Category
                </Button>
              </div>

              {/* Filter Pills */}
              <div className={cn(
                "flex flex-wrap gap-2",
                showFilters ? "block" : "hidden lg:flex"
              )}>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={cn(
                      "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                      selectedCategory === category
                        ? "bg-accent text-accent-foreground"
                        : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
                    )}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <section className="pb-16">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="grid lg:grid-cols-2 gap-6">
                {featuredProjects.map((project, index) => (
                  <AnimatedSection key={project.id} delay={index * 100}>
                    <div className="group relative aspect-[4/3] lg:aspect-[16/10] overflow-hidden rounded-lg cursor-pointer">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                      <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-accent text-xs uppercase tracking-wider">
                            {project.category}
                          </span>
                          <span className="text-muted-foreground text-xs">•</span>
                          <span className="text-muted-foreground text-xs">
                            {project.location}
                          </span>
                        </div>
                        <h3 className="font-serif text-2xl lg:text-3xl font-bold text-foreground mb-2">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground text-sm line-clamp-2 mb-4 max-w-xl">
                          {project.description}
                        </p>
                        <div className="flex items-center gap-2 text-accent text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          View Project
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Other Projects Grid */}
        <section className="pb-24 lg:pb-32">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <AnimatedSection key={project.id} delay={index * 50}>
                  <div className="group cursor-pointer">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-4">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                      <div className="absolute inset-0 flex items-end p-4 md:p-6">
                        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                          <p className="text-accent text-xs uppercase tracking-wider mb-1">
                            {project.category}
                          </p>
                          <h3 className="font-serif text-lg font-semibold text-foreground">
                            {project.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="px-1">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <span>{project.location}</span>
                        <span>•</span>
                        <span>{project.year}</span>
                      </div>
                      <p className="text-muted-foreground text-sm line-clamp-2">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 lg:py-32 bg-card border-t border-border">
          <div className="container mx-auto px-6 lg:px-12">
            <AnimatedSection className="text-center max-w-3xl mx-auto">
              <p className="text-accent text-sm font-medium uppercase tracking-[0.2em] mb-4">
                Ready to Start?
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
                Let&apos;s Create Your Next Success Story
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-10">
                Ready to bring your vision to life? Our team is here to help you create extraordinary experiences that captivate audiences and drive results.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-medium px-8"
              >
                <Link href="/contact" className="flex items-center gap-2">
                  Start a Project
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
