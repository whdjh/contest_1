import Card from '@/components/common/Card';
import { cardData } from '@/mock/resultCard';
import Pagination from '@/components/common/Pagination';

export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Pagination
        data={cardData}
        CardComponent={Card}
        pageSize={3}
      />
    </div>
  );
}
