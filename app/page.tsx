import GrowYourApp from "@/components/grow-your-app";
import { HeroPage } from "@/components/hero";
import { Header } from "@/components/nav-bar";

export default function Home() {
  return (
    <div className=" relative w-full">
      <Header/>
      <HeroPage/>
      <div className="flex flex-col w-full mt-[600px]">
        <GrowYourApp/>
      </div>
    </div>
  );
}
