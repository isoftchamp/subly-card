import { useState } from 'react';

import { Medium } from '@/interfaces';

import { Card } from './Card';
import { LanguageFilter } from './LanguageFilter';
import { StatusFilter } from './StatusFilter';

interface Props {
  mediums: Medium[];
}

export const CardList: React.FC<Props> = ({ mediums }) => {
  // Manage selected statuses and languages as arrays for multi-select
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);

  // Get unique statuses and languages from mediums
  const statuses = Array.from(new Set(mediums.map((medium) => medium.status)));
  const languages = Array.from(new Set(mediums.flatMap((medium) => medium.languages)));

  // Filter mediums based on selected filters
  const filteredMediums = mediums.filter((medium) => {
    const matchesStatus = selectedStatuses.length === 0 || selectedStatuses.includes(medium.status);
    const matchesLanguage =
      selectedLanguages.length === 0 ||
      medium.languages.some((lang) => selectedLanguages.includes(lang));
    return matchesStatus && matchesLanguage;
  });

  return (
    <div className="max-w-screen-xl p-10">
      {/* Filter Components */}
      <div className="flex space-x-6 mb-6">
        <StatusFilter
          selectedStatuses={selectedStatuses}
          onStatusChange={setSelectedStatuses}
          availableStatuses={statuses}
        />
        <LanguageFilter
          selectedLanguages={selectedLanguages}
          onLanguageChange={setSelectedLanguages}
          languages={languages}
        />
      </div>

      {/* Grid Container */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredMediums.map((medium) => (
          <Card key={medium.id} medium={medium} />
        ))}
      </div>
    </div>
  );
};
