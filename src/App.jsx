import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import BottomNav from './components/BottomNav/BottomNav';
import ScrollToTop from './components/ScrollToTop';
import './styles/global.css';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home/Home'));
const Services = lazy(() => import('./pages/Services/Services'));
const About = lazy(() => import('./pages/About/About'));
const Contact = lazy(() => import('./pages/Contact/Contact'));
const Gallery = lazy(() => import('./pages/Gallery/Gallery'));
const Packages = lazy(() => import('./pages/Packages/Packages'));
const AdminPanel = lazy(() => import('./admin/AdminPanel'));

// Loading component
const PageLoader = () => (
  <div className="global-loader">
    <div className="loader-spinner"></div>
  </div>
);

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
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/admin" element={<AdminPanel />} />
          </Routes>
        </Suspense>
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
