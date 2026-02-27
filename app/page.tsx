import ExperienceSection from "@/components/ExperienceSection";
import GetInTouchSection from "@/components/GetInTouchSection";
import HeroSection from "@/components/HeroSection";
import WhatIDoBestSection from "@/components/WhatIDoBestSection";
import WhoIAmSection from "@/components/WhoIAmSection";

export default function Home() {
  return (
    <main
      id="main-content"
      className="flex min-h-screen flex-col bg-background"
    >
      <HeroSection />
      <WhoIAmSection />
      <WhatIDoBestSection />
      <ExperienceSection />
      <GetInTouchSection />
    </main>
  );
}
