import React, { useState } from 'react';

import { CardList, LanguageFilter, StatusFilter } from './components';
import { Language, MediumStatus } from './enums';
import { useMedium } from './hooks';

import './App.css';

const App: React.FC = () => {
  // Manage selected statuses and languages as arrays for multi-select
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);

  // Pull mediums data from cloud
  const { mediums, loading, error } = useMedium();

  const statuses = Object.values(MediumStatus);
  const languages = Object.values(Language);

  // Filter mediums based on selected filters
  const filteredMediums = mediums.filter((medium) => {
    const matchesStatus = selectedStatuses.length === 0 || selectedStatuses.includes(medium.status);
    const matchesLanguage =
      selectedLanguages.length === 0 ||
      medium.languages.some((lang) => selectedLanguages.includes(lang));
    return matchesStatus && matchesLanguage;
  });

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="flex justify-center bg-gray-100">
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

        {/* CardList component */}
        <CardList mediums={filteredMediums} loading={loading} />
      </div>
    </div>
  );
};

export default App;
