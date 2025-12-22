import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faTwitter, faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

export default function Footer(){
  return (
    <footer className="site-footer" aria-label="Footer">
      <div className="container footer-top">
        <div className="footer-col">
          <div className="footer-kicker">Company</div>
          <ul className="footer-list">
            <li><a href="#"><ArrowRightIcon className="footer-link-icon" fontSize="small" /> Home</a></li>
            <li><a href="#"><ArrowRightIcon className="footer-link-icon" fontSize="small" /> About</a></li>
            <li><a href="#"><ArrowRightIcon className="footer-link-icon" fontSize="small" /> Services</a></li>
            <li><a href="#"><ArrowRightIcon className="footer-link-icon" fontSize="small" /> Case Studies</a></li>
            <li><a href="#"><ArrowRightIcon className="footer-link-icon" fontSize="small" /> Careers</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <div className="footer-kicker">Services</div>
          <ul className="footer-list">
            <li><a href="#"><ArrowRightIcon className="footer-link-icon" fontSize="small" /> Artificial Intelligence</a></li>
            <li><a href="#"><ArrowRightIcon className="footer-link-icon" fontSize="small" /> Web, Mobile, Cloud Applications</a></li>
            <li><a href="#"><ArrowRightIcon className="footer-link-icon" fontSize="small" /> Product (UX) Design</a></li>
            <li><a href="#"><ArrowRightIcon className="footer-link-icon" fontSize="small" /> Dedicated Development Teams</a></li>
          </ul>
        </div>

        <div className="footer-col follow-col">
          <div className="footer-kicker">Follow</div>
          <div className="social-row">
            <a className="social" href="#" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            <a className="social" href="#" aria-label="Twitter"><FontAwesomeIcon icon={faTwitter} /></a>
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
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="6" width="14" height="14" stroke="#3b82f6" strokeWidth="1.6" fill="none" transform="rotate(45 10 13)"/></svg>
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
