import Hero from "@/components/sections/Hero";
import ValueProposition from "@/components/sections/ValueProposition";
import HowItWorks from "@/components/sections/HowItWorks";
import Portfolio from "@/components/sections/Portfolio";
import Pricing from "@/components/sections/Pricing";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Hero />
      <ValueProposition />
      <HowItWorks />
      <Portfolio />
      <Pricing />
    </main>
  );
}
