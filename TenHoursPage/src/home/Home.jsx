import React from 'react'
import Headers  from '../components/Headers'
import TenHouresSection  from '../components/TenHouresSection'
import GrowthIcons  from '../components/GrowthIcons'
import SingleVidioSection  from '../components/SingleVidioSection'
import InspiringFeedback   from '../components/InspiringFeedback'
import RevenuePicture  from '../components/RevenuePicture'
import CategorySection  from '../components/CategorySection'
const Home = () => {
  return (
    <div>
      <Headers/>
      <TenHouresSection/>
    <GrowthIcons/>
    <SingleVidioSection/>
    <InspiringFeedback/>
    <RevenuePicture/>
    <CategorySection/>
    </div>
  )
}

export default Home
