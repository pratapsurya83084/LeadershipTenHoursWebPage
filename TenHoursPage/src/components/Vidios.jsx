import React from "react";

const Vidios = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold text-center p-2 mt-4">
        Engage in immersive learning and unleash your leadership brilliance
      </h2>

      {/* <div classNameName='flex justify-center items-center '>
      
      <div classNameName='grid grid-cols-1 md:grid-cols-2 md:space-x-2 '>
      <iframe
          src="/Testimonials1_vidio.mp4"
          frameBorder="0"
          width="360"
          height="315"
          allowFullScreen
          title="Local Video 1"
          classNameName=' '
        ></iframe>
        <iframe
          src="/Testimonails2_vidio.mp4"
          frameBorder="0"
          width="360"
          height="315"
          allowFullScreen
          title="Local Video 2"
          classNameName='m-0 p-0'
        ></iframe>

       
        <iframe
          width="370"
          classNameName='p-1 rounded-xl md:p-2.5'
          height="215"
          src="https://www.youtube.com/embed/-qfJYcEn3Yg"
          frameBorder="0"
          allowFullScreen
          title="YouTube Video 1"
        ></iframe>
        <iframe
        classNameName='md:p-2 p- rounded-xl '
          width="360"
          height="215"
          src="https://www.youtube.com/embed/uTA1M5Kdfeo"
          frameBorder="0"
          allowFullScreen
          title="YouTube Video 2"
        ></iframe>
       
      </div>
    </div> */}

<div className="flex justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-screen-lg">
        <div className="video-2">
          <iframe
            src="/Testimonials1_vidio.mp4"
            type="video/mp4"
            frameBorder="0"
            width="100%"
            height="315"
            className="block rounded-xl"
          ></iframe>
        </div>
        <div className="video-2">
          <iframe
            src="/Testimonails2_vidio.mp4"
            type="video/mp4"
            frameBorder="0"
            width="100%"
            height="315"
            className="block rounded-xl"
          ></iframe>
        </div>
        <div className="video-2 p-2">
          <iframe
            width="100%"
            height="215"
            src="https://www.youtube.com/embed/-qfJYcEn3Yg"
            frameBorder="0"
            allowFullScreen
            title="YouTube Video 1"
            className="block rounded-xl"
          ></iframe>
        </div>
        <div className="video-2 p-2">
          <iframe
            width="100%"
            height="215"
            src="https://www.youtube.com/embed/uTA1M5Kdfeo"
            frameBorder="0"
            allowFullScreen
            title="YouTube Video 2"
            className="block rounded-xl"
          ></iframe>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Vidios;
