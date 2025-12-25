import { useState, useEffect } from 'react';
import { FaAward, FaUsers, FaBus, FaHandshake, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { db } from '../../firebase/config';
import { doc, getDoc } from 'firebase/firestore';
import officeImageDefault from '../../assets/images/office_image.png';
import logoImage from '../../assets/images/logo-bus.png';
import './About.css';

const About = () => {
    const [aboutData, setAboutData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAbout = async () => {
            try {
                const docRef = doc(db, "settings", "about");
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setAboutData(docSnap.data());
                }
            } catch (error) {
                console.error("Error fetching about data:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchAbout();
    }, []);

    if (loading) {
        return <div className="loading-container"><div className="spinner"></div></div>;
    }

    const mission = aboutData?.mission || "To provide safe, reliable, and comfortable bus travel experiences across India. We strive to connect cities and people with punctual service and premium amenities, ensuring every journey is a memory to cherish.";
    const years = aboutData?.yearsOfService || "8";
    const msg = aboutData?.proprietorMessage || "Customer satisfaction is our top priority. At Empire Tours and Travels, we are committed to making your journey as comfortable and safe as your home.";
    const name = aboutData?.proprietorName || "Jeevan Patil";
    const image = aboutData?.image || officeImageDefault;

    return (
        <div className="about-page">
            {/* Hero Section */}
            <div className="about-hero">
                <div className="container">
                    <img src={logoImage} alt="Empire Tours" className="page-logo slide-in-down" />
                    <h1 className="slide-in-left">About Bus Travels</h1>
                    <p className="slide-in-right">Redefining Travel Experiences Since 2017</p>
                </div>
            </div>

            <div className="container section">
                {/* Mission & Vision */}
                <div className="about-grid">
                    <div className="about-content slide-in-left">
                        <h2>Our Mission</h2>
                        <p>{mission}</p>
                    </div>
                    <div className="about-image slide-in-right">
                        <img src={image} alt="Empire Tours Office" className="office-img" />
                    </div>
                </div>

                <div className="stats-grid">
                    <div className="stat-card">
                        <FaAward className="stat-icon" />
                        <h3>{years}</h3>
                        <p>Years of Service</p>
                    </div>
                    <div className="stat-card">
                        <FaHandshake className="stat-icon" />
                        <h3>100%</h3>
                        <p>Customer Satisfaction</p>
                    </div>
                </div>

                {/* Proprietor Message */}
                <div className="ceo-message section">
                    <div className="message-box">
                        <h3>Message from Proprietor</h3>
                        <p>"{msg}"</p>
                        <div className="signature">- {name}, Proprietor</div>
                    </div>
                </div>

                {/* Contact Info Section */}
                <div className="about-contact-section section">
                    <div className="section-title text-center">
                        <h2>Contact Details</h2>
                        <p>Feel free to reach out to us for more information</p>
                    </div>
                    <div className="about-contact-grid">
                        <div className="about-contact-card">
                            <FaPhone className="contact-icon" />
                            <h4>Phone Numbers</h4>
                            <p><a href="tel:+919689116567">+91 968 911 6567</a></p>
                            <p><a href="tel:8080591185">+91 8080 59 1185</a></p>
                        </div>
                        <div className="about-contact-card">
                            <FaMapMarkerAlt className="contact-icon" />
                            <h4>Office Location</h4>
                            <p>Dabhade, Warananagar, Maharashtra 416113</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
