"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/animated-section"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-24 lg:py-32 bg-card border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <AnimatedSection className="text-center max-w-3xl mx-auto">
          <p className="text-accent text-sm font-medium uppercase tracking-[0.2em] mb-4">
            Start a Project
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6 text-balance">
            Let&apos;s Create Something{" "}
            <span className="text-accent">Extraordinary</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10">
            Ready to transform your vision into an unforgettable experience? Our team is here to bring your ideas to life with creativity, strategy, and flawless execution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-foreground/20 text-foreground hover:bg-foreground/10 font-medium px-8"
            >
              <Link href="/work">View Our Work</Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
