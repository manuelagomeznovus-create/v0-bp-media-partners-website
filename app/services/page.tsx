import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AnimatedSection } from "@/components/animated-section"
import { CTASection } from "@/components/sections/cta"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Megaphone, Users, Palette, Music, Sofa, CheckCircle } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Services | BP Media + Partners",
  description: "Comprehensive experiential marketing, event production, public relations, and brand activation services from BP Media + Partners.",
}

const services = [
  {
    id: "event-production",
    icon: Sparkles,
    title: "Event Production",
    subtitle: "Flawless Execution, Extraordinary Results",
    description: "End-to-end event production for corporate conferences, product launches, galas, and large-scale productions with meticulous attention to detail.",
    image: "/images/activacion.jpeg",
    features: [
      "Corporate conferences and conventions",
      "Product launches and reveals",
      "Gala dinners and award ceremonies",
      "Trade shows and exhibitions",
      "Press conferences and media events",
      "Full technical production and staging",
    ],
  },
  {
    id: "experiential-marketing",
    icon: Megaphone,
    title: "Experiential Marketing",
    subtitle: "Immersive Brand Experiences",
    description: "Immersive brand experiences that engage audiences, create emotional connections, and generate lasting brand loyalty.",
    image: "/images/mkt.jpeg",
    features: [
      "Interactive brand installations",
      "Pop-up experiences and activations",
      "Sampling and demonstration programs",
      "Immersive retail experiences",
      "Mobile brand experiences",
      "Digital and hybrid experiences",
    ],
  },
  {
    id: "public-relations",
    icon: Users,
    title: "Public Relations",
    subtitle: "Strategic Communications",
    description: "Strategic communications and media relations that amplify your brand story and build meaningful connections with your audiences.",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=2070&auto=format&fit=crop",
    features: [
      "Media relations and press coverage",
      "Influencer partnerships and campaigns",
      "Crisis communications management",
      "Corporate communications",
      "Social media strategy",
      "Content creation and storytelling",
    ],
  },
  {
    id: "brand-activations",
    icon: Palette,
    title: "Brand Activations",
    subtitle: "Bringing Brands to Life",
    description: "Creative activations that bring brands to life through interactive experiences, pop-ups, and memorable touchpoints.",
    image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=2070&auto=format&fit=crop",
    features: [
      "Launch events and unveilings",
      "Brand ambassador programs",
      "Sponsorship activations",
      "Guerrilla marketing campaigns",
      "Retail activations",
      "Festival and event sponsorships",
    ],
  },
  {
    id: "cultural-productions",
    icon: Music,
    title: "Cultural Productions",
    description: "Festival productions, cultural events, and entertainment experiences that celebrate art, music, and community.",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop",
    features: [
      "Music festivals and concerts",
      "Art exhibitions and installations",
      "Cultural celebrations and parades",
      "Community events",
      "Entertainment productions",
      "Heritage and cultural programming",
    ],
  },
  {
    id: "event-rentals",
    icon: Sofa,
    title: "Event Elements & Decor Rentals",
    subtitle: "Premium Event Essentials",
    description: "Premium event furniture and decor rentals to transform any space into an extraordinary venue.",
    image: "/images/eventsevents.JPG",
    features: [
      "Luxury furniture collections",
      "Lighting and decor rentals",
      "Staging and platform systems",
      "Audio-visual equipment",
      "Tenting and structures",
      "Custom fabrication",
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
          <div className="container mx-auto px-6 lg:px-12">
            <AnimatedSection className="max-w-3xl">
              <p className="text-accent text-sm font-medium uppercase tracking-[0.2em] mb-4">
                Our Services
              </p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
                Full-Service Experiential Agency
              </h1>
              <p className="text-muted-foreground text-lg lg:text-xl leading-relaxed">
                From strategy to execution, we deliver comprehensive solutions that transform your vision into extraordinary experiences that captivate audiences and drive results.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Services List */}
        {services.map((service, index) => (
          <section
            key={service.id}
            id={service.id}
            className={index % 2 === 0 ? "py-24 lg:py-32" : "py-24 lg:py-32 bg-card"}
          >
            <div className="container mx-auto px-6 lg:px-12">
              <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${index % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
                {/* Content */}
                <AnimatedSection className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-accent" />
                    </div>
                    <p className="text-accent text-sm font-medium uppercase tracking-wider">
                      {service.subtitle}
                    </p>
                  </div>
                  <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                    {service.description}
                  </p>
                  
                  <ul className="grid sm:grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <span className="text-muted-foreground text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    className="bg-accent text-accent-foreground hover:bg-accent/90 font-medium"
                  >
                    <Link href="/contact" className="flex items-center gap-2">
                      Let’s Discuss Your Project
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </AnimatedSection>

                {/* Image */}
                <AnimatedSection delay={200} className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </section>
        ))}

        {/* Process Section */}
        <section className="py-24 lg:py-32 bg-card">
          <div className="container mx-auto px-6 lg:px-12">
            <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-accent text-sm font-medium uppercase tracking-[0.2em] mb-4">
                Our Process
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
                How We Work
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our proven methodology ensures every project is delivered with excellence, from initial concept to final execution.
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Discovery", description: "We begin by understanding your brand, objectives, target audience, and vision through collaborative workshops and research." },
                { step: "02", title: "Strategy", description: "Our team develops a comprehensive strategy that aligns creative concepts with your business goals and audience insights." },
                { step: "03", title: "Creation", description: "From concept design to production planning, we bring your vision to life with creativity and meticulous attention to detail." },
                { step: "04", title: "Execution", description: "Our experienced team manages every aspect of production, delivering flawless experiences that exceed expectations." },
              ].map((item, i) => (
                <AnimatedSection key={item.step} delay={i * 100}>
                  <div className="relative p-6 bg-background rounded-lg border border-border h-full">
                    <div className="text-accent font-serif text-4xl font-bold mb-4 opacity-30">
                      {item.step}
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
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
