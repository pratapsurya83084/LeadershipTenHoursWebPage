import React ,{useEffect,useRef} from 'react'

const Headers = () => {
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
    <section ref={sectionRef}>
<h1 className='smooth-scroll text-center bg-custom-gray p-4 text-xl md:text-3xl font-bold'>Designed for visionaries who want to elevate their business and learn effective leadership</h1>
    </section>
  )
}

export default Headers
