import React from 'react';

interface Props {
  selectedStatuses: string[];
  onStatusChange: (status: string[]) => void;
  availableStatuses: string[];
}

export const StatusFilter: React.FC<Props> = ({
  selectedStatuses,
  onStatusChange,
  availableStatuses,
}) => {
  const handleCheckboxChange = (status: string) => {
    // Toggle the status in the array
    const newStatuses = selectedStatuses.includes(status)
      ? selectedStatuses.filter((s) => s !== status)
      : [...selectedStatuses, status];
    onStatusChange(newStatuses);
  };

  return (
    <React.Fragment>
      <div className="font-medium">Status</div>
      <div className="flex space-x-4 items-center">
        {availableStatuses.map((status) => (
          <label key={status} className="inline-flex items-center space-x-2">
            <input
              type="checkbox"
              checked={selectedStatuses.includes(status)}
              onChange={() => handleCheckboxChange(status)}
              className="form-checkbox h-4 w-4"
            />
            <span className="text-sm">{status.charAt(0).toUpperCase() + status.slice(1)}</span>
          </label>
        ))}
      </div>
    </React.Fragment>
  );
};
