import Image from "next/image";
import Header from "./ui/header";
import HeroSection from "./ui/hero_section";
import "./globals.css";

export default function Home() {
  return (
    <main className="w-full">
      <Header />
      <HeroSection />
    </main>
  );
}
