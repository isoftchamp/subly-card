import React from 'react';

import { CardList } from './components';
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
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <CardList mediums={mediums} />
    </div>
  );
};

export default App;
