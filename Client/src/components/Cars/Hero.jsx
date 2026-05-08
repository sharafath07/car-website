import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
    return (
        <div>
            <div className="page-header">
                <div className="container">
                    <h2>ALL CARS</h2>
                    <div className="breadcrumb">
                        <Link to="/">Home</Link>
                        <span>›</span>
                        <span className="current">Cars</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
