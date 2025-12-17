import { BiSolidOffer, BiBus, BiCalendarStar, BiGift } from 'react-icons/bi';
import './Offers.css';

const Offers = () => {
    const offers = [
        {
            id: 1,
            title: 'AC Sleeper Special',
            subtitle: 'Starts from ₹399',
            description: 'Luxury travel at affordable rates. Limited seats!',
            code: 'SLEEP399',
            bg: 'linear-gradient(135deg, #FF6B6B, #EE5D68)',
            icon: <BiBus />
        },
        {
            id: 2,
            title: 'Weekend Getaways',
            subtitle: 'Flat 20% OFF',
            description: 'Plan your weekend trip now and save big.',
            code: 'WEEKEND20',
            bg: 'linear-gradient(135deg, #4FACFE, #00F2FE)',
            icon: <BiCalendarStar />
        },
        {
            id: 3,
            title: 'Festival Dhamaka',
            subtitle: 'Up to ₹500 Cashback',
            description: 'Celebrate with your family. Book now!',
            code: 'FEST500',
            bg: 'linear-gradient(135deg, #FA709A, #FEE140)',
            icon: <BiGift />
        }
    ];

    return (
        <section className="offers-section section">
            <div className="container">
                <div className="section-title text-center">
                    <span className="subtitle-badge">Exclusive Deals</span>
                    <h2>Offers & Highlights</h2>
                    <p>Grab the best deals for your next journey</p>
                </div>

                <div className="offers-grid">
                    {offers.map((offer) => (
                        <div className="offer-card" key={offer.id}>
                            <div className="offer-bg" style={{ background: offer.bg }}></div>
                            <div className="offer-content">
                                <div className="offer-icon-wrapper">
                                    {offer.icon}
                                </div>
                                <div className="offer-details">
                                    <h3>{offer.title}</h3>
                                    <div className="offer-meta">
                                        <span className="offer-price">{offer.subtitle}</span>
                                    </div>
                                    <p>{offer.description}</p>
                                </div>
                                <div className="offer-action">
                                    <div className="coupon-code">
                                        <small>Code:</small>
                                        <strong>{offer.code}</strong>
                                    </div>
                                    <button className="btn-claim">Book Now</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Offers;
