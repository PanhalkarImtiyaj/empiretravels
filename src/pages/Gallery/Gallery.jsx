import { useState } from 'react';
import { BiX, BiChevronLeft, BiChevronRight, BiZoomIn } from 'react-icons/bi';
import './Gallery.css';

// Import local images
import frontSide from '../../assets/galleary/front-side-bus.png';
import busLeftSide from '../../assets/galleary/bus left side.png';
import backSide from '../../assets/galleary/back side.png';
import seats from '../../assets/galleary/seets.png';
import sleeper from '../../assets/galleary/seelper.png';
import singleSleeper from '../../assets/galleary/single slpeer.png';
import logoImage from '../../assets/images/logo-bus.png';

const Gallery = () => {
    // Our Fleet Images
    const galleryImages = [
        {
            id: 1,
            src: frontSide,
            title: "Premium Bus - Front View",
            category: "Exterior"
        },
        {
            id: 2,
            src: busLeftSide,
            title: "Side Profile",
            category: "Exterior"
        },
        {
            id: 3,
            src: backSide,
            title: "Rear View",
            category: "Exterior"
        },
        {
            id: 4,
            src: seats,
            title: "Comfortable Seating",
            category: "Interior"
        },
        {
            id: 5,
            src: sleeper,
            title: "Spacious Double Sleeper",
            category: "Interior"
        },
        {
            id: 6,
            src: singleSleeper,
            title: "Private Single Cabin",
            category: "Luxury"
        }
    ];

    const [selectedImage, setSelectedImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openLightbox = (index) => {
        setCurrentIndex(index);
        setSelectedImage(galleryImages[index]);
        document.body.style.overflow = 'hidden'; // Prevent scroll
    };

    const closeLightbox = () => {
        setSelectedImage(null);
        document.body.style.overflow = 'unset';
    };

    const nextImage = (e) => {
        e.stopPropagation();
        const next = (currentIndex + 1) % galleryImages.length;
        setCurrentIndex(next);
        setSelectedImage(galleryImages[next]);
    };

    const prevImage = (e) => {
        e.stopPropagation();
        const prev = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
        setCurrentIndex(prev);
        setSelectedImage(galleryImages[prev]);
    };

    return (
        <div className="gallery-page">
            <div className="gallery-hero">
                <div className="container">
                    <img src={logoImage} alt="Empire Tours" className="gallery-logo slide-in-down" />
                    <h1 className="slide-in-left">Our Fleet Gallery</h1>
                    <p className="slide-in-right">Explore our premium buses and world-class travel experience</p>
                </div>
            </div>

            <div className="container">
                <div className="gallery-grid">
                    {galleryImages.map((img, index) => (
                        <div
                            key={img.id}
                            className="gallery-item fade-in"
                            onClick={() => openLightbox(index)}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <img src={img.src} alt={img.title} className="gallery-image" loading="lazy" />
                            <div className="gallery-overlay">
                                <div className="gallery-caption">{img.title}</div>
                                <BiZoomIn style={{ marginTop: '0.5rem', fontSize: '1.5rem' }} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {selectedImage && (
                <div className="lightbox-modal" onClick={closeLightbox}>
                    <button className="close-btn" onClick={closeLightbox}><BiX /></button>

                    <button className="nav-btn prev-btn" onClick={prevImage}>
                        <BiChevronLeft />
                    </button>

                    <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                        <img
                            src={selectedImage.src}
                            alt={selectedImage.title}
                            className="lightbox-image"
                        />
                        <div style={{
                            color: 'white',
                            textAlign: 'center',
                            marginTop: '1rem',
                            fontSize: '1.2rem',
                            fontWeight: '600'
                        }}>
                            {selectedImage.title}
                        </div>
                    </div>

                    <button className="nav-btn next-btn" onClick={nextImage}>
                        <BiChevronRight />
                    </button>
                </div>
            )}
        </div>
    );
};

export default Gallery;
