import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import TopBar from './components/TopBar.jsx'
import Navbar from './components/Navbar.jsx'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Cars from './pages/Cars'
// import SellCar from './pages/SellCar'
import About from './pages/About'
import Contact from './pages/Contact'
import FloatButton from './components/FloatButton.jsx'
import CarDetail from './pages/CarDetail.jsx'
import Admin from './pages/Admin.jsx'
import Login from './pages/Login.jsx'
import DashBoard from './pages/DashBoard.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import AddCar from './pages/AddCar.jsx'
import NavbarAdmin from './components/Admin/NavbarAdmin.jsx'

function App() {


  const location = useLocation();

  // Pages without navbar
  const hideNavbarRoutes = [
    "/admin/login",
    "/admin/dashboard",
    "/admin/addcar"
  ];


  useEffect(() => {

    AOS.init({
      duration: 700,
      once: true
    });

  }, []);

  return (
    <div className='m-0'>
      <TopBar />
      {
        !hideNavbarRoutes.includes(
          location.pathname
        ) ? <Navbar /> : <NavbarAdmin />
      }
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
        {/* <Route path="/sell-car" element={<SellCar />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cars/:id" element={<CarDetail />} />
        <Route path="/admin" element={<ProtectedRoute><Admin /></ProtectedRoute>} />

        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin/dashboard" element={<ProtectedRoute><DashBoard /></ProtectedRoute>} />
        <Route path="/admin/addcar" element={<ProtectedRoute><AddCar /></ProtectedRoute>} />
      </Routes>
      <FloatButton />
    </div>
  )
}

export default App
