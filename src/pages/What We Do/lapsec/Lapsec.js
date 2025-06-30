import React, { useEffect, useState, useRef } from "react";
import "./Lapsec.css";
import lapsecVideo from "../../../assets/Products/lapsec.mp4";
import lapsecImg1 from "../../../assets/Products/lapsec.jpg";
import lapsecImg2 from "../../../assets/Products/lapsec 1.jpg";
import lapsecImg3 from "../../../assets/Products/lapsec 2.webp";
import lapsecFeaturesImg from "../../../assets/Products/lapsec 4.webp";
import lapsecBenefit1 from "../../../assets/Products/lapsec 5.jpg";
import lapsecBenefit2 from "../../../assets/Products/lapsec 6.jpeg";
import lapsecBenefit3 from "../../../assets/Products/lapsec 7.jpg";
import lapsecBenefit4 from "../../../assets/Products/lapsec 8.jpg";
import lapsecBenefit5 from "../../../assets/Products/lapsec 9.avif";
import lapsecBenefit6 from "../../../assets/Products/lapsec 10.jpg";
import lapsecBenefit7 from "../../../assets/Products/lapsec 11.png";
import Footer from "../../../components/Footer";

const Lapsec = () => {
  const [visibleBenefits, setVisibleBenefits] = useState([]);
  const benefitsRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const timer = setTimeout(() => {
            showBenefits();
          }, 300);
          return () => clearTimeout(timer);
        }
      },
      { threshold: 0.2 }
    );

    if (benefitsRef.current) {
      observer.observe(benefitsRef.current);
    }

    return () => {
      if (benefitsRef.current) {
        observer.unobserve(benefitsRef.current);
      }
    };
  }, []);

  // Ensure video plays correctly
  useEffect(() => {
    if (videoRef.current) {
      const playVideo = () => {
        if (videoRef.current) {
          videoRef.current.play().catch(error => {
            console.log("Video play error:", error);
            // Try playing again on user interaction
            document.addEventListener('click', function playOnClick() {
              videoRef.current.play().catch(e => console.log("Still can't play video:", e));
              document.removeEventListener('click', playOnClick);
            }, { once: true });
          });
        }
      };
      
      // Play video when component mounts
      playVideo();
      
      // Play video when it becomes visible in viewport
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            playVideo();
          }
        },
        { threshold: 0.1 }
      );
      
      observer.observe(videoRef.current);
      
      // Handle window resize to ensure video covers the screen
      const handleResize = () => {
        if (videoRef.current) {
          videoRef.current.style.height = '100%';
          videoRef.current.style.width = '100%';
        }
      };
      
      window.addEventListener('resize', handleResize);
      handleResize(); // Call once on mount
      
      return () => {
        if (videoRef.current) {
          observer.unobserve(videoRef.current);
        }
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  const showBenefits = () => {
    const benefits = document.querySelectorAll('.benefits-image-item');
    benefits.forEach((benefit, index) => {
      setTimeout(() => {
        setVisibleBenefits(prev => [...prev, index]);
      }, index * 200);
    });
  };

  // Benefits data with images
  const benefitsData = [
    {
      image: lapsecBenefit1,
      alt: "Social Media Blocking",
      title: "Website & Social Media Blocking",
      description: "Blocking access to social media and choice of sites to maintain productivity and security."
    },
    {
      image: lapsecBenefit2,
      alt: "Periodic Reporting",
      title: "Automated Reporting and Threat Detection System",
      description: "Periodic reporting to the admin ID with comprehensive security metrics, including abnormal system behavior, suspicious processes, and hardware usage to ensure advanced threat detection and compliance."
    },
    {
      image: lapsecBenefit3,
      alt: "Dashboard Insights",
      title: "Comprehensive Security Dashboard",
      description: "Dashboard with critical insights like vulnerabilities, threats, open ports, drives, software, etc."
    },
    {
      image: lapsecBenefit4,
      alt: "Key Information Reports",
      title: "Detailed Information Reports",
      description: "Reports containing key information for security analysis and compliance requirements."
    },
    {
      image: lapsecBenefit5,
      alt: "Activity Tracking",
      title: "Activity Monitoring & Tracking",
      description: "Tracking and monitoring active, inactive and recent activities with detailed reporting."
    },
    {
      image: lapsecBenefit6,
      alt: "External Device Monitoring",
      title: "USB & External Device Control",
      description: "Tracking of external devices connected and data size transfer information with access control."
    }
  ];

  return (
    <div className="lapsec-container">
      {/* Hero Section with Video Overlay - Now at the top */}
      <section className="lapsec-hero">
        <div className="video-overlay">
          <video 
            ref={videoRef}
            autoPlay 
            muted 
            loop 
            className="hero-video"
            playsInline
            preload="auto"
            style={{ height: '100%', width: '100%', objectFit: 'cover' }}
          >
            <source src={lapsecVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="video-overlay-content">
            <h1 className="lapsec-title">LAPSEC</h1>
            <p className="lapsec-subtitle">"Delivers airtight local access control and intelligent privilege enforcement—securing endpoints without slowing teams down."</p>
          </div>
        </div>
      </section>
      
      {/* Content Sections */}
      <section className="lapsec-content top-intro">
        <div className="container">
          {/* Main Heading */}
          <div className="lapsec-main-heading">
            <h1>LAPSEC (Logical Access and Physical Security)</h1>
          </div>
          
          <div className="lapsec-section lapsec-intro">
            <div className="lapsec-intro-content">
              <div className="lapsec-image-grid">
                <div className="image-item item1">
                  <img src={lapsecImg1} alt="LAPSEC Security Interface" />
                </div>
                <div className="image-item item2">
                  <img src={lapsecImg2} alt="LAPSEC Dashboard" />
                </div>
                <div className="image-item item3">
                  <img src={lapsecImg3} alt="LAPSEC Security Features" />
                </div>
              </div>
              <div className="lapsec-intro-text">
                <p>
                  LAPSEC (Logical Access and Physical Security) is our comprehensive security 
                  management platform designed to protect your organization's digital and physical 
                  assets through advanced authentication, authorization, and monitoring systems.
                </p>
                <p>
                  LapSec conducts a comprehensive system scan, providing an in-depth report on critical aspects 
                  of your device. It offers centralized USB access control, website blocking capabilities, 
                  and automated patch notifications to ensure your systems remain secure and compliant with 
                  security policies.
                </p>
                <ul className="lapsec-features-list">
                  <li>Comprehensive Device Report</li>
                  <li>Threat Detection</li>
                  <li>Centralized USB access control</li>
                  <li>Website blocking capabilities</li>
                  <li>Automated patch notifications</li>
                  <li>Activity Monitoring</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Remaining Content */}
      <section className="lapsec-content">
        <div className="container">
          {/* Key Features Section with Full-Screen Background */}
        </div>
      </section>
      
      {/* Key Features Section with Full-Screen Background */}
      <section className="key-features-section">
        <div className="container">
          <h2>Key Features</h2>
          <div className="features-circle-grid">
            <div className="feature-circle feature-hexagon">
              <div className="circle-content">
                <h3>Multi-Factor Authentication</h3>
                <p>Advanced authentication methods</p>
              </div>
            </div>
            <div className="feature-circle feature-hexagon">
              <div className="circle-content">
                <h3>Access Control</h3>
                <p>Granular permission management with role-based access control</p>
              </div>
            </div>
            <div className="feature-circle feature-hexagon">
              <div className="circle-content">
                <h3>Physical Security Integration</h3>
                <p>Seamless integration with physical security systems</p>
              </div>
            </div>
            <div className="feature-circle feature-hexagon">
              <div className="circle-content">
                <h3>Audit Trail</h3>
                <p>Comprehensive logging and reporting of all access attempts and security events</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section with Full-Screen Background */}
      <section className="benefits-section" ref={benefitsRef}>
        <h2>Benefits</h2>
        <div className="benefits-container">
          <div className="benefits-layout">
            <div className="benefits-image-grid">
              {benefitsData.map((benefit, index) => (
                <div 
                  key={index}
                  className={`benefits-image-item ${visibleBenefits.includes(index) ? "visible" : ""}`}
                >
                  <div className="benefit-image-container">
                    <img 
                      src={benefit.image} 
                      alt={benefit.alt}
                      className="benefit-image"
                    />
                  </div>
                  <div className="benefit-content">
                    <h3 className="benefit-title">{benefit.title}</h3>
                    <p className="benefit-description">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Lapsec; 