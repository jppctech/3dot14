"use client"

import { useOpenGetStarted } from "@/hooks/open-get-started";
import AdvertiserPage from "./components/main-page"
import ContactUs from "@/components/contact-us";
import { motion } from "framer-motion"
import { useOpenMenuPhone } from "@/hooks/open-menu";

const advertiser = () =>{
    const {isOpen} = useOpenGetStarted();

    const { isOpenMenu} = useOpenMenuPhone();

    return(
        <div className=" w-full relative">
            <motion.div animate={isOpen || isOpenMenu? {opacity: [1,0]} : {opacity: 1}} transition={{duration: 1, ease: "easeInOut"}}>
                <div className="flex flex-col items-center justify-center gap-y-4 py-8 relative">
                    <AdvertiserPage/>
                </div>
            </motion.div>
                    {isOpen && (
                        <motion.div animate={isOpen? {opacity: [0,1], y: 10}: {opacity: 0}} initial={{y:-800}} transition={{duration: 1, ease: "easeInOut"}} className=" absolute top-0 mx-auto w-full">
                        <ContactUs/>
                        </motion.div>
                    )}
        </div>
    )
}

export default advertiser