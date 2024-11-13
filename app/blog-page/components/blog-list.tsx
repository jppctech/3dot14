import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface props {
    img: string,
    title: string,
    des: string
}

export default function BlogList({img, title, des}: props) {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <section className="container px-4 py-12 md:px-6 ">
              <Card className="overflow-hidden grid md:grid-cols-2 gap-8 max-w-screen-lg mx-auto">
              <Image
                src={img}
                alt="Blog post thumbnail"
                className="aspect-video object-cover"
                width={600}
                height={300}
              />
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Clock className="h-4 w-4" />
                  <span>5 min read</span>
                </div>
                <h3 className="mt-4 text-xl font-bold">{title}</h3>
                <p className="mt-2 line-clamp-3 text-gray-500">
                 {des}
                </p>
                <Button variant="link" className="mt-4 p-0" asChild>
                  <Link href="#" className="flex items-center gap-1 text-[#fe6b01]">
                    Read More
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
      </section>
    </div>
  )
}