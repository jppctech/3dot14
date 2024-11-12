import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"

interface MarketingCardProps {
  title: string
  points: Array<{
    icon: string
    text: string
  }>
  buttonText: string
  imageUrl: string
  imageOnRight: boolean
}

export default function Cardunique({
    title,
    points,
    buttonText,
    imageUrl,
    imageOnRight
} : MarketingCardProps) {
  return (
    <Card className="overflow-hidden shadow-lg max-w-[80rem] py-10 px-4">
      <div className={`flex flex-col max-w-screen-lg mx-auto ${imageOnRight ? "md:flex-row" : "md:flex-row-reverse"}`}>
        <div className="flex-1 p-6 md:p-8">
          <h2 className="mb-4 text-2xl font-bold tracking-tight">{title}</h2>
          <ul className="mb-6 space-y-4">
            {points.map((point, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="mt-1 text-lg">{point.icon}</span>
                <span className="text-muted-foreground">{point.text}</span>
              </li>
            ))}
          </ul>
          <Button size="lg" className="w-full md:w-auto">
            {buttonText}
          </Button>
        </div>
        <div className="relative aspect-square md:w-1/2">
          <Image src={imageUrl} width={500} height={600} alt="image"/>
        </div>
      </div>
    </Card>
  )
}