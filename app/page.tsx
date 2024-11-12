"use client"

import CarouselPage from "@/components/carosule";
import ContactUs from "@/components/contact-us";
import DSPComponent from "@/components/dsp-features";
import Footer from "@/components/footer";
import GrowYourApp from "@/components/grow-your-app";
import { HeroPage } from "@/components/hero";
import { Header } from "@/components/nav-bar";
import { OurCLients } from "@/components/our-clients";
import PhoneMenu from "@/components/phone-menu";
import { useOpenGetStarted } from "@/hooks/open-get-started";
import { useOpenMenuPhone } from "@/hooks/open-menu";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const [mount, setMount] = useState(false)
  const {isOpen} = useOpenGetStarted();
  const { isOpenMenu} = useOpenMenuPhone();

  useEffect(() => {
    setMount(true)
  })

  if(!mount){
    return null
  }

  return (
    <div className=" relative w-full">
        <motion.div animate={isOpen || isOpenMenu? {opacity: [1,0]} : {opacity: 1}} transition={{duration: 1, ease: "easeInOut"}}>
          <Header/>
          <HeroPage/>
          <div className={`flex flex-col w-full mt-[600px] ${isOpen&& "hidden"}`}>
            <GrowYourApp/>
            <DSPComponent/>
            <CarouselPage/>
            <OurCLients/>
            
            <Footer/>
          </div>
        </motion.div>
      {isOpen && (
        <motion.div animate={isOpen? {opacity: [0,1], y: 10}: {opacity: 0}} initial={{y:-800}} transition={{duration: 1, ease: "easeInOut"}} className=" absolute top-0 mx-auto w-full">
          <ContactUs/>
        </motion.div>
      )}
        <motion.div animate={isOpenMenu? {opacity: [0,1], y:0}: {opacity: 0}} initial={{y:-800}} transition={{duration: 1, ease: "easeIn"}} className=" absolute w-full top-0 right-0 bg-white" >
            <PhoneMenu/>
        </motion.div>
    </div>
  );
}
