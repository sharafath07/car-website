import React from 'react';

function Map() {
    return (
        <div>
            <section className="map-section">
                <div className="container">
                    <div className="map-wrapper" data-aos="fade-up">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.0316220065!2d76.20553207504946!3d11.204741888949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba6450dad5e18bf%3A0x18e00a1a90f80de8!2sAuto%20Delux!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            style={{ width: "100%", height: "400px", border: 0 }}
                        ></iframe>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Map;