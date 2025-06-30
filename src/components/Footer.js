import React, { useState, useEffect } from "react";
import "./Footer.css";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt, FaArrowUp } from "react-icons/fa";
import logo from "../assets/logo.png";
import footerVideo from "../assets/footer.mp4";
import emailjs from '@emailjs/browser';

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setSubmitMessage('Please enter a valid email address');
      setTimeout(() => setSubmitMessage(''), 3000);
      return;
    }
    
    setIsSubmitting(true);
    setSubmitMessage('');
    
    try {
      console.log('Sending newsletter subscription email...');
      
      // EmailJS template parameters for newsletter subscription
      const templateParams = {
        title: 'Newsletter Subscription Request',
        name: 'Newsletter Subscriber',
        email: email,
        phone: '',
        subject: 'Newsletter Subscription Request',
        message: `A new user has subscribed to the newsletter with email: ${email}`
      };

      // Send email using EmailJS
      await emailjs.send(
        'service_x13f8yk',        // Gmail service
        'template_aj48ek6',       // Your template
        templateParams,
        'flisNrOTBQ4pv0eSn'       // Your public key
      );
      
      console.log('Newsletter subscription email sent successfully!');
      
      // Reset form and show success message
      setEmail('');
      setSubmitMessage('✅ Email sent successfully! Thank you for staying connected.');
      setTimeout(() => setSubmitMessage(''), 5000);
      
    } catch (error) {
      console.error('Error sending newsletter subscription email:', error);
      setSubmitMessage('❌ Subscription failed. Please try again later.');
      setTimeout(() => setSubmitMessage(''), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <footer className="footer">
      <div className="footer-video-container">
        <video className="footer-video" autoPlay loop muted playsInline>
          <source src={footerVideo} type="video/mp4" />
        </video>
      </div>
      
      <div className="footer-content">
        <div className="footer-section company-info">
          <div className="footer-logo">
            <img src={logo} alt="Vardaan Global Logo" />
          </div>
          <div className="contact">
            <div className="contact-item"><FaPhone className="contact-icon" /> <span>+91 40-35171118, +91 40-35171119</span></div>
            <div className="contact-item"><FaEnvelope className="contact-icon" /> <span>info@vardaanglobal.com</span></div>
            <div className="contact-item"><FaMapMarkerAlt className="contact-icon" /> <span>Aurum, 1st Floor, Plot No 57, Jayabheri Enclave, Gachibowli Hyderabad-500032 INDIA</span></div>
          </div>
          <div className="socials">
            <a href="https://www.facebook.com/profile.php?id=61554735873727" target="_blank" rel="noopener noreferrer"><FaFacebook className="social-icon" /></a>
            <a href="https://www.linkedin.com/company/vardaan-data-sciences-pvt-ltd/posts/?feedView=all" target="_blank" rel="noopener noreferrer"><FaLinkedin className="social-icon" /></a>
            <a href="https://www.instagram.com/vardaan_datasciences?igsh=MXYzN2YwcTExMjVnNg==" target="_blank" rel="noopener noreferrer"><FaInstagram className="social-icon" /></a>
          </div>
        </div>
        
        <div className="footer-links-container">
          <div className="footer-links-row">
            <div className="footer-section services">
              <h2>OUR SERVICES</h2>
              <ul>
                <li><a href="/data-services">Data Services</a></li>
                <li><a href="/data-strategy">Data Strategy</a></li>
                <li><a href="/ai-consulting">AI Consulting Services</a></li>
                <li><a href="/erp-services">ERP Services</a></li>
                <li><a href="/microsoft-services">Microsoft Services</a></li>
                <li><a href="/techno-financial">Techno Financial Services</a></li>
                <li><a href="/cybersecurity-services">Cybersecurity Services</a></li>
                <li><a href="/training-services">Training</a></li>
                {/* <li><a href="/custom-engineering">Custom Engineering Services</a></li> */}
              </ul>
            </div>
            
            <div className="footer-section links">
              <h2>QUICK LINKS</h2>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/grc">What We Do</a></li>
                <li><a href="/data-services">Our Services Offering</a></li>
                <li><a href="/about">About Vardaan</a></li>
                <li><a href="/contact">Contact Us</a></li>
              </ul>
            </div>
          
            <div className="footer-section stay-connected-with-info">
              <div className="stay-connected-content">
                <h2>STAY CONNECTED</h2>
                <form className="email-form" onSubmit={handleEmailSubmit}>
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required 
                    disabled={isSubmitting}
                  />
                  <button 
                    type="submit" 
                    className="btn-join"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send'}
                  </button>
                </form>
                {submitMessage && (
                  <div className="submit-message">
                    {submitMessage}
                  </div>
                )}
              </div>
              
              <div className="information-content">
                <h2>INFORMATION</h2>
                <ul>
                  <li><a href="/privacy-policy">Privacy Policy</a></li>
                  <li><a href="/cookie-policy">Cookie Policy & Consent Management</a></li>
                  <li><a href="/terms-of-service">Terms of Service / Use</a></li>
                  <li><a href="/data-retention-policy">Data Retention & Deletion Policy</a></li>
                  <li><a href="/international-data-transfers">International Data Transfers Notice</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Vardaan Global. All Rights Reserved.</p>
      </div>
      
      {showBackToTop && (
        <div className="back-to-top" onClick={scrollToTop}>
          <FaArrowUp />
        </div>
      )}
    </footer>
  );
};

export default Footer; 