import HeroSection from '@/components/product/main/TextSeciton';
import MainSection from '@/components/product/main/ImageSection';
import LinkSection from '@/components/product/main/LinkSection';

export default function Home() {
  return (
    <>
      <main className="bg-black">
          <HeroSection key="hero"/>
          <MainSection key="main"/>
          <LinkSection key="link"/>
      </main>
    </>
  );
}
