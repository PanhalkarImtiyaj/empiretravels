import { useState, useEffect } from 'react';
import Hero from '../../components/Hero/Hero';
import WhyChooseUs from '../../components/Features/Features';
import { packagesData as localPackages } from '../../data/packagesData';
import { Link } from 'react-router-dom';
import { db } from '../../firebase/config';
import { collection, getDocs, query, orderBy, limit, where } from 'firebase/firestore';
import frontBus from '../../assets/galleary/front-side-bus.png';
import sleeperBus from '../../assets/galleary/seelper.png';
import seatingBus from '../../assets/galleary/seets.png';
import interiorBus from '../../assets/luxury_bus_interior.png';
import './Home.css';

const Home = () => {
    const [packages, setPackages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPackages = async () => {
            try {
                // Try fetching popular packages first
                const qPopular = query(
                    collection(db, "packages"),
                    where("isPopular", "==", true),
                    limit(3)
                );
                const querySnapshot = await getDocs(qPopular);
                let firestorePkgs = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));

                // If no popular ones, fall back to latest 3
                if (firestorePkgs.length === 0) {
                    const qLatest = query(
                        collection(db, "packages"),
                        orderBy("createdAt", "desc"),
                        limit(3)
                    );
                    const latestSnapshot = await getDocs(qLatest);
                    firestorePkgs = latestSnapshot.docs.map(doc => ({
                        id: doc.id,
                        ...doc.data()
                    }));
                }

                if (firestorePkgs.length > 0) {
                    setPackages(firestorePkgs);
                } else {
                    setPackages(localPackages.slice(0, 3));
                }
            } catch (error) {
                console.error("Error fetching packages:", error);
                setPackages(localPackages.slice(0, 3));
            } finally {
                setLoading(false);
            }
        };

        fetchPackages();
    }, []);

    return (
        <div className="home-page">
            <Hero />

            {/* Why Choose Us Section */}
            <WhyChooseUs />

            {/* Featured Packages Section */}
            <section className="featured-packages section">
                <div className="container">
                    <div className="section-title">
                        <h2>Popular Tour Packages</h2>
                        <p>Explore our most loved destinations</p>
                    </div>
                    {loading ? (
                        <div className="home-packages-loading">
                            <div className="spinner"></div>
                        </div>
                    ) : (
                        <div className="home-packages-grid">
                            {packages.map((pkg) => (
                                <div key={pkg.id} className="home-package-card">
                                    <div className="home-package-image">
                                        <img src={pkg.image} alt={pkg.title} loading="lazy" />
                                    </div>
                                    <div className="home-package-content">
                                        <h3>{pkg.title}</h3>
                                        <div className="pkg-meta-home">
                                            <span className="home-package-duration">⏱ {pkg.duration}</span>
                                            <span className="home-package-price">₹{Number(pkg.price).toLocaleString('en-IN')}</span>
                                        </div>
                                        <Link to="/packages" className="btn-view-package">View Details</Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                    <div className="view-all-container">
                        <Link to="/packages" className="btn-view-all">View All Packages</Link>
                    </div>
                </div>
            </section>

            {/* Our Fleet Section */}
            <section className="our-fleet section bg-white">
                <div className="container">
                    <div className="section-title">
                        <h2>Our Premium Fleet</h2>
                        <p>Travel in comfort with our modern bus fleet</p>
                    </div>

                    <div className="fleet-grid">
                        <div className="fleet-card">
                            <img src={frontBus} alt="Luxury Bus Front" />
                            <div className="fleet-info">
                                <h3>Modern Exterior</h3>
                                <p>Aerodynamic design for smooth travel</p>
                            </div>
                        </div>
                        <div className="fleet-card">
                            <img src={interiorBus} alt="Luxury Interior" />
                            <div className="fleet-info">
                                <h3>Premium Interior</h3>
                                <p>Ambiance lighting & spacious aisle</p>
                            </div>
                        </div>
                        <div className="fleet-card">
                            <img src={sleeperBus} alt="Sleeper Berths" />
                            <div className="fleet-info">
                                <h3>Comfortable Sleeper</h3>
                                <p>Double & Single berths with privacy</p>
                            </div>
                        </div>
                        <div className="fleet-card">
                            <img src={seatingBus} alt="Pushback Seats" />
                            <div className="fleet-info">
                                <h3>Ergonomic Seating</h3>
                                <p>Pushback seats with ample legroom</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Book With Us Section */}
            <section className="why-book section bg-light">
                <div className="container">
                    <div className="section-title">
                        <h2>Why Book With Us</h2>
                        <p>Experience hassle-free travel with our premium services</p>
                    </div>

                    <div className="benefits-grid">
                        <div className="benefit-card">
                            <div className="benefit-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                </svg>
                            </div>
                            <h3>24/7 Support</h3>
                            <p>Round-the-clock customer service to assist you anytime, anywhere</p>
                        </div>

                        <div className="benefit-card">
                            <div className="benefit-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="12" y1="1" x2="12" y2="23" />
                                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                                </svg>
                            </div>
                            <h3>Best Price Guarantee</h3>
                            <p>Get the most competitive rates with no hidden charges</p>
                        </div>

                        <div className="benefit-card">
                            <div className="benefit-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                </svg>
                            </div>
                            <h3>Safe & Secure</h3>
                            <p>Your safety is our priority with GPS tracking and verified drivers</p>
                        </div>

                        <div className="benefit-card">
                            <div className="benefit-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12.55a11 11 0 0 1 14.08 0" />
                                    <path d="M1.42 9a16 16 0 0 1 21.16 0" />
                                    <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
                                    <line x1="12" y1="20" x2="12" y2="20" />
                                </svg>
                            </div>
                            <h3>WiFi & CCTV</h3>
                            <p>High-speed internet and 24/7 CCTV surveillance for your comfort and safety</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
