import { Medium } from '@/interfaces';

import { Card } from './Card';

interface Props {
  mediums: Medium[];
}

export const CardList: React.FC<Props> = ({ mediums }) => {
  return (
    <div className="p-10">
      {/* Grid Container */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {mediums.map((medium) => (
          <Card key={medium.id} medium={medium} />
        ))}
      </div>
    </div>
  );
};
