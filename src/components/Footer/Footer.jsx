import { FaGithub, FaLinkedin, FaTwitter, FaDribbble, FaWhatsapp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/Abdallah-2006/Abdallah-2006/' },
    { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/abdalla-abdelmagid-85b4ba279/' },
    { icon: <FaWhatsapp />, url: 'https://wa.me/+201013224015' },
    // { icon: <FaDribbble />, url: 'https://dribbble.com' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <span className="logo-text">Abdalla</span>
          </div>
          
          <div className="footer-social">
            {socialLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.url} 
                target="_blank" 
                rel="noreferrer"
                className="social-link"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">
            &copy; {currentYear} Abdalla Abdelmagid. All rights reserved.
          </p>
          <div className="footer-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
