import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Navbar from './components/Navbar.jsx'

import PinningComponent from './pages/Prueba.jsx'


import Scrolling from './pages/Scrolling.jsx'

import Srolling_pueba from './pages/Srolling_pueba.jsx'


function App() {
  return (
    
    <BrowserRouter>
      {/* <Navbar/> */}
      <Routes>
        <Route path="/" element={<Scrolling />} />
        {/* <Route path="/" element={<Srolling_pueba />} /> */}
      </Routes>
    </BrowserRouter>

  )
}

export default App

