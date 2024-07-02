import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";

const SixTestimonials = () => {
  return (
    <div>
       <div className="mt-10 nine-testimonial-section">
      <div className="bg-custom-brown radius-yellow rounded-3xl pb-4 ">
        <h1 className="text-2xl text-center font-bold p-6">
          {" "}
          Testimonials from Previous Participants
        </h1>
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
        {/* section-29 */}
        <div className=" justify-center  grid grid-cols-1 sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-3 gap-10 mx-4 ">
          {/* cards 1 max-w-sm */}
          <div className=" p-2 radius-yellow rounded-3xl  flex flex-col justify-center items-center bg-gray">
            <img
              className="h-56 rounded-3xl mt-2"
              src="\ARUN DESHMUKHA.jpg"
              alt=""
            />
            <p className="text-center">
            Attending the 3-hour Sales and Negotiation 
            Mastery Workshop with Bishop Adhikari was a
             game-changer for my business. The advanced techniques
              and strategies I learned have significantly improved 
              my sales performance, leading to a 30% increase in
               revenue within just a few months. I highly recommend 
               this course to anyone 
            looking to boost their sales skills
            </p>

            <p className="mb-4 mx-2 bg-custom-gray radius-yellow rounded-xl mt-5 p-2 text-center font-normal text-gray-700 dark:text-gray-400">
              <span className=" ">
                <b className="text-yellow-200">  Arun Deshmuk, India </b>
                <h5> Mehta Group of Industries</h5>
              </span>
            </p>
          </div>

          {/* cards 2  max-w-sm*/}
          <div className="p-2 radius-yellow rounded-3xl  flex flex-col justify-center items-center bg-gray">
            <img
              className="h-56 rounded-3xl"
              src="\Keiko Tanaka.jpeg"
              alt=""
            />
            <p className="text-center">
            The workshop with Bishop Adhikari was incredibly insightful.
             The practical strategies and hands-on exercises helped me understand the nuances of effective negotiation. Since attending, I've been able to close deals more confidently and efficiently.
             This course is a must for anyone serious about improving their negotiation skills"
            </p>

            <p className="bg-custom-gray mb-4 px-4 mx-2  radius-yellow rounded-xl mt-5 p-2 text-center font-normal text-gray-700 dark:text-gray-400">
              <span className=" ">
                <b className="text-yellow-200">Keiko Tanaka, Japan</b>
                <h5> Apparels Tanaka Trading Co</h5>
              </span>
            </p>
          </div>

          {/* cards 3 max-w-sm*/}
          <div className="p-2 radius-yellow rounded-3xl  flex flex-col justify-center items-center bg-gray">
            <img
              className="h-56 rounded-3xl"
              src="\Anita John.jpeg"
              alt=""
            />
            <p className="text-center">
            Bishop Adhikari's 3-hour workshop was one of
             the best investments I've made in my professional development.
              The advanced sales techniques I learned have already started
               to pay off. My team and I are closing more deals and seeing
                better results across the board. 
            I can't recommend this workshop enough!
            </p>

            <p className="mb-4 bg-custom-gray radius-yellow rounded-xl mt-5 p-2 text-center font-normal text-gray-700 dark:text-gray-400">
              <span className=" ">
                <b className="text-yellow-200">Anita John, UK</b>
                <h5>  Smith & Co. Marketing</h5>
              </span>
            </p>
          </div>

          {/* cards 4  max-w-sm*/}
          <div className="p-2 radius-yellow rounded-3xl  flex flex-col justify-center items-center bg-gray">
            <img
              className="h-56 rounded-3xl"
              src="\Priya Kumari.jpeg"
              alt=""
            />
            <p className="text-center">
            The Sales and Negotiation Mastery Workshop with Bishop
             Adhikari was an eye-opener. The strategies and tips 
             shared were practical and easy to implement. I've seen 
             a noticeable improvement in my ability to handle tough
              negotiations and close deals more effectively.
             This course is a game-changer for anyone in sales
            </p>

            <p className="mb-4 bg-custom-gray radius-yellow rounded-xl mt-5 p-2 text-center font-normal text-gray-700 dark:text-gray-400">
              <span className=" ">
                <b className="text-yellow-200">Priya Kumari, India </b>
                <h5>Goutam India Private Limited</h5>
              </span>
            </p>
          </div>

          {/* cards 5 max-w-sm*/}
          <div className="p-2 radius-yellow rounded-3xl flex flex-col justify-center items-center bg-gray">
            <img
              className="h-56 rounded-3xl"
              src="\David Johnson.jpeg"
              alt=""
            />
            <p className="text-center">
            I attended Bishop Adhikari's 3-hour workshop
             and was blown away by the depth of knowledge 
             and practical advice provided. The techniques
              I learned have helped me increase my sales conversion
               rates significantly. If you want to take your sales 
               and negotiation skills to the next level, 
            this workshop is for you
            </p>

            <p className="bg-custom-gray mb-3 radius-yellow rounded-xl mt-5 p-2 text-center font-normal text-gray-700 dark:text-gray-400">
              <span className=" ">
                <b className="text-yellow-200"> David Johnson, Australia</b>
                <h5> Davjohn Design Co. Solutions</h5>
              </span>
            </p>
          </div>

          {/* cards 6 max-w-sm*/}
          <div className="p-2  radius-yellow rounded-3xl  flex flex-col justify-center items-center bg-gray">
            <img
              className="h-56 rounded-3xl"
              src="\Akira Nakamura.jpeg"
              alt=""
            />
            <p className="text-center">
            The Sales and Negotiation Mastery Workshop was 
            a transformative experience. Bishop Adhikari's
             insights and strategies have made a substantial 
             impact on my sales approach. I've become more
              confident in negotiations and have seen a marked 
              improvement in my sales figures. This course is highly 
              recommended for anyone in the business world
            </p>

            <p className="bg-custom-gray mx-2 px-1 mb-4 radius-yellow rounded-xl mt-5 p-2 text-center font-normal text-gray-700 dark:text-gray-400">
              <span className=" ">
                <b className="text-yellow-200"> Akira Nakamura, Japan</b>
                <h5> Nakamura Holdings</h5>
              </span>
            </p>
          </div>
          
        </div>
               {/* action now button */}
              
        <div className="flex justify-center mt-8 sm:mt-8 py-2 sm:px-2">
        <a href="https://rzp.io/l/badecisionmc"> <button className="bg-blue-600 text-white sm:text-xl md:text-2xl font-bold py-2 px-6 rounded-xl hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 flex items-center justify-between space-x-4">
            <span className="flex-grow text-center">Action Now for ₹199</span>
            <FontAwesomeIcon
              icon={faGreaterThan}
              className="bg-white text-blue-500 px-4 p-2 rounded-lg"
            />
          </button></a>
        </div>

        {/* Blue polygon image
         <img
            className=" anima rounded-3xlte-move-x-reverse md:h-14 relative top-7 left-[300px] sm:top-8 sm:left-[600px] md:left-[700px] lg:left-[900px] xl:left-[1100px]  bottom-0 right-0 xl:mr-20"
            src="https://rajivtalreja.sgacademy.info/wp-content/uploads/2023/04/Polygon-blue.svg"
            alt=""
          /> */}
      </div>
    </div>
    </div>
  )
}

export default SixTestimonials
