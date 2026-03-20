"use client"

import { AnimatedSection } from "@/components/animated-section"
import { MapPin } from "lucide-react"

const regions = [
  {
    name: "United States",
    cities: ["Miami", "New York", "Los Angeles", "Chicago"],
  },
  {
    name: "Caribbean",
    cities: ["San Juan", "Nassau", "Kingston", "Punta Cana"],
  },
  {
    name: "Latin America",
    cities: ["Mexico City", "São Paulo", "Buenos Aires", "Bogotá"],
  },
]

export function GlobalPresenceSection() {
  return (
    <section className="py-24 lg:py-32 bg-card overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <AnimatedSection>
            <p className="text-accent text-sm font-medium uppercase tracking-[0.2em] mb-4">
              Global Presence
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight text-balance">
              Worldwide Event Production
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              With headquarters in Miami and a global network of partners and production teams, we deliver exceptional events across the Americas and beyond. Our international reach combined with local expertise ensures seamless execution in any market.
            </p>

            {/* Regions */}
            <div className="grid sm:grid-cols-3 gap-8">
              {regions.map((region) => (
                <div key={region.name}>
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-accent" />
                    {region.name}
                  </h4>
                  <ul className="flex flex-col gap-2">
                    {region.cities.map((city) => (
                      <li key={city} className="text-sm text-muted-foreground">
                        {city}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* World Map Visualization */}
          <AnimatedSection delay={200}>
            <div className="relative">
              {/* Stylized Map Background */}
              <div className="relative aspect-square">
                <svg
                  viewBox="0 0 400 400"
                  className="w-full h-full text-border"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Grid Lines */}
                  {[...Array(9)].map((_, i) => (
                    <line
                      key={`h-${i}`}
                      x1="0"
                      y1={i * 50}
                      x2="400"
                      y2={i * 50}
                      stroke="currentColor"
                      strokeWidth="0.5"
                      opacity="0.3"
                    />
                  ))}
                  {[...Array(9)].map((_, i) => (
                    <line
                      key={`v-${i}`}
                      x1={i * 50}
                      y1="0"
                      x2={i * 50}
                      y2="400"
                      stroke="currentColor"
                      strokeWidth="0.5"
                      opacity="0.3"
                    />
                  ))}
                  
                  {/* Americas Outline (simplified) */}
                  <path
                    d="M100,80 Q120,70 140,75 L160,90 Q170,100 165,120 L170,150 Q175,170 160,190 L150,220 Q145,250 160,280 L170,320 Q175,350 160,370 L140,380"
                    stroke="currentColor"
                    strokeWidth="2"
                    opacity="0.5"
                    fill="none"
                  />
                  <path
                    d="M140,200 Q180,210 200,230 L220,260 Q230,290 210,320 L190,350 Q170,370 150,360"
                    stroke="currentColor"
                    strokeWidth="2"
                    opacity="0.5"
                    fill="none"
                  />
                </svg>

                {/* Location Dots */}
                <div className="absolute inset-0">
                  {/* Miami */}
                  <div className="absolute top-[45%] left-[35%] animate-pulse">
                    <div className="w-4 h-4 rounded-full bg-accent shadow-lg shadow-accent/50" />
                    <div className="absolute inset-0 w-4 h-4 rounded-full bg-accent animate-ping opacity-50" />
                  </div>
                  
                  {/* New York */}
                  <div className="absolute top-[35%] left-[38%]">
                    <div className="w-2 h-2 rounded-full bg-foreground/60" />
                  </div>
                  
                  {/* Mexico City */}
                  <div className="absolute top-[52%] left-[25%]">
                    <div className="w-2 h-2 rounded-full bg-foreground/60" />
                  </div>
                  
                  {/* São Paulo */}
                  <div className="absolute top-[72%] left-[45%]">
                    <div className="w-2 h-2 rounded-full bg-foreground/60" />
                  </div>
                  
                  {/* Buenos Aires */}
                  <div className="absolute top-[82%] left-[40%]">
                    <div className="w-2 h-2 rounded-full bg-foreground/60" />
                  </div>
                </div>

                {/* Connecting Lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="oklch(0.75 0.12 85)" stopOpacity="0.2" />
                      <stop offset="50%" stopColor="oklch(0.75 0.12 85)" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="oklch(0.75 0.12 85)" stopOpacity="0.2" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M140,180 Q160,140 152,140"
                    stroke="url(#lineGradient)"
                    strokeWidth="1"
                    fill="none"
                    strokeDasharray="4 4"
                  />
                  <path
                    d="M140,180 Q100,200 100,208"
                    stroke="url(#lineGradient)"
                    strokeWidth="1"
                    fill="none"
                    strokeDasharray="4 4"
                  />
                  <path
                    d="M140,180 Q160,260 180,288"
                    stroke="url(#lineGradient)"
                    strokeWidth="1"
                    fill="none"
                    strokeDasharray="4 4"
                  />
                </svg>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
