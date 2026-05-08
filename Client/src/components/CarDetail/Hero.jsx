import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
    return (
        <div>
            <div className="page-header">
                <div className="container">
                    <h2 id="pageTitle">CAR DETAILS</h2>
                    <div className="breadcrumb">
                        <Link to="/">Home</Link><span>›</span>
                        <Link to="/cars">Cars</Link><span>›</span>
                        <span className="current" id="breadcrumbName">Details</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
