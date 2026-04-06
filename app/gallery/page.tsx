"use client"

import { useState } from "react"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AnimatedSection } from "@/components/animated-section"
import { X, ChevronLeft, ChevronRight, Play, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const categories = [
  "All",
  "Events",
  "Brand Activations",
  "Corporate Conferences",
  "Festivals",
  "Experiential Marketing",
]

const galleryItems = [
  {
    id: 1,
    title: "Samsung S26 Product Launch",
    description: "Launch of Samsung’s S26 in the Dominican Republic, delivering a powerful brand experience.",
    location: "Dominican Republic",
    type: "Corporate Event",
    mediaType: "photo" as const,
    image: "/images/samsung.bpmedia2026.jpg",
    category: "Events",
  },
  {
    id: 2,
    title:  "Brand Activation",
    description: "Days to Shine: A Brand Activation Experience for Ron Barceló",
    location: "Miami, FL",
    type: "Brand Activation",
    mediaType: "photo" as const,
    image: "/images/viveahora.jpeg",
    category: "Brand Activations",
  },
  {
    id: 3,
    title: "Corporate Leadership Summit",
    description: "International business conference bringing together industry leaders and innovators from around the world.",
    location: "New York, NY",
    type: "Conference",
    mediaType: "photo" as const,
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop",
    category: "Corporate Conferences",
  },
  {
    id: 4,
    title: "Fashion Week Production",
    description: "High-profile runway show production for international fashion week featuring world-renowned designers.",
    location: "New York, NY",
    type: "Fashion Event",
    mediaType: "video" as const,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2032&auto=format&fit=crop",
    category: "Events",
  },
  {
    id: 5,
    title: "Cultural Music Festival",
    description: "Large-scale music and arts festival celebrating diverse cultural expressions with international artists.",
    location: "Miami, FL",
    type: "Festival",
    mediaType: "photo" as const,
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop",
    category: "Festivals",
  },
  {
    id: 6,
    title: "Product Experience Center",
    description: "Interactive showroom design and experiential retail space activation for automotive brand.",
    location: "Los Angeles, CA",
    type: "Experiential",
    mediaType: "photo" as const,
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=2070&auto=format&fit=crop",
    category: "Experiential Marketing",
  },
  {
    id: 7,
    title: "Tech Conference Keynote",
    description: "Main stage production for annual technology conference featuring world-class speakers and demonstrations.",
    location: "Austin, TX",
    type: "Conference",
    mediaType: "video" as const,
    image: "https://images.unsplash.com/photo-1591115765373-5207764f72e4?q=80&w=2070&auto=format&fit=crop",
    category: "Corporate Conferences",
  },
  {
    id: 8,
    title: "Art Basel Experience",
    description: "Exclusive brand experience during Art Basel featuring custom installations and private events.",
    location: "Miami Beach, FL",
    type: "Brand Activation",
    mediaType: "photo" as const,
    image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=2070&auto=format&fit=crop",
    category: "Brand Activations",
  },
  {
    id: 9,
    title: "Summer Music Festival",
    description: "Multi-day outdoor music festival featuring major headliners and emerging artists.",
    location: "Coachella Valley, CA",
    type: "Festival",
    mediaType: "photo" as const,
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=2070&auto=format&fit=crop",
    category: "Festivals",
  },
  {
    id: 10,
    title: "Automotive Launch Event",
    description: "Exclusive vehicle launch experience for luxury automotive brand with interactive displays.",
    location: "Detroit, MI",
    type: "Product Launch",
    mediaType: "photo" as const,
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop",
    category: "Events",
  },
  {
    id: 11,
    title: "Pop-Up Brand Experience",
    description: "Temporary retail activation creating immersive brand moments in high-traffic locations.",
    location: "Chicago, IL",
    type: "Experiential",
    mediaType: "photo" as const,
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2069&auto=format&fit=crop",
    category: "Experiential Marketing",
  },
  {
    id: 12,
    title: "Annual Gala Dinner",
    description: "Prestigious black-tie gala event featuring world-class entertainment and dining experiences.",
    location: "Palm Beach, FL",
    type: "Corporate Event",
    mediaType: "photo" as const,
    image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=2070&auto=format&fit=crop",
    category: "Events",
  },
  {
    id: 13,
    title: "Corporate Team Building",
    description: "Interactive team building experience designed to strengthen corporate culture and engagement.",
    location: "Orlando, FL",
    type: "Corporate Event",
    mediaType: "photo" as const,
    image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=2070&auto=format&fit=crop",
    category: "Corporate Conferences",
  },
  {
    id: 14,
    title: "Sports Event Production",
    description: "Large-scale sports event production with live entertainment and fan experiences.",
    location: "Miami, FL",
    type: "Sports Event",
    mediaType: "video" as const,
    image: "https://images.unsplash.com/photo-1461896836934- voices-2c37e9fbe05?q=80&w=2070&auto=format&fit=crop",
    category: "Events",
  },
  {
    id: 15,
    title: "Luxury Wedding Production",
    description: "Extravagant destination wedding with custom design elements and entertainment.",
    location: "Cancun, Mexico",
    type: "Social Event",
    mediaType: "photo" as const,
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop",
    category: "Events",
  },
  {
    id: 16,
    title: "Food & Wine Festival",
    description: "Culinary celebration featuring renowned chefs and premium wine selections.",
    location: "Napa Valley, CA",
    type: "Festival",
    mediaType: "photo" as const,
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop",
    category: "Festivals",
  },
  {
    id: 17,
    title: "Interactive Brand Installation",
    description: "Cutting-edge interactive installation creating memorable brand touchpoints.",
    location: "Las Vegas, NV",
    type: "Experiential",
    mediaType: "photo" as const,
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop",
    category: "Experiential Marketing",
  },
  {
    id: 18,
    title: "Award Show Production",
    description: "Full production of prestigious industry awards ceremony with celebrity presenters.",
    location: "Los Angeles, CA",
    type: "Awards Event",
    mediaType: "video" as const,
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop",
    category: "Events",
  },
  {
    id: 19,
    title: "Product Sampling Campaign",
    description: "Nationwide product sampling tour reaching consumers in key markets.",
    location: "Multiple Cities",
    type: "Brand Activation",
    mediaType: "photo" as const,
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2032&auto=format&fit=crop",
    category: "Brand Activations",
  },
  {
    id: 20,
    title: "Charity Benefit Gala",
    description: "Philanthropic event raising awareness and funds for important causes.",
    location: "New York, NY",
    type: "Charity Event",
    mediaType: "photo" as const,
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=2070&auto=format&fit=crop",
    category: "Events",
  },
]

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedItem, setSelectedItem] = useState<typeof galleryItems[0] | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showFilters, setShowFilters] = useState(false)

  const filteredItems = selectedCategory === "All"
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory)

  const openModal = (item: typeof galleryItems[0], index: number) => {
    setSelectedItem(item)
    setCurrentIndex(index)
  }

  const closeModal = () => {
    setSelectedItem(null)
  }

  const navigateModal = (direction: "prev" | "next") => {
    const newIndex = direction === "prev"
      ? (currentIndex - 1 + filteredItems.length) % filteredItems.length
      : (currentIndex + 1) % filteredItems.length
    setCurrentIndex(newIndex)
    setSelectedItem(filteredItems[newIndex])
  }

  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
          <div className="container mx-auto px-6 lg:px-12">
            <AnimatedSection className="max-w-3xl">
              <p className="text-accent text-sm font-medium uppercase tracking-[0.2em] mb-4">
                Event Gallery
              </p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
                Capturing Extraordinary Moments
              </h1>
              <p className="text-muted-foreground text-lg lg:text-xl leading-relaxed">
                Explore our collection of photos and videos from events, brand activations, and experiences we have produced around the world.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Filters */}
        <section className="pb-8">
          <div className="container mx-auto px-6 lg:px-12">
            <AnimatedSection delay={100}>
              {/* Mobile Filter Toggle */}
              <div className="lg:hidden mb-4">
                <Button
                  variant="outline"
                  onClick={() => setShowFilters(!showFilters)}
                  className="border-foreground/20 text-foreground"
                >
                  <Filter className="w-4 h-4 mr-2" />
                  Filter by Category
                </Button>
              </div>

              {/* Filter Pills */}
              <div className={cn(
                "flex flex-wrap gap-2",
                showFilters ? "block" : "hidden lg:flex"
              )}>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={cn(
                      "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                      selectedCategory === category
                        ? "bg-accent text-accent-foreground"
                        : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
                    )}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="pb-24 lg:pb-32">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredItems.map((item, index) => (
                <AnimatedSection
                  key={item.id}
                  delay={index * 50}
                  className={cn(
                    index === 0 || index === 5 || index === 8 ? "md:col-span-2 md:row-span-2" : ""
                  )}
                >
                  <button
                    onClick={() => openModal(item, index)}
                    className="group relative w-full h-full min-h-[200px] overflow-hidden rounded-lg block"
                    style={{
                      aspectRatio: index === 0 || index === 5 || index === 8 ? "1/1" : "4/3"
                    }}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4 md:p-6">
                      {item.mediaType === "video" && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-accent flex items-center justify-center">
                            <Play className="w-5 h-5 md:w-6 md:h-6 text-accent-foreground ml-1" fill="currentColor" />
                          </div>
                        </div>
                      )}
                      <p className="text-accent text-xs uppercase tracking-wider mb-1 md:mb-2">
                        {item.type}
                      </p>
                      <h3 className="font-serif text-sm md:text-lg font-semibold text-foreground mb-1">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-xs md:text-sm line-clamp-2 hidden md:block">
                        {item.description}
                      </p>
                    </div>
                  </button>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
          onClick={closeModal}
        >
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 md:top-8 md:right-8 p-2 text-foreground hover:text-accent transition-colors z-10"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); navigateModal("prev"); }}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-2 text-foreground hover:text-accent transition-colors z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); navigateModal("next"); }}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-2 text-foreground hover:text-accent transition-colors z-10"
            aria-label="Next image"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          <div
            className="max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-video overflow-hidden rounded-lg mb-6">
              <Image
                src={selectedItem.image}
                alt={selectedItem.title}
                fill
                className="object-cover"
              />
              {selectedItem.mediaType === "video" && (
                <div className="absolute inset-0 flex items-center justify-center bg-background/40">
                  <div className="w-20 h-20 rounded-full bg-accent flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-accent-foreground ml-1" fill="currentColor" />
                  </div>
                </div>
              )}
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-4 mb-3">
                <span className="text-accent text-sm uppercase tracking-wider">
                  {selectedItem.type}
                </span>
                <span className="text-muted-foreground">•</span>
                <span className="text-muted-foreground text-sm">
                  {selectedItem.location}
                </span>
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-3">
                {selectedItem.title}
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {selectedItem.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
