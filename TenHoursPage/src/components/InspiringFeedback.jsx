import React ,{useEffect,useRef} from "react";

const InspiringFeedback = () => {

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
    <div>
      <section ref={sectionRef}
       className="mt-10 bg-custom-brown radius-yellow rounded-3xl body-font">
       <h1 className="smooth-scroll mt-4 text-center text-2xl sm:text-3xl font-bold mb-0">Inspiring Feedback</h1>
      <div className="smooth-scroll flex justify-center mb-4">
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
        <div className="smooth-scroll container px-5 py-4 mx-auto">
       
          <div className="flex flex-wrap  justify-center">

            {/* card1 */}
            <div className="smooth-scroll radius-yellow lg:w-[350px]   lg:mb-0 p-4 bg-custom-brown text-white m-3   rounded-3xl">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="/public\ANKIT_KUMAR_img1.png"
                />
                <p className="leading-relaxed">
                'I've had the privilege of attending over 100 workshops lead by Mr.Bishop,and 
                I must say ,his innovative ideas couldn't be more timely.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-yellow-300 mt-6 mb-4"></span>
                <h2 className=" font-medium title-font tracking-wider text-sm">
                 Ankit Kumar <br />
                 Student
                </h2>
                <p className=""> Indian School of Management ,Patana</p>
              </div>
            </div>
            {/* card2 */}
            <div className="smooth-scroll radius-yellow lg:w-[350px] lg:mb-0 p-4 bg-custom-brown text-white m-3   rounded-3xl">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="/public\VAISHNAVI_UPADHYA_img2.png"
                />
                <p className="leading-relaxed">
                  "Regularly attending workshop conducted by Mr.Bishop Adhikari Has been a transformative experience ,igniting a profound  realization of my untapped potential. 
                  i am convinced that my growth knows no bounds with Mr.Adhikari's guidance."
                </p>
                <span className="inline-block h-1 w-10 rounded bg-yellow-300 mt-6 mb-4"></span>
                <h2 className=" font-medium title-font tracking-wider text-sm">
              Vaishnavi Upadhyay <br />
              Student
                </h2>
                <p className=""> Alliance School of Law ,Bengluru </p>
              </div>
            </div>

            {/* card 3 */}
            <div className="smooth-scroll radius-yellow lg:w-[350px] lg:mb-0 p-4 bg-custom-brown text-white m-3   rounded-3xl">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="/public\SANA_KAUSER_img3.png"
                />
                <p className="leading-relaxed">
                 "I" ve gained invaluable knowledge and Mr.Bishop Adhikari ensures 
                 no  dull moments ,and i am confident with him growth 
                 is inevitable.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-yellow-300 mt-6 mb-4"></span>
                <h2 className="font-medium title-font tracking-wider text-sm">
                  Sana Kauser <br />Student
                </h2>
                <p className=""> Indian institute of Legal Studies ,Siliguri</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InspiringFeedback;
