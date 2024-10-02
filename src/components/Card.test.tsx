import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';

import { MediumStatus } from '@/enums';
import { Medium } from '@/interfaces';

import { Card } from './Card';

// Mock the formatTimeAgo function
vi.mock('@/utils', () => ({
  formatTimeAgo: vi.fn(() => '2 days ago'), // Mocking the output
}));

// Mock Medium object
const mockMedium: Medium = {
  id: '1',
  cover: 'https://picsum.photos/400/200?1',
  name: 'Test Medium',
  status: MediumStatus.Ready,
  languages: ['en'],
  updatedAt: '2024-09-25T12:00:00Z', // ISO format for consistency
  createdAt: '2024-09-24T12:00:00Z', // ISO format for consistency
};

describe('Card Component', () => {
  it('renders without crashing', () => {
    render(<Card medium={mockMedium} />);
    expect(screen.getByText('Test Medium')).toBeInTheDocument();
  });

  it('shows error message when status is error', () => {
    render(<Card medium={{ ...mockMedium, status: MediumStatus.Error }} />);
    expect(
      screen.getByText(
        'An error occurred while processing your file. Delete the file to try again, and report the issue if the problem persists.',
      ),
    ).toBeInTheDocument();
  });

  it('shows transcribing state when status is transcribing', () => {
    render(<Card medium={{ ...mockMedium, status: MediumStatus.Transcribing }} />);
    expect(screen.getByText('Transcibing subtitle')).toBeInTheDocument();
  });

  it('displays "Delete File" and "Report Issue" buttons when in error state', () => {
    render(<Card medium={{ ...mockMedium, status: MediumStatus.Error }} />);
    expect(screen.getByText('Delete File')).toBeInTheDocument();
    expect(screen.getByText('Report Issue')).toBeInTheDocument();
  });

  it('displays the correct status and time ago message', () => {
    render(<Card medium={mockMedium} />);
    expect(screen.getByText('Edited 2 days ago')).toBeInTheDocument();
  });

  it('renders languages correctly in the default state', () => {
    render(<Card medium={mockMedium} />);
    expect(screen.getByText(/1*languages/i)).toBeInTheDocument();
  });

  it('renders the cover image correctly', () => {
    render(<Card medium={mockMedium} />);
    const image = screen.getByAltText('Cover');
    expect(image).toHaveAttribute('src', mockMedium.cover);
    expect(image).toHaveAttribute('class', 'w-full h-48 object-cover');
  });

  it('shows correct progress bar and percentage when status is transcribing', () => {
    render(<Card medium={{ ...mockMedium, status: MediumStatus.Transcribing }} />);
    expect(screen.getByText('75%')).toBeInTheDocument();
    expect(screen.getByText('Transcibing subtitle')).toBeInTheDocument();
  });

  it('shows edit button on hover in the default state', () => {
    render(<Card medium={mockMedium} />);
    const card = screen.getByText('Test Medium').closest('div'); // Get the parent div of the card
    expect(card).toBeInTheDocument();

    // Simulate hover by adding the group-hover class (you may need to adjust this based on your setup)
    card?.classList.add('group-hover:flex');

    expect(screen.getByText('Edit')).toBeInTheDocument();
  });
});
