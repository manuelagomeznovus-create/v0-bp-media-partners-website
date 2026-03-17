"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/animated-section"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="section-spacing bg-background relative overflow-hidden border-t border-border">
      {/* Gradient Backgrounds */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/8 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full filter blur-3xl pointer-events-none" />
      
      <div className="container-padding mx-auto relative z-10">
        <AnimatedSection className="text-center max-w-4xl mx-auto">
          <p className="text-accent text-xs md:text-sm font-medium uppercase tracking-[0.3em] mb-6">
            Start a Project
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-8 text-balance leading-tight">
            Let&apos;s Create Something{" "}
            <span className="text-gradient">Extraordinary</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
            Ready to transform your vision into an unforgettable experience? Our team is here to bring your ideas to life with creativity, strategy, and flawless execution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-10 py-7 text-base rounded-lg transition-all duration-300 hover-lift shadow-lg hover:shadow-xl"
            >
              <Link href="/contact" className="flex items-center gap-2">
                Start a Project
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="border-2 border-accent text-accent hover:bg-accent/5 font-semibold px-10 py-7 text-base rounded-lg transition-all duration-300 hover-lift bg-transparent"
            >
              <Link href="/work">View Our Work</Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
