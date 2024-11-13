'use client'

import ContactForm from "@/components/contact-form"
import Contactpage from "@/components/contact-page"
import { Button } from "@/components/ui/button"
import  {useOpenGetStarted}  from "@/hooks/open-get-started"
import { motion } from "framer-motion"
import { Clock, Globe2, LayoutGrid, Mail, MessageSquare, MonitorSmartphone, Play, PlusCircle } from "lucide-react"
import Image from "next/image"

export default function Publisher() {
    const {onOpen,isOpen} = useOpenGetStarted();
  const advantages = [
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Live performance tracking",
      description: "No setup required! Start tracking your campaign's ROI"
    },
    {
      icon: <LayoutGrid className="h-8 w-8" />,
      title: "Maximum revenue",
      description: "Target audiences using top marketplace solutions"
    },
    {
      icon: <PlusCircle className="h-8 w-8" />,
      title: "18+ categories",
      description: "We qualify and filter premium and mainstream categories"
    },
    {
      icon: <Mail className="h-8 w-8" />,
      title: "Direct communications",
      description: "Regular updates with fresh updates"
    },
    {
      icon: <Globe2 className="h-8 w-8" />,
      title: "Fast scaling",
      description: "Help more and get a full management of your panel"
    }
  ]

  const adFormats = [
    {
      icon: <LayoutGrid className="h-8 w-8" />,
      title: "Pop-under",
      description: "Drive endless traffic when a user clicks anywhere on the page or selected element"
    },
    {
      icon: <MonitorSmartphone className="h-8 w-8" />,
      title: "Web push",
      description: "Collect a base of subscribers on desktop, manage and send them messages"
    },
    {
      icon: <Play className="h-8 w-8" />,
      title: "In-stream video",
      description: "Full video ads into your player or place video-roll in video-based ad format"
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "In-page",
      description: "Banner that should be a certain part of a webpage or whole page can be covered by it"
    }
  ]

  return (
    <div className="flex min-h-screen flex-col">
        {isOpen && 
        (
          <div className="w-screen h-screen inset-0 fixed top-0 right-0 bg-black bg-opacity-75 items-center justify-center flex z-[100]"><ContactForm/></div>
        )
      }
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f5d5bf]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="container px-4 md:px-6 max-w-screen-2xl mx-auto"
          >
            <div className="flex flex-col items-center space-y-4 text-center text-black">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Made for publishers
              </h1>
              <p className="mx-auto max-w-[700px] text-lg">
                by publishers
              </p>
              <p className="mx-auto max-w-[700px] text-gray-600">
                Revenue solution for hot market. Fully customizable ad campaigns. One app. All ad formats.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                onClick={() => onOpen()}
                size="lg" className="bg-white text-[#fe6b01] hover:bg-white/90">
                  Contact us
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6 max-w-screen-2xl mx-auto">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-3xl font-bold tracking-tighter text-center mb-12"
            >
              Our advantages
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid gap-6 md:grid-cols-3 lg:grid-cols-5"
            >
              {advantages.map((advantage, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center text-center space-y-2"
                >
                  <div className="p-3 rounded-full bg-[#f5d5bf] text-[#fe6b01]">
                    {advantage.icon}
                  </div>
                  <h3 className="font-semibold">{advantage.title}</h3>
                  <p className="text-sm text-gray-500">{advantage.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 max-w-screen-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: [0,1] }}
              transition={{ duration: 0.8 }}
              className="space-y-12"
            >
              <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">Ad formats</h2>
                <p className="text-gray-500">Choose the most effective ad format for your website</p>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {adFormats.map((format, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="relative group overflow-hidden rounded-lg border p-6 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex flex-col space-y-4">
                      <div className="p-3 rounded-full bg-[#f5d5bf] text-[#fe6b01] w-fit">
                        {format.icon}
                      </div>
                      <h3 className="font-semibold">{format.title}</h3>
                      <p className="text-sm text-gray-500">{format.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="w-full py-12  bg-gray-50">
          <div className="container px-4 md:px-6 max-w-screen-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="space-y-12"
            >
              <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">Payment methods</h2>
                <p className="text-gray-500">Multiple secure payment options available</p>
              </div>
              <div className="flex justify-center items-center ">
                <div className="grid grid-cols-4 gap-8 md:gap-16 flex-wrap    ">
                    <motion.div whileHover={{ scale: 1.1 }}>
                    <Image src="/cards.png" alt="Payment Method" width={400} height={400} className="object-contain w-[8rem]" />
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1 }}>
                    <Image src="/machine.png" alt="Payment Method" width={400} height={400} className="object-contain w-[8rem]" />
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1 }}>
                    <Image src="/bank-1.png" alt="Payment Method" width={400} height={400} className="object-contain w-[8rem]" />
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1 }}>
                    <Image src="/scan-2.png" alt="Payment Method" width={400} height={400} className="object-contain w-[8rem]" />
                    </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 max-w-screen-2xl flex flex-col items-center justify-center mx-auto">
          <h1 className="text-3xl font-bold tracking-tighter mb-16">Get In touch</h1>
            <div className="grid gap-12 md:grid-cols-2">
            
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-4 flex flex-col justify-center"
              >
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Need help?</h3>
                  <p className="text-gray-500">
                    Please, visit our help center to discover complete functionalities
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Have some partnership offer?</h3>
                  <p className="text-gray-500">
                    Fill out the form, tell us more about you and contact with you as soon as possible.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Don't miss news and tips</h3>
                  <p className="text-gray-500">
                    Our blog will help you find how to provide, save, analyze and tips
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className=" justify-center flex w-full"
              >
               <Contactpage/>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}