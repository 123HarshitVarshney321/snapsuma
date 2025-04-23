import { Button } from "@/components/ui/button";
import Image from "next/image";
import HeroSection from "@/components/home/hero-section";
// import DemoSection from "@/components/home/demo-section";
import BgGradient from "@/components/common/bg-gradient";
import HowitworkSection from "@/components/common/how-it-works";
import PricingSection from "@/components/home/pricing-section";
export default function Home() {
  return (
    <div className="relative w-full">
      <BgGradient>
      <div className="flex flex-col">
        <HeroSection/>
        {/* <DemoSection/> */}
        <HowitworkSection/>
        <PricingSection/>
      </div>
      </BgGradient>
      
      
      
      {/* <CtaSection/> */}
    </div>
  );
}
