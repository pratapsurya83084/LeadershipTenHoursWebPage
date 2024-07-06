
import React ,{useEffect,useRef} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import { CheckIcon } from "@heroicons/react/24/solid";
const RevenuPicture = () => {


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

  const points = [
    "Action-Oriented 3 Hours",
    "Networking Pro Secrets",
    "Tailored Negotiation Tactical Goals"
  ];
  return (
    <section 
    ref={sectionRef}
    className="mt-10 body-font text-center">
      <div className=" font-bold p-2 mb-">
        <h4 className="smooth-scroll text-xl  md:text-2xl lg:text-3xl">
        Guiding Your Journey to  <b>Exceptional Leadership </b> Through <b>
        Personalized Coaching </b> and
        <b>Skill Enhancement</b>

        </h4>
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
        {/* <p className="text-xl mt-5">
            Empowering success with our revenue milestones
          </p> */}
      
      </div>


      <div className="radius-yellow rounded-3xl bg-custom-brown container px-5 py-5 mx-auto">
        <div className="flex justify-center items-center  rounded-lg overflow-hidden">
          <img
            alt="feature"
            className="smooth-scroll object-cover object-center  lg:h-[10%] lg:w-[60%] w-full "
            src="/revenue_picture.png"
          />
        </div>

        <h1 className="smooth-scroll text-xl font-bold p-4 mt-4 md:text-2xl lg:text-3xl xl:text-3xl">
          Just look a view how much they closed the deal
        </h1>
        <br />

        <div className="text-2xl">
      <div className="flex justify-center">
        <ol className="list-decimal list-inside text-left space-y-2">
          {points.map((point, index) => (
            <li key={index} className="smooth-scroll flex items-center text-yellow-200 rounded-xl px-4 py-2">
              <div className="h-5 w-6 flex justify-center items-center mb-0 bg-yellow-200 rounded-full mr-3">
                <CheckIcon className="h-4 w-4 font-bold text-black" />
              </div>
              <span className="smooth-scroll">{point}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
      
          {/* action button */}
         
            <div className="smooth-scroll flex justify-center md:mt-8 sm:mt-8 py-2 sm:px-2">
            <a href="https://pages.razorpay.com/leadershipcourse"> 
              <button className="bg-blue-600 text-white md:text-xl font-bold py-2 px-6 rounded-xl md:mb-4 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 flex items-center justify-between space-x-4">
                <span className="flex-grow text-center">
                 Enroll Now ₹25499
                </span>
                <FontAwesomeIcon
                  icon={faGreaterThan}
                  className="bg-white text-blue-500 px-4 p-2 rounded-lg"
                />
              </button>
              </a>
            </div>
        
        </div>
      {/* </div> */}
    </section>
  );
};

export default RevenuPicture;
