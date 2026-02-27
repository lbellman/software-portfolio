import MyFriendsArtSection from "@/components/MyFriendsArtSection";
import FreecellCardGameSection from "@/components/FreecellCardGameSection";
import ProjectsHero from "@/components/ProjectsHero";

export default function ProjectsPage() {
  return (
    <main id="main-content" className="min-h-screen bg-background pt-24 pb-16">
      <MyFriendsArtSection />
      <FreecellCardGameSection />
    </main>
  );
}
