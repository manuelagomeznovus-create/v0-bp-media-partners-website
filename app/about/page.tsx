import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AnimatedSection } from "@/components/animated-section"
import { AnimatedCounter } from "@/components/animated-counter"
import { CTASection } from "@/components/sections/cta"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | BP Media + Partners",
  description: "Learn about BP Media + Partners, a Miami-based experiential marketing and event production agency founded in 2006 with 20+ years of experience creating unforgettable brand experiences.",
}

const stats = [
  { value: 20, suffix: "+", label: "Years of Experience" },
  { value: 3000, suffix: "+", label: "Events Produced" },
  { value: 50, suffix: "+", label: "Countries" },
  { value: 2000, suffix: "+", label: "Brands Served" },
]

const team = [
  {
    name: "Bryan Pena",
    role: "CEO & Founder",
    bio: "Founder and visionary behind BP Media + Partners since 2006, Bryan leads the company with passion for creating extraordinary experiences.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop",
  },
  {
    name: "Production Excellence",
    role: "Project Manager",
    bio: "Our Project Manager ensures every event detail is perfectly orchestrated, delivering exceptional experiences on time and on budget.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
  },
  {
    name: "Creative Vision",
    role: "Designer",
    bio: "Our lead Designer brings creative concepts to life, crafting visual identities and experiences that captivate audiences.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop",
  },
  {
    name: "Technical Innovation",
    role: "Developer",
    bio: "Our Developer creates cutting-edge digital solutions and interactive experiences that elevate every event production.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop",
  },
  {
    name: "Strategic Growth",
    role: "Marketing Manager",
    bio: "Leading our marketing initiatives, our Marketing Manager drives brand awareness and strategic partnerships for our clients.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
  },
  {
    name: "Business Development",
    role: "Sales Manager",
    bio: "Our Sales Manager builds lasting client relationships and identifies new opportunities for growth and collaboration.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1970&auto=format&fit=crop",
  },
  {
    name: "Client Excellence",
    role: "Customer Support",
    bio: "Our dedicated Customer Support team ensures seamless communication and exceptional service throughout every project.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1970&auto=format&fit=crop",
  },
  {
    name: "Operational Excellence",
    role: "Operations Manager",
    bio: "Our Operations Manager oversees logistics and execution, ensuring flawless delivery of every event and production.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop",
  },
]

const values = [
  {
    title: "Excellence",
    description: "We pursue excellence in every detail, from initial concept to final execution, ensuring every experience exceeds expectations.",
  },
  {
    title: "Innovation",
    description: "We constantly push creative boundaries, embracing new technologies and approaches to create groundbreaking experiences.",
  },
  {
    title: "Partnership",
    description: "We build lasting relationships with our clients, becoming trusted partners in their success and brand journey.",
  },
  {
    title: "Integrity",
    description: "We operate with transparency and honesty, delivering on our promises and maintaining the highest ethical standards.",
  },
]

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <AnimatedSection>
                <p className="text-accent text-sm font-medium uppercase tracking-[0.2em] mb-4">
                  About BP Media + Partners
                </p>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight text-balance">
                  Creating Extraordinary Experiences Since 2006
                </h1>
                <p className="text-muted-foreground text-lg lg:text-xl leading-relaxed">
                  BP Media + Partners is a Miami-based experiential marketing and event production agency with international operations and a strong network of partners across the Americas.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={200}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop"
                    alt="BP Media + Partners team at work"
                    fill
                    className="object-cover"
                  />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 lg:py-20 bg-card border-y border-border">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              {stats.map((stat, index) => (
                <AnimatedSection key={index} delay={index * 100}>
                  <div className="text-center">
                    <div className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-2">
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
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="py-24 lg:py-32">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <AnimatedSection className="text-center mb-16">
                <p className="text-accent text-sm font-medium uppercase tracking-[0.2em] mb-4">
                  Our Story
                </p>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
                  Two Decades of Excellence
                </h2>
              </AnimatedSection>
              
              <div className="grid gap-8 text-muted-foreground text-lg leading-relaxed">
                <AnimatedSection delay={100}>
                  <p>
                    Founded in Miami in 2006, BP Media + Partners began with a vision to transform the way brands connect with their audiences. What started as a boutique event production company has evolved into a full-service experiential marketing agency with operations spanning the Americas and international markets.
                  </p>
                </AnimatedSection>
                <AnimatedSection delay={200}>
                  <p>
                    Over two decades, we have had the privilege of producing over 3,000 events for more than 2,000 brands and organizations worldwide. From intimate luxury activations to large-scale corporate conferences and cultural festivals, each project has reinforced our commitment to excellence and innovation.
                  </p>
                </AnimatedSection>
                <AnimatedSection delay={300}>
                  <p>
                    Today, BP Media + Partners stands as a trusted partner for global brands seeking to create meaningful connections through experiential marketing. Our team combines strategic thinking, creative excellence, and flawless production execution to deliver experiences that captivate audiences and drive measurable results. We Make it Happen!
                  </p>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 lg:py-32 bg-card">
          <div className="container mx-auto px-6 lg:px-12">
            <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-accent text-sm font-medium uppercase tracking-[0.2em] mb-4">
                Our Values
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
                What Drives Us
              </h2>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <AnimatedSection key={value.title} delay={index * 100}>
                  <div className="p-6 bg-background rounded-lg border border-border h-full">
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-24 lg:py-32">
          <div className="container mx-auto px-6 lg:px-12">
            <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-accent text-sm font-medium uppercase tracking-[0.2em] mb-4">
                Our Team
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
                Meet the Experts
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our team of seasoned professionals brings decades of combined experience in experiential marketing, event production, and public relations.
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <AnimatedSection key={member.role} delay={index * 100}>
                  <div className="group">
                    <div className="relative aspect-[3/4] overflow-hidden rounded-lg mb-4">
                      <Image
                        src={member.image}
                        alt={member.role}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                    </div>
                    <h3 className="font-serif text-lg font-semibold text-foreground mb-1">
                      {member.name}
                    </h3>
                    <p className="text-accent text-sm font-medium mb-2">
                      {member.role}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  )
}
