"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/animated-section"
import { ArrowRight } from "lucide-react"

export function AboutPreviewSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <AnimatedSection className="order-2 lg:order-1">
            <p className="text-accent text-sm font-medium uppercase tracking-[0.2em] mb-4">
              About the Agency
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight text-balance">
              Crafting Extraordinary Experiences For Over 20 Years
            </h2>
            <div className="flex flex-col gap-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                BP Media + Partners is a Miami-based experiential marketing and event production agency with international operations and a strong network of partners across the Globe.
              </p>
              <p>
                We combine strategic thinking with creative excellence and flawless production execution to create brand experiences that captivate audiences and drive meaningful results.
              </p>
              <p>
                From intimate luxury activations to large-scale corporate conferences and cultural festivals, we bring brands to life through immersive experiences that leave lasting impressions. We Make it Happen!
              </p>
            </div>
            <Button
              asChild
              variant="outline"
              className="border-foreground/20 text-foreground hover:bg-foreground/10 font-medium group"
            >
              <Link href="/about" className="flex items-center gap-2">
                Learn More About Us
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </AnimatedSection>

          {/* Image */}
          <AnimatedSection delay={200} className="order-1 lg:order-2">
            <div className="relative aspect-[4/3] lg:aspect-[3/4] overflow-hidden rounded-lg">
              <Image
                src="/brianmedia.JPG"
                alt="Event production team at work"
                fill
                className="object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
