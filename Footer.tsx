import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-brand">
              <h3 className="footer-logo">Vansiii</h3>
              <p className="footer-tagline">
                Boutique branding and digital growth studio.
                <br />
                Based in India. Building globally.
              </p>
            </div>

            <div className="footer-links">
              <div className="footer-column">
                <h4>Studio</h4>
                <Link to="/about">About</Link>
                <Link to="/services">Services</Link>
                <Link to="/work">Work</Link>
                <Link to="/contact">Work With Us</Link>
              </div>

              <div className="footer-column">
                <h4>Connect</h4>
                <a href="mailto:hello@vansiii.com">hello@vansiii.com</a>
                <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; {currentYear} Vansiii. All rights reserved.</p>
            <p className="footer-credit">Crafted with precision</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
