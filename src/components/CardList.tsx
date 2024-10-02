import { Medium } from '@/interfaces';

import { Card, SkeletonCard } from './Card';

interface Props {
  mediums: Medium[];
  loading: boolean;
}

export const CardList: React.FC<Props> = ({ mediums, loading }) => {
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {loading ? (
        // Render skeleton loaders while loading
        <>
          {Array.from({ length: 6 }, (_, index) => (
            <SkeletonCard key={index} />
          ))}
        </>
      ) : (
        // Render actual cards when not loading
        mediums.map((medium) => <Card key={medium.id} medium={medium} />)
      )}
    </div>
  );
};
