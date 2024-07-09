import React, { useState,useEffect,useRef } from "react";

const Faq = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [q2, setq2] = useState(false);
  const [q3, setq3] = useState(false);
  const [q4, setq4] = useState(false);
  const [q5, setq5] = useState(false);
  const [q6, setq6] = useState(false);

  const [q7, setq7] = useState(false);
  const [q8, setq8] = useState(false);

  const [q9, setq9] = useState(false);
  const [q10, setq10] = useState(false);
  const [q11, setq11] = useState(false);
  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  const toggleAnswer2 = () => {
    setq2(!q2);
  };

  const toggleAnswer3 = () => {
    setq3(!q3);
  };

  const toggleAnswer4 = () => {
    setq4(!q4);
  };

  const toggleAnswer5 = () => {
    setq5(!q5);
  };

  const toggleAnswer6 = () => {
    setq6(!q6);
  };

  const toggleAnswer7 = () => {
    setq7(!q7);
  };

  const toggleAnswer8 = () => {
    setq8(!q8);
  };

  const toggleAnswer9 = () => {
    setq9(!q9);
  };
  const toggleAnswer10 = () => {
    setq10(!q10);
  };



  const toggleAnswer11=()=>{
    setq11(!q11);
  }




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
    <section ref={sectionRef} className="faq-section">
      {/* <div> */}
      <h1 className=" smooth-scroll text-center text-xl md:text-2xl lg:text-3xl font-bold mt-10">
        Frequently Asked Questions
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

      {/* FAQ   questions */}
      <div className="smooth-scroll sm:text-xl mx-4 sm:mx-5 md:mx-[90px]">
        {/* Q1 */}
        <div>
          <div
            onClick={toggleAnswer}
            className="py-2 flex justify-between cursor-pointer"
          >
            <div>
              <h1
                className={`mt-3 ${isOpen ? "text-yellow-200" : "text-white"}`}
              >
               What is the duration of the course?
              </h1>
            </div>
            <div>
              <p className="text-yellow-200 text-5xl">{isOpen ? "-" : "+"}</p>
            </div>
          </div>
          {isOpen && (
            <div>
              <div
                className={`overflow-hidden transition-max-height duration-900 ease-in-out ${
                  isOpen ? "max-h-96" : "max-h-0"
                }`}
              >
                <p className="text-xl">
                The course spans over 10+ hours , offering comprehensive training on various essential skills.
                </p>
              </div>
            </div>
          )}
        </div>
        <hr className="text-gray" />

        {/* Q2 */}
        <div>
          <div
            onClick={toggleAnswer2}
            className="py-2 flex justify-between cursor-pointer"
          >
            <div>
              <h1 className={`mt-3 ${q2 ? "text-yellow-200" : "text-white"}`}>
              What topics will be covered in the training?
              </h1>
            </div>
            <div>
              <p className="text-yellow-200 text-5xl">{q2 ? "-" : "+"}</p>
            </div>
          </div>
          {q2 && (
            <div>
              <div
                className={`overflow-hidden transition-max-height duration-900 ease-in-out ${
                  q2 ? "max-h-96" : "max-h-0"
                }`}
              >
                <p className="text-xl">
                The course covers 20+ skills including sales techniques , negotiation strategies , team leadership ,
                 time management , digital marketing , and more.
                </p>
              </div>
            </div>
          )}
        </div>
        <hr className="text-gray" />

        {/* Q3 */}
        <div>
          <div
            onClick={toggleAnswer3}
            className="py-2 flex justify-between cursor-pointer"
          >
            <div>
              <h1 className={`mt-3 ${q3 ? "text-yellow-200" : "text-white"}`}>
              Who is the course designed for?
              </h1>
            </div>
            <div>
              <p className="text-yellow-200 text-5xl">{q3 ? "-" : "+"}</p>
            </div>
          </div>
          {q3 && (
            <div>
              <div
                className={`overflow-hidden transition-max-height duration-900 ease-in-out ${
                  q3 ? "max-h-96" : "max-h-0"
                }`}
              >
                <p className="text-xl">
                This course is perfect for individuals with startup ventures ,
                 established businesses , sales professionals , management students ,
                  small business owners , corporate executives , freelancers , consultants 
                  , and students.

                </p>
              </div>
            </div>
          )}
        </div>
        <hr className="text-gray" />
        {/* Q4 */}
        <div>
          <div
            onClick={toggleAnswer4}
            className="py-2 flex justify-between cursor-pointer"
          >
            <div>
              <h1 className={`mt-3 ${q4 ? "text-yellow-200" : "text-white"}`}>
              What is the cost of the course?

              </h1>
            </div>
            <div>
              <p className="text-yellow-200 text-5xl">{q4 ? "-" : "+"}</p>
            </div>
          </div>
          {q4 && (
            <div>
              <div
                className={`overflow-hidden transition-max-height duration-900 ease-in-out ${
                  q4 ? "max-h-96" : "max-h-0"
                }`}
              >
                <p className="text-xl">
                The course is available for only Rs approx 25000/- + only.

                </p>
              </div>
            </div>
          )}
        </div>
        <hr className="text-gray" />
        {/* Q5 */}

        <div>
          <div
            onClick={toggleAnswer5}
            className="py-2 flex justify-between cursor-pointer"
          >
            <div>
              <h1 className={`mt-3 ${q5 ? "text-yellow-200" : "text-white"}`}>
              Is there any certification provided upon completion?

              </h1>
            </div>
            <div>
              <p className="text-yellow-200 text-5xl">{q5 ? "-" : "+"}</p>
            </div>
          </div>
          {q5 && (
            <div>
              <div
                className={`overflow-hidden transition-max-height duration-900 ease-in-out ${
                  q5 ? "max-h-96" : "max-h-0"
                }`}
              >
                <p className="text-xl">
                Yes, attendees will receive an official certificate recognizing their completion of the course.
                </p>
              </div>
            </div>
          )}
        </div>
        <hr className="text-gray" />
        {/* Q6 */}
        <div>
          <div
            onClick={toggleAnswer6}
            className="py-2 flex justify-between cursor-pointer"
          >
            <div>
              <h1 className={`mt-3 ${q6 ? "text-yellow-200" : "text-white"}`}>
              How can I enroll in the course?
              </h1>
            </div>
            <div>
              <p className="text-yellow-200 text-5xl">{q6 ? "-" : "+"}</p>
            </div>
          </div>
          {q6 && (
            <div>
              <div
                className={`overflow-hidden transition-max-height duration-900 ease-in-out ${
                  q6 ? "max-h-96" : "max-h-0"
                }`}
              >
                <p className="text-xl">
                You can enroll by visiting our registration page and following the prompts to secure your spot.
                </p>
              </div>
            </div>
          )}
        </div>
        <hr className="text-gray" />

        {/* Q7 */}
        <div>
          <div
            onClick={toggleAnswer7}
            className="py-2 flex justify-between cursor-pointer"
          >
            <div>
              <h1 className={`mt-3 ${q7 ? "text-yellow-200" : "text-white"}`}>
              What if I have questions during the course?
              </h1>
            </div>
            <div>
              <p className="text-yellow-200 text-5xl">{q7 ? "-" : "+"}</p>
            </div>
          </div>
          {q7 && (
            <div>
              <div
                className={`overflow-hidden transition-max-height duration-900 ease-in-out ${
                  q7 ? "max-h-96" : "max-h-0"
                }`}
              >
                <p className="text-xl">
                You can reach out to our support team via email at ceobishophumane@bisjhintus.com for any queries.

                </p>
              </div>
            </div>
          )}
        </div>
        <hr className="text-gray" />
        {/* Q8 */}

        <div>
          <div
            onClick={toggleAnswer8}
            className="py-2 flex justify-between cursor-pointer"
          >
            <div>
              <h1 className={`mt-3 ${q8 ? "text-yellow-200" : "text-white"}`}>
                Can I access the course materials after the training?
              </h1>
            </div>
            <div>
              <p className="text-yellow-200 text-5xl">{q8 ? "-" : "+"}</p>
            </div>
          </div>
          {q8 && (
            <div>
              <div
                className={`overflow-hidden transition-max-height duration-900 ease-in-out ${
                  q8 ? "max-h-96" : "max-h-0"
                }`}
              >
                <p className="text-xl">
                Yes, all course materials will be accessible to attendees even after the training is completed.
                </p>
              </div>
            </div>
          )}
        </div>
        <hr className="text-gray" />
        {/* Q9 */}

        <div>
          <div
            onClick={toggleAnswer9}
            className="py-2 flex justify-between cursor-pointer"
          >
            <div>
              <h1 className={`mt-3 ${q9 ? "text-yellow-200" : "text-white"}`}>
              Are there any prerequisites for attending the course?
              </h1>
            </div>
            <div>
              <p className="text-yellow-200 text-5xl">{q9 ? "-" : "+"}</p>
            </div>
          </div>
          {q9 && (
            <div>
              <div
                className={`overflow-hidden transition-max-height duration-900 ease-in-out ${
                  q9 ? "max-h-96" : "max-h-0"
                }`}
              >
                <p className="text-xl">
                There are no specific prerequisites ; however, a keen interest in business growth and development is recommended.
                </p>
              </div>
            </div>
          )}
        </div>
        <hr className="text-gray" />

        {/* Q10 */}
        <div>
          <div
            onClick={toggleAnswer10}
            className="py-2 flex justify-between cursor-pointer"
          >
            <div>
              <h1 className={`mt-3 ${q10 ? "text-yellow-200" : "text-white"}`}>
              What kind of support is available after the course?
              </h1>
            </div>
            <div>
              <p className="text-yellow-200 text-5xl">{q10 ? "-" : "+"}</p>
            </div>
          </div>
          {10 && (
            <div>
              <div
                className={`overflow-hidden transition-max-height duration-900 ease-in-out ${
                  q10 ? "max-h-96" : "max-h-0"
                }`}
              >
                <p className="text-xl">
                We offer ongoing support and additional resources to help you apply the skills learned in the course to your professional life.
                </p>
              </div>
            </div>
          )}
        </div>
        <hr className="text-gray" />

        {/* Q11 */}
        <div>
          <div
            onClick={toggleAnswer11}
            className="py-2 flex justify-between cursor-pointer"
          >
            <div>
              <h1 className={`mt-3 ${q11 ? "text-yellow-200" : "text-white"}`}>
              How will this course benefit my career or business?
              </h1>
            </div>
            <div>
              <p className="text-yellow-200 text-5xl">{q11 ? "-" : "+"}</p>
            </div>
          </div>
          {11 && (
            <div>
              <div
                className={`overflow-hidden transition-max-height duration-900 ease-in-out ${
                  q11 ? "max-h-96" : "max-h-0"
                }`}
              >
                <p className="text-xl">
                This course provides practical skills and strategies that can lead to improved business performance , increased sales ,
                 better leadership
                , and overall professional growth.
                </p>
              </div>
            </div>
          )}
        </div>
        <hr className="text-gray" />
      </div>
    </section>
  );
};

export default Faq;
