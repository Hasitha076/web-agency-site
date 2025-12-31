import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './pages/Home';
import ServicesPage from './pages/Services';
import AboutPage from './pages/About';
import OurWorkPage from './pages/OurWork';
import CaseStudiesPage from './pages/CaseStudies';
import ContactPage from './pages/Contact';
import PortfolioPage from './pages/Portfolio';

function App() {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState('enter');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    if (location !== displayLocation) setTransitionStage('exit');
  }, [location, displayLocation]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [displayLocation]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className="App"
      onAnimationEnd={() => {
        if (transitionStage === 'exit') {
          setDisplayLocation(location);
          setTransitionStage('enter');
        }
      }}
      style={{ 
        animationName: transitionStage === 'exit' ? 'fadeOut' : 'fadeIn',
        animationDuration: '0.4s',
        animationFillMode: 'forwards'
      }}
    >
      <Routes location={displayLocation}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/ourwork" element={<OurWorkPage />} />
        <Route path="/case-studies" element={<CaseStudiesPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="scroll-to-top-btn"
          aria-label="Scroll to top"
          style={{
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            background: '#111',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '24px',
            zIndex: '999',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            transition: 'all 0.3s ease',
            animation: 'slideUp 0.3s ease-out'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#333';
            e.currentTarget.style.transform = 'translateY(-3px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = '#111';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          ↑
        </button>
      )}

      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

export default App;
