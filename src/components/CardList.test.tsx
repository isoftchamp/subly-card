import { render, screen } from '@testing-library/react';

import { MediumStatus } from '@/enums';
import { Medium } from '@/interfaces';

import { CardList } from './CardList';

// Sample mock data for mediums
const mockMediums: Medium[] = [
  {
    id: '1',
    title: 'Mock Title 1',
    image: 'https://picsum.photos/400/200?1',
    status: MediumStatus.Ready,
    languages: ['en'],
    updated: 'September 30, 2024',
  },
  {
    id: '2',
    title: 'Mock Title 2',
    image: 'https://picsum.photos/400/200?2',
    status: MediumStatus.Transcribing,
    languages: ['es'],
    updated: 'September 25, 2024',
  },
  {
    id: '3',
    title: 'Mock Title 3',
    image: 'https://picsum.photos/400/200?3',
    status: MediumStatus.Error,
    languages: ['fr'],
    updated: 'September 28, 2024',
  },
];

describe('CardList Component', () => {
  it('renders the correct number of Card components', () => {
    render(<CardList mediums={mockMediums} />);

    // Check if the correct number of Card components are rendered based on titles
    const cards = screen.getAllByRole('heading', { level: 2 });
    expect(cards.length).toBe(mockMediums.length);
  });

  it('displays titles of the mediums', () => {
    render(<CardList mediums={mockMediums} />);

    // Check if all titles are displayed correctly
    mockMediums.forEach((medium) => {
      expect(screen.getByText(medium.title)).toBeInTheDocument();
    });
  });

  it('displays the correct status badges for each medium', () => {
    render(<CardList mediums={mockMediums} />);

    // Check if the correct status badges are displayed based on the medium status
    expect(screen.getByText(MediumStatus.Ready)).toHaveClass('bg-green-100 text-green-700');
    expect(screen.getByText(MediumStatus.Transcribing)).toHaveClass(
      'bg-yellow-100 text-yellow-700',
    );
    expect(screen.getByText(MediumStatus.Error)).toHaveClass('bg-red-100 text-red-700');
  });

  it('displays the correct error message for mediums with error status', () => {
    render(<CardList mediums={mockMediums} />);

    // Check if the error message is displayed for mediums with "error" status
    expect(
      screen.getByText(
        'An error occurred while processing your file. Delete the file to try again, and report the issue if the problem persists.',
      ),
    ).toBeInTheDocument();
  });

  it('displays buttons for mediums with error status', () => {
    render(<CardList mediums={mockMediums} />);

    // Check if "Delete File" and "Report Issue" buttons are displayed for error status mediums
    expect(screen.getByText('Delete File')).toBeInTheDocument();
    expect(screen.getByText('Report Issue')).toBeInTheDocument();
  });
});
