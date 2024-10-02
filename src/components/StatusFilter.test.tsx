import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { vi } from 'vitest';

import { capitalizeFirstLetter } from '@/utils';

import { StatusFilter } from './StatusFilter';

describe('StatusFilter Component', () => {
  const availableStatuses = ['ready', 'transcribing', 'error'];

  it('renders all status checkboxes', () => {
    render(
      <StatusFilter
        selectedStatuses={[]}
        onStatusChange={() => {}}
        availableStatuses={availableStatuses}
      />,
    );

    // Check if each status checkbox is rendered
    availableStatuses.forEach((status) => {
      expect(screen.getByLabelText(capitalizeFirstLetter(status))).toBeInTheDocument();
    });
  });

  it('handles status checkbox selection', () => {
    const mockOnStatusChange = vi.fn();

    render(
      <StatusFilter
        selectedStatuses={[]}
        onStatusChange={mockOnStatusChange}
        availableStatuses={availableStatuses}
      />,
    );

    // Select the first checkbox
    fireEvent.click(screen.getByLabelText(capitalizeFirstLetter(availableStatuses[0])));
    expect(mockOnStatusChange).toHaveBeenCalledWith([availableStatuses[0]]);
  });

  it('reflects selected statuses correctly', () => {
    render(
      <StatusFilter
        selectedStatuses={['ready']}
        onStatusChange={() => {}}
        availableStatuses={availableStatuses}
      />,
    );

    // Check if the 'ready' checkbox is checked
    expect(screen.getByLabelText('Ready')).toBeChecked();

    // Other statuses should not be checked
    expect(screen.getByLabelText('Transcribing')).not.toBeChecked();
    expect(screen.getByLabelText('Error')).not.toBeChecked();
  });

  it('toggles status selection correctly', () => {
    const mockOnStatusChange = vi.fn();
    render(
      <StatusFilter
        selectedStatuses={['ready']}
        onStatusChange={mockOnStatusChange}
        availableStatuses={availableStatuses}
      />,
    );

    // Uncheck the 'ready' checkbox
    fireEvent.click(screen.getByLabelText('Ready'));
    expect(mockOnStatusChange).toHaveBeenCalledWith([]);
  });
});
