import React ,{useEffect,useRef} from 'react'

const SingleVidio = () => {
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
    className='mt-10 rounded-3xl bg-custom-brown radius-yellow'>
       <h2 className='smooth-scroll text-xl md:text-2xl lg:text-3xl font-bold text-center p-4'>
       {/* 10x% empowering your journey to financial triumph through strategic revenue goals for future with this programe */}
       Empower your journey by 10x to a brilliant future through strategic revenue goals 
       with this programme
       </h2>
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
        <iframe
          className='smooth-scroll sm:mb-10 pb-'
          title="vimeo-player"
          src="https://player.vimeo.com/video/854930213?h=b157a37779"
          width="100%"
          height="360"
          frameBorder="0"
          allowFullScreen
        ></iframe>
    </section>
  )
}

export default SingleVidio
