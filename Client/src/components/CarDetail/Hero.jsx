import React from 'react'

function Hero() {
    return (
        <div>
            <div className="page-header">
                <div className="container">
                    <h2 id="pageTitle">CAR DETAILS</h2>
                    <div className="breadcrumb">
                        <a href="index.html">Home</a><span>›</span>
                        <a href="cars.html">Cars</a><span>›</span>
                        <span className="current" id="breadcrumbName">Details</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
