import React from "react";

const FourAdditionPicture = () => {
  return (
    <div className="mt-10">
      <h1 className="p-5 text-center py-2 font-bold text-xl md:text-2xl lg:text-3xl">
        Claim these incredible additions to your workshop experience!
      </h1>
      <div className="flex justify-center mb-4">
          <svg
            width="400"
            height="30"
            viewBox="0 0 100 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 15 Q 50 0, 95 15"
              stroke="yellow"
              strokeWidth="5"
              fill="none"
            />
          </svg>
        </div>
      <div className="space-y- p-5 cards grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* cards1 */}
       
         <div className="rounded-xl radius-yellow cards1 flex flex-col justify-center items-center p-5 h-48">
          <img
            className="h-16 w-16 mb-4"
            src="\zigzag-arrow_5468200.png"
            alt=""
          />
          <h2 className="text-center py-2">Actionable Leadership Roadmap</h2>
        </div>
        {/* cards2 */}
        <div className="rounded-xl radius-yellow cards1 flex flex-col justify-center items-center p-5 h-48">
          <img
            className="h-16 w-16 mb-4"
            src="\search-engine-optimization_10052001.png"
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
            src="\stakeholder_7740927.png"
            alt=""
          />
          <h2 className="text-center py-2">Time Management and Prioritization</h2>
        </div>
        {/* cards4 */}
        <div className="rounded-xl radius-yellow cards1 flex flex-col justify-center items-center p-5 h-48">
          <img
            className="h-16 w-16 mb-4"
            src="\connection_6764028.png"
            alt=""
          />
          <h2 className="text-center py-2">Team Building and Collaboration</h2>
        </div>
      </div>
    </div>
  );
};

export default FourAdditionPicture;
