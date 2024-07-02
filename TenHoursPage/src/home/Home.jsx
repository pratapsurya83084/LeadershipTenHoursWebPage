import React from 'react'
import Headers  from '../components/Headers'
import TenHouresSection  from '../components/TenHouresSection'
import GrowthIcons  from '../components/GrowthIcons'
import SingleVidioSection  from '../components/SingleVidioSection'
import InspiringFeedback   from '../components/InspiringFeedback'
import RevenuePicture  from '../components/RevenuePicture'
import CategorySection  from '../components/CategorySection'
import FourAdditionPicture  from '../components/FourAdditionPicture'
import Vidios from '../components/Vidios'
import ScreenshotPicture  from '../components/ScreenshotPicture'
import SingleVidio  from '../components/SingleVidio'
const Home = () => {
  return (
    <div>
      <Headers/>
      <TenHouresSection/>
    <GrowthIcons/>
    <SingleVidioSection/>
    <InspiringFeedback/>
    <RevenuePicture/>
    <SingleVidio/>
    <CategorySection/>
    <FourAdditionPicture/>
    <Vidios/>
    <ScreenshotPicture/>
    </div>
  )
}

export default Home
