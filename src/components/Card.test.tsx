import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { MediumStatus } from '@/enums';
import { Medium } from '@/interfaces';

import { Card } from './Card';

// Mock Medium object
const mockMedium: Medium = {
  id: '1',
  image: 'https://picsum.photos/400/200?1',
  title: 'Test Medium',
  status: MediumStatus.Ready,
  languages: ['en'],
  updated: 'September 25, 2024',
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

  it('applies the correct status color for the badge', () => {
    const { rerender } = render(<Card medium={mockMedium} />);
    expect(screen.getByText(MediumStatus.Ready)).toHaveClass('bg-green-100 text-green-700');

    rerender(<Card medium={{ ...mockMedium, status: MediumStatus.Transcribing }} />);
    expect(screen.getByText(MediumStatus.Transcribing)).toHaveClass(
      'bg-yellow-100 text-yellow-700',
    );

    rerender(<Card medium={{ ...mockMedium, status: MediumStatus.Error }} />);
    expect(screen.getByText(MediumStatus.Error)).toHaveClass('bg-red-100 text-red-700');
  });

  it('renders "Delete File" and "Report Issue" buttons when in error state', () => {
    render(<Card medium={{ ...mockMedium, status: MediumStatus.Error }} />);
    expect(screen.getByText('Delete File')).toBeInTheDocument();
    expect(screen.getByText('Report Issue')).toBeInTheDocument();
  });

  it('centers the error state buttons correctly', () => {
    render(<Card medium={{ ...mockMedium, status: MediumStatus.Error }} />);
    const buttonContainer = screen.getByText('Delete File').closest('div');
    expect(buttonContainer).toHaveClass('justify-center');
  });
});
