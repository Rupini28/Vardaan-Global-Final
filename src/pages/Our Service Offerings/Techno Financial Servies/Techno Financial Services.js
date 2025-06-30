import React, { useState, useEffect } from 'react';
import './Techno Financial Services.css';
import Footer from '../../../components/Footer';
 
// Import hero banner image
import heroBannerImg from '../../../assets/images/Techno Financial Services/Techno Financial Services.jpg';
 
// Import images
import capitalizationImg from '../../../assets/images/Techno Financial Services/Captilization of PPE.jpg';
import valuationImg from '../../../assets/images/Techno Financial Services/Valuation.png';
import physicalVerificationImg from '../../../assets/images/Techno Financial Services/Physical verification of assets.png';
import technicalAssessmentImg from '../../../assets/images/Techno Financial Services/Technical Assesment.webp';
import businessValuationsImg from '../../../assets/images/Techno Financial Services/Business and Plant Valuations.png';
import assetImpairmentImg from '../../../assets/images/Techno Financial Services/Asset Impairment.webp';
import technicalConsultancyImg from '../../../assets/images/Techno Financial Services/Technical and Financial.png';
import feasibilityStudiesImg from '../../../assets/images/Techno Financial Services/Technical and Financial Studies.png';
import projectMonitoringImg from '../../../assets/images/Techno Financial Services/Project Monitoring.png';
import lenderServicesImg from '../../../assets/images/Techno Financial Services/Leaders Services.png';
import managementServicesImg from '../../../assets/images/Techno Financial Services/Management.jpg';
import siteVisitsImg from '../../../assets/images/Techno Financial Services/Site visits.png';
 
const TechnoFinancialServices = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const services = [
    {
      id: 1,
      title: "Capitalization of Property, Plant, and Equipment",
      description: "We ensure assets are capitalized and depreciated in compliance with accounting standards, enabling accurate and auditable records.",
      image: capitalizationImg
    },
    {
      id: 2,
      title: "Valuation of Fixed Assets",
      description: "Our asset valuations follow recognized methodologies and regulatory frameworks, ensuring transparency and audit readiness.",
      image: valuationImg
    },
    {
      id: 3,
      title: "Physical Verification of Assets & Inventory",
      description: "We conduct physical verification and reconciliation to ensure all assets are traceable, compliant, and supported by audit trails.",
      image: physicalVerificationImg
    },
    {
      id: 4,
      title: "Technical Assessment of Useful Life",
      description: "Asset life evaluations are based on physical condition, performance records, and adherence to industry and statutory norms.",
      image: technicalAssessmentImg
    },
    {
      id: 5,
      title: "Business and Plant Valuations",
      description: "We deliver defensible business and plant valuations backed by industry expertise, ensuring compliance with financial regulations.",
      image: businessValuationsImg
    },
    {
      id: 6,
      title: "Asset Impairment Studies",
      description: "We conduct impairment assessments as per regulatory standards, aligning with statutory disclosures and audit requirements.",
      image: assetImpairmentImg
    },
    {
      id: 7,
      title: "Technical & Financial Consultancy",
      description: "Our consultancy ensures regulatory alignment, financial discipline, and project viability across operational and funding needs.",
      image: technicalConsultancyImg
    },
    {
      id: 8,
      title: "Technical & Financial Feasibility Studies",
      description: "We conduct technical and financial feasibility studies to recommend additional investments, assess asset utility, and support Mergers and acquisition decisions with data-backed insights.",
      image: feasibilityStudiesImg
    },
    {
      id: 9,
      title: "Project Monitoring",
      description: "We monitor project progress, milestones, and vendor compliance, ensuring traceability and adherence to project governance.",
      image: projectMonitoringImg
    },
    {
      id: 10,
      title: "Lender's / Owner's Engineer Services",
      description: "We represent owners and lenders through bid reviews, project oversight, and quality checks, ensuring auditable execution.",
      image: lenderServicesImg
    },
    {
      id: 11,
      title: "Management & Inspection Services",
      description: "Services include asset audits, compliance checks, performance assessments, and documentation for audit assurance.",
      image: managementServicesImg
    },
    {
      id: 12,
      title: "Site Visits & Strategic Inspections",
      description: "Our site inspections assess operational health, risk exposure, and compliance, supporting acquisitions and brownfield expansions.",
      image: siteVisitsImg
    }
  ];
 
  // Group services into pairs for 6 rows
  const serviceRows = [
    services.slice(0, 2),   // Services 1-2
    services.slice(2, 4),   // Services 3-4
    services.slice(4, 6),   // Services 5-6
    services.slice(6, 8),   // Services 7-8
    services.slice(8, 10),  // Services 9-10
    services.slice(10, 12)  // Services 11-12
  ];
 
  const renderRow = (rowServices, rowIndex) => {
    const isEvenRow = rowIndex % 2 === 0;
   
    return (
      <div key={rowIndex} className="tfs-services-row">
        {rowServices.map((service, serviceIndex) => {
          const isFirstService = serviceIndex === 0;
         
          if (isEvenRow) {
            // Even rows: image-content-image-content
            return (
              <React.Fragment key={service.id}>
                <div className="tfs-service-card-image">
                  <img src={service.image} alt={service.title} />
                </div>
                <div className="tfs-service-card-content">
                  <h3 className="tfs-card-title">{service.title}</h3>
                  <p className="tfs-card-description">{service.description}</p>
                </div>
              </React.Fragment>
            );
          } else {
            // Odd rows: content-image-content-image
            return (
              <React.Fragment key={service.id}>
                <div className="tfs-service-card-content">
                  <h3 className="tfs-card-title">{service.title}</h3>
                  <p className="tfs-card-description">{service.description}</p>
                </div>
                <div className="tfs-service-card-image">
                  <img src={service.image} alt={service.title} />
                </div>
              </React.Fragment>
            );
          }
        })}
      </div>
    );
  };

  // Alternative rendering for mobile - each service as individual card
  const renderMobileCard = (service) => {
    return (
      <div key={service.id} className="tfs-services-row">
        <div className="tfs-service-card-image">
          <img src={service.image} alt={service.title} />
        </div>
        <div className="tfs-service-card-content">
          <h3 className="tfs-card-title">{service.title}</h3>
          <p className="tfs-card-description">{service.description}</p>
        </div>
      </div>
    );
  };
 
  return (
    <div className="tfs-techno-financial-services">
      <div className="tfs-hero-banner">
        <img src={heroBannerImg} alt="Techno Financial Services" className="tfs-hero-image" />
        <div className="tfs-hero-content">
          <h1 className="tfs-hero-title">TECHNO-FINANCIAL SERVICES</h1>
        </div>
      </div>
     
      <div className="tfs-services-grid">
        {isMobile 
          ? services.map(service => renderMobileCard(service))
          : serviceRows.map((rowServices, rowIndex) => renderRow(rowServices, rowIndex))
        }
      </div>
 
      {/* Visit Our Website Section */}
      <div className="tfs-website-section">
        {/* Floating Particles */}
        <div className="tfs-particles-container">
          <div className="tfs-particle tfs-particle-1"></div>
          <div className="tfs-particle tfs-particle-2"></div>
          <div className="tfs-particle tfs-particle-3"></div>
          <div className="tfs-particle tfs-particle-4"></div>
          <div className="tfs-particle tfs-particle-5"></div>
          <div className="tfs-particle tfs-particle-6"></div>
        </div>
       
        {/* Floating Geometric Shapes */}
        <div className="tfs-shapes-container">
          <div className="tfs-floating-shape tfs-shape-triangle"></div>
          <div className="tfs-floating-shape tfs-shape-circle"></div>
          <div className="tfs-floating-shape tfs-shape-square"></div>
          <div className="tfs-floating-shape tfs-shape-hexagon"></div>
        </div>
       
        <div className="tfs-website-content">
          <span className="tfs-website-text tfs-typewriter">
            <span className="tfs-typewriter-text">Explore our comprehensive techno-financial solutions and engineering expertise</span>
          </span>
          <a
            href="https://vardaanresources.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="tfs-website-button tfs-ripple-button"
            onClick={(e) => {
              // Create ripple effect
              const button = e.currentTarget;
              const rect = button.getBoundingClientRect();
              const ripple = document.createElement('span');
              const size = Math.max(rect.width, rect.height);
              const x = e.clientX - rect.left - size / 2;
              const y = e.clientY - rect.top - size / 2;
             
              ripple.style.width = ripple.style.height = size + 'px';
              ripple.style.left = x + 'px';
              ripple.style.top = y + 'px';
              ripple.classList.add('tfs-ripple');
             
              button.appendChild(ripple);
             
              setTimeout(() => {
                ripple.remove();
              }, 600);
            }}
          >
            <span className="tfs-button-text">Visit Our Website</span>
            <span className="tfs-button-glow"></span>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};
 
export default TechnoFinancialServices;
 

 