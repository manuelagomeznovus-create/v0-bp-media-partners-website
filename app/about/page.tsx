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
    bio: "Founder and visionary behind BP Media + Partners since 2006, Bryan leads the company with passion, creativity and determination to create extraordinary experiences.",
    image: "/images/bryanbp.jpg",
  },
  {
    name: "Jeannine Alvarado",
    role: "Vice President & Operations Manager",
    bio: "Oversees daily operations and ensures all projects run smoothly and efficiently. Known for strong organizational skills and leadership that enhance team performance and client satisfaction.",
    image: "/images/jeanibp.jpg",
  },
  {
    name: "Claudia Alvarado",
    role: "Digital Marketing Manager",
    bio: "Leads digital strategy, including online campaigns, social media, and brand presence. Focused on delivering impactful, engagement-driven marketing solutions.",
    image: "/images/claudianewbp.jpg"

  },
  {
    name: "Manuela Gomez",
    role: "PR & Event Coordinator",
    bio: "Manages public relations efforts and coordinates events with precision and creativity, fostering meaningful connections and enhancing brand visibility.",
    image: "/images/manuelagomez.jpg",
  },
  {
    name: "Pablo Delgado",
    role: "Chief Financial Officer",
    bio: "Responsible for financial strategy, planning, and overall stability. Ensures sustainable growth through sound financial management.",
    image: "/images/pablofinancial.jpeg",
  },
  {
    name: "Monica Uribe",
    role: "Events Staff Manager",
    bio: "Leads and coordinates event staff, ensuring professionalism and excellence in every execution. Plays a key role in delivering seamless event experiences.",
    image: "/images/laotrabp.jpg",
  },
  {
    name: "Hendrick Rojas",
    role: "Event Production Manager",
    bio: "Oversees technical and production aspects of events, ensuring perfect execution and high-quality results.",
    image: "/images/hendrick_socialmedia.jpg"
  },
  {
    name: "Melanie Tillbrook",
    role: "Talent Acquisition Manager",
    bio: "Leads recruitment and talent development, building a strong, skilled, and dynamic team.",
    image: "/images/stefani.jpg",
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
                  Creating Extraordinary Experiences For Over 20 Years
                </h1>
                <p className="text-muted-foreground text-lg lg:text-xl leading-relaxed">
                  BP Media + Partners is a Miami-based experiential marketing and event production agency with international operations and a strong network of partners across the Globe.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={200}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                  <Image
                    src="/brianmedia.JPG"
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
                    Today, BP Media + Partners stands as a trusted partner for global brands seeking to create meaningful connections through experiential marketing. Our team combines strategic thinking, creative excellence, and flawless production execution to deliver experiences that captivate audiences and drive measurable results. WE MAKE IT HAPPEN!
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
                        className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
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
