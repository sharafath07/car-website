import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { CarContext } from '../../Context/CarContext'


function Content() {
    const { carId } = useParams();
    const { cars, currency } = useContext(CarContext);
    const [productData, setProductData] = useState(false)
    const [image, setImage] = useState(null)
    const [features, setFeatures] = useState('')


    async function fetchCarData() {
        cars.map((item) => {
            if (item._id === carId) {
                setProductData(item)
                setImage(item.image[0])
                return null
            }
        })
    }

    function submitEnquiry() {
        const name = document.getElementById("enqName").value.trim();
    }

    useEffect(() => {
        fetchCarData()
    }, [carId])


    return (
        <div>
            <section className="car-details-page">
                <div className="container">
                    <div id="carNotFound" style={{ display: "none", textAlign: "center", padding: "60px 20px" }}>
                        <i className="fas fa-car-crash" style={{ fontSize: "50px", color: "#ccc", marginBottom: "20px", display: "block" }}></i>
                        <h3>Car Not Found</h3>
                        <p style={{ color: "#999", margin: "10px 0 20px" }}>This car may have been sold or removed.</p>
                        <Link to="/cars" className="btn btn-primary">Browse All Cars</Link>
                    </div>

                    <div className="car-details-layout" id="carDetailsContent">
                        <div>
                            <div className="gallery-main" data-aos="fade-right">
                                <img id="mainImage" src={image} alt="Car Image" />
                            </div>
                            <div className="gallery-thumbs" id="galleryThumbs" data-aos="fade-right" data-aos-delay="100"></div>

                            <div className="features-list" data-aos="fade-up" style={{ background: "white", borderRadius: "10px", boxShadow: "0 4px 20px rgba(0,0,0,.08)", padding: "25px", marginTop: "25px" }}>
                                <h3>FEATURES</h3>
                                <div className="features-grid" id="featuresList">{
                                    productData && productData.features ? productData.features.map((feature, index) => (
                                        <div key={index} className="feature-item">
                                            <i className="fas fa-check-circle"></i> {feature}
                                        </div>
                                    )) : null
                                }</div>
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
                                    <button className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }} onClick={submitEnquiry}>
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
