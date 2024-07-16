import React,{useEffect,useRef} from 'react';

const SingleVideoSection = () => {

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
   
    <section   ref={sectionRef}
     className=" ">
   <div className="container mx-auto flex flex-col justify-center items-center md:flex-row px-5 py-4 md:mt-10">
  <div className="mb-6 md:mb-0 md:mr-5 flex justify-center">
    <iframe 
      className="smooth-scroll rounded h-[250px] sm:h-[300px] md:h-[350px] w-[300px] sm:w-[400px] md:w-[450px]" 
      alt="hero" 
      src="\10hours_course_vidio.mp4"
      frameBorder="0">
    </iframe>
  </div>
  <div className="lg:flex-grow md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
    <p className="smooth-scroll mb-8 leading-relaxed text-xl">
      Build and lead high-performing, cohesive groups and inspire your  
      team with enhanced communication.
      <br />
      Elevate Your 10-Hour Live Training Experience!
    </p>
    <div className="flex justify-center md:justify-start text-yellow-200 font-bold text-xl">
      <h2 className="smooth-scroll text-center">Limited Spots Available – Seize the Opportunity!</h2>
    </div>
  </div>
</div>

  
   </section>
  
  );
}

export default SingleVideoSection;
