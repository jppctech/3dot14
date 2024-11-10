"use client"

import { ChevronDown, ChevronRight, Menu } from "lucide-react"
import { useMedia } from "react-use"
import { Button } from "@/components/ui/button"
import { useOpenGetStarted } from "@/hooks/open-get-started"

export const Navigation = () => {
    const isMobile = useMedia("(max-width: 1024px)", false)
    const { onOpen } = useOpenGetStarted();


    const nav = [
        {
            title: "Technology",
        },
        {
            title: "Solutions"
        },
        {
            title: "Company"
        },
        {
            title: "Resources"
        },
    ]

    if(isMobile) {
        return (
            <div className="w-full justify-end flex">
                <Button>
                    <Menu/>
                </Button>
            </div>
        )
    }
    return (
        <div className="flex justify-between items-center w-full">
            <div className="flex w-full gap-4">
                {nav.map((link,index) => (
                    <div key={index}>
                        <Button
                         variant={"ghost"}
                        >
                            <p className="text-lg">{link.title}</p>
                            <ChevronDown size={24}/>
                        </Button>
                    </div>
                ))}
            </div>
            <div>
                <Button variant={"default"} className="flex hover:bg-white bg-[#0991f8] hover:text-black hover:border-[#0991f8] h-10" onClick={() => onOpen()}>
                    <p>Get Started</p>
                    <ChevronRight/>
                </Button>
            </div>
        </div>
    )
}