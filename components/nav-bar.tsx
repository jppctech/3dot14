"use client"

import Image from "next/image"
import { useEffect, useState } from "react";
import { Navigation } from "./navigation";
import { motion } from "framer-motion";

export const Header = () => {
    const [mounted, setMounted] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, [])

    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 60) {
            setIsScrolled(true);
          } else {
            setIsScrolled(false);
          }
        };
        
        window.addEventListener('scroll', handleScroll);
        
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
        }, []);

    if(!mounted) {
        return null
    }

    return (
        <motion.div animate={isScrolled?{y: [0,-100,0]}: {y: 0}} transition={isScrolled?{ease: "easeOut", duration: 1}:{ease: "easeIn", duration: 1}} initial={{y: 0}} className={`w-full z-[50] sticky top-0 py-4 ${isScrolled? "bg-white text-black" : "bg-transparent text-white"}`}>
           <div className="w-full max-w-screen-2xl mx-auto justify-between items-center flex px-4 md:px-0">
            <div className="w-1/3">
                <Image
                    src={isScrolled? "/logo.svg" : "/logo.png"}
                    alt="logo"
                    height={200}
                    width={200}
                    className=" object-contain w-24 ml-2"
                />
            </div>
                <div className="w-2/3">
                  <Navigation/>
                </div>
           </div>
        </motion.div>
    )
}