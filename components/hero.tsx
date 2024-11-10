import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { useOpenGetStarted } from "@/hooks/open-get-started";

export const HeroPage = () => {
  const {onOpen} = useOpenGetStarted();

    return (
      <section
        className="w-full h-[650px] bg-[#121212] bg-cover bg-center absolute top-0 flex items-center"
        style={{
          backgroundImage: `
            radial-gradient(
              32.6% 75.18% at 67.4% 50%, 
              rgba(19, 22, 30, 0) 0%, 
              rgba(19, 20, 30, 0.08) 24.48%, 
              rgba(19, 20, 30, 0.32) 55.21%, 
              rgba(19, 20, 30, 0.65) 71.35%, 
              rgb(19, 20, 30) 100%
            ),
            url(/hero.jpg)
          `
        }}
      >
        <div className="max-w-screen-2xl mx-auto w-full flex flex-col gap-5 px-2 md:px-0">
            <p className="text-white md:text-6xl text-4xl font-[600] max-w-2xl">Scale your app growth with high-value users</p>
            <p className=" text-white md:text-xl font-[500] max-w-2xl">Level up your mobile app user acquisition, retention and brand performance with predictive algorithms and machine learning</p>
            <Button className="md:w-48 md:h-14 w-32 bg-[#fe6b01] hover:bg-white border border-[#fe6b01] hover:text-[#fe6b01] md:text-xl mt-4" onClick={() => onOpen()}>
                <p>Get Started</p>
                <ArrowRight size={28}/>
            </Button>

        </div>
            <div className=" absolute md:right-40 right-5 bottom-10">
                <svg width="130" height="102" viewBox="0 0 130 102" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="112" y="42" width="4" height="4" rx="1" fill="#626473"></rect><rect x="112" width="4" height="4" rx="1" fill="#626473"></rect><rect x="126" y="42" width="4" height="4" rx="1" fill="#626473"></rect><rect x="126" width="4" height="4" rx="1" fill="#626473"></rect><rect x="112" y="56" width="4" height="4" rx="1" fill="#626473"></rect><rect x="112" y="14" width="4" height="4" rx="1" fill="#626473"></rect><rect x="126" y="56" width="4" height="4" rx="1" fill="#626473"></rect><rect x="126" y="14" width="4" height="4" rx="1" fill="#626473"></rect><rect x="112" y="70" width="4" height="4" rx="1" fill="#626473"></rect><rect x="112" y="28" width="4" height="4" rx="1" fill="#626473"></rect><rect x="126" y="70" width="4" height="4" rx="1" fill="#626473"></rect><rect x="126" y="28" width="4" height="4" rx="1" fill="#626473"></rect><rect y="84" width="4" height="4" rx="1" fill="#626473"></rect><rect x="14" y="84" width="4" height="4" rx="1" fill="#626473"></rect><rect x="28" y="84" width="4" height="4" rx="1" fill="#626473"></rect><rect x="42" y="84" width="4" height="4" rx="1" fill="#626473"></rect><rect x="56" y="84" width="4" height="4" rx="1" fill="#626473"></rect><rect x="84" y="84" width="4" height="4" rx="1" fill="#626473"></rect><rect x="112" y="84" width="4" height="4" rx="1" fill="#626473"></rect><rect x="70" y="84" width="4" height="4" rx="1" fill="#626473"></rect><rect x="98" y="84" width="4" height="4" rx="1" fill="#626473"></rect><rect x="126" y="84" width="4" height="4" rx="1" fill="#626473"></rect><rect y="98" width="4" height="4" rx="1" fill="#626473"></rect><rect x="14" y="98" width="4" height="4" rx="1" fill="#626473"></rect><rect x="28" y="98" width="4" height="4" rx="1" fill="#626473"></rect><rect x="42" y="98" width="4" height="4" rx="1" fill="#626473"></rect><rect x="56" y="98" width="4" height="4" rx="1" fill="#626473"></rect><rect x="84" y="98" width="4" height="4" rx="1" fill="#626473"></rect><rect x="112" y="98" width="4" height="4" rx="1" fill="#626473"></rect><rect x="70" y="98" width="4" height="4" rx="1" fill="#626473"></rect><rect x="98" y="98" width="4" height="4" rx="1" fill="#626473"></rect><rect x="126" y="98" width="4" height="4" rx="1" fill="#626473"></rect></svg>
            </div>
      </section>
    );
  };
  