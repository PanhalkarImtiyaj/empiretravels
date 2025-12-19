import { useState, useEffect } from 'react';
import { BiCheck, BiShield, BiStar, BiMapPin } from 'react-icons/bi';
import './Hero.css';

// Import local slider images
import slide2 from '../../assets/slider_images/2.jpg';
import slide3 from '../../assets/slider_images/3.jpg';
import slide4 from '../../assets/slider_images/4.jpg';
import slide5 from '../../assets/slider_images/5.jpg';
// Import static hero images
import mobileHeroImage from '../../assets/images/bus-hero-image.png';
import desktopHeroImage from '../../assets/images/bus-hero-dekstop.png';

const Hero = () => {
    // const [currentSlide, setCurrentSlide] = useState(0); // Slider removed
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    // const slides = [slide2, slide3, slide4, slide5]; // Slider removed

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Slider effect removed

    return (
        <section className="hero">
            {/* Background Image */}
            <div className="hero-slider">
                {isMobile ? (
                    <div className="mobile-hero-wrapper">
                        {/* Animated Route Decoration */}
                        <div className="route-decoration">
                            <div className="route-path-container">
                                <svg className="route-svg" viewBox="0 0 300 60" preserveAspectRatio="none">
                                    <path
                                        className="route-line-bg"
                                        d="M 20 30 Q 150 60 280 30"
                                    />
                                    <path
                                        className="route-line-dash"
                                        d="M 20 30 Q 150 60 280 30"
                                    />
                                </svg>
                            </div>

                            <div className="route-pin start">
                                <div className="pin-icon-wrap">
                                    <BiMapPin />
                                    <div className="pin-pulse"></div>
                                </div>
                                <span className="pin-label">Start</span>
                            </div>

                            <div className="route-pin end">
                                <div className="pin-icon-wrap">
                                    <BiMapPin />
                                    <div className="pin-pulse"></div>
                                </div>
                                <span className="pin-label">Destination</span>
                            </div>
                        </div>

                        <div
                            className="slide-item active slide-with-overlay"
                            style={{ backgroundImage: `url(${mobileHeroImage})` }}
                        ></div>
                    </div>
                ) : (
                    <div
                        className="slide-item active slide-with-overlay"
                        style={{ backgroundImage: `url(${desktopHeroImage})` }}
                    ></div>
                )}
            </div>

            <div className="hero-overlay"></div>

            {isMobile && (
                <div className="hero-content">
                    <div className="container">
                        <div className="hero-layout">
                            {/* Left Side: Text & Actions */}
                            <div className="hero-text-section fade-in">
                                <h1 className="hero-title">
                                    Book Your Bus Tickets
                                    <span className="highlight"> Instantly</span>
                                </h1>
                                <p className="hero-subtitle">
                                    Travel comfortably with our premium bus services.
                                    Safe, reliable, and affordable journeys across India.
                                </p>

                                <div className="hero-buttons">
                                    <button className="btn btn-primary btn-lg">Book Ticket Now</button>
                                    <button className="btn btn-outline btn-lg">View Routes</button>
                                </div>

                                <div className="trust-badges-row">
                                    <div className="trust-badge glass-badge">
                                        <BiStar className="badge-icon-sm" />
                                        <span>Trusted by 5,000+ Travelers</span>
                                    </div>
                                    <div className="trust-badge glass-badge">
                                        <BiCheck className="badge-icon-sm" />
                                        <span>24/7 Customer Support</span>
                                    </div>
                                    <div className="trust-badge glass-badge">
                                        <BiShield className="badge-icon-sm" />
                                        <span>Safe & Secure Payments</span>
                                    </div>
                                </div>
                            </div>

                            {/* Right Side: Floating Offer */}
                            <div className="hero-offer-section slide-in-right">
                                <div className="offer-card-floating">
                                    <div className="offer-content">
                                        <span className="offer-label">Limited Time Deal</span>
                                        <h3 className="offer-value">15% OFF</h3>
                                        <p className="offer-desc">on your first booking</p>
                                        <div className="offer-code"><strong>FIRST15</strong></div>
                                    </div>
                                    <div className="offer-shine"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </section>
    );
};

export default Hero;
