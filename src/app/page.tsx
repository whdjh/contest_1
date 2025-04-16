import TextSection from '@/components/product/main/TextSeciton';
import ImageSection from '@/components/product/main/ImageSection';
import LinkSection from '@/components/product/main/LinkSection';
import HomeContent from '@/components/product/main/homeContent';

export default function Home() {
  return (
    <>
      <main className="bg-black">
        <TextSection key="hero" />
        <ImageSection key="main" />
        <LinkSection key="link" />
        <HomeContent />
      </main>
    </>
  );
}
