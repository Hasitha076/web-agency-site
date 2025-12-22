import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

export default function Header(){
  const [open, setOpen] = useState(null);
  const navRef = useRef(null);

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
          <a className="navbar-brand d-flex align-items-center" href="#"> 
            <img src={process.env.PUBLIC_URL + '/images/logo.svg'} alt="logo" style={{width:32, height:32}} />
            <strong className="ms-2">Experience Labs & Co.</strong>
          </a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#primaryNavbar" aria-controls="primaryNavbar" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="primaryNavbar" ref={navRef}>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className={`nav-item dropdown ${open === 'products' ? 'show' : ''}`}>
                <a className="nav-link dropdown-toggle" href="#products" id="productsDropdown" role="button" aria-expanded={open === 'products'} onClick={(e)=>toggle('products', e)}>Products <FontAwesomeIcon icon={faAngleDown} className="ms-1" /></a>
                <ul className={`dropdown-menu ${open === 'products' ? 'show' : ''}`} aria-labelledby="productsDropdown" style={{display: open === 'products' ? 'block' : 'none'}}>
                  <li><a className="dropdown-item" href="#prod-a" onClick={()=>setOpen(null)}>Product A</a></li>
                  <li><a className="dropdown-item" href="#prod-b" onClick={()=>setOpen(null)}>Product B</a></li>
                  <li><a className="dropdown-item" href="#prod-c" onClick={()=>setOpen(null)}>Product C</a></li>
                </ul>
              </li>

              <li className={`nav-item dropdown ${open === 'services' ? 'show' : ''}`}>
                <a className="nav-link dropdown-toggle" href="#services" id="servicesDropdown" role="button" aria-expanded={open === 'services'} onClick={(e)=>toggle('services', e)}>Services <FontAwesomeIcon icon={faAngleDown} className="ms-1" /></a>
                <ul className={`dropdown-menu ${open === 'services' ? 'show' : ''}`} aria-labelledby="servicesDropdown" style={{display: open === 'services' ? 'block' : 'none'}}>
                  <li><a className="dropdown-item" href="#svc-a" onClick={()=>setOpen(null)}>Software Development</a></li>
                  <li><a className="dropdown-item" href="#svc-b" onClick={()=>setOpen(null)}>Product Design</a></li>
                  <li><a className="dropdown-item" href="#svc-c" onClick={()=>setOpen(null)}>AI & ML</a></li>
                </ul>
              </li>

              <li className={`nav-item dropdown ${open === 'resources' ? 'show' : ''}`}>
                <a className="nav-link dropdown-toggle" href="#resources" id="resourcesDropdown" role="button" aria-expanded={open === 'resources'} onClick={(e)=>toggle('resources', e)}>Resources <FontAwesomeIcon icon={faAngleDown} className="ms-1" /></a>
                <ul className={`dropdown-menu ${open === 'resources' ? 'show' : ''}`} aria-labelledby="resourcesDropdown" style={{display: open === 'resources' ? 'block' : 'none'}}>
                  <li><a className="dropdown-item" href="#case-studies" onClick={()=>setOpen(null)}>Case studies</a></li>
                  <li><a className="dropdown-item" href="#whitepapers" onClick={()=>setOpen(null)}>Whitepapers</a></li>
                </ul>
              </li>

              <li className={`nav-item dropdown ${open === 'company' ? 'show' : ''}`}>
                <a className="nav-link dropdown-toggle" href="#company" id="companyDropdown" role="button" aria-expanded={open === 'company'} onClick={(e)=>toggle('company', e)}>Company <FontAwesomeIcon icon={faAngleDown} className="ms-1" /></a>
                <ul className={`dropdown-menu ${open === 'company' ? 'show' : ''}`} aria-labelledby="companyDropdown" style={{display: open === 'company' ? 'block' : 'none'}}>
                  <li><a className="dropdown-item" href="#about" onClick={()=>setOpen(null)}>About</a></li>
                  <li><a className="dropdown-item" href="#careers" onClick={()=>setOpen(null)}>Careers</a></li>
                </ul>
              </li>
            </ul>

            <div className="d-flex align-items-center ms-lg-4">
              <a className="cta-btn nav-link" href="#contact">Talk to us</a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
