import React from 'react'
import '../index.css';

function TopBar() {
    return (
        <div>
            <div className="top-bar">
                <div className="container">
                    <div className="top-bar-left">
                        <span><i className="fas fa-map-marker-alt"></i> Malappuram,Alathoorpadi Kerala</span>
                        <a href="tel:9526226011"><i className="fas fa-phone"></i> 9526226011</a>
                    </div>
                    <div className="top-bar-right">
                        <a href="https://www.facebook.com/profile.php?id=100088395416692" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://www.instagram.com/auto_deluxe_usedcars?igsh=YW5ybHA4OWx1eHh4" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://wa.me/919526226011" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopBar
