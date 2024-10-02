import { MediumStatus } from '@/enums';
import { Medium } from '@/interfaces';

interface Props {
  medium: Medium;
}

export const Card: React.FC<Props> = ({ medium }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden w-full relative group">
      {medium.status === MediumStatus.Error ? (
        <div className="h-48 bg-red-100 p-4 space-y-4">
          {/* Exclamation Mark Icon and Error Message */}
          <div className="mt-4 flex items-center justify-start space-x-4">
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
          <div className="flex space-x-4 justify-center">
            {/* Delete Button */}
            <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded font-medium">
              Delete File
            </button>

            {/* Report Issue Button */}
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-1 rounded font-medium">
              Report Issue
            </button>
          </div>
        </div>
      ) : medium.status === MediumStatus.Transcribing ? (
        <div className="relative">
          <img src={medium.image} alt="Cover" className="w-full h-48 object-cover" />
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
          <img src={medium.image} alt="Cover" className="w-full h-48 object-cover" />
          <div className="absolute top-0 left-0 w-full h-full items-center justify-center bg-black bg-opacity-30 hidden group-hover:flex">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded font-medium">
              Edit
            </button>
            <span className="text-white ml-4">
              <span className="font-medium">{medium.languages.length}</span> languages
            </span>
          </div>
        </div>
      )}

      <div className="p-4">
        <div className="justify-between items-center">
          {/* Title */}
          <h2 className="text-lg font-semibold truncate w-full">{medium.title}</h2>
          <span
            className={`px-2 py-1 text-sm rounded uppercase font-medium ${
              medium.status === MediumStatus.Ready
                ? 'bg-green-100 text-green-700'
                : medium.status === MediumStatus.Transcribing
                  ? 'bg-yellow-100 text-yellow-700'
                  : 'bg-red-100 text-red-700'
            }`}
          >
            {medium.status}
          </span>
        </div>
      </div>
    </div>
  );
};
