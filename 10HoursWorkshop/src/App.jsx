// import home files
import Home  from './home/Home'
import {BrowserRouter as Routers,Routes,Route}  from 'react-router-dom'


function App() {
  

  return (
  <Routers>
    <Routes>
      <Route path='/' element={<Home/>}/>
  

    </Routes>
  </Routers>
  )
}

export default App
