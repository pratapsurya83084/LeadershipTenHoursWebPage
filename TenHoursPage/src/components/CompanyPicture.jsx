import React from "react";

const CompanyPicture = () => {
  return (
    <div className="mb-  bg-custom-brown radius-yellow rounded-3xl">
      <section className=" p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 md:flex-row gap-5">
        <img
          className=" h-82 p-4 rounded-3xl    md:h-52  w-full"
          src="\Screenshot 2024-06-28 135140.png"
          alt=""
        />

        <img
          className="h-[270px] p-4 rounded-3xl   md:h-52  w-full"
          src="\Screenshot 2024-06-28 135219.png"
          alt=""
        />
        <img
          className="h-[260px]  p-4 rounded-3xl   md:h-52 w-full"
          src="\Screenshot 2024-06-28 135259.png"
          alt=""
        />
        <img
          className="h-[270px]   p-4 rounded-3xl  md:h-52 w-full"
          src="\Screenshot 2024-06-28 135323.png"
          alt=""
        />
        <img
          className="h-82 p-4 rounded-3xl    md:h-52 w-full"
          src="\Screenshot 2024-06-28 135342.png"
          alt=""
        />
      </section>

      <div className="mt-10 p-5 gap-5 flex flex-col md:flex-row justify-center items-center">
        {/* leftside imag */}
        <div className="leftSide-image">
          <img
            className="h-72 md:h-60 md:w-96 w-full rounded-3xl"
            src="\Workshop_certificate_img.png"
            alt=""
          />
        </div>
        {/* right side text and button */}
        <div className="text-center">
          <h1 className="text-2xl lg:text-3xl font-bold p-2">
            Commemorate your workshop achievements
          </h1>
          <p>
            Upon the completion of the workshop,you'll receive an official
            certificate validating your successful participation in the
            <br />
            2-day Entrepreneurship & Management Workshop,signifying your mastery
            of key business fundamentals
          </p>
          <a href="https://pages.razorpay.com/leadershipcourse"> 
            <button className="mt-2 md:mt-10 bg-blue-600 p-2 rounded-xl sm:text-xl font-bold">
              GET YOUR CERTIFICATE
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CompanyPicture;
