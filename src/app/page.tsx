import RotateSection from '@/components/product/main/RotateSection';
import TextSection from '@/components/product/main/TextSeciton';
import ImageSection from '@/components/product/main/ImageSection';
import LinkSection from '@/components/product/main/LinkSection';
import SectionWrapper from '@/components/product/main/SectionWrapper';
import FloatingButton from '@/components/common/FloatingButton';

export default function Home() {
  return (
    <main className="bg-white dark:bg-black overflow-hidden">
      <SectionWrapper direction="right">
        <RotateSection />
      </SectionWrapper>

      <SectionWrapper direction="left">
        <TextSection />
      </SectionWrapper>

      <SectionWrapper direction="right">
        <ImageSection />
      </SectionWrapper>

      <SectionWrapper direction="up">
        <LinkSection />
      </SectionWrapper>

      <FloatingButton />
    </main>
  );
}
