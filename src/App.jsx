import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import BottomNav from './components/BottomNav/BottomNav';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact'; // Import Contact Page
import Gallery from './pages/Gallery/Gallery';
import Packages from './pages/Packages/Packages'; // Import Packages Page
import AdminPanel from './admin/AdminPanel';
import ScrollToTop from './components/ScrollToTop';
import './styles/global.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}

const AppContent = () => {
  const location = useLocation();
  const isAdminPath = location.pathname.startsWith('/admin');

  return (
    <div className="App">
      {!isAdminPath && <Header />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </main>
      {!isAdminPath && <Footer />}
      {!isAdminPath && <BottomNav />}
    </div>
  );
};

// Temporary Coming Soon Component
const ComingSoon = ({ page }) => {
  return (
    <div style={{
      minHeight: '80vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      marginTop: '8rem',
      textAlign: 'center'
    }}>
      <h1 style={{
        fontSize: 'clamp(2rem, 5vw, 3rem)',
        color: '#d32f2f',
        marginBottom: '1rem'
      }}>
        {page}
      </h1>
      <p style={{
        fontSize: '1.25rem',
        color: '#666',
        maxWidth: '600px'
      }}>
        This page is under construction. We're working hard to bring you the best experience!
      </p>
    </div>
  );
};

export default App;
