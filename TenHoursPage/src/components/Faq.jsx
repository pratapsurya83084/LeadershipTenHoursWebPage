import React, { useState } from "react";

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
  return (
    <div className="faq-section">
      {/* <div> */}
      <h1 className="text-center text-2xl font-bold mt-10">
        Frequently Asked Questions
      </h1>
      <div className="flex justify-center mb-4">
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
      <div className="sm:text-xl mx-4 sm:mx-5 md:mx-[90px]">
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
                What is the Sales and Negotiation Mastery Workshop about?
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
                  The workshop is designed to equip participants with advanced
                  sales techniques and negotiation strategies to enhance their
                  business performance.
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
                Who should attend this workshop?
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
                  Entrepreneurs, business owners, sales professionals, and
                  anyone looking to improve their negotiation skills and close
                  more deals effectively.
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
                What will I learn during the workshop?
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
                  Participants will learn proven methods to strengthen their
                  sales pitch, handle objections, and negotiate favorable
                  outcomes.
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
                How long is the workshop?
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
                  The workshop is 3 hours long, packed with practical insights
                  and interactive exercises
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
                Are there any prerequisites to attend?
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
                  No specific prerequisites are required. The workshop is
                  designed to benefit individuals at all skill levels in sales
                  and negotiation.
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
                Will there be networking opportunities?
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
                  Yes, participants will have opportunities to network with
                  peers and share experiences during the workshop.
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
                What materials will be provided?
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
                  Participants will receive workshop materials, including
                  handouts and access to online resources, to support their
                  learning.
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
                Is this workshop suitable for beginners or advanced learners?
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
                  The workshop caters to individuals at all stages of their
                  career—from beginners looking to build foundational skills to
                  experienced professionals aiming to refine their techniques.
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
                Can I apply what I learn immediately in my job or business?
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
                  Yes, the workshop focuses on practical skills that can be
                  applied right away to improve sales performance and
                  negotiation outcomes.
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
                Will there be a certificate of completion?
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
                  Yes, participants will receive a certificate of completion at
                  the end of the workshop.
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
              What are the main benefits of attending this workshop?
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
                Participants will gain confidence in their negotiation
                 abilities, learn effective sales strategies, 
                and achieve better results in business dealings.
                </p>
              </div>
            </div>
          )}
        </div>
        <hr className="text-gray" />
      </div>
    </div>
  );
};

export default Faq;
