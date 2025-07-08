import React from 'react';
import "./footer.style.css";
// @ts-ignore
import TwitterIcon from '../../icons/socials/icons8-twitter.svg';
// @ts-ignore
import FacebookIcon from '../../icons/socials/icons8-facebook.svg';
// @ts-ignore
import InstagramIcon from '../../icons/socials/icons8-instagram.svg';

function Footer() {
  return (
      <footer className="footer-container">
        <div className="footer-content">
          <p>© {new Date().getFullYear()} NovaTech Solutions. Alle Rechte vorbehalten.</p>
          <div className="social-icons">
            <img src={TwitterIcon} alt="Twitter" className="social-icon" />
            <img src={FacebookIcon} alt="Facebook" className="social-icon" />
            <img src={InstagramIcon} alt="Instagram" className="social-icon" />
          </div>
        </div>
      </footer>
  );
}

export default Footer;
