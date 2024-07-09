import React ,{useEffect,useRef}  from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CheckIcon } from "@heroicons/react/24/solid";

const CategorySection = () => {


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


  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: null,
    nextArrow: null,
  };

  return (
    <section  ref={sectionRef}
    >
      <h1 className="smooth-scroll carousel-section text-center mt-10 p-4 text-xl  md:text-2xl lg:text-3xl font-bold">
        Select from a diverse range of 200+ skill sets across 5 selective
        categories,
        {/* <br /> */}
        out of 20+ different categories, offering the following advantages
        <div className="flex justify-center mb-4">
          <svg
            width="300"
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
      </h1>

      <div className="  image-carousel-section flex justify-center items-center w-full p-4 rounded-3xl bg-custom-brown">
  <Slider {...settings} className="smooth-scroll flex p-2 w-full">
    {/* First slide */}
    <div className="p-2">
      <div className="smooth-scroll  md:flex justify-center items-center gap-10 md:gap-36 space-y-4">
        <div className="flex-col bg-custom-gray p-4 rounded-xl radius-yellow lg:h-40">
          <div className="flex justify-center items-center mt-2">
            <div className="text-white mx-2 mt-2 h-6 w-6 flex justify-center items-center">
              <CheckIcon className="h-4 w-4 bg-green-500 rounded-full" />
            </div>
            <p className="text-center overflow-hidden ml-2 lg:pt-2">
              Forge Team Trust with Expert Decision-Making :
              <br /> 
              Strengthen team cohesion  
               and  trust through  <br className="md:flex hidden" />
                informed  decision-making
            </p>
          </div>
        </div>

        <div className="flex-col bg-custom-gray p-4 rounded-xl radius-yellow lg:h-40">
          <div className="flex justify-center items-center mt-2">
            <div className="text-white mx-2 mt-2 h-6 w-6 flex justify-center items-center">
              <CheckIcon className="h-4 w-4 bg-green-500 rounded-full" />
            </div>
            <p className="text-center overflow-hidden ml-2 lg:pt-3">
              Navigating High-Stakes Decisions : Trust within <br />
              Cross-Functional Teams
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Second slide */}
    <div className="p-2">
      <div className="smooth-scroll md:flex justify-center items-center gap-10 md:gap-36 space-y-4">
        <div className="flex-col bg-custom-gray p-4 rounded-xl radius-yellow lg:h-40">
          <div className="flex justify-center items-center mt-2">
            <div className="text-white mx-2 mt-2 h-6 w-6 flex justify-center items-center">
              <CheckIcon className="h-4 w-4 bg-green-500 rounded-full" />
            </div>
            <p className="text-center overflow-hidden ml-2 pt-5">
              Surmount Challenges, Secure Success : Tackle <br />
              leadership hurdles with enduring strategies
            </p>
          </div>
        </div>

        <div className="flex-col bg-custom-gray p-4 rounded-xl radius-yellow lg:h-40">
          <div className="flex justify-center items-center mt-2">
            <div className="text-white mx-2 mt-2 h-6 w-6 flex justify-center items-center">
              <CheckIcon className="h-4 w-4 bg-green-500 rounded-full" />
            </div>
            <p className="text-center overflow-hidden ml-2 pt-5">
              Harness Leadership Potential: Channel your <br />
              potential for influential guidance
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Third slide */}
    <div className="p-2">
      <div className="smooth-scroll md:flex justify-center items-center gap-10 md:gap-36 space-y-4">
        <div className="flex-col bg-custom-gray p-4 rounded-xl radius-yellow lg:h-40">
          <div className="flex justify-center items-center mt-2">
            <div className="text-white mx-2 mt-2 h-6 w-6 flex justify-center items-center">
              <CheckIcon className="h-4 w-4 bg-green-500 rounded-full" />
            </div>
            <p className="text-center overflow-hidden ml-2 lg:pt-3">
              Conflict Resolution and Negotiation: Share <br />
              strategies for managing conflict <br />
              constructively and promoting a positive team environment
            </p>
          </div>
        </div>

        <div className="flex-col bg-custom-gray p-4 rounded-xl radius-yellow lg:h-40">
          <div className="flex justify-center items-center mt-2">
            <div className="text-white mx-2 h-6 w-6 mt-2 flex justify-center items-center">
              <CheckIcon className="h-4 w-4 bg-green-500 rounded-full" />
            </div>
            <p className="text-center overflow-hidden ml-2 lg:pt-3">
              Elevate Productivity Through Communication: Spark <br />
              team motivation and positivity with adept communication
            </p>
          </div>
        </div>
      </div>
    </div>
  </Slider>
</div>

    </section>
  );
};

export default CategorySection;
