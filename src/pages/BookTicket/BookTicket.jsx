import { useState } from 'react';
import { FaBus, FaFilter, FaStar, FaWifi, FaPlug, FaTint, FaSnowflake } from 'react-icons/fa';
import './BookTicket.css';

const BookTicket = () => {
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [showSeatsForBus, setShowSeatsForBus] = useState(null);

    // Mock Data for Buses
    const buses = [
        {
            id: 1,
            name: 'VRL Travels',
            type: 'A/C Sleeper (2+1)',
            departureTime: '22:00',
            arrivalTime: '06:00',
            duration: '08h 00m',
            rating: 4.8,
            price: 1200,
            seatsAvailable: 12,
            amenities: ['wifi', 'charging', 'water', 'ac']
        },
        {
            id: 2,
            name: 'Orange Travels',
            type: 'A/C Seater / Sleeper (2+1)',
            departureTime: '20:30',
            arrivalTime: '05:00',
            duration: '08h 30m',
            rating: 4.5,
            price: 950,
            seatsAvailable: 25,
            amenities: ['charging', 'water', 'ac']
        },
        {
            id: 3,
            name: 'SRS Travels',
            type: 'Non A/C Sleeper (2+1)',
            departureTime: '19:00',
            arrivalTime: '04:00',
            duration: '09h 00m',
            rating: 4.2,
            price: 700,
            seatsAvailable: 8,
            amenities: ['charging', 'water']
        }
    ];

    const handleSeatClick = (busId, seatNum) => {
        if (selectedSeats.includes(seatNum)) {
            setSelectedSeats(selectedSeats.filter(s => s !== seatNum));
        } else {
            setSelectedSeats([...selectedSeats, seatNum]);
        }
    };

    const renderAmenityIcon = (type) => {
        switch (type) {
            case 'wifi': return <FaWifi title="WiFi" />;
            case 'charging': return <FaPlug title="Charging Point" />;
            case 'water': return <FaTint title="Water Bottle" />;
            case 'ac': return <FaSnowflake title="AC" />;
            default: return null;
        }
    };

    return (
        <div className="book-ticket-page container section">
            <div className="booking-layout">
                {/* Filters Sidebar */}
                <aside className="filters-sidebar">
                    <div className="filter-header">
                        <h3>Filters</h3>
                        <span className="clear-filters">Clear All</span>
                    </div>

                    <div className="filter-group">
                        <h4>Bus Type</h4>
                        <label className="checkbox-label">
                            <input type="checkbox" /> AC
                        </label>
                        <label className="checkbox-label">
                            <input type="checkbox" /> Non-AC
                        </label>
                        <label className="checkbox-label">
                            <input type="checkbox" /> Sleeper
                        </label>
                        <label className="checkbox-label">
                            <input type="checkbox" /> Seater
                        </label>
                    </div>

                    <div className="filter-group">
                        <h4>Departure Time</h4>
                        <label className="checkbox-label">
                            <input type="checkbox" /> Before 6 AM
                        </label>
                        <label className="checkbox-label">
                            <input type="checkbox" /> 6 AM - 12 PM
                        </label>
                        <label className="checkbox-label">
                            <input type="checkbox" /> 12 PM - 6 PM
                        </label>
                        <label className="checkbox-label">
                            <input type="checkbox" /> After 6 PM
                        </label>
                    </div>
                </aside>

                {/* Bus List */}
                <div className="bus-results">
                    <div className="search-summary">
                        <h2>Mumbai to Pune</h2>
                        <p>3 Buses found • 16 Dec, 2025</p>
                    </div>

                    {buses.map(bus => (
                        <div key={bus.id} className="bus-card">
                            <div className="bus-card-content">
                                <div className="bus-info-main">
                                    <h3 className="bus-operator">{bus.name}</h3>
                                    <p className="bus-type">{bus.type}</p>
                                    <div className="bus-amenities">
                                        {bus.amenities.map(a => <span key={a}>{renderAmenityIcon(a)}</span>)}
                                    </div>
                                </div>

                                <div className="bus-schedule">
                                    <div className="time-col">
                                        <span className="time">{bus.departureTime}</span>
                                        <span className="city">Mumbai</span>
                                    </div>
                                    <div className="duration-col">
                                        <span className="duration-line"></span>
                                        <span className="duration-text">{bus.duration}</span>
                                    </div>
                                    <div className="time-col">
                                        <span className="time">{bus.arrivalTime}</span>
                                        <span className="city">Pune</span>
                                    </div>
                                </div>

                                <div className="bus-price-col">
                                    <div className="bus-price">₹{bus.price}</div>
                                    <div className="seats-left">{bus.seatsAvailable} Seats left</div>
                                    <button
                                        className="btn btn-primary select-btn"
                                        onClick={() => setShowSeatsForBus(showSeatsForBus === bus.id ? null : bus.id)}
                                    >
                                        {showSeatsForBus === bus.id ? 'Hide Seats' : 'View Seats'}
                                    </button>
                                </div>
                            </div>

                            {/* Seat Selection Area */}
                            {showSeatsForBus === bus.id && (
                                <div className="seat-selection-area fade-in">
                                    <div className="seat-legend">
                                        <div className="legend-item"><span className="seat-box available"></span> Available</div>
                                        <div className="legend-item"><span className="seat-box selected"></span> Selected</div>
                                        <div className="legend-item"><span className="seat-box booked"></span> Booked</div>
                                        <div className="legend-item"><span className="seat-box female"></span> Female</div>
                                    </div>

                                    <div className="bus-layout">
                                        {/* Lower Deck Mockup */}
                                        <div className="deck">
                                            <h5>Lower Deck</h5>
                                            <div className="seats-grid">
                                                {[...Array(15)].map((_, i) => (
                                                    <div
                                                        key={`L${i}`}
                                                        className={`seat ${selectedSeats.includes(`L${i}`) ? 'selected' : ''}`}
                                                        onClick={() => handleSeatClick(bus.id, `L${i}`)}
                                                    >
                                                        <span className="seat-icon">L{i + 1}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Upper Deck Mockup */}
                                        <div className="deck">
                                            <h5>Upper Deck</h5>
                                            <div className="seats-grid">
                                                {[...Array(15)].map((_, i) => (
                                                    <div
                                                        key={`U${i}`}
                                                        className={`seat ${selectedSeats.includes(`U${i}`) ? 'selected' : ''}`}
                                                        onClick={() => handleSeatClick(bus.id, `U${i}`)}
                                                    >
                                                        <span className="seat-icon">U{i + 1}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {selectedSeats.length > 0 && (
                                        <div className="booking-summary">
                                            <p>Selected Seats: <strong>{selectedSeats.join(', ')}</strong></p>
                                            <p>Total Fare: <strong>₹{selectedSeats.length * bus.price}</strong></p>
                                            <button className="btn btn-secondary">Proceed to Book</button>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BookTicket;
