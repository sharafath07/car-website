import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div>
            <footer className="footer">
                <div className="footer-bottom">
                    <div className="container">© 2024 Auto Delux. All Rights Reserved. | <Link to="/" style={{ color: 'var(--gold)' }}>Home</Link></div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
