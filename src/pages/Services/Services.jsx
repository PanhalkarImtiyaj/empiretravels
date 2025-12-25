import { BiBus, BiMap, BiBriefcase, BiSupport, BiTime, BiCheckShield, BiCoffee, BiRestaurant, BiGroup, BiDirections, BiHeart, BiWifi, BiShieldQuarter, BiBed } from 'react-icons/bi';
import logoImage from '../../assets/images/logo-bus.png';
import './Services.css';

const Services = () => {
    return (
        <div className="services-page">
            {/* Hero Section */}
            <div className="services-hero">
                <div className="container">
                    <img src={logoImage} alt="Empire Tours" className="page-logo slide-in-down" />
                    <h1 className="slide-in-left">Our Services</h1>
                    <p className="slide-in-right">Comprehensive travel solutions tailored for your comfort and convenience</p>
                </div>
            </div>

            <div className="container">
                <div className="services-grid mt-4">
                    {/* Service 1 - Meals */}
                    <div className="service-card">
                        <div className="service-icon">
                            <i className="bi-restaurant"><BiRestaurant /></i>
                        </div>
                        <h3>Premium Meal Services</h3>
                        <p>
                            We provide high-quality, fresh, and hygienic food during your journey.
                            Ensuring you have a comfortable and satisfying travel experience.
                        </p>
                        <ul className="service-features">
                            <li><BiCoffee /> Fresh Nashata (Breakfast)</li>
                            <li><BiRestaurant /> 2 Times Full Meals (Lunch & Dinner)</li>
                            <li><BiCheckShield /> 100% Hygienic & Healthy</li>
                        </ul>
                    </div>
                    {/* Service 2 - WiFi & CCTV */}
                    <div className="service-card">
                        <div className="service-icon">
                            <i className="bi-wifi"><BiWifi /></i>
                        </div>
                        <h3>WiFi & CCTV Surveillance</h3>
                        <p>
                            Stay connected and feel safe throughout your journey with our
                            high-speed WiFi and 24/7 CCTV monitoring systems.
                        </p>
                        <ul className="service-features">
                            <li><BiWifi /> Free High-Speed WiFi</li>
                            <li><BiShieldQuarter /> 24/7 CCTV Monitoring</li>
                            <li><BiCheckShield /> GPS Live Tracking</li>
                        </ul>
                    </div>

                    {/* Service 3 - Sleeper & Seating */}
                    <div className="service-card">
                        <div className="service-icon">
                            <i className="bi-bus"><BiBus /></i>
                        </div>
                        <h3>Premium Sleeper & Seating</h3>
                        <p>
                            Experience the best-in-class comfort with our ergonomic pushback
                            seats and spacious sleeper berths designed for long journeys.
                        </p>
                        <ul className="service-features">
                            <li><BiBed /> Luxury Sleeper Berths</li>
                            <li><BiBriefcase /> Ergonomic Pushback Seats</li>
                            <li><BiCheckShield /> Clean & Fresh Bedding</li>
                        </ul>
                    </div>

                    {/* Service 4 - Pilgrimage */}
                    <div className="service-card">
                        <div className="service-icon">
                            <i className="bi-pray"><BiDirections /></i>
                        </div>
                        <h3>Pilgrimage Special Yatra</h3>
                        <p>
                            Expertly organized spiritual journeys to Kedarnath, Char Dham,
                            Vaishno Devi, and South India's historic temples.
                        </p>
                        <ul className="service-features">
                            <li><BiCheckShield /> Reliable Darshan Schedules</li>
                            <li><BiCoffee /> Pure Veg Food Services</li>
                            <li><BiMap /> Experienced Yatra Guides</li>
                        </ul>
                    </div>
                </div>

                {/* Additional Information Section */}
                <div className="service-info-section slide-in-up">
                    <div className="info-content">
                        <h2>Why Choose Our Services?</h2>
                        <p>
                            At Empire Tours and Travels, we prioritize safety, punctuality, and your overall well-being.
                            Our hospitality team ensures that you feel at home throughout your journey.
                            From premium bedding in our sleepers to fresh meals prepared with care,
                            we redefine what it means to travel in luxury.
                        </p>
                        <p style={{ marginTop: '1rem', fontWeight: '500', color: 'var(--primary-red)' }}>
                            Specializing in Kedarnath Dham Yatra, Kashmir Heaven Tours, and all-India Religious Pilgrimages.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
