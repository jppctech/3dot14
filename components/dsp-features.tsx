import Image from "next/image"
import { ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function DSPComponent() {
  const features = [
    "AI based high-value user targeting and acquisition",
    "Global Scale",
    "CPI & CPA optimisation",
    "Creative Optimization",
    "Fraud Prevention",
    "100% Transparency with dashboard access",
    "Real-time tracking and performance reports",
    "Agile Machine Learning and DSP developments",
    "Integration with 40+ major ad exchanges providing with the best inventories",
    "Specialised campaigns for all your goals - acquisition, retention, retargeting and more"
  ]

  return (
    <section className="container px-4 py-16 md:px-6 lg:py-24 max-w-screen-2xl mx-auto">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
        <div className="relative">
          <Image
            alt="DSP Dashboard Interface"
            className=" object-contain"
            height="400"
            width="500"
            src="/pc.jpg"
            priority
          />
        </div>
        <div className="space-y-8">
          <div className="space-y-2">
            <p className="text-sm font-medium tracking-wide text-primary">Your go-to programmatic media buyer</p>
            <h2 className="text-3xl font-bold tracking-tight lg:text-4xl">All you need in an ideal DSP</h2>
          </div>
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <Check className="h-5 w-5 text-primary mt-1 shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <Button className="group bg-white border border-[#0991f8] text-[#0991f8] hover:bg-[#0991f8] hover:text-white">
            Know More
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  )
}