import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { vi } from 'vitest';

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
      expect(screen.getByLabelText(status)).toBeInTheDocument();
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
    fireEvent.click(screen.getByLabelText(availableStatuses[0]));
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
    expect(screen.getByLabelText('ready')).toBeChecked();

    // Other statuses should not be checked
    expect(screen.getByLabelText('transcribing')).not.toBeChecked();
    expect(screen.getByLabelText('error')).not.toBeChecked();
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
    fireEvent.click(screen.getByLabelText('ready'));
    expect(mockOnStatusChange).toHaveBeenCalledWith([]);
  });
});
