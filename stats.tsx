"use client"

import { AnimatedCounter } from "@/components/animated-counter"
import { AnimatedSection } from "@/components/animated-section"

const stats = [
  { value: 20, suffix: "+", label: "Years of Experience" },
  { value: 3000, suffix: "+", label: "Events Produced" },
  { value: 50, suffix: "+", label: "Countries Reached" },
  { value: 2000, suffix: "+", label: "Brands Served" },
]

export function StatsSection() {
  return (
    <section id="stats" className="section-spacing bg-card relative overflow-hidden border-y border-border">
      {/* Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />
      
      <div className="container-padding mx-auto">
        <AnimatedSection>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gradient mb-4 group-hover:scale-105 transition-transform duration-300">
                  <AnimatedCounter
                    end={stat.value}
                    suffix={stat.suffix}
                    duration={2500}
                  />
                </div>
                <p className="text-xs md:text-sm text-muted-foreground uppercase tracking-[0.2em] font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
