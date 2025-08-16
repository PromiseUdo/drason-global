import CTASection from "@/components/cta";
import FeaturedTrainings from "@/components/featuerd-trainings";
import Feedback from "@/components/feedback";
import FunFactSection from "@/components/fun-facts";
import HeroSlider from "@/components/hero-slider";
import NewsSection from "@/components/news-section";
import OurBusinesses from "@/components/our-businesses";
import ParallaxImageSection from "@/components/parallax-section";
import WhyChooseUs from "@/components/why-choose-us";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <HeroSlider />

      <OurBusinesses />
      <FunFactSection />
      <WhyChooseUs />
      <ParallaxImageSection />
      <FeaturedTrainings />
      <Feedback />
      <CTASection />
      <NewsSection />
    </main>
  );
}
