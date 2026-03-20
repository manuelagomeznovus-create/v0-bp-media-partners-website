"use client"

import { AnimatedSection } from "@/components/animated-section"

const steps = [
  {
    number: "01",
    title: "Strategy",
    description: "We begin by understanding your brand, objectives, and audience. Through research and collaboration, we develop a strategic foundation that guides every decision.",
  },
  {
    number: "02",
    title: "Creative Concept",
    description: "Our creative team transforms strategy into compelling concepts. We design experiences that tell your story and create emotional connections with your audience.",
  },
  {
    number: "03",
    title: "Production",
    description: "With meticulous planning and world-class partners, we bring concepts to life. Every detail is carefully orchestrated to ensure flawless execution.",
  },
  {
    number: "04",
    title: "Execution",
    description: "On event day, our experienced team manages every aspect of production. We deliver seamless experiences that exceed expectations and create lasting impact.",
  },
]

export function ApproachSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-accent text-sm font-medium uppercase tracking-[0.2em] mb-4">
            Our Approach
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            From Vision to Reality
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            We combine strategy, creativity, and production excellence to create brand experiences that captivate audiences and deliver measurable results.
          </p>
        </AnimatedSection>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <AnimatedSection key={step.number} delay={index * 150}>
              <div className="relative">
                {/* Connector Line (hidden on last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-border" />
                )}
                
                <div className="text-accent font-serif text-5xl lg:text-6xl font-bold mb-4 opacity-30">
                  {step.number}
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
