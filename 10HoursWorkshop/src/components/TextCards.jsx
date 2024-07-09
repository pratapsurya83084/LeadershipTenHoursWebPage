import React ,{useEffect,useRef}  from "react";

const TextCards = () => {

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
    <section 
    ref={sectionRef}
    >
      <h1 className="smooth-scroll text-xl md:text-2xl lg:text-3xl font-bold text-center mt-10 px-4">
        Mr. Bishop Adhikari is a dynamic and multifaceted individual,excelling
        in various fields.He is an entrepreneur,social activist and a prominent
        figure in the realm of leadership and management. With a passion for
        innovation and a vision for a better future,he has founded and led
        multiple successful ventures
      </h1>
      {/* radius-yellow */}
      <div className="gap-10 mt-10 py-8 px-5  grid mb-8   rounded-lg shadow-sm md:mb-12 md:grid-cols-2 lg:grid-cols-3  bg-custom-brown">
        {/* cards1 */}
        <figure className="smooth-scroll m-5 flex flex-col items-center justify-center p-2 text-center radius-yellow rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e bg-custom-gray">
          <blockquote className="max-w-2xl mx-auto mb-4 lg:mb-8 flex flex-col items-center">
            {/* icon */}
            <img
              className="h-10 mb- rounded-full bg-yellow-400"
              src="\seller_270682.png"
              alt=""
            />
            <h3 className="md:mb-5  text-lg font-semibold text-yellow-200">
              Entrepreneurship
            </h3>
            <p className="my-6 sm:px-5">
              As the CEO and Founder of BISJHINTUS Private Limited, Mr. Adhikari
              has demonstrated exceptional leadership skills in building and
              guiding the company towards growth and success. BISJHINTUS is
              known for its innovative solutions and transformative impact on
              various industries
            </p>
          </blockquote>
        </figure>

    
        {/* cards2 */}
        <figure className="  smooth-scroll m-5 flex flex-col items-center justify-center p-1 sm:p-8 text-center radius-yellow rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e bg-custom-gray">
          <blockquote className="max-w-2xl mx-auto mb-4 lg:mb-8 flex flex-col items-center">
            <img
              className="h-10 mb-2 mt-2 sm:mt-0 bg-yellow-400 rounded-full"
              // src="\doctor_12106342.png"
              src="\pharmatical_bottol_image.png"
              alt=""
            />
            <h3 className="text-lg font-semibold text-yellow-200">
              Pharmaceutical Expertise
            </h3>
            <p className=" my-6">
              In addition to his role at BISJHINTUS, Mr. Adhikari is a
              trailblazer in the Pharmaceutical sector. He is the Founder of
              Ricabi Life Science, where he held the position of CXO, and
              Recombio Pharmalife as the COO. Under his guidance, both companies
              have contributed significantly to advancements in science and
              patient care
            </p>
          </blockquote>
        </figure>

        {/* cards3 */}
        <figure className="smooth-scroll m-5 flex flex-col items-center  justify-center sm:p-8 text-center  radius-yellow rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e bg-custom-gray">
          <blockquote className="max-w-2xl mx-auto mb-4  lg:mb-8 flex flex-col items-center">
            <img
              className="h-10 mt-2 sm:mt-0 mb-4"
              src="\social-marketing_8862572.png"
              alt=""
            />
            <h3 className="text-lg font-semibold mb-3 text-yellow-200">
              Social Activism
            </h3>
            <p className="my-2 md:my-0 p-3">
              Mr. Adhikari's commitment to social causes is commendable. As a
              public speaker and renowned trainer, he has been actively involved
              in empowering individuals and bridging linguistic diversity.
              Through his work, he promotes empathy and invests in the future by
              uplifting underprivileged communities
            </p>
          </blockquote>
        </figure>

        {/* card4 */}
        <figure className="smooth-scroll m-5 flex flex-col items-center  justify-center sm:p-8 text-center  radius-yellow rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e bg-custom-gray">
          <blockquote className="max-w-2xl mx-auto mb-4  lg:mb-8 flex flex-col items-center ">
            <img className="mt-2 sm:mt-0 h-10 mb-2" src="\stakeholder_7740876.png" alt="" />
            <h3 className="text-lg font-semibold  text-yellow-200">
              Business Consultant and Associate
            </h3>
            <p className="my-7">
              Mr. Adhikari's expertise extends to consulting and training as a
              full-time associate at McKinsey , a reputable business consulting
              firm. His vast experience and knowledge have helped countless
              businesses achieve their goals and improve their overall
              performance
            </p>
          </blockquote>
        </figure>

        {/* card5 */}
        <figure className="smooth-scroll m-5 flex flex-col items-center  justify-center  sm:p-8 text-center  radius-yellow rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e bg-custom-gray">
          <blockquote className="max-w-2xl mx-auto mb-4  lg:mb-8 flex flex-col items-center ">
            <img
              className="h-10 mt-2 sm:mt-0 mb-2"
              src="\crisis-management_7806234.png"
              alt=""
            />
            <h3 className="text-lg font-semibold  text-yellow-200">
              Independent Director and Philanthropy
            </h3>
            <p className="my-7 md:my-10">
              Mr. Adhikari serves as an Independent Director for the Core NGO, a
              network of seven NGOs dedicated to addressing critical social
              issues. His involvement in this capacity showcases his dedication
              to making a positive impact on society
            </p>
          </blockquote>
        </figure>

        {/* card6 */}
        <figure className="smooth-scroll m-5 flex flex-col items-center  justify-center sm:p-8 text-center  radius-yellow rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e bg-custom-gray">
          <blockquote className="max-w-2xl mx-auto mb-4  lg:mb-8 flex flex-col items-center">
            <img className="h-10 mt-2 sm:mt-0 mb-4 bg-yellow-400 rounded-full p-1"
             src="\signpost_13452511.png" alt="" />
            <h3 className="text-lg font-semibold  text-yellow-200">
              Educational Journey
            </h3>
            <p className="my-10 p-">
              Alongside his successful professional journey, Mr. Adhikari is a
              Ph.D. candidate, driven by a thirst for knowledge. He has proven
              himself to be a lifelong learner and a highly accomplished
              scientific achiever
            </p>
          </blockquote>
        </figure>
      </div>
    </section>
  );
};

export default TextCards;
