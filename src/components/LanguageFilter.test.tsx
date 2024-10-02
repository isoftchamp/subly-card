import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { vi } from 'vitest';

import { LanguageFilter } from './LanguageFilter';

describe('LanguageFilter Component', () => {
  const languages = ['en', 'es', 'fr'];

  it('renders all language checkboxes', () => {
    render(
      <LanguageFilter selectedLanguages={[]} onLanguageChange={() => {}} languages={languages} />,
    );

    // Check if each language checkbox is rendered
    languages.forEach((lang) => {
      expect(screen.getByLabelText(lang)).toBeInTheDocument();
    });
  });

  it('handles language checkbox selection', () => {
    const mockOnLanguageChange = vi.fn();

    render(
      <LanguageFilter
        selectedLanguages={[]}
        onLanguageChange={mockOnLanguageChange}
        languages={languages}
      />,
    );

    // Select the first checkbox
    fireEvent.click(screen.getByLabelText(languages[0]));
    expect(mockOnLanguageChange).toHaveBeenCalledWith([languages[0]]);
  });

  it('reflects selected languages correctly', () => {
    render(
      <LanguageFilter
        selectedLanguages={['en']}
        onLanguageChange={() => {}}
        languages={languages}
      />,
    );

    // Check if the 'en' checkbox is checked
    expect(screen.getByLabelText('en')).toBeChecked();

    // Other languages should not be checked
    expect(screen.getByLabelText('es')).not.toBeChecked();
    expect(screen.getByLabelText('fr')).not.toBeChecked();
  });

  it('toggles language selection correctly', () => {
    const mockOnLanguageChange = vi.fn();
    render(
      <LanguageFilter
        selectedLanguages={['en']}
        onLanguageChange={mockOnLanguageChange}
        languages={languages}
      />,
    );

    // Uncheck the 'en' checkbox
    fireEvent.click(screen.getByLabelText('en'));
    expect(mockOnLanguageChange).toHaveBeenCalledWith([]);
  });
});
