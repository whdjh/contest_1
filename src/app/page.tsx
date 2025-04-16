import TextSection from '@/components/product/main/TextSeciton';
import ImageSection from '@/components/product/main/ImageSection';
import LinkSection from '@/components/product/main/LinkSection';
import HomeContent from '@/components/product/main/homeContent';
import RotateSection from '@/components/product/main/RotateSection';

export default function Home() {
  return (
    <>
      <main className="bg-white">
        <RotateSection
          images={[
            '/image/1.jpeg',
            '/image/2.jpeg',
            '/image/3.jpg',
            '/image/4.jpeg',
            '/image/5.jpeg',
            '/image/6.jpeg',
            '/image/7.jpeg',
            '/image/8.jpg',
          ]}
        />
        <TextSection key="hero" />

        <ImageSection key="main" />
        <LinkSection key="link" />
        <HomeContent />
      </main>
    </>
  );
}
