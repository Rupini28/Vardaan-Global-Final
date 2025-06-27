import React from "react";
import "./Cyber.css";
import videoSource from "../../assets/Products/Cybersecurity.mp4";
import Footer from "../../components/Footer";
import cyber1Image from "../../assets/Products/cyber 1.jpg";
import cyberWebp from "../../assets/Products/cyber.webp";
import cyber2Image from "../../assets/Products/cyber 2.jpg";
import cyber3Image from "../../assets/Products/cyber 3.jpg";
import cyber4Image from "../../assets/Products/cyber 4.jpg";
import cyber5Image from "../../assets/Products/cyber 5.jpg";

const Cyber = () => {
  return (
    <div className="cyber-container">
      {/* Hero Section with Video Overlay */}
      <section className="cyber-hero">
        <div className="video-overlay">
          <video 
            autoPlay 
            muted 
            loop 
            className="hero-video"
            playsInline
          >
            <source src={videoSource} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="video-overlay-content">
            <h1 className="cyber-title">Cybersecurity as a Service (CaaS)</h1>
            <p className="cyber-subtitle">Comprehensive protection for your digital assets</p>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="cyber-gallery">
        <div className="gallery-container">
          <div className="gallery-item">
            <img src={cyber1Image} alt="Security Operations Center" className="gallery-image" />
            <div className="gallery-content">
              <h3>Security Operations Center (SOC)</h3>
              <p>24/7 monitoring and threat management to detect and respond to security incidents in real time.</p>
            </div>
          </div>
          
          <div className="gallery-item">
            <img src={cyberWebp} alt="Managed Detection and Response" className="gallery-image" />
            <div className="gallery-content">
              <h3>Managed Detection and Response (MDR)</h3>
              <p>Proactive threat hunting and rapid response to minimize risks and mitigate breaches.</p>
            </div>
          </div>
          
          <div className="gallery-item">
            <img src={cyber2Image} alt="Managed Extended Detection and Response" className="gallery-image" />
            <div className="gallery-content">
              <h3>Managed Extended Detection and Response (MXDR)</h3>
              <p>Integrated threat detection across endpoints, networks, servers, and cloud environments.</p>
            </div>
          </div>
          
          <div className="gallery-item">
            <img src={cyber3Image} alt="Managed Endpoint Protection" className="gallery-image" />
            <div className="gallery-content">
              <h3>Managed Endpoint Protection (MEP)</h3>
              <p>Advanced security solutions for endpoint devices to prevent, detect, and respond to threats.</p>
            </div>
          </div>
          
          <div className="gallery-item">
            <img src={cyber4Image} alt="Security Information and Event Management" className="gallery-image" />
            <div className="gallery-content">
              <h3>Security Information and Event Management (SIEM)</h3>
              <p>Centralized collection and analysis of security data for real-time visibility and compliance.</p>
            </div>
          </div>
          
          <div className="gallery-item">
            <img src={cyber5Image} alt="Managed Cloud Detection and Response" className="gallery-image" />
            <div className="gallery-content">
              <h3>Managed Cloud Detection and Response (MCDR)</h3>
              <p>Tailored cloud security services to protect assets hosted in public, private, or hybrid environments.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Cyber; 