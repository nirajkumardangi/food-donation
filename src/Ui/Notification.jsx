import React, { useState, useEffect } from 'react';
import { Button } from "@material-tailwind/react";
import Notification from './Notification';

export default function ButtonLoader() {
  const [showNotification, setShowNotification] = useState(false);

  // Use useEffect for proper notification display duration
  useEffect(() => {
    if (showNotification) {
      const timeoutId = setTimeout(() => {
        setShowNotification(false);
      }, 3000); // Ensure notification shows for 3 seconds

      // Cleanup function to clear timeout if component unmounts prematurely
      return () => clearTimeout(timeoutId);
    }
  }, [showNotification]); // Dependency on showNotification for effect rerun

  const handleClick = () => {
    setShowNotification(true);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <Button
        loading={true}
        loaderProps={{ style: { color: '#1f2937' } }} // Inline style for dark gray color
        className="bg-orange-500 hover:bg-orange-600 w-full flex justify-center items-center"
        onClick={handleClick}
      >
        Loading
      </Button>
      {showNotification && <Notification title="Success!" />}
    </div>
  );
}
