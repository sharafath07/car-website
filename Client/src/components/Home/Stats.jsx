import React from 'react'

function Stats() {
    return (
        <div>
            <section className="stats-bar">
                <div className="container">
                    <div className="stat-item" data-aos="zoom-in" data-aos-delay="0">
                        <h3 className="counter" data-target="250">0</h3>
                        <p>Happy Customers</p>
                    </div>
                    <div className="stat-item" data-aos="zoom-in" data-aos-delay="100">
                        <h3 className="counter" data-target="150">0</h3>
                        <p>Cars Available</p>
                    </div>
                    <div className="stat-item" data-aos="zoom-in" data-aos-delay="200">
                        <h3 className="counter" data-target="10">0</h3>
                        <p>Years Experience</p>
                    </div>
                    <div className="stat-item" data-aos="zoom-in" data-aos-delay="300">
                        <h3 className="counter" data-target="500">0</h3>
                        <p>Cars Sold</p>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Stats
