import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BiBus, BiMenu, BiX, BiPhoneCall, BiUser, BiLogoWhatsapp, BiHome, BiPackage, BiInfoCircle, BiEnvelope, BiImage, BiBriefcase, BiLogInCircle } from 'react-icons/bi';
import logoImage from '../../assets/images/logo-bus.png';
import AuthModal from '../Auth/AuthModal';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home', icon: <BiHome /> },
    { path: '/services', label: 'Services', icon: <BiBriefcase /> },
    { path: '/gallery', label: 'Gallery', icon: <BiImage /> },
    { path: '/packages', label: 'Packages', icon: <BiPackage /> },
    { path: '/about', label: 'About Us', icon: <BiInfoCircle /> },
    { path: '/contact', label: 'Contact', icon: <BiPhoneCall /> },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container">
          <div className="top-bar-content">
            <div className="contact-info">
              <a href="tel:+919689116567" className="contact-item">
                <BiPhoneCall />
                <div className="contact-details">
                  <span className="phone-number">+91 968 911 6567</span>
                </div>
              </a>
              <a
                href="https://wa.me/919689116567?text=Hello,%20I%20want%20to%20enquire%20about%20bus%20booking."
                className="contact-item top-whatsapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BiLogoWhatsapp style={{ fontSize: '1.4rem' }} />
                <div className="contact-details">
                  <span className="phone-number">WhatsApp</span>
                </div>
              </a>
            </div>
            <div className="user-actions">
              <button
                className="btn-auth login"
                onClick={() => {
                  setIsAuthModalOpen(true);
                }}
              >
                <BiLogInCircle />
                <span>Login</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="navbar">
        <div className="container">
          <div className="navbar-content">
            {/* Logo */}
            <Link to="/" className="logo">
              <img src={logoImage} alt="Empire Tours" className="logo-img" />
              <div className="logo-text">
                <span className="logo-name">Empire tours and travels</span>
                <span className="logo-tagline">Customer satisfaction is our top priority</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <ul className="nav-links desktop-nav">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                  >
                    <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>{link.icon} {link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Menu Toggle */}
            <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? <BiX /> : <BiMenu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-links">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>{link.icon} {link.label}</span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mobile-auth-actions">
          <button
            className="btn-auth login"
            onClick={() => {
              setIsAuthModalOpen(true);
              setIsMobileMenuOpen(false);
            }}
          >
            <BiLogInCircle />
            <span>Login</span>
          </button>
        </div>
      </div>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div className="overlay" onClick={() => setIsMobileMenuOpen(false)}></div>
      )}
      {/* Auth Modal */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </header>
  );
};

export default Header;
