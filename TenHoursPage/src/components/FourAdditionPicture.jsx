import React from "react";

const FourAdditionPicture = () => {
  return (
    <div className="mt-10">
      <h1 className="p-5 text-center py-2 font-bold text-2xl">
        Claim these incredible additions to your workshop experience!
      </h1>
      <div className="space-y- p-5 cards grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* cards1 */}
       
         <div className="rounded-xl radius-yellow cards1 flex flex-col justify-center items-center p-5 h-48">
          <img
            className="h-16 w-16 mb-4"
            src="https://course.bishopadhikari.com/images/Actionable%20Leadership%20Roadmap.png"
            alt=""
          />
          <h2 className="text-center py-2">Actionable Leadership Roadmap</h2>
        </div>
        {/* cards2 */}
        <div className="rounded-xl radius-yellow cards1 flex flex-col justify-center items-center p-5 h-48">
          <img
            className="h-16 w-16 mb-4"
            src="https://course.bishopadhikari.com/images/Strategic%20Decision-Making%20Skills.png"
            alt=""
          />
          <h2 className="text-center py-2">
            Strategic Decision-Making Skills
          </h2>
        </div>
        {/* cards3 */}
        <div className="rounded-xl radius-yellow cards1 flex flex-col justify-center items-center p-5 h-48">
          <img
            className="h-16 w-16 mb-4"
            src="https://course.bishopadhikari.com/images/Time%20Management%20and%20Prioritization.png"
            alt=""
          />
          <h2 className="text-center py-2">Time Management and Prioritization</h2>
        </div>
        {/* cards4 */}
        <div className="rounded-xl radius-yellow cards1 flex flex-col justify-center items-center p-5 h-48">
          <img
            className="h-16 w-16 mb-4"
            src="https://course.bishopadhikari.com/images/Team%20Building%20and%20Collaboration.png"
            alt=""
          />
          <h2 className="text-center py-2">Team Building and Collaboration</h2>
        </div>
      </div>
    </div>
  );
};

export default FourAdditionPicture;
