import React, { useState } from 'react';

import { CardList, LanguageFilter, StatusFilter } from './components';
import { Language, MediumStatus } from './enums';
import { Medium } from './interfaces';

import './App.css';

const mediums: Medium[] = [
  {
    id: '1',
    image: 'https://picsum.photos/400/200?1',
    title: 'Understanding JavaScript Closures',
    status: 'ready',
    languages: ['en'],
    updated: 'September 25, 2024',
  },
  {
    id: '2',
    image: 'https://picsum.photos/400/200?2',
    title: 'Design Patterns in React',
    status: 'transcribing',
    languages: ['en', 'de'],
    updated: 'October 1, 2024',
  },
  {
    id: '3',
    image: 'https://picsum.photos/400/200?3',
    title: 'A Guide to TypeScript Generics',
    status: 'ready',
    languages: ['en', 'es'],
    updated: 'August 15, 2024',
  },
  {
    id: '4',
    image: 'https://picsum.photos/400/200?4',
    title: 'How to Succeed as a Freelance Developer',
    status: 'error',
    languages: ['en', 'ru'],
    updated: 'July 30, 2024',
  },
  {
    id: '5',
    image: 'https://picsum.photos/400/200?5',
    title: 'Building Scalable Applications with Microservices',
    status: 'ready',
    languages: ['en'],
    updated: 'October 1, 2024',
  },
];

const App: React.FC = () => {
  // Manage selected statuses and languages as arrays for multi-select
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);

  // Get unique statuses and languages from mediums
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

  return (
    <div className="flex justify-center h-screen bg-gray-100">
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
        <CardList mediums={filteredMediums} />
      </div>
    </div>
  );
};

export default App;
