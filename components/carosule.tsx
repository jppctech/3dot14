'use client'

import { useState, useCallback, useEffect } from 'react'
import { Card } from "@/components/ui/card"
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { cn } from "@/lib/utils"

interface Testimonial {
  logo: string
  quote: string
  author: string
  role: string
  company: string
  background: string
}

const testimonials: Testimonial[] = [
  {
    logo: "/vantage.jpg",
    quote: "Amongst our top performing partners, 3dot14 has delivered quality traffic for us while maintaining the scale whenever needed making them one of the most dependable and trustable partners",
    author: "Elvis Wang",
    role: "Digital Marketing Specialist",
    company: "Vantage",
    background: "bg-gradient-to-br from-blue-950 to-cyan-600"
  },
  {
    logo: "/paxel.jpg",
    quote: "Their innovative solutions have significantly improved our marketing efficiency.",
    author: "Sarah Chen",
    role: "Marketing Director",
    company: "TechCorp",
    background: "bg-gradient-to-br from-purple-950 to-purple-600"
  },
  {
    logo: "/onescorejpg.jpg",
    quote: "The team's expertise and dedication have been instrumental in our growth.",
    author: "Michael Ross",
    role: "Growth Manager",
    company: "InnovateLabs",
    background: "bg-gradient-to-br from-emerald-950 to-emerald-600"
  },
]

export default function CarouselPage() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  // Auto-play interval setting
  useEffect(() => {
    if (!api) return

    // Set the initial slide and handle select events
    setCurrent(api.selectedScrollSnap())
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })

    // Auto-play interval (set to 3 seconds)
    const interval = setInterval(() => {
      api.scrollNext() // Advance to the next slide
    }, 3000)

    // Clear interval on unmount to avoid memory leaks
    return () => clearInterval(interval)
  }, [api])

  return (
    <div className="bg-blue-50 w-full overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-4 md:px-0 py-12">

        {/* Decorative dots */}
        <div className="absolute top-0 left-0 grid grid-cols-9 gap-4 opacity-20">
          {[...Array(81)].map((_, i) => (
            <div key={i} className="w-1 h-1 rounded-full bg-blue-500" />
          ))}
        </div>
        
        <Carousel className="w-full" setApi={setApi}>
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <div className="flex flex-col md:flex-row items-center gap-8 p-4">
                  <Card className={cn("w-full md:w-1/2 flex items-center justify-center", testimonial.background)}>
                    <img
                      src={testimonial.logo}
                      alt={`${testimonial.company} logo`}
                      className="w-full h-auto"
                    />
                  </Card>
                  <div className="w-full md:w-1/2 space-y-4">
                    <blockquote className="text-xl md:text-2xl font-medium leading-relaxed text-gray-900">
                    &quot;{testimonial.quote}&quot;
                    </blockquote>
                    <div className="space-y-1">
                      <div className="font-semibold text-gray-900">{testimonial.author}</div>
                      <div className="text-sm text-gray-600">
                        {testimonial.role}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2" />
          <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2" />
        </Carousel>
        
        {/* Carousel indicators */}
        <div className="flex justify-center mt-4 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full transition-colors ${
                index === current ? 'bg-blue-500' : 'bg-blue-200'
              }`}
              onClick={() => api?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
