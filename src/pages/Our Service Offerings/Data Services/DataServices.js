import React, { useRef } from "react";
import "./DataServices.css";
import Footer from "../../../components/Footer";
 
// Import images directly
import AdvancedAnalyticsImg from "../../../assets/images/Data Services/Advanced analytics.jpeg";
import DataScienceImg from "../../../assets/images/Data Services/Data science and predictive modelling.jpeg";
import EnterpriseDataImg from "../../../assets/images/Data Services/Enterprise data strategy.jpeg";
import BusinessIntelligenceImg from "../../../assets/images/Data Services/Business intelligence and analytics.png";
import DataScienceHeroImg from "../../../assets/images/Data Services/Data Science.jpg";
import AssessmentImg from "../../../assets/images/Data Services/assessment.jpg";
import GapAnalysisImg from "../../../assets/images/Data Services/gap analysis.jpg";

// Debug: Check if the image imports are working
console.log('Gap Analysis Image:', GapAnalysisImg);
import DevelopmentImg from "../../../assets/images/Data Services/development.jpg";
import SustenanceImg from "../../../assets/images/Data Services/Sustenance.jpg";
 
const DataServices = () => {
  const serviceItems = [
    {
      title: "Assessment",
      icon: "assessment-icon",
      step: "1",
      image: AssessmentImg
    },
    {
      title: "Gap Analysis",
      icon: "gap-analysis-icon",
      step: "2",
      image: GapAnalysisImg
    },
    {
      title: "Recommendation & Development",
      icon: "recommendation-icon",
      step: "3",
      image: DevelopmentImg
    },
    {
      title: "Sustenance",
      icon: "sustenance-icon",
      step: "4",
      image: SustenanceImg
    }
  ];
 
  const serviceCards = [
    {
      title: "Advanced Analytics and AI Intelligence",
      image: AdvancedAnalyticsImg,
      content: [
        "Machine Learning solutions",
        "Natural Language Processing Solutions",
        "Robotic Process Automation"
      ]
    },
    {
      title: "Data Science & Predictive Modeling",
      image: DataScienceImg,
      content: [
        "Quantitative and Behavioural Modelling",
        "Predictive, Prescriptive and Cognitive Analytics",
        "Machine Learning, Forecasting & Optimization"
      ]
    },
    {
      title: "Enterprise Data Strategy",
      image: EnterpriseDataImg,
      content: [
        "Multi-Dimensional Data modelling",
        "Extraction, Transformation & Loading, ELT, ODS",
        "Data Quality Management",
        "Governance"
      ]
    },
    {
      title: "Business Intelligence & Analytics",
      image: BusinessIntelligenceImg,
      content: [
        "Publish Insights",
        "Real time and Aggregated data in the form of CUBES",
        "Configurable dashboards and Ad-hoc Query Builder & Reporting"
      ]
    }
  ];
 
  const expertiseItems = [
    {
      icon: "database",
      text: "AI and Data Enthusiasts"
    },
    {
      icon: "lightbulb",
      text: "Innovation Labs"
    },
    {
      icon: "chart",
      text: "Data Visualization"
    },
    {
      icon: "shield",
      text: "Data Governance and Security"
    },
    {
      icon: "building",
      text: "Industry Specific Solutions"
    },
    {
      icon: "clock",
      text: "20+ years of experience"
    }
  ];

  // Reference for the timeline container
  const timelineRef = useRef(null);
 
  const renderIcon = (iconType) => {
    switch(iconType) {
      case 'database':
        return (
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 3C7.58 3 4 4.79 4 7s3.58 4 8 4 8-1.79 8-4-3.58-4-8-4zM4 9v3c0 2.21 3.58 4 8 4s8-1.79 8-4V9c0 2.21-3.58 4-8 4s-8-1.79-8-4zM4 16v3c0 2.21 3.58 4 8 4s8-1.79 8-4v-3c0 2.21-3.58 4-8 4s-8-1.79-8-4z"/>
          </svg>
        );
      case 'lightbulb':
        return (
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M9 21c0 .5.4 1 1 1h4c.6 0 1-.5 1-1v-1H9v1zm3-19C8.1 2 5 5.1 5 9c0 2.4 1.2 4.5 3 5.7V17c0 .5.4 1 1 1h6c.6 0 1-.5 1-1v-2.3c1.8-1.3 3-3.4 3-5.7 0-3.9-3.1-7-7-7z"/>
          </svg>
        );
      case 'chart':
        return (
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M22 21H2l4-4h3l4-4h3l4-4h3v4h3v4h3z"/>
            <path d="M3 18l4-4h3l4-4h3l4-4h3v12H3z"/>
          </svg>
        );
      case 'shield':
        return (
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11H16V16H8V11H9.2V10C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.4,8.7 10.4,10V11H13.6V10C13.6,8.7 12.8,8.2 12,8.2Z"/>
          </svg>
        );
      case 'building':
        return (
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3zm-1 13h2v2h-2v-2zm0-3h2v2h-2v-2zm0-3h2v2h-2v-2z"/>
          </svg>
        );
      case 'clock':
        return (
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M16.2,16.2L11,13V7H12.5V12.2L17,14.9L16.2,16.2Z"/>
          </svg>
        );
      case 'dot':
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" width="12" height="12">
            <circle cx="12" cy="12" r="8" />
          </svg>
        );
      default:
        return null;
    }
  };
 
  return (
    <div className="data-services-container">
      {/* Hero Banner Section */}
      <div className="data-hero-banner">
        <div className="data-hero-image-container">
          <img src={DataScienceHeroImg} alt="Data Science" className="data-hero-image" />
          <div className="data-hero-overlay">
            <div className="data-hero-content">
              <h1 className="data-hero-title">Data Science</h1>
            </div>
          </div>
        </div>
      </div>
 
      {/* Desktop Service Process */}
      <div className="service-process desktop-service-process">
        {serviceItems.map((item, index) => {
          // Get the appropriate image class for each step
          const getImageForStep = (stepIndex) => {
            switch(stepIndex) {
              case 0: return 'assessment';
              case 1: return 'gap-analysis';
              case 2: return 'development';
              case 3: return 'sustenance';
              default: return null;
            }
          };
         
          const stepImageClass = getImageForStep(index);
         
          return (
            <div key={index} className="process-item">
              <div className={`process-icon process-icon-${item.step} process-icon-${stepImageClass} ${item.icon}`} data-step={item.step}></div>
             
              <p className="process-title process-title-bottom">{item.title}</p>
            </div>
          );
        })}
      </div>

      {/* Mobile Service Process - Horizontal Timeline */}
      <div className="mobile-service-process" ref={timelineRef}>
        <div className="mobile-timeline-container">
          <div className="mobile-timeline-line">
            <svg className="mobile-timeline-svg" viewBox="0 0 800 100" preserveAspectRatio="none">
              <path 
                d="M0,50 C100,20 200,80 300,50 C400,20 500,80 600,50 C700,20 800,50 800,50" 
                stroke="#2a3990" 
                strokeWidth="3" 
                fill="none" 
                strokeDasharray="5,5"
              />
            </svg>
          </div>
          
          {serviceItems.map((item, index) => (
            <div key={index} className="mobile-process-item">
              <div className="mobile-process-icon-container">
                <div className="mobile-process-icon" style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}>
                  <span className="mobile-process-step">{item.step}</span>
                </div>
              </div>
              <p className="mobile-process-title">{item.title}</p>
            </div>
          ))}
        </div>

      </div>
 
      {/* Desktop Data Services Grid */}
      <div className="data-services-grid desktop-services-grid">
        {/* First Row - Image, Text, Image, Text */}
        <div className="data-services-row">
          {/* Card 1 - Image */}
          <div className="service-card-image">
            <img src={serviceCards[0].image} alt={serviceCards[0].title} />
          </div>
         
          {/* Card 1 - Content */}
          <div className="service-card-content">
            <h3 className="card-title">{serviceCards[0].title}</h3>
            <ul className="card-list">
              {serviceCards[0].content.map((item, itemIndex) => (
                <li key={itemIndex} className="card-list-item">{item}</li>
              ))}
            </ul>
          </div>
         
          {/* Card 2 - Image */}
          <div className="service-card-image">
            <img src={serviceCards[1].image} alt={serviceCards[1].title} />
          </div>
         
          {/* Card 2 - Content */}
          <div className="service-card-content">
            <h3 className="card-title">{serviceCards[1].title}</h3>
            <ul className="card-list">
              {serviceCards[1].content.map((item, itemIndex) => (
                <li key={itemIndex} className="card-list-item">{item}</li>
              ))}
            </ul>
          </div>
        </div>
       
        {/* Second Row - Text, Image, Text, Image */}
        <div className="data-services-row">
          {/* Card 3 - Content */}
          <div className="service-card-content">
            <h3 className="card-title">{serviceCards[2].title}</h3>
            <ul className="card-list">
              {serviceCards[2].content.map((item, itemIndex) => (
                <li key={itemIndex} className="card-list-item">{item}</li>
              ))}
            </ul>
          </div>
         
          {/* Card 3 - Image */}
          <div className="service-card-image">
            <img src={serviceCards[2].image} alt={serviceCards[2].title} />
          </div>
         
          {/* Card 4 - Content */}
          <div className="service-card-content">
            <h3 className="card-title">{serviceCards[3].title}</h3>
            <ul className="card-list">
              {serviceCards[3].content.map((item, itemIndex) => (
                <li key={itemIndex} className="card-list-item">{item}</li>
              ))}
            </ul>
          </div>
         
          {/* Card 4 - Image */}
          <div className="service-card-image">
            <img src={serviceCards[3].image} alt={serviceCards[3].title} />
          </div>
        </div>
      </div>

      {/* Mobile Data Services Grid - Vertical with alternating layout */}
      <div className="mobile-services-grid">
        {serviceCards.map((card, index) => (
          <div key={index} className="mobile-service-card">
            <div className="mobile-service-card-image">
              <img src={card.image} alt={card.title} />
            </div>
            <div className="mobile-service-card-content">
              <h3 className="mobile-card-title">{card.title}</h3>
              <ul className="mobile-card-list">
                {card.content.map((item, itemIndex) => (
                  <li key={itemIndex} className="mobile-card-list-item">
                    <span className="mobile-card-dot">{renderIcon('dot')}</span>
                    <span className="mobile-card-text">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
 
      {/* Our Expertise Section */}
      <div className="expertise-section">
        <div className="expertise-intro">
          <p>
            We are <span className="highlight">data artists</span>, who work towards creating highly <span className="highlight">valuable insights</span> out of massive <span className="highlight">data estates</span>.
          </p>
        </div>
       
        <div className="expertise-container">
          <div className="expertise-circle">
            <div className="expertise-center">
              <h2 className="expertise-center-title">Our Expertise</h2>
              <p className="expertise-center-subtitle">Data Excellence</p>
            </div>
           
            {/* AI and Data Enthusiasts */}
            <div className="expertise-item expertise-item-1">
              <div className="expertise-icon-container">
                <div className="expertise-icon">
                  {renderIcon('database')}
                </div>
              </div>
              <p className="expertise-text">AI and Data Enthusiasts</p>
            </div>
 
            {/* Innovation Labs */}
            <div className="expertise-item expertise-item-2">
              <div className="expertise-icon-container">
                <div className="expertise-icon">
                  {renderIcon('lightbulb')}
                </div>
              </div>
              <p className="expertise-text">Innovation Labs</p>
            </div>
 
            {/* Data Visualization */}
            <div className="expertise-item expertise-item-3">
              <div className="expertise-icon-container">
                <div className="expertise-icon">
                  {renderIcon('chart')}
                </div>
              </div>
              <p className="expertise-text">Data Visualization</p>
            </div>
 
            {/* Data Governance and Security */}
            <div className="expertise-item expertise-item-4">
              <div className="expertise-icon-container">
                <div className="expertise-icon">
                  {renderIcon('shield')}
                </div>
              </div>
              <p className="expertise-text">Data Governance and Security</p>
            </div>
 
            {/* Industry Specific Solutions */}
            <div className="expertise-item expertise-item-5">
              <div className="expertise-icon-container">
                <div className="expertise-icon">
                  {renderIcon('building')}
                </div>
              </div>
              <p className="expertise-text">Industry Specific Solutions</p>
            </div>
 
            {/* 20+ years of experience */}
            <div className="expertise-item expertise-item-6">
              <div className="expertise-icon-container">
                <div className="expertise-icon">
                  {renderIcon('clock')}
                </div>
              </div>
              <p className="expertise-text">20+ years of experience</p>
            </div>
          </div>
        </div>
      </div>
 
      {/* Visit Our Website Section */}
      <div className="website-section">
        {/* Floating Particles */}
        <div className="particles-container">
          <div className="particle particle-1"></div>
          <div className="particle particle-2"></div>
          <div className="particle particle-3"></div>
          <div className="particle particle-4"></div>
          <div className="particle particle-5"></div>
          <div className="particle particle-6"></div>
        </div>
       
        {/* Floating Geometric Shapes */}
        <div className="shapes-container">
          <div className="floating-shape shape-triangle"></div>
          <div className="floating-shape shape-circle"></div>
          <div className="floating-shape shape-square"></div>
          <div className="floating-shape shape-hexagon"></div>
        </div>
       
        <div className="website-content">
          <span className="website-text typewriter">
            <span className="typewriter-text">
              <span className="line-one">Discover more about our comprehensive </span>
              <span className="line-two">data solutions and services</span>
            </span>
          </span>
          <a
            href="https://vardaands.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="website-button ripple-button"
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
              ripple.classList.add('ripple');
             
              button.appendChild(ripple);
             
              setTimeout(() => {
                ripple.remove();
              }, 600);
            }}
          >
            <span className="button-text">Visit Our Website</span>
            <span className="button-glow"></span>
          </a>
        </div>
      </div>
      
      {/* Footer Section */}
      <Footer />
    </div>
  );
};
 
export default DataServices;

 