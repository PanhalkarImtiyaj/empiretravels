import { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Format the message for WhatsApp
        const text = `*New Contact Inquiry*\n\n` +
            `*Name:* ${formData.name}\n` +
            `*Phone:* ${formData.phone}\n` +
            `*Email:* ${formData.email}\n` +
            `*Subject:* ${formData.subject}\n` +
            `*Message:* ${formData.message}`;

        // Create WhatsApp URL
        const encodedText = encodeURIComponent(text);
        const whatsappUrl = `https://wa.me/919689116567?text=${encodedText}`;

        // Open in new tab
        window.open(whatsappUrl, '_blank');

        // Reset form
        setFormData({
            name: '',
            phone: '',
            email: '',
            subject: '',
            message: ''
        });
    };
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
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="form-group-half">
                                    <div className="input-group">
                                        <label>Your Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Enter your name"
                                            required
                                        />
                                    </div>
                                    <div className="input-group">
                                        <label>Phone Number</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="Enter your phone number"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="input-group">
                                    <label>Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Enter your email address"
                                        required
                                    />
                                </div>

                                <div className="input-group">
                                    <label>Subject</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        placeholder="Enter your subject"
                                    />
                                </div>

                                <div className="input-group">
                                    <label>Message</label>
                                    <textarea
                                        rows="5"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Enter your message here..."
                                        required
                                    ></textarea>
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
