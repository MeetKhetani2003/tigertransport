import { Link } from 'react-router-dom';
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="logo-text">
              <span className="logo-dts">DTS</span>
              <span className="logo-full">Durga Transport</span>
            </div>
            <p className="footer-desc">
              Moving Businesses Forward With Reliable Transportation Solutions.
            </p>
          </div>
          
          <div className="footer-links">
            <div className="link-group">
              <h4>Company</h4>
              <Link to="/about">About Us</Link>
              <Link to="/services">Services</Link>
              <Link to="/fleet">Our Fleet</Link>
              <Link to="/contact">Contact</Link>
            </div>
            
            <div className="link-group">
              <h4>Contact</h4>
              <p>9812773410</p>
              <p>DTS House Near Nahar Maruti Suzuki Workshop,<br />Dhankot, Gurugram,<br />Haryana 122505</p>
            </div>
            
            <div className="link-group">
              <h4>Follow Us</h4>
              <div className="social-links">
                <a href="#"><span>Fb</span></a>
                <a href="#"><span>X</span></a>
                <a href="#"><span>In</span></a>
                <a href="#"><span>Ig</span></a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Durga Transport Services India. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
