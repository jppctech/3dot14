'use client'

import { Button } from "@/components/ui/button"
import { useOpenMenuPhone } from "@/hooks/open-menu"
import { ChevronDown, X, Globe, ArrowRight } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function PhoneMenu() {
  const [openSection, setOpenSection] = useState<string | null>(null)
  const {onCloseMenu} = useOpenMenuPhone();
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true)
  })
  
  const menuSections = {
    technology: {
      title: "Technology",
      items: []
    },
    solutions: {
      title: "Solutions",
      items: [
        { icon: "⚙️", label: "User Acquisition" },
        { icon: "👥", label: "Branding" },
        { icon: "🔄", label: "Retargeting" },
        { icon: "📊", label: "Self-Serve DSP" },
        { icon: "🎮", label: "Gaming" }
      ]
    },
    company: {
      title: "Company",
      items: []
    },
    resources: {
      title: "Resources",
      items: []
    }
  }

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section)
  }
  
  if(!mount){
    return null
  }

  return (
    <div className="fixed inset-0 bg-white md:hidden text-black">
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center">
            <Image
                src={"/logo.svg"}
                alt="logo"
                height={80}
                width={80}
            />
          </div>
          <button className="p-2" onClick={() => onCloseMenu()}>
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Menu Sections */}
        <div className="flex-1 overflow-y-auto">
          {Object.entries(menuSections).map(([key, section]) => (
            <div key={key} className="border-b">
              <button
                className="flex items-center justify-between w-full p-4"
                onClick={() => toggleSection(key)}
              >
                <span className="text-lg">{section.title}</span>
                <ChevronDown
                  className={`h-5 w-5 transition-transform ${
                    openSection === key ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openSection === key && section.items.length > 0 && (
                <div className="px-4 pb-4 space-y-4">
                  {section.items.map((item, index) => (
                    <button
                      key={index}
                      className="flex items-center space-x-3 w-full"
                    >
                      <span className="text-xl">{item.icon}</span>
                      <span className="text-left">{item.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="border-t p-4 space-y-4">
          <button className="flex items-center justify-between w-full p-2">
            <div className="flex items-center space-x-2">
              <Globe className="h-5 w-5" />
              <span>Language</span>
            </div>
            <ChevronDown className="h-5 w-5" />
          </button>
          <Button className="w-full" size="lg">
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}