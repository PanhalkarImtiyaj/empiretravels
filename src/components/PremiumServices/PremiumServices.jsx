import { BiCheckCircle, BiWifi, BiPowerOff, BiDrink, BiCameraMovie, BiTimeFive } from 'react-icons/bi';
import './PremiumServices.css';
import interiorImg from '../../assets/luxury_bus_interior.png';
import exteriorImg from '../../assets/modern_bus_exterior.png';

const PremiumServices = () => {
    return (
        <section className="premium-services section">
            <div className="container">
                <div className="section-title text-center">
                    <span className="subtitle-badge">Superior Experience</span>
                    <h2>Premium Travel Services</h2>
                    <p>Experience the next level of comfort and safety with our elite fleet</p>
                </div>

                <div className="premium-grid">
                    <div className="premium-card fade-in">
                        <img src={interiorImg} alt="Luxury Bus Interior" className="premium-img" />
                        <div className="premium-overlay">
                            <h3>Luxury Sleeper Class</h3>
                            <p>Relax in our ergonomically designed sleeper berths featuring premium leather and ambient lighting for a restful journey.</p>
                            <div className="feature-list">
                                <span className="feature-tag"><BiPowerOff /> Charging Point</span>
                                <span className="feature-tag"><BiWifi /> Free WiFi</span>
                                <span className="feature-tag"><BiCameraMovie /> Entertainment</span>
                                <span className="feature-tag"><BiCheckCircle /> Sanitized</span>
                            </div>
                        </div>
                    </div>

                    <div className="premium-card fade-in">
                        <img src={exteriorImg} alt="Modern Bus Exterior" className="premium-img" />
                        <div className="premium-overlay">
                            <h3>High-Speed Scania Fleet</h3>
                            <p>Our fleet consists of the latest Scania and Volvo multi-axle buses, ensuring maximum safety and on-time performance.</p>
                            <div className="feature-list">
                                <span className="feature-tag"><BiTimeFive /> On-time Guarantee</span>
                                <span className="feature-tag"><BiDrink /> Refreshments</span>
                                <span className="feature-tag"><BiCheckCircle /> GPS Tracking</span>
                                <span className="feature-tag"><BiCheckCircle /> Verified Drivers</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PremiumServices;
