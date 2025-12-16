import { useState, useEffect } from 'react';
import { BiMap, BiCalendar, BiUser, BiSearch, BiCheck, BiShield, BiTimeFive, BiCalendarAlt, BiBus, BiStar, BiMapPin } from 'react-icons/bi';
import './Hero.css';

// Import local slider images
import slide2 from '../../assets/slider_images/2.jpg';
import slide3 from '../../assets/slider_images/3.jpg';
import slide4 from '../../assets/slider_images/4.jpg';
import slide5 from '../../assets/slider_images/5.jpg';
// Import static mobile hero image
import mobileHeroImage from '../../assets/images/bus-hero-image.png';

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const slides = [slide2, slide3, slide4, slide5];

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (!isMobile) {
            const interval = setInterval(() => {
                setCurrentSlide((prev) => (prev + 1) % slides.length);
            }, 5000);
            return () => clearInterval(interval);
        }
    }, [isMobile]);

    return (
        <section className="hero">
            {/* Background Slider */}
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
                    slides.map((slide, index) => (
                        <div
                            key={index}
                            className={`slide-item ${index === currentSlide ? 'active' : ''}`}
                            style={{ backgroundImage: `url(${slide})` }}
                        ></div>
                    ))
                )}
            </div>

            <div className="hero-overlay"></div>

            <div className="hero-content">
                <div className="container">
                    <div className="hero-text fade-in">
                        <h1 className="hero-title">
                            Book Your Bus Tickets
                            <span className="highlight"> Instantly</span>
                        </h1>
                        <p className="hero-subtitle">
                            Travel comfortably with our premium bus services.
                            Safe, reliable, and affordable journeys across India.
                        </p>
                        <div className="hero-features">
                            <div className="feature-badge">
                                <span className="badge-icon"><BiCheck /></span>
                                <span>15% Off on First Booking</span>
                            </div>
                            <div className="feature-badge">
                                <span className="badge-icon"><BiCheck /></span>
                                <span>24/7 Customer Support</span>
                            </div>
                            <div className="feature-badge">
                                <span className="badge-icon"><BiCheck /></span>
                                <span>Safe & Secure Payment</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Quick Search Form - Moved outside hero-content */}
            <div className="container">
                <div className="search-card slide-in-right">
                    <h3 className="search-title">Find Your Bus</h3>
                    <div className="title-divider"></div>

                    <form className="search-form">
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="from" className="field-label">FROM</label>
                                <div className="input-wrapper">
                                    <BiMap className="input-icon" />
                                    <input
                                        type="text"
                                        id="from"
                                        placeholder="Eg: Mumbai"
                                        className="form-input"
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="to" className="field-label">TO</label>
                                <div className="input-wrapper">
                                    <BiMap className="input-icon" />
                                    <input
                                        type="text"
                                        id="to"
                                        placeholder="Eg: Pune"
                                        className="form-input"
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="label-row">
                                    <label htmlFor="date" className="field-label">JOURNEY DATE</label>
                                    <span className="date-hint"><BiCalendarAlt /> Today | Tomorrow</span>
                                </div>
                                <div className="input-wrapper">
                                    <BiCalendar className="input-icon" />
                                    <input
                                        type="date"
                                        id="date"
                                        className="form-input"
                                        min={new Date().toISOString().split('T')[0]}
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="passengers" className="field-label">PASSENGERS</label>
                                <div className="input-wrapper">
                                    <BiUser className="input-icon" />
                                    <select id="passengers" className="form-input">
                                        <option value="1">1 Passenger</option>
                                        <option value="2">2 Passengers</option>
                                        <option value="3">3 Passengers</option>
                                        <option value="4">4 Passengers</option>
                                        <option value="5">5+ Passengers</option>
                                    </select>
                                </div>
                                <div className="trust-line"><BiShield /> Safe & Sanitized Buses</div>
                            </div>
                        </div>

                        <div className="form-row search-btn-row">
                            <button type="submit" className="btn-search">
                                <BiSearch className="search-icon-btn" />
                                Search Buses
                            </button>
                            <p className="urgency-text"><BiTimeFive /> Limited seats available today</p>
                        </div>
                    </form>
                </div>

                <div className="review-strip">
                    ⭐ 4.8/5 Rated • On-Time Service
                </div>
            </div>
        </section>
    );
};

export default Hero;
