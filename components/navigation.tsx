"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Gallery", href: "/gallery" },
  { label: "Clients", href: "/#clients" },
  { label: "Contact", href: "/contact" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border/50 py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/images/logo.png"
              alt="BP Media + Partners"
              width={180}
              height={60}
              className="h-16 lg:h-20 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-12">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-base lg:text-lg font-medium text-muted-foreground hover:text-accent transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-accent/50 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              asChild
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-8 py-2.5 text-sm rounded-lg transition-all duration-300 hover-lift shadow-md hover:shadow-lg"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 top-[72px] bg-background/98 backdrop-blur-lg transition-all duration-500",
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col gap-6">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "text-2xl font-serif text-foreground hover:text-accent transition-all duration-300",
                  isMobileMenuOpen && "animate-fade-up",
                  `stagger-${index + 1}`
                )}
              >
                {item.label}
              </Link>
            ))}
            <Button
              asChild
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-medium mt-4 w-fit"
            >
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
