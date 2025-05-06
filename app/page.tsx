"use client"

import Link from "next/link"
import { ArrowRight, CheckCircle, Zap, Search, DollarSign, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import PortfolioCard from "@/components/portfolio-card"
import TestimonialCard from "@/components/testimonial-card"
import WhatsAppButton from "@/components/whatsapp-button"
import ThemeToggle from "@/components/theme-toggle"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Zap className="h-6 w-6 text-emerald-500" />
            <span className="text-xl font-bold">ArnabDev</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#services" className="text-sm font-medium hover:text-emerald-500 transition-colors">
              Services
            </Link>
            <Link href="#portfolio" className="text-sm font-medium hover:text-emerald-500 transition-colors">
              Portfolio
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-emerald-500 transition-colors">
              Testimonials
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-emerald-500 transition-colors">
              Contact
            </Link>
            <ThemeToggle />
          </nav>
          <div className="flex items-center gap-4">
            <WhatsAppButton phoneNumber="8617818763" />
            <Button asChild className="hidden md:flex">
              <Link href="#contact">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-28">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm text-emerald-700">
                  Bagnan's Best Web Development Agency
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Blazing Fast Websites Built With Latest Technology
                </h1>
                <p className="text-muted-foreground md:text-xl">
                  We create SEO-friendly, cost-effective websites that help your business stand out in the digital
                  world.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button asChild size="lg">
                    <Link href="#contact">
                      Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="#portfolio">View Our Work</Link>
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full max-w-md">
                  <img
                    src="./all-devices-white (1).png"
        
                    alt="Web Development"
                    className="mx-auto rounded-lg object-cover"
                    width={500}
                    height={500}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="bg-slate-50 py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm text-emerald-700">
                  Our Services
                </div>
                <h2 className="text-3xl font-bold tracking-tighter text-emerald-400 sm:text-4xl md:text-5xl">What We Offer</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We specialize in creating websites that are not just visually appealing but also technically superior.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 md:gap-8 mt-12">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <Zap className="h-12 w-12 text-emerald-500" />
                <h3 className="text-xl font-bold">Blazing Fast Websites</h3>
                <p className="text-center text-muted-foreground">
                  Optimized for speed to provide the best user experience and improve conversion rates.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <Search className="h-12 w-12 text-emerald-500" />
                <h3 className="text-xl font-bold">SEO Friendly</h3>
                <p className="text-center text-muted-foreground">
                  Built with search engines in mind to help your business rank higher in search results.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <DollarSign className="h-12 w-12 text-emerald-500" />
                <h3 className="text-xl font-bold">Cost Effective</h3>
                <p className="text-center text-muted-foreground">
                  Quality websites at competitive prices to maximize your return on investment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm text-emerald-700">
                  Our Portfolio
                </div>
                    <h2 className="text-3xl font-bold tracking-tighter text-emerald-400 sm:text-4xl md:text-5xl">See Our Work</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Check out some of our recent projects across various industries.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
              <PortfolioCard
                title="Coaching Centers"
                imageUrl="/all-devices-white (2).png?height=300&width=400"
                demoUrl="https://site-demos.vercel.app/"
                category="Education"
              />
              <PortfolioCard
                title="Schools"
                imageUrl="/all-devices-black (1).png?height=300&width=400"
                demoUrl="https://school-demo-three.vercel.app/"
                category="Education"
              />
              <PortfolioCard
                title="Hotels & Resorts"
                imageUrl="/all-devices-black.png?height=300&width=400"
                demoUrl="https://resort-demo-steel.vercel.app/"
                category="Hospitality"
              />
              <PortfolioCard
                title="Clothing & Jewellery"
                imageUrl="/all-devices-white.png?height=300&width=400"
                demoUrl="https://site-demos.vercel.app/"
                category="Retail"
              />
              <PortfolioCard
                title="Hardware & Wholesale"
                imageUrl="/all-devices-white (2).png?height=300&width=400"
                demoUrl="https://hardwarewebsite-demo.vercel.app/"
                category="Business"
              />
              <PortfolioCard
                title="Healthcare"
                imageUrl="/all-devices-white (1).png?height=300&width=400"
                demoUrl="https://tuliphospitalbagnan.in"
                category="Healthcare"
              />
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="bg-slate-50 py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm text-emerald-700">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold text-emerald-400 tracking-tighter sm:text-4xl md:text-5xl">What Our Clients Say</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Don't just take our word for it. Here's what our satisfied clients have to say.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-4xl mt-12">
              <TestimonialCard
                name="Tulip Hospital"
                location="Bagnan"
                testimonial="Working with Arnab was a great experience. Our website is fast, user-friendly, and has helped us reach more patients. The SEO optimization has significantly improved our online visibility."
                website="www.tuliphospitalbagnan.in"
              />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm text-emerald-700">
                  Get In Touch
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Start Your Project Today
                </h2>
                <p className="text-muted-foreground md:text-xl">
                  Ready to take your online presence to the next level? Contact us now to discuss your project.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-500" />
                    <span>Free consultation and quote</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-500" />
                    <span>Quick turnaround time</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-500" />
                    <span>Ongoing support and maintenance</span>
                  </div>
                </div>
                <div className="space-y-2 pt-4">
                  <div className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-emerald-500" />
                    <span className="font-medium">Email:</span>
                    <a href="mailto:arnabchat2001@gmail.com" className="text-emerald-600 hover:underline">
                      arnabchat2001@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-emerald-500" />
                    <span className="font-medium">Phone:</span>
                    <a href="tel:8617818763" className="text-emerald-600 hover:underline">
                      8617818763
                    </a>
                  </div>
                </div>
                <div className="pt-4">
                  <Button size="lg" className="w-full sm:w-auto">
                    <Link href="https://wa.me/918617818763" className="flex items-center justify-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                        <path d="M9 10a.5.5 0 0 0 1 0V9a.5 0 0 0-1 0v1Z" />
                        <path d="M14 10a.5.5 0 0 0 1 0V9a.5 0 0 0-1 0v1Z" />
                        <path d="M9.5 13.5c.5 1 1.5 1 2 1s1.5 0 2-1" />
                      </svg>
                      Connect on WhatsApp
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-full max-w-md space-y-4 rounded-lg border bg-background p-6 shadow-sm">
                  <h3 className="text-xl font-bold">Send us a message</h3>
                  <form
                    className="space-y-4"
                    onSubmit={(e) => {
                      e.preventDefault()
                      const formData = new FormData(e.currentTarget)
                      const name = formData.get("name")
                      const email = formData.get("email")
                      const message = formData.get("message")

                      // Format the message for WhatsApp
                      const whatsappMessage = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`

                      // Redirect to WhatsApp with the message
                      window.open(`https://wa.me/918617818763?text=${whatsappMessage}`, "_blank")
                    }}
                  >
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Enter your message"
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Send via WhatsApp
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-slate-900 text-white">
        <div className="container flex flex-col gap-6 py-8 md:py-12">
          <div className="flex flex-col gap-6 md:flex-row md:justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Zap className="h-6 w-6 text-emerald-400" />
                <span className="text-xl font-bold">ArnabDev</span>
              </div>
              <p className="max-w-xs text-slate-300">
                Creating blazing fast, SEO-friendly, and cost-effective websites for businesses of all sizes.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
              <div className="space-y-3">
                <h4 className="text-base font-medium">Services</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-sm text-slate-300 hover:text-white transition-colors">
                      Web Development
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm text-slate-300 hover:text-white transition-colors">
                      SEO Optimization
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm text-slate-300 hover:text-white transition-colors">
                      Website Maintenance
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="text-base font-medium">Company</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-sm text-slate-300 hover:text-white transition-colors">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="#portfolio" className="text-sm text-slate-300 hover:text-white transition-colors">
                      Portfolio
                    </Link>
                  </li>
                  <li>
                    <Link href="#testimonials" className="text-sm text-slate-300 hover:text-white transition-colors">
                      Testimonials
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="text-base font-medium">Contact</h4>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="mailto:arnabchat2001@gmail.com"
                      className="text-sm text-slate-300 hover:text-white transition-colors"
                    >
                      arnabchat2001@gmail.com
                    </a>
                  </li>
                  <li>
                    <a href="tel:8617818763" className="text-sm text-slate-300 hover:text-white transition-colors">
                      8617818763
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://wa.me/918617818763"
                      className="text-sm text-slate-300 hover:text-white transition-colors flex items-center gap-1"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                        <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                        <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                        <path d="M9.5 13.5c.5 1 1.5 1 2 1s1.5 0 2-1" />
                      </svg>
                      WhatsApp
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-slate-300">© {new Date().getFullYear()} ArnabDev. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
