import React from "react";
import "./Data Strategy.css";
import Footer from "../../../components/Footer";

// Import images directly
import DigitalStrategyAssessmentImg from "../../../assets/images/Data Strategy/Data Strategy Assessment.jpg";
import DataStrategyImg from "../../../assets/images/Data Strategy/Data Strategy.jpg";
import CloudMigrationImg from "../../../assets/images/Data Strategy/Cloud Migration1.jpg";
import DigitalOperationsImg from "../../../assets/images/Data Strategy/Digital operations.jpg";
import DataStrategyHeroImg from "../../../assets/images/Data Strategy/Data Strategy Hero.jpg";

const DataStrategy = () => {
  const strategyServices = [
    {
      title: "Digital Strategy Assessment",
      image: DigitalStrategyAssessmentImg,
      content: [
        "Infodrive's 6-step assessment aligns digital initiatives with long-term goals, fostering transformation and engagement.",
        "It evaluates digital readiness across strategy, people, technology, and processes."
      ]
    },
    {
      title: "Data Strategy",
      image: DataStrategyImg,
      content: [
        "Evaluates data landscape, governance, and quality to support analytical decision-making.",
        "Creates a roadmap for efficient, data-driven transformation aligned with business goals."
      ]
    },
    {
      title: "Cloud Migration and Optimization",
      image: CloudMigrationImg,
      content: [
        "Supports full-scale cloud migrations including apps, databases, and storage using agile methods.",
        "Infodrive ensures a seamless, low-risk, and scalable transformation with continuous improvement."
      ]
    },
    {
      title: "Digital Operations Strategy",
      image: DigitalOperationsImg,
      content: [
        "Enables organizations to digitize and automate core operations, optimizing performance and reducing costs.",
        "Helps create scalable, intelligent business models to meet evolving customer needs."
      ]
    }
  ];

  return (
    <div className="data-strategy-container">
      {/* Hero Banner Section */}
      <div className="data-strategy-hero">
        <img src={DataStrategyHeroImg} alt="Data Strategy Hero" className="hero-image" />
        <div className="hero-overlay">
          <h1 className="data-strategy-title">DATA STRATEGY</h1>
        </div>
      </div>
      
      <div className="strategy-services-grid">
        {strategyServices.map((service, index) => (
          <div key={index} className={`strategy-service-row ${index % 2 === 1 ? 'reverse' : ''}`}>
            <div className="strategy-service-image">
              <img src={service.image} alt={service.title} />
            </div>
            
            <div className="strategy-service-content">
              <h3 className="strategy-service-title">{service.title}</h3>
              <div className="strategy-service-description">
                {service.content.map((paragraph, paragraphIndex) => (
                  <p key={paragraphIndex} className="strategy-paragraph">{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="footer-spacing"></div>
      <Footer />
    </div>
  );
};

export default DataStrategy; 