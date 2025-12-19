import { BiBus, BiMap, BiBriefcase, BiSupport, BiTime, BiCheckShield } from 'react-icons/bi';
import './Services.css';

const Services = () => {
    return (
        <div className="services-page section">
            <div className="container">
                {/* Page Header */}
                <div className="section-title text-center">
                    <h1>Our Services</h1>
                    <p>Comprehensive travel solutions tailored for your comfort and convenience</p>
                </div>

                <div className="services-grid">
                    {/* Service 1 */}
                    <div className="service-card">
                        <div className="service-icon">
                            <BiBus />
                        </div>
                        <h3>Luxury Bus Rental</h3>
                        <p>
                            Premium fleet of Volvo, Scania, and Mercedes buses available for rent.
                            Perfect for weddings, corporate events, and group excursions.
                        </p>
                        <ul className="service-features">
                            <li><BiCheckShield /> Verified Drivers</li>
                            <li><BiTime /> On-time Service</li>
                            <li><BiSupport /> 24/7 Support</li>
                        </ul>
                    </div>

                    {/* Service 2 */}
                    <div className="service-card">
                        <div className="service-icon">
                            <BiMap />
                        </div>
                        <h3>Tour Packages</h3>
                        <p>
                            Curated holiday packages for domestic and religious destinations.
                            Includes accommodation, travel, and sightseeing.
                        </p>
                        <ul className="service-features">
                            <li><BiCheckShield /> Best Hotels</li>
                            <li><BiTime /> Flexible Itinerary</li>
                            <li><BiSupport /> Guide Support</li>
                        </ul>
                    </div>

                    {/* Service 3 */}
                    <div className="service-card">
                        <div className="service-icon">
                            <BiBriefcase />
                        </div>
                        <h3>Corporate Travel</h3>
                        <p>
                            Dedicated transport solutions for employee commutation and corporate offsites.
                            Monthly contracts available.
                        </p>
                        <ul className="service-features">
                            <li><BiCheckShield /> GST Invoice</li>
                            <li><BiTime /> Punctual Pickups</li>
                            <li><BiSupport /> Route Management</li>
                        </ul>
                    </div>
                </div>

                {/* Additional Information Section */}
                <div className="service-info-section slide-in-up">
                    <div className="info-content">
                        <h2>Why Choose Our Services?</h2>
                        <p>
                            At Empire Tours and Travels, we prioritize safety, punctuality, and comfort.
                            Our fleet is regularly maintained, and our staff is trained to provide the best hospitality.
                            Whether it's a short trip or a long journey, we ensure a memorable experience.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
