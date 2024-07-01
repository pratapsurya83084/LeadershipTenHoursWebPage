import React from 'react';

const Vidios = () => {
  return (
    <section>
<h2 className='text-2xl font-bold text-center p-2 mt-4'>Engage in immersive learning and unleash your leadership brilliance</h2>
  
    <div className='flex justify-center items-center '>
      
      <div className='grid grid-cols-1 md:grid-cols-2 md:space-x-2 '>
        <iframe
          src="/Testimonials1_vidio.mp4"
          
          frameBorder="0"
          width="360"
        //   className='p-2'
          height="315"
          allowFullScreen
          title="Local Video 1"
        ></iframe>
        <iframe
          src="/Testimonails2_vidio.mp4"
          frameBorder="0"
        //   className='p-2'
          width="360"
          height="315"
          allowFullScreen
          title="Local Video 2"
        ></iframe>

       
        <iframe
          width="370"
          className='p-2'
          height="215"
          src="https://www.youtube.com/embed/-qfJYcEn3Yg"
          frameBorder="0"
          allowFullScreen
          title="YouTube Video 1"
        ></iframe>
        <iframe
        className='p-2'
          width="360"
          height="215"
          src="https://www.youtube.com/embed/uTA1M5Kdfeo"
          frameBorder="0"
          allowFullScreen
          title="YouTube Video 2"
        ></iframe>
       
      </div>
    </div>
    </section>
  );
}

export default Vidios;
