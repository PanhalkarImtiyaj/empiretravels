import { FaBus, FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-main">
                <div className="container">
                    <div className="footer-grid">
                        {/* Company Info */}
                        <div className="footer-col">
                            <div className="footer-logo">
                                <FaBus className="footer-logo-icon" />
                                <div className="footer-logo-text">
                                    <span className="footer-logo-name">Empire tours and travels</span>
                                    <span className="footer-logo-tagline">Your Journey Partner</span>
                                </div>
                            </div>
                            <p className="footer-description">
                                Experience comfortable and safe bus travel across India.
                                We provide premium bus services with the best amenities and customer support.
                            </p>
                            <div className="social-links">
                                <a href="#" className="social-link" aria-label="Facebook">
                                    <FaFacebook />
                                </a>
                                <a href="#" className="social-link" aria-label="Twitter">
                                    <FaTwitter />
                                </a>
                                <a href="#" className="social-link" aria-label="Instagram">
                                    <FaInstagram />
                                </a>
                                <a href="#" className="social-link" aria-label="LinkedIn">
                                    <FaLinkedin />
                                </a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="footer-col">
                            <h3 className="footer-title">Quick Links</h3>
                            <ul className="footer-links">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/book-ticket">Book Ticket</Link></li>
                                <li><Link to="/gallery">Gallery</Link></li>
                                <li><Link to="/packages">Packages</Link></li>
                                <li><Link to="/about">About Us</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </div>

                        {/* Services */}
                        <div className="footer-col">
                            <h3 className="footer-title">Our Services</h3>
                            <ul className="footer-links">
                                <li><Link to="/services">AC Sleeper Bus</Link></li>
                                <li><Link to="/services">Pilgrimage Yatra</Link></li>
                                <li><Link to="/services">Family Picnic Tours</Link></li>
                                <li><Link to="/services">Meal Services</Link></li>
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div className="footer-col">
                            <h3 className="footer-title">Contact Us</h3>
                            <ul className="footer-contact">
                                <li>
                                    <FaMapMarkerAlt className="contact-icon" />
                                    <span>Dabhade, Warananagar, Maharashtra 416113</span>
                                </li>
                                <li>
                                    <FaPhone className="contact-icon" />
                                    <a href="tel:+919689116567">+91 968 911 6567</a>
                                </li>
                                <li>
                                    <FaEnvelope className="contact-icon" />
                                    <a href="mailto:empiretours2512@gmail.com">empiretours2512@gmail.com</a>
                                </li>
                            </ul>
                            <div className="footer-map" style={{ marginTop: '1rem', borderRadius: '8px', overflow: 'hidden' }}>
                                <iframe
                                    width="100%"
                                    height="150"
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
                            <a href="#">Privacy Policy</a>
                            <span className="separator">|</span>
                            <a href="#">Terms & Conditions</a>
                            <span className="separator">|</span>
                            <a href="#">Refund Policy</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
