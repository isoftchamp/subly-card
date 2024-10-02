import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';

import { MediumStatus } from '@/enums';
import { Medium } from '@/interfaces';

import { CardList } from './CardList';

// Mocking the Card and SkeletonCard components
vi.mock('./Card', () => ({
  Card: ({ medium }: { medium: Medium }) => <div data-testid="card">{medium.name}</div>,
  SkeletonCard: () => <div data-testid="skeleton-card" className="skeleton" />,
}));

describe('CardList Component', () => {
  const mediums: Medium[] = [
    {
      id: '1',
      name: 'Medium 1',
      status: MediumStatus.Ready,
      cover: '',
      createdAt: '2024-07-26T11:02:20.451Z',
      updatedAt: '2024-07-26T11:02:38.223Z',
      languages: [],
    },
    {
      id: '2',
      name: 'Medium 2',
      status: MediumStatus.Transcribing,
      cover: '',
      createdAt: '2024-07-26T11:02:20.451Z',
      updatedAt: '2024-07-26T11:02:38.223Z',
      languages: [],
    },
    {
      id: '3',
      name: 'Medium 3',
      status: MediumStatus.Error,
      errorMessage: 'Error message',
      cover: '',
      createdAt: '2024-07-26T11:02:20.451Z',
      updatedAt: '2024-07-26T11:02:38.223Z',
      languages: [],
    },
  ];

  it('renders skeleton cards when loading', () => {
    render(<CardList mediums={[]} loading={true} />);

    const skeletonCards = screen.getAllByTestId('skeleton-card');
    expect(skeletonCards.length).toBe(6); // Check for 6 skeleton cards
  });

  it('renders actual cards when not loading', () => {
    render(<CardList mediums={mediums} loading={false} />);

    const cards = screen.getAllByTestId('card');
    expect(cards.length).toBe(mediums.length); // Check for correct number of cards

    mediums.forEach((medium) => {
      expect(screen.getByText(medium.name)).toBeInTheDocument(); // Check if each medium name is displayed
    });
  });
});
