import { useState, useEffect } from 'react';
import { BiMapPin, BiTime, BiCheckCircle, BiLogoWhatsapp, BiPhone } from 'react-icons/bi';
import { db } from '../../firebase/config';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { packagesData as localPackages } from '../../data/packagesData';
import logoImage from '../../assets/images/logo-bus.png';
import './Packages.css';

const Packages = () => {
    const [packages, setPackages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPackages = async () => {
            try {
                const q = query(collection(db, "packages"), orderBy("createdAt", "desc"));
                const querySnapshot = await getDocs(q);
                const firestorePkgs = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));

                if (firestorePkgs.length > 0) {
                    setPackages(firestorePkgs);
                } else {
                    setPackages(localPackages);
                }
            } catch (error) {
                console.error("Error fetching packages:", error);
                setPackages(localPackages);
            } finally {
                setLoading(false);
            }
        };

        fetchPackages();
    }, []);

    if (loading) {
        return <div className="loading-container"><div className="spinner"></div></div>;
    }

    return (
        <div className="packages-page">
            <div className="packages-hero">
                <div className="container">
                    <img src={logoImage} alt="Empire Tours" className="page-logo slide-in-down" />
                    <h1 className="slide-in-left">Tour Packages</h1>
                    <p className="slide-in-right">Explore our curated travel packages for unforgettable experiences</p>
                </div>
            </div>

            <div className="container">
                <div className="packages-grid">
                    {packages.map((pkg, index) => (
                        <div
                            key={pkg.id}
                            className="package-card"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="package-image">
                                <img src={pkg.image} alt={pkg.title} loading="lazy" />
                                <div className="package-overlay"></div>
                                <div className="duration-badge">
                                    <BiTime /> {pkg.duration || `${pkg.days} Days / ${pkg.nights} Nights`}
                                </div>
                            </div>

                            <div className="package-content">
                                <div className="package-header">
                                    <h3 className="package-title">{pkg.title}</h3>
                                </div>

                                <div className="package-destination">
                                    <BiMapPin className="location-icon" />
                                    <span>{pkg.destination}</span>
                                </div>

                                {/* Pricing Options */}
                                {pkg.sleeperPrice && pkg.semiSleeperPrice && (
                                    <div className="package-pricing">
                                        <div className="pricing-option">
                                            <span className="pricing-label">Semi-Sleeper</span>
                                            <span className="pricing-value">₹{pkg.semiSleeperPrice}</span>
                                        </div>
                                        <div className="pricing-option">
                                            <span className="pricing-label">Sleeper</span>
                                            <span className="pricing-value">₹{pkg.sleeperPrice}</span>
                                        </div>
                                    </div>
                                )}

                                {/* Meals Information */}
                                {pkg.meals && (
                                    <div className="package-meals">
                                        <h4 className="section-heading">🍽️ Meals Included</h4>
                                        <p className="meals-description">{pkg.meals.description}</p>
                                        <div className="meals-details">
                                            <span>☕ {pkg.meals.breakfast}</span>
                                            <span>🍛 {pkg.meals.lunch}</span>
                                            {pkg.meals.dinner !== pkg.meals.lunch && <span>🍲 {pkg.meals.dinner}</span>}
                                        </div>
                                    </div>
                                )}

                                {/* Accommodation Information */}
                                {pkg.accommodation && (
                                    <div className="package-accommodation">
                                        <h4 className="section-heading">🏨 Accommodation</h4>
                                        <p className="accommodation-type">{pkg.accommodation.type}</p>
                                        <p className="accommodation-description">{pkg.accommodation.description}</p>
                                    </div>
                                )}

                                <ul className="package-highlights">
                                    {(pkg.highlights || []).map((highlight, idx) => (
                                        <li key={idx}>
                                            <BiCheckCircle className="check-icon" />
                                            <span>{highlight}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="package-footer">
                                    <a
                                        href={`https://wa.me/919689116567?text=Hello, I'm interested in the ${pkg.title} package. Please share more details.`}
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
        </div>
    );
};

export default Packages;
