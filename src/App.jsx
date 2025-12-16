import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import BottomNav from './components/BottomNav/BottomNav';
import Home from './pages/Home/Home';
import BookTicket from './pages/BookTicket/BookTicket';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact'; // Import Contact Page
import ScrollToTop from './components/ScrollToTop';
import './styles/global.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/book-ticket" element={<BookTicket />} />
            <Route path="/my-bookings" element={<ComingSoon page="My Bookings" />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <BottomNav />
      </div>
    </Router>
  );
}

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
