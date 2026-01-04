import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faTwitter, faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

export default function Footer(){
  const location = useLocation();

  return (
    <footer className="site-footer" aria-label="Footer">
      <div className="container footer-top">
        <div className="footer-col">
          <div className="footer-kicker">Company</div>
          <ul className="footer-list">
            <li><Link className={location.pathname === '/' ? 'active' : ''} to="/"><ArrowRightIcon className="footer-link-icon" fontSize="small" /> Home</Link></li>
            <li><Link className={location.pathname === '/services' ? 'active' : ''} to="/services"><ArrowRightIcon className="footer-link-icon" fontSize="small" /> Services</Link></li>
            <li><Link className={location.pathname === '/portfolio' ? 'active' : ''} to="/portfolio"><ArrowRightIcon className="footer-link-icon" fontSize="small" /> Portfolio</Link></li>
            <li><Link className={location.pathname === '/about' ? 'active' : ''} to="/about"><ArrowRightIcon className="footer-link-icon" fontSize="small" /> About</Link></li>
            <li><Link className={location.pathname === '/contact' ? 'active' : ''} to="/contact"><ArrowRightIcon className="footer-link-icon" fontSize="small" /> Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <div className="footer-kicker">Services</div>
          <ul className="footer-list">
            <li><a href="#"><ArrowRightIcon className="footer-link-icon" fontSize="small" /> Software Development</a></li>
            <li><a href="#"><ArrowRightIcon className="footer-link-icon" fontSize="small" /> Artificial Intelligence</a></li>
            <li><a href="#"><ArrowRightIcon className="footer-link-icon" fontSize="small" /> Web, Mobile, Cloud Applications</a></li>
            <li><a href="#"><ArrowRightIcon className="footer-link-icon" fontSize="small" /> Product (UX) Design</a></li>
            <li><a href="#"><ArrowRightIcon className="footer-link-icon" fontSize="small" /> Cloud Engineering</a></li>
            <li><a href="#"><ArrowRightIcon className="footer-link-icon" fontSize="small" /> Dedicated Development Teams</a></li>
          </ul>
        </div>

        <div className="footer-col follow-col">
          <div className="footer-kicker">Follow</div>
          <div className="social-row">
            <a className="social" href="#" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            <a className="social" href="#" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} /></a>
            <a className="social" href="#" aria-label="Facebook"><FontAwesomeIcon icon={faFacebookF} /></a>
          </div>
        </div>

        <div className="footer-col footer-contact">
          <h3 className="footer-talk">Talk to us <span className="talk-arrow">→</span></h3>
          <p className="footer-note">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</p>
        </div>
      </div>

      <hr className="footer-divider" />

      <div className="container footer-bottom">
        <div className="footer-brand">
          <div className="brand-mark" aria-hidden>
            <img src={process.env.PUBLIC_URL + '/images/logo.svg'} alt="logo" style={{width:32, height:32}} />
          </div>
          <div className="brand-name">EXPERIENCE LABS &amp; CO.</div>
        </div>

        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms and Conditions</a>
        </div>
      </div>
    </footer>
  )
}
