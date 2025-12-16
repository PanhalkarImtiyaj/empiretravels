import { FaShieldAlt, FaClock, FaHeadset, FaMoneyBillWave, FaWifi, FaSnowflake } from 'react-icons/fa';
import './Features.css';

const Features = () => {
    const features = [
        {
            icon: <FaShieldAlt />,
            title: 'Safe & Secure',
            description: 'Your safety is our priority with GPS tracking and verified drivers',
            color: '#4caf50'
        },
        {
            icon: <FaClock />,
            title: 'On-Time Service',
            description: 'Punctual departures and arrivals for a hassle-free journey',
            color: '#2196f3'
        },
        {
            icon: <FaHeadset />,
            title: '24/7 Support',
            description: 'Round-the-clock customer support for all your queries',
            color: '#ff9800'
        },
        {
            icon: <FaMoneyBillWave />,
            title: 'Best Prices',
            description: 'Competitive fares with exclusive discounts and offers',
            color: '#9c27b0'
        },
        {
            icon: <FaWifi />,
            title: 'Free WiFi',
            description: 'Stay connected throughout your journey with complimentary WiFi',
            color: '#00bcd4'
        },
        {
            icon: <FaSnowflake />,
            title: 'AC Comfort',
            description: 'Travel in comfort with well-maintained air-conditioned buses',
            color: '#f44336'
        }
    ];

    return (
        <section className="features section">
            <div className="container">
                <div className="section-title">
                    <h2>Why Choose Us</h2>
                    <p>Experience the best bus travel service with premium amenities</p>
                </div>

                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="feature-card"
                            style={{ '--feature-color': feature.color }}
                        >
                            <div className="feature-icon">
                                {feature.icon}
                            </div>
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-description">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
