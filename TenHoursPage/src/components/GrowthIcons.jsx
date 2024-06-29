import React from 'react'

const GrowthIcons = () => {
  return (
    <section>
       <h1 className='text-center p-4 text-2xl font-bold'>Unlock your full potential for personal
        and professional growth
       </h1>

{/* cards */}
       <div className='grid gap-5 p-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-items-center'>
  <div className='flex flex-col items-center p-5 border-2 border-yellow-500 rounded-lg'>
    <img 
      className='h-20 w-20 mb-3'
      src="https://course.bishopadhikari.com/images/A%20pool%20of%20200+%20skills%20across%20five%20distinct%20categories.png" 
      alt="growth icon 1" 
    />
    <p className='text-center'>A pool of 200+ skills across five distinct categories</p>
  </div>
  
  <div className='flex flex-col items-center p-5 border-2 border-yellow-500 rounded-lg'>
    <img 
      className='h-20 w-20 mb-3'
      src="https://course.bishopadhikari.com/images/Choose%20five%20skills%20that%20align%20with%20your%20goals,%20weekly.png" 
      alt="growth icon 1" 
    />
    <p className='text-center'>Choose five skills that align with your goals, weekly</p>
  </div>
  
  <div className='flex flex-col items-center p-5 border-2 border-yellow-500 rounded-lg'>
    <img 
      className='h-20 w-20 mb-3'
      src="https://course.bishopadhikari.com/images/Discover%20the%20secrets%20of%20effective%20leadership.png" 
      alt="growth icon 1" 
    />
    <p className='text-center'>Discover the secrets of effective leadership</p>
  </div>
  
  <div className='flex flex-col items-center p-5 border-2 border-yellow-500 rounded-lg'>
    <img 
      className='h-20 w-20 mb-3'
      src="https://course.bishopadhikari.com/images/Master%20decision-making%20in%20high-pressure%20situations.png" 
      alt="growth icon 1" 
    />
    <p className='text-center'>Master decision-making in high-pressure situations</p>
  </div>
</div>

    </section>
  )
}

export default GrowthIcons
