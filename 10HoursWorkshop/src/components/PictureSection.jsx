
import React,{useRef,useEffect} from "react";

const PictureSection = () => {
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
    className="mt-10 lg:mt-14">
      <h1 className="smooth-scroll text-center text-xl md:text-2xl lg:text-3xl font-bold">
        Discover the Story of Mr.Bishop Adhikari : A Journey Towards Remarkable
        Accomplishments
      </h1>
      <div className="smooth-scroll mt-10 images-coach w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-32">
          {/* first image */}
          <div className="flex justify-center">
            <img
              className="smooth-scroll radius-yellow h-[230px] w-full sm:h-[200px] md:h-[200px] md:w-[570px] lg:h-[150px] xl:w-[400px] xl:h-[200px]  rounded-3xl object-cover"
              src="/ABOUTUS2_img1.jpg"
              alt="Mr. Bishop Adhikari Image 1"
            />
          </div>
          {/* second image */}
          <div className="smooth-scroll flex justify-center">
            <img
              className="smooth-scroll radius-yellow h-[230px] w-full sm:h-[200px] md:h-[200px] md:w-[570px] lg:h-[150px] xl:w-[400px] xl:h-[200px]  rounded-3xl object-cover"
              src="\Screenshot 2024-07-16 002413.png"
              alt="Mr. Bishop Adhikari Image 2"
            />
          </div>
          {/* third image */}
          <div className="flex justify-center">
            <img
              className="smooth-scroll radius-yellow h-[230px] w-full sm:h-[200px] md:h-[200px] md:w-[570px] lg:h-[150px] xl:w-[400px] xl:h-[200px]  rounded-3xl object-cover"
              src="/ABOUTUS3.jpg"
              alt="Mr. Bishop Adhikari Image 3"
            />
          </div>
          {/* fourth image change  */}
          <div className="flex justify-center">
            <img
            // w-full
              className="smooth-scroll radius-yellow h-[230px] w-full sm:h-[200px] md:h-[200px] md:w-[570px] lg:h-[150px] xl:w-[400px] xl:h-[200px] rounded-3xl object-cover"
              src="\ABOUTUS4.jpg"
              alt="Mr. Bishop Adhikari Image 4"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PictureSection;
