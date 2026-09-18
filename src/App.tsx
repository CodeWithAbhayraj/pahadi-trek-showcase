import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { InstagramCTA } from "@/components/InstagramCTA";
import { Navbar } from "@/components/Navbar";
import { TrekGallery } from "@/components/TrekGallery";
import { TrekSection } from "@/components/TrekSection";
import { WhyPahadiKeeda } from "@/components/WhyPahadiKeeda";

export function App() {
  return <><Navbar /><main><Hero /><TrekSection /><WhyPahadiKeeda /><About /><TrekGallery /><InstagramCTA /><Contact /></main><Footer /></>;
}