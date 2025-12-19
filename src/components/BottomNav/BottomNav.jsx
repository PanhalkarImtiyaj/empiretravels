import { Link, useLocation } from 'react-router-dom';
import { BiHomeAlt, BiBus, BiPackage, BiInfoCircle, BiPhoneCall, BiImage, BiBriefcase } from 'react-icons/bi';
import './BottomNav.css';

const BottomNav = () => {
    const location = useLocation();

    const navItems = [
        { path: '/', icon: BiHomeAlt, label: 'Home' },
        { path: '/services', icon: BiBriefcase, label: 'Services' },
        { path: '/gallery', icon: BiImage, label: 'Gallery' },
        { path: '/packages', icon: BiPackage, label: 'Packages' },
        { path: '/about', icon: BiInfoCircle, label: 'About' },
        { path: '/contact', icon: BiPhoneCall, label: 'Contact' },
    ];

    return (
        <nav className="bottom-nav">
            {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;

                return (
                    <Link
                        key={item.path}
                        to={item.path}
                        className={`bottom-nav-item ${isActive ? 'active' : ''}`}
                    >
                        <Icon className="bottom-nav-icon" />
                        <span
                            className="bottom-nav-label"
                            style={{
                                fontSize: '0.75rem',
                                fontWeight: '600',
                                color: isActive ? '#d32f2f' : '#333',
                                display: 'block',
                                marginTop: '0.2rem'
                            }}
                        >
                            {item.label}
                        </span>
                    </Link>
                );
            })}
        </nav>
    );
};

export default BottomNav;
