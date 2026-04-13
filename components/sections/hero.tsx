"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Gradient Background Effect */}
      <div className="absolute inset-0 bg-gradient-radial from-accent/8 via-background to-background pointer-events-none z-0" />
      
      {/* Content */}
      <div className="relative z-10 container-padding mx-auto max-w-5xl">
        <div className="space-y-8 md:space-y-10 lg:space-y-12 text-center">
          {/* Tagline */}
          <p className="text-accent text-xs md:text-sm font-medium uppercase tracking-[0.4em] animate-fade-up stagger-1">
       
          </p>

          {/* Main Headline */}
          <div className="space-y-4">
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight text-foreground animate-fade-up stagger-2 text-balance">
              We Create{" "}
              <span className="text-gradient">Unforgettable</span>{" "}
              Brand Experiences
            </h1>
          </div>

          {/* Subheadline */}
          <div className="max-w-3xl mx-auto space-y-4">
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground animate-fade-up stagger-3 leading-relaxed">
              Experiential marketing, event production, and public relations for global brands.
            </p>
            <p className="text-accent italic font-serif text-3xl md:text-5xl font-light animate-fade-up stagger-3">
              We Make it Happen!
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 animate-fade-up stagger-4">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-10 py-7 text-base rounded-lg transition-all duration-300 hover-lift shadow-lg hover:shadow-xl"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="border-2 border-accent text-accent hover:bg-accent/5 font-semibold px-10 py-7 text-base rounded-lg transition-all duration-300 hover-lift bg-transparent"
            >
              <Link href="/work">View Our Work</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-fade-in stagger-5">
        <a
          href="#stats"
          className="flex flex-col items-center gap-3 text-muted-foreground hover:text-accent transition-colors duration-300 group"
        >
          <span className="text-xs uppercase tracking-widest font-medium">Scroll</span>
          <ChevronDown className="w-5 h-5 animate-bounce group-hover:text-accent" />
        </a>
      </div>
    </section>
  )
}
