import { FaShieldAlt, FaClock, FaHeadset, FaBus } from 'react-icons/fa';
import './Features.css';

const WhyChooseUs = () => {
    const features = [
        {
            icon: <FaBus />,
            title: 'Modern Buses',
            description: 'Experience travel in our latest fleet of AC Sleeper & Seater buses.',
            color: '#f44336'
        },
        {
            icon: <FaClock />,
            title: 'On-Time Guarantee',
            description: 'Punctual departures and arrivals. We value your time.',
            color: '#2196f3'
        },
        {
            icon: <FaShieldAlt />,
            title: 'Secure Payments',
            description: '100% secure payment gateways for hassle-free booking.',
            color: '#4caf50'
        },
        {
            icon: <FaHeadset />,
            title: '24/7 Support',
            description: 'Round-the-clock customer support for all your queries.',
            color: '#ff9800'
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

export default WhyChooseUs;
