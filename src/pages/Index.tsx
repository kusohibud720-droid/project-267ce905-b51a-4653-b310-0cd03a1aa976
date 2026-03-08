import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeaturedVideoSection from "@/components/FeaturedVideoSection";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import ServicesSection from "@/components/ServicesSection";
import VideoGallerySection from "@/components/VideoGallerySection";
import GallerySection from "@/components/GallerySection";
import ReviewsSection from "@/components/ReviewsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FeaturedVideoSection />
      <HowWeWorkSection />
      <ServicesSection />
      <VideoGallerySection />
      <GallerySection />
      <ReviewsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
