import React from "react";
import "./Audit.css";
import auditImage from "../../../assets/Products/ProSync/audit.webp";
import auditIcon1 from "../../../assets/Products/ProSync/audit 1.png";
import auditIcon2 from "../../../assets/Products/ProSync/audit 2.webp";
import auditIcon3 from "../../../assets/Products/ProSync/audit 3.jpg";
import auditIcon4 from "../../../assets/Products/ProSync/audit 4.jpg";
import auditVideo from "../../../assets/Home/Audit.mp4";
import Footer from "../../../components/Footer";

const Audit = () => {
  return (
    <>
      {/* Video Overlay Section at the top */}
      <section className="audit-video-section">
        <div className="audit-video-overlay">
          <div>
            <h2 className="audit-video-title">ProSync</h2>
            <p className="audit-video-tagline">Turn bottlenecks into breakthroughs, automate critical workflows, escalates faster, and keeps compliance running like clockwork.</p>
          </div>
        </div>
        <video className="audit-background-video" autoPlay loop muted>
          <source src={auditVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

      <div className="audit-hero-container">
        <div className="audit-hero-content">
          <h1 className="audit-hero-title">ProSync</h1>
          <p className="audit-hero-description">
            Experience seamless workflow automation to enhance business process
            efficiency. APMS provides powerful tools for streamlining
            processes, facilitating team collaboration, and improving overall
            productivity through intelligent workflow management and task
            synchronization.
          </p>
          {/* <button className="audit-hero-btn">Read the full story</button> */}
        </div>
        <div className="audit-hero-image-wrapper">
          <img src={auditImage} alt="Audit Practice Management" className="audit-hero-image" />
        </div>
      </div>

      {/* Hexagon Features Section */}
      <section className="audit-features-section">
        <h2 className="audit-features-title">Key Features</h2>
        <div className="audit-features-container">
          <div className="audit-feature-hexagon">
            <div className="audit-feature-hexagon-inner">
              <div className="audit-feature-image-container">
                <img src={auditIcon1} alt="Centralized Dashboard" className="audit-feature-image" />
              </div>
              <div className="audit-feature-text-content">
                <h3>Centralized Dashboard</h3>
                <p>Real-time visibility into audit status, overdue findings, upcoming audits, and risk alerts with comprehensive reporting.</p>
              </div>
            </div>
          </div>
          
          <div className="audit-feature-hexagon">
            <div className="audit-feature-hexagon-inner">
              <div className="audit-feature-image-container">
                <img src={auditIcon2} alt="Role-Based Access Control" className="audit-feature-image" />
              </div>
              <div className="audit-feature-text-content">
                <h3>Role-Based Access</h3>
                <p>Ensure auditors, reviewers, and management access only what's relevant with granular permission settings.</p>
              </div>
            </div>
          </div>
          
          <div className="audit-feature-hexagon">
            <div className="audit-feature-hexagon-inner">
              <div className="audit-feature-image-container">
                <img src={auditIcon3} alt="Automated Notifications" className="audit-feature-image" />
              </div>
              <div className="audit-feature-text-content">
                <h3>Automated Notifications</h3>
                <p>Smart alerts for audit deadlines, pending reviews, overdue remediations, and approval workflows.</p>
              </div>
            </div>
          </div>
          
          <div className="audit-feature-hexagon">
            <div className="audit-feature-hexagon-inner">
              <div className="audit-feature-image-container">
                <img src={auditIcon4} alt="Data Security" className="audit-feature-image" />
              </div>
              <div className="audit-feature-text-content">
                <h3>Data Security</h3>
                <p>Enterprise-grade encryption, access policies, and comprehensive audit logs for regulatory compliance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Audit; 