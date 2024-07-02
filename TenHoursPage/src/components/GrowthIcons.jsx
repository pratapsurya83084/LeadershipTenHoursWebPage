import React from 'react'

const GrowthIcons = () => {
  return (
    <section>
       <h1 className='text-center p-4 text-2xl font-bold'>Unlock your full potential for personal
        and professional growth
       </h1>
       <div className="flex justify-center mb-4">
          <svg
            width="400"
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
{/* cards */}
       <div className='grid gap-5 p-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-items-center'>
  <div className='flex flex-col items-center p-5 border-2 border-yellow-500 rounded-lg'>
    <img 
      className='h-14 w-14 mb-3'
      src="\continuous_9646587.png" 
      alt="growth icon 1" 
    />
    <p className='text-center'>A pool of 200+ skills across five distinct categories</p>
  </div>
  
  <div className='flex flex-col items-center p-5 border-2 border-yellow-500 rounded-lg'>
    <img 
      className='h-14 w-14 mb-3'
      src="\rocket_11832367.png" 
      alt="growth icon 1" 
    />
    <p className='text-center'>Choose five skills that align with your goals, weekly</p>
  </div>
  
  <div className='flex flex-col items-center p-5 border-2 border-yellow-500 rounded-lg'>
    <img 
      className='h-14 w-14 mb-3'
      src="/group_7872032.png" 
      alt="growth icon 1" 
    />
    <p className='text-center'>Discover the secrets of effective leadership</p>
  </div>
  
  <div className='flex flex-col items-center p-5 border-2 border-yellow-500 rounded-lg'>
    <img 
      className='h-14 w-14 mb-3'
      src="\direction_10577966.png" 
      alt="growth icon 1" 
    />
    <p className='text-center'>Master decision-making in high-pressure situations</p>
  </div>
</div>

    </section>
  )
}

export default GrowthIcons
