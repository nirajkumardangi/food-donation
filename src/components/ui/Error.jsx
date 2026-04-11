import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ExclamationCircleIcon } from '@heroicons/react/solid';

const ErrorPage = ({ title, message, onDismiss }) => {
  const [isVisible, setIsVisible] = useState(true); // Track error page visibility

  const handleDismiss = () => {
    setIsVisible(false); // Hide the error page
    if (onDismiss) {
      onDismiss(); // Call a callback function for optional actions
    }
  };

  return (
    isVisible && ( // Only render if error page is visible
      <div className="error-page fixed inset-0 flex items-center justify-center bg-white bg-opacity-90 z-50">
        <div className="bg-gray-900 rounded-lg p-10 px-20 shadow-lg max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl text-center"> {/* Responsive max-width */}
          <ExclamationCircleIcon className="w-16 h-16 text-red-500 mx-auto" /> {/* Increased icon size */}
          <h1 className="mt-2 text-2xl font-bold text-primary-color">{title}</h1> {/* Increased heading size */}
          <p className="mt-1 text-white">{message}</p>
          <button className="mt-4 px-6 font-semibold text-black py-2 bg-secondary-color  border-blue-900 rounded hover:bg-yellow-700" onClick={handleDismiss}>
            Cut
          </button>
        </div>
      </div>
    )
  );
};

ErrorPage.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  onDismiss: PropTypes.func, // Optional callback for actions on dismissal
};

export default ErrorPage;
