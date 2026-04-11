import React from 'react';

const MealsSkeleton = () => {
  return (
    <div className="w-full mx-auto backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl rounded-2xl overflow-hidden mt-4 mb-4 flex flex-col animate-pulse">
      {/* Image Placeholder */}
      <div className="relative h-64 w-full bg-white/10"></div>
      
      <div className="p-6 flex-grow flex flex-col">
        {/* Title Placeholder */}
        <div className="h-8 bg-white/10 rounded-md w-3/4 mb-4"></div>
        
        <div className="space-y-4 flex-grow mt-2">
          {/* Details Placeholder */}
          <div className="h-4 bg-white/10 rounded-md w-1/2"></div>
          <div className="h-4 bg-white/10 rounded-md w-2/3"></div>
        </div>
        
        {/* Footer Placeholder */}
        <div className="mt-6 pt-6 border-t border-white/5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white/10"></div>
              <div className="space-y-2">
                <div className="h-4 bg-white/10 rounded-md w-24"></div>
                <div className="h-3 bg-white/10 rounded-md w-16"></div>
              </div>
            </div>
            <div className="h-10 bg-white/10 rounded-xl w-24"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealsSkeleton;
