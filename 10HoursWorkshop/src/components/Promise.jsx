import React, { useEffect, useRef } from "react";

const Promise = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-scroll");
        } else {
          entry.target.classList.remove("animate-scroll");
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    const elements = section.querySelectorAll(".smooth-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);
  return (
    <section ref={sectionRef} className="promise-section">
      <div className="radius-yellow mx-2 sm:mx-10 md:mx-10 lg:mx-20 mt-10  rounded-3xl bg-custom-brown flex flex-col justify-center items-center">
        <div>
          {/* section 37 */}
          <h1 className="smooth-scroll text-center text-xl md:text-2xl lg:text-3xl font-bold p-2">
            {" "}
            My Commitment
          </h1>
          <div className="smooth-scroll flex justify-center mb-4">
            <svg
              width="300"
              height="20"
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
          <p className="smooth-scroll text-center md:text-xl font-bold p-2">
          I stand behind my pieces of training with a lifetime support guarantee
          </p>
        </div>

        <div className="p-4">
          <h1 className="font-bold smooth-scroll">Dear Sir/Madam ,</h1> <br />
          <p className="smooth-scroll md:text-xl">
            {" "}
            I am dedicated to supporting your business growth journey and
            sharing invaluable insights that have positively impacted over
            1,90,000+ individuals. Every attendee of my pieces of training
            receives more value than they anticipated. If , for any reason , you
            attend my training and feel that you haven't gained the expected
            value , I take full responsibility to make it the best experience in
            the industry. Therefore , I promise complete support and resonant
            activities throughout the training sessions. Simply email me at
            {/* px-2 */}
            <span className=" text-yellow-200 ml-2">
              ceobishophumane@bisjhintus.com
            </span>{" "}
            , and my team will promptly address your queries .
          </p>
          <p className="smooth-scroll mt-10">
            Best Regards ,
            <br />
            Bishop Adhikari
          </p>
          <img
            className="smooth-scroll h-[60px] mt-2 w-[140px]"
            src="\Screenshot 2024-06-24 122629.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Promise;
