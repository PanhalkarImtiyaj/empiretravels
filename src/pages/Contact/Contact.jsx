import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-page section">
            <div className="container">
                {/* Page Header */}
                <div className="section-title text-center">
                    <h1>Contact Us</h1>
                    <p>We'd love to hear from you. Reach out to us for any queries.</p>
                </div>

                <div className="contact-container">
                    {/* Contact Info Cards */}
                    <div className="contact-info-wrapper">
                        <div className="info-card">
                            <div className="icon-box">
                                <FaMapMarkerAlt />
                            </div>
                            <h3>Our Office</h3>
                            <p>Dabhade, Warananagar,<br />Maharashtra 416113</p>
                        </div>

                        <div className="info-card">
                            <div className="icon-box">
                                <FaPhone />
                            </div>
                            <h3>Phone Number</h3>
                            <p>
                                <a href="tel:+919689116567">+91 968 911 6567</a>
                            </p>
                        </div>

                        <div className="info-card">
                            <div className="icon-box">
                                <FaEnvelope />
                            </div>
                            <h3>Email Address</h3>
                            <p>
                                <a href="mailto:info@bustravels.com">info@bustravels.com</a>
                            </p>
                        </div>

                        <div className="info-card">
                            <div className="icon-box">
                                <FaClock />
                            </div>
                            <h3>Working Hours</h3>
                            <p>Mon - Sun: 09:00 AM - 10:00 PM<br />Support: 24/7 Available</p>
                        </div>
                    </div>

                    {/* Contact Form & Map Section */}
                    <div className="contact-content-grid">
                        <div className="contact-form-section slide-in-left">
                            <h2>Send us a Message</h2>
                            <form className="contact-form">
                                <div className="form-group-half">
                                    <div className="input-group">
                                        <label>Your Name</label>
                                        <input type="text" placeholder="John Doe" required />
                                    </div>
                                    <div className="input-group">
                                        <label>Phone Number</label>
                                        <input type="tel" placeholder="+91 9876543210" required />
                                    </div>
                                </div>

                                <div className="input-group">
                                    <label>Email Address</label>
                                    <input type="email" placeholder="john@example.com" required />
                                </div>

                                <div className="input-group">
                                    <label>Subject</label>
                                    <input type="text" placeholder="Regarding Ticket Booking..." />
                                </div>

                                <div className="input-group">
                                    <label>Message</label>
                                    <textarea rows="5" placeholder="Write your message here..." required></textarea>
                                </div>

                                <button type="submit" className="btn btn-primary">Send Message</button>
                            </form>
                        </div>

                        {/* Map Integration Placeholder */}
                        <div className="map-section slide-in-right">
                            <div className="map-frame">
                                <iframe
                                    src="https://maps.google.com/maps?q=Dabhade, Warananagar, Maharashtra 416113&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Office Location"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
