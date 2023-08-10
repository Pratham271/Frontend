import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Frontpage from './Frontpage';
import ResponsivePage from './ResponsivePage';

const FinalComponent = () => {
  const [isScreenSizeLessThan400, setIsScreenSizeLessThan400] = useState(
    window.innerWidth <= 500
  );

  useEffect(() => {
    // Function to update the state when the screen size changes
    const handleResize = () => {
      setIsScreenSizeLessThan400(window.innerWidth <= 500);
    };

    // Listen for resize events
    window.addEventListener('resize', handleResize);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={`App ${isScreenSizeLessThan400 ? 'bg-white' : 'bg-gray-100'}`}>
      {isScreenSizeLessThan400 ? (
        // For small screens (screen size less than or equal to 400)
        <div className="">
          <Sidebar />
          <ResponsivePage className="" />
        </div>
      ) : (
        // For larger screens (screen size greater than 400)
        <div className="grid grid-cols-10">
          <div className="col-span-1">
            <Sidebar />
          </div>
          <div className="col-span-9">
            <Frontpage />
          </div>
        </div>
      )}
    </div>
  );
};

export default FinalComponent;
