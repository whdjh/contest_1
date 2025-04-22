import TextSection from '@/components/product/main/TextSeciton';
import ImageSection from '@/components/product/main/ImageSection';
import LinkSection from '@/components/product/main/LinkSection';
import RotateSection from '@/components/product/main/RotateSection';

export default function Home() {
  return (
    <>
      <main className="bg-white">
        <RotateSection />
        <TextSection key="hero" />
        <ImageSection key="main" />
        <LinkSection key="link" />
      </main>
    </>
  );
}
