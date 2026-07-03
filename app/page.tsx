import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import Footer from "@/components/Footer";
import FeaturedManufacturers from "@/components/FeaturedManufacturers";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <FeaturedManufacturers />
      <HowItWorks />
      <Testimonials />
      <Footer />
    </>
  );
}