import Card from '@/components/common/Card';
import {cardData} from '@/mock/resultCard';

export default function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center gap-10">
      {cardData.map((item, index) => (
        <Card
          key={index}
          containerClassName="h-80 w-48"
          frontClassName="bg-blue-200 text-black"
          backClassName="bg-blue-400 text-black"
          frontText={item.front}
          backText={item.back}
        />
      ))}
    </div>
  );
}
