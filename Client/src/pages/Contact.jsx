import React from 'react'
import Hero from '../components/Contact/Hero'
import ContactUs from '../components/Contact/ContactUs'
import Map from '../components/Contact/Map'
import Info from '../components/Contact/Info'
import Help from '../components/Contact/Help'
import Footer from '../components/Contact/Footer.jsx'
// import '../styles/Contact.css'
import '../index.css'

function Contact() {
    return (
        <div>
            <Hero />
            <ContactUs />
            <Map />
            <Info />
            <Help />
            <Footer />
        </div>
    )
}

export default Contact
