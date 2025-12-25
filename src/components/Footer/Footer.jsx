import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logoImage from '../../assets/images/logo-bus.png';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-main">
                <div className="container">
                    <div className="footer-grid">
                        {/* Company Info */}
                        <div className="footer-col company-info">
                            <div className="footer-logo">
                                <img src={logoImage} alt="Empire Travels" className="footer-logo-img" />
                                <div className="footer-logo-text">
                                    <span className="footer-logo-name">Empire travels</span>
                                    <span className="footer-logo-tagline">Your Journey Partner</span>
                                </div>
                            </div>
                            <p className="footer-description">
                                Experience comfortable and safe bus travel across India.
                                We provide premium bus services with the best amenities and customer support.
                            </p>
                            <div className="social-links">
                                <a href="https://www.instagram.com/empire_travels_6567?igsh=N2pxcXF2NXpnYjZi"
                                    className="social-link instagram"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Instagram">
                                    <FaInstagram />
                                </a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="footer-col quick-links">
                            <h3 className="footer-title">Quick Links</h3>
                            <ul className="footer-links">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/gallery">Gallery</Link></li>
                                <li><Link to="/packages">Packages</Link></li>
                                <li><Link to="/about">About Us</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </div>



                        {/* Contact Info */}
                        <div className="footer-col contact-info">
                            <h3 className="footer-title">Contact Us</h3>
                            <ul className="footer-contact">
                                <li>
                                    <FaMapMarkerAlt className="contact-icon" />
                                    <span>Dabhade, Warananagar, Maharashtra 416113</span>
                                </li>
                                <li>
                                    <FaPhone className="contact-icon" />
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                                        <a href="tel:+919689116567">+91 968 911 6567</a>
                                        <a href="tel:8080591185">+91 8080 59 1185</a>
                                    </div>
                                </li>
                                <li>
                                    <FaEnvelope className="contact-icon" />
                                    <a href="mailto:empiretours2512@gmail.com">empiretours2512@gmail.com</a>
                                </li>
                            </ul>
                            <div className="footer-map-container">
                                <iframe
                                    width="100%"
                                    height="120"
                                    frameBorder="0"
                                    scrolling="no"
                                    marginHeight="0"
                                    marginWidth="0"
                                    src="https://maps.google.com/maps?q=Dabhade, Warananagar, Maharashtra 416113&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                    title="Office Location"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom">
                <div className="container">
                    <div className="footer-bottom-content">
                        <p className="copyright">
                            © {currentYear} Empire tours and travels. All rights reserved.
                        </p>
                        <div className="footer-bottom-links">
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
