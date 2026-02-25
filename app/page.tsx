import HeroSection from "@/components/HeroSection";
import WhatIDoBestSection from "@/components/WhatIDoBestSection";
import WhoIAmSection from "@/components/WhoIAmSection";
import GetInTouchSection from "@/components/GetInTouchSection";

export default function Home() {
  return (
    <main
      id="main-content"
      className="flex min-h-screen flex-col bg-background"
    >
      <HeroSection />
      <WhoIAmSection />
      <WhatIDoBestSection />
      <GetInTouchSection />
    </main>
  );
}
