import CTASection from '@/components/cta';
import FeaturedTrainings from '@/components/featuerd-trainings';
import Feedback from '@/components/feedback';
import HeroSlider from '@/components/hero-slider';
import MissionVision from '@/components/mission-vision';
import NewsSection from '@/components/news-section';
import OurBusinesses from '@/components/our-businesses';
import PortfolioSection from '@/components/our-portfolio';
import ParallaxImageSection from '@/components/parallax-section';
import WhyChooseUs from '@/components/why-choose-us';

export default function Home() {
  return (
    <main className="">
      <HeroSlider />

      <OurBusinesses />
      <MissionVision />
      {/* <FunFactSection /> */}
      <WhyChooseUs />
      <ParallaxImageSection />
      <PortfolioSection />
      <FeaturedTrainings />
      <Feedback />
      <CTASection />
      <NewsSection />
    </main>
  );
}
