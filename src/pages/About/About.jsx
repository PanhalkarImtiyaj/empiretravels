import { FaAward, FaUsers, FaBus, FaHandshake } from 'react-icons/fa';
import officeImage from '../../assets/images/office_image.png';
import './About.css';

const About = () => {
    return (
        <div className="about-page">
            {/* Hero Section */}
            <div className="about-hero">
                <div className="container">
                    <h1>About Bus Travels</h1>
                    <p>Redefining Travel Experiences Since 2010</p>
                </div>
            </div>

            <div className="container section">
                {/* Mission & Vision */}
                <div className="about-grid">
                    <div className="about-content slide-in-left">
                        <h2>Our Mission</h2>
                        <p>
                            To provide safe, reliable, and comfortable bus travel experiences across India.
                            We strive to connect cities and people with punctual service and premium amenities,
                            ensuring every journey is a memory to cherish.
                        </p>
                        <p>
                            We believe in customer-first approach, maintaining the highest standards of safety
                            and hygiene in our entire fleet.
                        </p>
                    </div>
                    <div className="about-image slide-in-right">
                        <img src={officeImage} alt="Empire Tours Office" className="office-img" />
                    </div>
                </div>

                {/* Stats */}
                <div className="stats-grid">
                    <div className="stat-card">
                        <FaUsers className="stat-icon" />
                        <h3>10M+</h3>
                        <p>Happy Passengers</p>
                    </div>
                    <div className="stat-card">
                        <FaBus className="stat-icon" />
                        <h3>500+</h3>
                        <p>Luxury Buses</p>
                    </div>
                    <div className="stat-card">
                        <FaAward className="stat-icon" />
                        <h3>15+</h3>
                        <p>Years of Service</p>
                    </div>
                    <div className="stat-card">
                        <FaHandshake className="stat-icon" />
                        <h3>50+</h3>
                        <p>Partners</p>
                    </div>
                </div>

                {/* CEO Message */}
                <div className="ceo-message section">
                    <div className="message-box">
                        <h3>Message from CEO</h3>
                        <p>"Travel is not just about reaching a destination; it's about the journey itself. At Bus Travels, we are committed to making your journey as comfortable and safe as your home."</p>
                        <div className="signature">- Rajesh Sharma, Founder</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
