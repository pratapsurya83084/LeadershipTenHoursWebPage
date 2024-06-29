import React from "react";

const TenHouresSection = () => {
  return (
    <section className="bg-custom-brown ">
      <h1 className="text-center text-xl font-bold p-4 ">
        Embark on a life-changing
        <strong className="font-bold text-yellow-200 px-2">10 hours</strong>
        leadership training journey, unveiling invaluable business insights,
        from product selling and launching to financial empowerment and mastery
        in leadership
      </h1>

      <div className="gap-5 mb-10 p-3 mt-10  lg:flex flex-row justify-center items-center">
        <div className=" lg:w-auto xl:ml-10 sm:p-4  lg:mb-0">
          {/* overflow-hidden */}
          <div className="workshop-left-section lg:h-[460px] lg:w-[500px]  relative">
            {/* md:right-96 */}
            <h1 className="text-black animate-move-x-reverse sm:ml-5 text-4xl sm:text-5xl absolute right-40  left-4 p- sm:left-24 sm:right-96    xl:right-[290px] md:text-6xl md:ml-2 lg:right-60 lg:left-8 lg:text-6xl lg:ml-2 font-bold">
              Bishop
            </h1>
            <img
              // md:ml-[200px] h-[500px],object-cover
              className="radius-yellow  h-[300px] sm:mx-auto  sm:h-[500px] md:h-[460px]  xl:h-[400px] lg:w-[500px]    p-  w-full  rounded-3xl"
              src="/MY PICTURE AT FIRST.png" // Make sure your image path is correct
              alt="WorkshopImage"
            />
            <h1 className="animate-move-x-reverse font-bold absolute mt-32 left-58  bottom-20 sm:bottom-40 md:bottom-40 lg:bottom-36  xl:bottom-52 md:mt-60 md:left-[450px] lg:left-[150px] lg:mt-[270px] right-0 text-4xl sm:text-4xl md:text-5xl lg:text-5xl lg:font-bold text-black mb-4 mr-4 lg:text-right">
              Adhikari
            </h1>
          </div>
        </div>
        {/* leftside text-section */}

        <div
          className="leftside-text-section  
          sm:text-center  lg:text-left"
        >
          <h4 className="font-bold  text-2xl lg:text-3xl text-yellow-200  py-2">
            Training in a one-on-one setting
          </h4>{" "}
          {/* <br /> */}
          <p className="py-2 mt-2 font-bold">With Mr. Bishop Adhikari</p>
          <p className="font-bold">
            <i>Entrepreneur, coach and social change advocate</i>
          </p>
          <p className="">
            Weekly,pick from a pool of
            <strong className="font-bold px-2">200+</strong>
            skills across
            <strong className="font-bold px-2">20+</strong>
            distinct categories,
            <br />
            allowing you to choose
            <strong className="font-bold px-2">5 distinct categories</strong>
            that align with your interests and goals
          </p>
          <div className="mt-5 flex justify-center mb-10">
            <a href="#razorpay/link">
              <button className="bg-blue-600 p-2 text-xl px-8 rounded-lg">
                {" "}
                ENROLL NOW
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TenHouresSection;
