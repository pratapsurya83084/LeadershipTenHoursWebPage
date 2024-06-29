import React from 'react';

const SingleVideoSection = () => {
  return (
   
    // <section className=" ">
    <div className="container mx-auto flex flex-col md:flex-row justify-center items-center px-5 py-4 md:mt-10">
    <div className="mb-6 md:mb-0 md:mr-5">
      <iframe 
        className="rounded h-[250px] sm:h-[300px] md:h-[350px] w-[300px] sm:w-[400px] md:w-[450px]" 
        alt="hero" 
        src="\10hours_course_vidio.mp4"
        frameBorder="0">
      </iframe>
    </div>
    <div className="lg:flex-grow md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
      <p className="mb-8 leading-relaxed text-xl">
        Build and lead high-performing, cohesive groups and inspire your team with enhanced communication.
        <br />
        Elevate Your 10-Hour Live Training Experience!
      </p>
      <div className="flex justify-center md:justify-start text-yellow-200 font-bold text-xl">
        <h2 className="text-center">Limited Spots Available – Seize the Opportunity!</h2>
      </div>
    </div>
  </div>
  
//   </section>
  
  );
}

export default SingleVideoSection;
