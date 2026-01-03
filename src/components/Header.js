import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header(){
  const [open, setOpen] = useState(null);
  const navRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    function onDocumentClick(e){
      if (!navRef.current) return;
      if (!navRef.current.contains(e.target)) setOpen(null);
    }
    document.addEventListener('click', onDocumentClick);
    return () => document.removeEventListener('click', onDocumentClick);
  }, []);

  const toggle = (id, e) => {
    e.preventDefault();
    setOpen(open === id ? null : id);
  };

  return (
    <header className="site-header">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand d-flex align-items-center" to="/"> 
            <img src={process.env.PUBLIC_URL + '/images/logo.svg'} alt="logo" style={{width:32, height:32}} />
            <strong className="ms-2">Experience Labs & Co.</strong>
          </Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#primaryNavbar" aria-controls="primaryNavbar" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="primaryNavbar" ref={navRef}>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

               <li className="nav-item">
                <Link className={`nav-link ${location.pathname === '/services' ? 'active' : ''}`} to="/services">Services</Link>
              </li>

              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === '/portfolio' ? 'active' : ''}`} to="/portfolio">Portfolio</Link>
              </li>

              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} to="/about">About</Link>
              </li>
            </ul>

            <div className="d-flex align-items-center ms-lg-4">
              <Link className={`cta-btn nav-link ${location.pathname === '/contact' ? 'active' : ''}`} to="/contact">Talk to us</Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
