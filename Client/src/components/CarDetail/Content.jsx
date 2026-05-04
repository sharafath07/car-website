import React from 'react'

function Content() {
    return (
        <div>
            <section className="car-details-page">
                <div className="container">
                    <div id="carNotFound" style={{ display: "none", textAlign: "center", padding: "60px 20px" }}>
                        <i className="fas fa-car-crash" style={{ fontSize: "50px", color: "#ccc", marginBottom: "20px", display: "block" }}></i>
                        <h3>Car Not Found</h3>
                        <p style={{ color: "#999", margin: "10px 0 20px" }}>This car may have been sold or removed.</p>
                        <a href="cars.html" className="btn btn-primary">Browse All Cars</a>
                    </div>

                    <div className="car-details-layout" id="carDetailsContent">
                        <div>
                            <div className="gallery-main" data-aos="fade-right">
                                <img id="mainImage" src="" alt="Car Image" />
                            </div>
                            <div className="gallery-thumbs" id="galleryThumbs" data-aos="fade-right" data-aos-delay="100"></div>

                            <div className="features-list" data-aos="fade-up" style={{ background: "white", borderRadius: "10px", boxShadow: "0 4px 20px rgba(0,0,0,.08)", padding: "25px", marginTop: "25px" }}>
                                <h3>FEATURES</h3>
                                <div className="features-grid" id="featuresList"></div>
                            </div>

                            <div className="description-section" data-aos="fade-up" style={{ marginTop: "25px" }}>
                                <h3>DESCRIPTION</h3>
                                <p id="carDescription"></p>
                            </div>

                            <div data-aos="fade-up" style={{ marginTop: "30px" }}>
                                <h3 style={{ fontSize: "20px", fontWeight: "700", color: "var(--primary)", marginBottom: "20px" }} >SIMILAR CARS</h3>
                                <div className="cars-grid" id="similarCars"></div>
                            </div>
                        </div>

                        <div>
                            <div className="car-info-card" data-aos="fade-left">
                                <h1 id="carName"></h1>
                                <div className="car-info-price" id="carPrice"></div>

                                <table className="specs-table" id="specsTable"></table>

                                <div className="car-actions">
                                    <a id="waBtn" href="#" target="_blank" className="btn btn-whatsapp"><i className="fab fa-whatsapp"></i>
                                        WHATSAPP</a>
                                    <a href="tel:9526226011" className="btn btn-accent"><i className="fas fa-phone"></i> CALL NOW</a>
                                </div>

                                <div className="enquiry-form">
                                    <h3><i className="fas fa-envelope"></i> Send Enquiry</h3>
                                    <input type="text" className="form-control" id="enqName" placeholder="Your Name *" />
                                    <input type="tel" className="form-control" id="enqPhone" placeholder="Your Phone *" />
                                    <textarea className="form-control" id="enqMessage" placeholder="Your Message..."></textarea>
                                    <button className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }} onclick="submitEnquiry()">
                                        <i className="fas fa-paper-plane"></i> SEND ENQUIRY
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Content
