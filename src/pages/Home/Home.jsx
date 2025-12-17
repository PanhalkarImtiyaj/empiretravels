import Hero from '../../components/Hero/Hero';
import WhyChooseUs from '../../components/Features/Features';
import Offers from '../../components/Offers/Offers';
import './Home.css';

const Home = () => {
    return (
        <div className="home-page">
            <Hero />

            {/* Offers Section */}
            <Offers />

            {/* Why Choose Us Section */}
            <WhyChooseUs />

            {/* Popular Routes Section */}
            <section className="popular-routes section">
                <div className="container">
                    <div className="section-title">
                        <h2>Popular Routes</h2>
                        <p>Book tickets for the most traveled routes</p>
                    </div>

                    <div className="routes-grid">
                        {[
                            { from: 'Mumbai', to: 'Pune', price: '₹450', duration: '3h 30m' },
                            { from: 'Delhi', to: 'Jaipur', price: '₹650', duration: '5h 15m' },
                            { from: 'Bangalore', to: 'Chennai', price: '₹850', duration: '6h 45m' },
                            { from: 'Hyderabad', to: 'Vijayawada', price: '₹550', duration: '4h 20m' },
                            { from: 'Ahmedabad', to: 'Surat', price: '₹350', duration: '3h 00m' },
                            { from: 'Kolkata', to: 'Bhubaneswar', price: '₹750', duration: '7h 30m' },
                        ].map((route, index) => (
                            <div key={index} className="route-card">
                                <div className="route-info">
                                    <div className="route-cities">
                                        <span className="city">{route.from}</span>
                                        <span className="arrow">→</span>
                                        <span className="city">{route.to}</span>
                                    </div>
                                    <div className="route-details">
                                        <span className="duration">{route.duration}</span>
                                        <span className="price">{route.price}</span>
                                    </div>
                                </div>
                                <button className="btn-book">Book Now</button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="testimonials section bg-light">
                <div className="container">
                    <div className="section-title">
                        <h2>What Our Customers Say</h2>
                        <p>Read reviews from our satisfied travelers</p>
                    </div>

                    <div className="testimonials-grid">
                        {[
                            {
                                name: 'Rajesh Kumar',
                                location: 'Mumbai',
                                rating: 5,
                                text: 'Excellent service! The bus was clean, comfortable, and arrived on time. Highly recommended!'
                            },
                            {
                                name: 'Priya Sharma',
                                location: 'Delhi',
                                rating: 5,
                                text: 'Best bus travel experience. Professional staff and great amenities. Will definitely book again.'
                            },
                            {
                                name: 'Amit Patel',
                                location: 'Ahmedabad',
                                rating: 4,
                                text: 'Very comfortable journey. Good value for money. The WiFi and charging points were a plus!'
                            }
                        ].map((testimonial, index) => (
                            <div key={index} className="testimonial-card">
                                <div className="rating">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <span key={i} className="star">★</span>
                                    ))}
                                </div>
                                <p className="testimonial-text">"{testimonial.text}"</p>
                                <div className="testimonial-author">
                                    <div className="author-avatar">
                                        {testimonial.name.charAt(0)}
                                    </div>
                                    <div className="author-info">
                                        <h4>{testimonial.name}</h4>
                                        <p>{testimonial.location}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
