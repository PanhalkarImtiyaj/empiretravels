import Hero from '../../components/Hero/Hero';
import WhyChooseUs from '../../components/Features/Features';
import { packagesData } from '../../data/packagesData';
import { Link } from 'react-router-dom';
import frontBus from '../../assets/galleary/front-side-bus.png';
import sleeperBus from '../../assets/galleary/seelper.png';
import seatingBus from '../../assets/galleary/seets.png';
import interiorBus from '../../assets/luxury_bus_interior.png';
import './Home.css';

const Home = () => {
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
                    <div className="home-packages-grid">
                        {packagesData.slice(0, 3).map((pkg) => (
                            <div key={pkg.id} className="home-package-card">
                                <div className="home-package-image">
                                    <img src={pkg.image} alt={pkg.title} />
                                    <span className="home-package-category">{pkg.category}</span>
                                </div>
                                <div className="home-package-content">
                                    <h3>{pkg.title}</h3>
                                    <p className="home-package-duration">⏱ {pkg.duration}</p>
                                    <Link to="/packages" className="btn-view-package">View Details</Link>
                                </div>
                            </div>
                        ))}
                    </div>
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
                                    <polyline points="1 4 1 10 7 10" />
                                    <polyline points="23 20 23 14 17 14" />
                                    <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15" />
                                </svg>
                            </div>
                            <h3>Easy Cancellation</h3>
                            <p>Flexible cancellation policy with quick refunds</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
