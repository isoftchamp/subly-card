import React from 'react';

interface Props {
  selectedLanguages: string[];
  onLanguageChange: (languages: string[]) => void;
  languages: string[];
}

export const LanguageFilter: React.FC<Props> = ({
  selectedLanguages,
  onLanguageChange,
  languages,
}) => {
  const handleCheckboxChange = (language: string) => {
    // Toggle the language in the array
    const newLanguages = selectedLanguages.includes(language)
      ? selectedLanguages.filter((l) => l !== language)
      : [...selectedLanguages, language];
    onLanguageChange(newLanguages);
  };

  return (
    <React.Fragment>
      <div className="font-medium">Language</div>
      <div className="flex space-x-4 items-center">
        {languages.map((language) => (
          <label key={language} className="inline-flex items-center space-x-2">
            <input
              type="checkbox"
              checked={selectedLanguages.includes(language)}
              onChange={() => handleCheckboxChange(language)}
              className="form-checkbox h-4 w-4"
            />
            <span className="text-sm uppercase">{language}</span>
          </label>
        ))}
      </div>
    </React.Fragment>
  );
};
