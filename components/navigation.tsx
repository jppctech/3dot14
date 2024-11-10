"use client"

import { ChevronDown, ChevronRight, Menu } from "lucide-react"
import { useMedia } from "react-use"
import { Button } from "@/components/ui/button"
import { useOpenGetStarted } from "@/hooks/open-get-started"
import { useOpenMenuPhone } from "@/hooks/open-menu"
import { useEffect, useState } from "react"

export const Navigation = () => {
    const isMobile = useMedia("(max-width: 1024px)", false)
    const { onOpen } = useOpenGetStarted();
    const { onOpenMenu, isOpenMenu} = useOpenMenuPhone();

    const [mount, setMount] = useState(false)

    useEffect(() => {
        setMount(true)
      })

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

    if(!mount) {
        return null
    }

    if(isMobile) {
        return (
            <div className="w-full justify-end flex">
                <Button onClick={() => onOpenMenu()} className=" bg-transparent">
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