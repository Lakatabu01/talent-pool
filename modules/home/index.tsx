import HeroSection from "../../components/hero_section";
import Individuals from "../../components/individuals";
import VettedTalent from "../../components/vetted-talent";

export default function Home() {
  return (
    <main className="max-w-full">
      <HeroSection />
      <Individuals />
      <VettedTalent />
    </main>
  );
}
