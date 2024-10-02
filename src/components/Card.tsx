import React from 'react';

import { MediumStatus } from '@/enums';
import { Medium } from '@/interfaces';
import { formatTimeAgo } from '@/utils';

interface Props {
  medium: Medium;
}

export const Card: React.FC<Props> = React.memo(({ medium }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden w-full relative group">
      {medium.status === MediumStatus.Error ? (
        <div className="h-48 bg-red-100 p-4 space-y-4">
          {/* Exclamation Mark Icon and Error Message */}
          <div className="mt-4 flex items-center justify-start space-x-4 h-20">
            {/* Exclamation Mark Icon */}
            <div className="flex justify-center items-center border-2 border-red-500 text-red-500 rounded-full aspect-square w-10 h-10">
              <span className="text-xl font-bold">!</span>
            </div>

            {/* Error Message */}
            <p className="text-red-700">
              {medium.errorMessage ||
                'An error occurred while processing your file. Delete the file to try again, and report the issue if the problem persists.'}
            </p>
          </div>

          {/* Buttons */}
          <div className="flex space-x-4 justify-end">
            {/* Delete Button */}
            <button className="border border-gray-500 bg-white hover:border-transparent hover:bg-red-700 text-gray-800 hover:text-white px-3 py-1 rounded transition-colors">
              Delete File
            </button>

            {/* Report Issue Button */}
            <button className="bg-purple-600 hover:bg-purple-800 text-white px-3 py-1 rounded transition-colors">
              Report Issue
            </button>
          </div>
        </div>
      ) : medium.status === MediumStatus.Transcribing ? (
        <div className="relative">
          <img src={medium.cover} alt="Cover" className="w-full h-48 object-cover" />
          <div className="absolute top-0 left-0 w-full h-full bg-gray-200 bg-opacity-50 flex items-center justify-center">
            <div className="w-5/6">
              <p className="text-center font-medium">Transcibing subtitle</p>
              <div className="flex justify-between items-center mt-5">
                <div
                  className="w-full h-3 bg-purple-700 rounded-full bg-stripes animate-move-stripes"
                  style={{ width: `75%` }}
                ></div>
                <span className="ml-2 text-purple-700 font-medium">75%</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="relative">
          <img src={medium.cover} alt="Cover" className="w-full h-48 object-cover" />
          <div className="absolute top-0 left-0 w-full h-full items-center justify-center bg-black bg-opacity-30 hidden group-hover:flex">
            <button className="border border-white bg-transparent hover:border-transparent hover:bg-blue-600 text-white px-4 py-1 rounded transition-colors">
              Edit
            </button>
            <span className="text-white ml-4">
              <span className="font-medium">{medium.languages.length}</span> languages
            </span>
          </div>
        </div>
      )}

      <div className="px-4 py-3">
        {/* Name displayed on the first line */}
        <h2 className="text-lg font-semibold truncate capitalize-first-letter">{medium.name}</h2>

        {/* Status Badge */}
        <span className="text-sm rounded text-gray-500">
          {medium.status === MediumStatus.Ready
            ? `Edited ${formatTimeAgo(medium.updatedAt ?? medium.createdAt)}`
            : medium.status === MediumStatus.Transcribing
              ? 'Transcribing'
              : 'Error in processing'}
        </span>
      </div>
    </div>
  );
});

export const SkeletonCard: React.FC = () => {
  return (
    <div className="bg-gray-200 animate-pulse shadow-md rounded-lg overflow-hidden w-full">
      <div className="h-48 bg-gray-300"></div>
      <div className="p-4">
        <div className="h-6 bg-gray-300 rounded mb-2"></div>
        <div className="flex justify-between items-center">
          <div className="h-4 bg-gray-300 rounded w-1/4"></div>
          <div className="h-4 bg-gray-300 rounded w-1/4"></div>
        </div>
      </div>
    </div>
  );
};
