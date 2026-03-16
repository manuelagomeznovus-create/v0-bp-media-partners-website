"use client"

import { AnimatedCounter } from "@/components/animated-counter"
import { AnimatedSection } from "@/components/animated-section"

const stats = [
  { value: 30, suffix: "+", label: "Years of Experience" },
  { value: 3000, suffix: "+", label: "Events Produced" },
  { value: 50, suffix: "+", label: "Countries Reached" },
  { value: 2000, suffix: "+", label: "Brands Served" },
]

export function StatsSection() {
  return (
    <section id="stats" className="py-24 lg:py-32 bg-card border-y border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <AnimatedSection>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-2">
                  <AnimatedCounter
                    end={stat.value}
                    suffix={stat.suffix}
                    duration={2500}
                  />
                </div>
                <p className="text-sm md:text-base text-muted-foreground uppercase tracking-wider">
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
