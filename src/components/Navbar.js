import React, { useState, useEffect } from "react";
import { FaChevronDown, FaPhoneAlt, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";
import { Link, withRouter } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/Home/Vardaan Global.png";

const Navbar = ({ history, location }) => {
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [showWhatWeDoDropdown, setShowWhatWeDoDropdown] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  // Update currentPage based on location
  useEffect(() => {
    const path = location.pathname.substring(1); // Remove leading slash
    setCurrentPage(path || "home");
  }, [location]);

  // Handle mobile screen detection and menu closing
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    // Initial check
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen]);

  // Initialize mobile state on component mount
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    closeDropdowns();
  }, [location.pathname]);

  // Handle body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('mobile-menu-open');
      
      // Force navbar links visibility
      const navbarLinks = document.querySelector('.navbar-links');
      if (navbarLinks) {
        navbarLinks.style.display = 'flex';
        navbarLinks.style.opacity = '1';
        navbarLinks.style.visibility = 'visible';
      }
    } else {
      document.body.classList.remove('mobile-menu-open');
      
      // Hide navbar links
      const navbarLinks = document.querySelector('.navbar-links');
      if (navbarLinks && window.innerWidth <= 768) {
        navbarLinks.style.display = 'none';
      }
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove('mobile-menu-open');
    };
  }, [isMobileMenuOpen]);

  const navigateTo = (route) => {
    setCurrentPage(route);
    
    // Handle navigation based on route
    switch(route) {
      case "home":
        history.push("/");
        break;
      case "about":
        history.push("/about");
        break;
      case "contact":
        history.push("/contact");
        break;
      default:
        history.push(`/${route}`);
        break;
    }
  };

  const toggleDropdown = (dropdownSetter) => {
    if (dropdownSetter === setShowServicesDropdown) {
      setShowWhatWeDoDropdown(false);
      setShowServicesDropdown(prev => !prev);
    } else {
      setShowServicesDropdown(false);
      setShowWhatWeDoDropdown(prev => !prev);
    }
  };

  const closeDropdowns = () => {
    setShowServicesDropdown(false);
    setShowWhatWeDoDropdown(false);
  };

  const toggleMobileMenu = () => {
    const newMenuState = !isMobileMenuOpen;
    setIsMobileMenuOpen(newMenuState);
    
    // Close dropdowns when opening menu
    if (newMenuState) {
      closeDropdowns();
      document.body.classList.add('mobile-menu-open');
    } else {
      document.body.classList.remove('mobile-menu-open');
    }
    
    // Force navbar links visibility
    const navbarLinks = document.querySelector('.navbar-links');
    if (navbarLinks) {
      if (newMenuState) {
        navbarLinks.style.display = 'flex';
      } else {
        navbarLinks.style.display = 'none';
      }
    }
  };

  const handleMobileNavClick = (route) => {
    navigateTo(route);
    setIsMobileMenuOpen(false);
    closeDropdowns();
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const services = [
    { name: "Data Services", route: "data-services" },
    { name: "Data Strategy", route: "data-strategy" },
    { name: "AI Consulting Services", route: "ai-consulting" },
    { name: "ERP Services", route: "erp-services" },
    { name: "Microsoft Services", route: "microsoft-services" },
    { name: "Techno Financial Services", route: "techno-financial" },
    { name: "Cybersecurity Services", route: "cybersecurity-services" },
    { name: "Training", route: "training-services" },
    // { name: "Custom Engineering Services", route: "custom-engineering" }
  ];

  const whatWeDo = [
    { name: "Governance, Risk and Control", route: "grc" },
    { name: "ProSync", route: "audit" },
    { name: "LAPSEC", route: "lapsec" },
    { name: "Service Management Platform", route: "services" },
    { name: "Smart Logistics", route: "truck" },
    { name: "Cybersecurity as a Service", route: "cyber" },
    { name: "Robotic Solutions & Services", route: "robotics" }
  ];

  const isServicePageActive = services.some((s) => currentPage === s.route);
  const isWhatWeDoActive = whatWeDo.some((w) => currentPage === w.route);

  return (
    <nav className="navbar" style={{ backgroundColor: "#fff", position: "relative", zIndex: 10000 }}>
      {/* Logo Section */}
      <div className="navbar-left" style={{ backgroundColor: "#fff" }}>
        <Link to="/" onClick={() => navigateTo("home")} style={{ backgroundColor: "#fff" }}>
          <img src={logo} alt="Vardaan Global Logo" className="logo-img" style={{ backgroundColor: "#fff" }} />
        </Link>
      </div>

      {/* Mobile Menu Toggle */}
      <button 
        className={`mobile-menu-toggle ${isMobile ? 'mobile-visible' : ''}`}
        onClick={toggleMobileMenu}
        aria-label="Toggle mobile menu"
        style={{ backgroundColor: "#fff" }}
      >
        {isMobileMenuOpen ? 
          <FaTimes style={{ backgroundColor: "#fff" }} /> : 
          <FaBars style={{ backgroundColor: "#fff" }} />
        }
      </button>

      {/* Navigation Links - Desktop */}
      {!isMobile && (
        <ul className="navbar-links">
          {/* Desktop menu items */}
          <li>
            <a
              href="#"
              className={currentPage === "home" ? "active" : ""}
              onClick={(e) => {
                e.preventDefault();
                navigateTo("home");
                closeDropdowns();
              }}
            >
              Home
            </a>
          </li>
          {/* Other desktop menu items */}
          <li className={`dropdown-container ${isWhatWeDoActive ? "active" : ""}`}>
            <a
              href="#whatwedo"
              onClick={(e) => {
                e.preventDefault();
                toggleDropdown(setShowWhatWeDoDropdown);
              }}
              className={showWhatWeDoDropdown ? "active" : ""}
            >
              What We Do <FaChevronDown className="dropdown-icon" />
            </a>
            {showWhatWeDoDropdown && (
              <div className="dropdown-menu" onMouseLeave={closeDropdowns}>
                <div className="dropdown-column">
                  {whatWeDo.map((item, index) => (
                    <a
                      key={index}
                      href="#"
                      className={currentPage === item.route ? "active" : ""}
                      onClick={(e) => {
                        e.preventDefault();
                        isMobile ? handleMobileNavClick(item.route) : navigateTo(item.route);
                        closeDropdowns();
                      }}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </li>
          <li className={`dropdown-container ${isServicePageActive ? "active" : ""}`}>
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                toggleDropdown(setShowServicesDropdown);
              }}
              className={showServicesDropdown ? "active" : ""}
            >
              Our Services Offering <FaChevronDown className="dropdown-icon" />
            </a>
            {showServicesDropdown && (
              <div className="dropdown-menu" onMouseLeave={closeDropdowns}>
                <div className="dropdown-column">
                  {services.map((item, index) => (
                    <a
                      key={index}
                      href="#"
                      className={currentPage === item.route ? "active" : ""}
                      onClick={(e) => {
                        e.preventDefault();
                        isMobile ? handleMobileNavClick(item.route) : navigateTo(item.route);
                        closeDropdowns();
                      }}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </li>
          <li>
            <a
              href="#about"
              className={currentPage === "about" ? "active" : ""}
              onClick={(e) => {
                e.preventDefault();
                isMobile ? handleMobileNavClick("about") : navigateTo("about");
                closeDropdowns();
              }}
            >
              About Vardaan
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={currentPage === "contact" ? "active" : ""}
              onClick={(e) => {
                e.preventDefault();
                isMobile ? handleMobileNavClick("contact") : navigateTo("contact");
                closeDropdowns();
              }}
            >
              Contact Us
            </a>
          </li>
        </ul>
      )}

      {/* Navigation Links - Mobile */}
      {isMobile && isMobileMenuOpen && (
        <div 
          style={{
            position: 'fixed',
            top: '70px',
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: '#fff',
            zIndex: 9990,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'auto'
          }}
        >
          <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            <li style={{ borderBottom: '1px solid #f0f0f0', width: '100%' }}>
              <a
                href="#"
                style={{ 
                  display: 'block', 
                  padding: '15px', 
                  color: currentPage === "home" ? "#1565c0" : "#333",
                  textDecoration: 'none'
                }}
                onClick={(e) => {
                  e.preventDefault();
                  handleMobileNavClick("home");
                }}
              >
                Home
              </a>
            </li>
            <li style={{ borderBottom: '1px solid #f0f0f0', width: '100%' }}>
              <a
                href="#"
                style={{ 
                  display: 'block', 
                  padding: '15px', 
                  color: isWhatWeDoActive ? "#1565c0" : "#333",
                  textDecoration: 'none'
                }}
                onClick={(e) => {
                  e.preventDefault();
                  toggleDropdown(setShowWhatWeDoDropdown);
                }}
              >
                What We Do <FaChevronDown style={{ marginLeft: '5px', transform: showWhatWeDoDropdown ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }} />
              </a>
              {showWhatWeDoDropdown && (
                <div style={{ padding: '0 0 0 20px', background: '#fff' }}>
                  {whatWeDo.map((item, index) => (
                    <a
                      key={index}
                      href="#"
                      style={{ 
                        display: 'block', 
                        padding: '10px 15px', 
                        color: currentPage === item.route ? "#1565c0" : "#333",
                        textDecoration: 'none',
                        borderLeft: currentPage === item.route ? "3px solid #1565c0" : "none",
                        backgroundColor: currentPage === item.route ? "#f3f8ff" : "transparent",
                        paddingLeft: currentPage === item.route ? "25px" : "15px"
                      }}
                      onClick={(e) => {
                        e.preventDefault();
                        handleMobileNavClick(item.route);
                      }}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              )}
            </li>
            <li style={{ borderBottom: '1px solid #f0f0f0', width: '100%' }}>
              <a
                href="#"
                style={{ 
                  display: 'block', 
                  padding: '15px', 
                  color: isServicePageActive ? "#1565c0" : "#333",
                  textDecoration: 'none'
                }}
                onClick={(e) => {
                  e.preventDefault();
                  toggleDropdown(setShowServicesDropdown);
                }}
              >
                Our Services Offering <FaChevronDown style={{ marginLeft: '5px', transform: showServicesDropdown ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }} />
              </a>
              {showServicesDropdown && (
                <div style={{ padding: '0 0 0 20px', background: '#fff' }}>
                  {services.map((item, index) => (
                    <a
                      key={index}
                      href="#"
                      style={{ 
                        display: 'block', 
                        padding: '10px 15px', 
                        color: currentPage === item.route ? "#1565c0" : "#333",
                        textDecoration: 'none',
                        borderLeft: currentPage === item.route ? "3px solid #1565c0" : "none",
                        backgroundColor: currentPage === item.route ? "#f3f8ff" : "transparent",
                        paddingLeft: currentPage === item.route ? "25px" : "15px"
                      }}
                      onClick={(e) => {
                        e.preventDefault();
                        handleMobileNavClick(item.route);
                      }}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              )}
            </li>
            <li style={{ borderBottom: '1px solid #f0f0f0', width: '100%' }}>
              <a
                href="#"
                style={{ 
                  display: 'block', 
                  padding: '15px', 
                  color: currentPage === "about" ? "#1565c0" : "#333",
                  textDecoration: 'none'
                }}
                onClick={(e) => {
                  e.preventDefault();
                  handleMobileNavClick("about");
                }}
              >
                About Vardaan
              </a>
            </li>
            <li style={{ width: '100%' }}>
              <a
                href="#"
                style={{ 
                  display: 'block', 
                  padding: '15px', 
                  color: currentPage === "contact" ? "#1565c0" : "#333",
                  textDecoration: 'none'
                }}
                onClick={(e) => {
                  e.preventDefault();
                  handleMobileNavClick("contact");
                }}
              >
                Contact Us
              </a>
            </li>
          </ul>
          
          {/* Mobile Actions */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-around', 
            padding: '15px',
            marginTop: 'auto',
            borderTop: '1px solid #f0f0f0'
          }}>
            <a 
              href="tel:+1234567890" 
              style={{ 
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                textDecoration: 'none',
                color: '#000',
                padding: '12px',
                background: '#fff',
                borderRadius: '6px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                width: '45%',
                justifyContent: 'center'
              }}
            >
              <FaPhoneAlt style={{ color: '#1f70c6' }} />
              <span>Call Us</span>
            </a>
            <a 
              href="mailto:info@vardaan.com" 
              style={{ 
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                textDecoration: 'none',
                color: '#000',
                padding: '12px',
                background: '#fff',
                borderRadius: '6px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                width: '45%',
                justifyContent: 'center'
              }}
            >
              <FaEnvelope style={{ color: '#1f70c6' }} />
              <span>Email Us</span>
            </a>
          </div>
        </div>
      )}

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && <div className="mobile-overlay" onClick={toggleMobileMenu}></div>}
    </nav>
  );
};

export default withRouter(Navbar);