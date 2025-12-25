import { FaShieldAlt, FaUtensils, FaHeadset, FaBed } from 'react-icons/fa';
import './Features.css';

const WhyChooseUs = () => {
    const features = [
        {
            icon: <FaBed />,
            title: 'Premium Sleepers',
            description: 'Travel in luxury with our clean and comfortable AC Sleeper coaches.',
            color: '#f44336'
        },
        {
            icon: <FaUtensils />,
            title: 'Hygienic Meals',
            description: 'Fresh Nashata and 2-time delicious meals provided during your yatra.',
            color: '#2196f3'
        },
        {
            icon: <FaShieldAlt />,
            title: 'Safety First',
            description: 'CCTV surveillance and GPS tracking in all buses for your security.',
            color: '#4caf50'
        },
        {
            icon: <FaHeadset />,
            title: 'Expert Support',
            description: '24/7 assistance and experienced guides for a hassle-free journey.',
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
