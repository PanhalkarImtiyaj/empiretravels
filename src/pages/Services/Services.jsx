import { BiBus, BiMap, BiBriefcase, BiSupport, BiTime, BiCheckShield, BiCoffee, BiRestaurant, BiGroup, BiDirections, BiHeart } from 'react-icons/bi';
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

                    {/* Service 2 - Family Tours */}
                    <div className="service-card">
                        <div className="service-icon">
                            <i className="bi-map"><BiMap /></i>
                        </div>
                        <h3>Family & Picnic Tours</h3>
                        <p>
                            From scenic hill stations to relaxing beach picnics, we offer
                            customized family packages that guarantee fun and bonding.
                        </p>
                        <ul className="service-features">
                            <li><BiBus /> Luxury Sleeper Comfort</li>
                            <li><BiRestaurant /> Fresh On-board Meals</li>
                            <li><BiMap /> Sightseeing & Picnic Spots</li>
                        </ul>
                    </div>

                    {/* Service 3 - Pilgrimage */}
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
