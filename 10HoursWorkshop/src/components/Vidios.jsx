import React ,{useEffect,useRef}  from "react";

const Vidios = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-scroll');
        } else {
          entry.target.classList.remove('animate-scroll');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const elements = section.querySelectorAll('.smooth-scroll');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section  
    ref={sectionRef}
    >
      <h2 className=" smooth-scroll text-xl md:text-2xl lg:text-3xl font-bold text-center p-2 mt-4">
        Engage in immersive learning and career
         unleash your  full potential
         {/* leadership brilliance */}
      </h2>
      <div className=" smooth-scroll flex justify-center mb-4">
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
      </div>
    </div> */}

<div className="flex justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-screen-lg">
        {/* <div className="video-2">
          <iframe
            src="/Testimonials1_vidio.mp4"
            type="video/mp4"
            frameBorder="0"
            width="100%"
            height="315"
            className="block rounded-xl"
          ></iframe>
        </div> */}
        {/* <div className="video-2">
          <iframe
            src="/Testimonails2_vidio.mp4"
            type="video/mp4"
            frameBorder="0"
            width="100%"
            height="315"
            className="block rounded-xl"
          ></iframe>
        </div> */}
        <div className="video-2 p-">
          <iframe
            width="100%"
            height="215"
            src="https://www.youtube.com/embed/-qfJYcEn3Yg"
            frameBorder="0"
            allowFullScreen
            title="YouTube Video 1"
            className=" smooth-scroll block rounded-3xl radius-yellow"
          ></iframe>
        </div>
        <div className="video-2 p-">
          <iframe
            width="100%"
            height="215"
            src="https://www.youtube.com/embed/uTA1M5Kdfeo"
            frameBorder="0"
            allowFullScreen
            title="YouTube Video 2"
            className=" smooth-scroll block rounded-3xl radius-yellow"
          ></iframe>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Vidios;
