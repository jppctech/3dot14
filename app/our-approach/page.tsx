"use client"
import Image from "next/image"
import { CircleDot } from "lucide-react"
import ContactUs from "@/components/contact-page";
import { motion } from "framer-motion"
import { useOpenGetStarted } from "@/hooks/open-get-started";
import { useOpenMenuPhone } from "@/hooks/open-menu";
import { Header } from "@/components/nav-bar";
import Footer from "@/components/footer";

export default function OurApproach() {
  const {isOpen} = useOpenGetStarted();
  const { isOpenMenu} = useOpenMenuPhone();
  return (
    <div className=" w-full absolute">
      <motion.div animate={isOpen || isOpenMenu? {opacity: [1,0]} : {opacity: 1}} transition={{duration: 1, ease: "easeInOut"}}>
        <Header/>
      <div className="flex flex-col min-h-screen -mt-20 w-full relative z-[]">
      {/* Hero Section */}
      <section className="bg-zinc-950 text-white py-32 px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <h1 className="text-4xl font-bold leading-tight">
            Acquire users who drive maximum returns for you.
          </h1>
          <p className="text-zinc-400 text-sm">
            *SaaS Cloud users to date of Feb 24. All algorithms to help you scale high
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 px-4">
        <h2 className="text-center text-xl font-semibold mb-12">What sets us apart</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <svg
                className="w-6 h-6 text-orange-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="font-semibold">Dynamic Creative Optimization</h3>
            <p className="text-sm text-gray-600">
              Get the best out of creative and CTR through our AI-led creative optimization. Our AI learns from millions of data points to understand what creative elements drive the highest CTR.
            </p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <svg
                className="w-6 h-6 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <h3 className="font-semibold">ROAS Algorithm</h3>
            <p className="text-sm text-gray-600">
              Integrate with tools as much ROI as compared to other players to highlight our high-end technology. Our AI-powered algorithms ensure optimal performance for marketing teams.
            </p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <svg
                className="w-6 h-6 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="font-semibold">Real-time Targeting</h3>
            <p className="text-sm text-gray-600">
              Target and target update across day, reach users that deliver results and optimize campaigns based on real-time data and learning.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto space-y-16">
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <CircleDot className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Learn</h3>
                <p className="text-gray-600">
                  During the learning process, features regarding users, from their first click to final conversion, are captured. This 2-3 weeks is helpful to help user for any app to find similar users, but it&apos;s based on many users&apos; successful actions.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <CircleDot className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Optimize</h3>
                <p className="text-gray-600">
                  Once the algorithm has processed enough data points during the learning process, it can start using the feature&apos;s collective learning to find similar users. In this phase, the platform starts to bring down the CPA/CAC gradually. The actual head start seeing low CPAs starts here.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <CircleDot className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Scale</h3>
                <p className="text-gray-600">
                  Once the algorithm is at its maximum and has the right scale metrics, the algorithm starts scaling the campaign without affecting the performance quality and the level of outcomes ROI. This is where it will start finding new areas of the performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
            <Image
              src="/adjust.png"
              alt="Partner logo"
              width={120}
              height={40}
            />
            <Image
              src="/singular.png"
              alt="Partner logo"
              width={120}
              height={40}
            />
            <Image
              src="/branch.png"
              alt="Partner logo"
              width={120}
              height={40}
            />
            <Image
              src="/kochava..png"
              alt="Partner logo"
              width={120}
              height={40}
            />
            <Image
              src="/appsflyer.png"
              alt="Partner logo"
              width={120}
              height={40}
            />
          </div>
        </div>
      </section>
    </div>
    <Footer/>
    </motion.div>
      {isOpen && (
        <motion.div animate={isOpen? {opacity: [0,1], y: 10}: {opacity: 0}} initial={{y:-800}} transition={{duration: 1, ease: "easeInOut"}} className=" absolute top-0 mx-auto w-full">
          <ContactUs/>
        </motion.div>
      )}
    </div>
  )
}