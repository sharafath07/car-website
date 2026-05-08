import React from 'react'
import Hero from '../components/About/Hero'
import Story from '../components/About/Story'
import VisionMission from '../components/About/VisionMission'
import StatsBar from '../components/About/StatsBar'
import Footer from '../components/About/Footer'
import '../index.css'

function About() {
    return (
        <div>
            <Hero />
            <Story />
            <VisionMission />
            <StatsBar />
            <Footer />
        </div>
    )
}

export default About
