"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AnimatedSection } from "@/components/animated-section"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react"
import { cn } from "@/lib/utils"

const eventTypes = [
  "Corporate Event",
  "Brand Activation",
  "Product Launch",
  "Experiential Marketing",
  "Cultural Production",
  "Public Relations",
  "Other",
]

const budgetRanges = [
  "Under $50,000",
  "$50,000 - $100,000",
  "$100,000 - $250,000",
  "$250,000 - $500,000",
  "$500,000 - $1M",
  "$1M+",
]

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    eventType: "",
    budget: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: "c6e946a7-017b-46f6-abb6-f988213c6bed",
        to: "bpena@bpmediapartners.com",
        ...formData,
      }),
    })
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
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
                Contact Us
              </p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
                Let&apos;s Create Something{" "}
                <span className="text-accent">Extraordinary</span>
              </h1>
              <p className="text-muted-foreground text-lg lg:text-xl leading-relaxed">
                Ready to bring your vision to life? Get in touch with our team to discuss your next project.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="pb-24 lg:pb-32">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">
              {/* Contact Form */}
              <AnimatedSection className="lg:col-span-3">
                <div className="bg-card rounded-lg border border-border p-6 lg:p-10">
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-8 h-8 text-accent" />
                      </div>
                      <h3 className="font-serif text-2xl font-bold text-foreground mb-3">
                        Thank You!
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        We have received your message and will get back to you within 24-48 hours.
                      </p>
                      <Button
                        onClick={() => {
                          setIsSubmitted(false)
                          setFormData({
                            name: "",
                            company: "",
                            email: "",
                            eventType: "",
                            budget: "",
                            message: "",
                          })
                        }}
                        variant="outline"
                        className="border-foreground/20 text-foreground hover:bg-foreground/10"
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <>
                      <h2 className="font-serif text-2xl font-bold text-foreground mb-2">
                        Start a Project
                      </h2>
                      <p className="text-muted-foreground mb-8">
                        Fill out the form below and we will be in touch shortly.
                      </p>
                      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="flex flex-col gap-2">
                            <label htmlFor="name" className="text-sm font-medium text-foreground">
                              Name <span className="text-accent">*</span>
                            </label>
                            <Input
                              id="name"
                              name="name"
                              type="text"
                              required
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="Your name"
                              className="bg-background border-border focus:border-accent"
                            />
                          </div>
                          <div className="flex flex-col gap-2">
                            <label htmlFor="company" className="text-sm font-medium text-foreground">
                              Company
                            </label>
                            <Input
                              id="company"
                              name="company"
                              type="text"
                              value={formData.company}
                              onChange={handleChange}
                              placeholder="Your company"
                              className="bg-background border-border focus:border-accent"
                            />
                          </div>
                        </div>

                        <div className="flex flex-col gap-2">
                          <label htmlFor="email" className="text-sm font-medium text-foreground">
                            Email <span className="text-accent">*</span>
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="your@email.com"
                            className="bg-background border-border focus:border-accent"
                          />
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="flex flex-col gap-2">
                            <label htmlFor="eventType" className="text-sm font-medium text-foreground">
                              Event Type
                            </label>
                            <select
                              id="eventType"
                              name="eventType"
                              value={formData.eventType}
                              onChange={handleChange}
                              className={cn(
                                "flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm",
                                "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
                                "disabled:cursor-not-allowed disabled:opacity-50",
                                !formData.eventType && "text-muted-foreground"
                              )}
                            >
                              <option value="" disabled>Select event type</option>
                              {eventTypes.map((type) => (
                                <option key={type} value={type}>{type}</option>
                              ))}
                            </select>
                          </div>
                          <div className="flex flex-col gap-2">
                            <label htmlFor="budget" className="text-sm font-medium text-foreground">
                              Budget Range
                            </label>
                            <select
                              id="budget"
                              name="budget"
                              value={formData.budget}
                              onChange={handleChange}
                              className={cn(
                                "flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm",
                                "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
                                "disabled:cursor-not-allowed disabled:opacity-50",
                                !formData.budget && "text-muted-foreground"
                              )}
                            >
                              <option value="" disabled>Select budget range</option>
                              {budgetRanges.map((range) => (
                                <option key={range} value={range}>{range}</option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div className="flex flex-col gap-2">
                          <label htmlFor="message" className="text-sm font-medium text-foreground">
                            Message <span className="text-accent">*</span>
                          </label>
                          <Textarea
                            id="message"
                            name="message"
                            required
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Tell us about your project, event goals, and timeline..."
                            rows={6}
                            className="bg-background border-border focus:border-accent resize-none"
                          />
                        </div>

                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="bg-accent text-accent-foreground hover:bg-accent/90 font-medium w-full md:w-auto md:self-start"
                        >
                          {isSubmitting ? (
                            <span className="flex items-center gap-2">
                              <svg className="animate-spin h-4 w-4\" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                              </svg>
                              Sending...
                            </span>
                          ) : (
                            <span className="flex items-center gap-2">
                              <Send className="w-4 h-4" />
                              Start a Project
                            </span>
                          )}
                        </Button>
                      </form>
                    </>
                  )}
                </div>
              </AnimatedSection>

              {/* Contact Info */}
              <AnimatedSection delay={200} className="lg:col-span-2">
                <div className="flex flex-col gap-8">
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-6">
                      Get in Touch
                    </h3>
                    <div className="flex flex-col gap-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                          <MapPin className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground mb-1">Headquarters</p>
                          <p className="text-muted-foreground text-sm">
                            850 S.W 2nd Ave Suite 1105, Miami, Florida<br />
                            United States
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                          <Mail className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground mb-1">Email</p>
                          <a
                            href="mailto:bpena@bpmediapartners.com"
                            className="text-muted-foreground text-sm hover:text-accent transition-colors"
                          >
                            bpena@bpmediapartners.com
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                          <Phone className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground mb-1">Phone</p>
                          <a
                            href="tel:+1 305 720 8535"
                            className="text-muted-foreground text-sm hover:text-accent transition-colors"
                          >
                            +1 305 720 8535
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-border pt-8">
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                      Office Hours
                    </h3>
                    <div className="flex flex-col gap-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Monday - Friday</span>
                        <span className="text-foreground">9:00 AM - 6:00 PM EST</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Saturday - Sunday</span>
                        <span className="text-foreground">By Appointment</span>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-border pt-8">
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                      Global Reach
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      While headquartered in Miami, we produce events throughout the United States, Caribbean, and Latin America. Our global network of partners enables us to deliver exceptional experiences anywhere in the world.
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
