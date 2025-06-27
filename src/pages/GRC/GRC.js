import React from "react";
import "./GRC.css";
import GRCImage from "../../assets/Products/GRCS.jpg";
import GRCImage1 from "../../assets/Products/grc 1.webp"
import GRCImage2 from "../../assets/Products/grc 2.jpg";
import GRCImage3 from "../../assets/Products/grc 3.jpeg";
import Footer from "../../components/Footer";

const GRC = () => {
  return (
    <div className="grc-container">
      <div className="grc-background">
        <div className="grc-content-wrapper">
          <div className="grc-content-box">
            {/* <div className="grc-institute">— Vardaan Global</div> */}
            <h1 className="grc-title">Governance, Risk and Control</h1>
            <div className="grc-tagline">
              "Transforms compliance into confidence—simplifying audits, reducing risk, and giving you control, one module at a time"
            </div>
            <div className="grc-description-container">
              <p className="grc-description">
                Our comprehensive GRC solutions help organizations align IT with business objectives, 
                effectively manage risk and meet compliance requirements through robust governance 
                frameworks, advanced risk assessment tools, and automated control monitoring systems.
              </p>
            </div>
            {/* <div className="grc-institute-highlight">
              VARDAAN GLOBAL
            </div> */}
          </div>
        </div>
      </div>
      
      {/* Image Gallery Section */}
      <div className="grc-gallery">
        <div className="grc-gallery-item">
          <img src={GRCImage1} alt="GRC Solution 1" className="grc-gallery-image" />
          <div className="grc-gallery-content">
            <div className="grc-gallery-category">— GRC Solutions</div>
            <div className="grc-gallery-title">Integrated Risk & Compliance Management</div>
            <div className="grc-gallery-description">
              Unifies governance, risk, and compliance processes for better efficiency and control.
            </div>
          </div>
        </div>
        
        <div className="grc-gallery-item">
          <img src={GRCImage2} alt="GRC Solution 2" className="grc-gallery-image" />
          <div className="grc-gallery-content">
            <div className="grc-gallery-category">— GRC Solutions</div>
            <div className="grc-gallery-title">Real-time Monitoring & Reporting</div>
            <div className="grc-gallery-description">
              Provides live insights into risks, controls, and compliance status across the organization.
            </div>
          </div>
        </div>
        
        <div className="grc-gallery-item">
          <img src={GRCImage3} alt="GRC Solution 3" className="grc-gallery-image" />
          <div className="grc-gallery-content">
            <div className="grc-gallery-category">— GRC Solutions</div>
            <div className="grc-gallery-title">Regulatory Adherence & Audit Readiness</div>
            <div className="grc-gallery-description">
              Ensures compliance with laws and standards while simplifying audits with automated documentation.
            </div>
          </div>
        </div>
      </div>
      
      {/* Features Section */}
      <div className="grc-features-section">
        <div className="grc-features-container">
          <div className="grc-features-header">
            <div className="grc-features-subtitle">Complete Solution</div>
            <h2 className="grc-features-title">Advanced GRC Functionalities</h2>
            <p className="grc-features-description">
              Empower your organization with cutting-edge governance, risk management, and compliance tools 
              designed for the modern enterprise. Our comprehensive platform delivers unparalleled control and visibility.
            </p>
          </div>

          <div className="grc-features-grid">
            <div className="grc-feature-card">
              <div className="grc-feature-icon">🛡️</div>
              <h3 className="grc-feature-title">Risk Intelligence</h3>
              <p className="grc-feature-description">
                Advanced AI-powered risk assessment and predictive analytics to identify, evaluate, and mitigate 
                potential threats before they impact your business operations.
              </p>
            </div>

            <div className="grc-feature-card">
              <div className="grc-feature-icon">📊</div>
              <h3 className="grc-feature-title">Compliance Automation</h3>
              <p className="grc-feature-description">
                Streamlined compliance workflows with automated monitoring, reporting, and audit trails 
                ensuring adherence to industry standards and regulatory requirements.
              </p>
            </div>

            <div className="grc-feature-card">
              <div className="grc-feature-icon">🎯</div>
              <h3 className="grc-feature-title">Policy Management</h3>
              <p className="grc-feature-description">
                Centralized policy creation, distribution, and tracking with version control, approval workflows, 
                and automated policy compliance verification across your entire organization.
              </p>
            </div>
          </div>

          <div className="grc-key-features">
            <h3 className="grc-key-features-title">Key Features & Capabilities</h3>
            <ul className="grc-key-features-list">
              <li className="grc-key-feature-item">
                <div className="grc-key-feature-icon">🔍</div>
                <div className="grc-key-feature-text">Advanced Threat Detection & Prevention</div>
              </li>
              <li className="grc-key-feature-item">
                <div className="grc-key-feature-icon">📋</div>
                <div className="grc-key-feature-text">Automated Compliance Reporting</div>
              </li>
              <li className="grc-key-feature-item">
                <div className="grc-key-feature-icon">🏗️</div>
                <div className="grc-key-feature-text">Multi-Framework Support (ISO, NIST, SOX)</div>
              </li>
              <li className="grc-key-feature-item">
                <div className="grc-key-feature-icon">📝</div>
                <div className="grc-key-feature-text">Custom Risk Assessment Templates</div>
              </li>
              <li className="grc-key-feature-item">
                <div className="grc-key-feature-icon">📈</div>
                <div className="grc-key-feature-text">Executive Dashboard & Analytics</div>
              </li>
              <li className="grc-key-feature-item">
                <div className="grc-key-feature-icon">🤝</div>
                <div className="grc-key-feature-text">Third-Party Risk Management</div>
              </li>
              <li className="grc-key-feature-item">
                <div className="grc-key-feature-icon">🚨</div>
                <div className="grc-key-feature-text">Incident Response Automation</div>
              </li>
              <li className="grc-key-feature-item">
                <div className="grc-key-feature-icon">🔄</div>
                <div className="grc-key-feature-text">Continuous Control Monitoring</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div style={{ width: '100%', marginTop: '100px' }}>
        <Footer />
      </div>
    </div>
  );
};

export default GRC;