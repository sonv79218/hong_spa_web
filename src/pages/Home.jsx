import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/home/HeroSection';

import AboutSection from "../components/home/AboutSection";
import ServicePreview from "../components/home/ServicePreview";
import TeamSection from "../components/home/TeamSection";
import SpaRoomsSection from '../components/home/SpaRoomsSection';
import GallerySection from "../components/home/GallerySection";
import CommitmentSection from "../components/home/CommitmentSection";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicePreview />
      <TeamSection />
      <SpaRoomsSection />
      <GallerySection />
      <CommitmentSection />
      <Footer />
    </div>
  );
}