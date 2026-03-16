"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/animated-section"
import { ArrowRight, X, ChevronLeft, ChevronRight, Play } from "lucide-react"

const galleryItems = [
  {
    id: 1,
    title: "Corporate Gala Event",
    description: "Elegant corporate gala with stunning lighting design and sophisticated ambiance for luxury brand.",
    type: "photo" as const,
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop",
    category: "Corporate",
  },
  {
    id: 2,
    title: "Luxury Brand Activation",
    description: "Immersive brand experience for premium luxury fashion house featuring interactive installations.",
    type: "photo" as const,
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop",
    category: "Brand Activation",
  },
  {
    id: 3,
    title: "Executive Conference",
    description: "International business conference bringing together industry leaders and innovators.",
    type: "photo" as const,
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop",
    category: "Corporate",
  },
  {
    id: 4,
    title: "Fashion Week Production",
    description: "High-profile runway show production for international fashion week.",
    type: "video" as const,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2032&auto=format&fit=crop",
    category: "Fashion",
  },
  {
    id: 5,
    title: "Music Festival",
    description: "Large-scale music and arts festival celebrating diverse cultural expressions.",
    type: "photo" as const,
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop",
    category: "Festival",
  },
  {
    id: 6,
    title: "Product Experience Center",
    description: "Interactive showroom design and experiential retail space activation.",
    type: "photo" as const,
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=2070&auto=format&fit=crop",
    category: "Experiential",
  },
  {
    id: 7,
    title: "Award Ceremony",
    description: "Prestigious award ceremony with red carpet and VIP guest experience.",
    type: "photo" as const,
    image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=2070&auto=format&fit=crop",
    category: "Corporate",
  },
  {
    id: 8,
    title: "Concert Production",
    description: "Large-scale concert production with state-of-the-art sound and lighting systems.",
    type: "video" as const,
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=2070&auto=format&fit=crop",
    category: "Entertainment",
  },
  {
    id: 9,
    title: "Trade Show Exhibition",
    description: "Custom trade show booth design and experiential marketing activation.",
    type: "photo" as const,
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop",
    category: "Exhibitions",
  },
  {
    id: 10,
    title: "Private Party",
    description: "Exclusive private celebration with custom decor and entertainment.",
    type: "photo" as const,
    image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=2070&auto=format&fit=crop",
    category: "Social",
  },
  {
    id: 11,
    title: "Brand Launch Event",
    description: "High-impact brand launch featuring product reveals and media coverage.",
    type: "photo" as const,
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2032&auto=format&fit=crop",
    category: "Brand Activation",
  },
  {
    id: 12,
    title: "Networking Reception",
    description: "Elegant networking event connecting industry professionals and thought leaders.",
    type: "photo" as const,
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=2070&auto=format&fit=crop",
    category: "Corporate",
  },
]

export function GalleryPreviewSection() {
  const [selectedItem, setSelectedItem] = useState<typeof galleryItems[0] | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openModal = (item: typeof galleryItems[0], index: number) => {
    setSelectedItem(item)
    setCurrentIndex(index)
  }

  const closeModal = () => {
    setSelectedItem(null)
  }

  const navigateModal = (direction: "prev" | "next") => {
    const newIndex = direction === "prev"
      ? (currentIndex - 1 + galleryItems.length) % galleryItems.length
      : (currentIndex + 1) % galleryItems.length
    setCurrentIndex(newIndex)
    setSelectedItem(galleryItems[newIndex])
  }

  return (
    <section className="py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <AnimatedSection className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="text-accent text-sm font-medium uppercase tracking-[0.2em] mb-4">
              Event Gallery
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
              Moments That Matter
            </h2>
          </div>
          <Button
            asChild
            variant="outline"
            className="border-foreground/20 text-foreground hover:bg-foreground/10 font-medium w-fit"
          >
            <Link href="/gallery" className="flex items-center gap-2">
              View Full Gallery
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </AnimatedSection>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryItems.map((item, index) => (
            <AnimatedSection
              key={item.id}
              delay={index * 100}
              className={index === 0 || index === 5 ? "row-span-2" : ""}
            >
              <button
                onClick={() => openModal(item, index)}
                className="group relative w-full h-full min-h-[200px] overflow-hidden rounded-lg block"
                style={{ aspectRatio: index === 0 || index === 5 ? "3/4" : "4/3" }}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  {item.type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center">
                        <Play className="w-6 h-6 text-accent-foreground ml-1" fill="currentColor" />
                      </div>
                    </div>
                  )}
                  <p className="text-accent text-xs uppercase tracking-wider mb-2">
                    {item.category}
                  </p>
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </button>
            </AnimatedSection>
          ))}
        </div>
      </div>

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
              {selectedItem.type === "video" && (
                <div className="absolute inset-0 flex items-center justify-center bg-background/40">
                  <div className="w-20 h-20 rounded-full bg-accent flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-accent-foreground ml-1" fill="currentColor" />
                  </div>
                </div>
              )}
            </div>
            <div className="text-center">
              <p className="text-accent text-sm uppercase tracking-wider mb-2">
                {selectedItem.category}
              </p>
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
    </section>
  )
}
