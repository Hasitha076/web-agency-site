import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ServicesPage from './pages/Services';
import AboutPage from './pages/About';
import OurWorkPage from './pages/OurWork';
import CaseStudiesPage from './pages/CaseStudies';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/ourwork" element={<OurWorkPage />} />
        <Route path="/case-studies" element={<CaseStudiesPage />} />
      </Routes>
    </div>
  );
}

export default App;
