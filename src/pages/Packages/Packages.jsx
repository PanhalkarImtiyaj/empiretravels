import { BiMapPin, BiTime, BiCheckCircle, BiLogoWhatsapp, BiPhone } from 'react-icons/bi';
import { packagesData } from '../../data/packagesData';
import './Packages.css';

const Packages = () => {

    return (
        <div className="packages-page">
            {/* Hero Section */}
            <div className="packages-hero">
                <div className="container">
                    <h1 className="slide-in-down">Tour Packages</h1>
                    <p className="slide-in-up">Explore our curated travel packages for unforgettable experiences</p>
                </div>
            </div>


            <div className="container">
                {/* Packages Grid */}
                <div className="packages-grid">
                    {packagesData.map((pkg, index) => (
                        <div
                            key={pkg.id}
                            className="package-card"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {/* Package Image */}
                            <div className="package-image">
                                <img src={pkg.image} alt={pkg.title} loading="lazy" />
                                <div className="package-overlay"></div>

                                {/* Duration Badge */}
                                <div className="duration-badge">
                                    <BiTime /> {pkg.duration}
                                </div>
                            </div>

                            {/* Package Content */}
                            <div className="package-content">
                                <h3 className="package-title">{pkg.title}</h3>

                                <div className="package-destination">
                                    <BiMapPin className="location-icon" />
                                    <span>{pkg.destination}</span>
                                </div>

                                {/* Highlights */}
                                <ul className="package-highlights">
                                    {pkg.highlights.slice(0, 3).map((highlight, idx) => (
                                        <li key={idx}>
                                            <BiCheckCircle className="check-icon" />
                                            <span>{highlight}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Action Buttons */}
                                <div className="package-footer">
                                    <a
                                        href={`https://wa.me/919689116567?text=Hello, I'm interested in the ${pkg.title} package (${pkg.duration}). Please share more details.`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-whatsapp"
                                    >
                                        <BiLogoWhatsapp />
                                        <span>WhatsApp</span>
                                    </a>
                                    <a
                                        href="tel:+919689116567"
                                        className="btn-contact"
                                    >
                                        <BiPhone />
                                        <span>Contact</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* No Results Message */}
        </div>
    );
};

export default Packages;
