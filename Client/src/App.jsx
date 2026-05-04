import React from 'react'
import TopBar from './components/TopBar.jsx'
import Navbar from './components/Navbar.jsx'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Cars from './pages/Cars'
// import SellCar from './pages/SellCar'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  return (
    <div className='m-0 bg-black'>
      <TopBar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
        {/* <Route path="/sell-car" element={<SellCar />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
