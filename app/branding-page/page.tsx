import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { BrainCircuit, Lightbulb, Target } from "lucide-react"

interface props {
    img: string;
}
export default function BrandingComponent({img}: props) {
  return (
    <div className="flex flex-col justify-center items-center">

      {/* Insight Section */}
      <section className="py-16 w-full bg-gray-100">
        <div className="container px-4 md:px-6 max-w-screen-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Insight. Creativity. Technology.</h2>
            <p className="mt-4">Profound understanding and implementation of marketing strategies through advanced technology.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <BrainCircuit className="mx-auto h-12 w-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Concept</h3>
              <p className="">Building a strong foundation through research and strategy</p>
            </div>
            <div className="text-center">
              <Lightbulb className="mx-auto h-12 w-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Brand</h3>
              <p className="">Creating meaningful connections with your audience</p>
            </div>
            <div className="text-center">
              <Target className="mx-auto h-12 w-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Tech</h3>
              <p className="">Implementing cutting-edge solutions for growth</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Works Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-8 w-full text-center">Our Works</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardContent className="p-4">
                <img
                  src="/branding-1.jpg"
                  alt="NeatBuds product"
                  className="w-full h-[300px] object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">NeatBuds</h3>
                <p className="text-slate-600">Premium audio device with cutting-edge technology</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <img
                  src="/branding-2.jpg"
                  alt="Glang Smartwatch"
                  className="w-full h-[300px] object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Glang Smartwatch</h3>
                <p className="text-slate-600">Next-generation wearable technology</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <img
                  src="/branding-2.jpg"
                  alt="Rooplee headphones"
                  className="w-full h-[300px] object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Rooplee</h3>
                <p className="text-slate-600">Premium audio solutions for everyday use</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <img
                  src="/branding-1.jpg"
                  alt="Nyce Water bottle"
                  className="w-full h-[300px] object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Nyce Water</h3>
                <p className="text-slate-600">Sustainable beverage packaging design</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}