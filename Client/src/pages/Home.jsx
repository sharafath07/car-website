import React from 'react'
import Hero from '../components/Home/Hero.jsx'
import Search from '../components/Home/Search.jsx'
import FeaturesBar from '../components/Home/FeaturesBar.jsx'
import FeaturedCars from '../components/Home/FeaturedCars.jsx'
import LatestCars from '../components/Home/LatestCars.jsx'
import WhyChooseUs from '../components/Home/WhyChooseUs.jsx'
import Stats from '../components/Home/Stats.jsx'
import Reviews from '../components/Home/Reviews.jsx'
import Partners from '../components/Home/Partners.jsx'
import Footer from '../components/Home/Footer.jsx'
import '../index.css'

function Home() {
    return (
        <div>
            <Hero />
            <Search />
            <FeaturesBar />
            <FeaturedCars />
            <LatestCars />
            <WhyChooseUs />
            <Stats />
            <Reviews />
            <Partners />
            <Footer />
        </div>
    )
}

export default Home
