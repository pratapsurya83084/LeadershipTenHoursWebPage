import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CategorySection = () => {
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
    <div className="">
      <h1 className="carousel-section text-center mt-10 p-4 text-2xl font-bold">
        Select from a diverse range of 200+ skill sets across 5 selective categories,
        <br />
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

      <div className="image-carousel-section flex justify-center items-center w-full radius-yellow p-4 rounded-3xl bg-custom-brown">
        <Slider {...settings} className="flex p-2 w-full">
          {/* First slide */}
          <div className="p-2">
            <div className="md:flex justify-center items-center gap-10 md:gap-36 space-y-4">
              <div className="flex-col bg-custom-gray p-4">
                <div className="flex justify-center">
                <img
                    className="h-72 w- object-cover"
                    src="https://course.bishopadhikari.com/images/New%20Forge%20Team%20Trust%20with%20Expert%20Decision-Making.png"
                    alt="Slide 7"
                  />
                </div>
                <div className="flex justify-center mt-2">
                  <p className="text-center">
                  Forge Team Trust with Expert Decision-Making: <br />
                   Strengthen team cohesion and <br />
                    trust through informed decision-making
                  </p>
                </div>
              </div>

              <div className="flex-col bg-custom-gray p-4">
                <div className="flex justify-center">
                  <img
                    className="h-72 w- object-cover"
                    src="https://course.bishopadhikari.com/images/NEW%20Guiding%20Your%20Journey%20to%20Exceptional%20Leadership.png"
                    alt="Slide 2"
                  />
                </div>
                <div className="flex justify-center mt-2">
                  <p className="text-center whitespace-nowrap">
                    Elevate Productivity Through <br />
                     Communication: Spark team motivation <br /> and positivity with adept communication
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Second slide */}
          <div className="p-2">
            <div className="md:flex justify-center items-center gap-10 md:gap-36 space-y-4">
              <div className="flex-col bg-custom-gray p-4">
                <div className="flex justify-center">
                  <img
                    className="h-72 w- object-cover"
                    src="https://course.bishopadhikari.com/images/New%20Surmount%20Challenges,%20Secure%20Success.png"
                    alt="Slide 3"
                  />
                </div>
                <div className="flex justify-center mt-2">
                  <p className="text-center">
                    Surmount Challenges, Secure Success: Tackle leadership hurdles with enduring strategies
                  </p>
                </div>
              </div>

              <div className="flex-col bg-custom-gray p-4">
                <div className="flex justify-center">
                  <img
                    className="h-72 w- object-cover"
                    src="https://course.bishopadhikari.com/images/NewHarness%20Leadership%20Potential.png"
                    alt="Slide 4"
                  />
                </div>
                <div className="flex justify-center mt-2">
                  <p className="text-center">
                    Harness Leadership Potential: Channel your potential for influential guidance
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Third slide */}
          <div className="p-2">
            <div className="md:flex justify-center items-center gap-10 md:gap-36 space-y-4">
              <div className="flex-col bg-custom-gray p-4">
                <div className="flex justify-center">
                  <img
                    className="h-72 w- object-cover"
                    src="https://course.bishopadhikari.com/images/NEW%20Conflict%20Resolution%20and%20Negotiation.png"
                    alt="Slide 5"
                  />
                </div>
                <div className="flex justify-center mt-2">
                  <p className="text-center">
                    Conflict Resolution and Negotiation: Share strategies for managing conflict constructively and promoting a positive team environment
                  </p>
                </div>
              </div>

              <div className="flex-col bg-custom-gray p-4">
                <div className="flex justify-center">
                  <img
                    className="h-72 w- object-cover"
                    src="https://course.bishopadhikari.com/images/NEW%20Elevate%20Productivity%20Through%20Communication.png"
                    alt="Slide 6"
                  />
                </div>
                <div className="flex justify-center mt-2">
                  <p className="text-center">
                    Elevate Productivity Through Communication: Spark team motivation and positivity with adept communication
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Fourth slide */}
          {/* <div className="p-2">
            <div className="md:flex justify-center items-center gap-10 md:gap-36 space-y-4">
              <div className="flex-col bg-custom-gray p-4">
                <div className="flex justify-center">
                  <img
                    className="h-72 w- object-cover"
                    src="https://course.bishopadhikari.com/images/New%20Forge%20Team%20Trust%20with%20Expert%20Decision-Making.png"
                    alt="Slide 7"
                  />
                </div>
                <div className="flex justify-center mt-2">
                  <p className="text-center">
                    Forge Team Trust with Expert Decision-Making: Strengthen team cohesion and trust through informed decision-making
                  </p>
                </div>
              </div>

              <div className="flex-col bg-custom-gray p-4">
                <div className="flex justify-center">
                  <img
                    className="h-72 w- object-cover"
                    src="https://course.bishopadhikari.com/images/NEW%20Guiding%20Your%20Journey%20to%20Exceptional%20Leadership.png"
                    alt="Slide 8"
                  />
                </div>
                <div className="flex justify-center mt-2">
                  <p className="text-center whitespace-nowrap">
                   Navigating High-Stakes  <br />
                     Decisions: Building Trust 
                      within Cross <br /> Functional Teams
                  </p>
                </div>
              </div>
            </div>
          </div> */}
        </Slider>
      </div>
    </div>
  );
};

export default CategorySection;
