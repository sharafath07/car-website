import React from 'react'

function LatestCars() {
    return (
        <div>
            <section className="latest-section">
                <div className="container">
                    <div className="section-title" data-aos="fade-up">
                        <h2>LATEST CARS</h2>
                        <p>Newly added cars in our stock</p>
                    </div>
                    <div className="cars-grid" id="latestCarsGrid"></div>
                    <div style={{ textAlign: 'center', marginTop: '40px' }} data-aos="fade-up">
                        <a href="cars.html" className="btn btn-primary" style={{ padding: '14px 40px', fontSize: '15px' }}>View All Cars <i className="fas fa-arrow-right"></i></a>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default LatestCars
