import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'> 
         <footer>
        <div className="container2">
            <div className="footer-container">
                <div class="footer-col">
                    <h3>About Us</h3>
                    <p>Prime Properties is a leading real estate agency dedicated to helping clients find their perfect homes and investments. With over 15 years of experience, we provide exceptional service and local market expertise.</p>
                </div>
                
                <div className="footer-col">
                    <h3>Quick Links</h3>
                    <ul className="footer-links">
                        <li><a href="#home"><i class="fas fa-chevron-right"></i> Home</a></li>
                        <li><a href="#properties"><i class="fas fa-chevron-right"></i> Properties</a></li>
                        <li><a href="#blog"><i class="fas fa-chevron-right"></i> Blog</a></li>
                        <li><a href="#agents"><i class="fas fa-chevron-right"></i> Agents</a></li>
                        <li><a href="#contact"><i class="fas fa-chevron-right"></i> Contact</a></li>
                    </ul>
                </div>
                
                <div className="footer-col">
                    <h3>Services</h3>
                    <ul className="footer-links">
                        <li><a href="#"><i class="fas fa-chevron-right"></i> Property Sales</a></li>
                        <li><a href="#"><i class="fas fa-chevron-right"></i> Property Rentals</a></li>
                        <li><a href="#"><i class="fas fa-chevron-right"></i> Property Valuation</a></li>
                        <li><a href="#"><i class="fas fa-chevron-right"></i> Investment Properties</a></li>
                        <li><a href="#"><i class="fas fa-chevron-right"></i> Property Management</a></li>
                    </ul>
                </div>
                
                <div className="footer-col">
                    <h3>Newsletter</h3>
                    <p>Subscribe to our newsletter for the latest property listings and real estate news.</p>
                    <form className="newsletter-form">
                        <input type="email" placeholder="Your Email" required />
                        <button type="submit" class="btn">Subscribe</button>
                    </form>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2023 Prime Properties. All Rights Reserved.</p>
            </div>
        </div>
    </footer>
    </div>
  )
}

export default Footer
