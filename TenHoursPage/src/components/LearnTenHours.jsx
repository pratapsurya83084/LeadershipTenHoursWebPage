import React ,{useRef,useEffect} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";

const LearnTenHours = () => {
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
        <section  
        ref={sectionRef}
        className="fourHours-learnSection-section">
      <div className="flex flex-col justify-center items-center mx-10 mt-10">
        <h1 className="smooth-scroll  text-center text-xl md:text-2xl lg:text-3xl font-bold">
        These 10 hours will revolutionize your approach with advanced sales and negotiation techniques and strategies
        </h1>
        <div className="smooth-scroll flex justify-center mb-4">
          <svg
            width="300"
            height="30"
            viewBox="0 0 100 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 15 Q 50 0, 95 15"
              stroke="yellow"             strokeWidth="5"
              fill="none"
            />
          </svg>
        </div>
        <div className="smooth-scroll mt-6 grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* card 1 */}
          <div className="smooth-scroll radius-yellow max-w-sm flex flex-row bg-custom-gray  rounded-3xl">
            <div className="md:text-2xl font-bold tracking-tight text-black py-4 px-4 mt-8 bg-yellow-200 mb-7 rounded-tr-2xl rounded-br-2xl">
              01
            </div>
            <div className="font-bold px-4 py-7 mt-4">
            1+ Certificate of Completion
            </div>
          </div>

          {/* card 2 */}
          <div className="smooth-scroll radius-yellow max-w-sm flex flex-row bg-custom-gray  rounded-3xl">
            <div className="text-2xl font-bold tracking-tight text-black py-4 px-4 mt-8 bg-yellow-200 mb-7 rounded-tr-2xl rounded-br-2xl">
              02
            </div>
            <div className="font-bold px-4 mt-2 py-7">
            1+ Hour Free Consultation business analytic session with me

            </div>
          </div>

          {/* card 3 */}
          <div className="smooth-scroll radius-yellow max-w-sm flex flex-row bg-custom-gray  rounded-3xl">
            <div className="text-2xl font-bold tracking-tight text-black py-4 px-4 mt-8 bg-yellow-200 mb-7 rounded-tr-2xl rounded-br-2xl">
              03
            </div>
            <div className="font-bold px-4 mt-2 py-7">
            5+ Access to a Private Networking Group
            </div>
          </div>

          {/* card 4 */}
          <div className="smooth-scroll radius-yellow max-w-sm flex flex-row bg-custom-gray  rounded-3xl">
            <div className="text-2xl font-bold tracking-tight text-black py-4 px-4 mt-8 bg-yellow-200 mb-7 rounded-tr-2xl rounded-br-2xl">
              04
            </div>
            <div className="font-bold px-4 py-7">
            10+ Customizable Sales and Negotiation Templates

            </div>
          </div>

          {/* card 5 */}
          <div className="smooth-scroll radius-yellow max-w-sm flex flex-row bg-custom-gray  rounded-3xl">
            <div className="text-2xl font-bold tracking-tight text-black py-4 px-4 mt-8 bg-yellow-200 mb-7 rounded-tr-2xl rounded-br-2xl">
              05
            </div>
            <div className="font-bold px-4 py-7 mt-4">
            15+ Downloadable Cheat Sheet for Effective Negotiations

            </div>
          </div>

          {/* card 6 */}
          <div className="smooth-scroll radius-yellow max-w-sm flex flex-row bg-custom-gray  rounded-3xl">
            <div className="text-2xl font-bold tracking-tight text-black py-4 px-4 mt-8 bg-yellow-200 mb-7 rounded-tr-2xl rounded-br-2xl">
              06
            </div>
            <div className="font-bold px-4 py-7">
            20+ Exclusive E-Books on Advanced Sales Techniques

            </div>
          </div>
        </div>

             {/* action now button */}
            
             <div className="smooth-scroll flex justify-center mt-8 sm:mt-8 py-2 sm:px-2">
             <a href="https://pages.razorpay.com/leadershipcourse"> 
          <button className="bg-blue-600 text-white sm:text-xl md:text-2xl font-bold py-2 px-6 rounded-xl hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 flex items-center justify-between space-x-4">
            <span className="flex-grow text-center">Enroll Now  ₹25499</span>
            <FontAwesomeIcon
              icon={faGreaterThan}
              className="bg-white text-blue-500 px-4 p-2 rounded-lg"
            />
          </button>
        </a>
        </div>
        
      </div>
    </section>
    </div>
  )
}

export default LearnTenHours
