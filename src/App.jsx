import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Navbar from './components/Navbar.jsx'

import PinningComponent from './pages/Prueba.jsx'


import Scrolling from './pages/Scrolling.jsx'

import Srolling_pueba from './pages/Srolling_pueba.jsx'

import ScrollDetector from './components/ScrollDetector.jsx'


function App() {
  return (
    
    <BrowserRouter>
      {/* <Navbar/> */}
      <ScrollDetector/>
      <Routes>
        <Route path="/" element={<Scrolling />} />
        {/* <Route path="/" element={<Srolling_pueba />} /> */}
      </Routes>
    </BrowserRouter>

  )
}

export default App

