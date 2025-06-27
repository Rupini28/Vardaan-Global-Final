import React from "react";
import "./ERP Services.css";
import DBAImage from "../../../assets/images/ERP Services/DBA.jpg";
import APEXImage from "../../../assets/images/ERP Services/APEX.jpg";
import ADFImage from "../../../assets/images/ERP Services/ADF.jpg";
import FusionImg from "../../../assets/images/ERP Services/Fusion reports.jpg";
import CloudIntegrationImg from "../../../assets/images/ERP Services/Cloud.jpg";
import OracleDevelopmentImg from "../../../assets/images/ERP Services/Oracle development.jpg"
import DevOpsImg from "../../../assets/images/ERP Services/Devops1.jpg"
import OracleCloudAnalyticsImg from "../../../assets/images/ERP Services/Oracle cloud.jpg"
import HeroBannerImg from "../../../assets/images/ERP Services/Oracle ERP Services.avif";
// Import circle images for each service
import DBACircleImage from "../../../assets/images/ERP Services/dba-circle1.jpg";
import APEXCircleImage from "../../../assets/images/ERP Services/apex-circle1.png";
import ADFCircleImage from "../../../assets/images/ERP Services/adf-circle1.png";
import FusionCircleImage from "../../../assets/images/ERP Services/fusion-circle1.png";
import OracleDeveloperCircleImage from "../../../assets/images/ERP Services/oracle-dev-circle1.png";
import CloudIntegrationCircleImage from "../../../assets/images/ERP Services/cloud-integration-circle.jpeg";
import DevOpsCircleImage from "../../../assets/images/ERP Services/devops-circle1.png";
import AnalyticsCircleImage from "../../../assets/images/ERP Services/analytics-circle1.png";
import Footer from "../../../components/Footer";

const ERPServices = () => {
  const services = [
    {
      title: "DBA",
      circleImage: DBACircleImage,
      description: "Covers Oracle database setup, performance tuning, backup, and security.",
      image: DBAImage,
      imagePosition: "right"
    },
    {
      title: "APEX",
      circleImage: APEXCircleImage,
      description: "Low-code platform for rapid development of database-driven web applications.",
      image: APEXImage,
      imagePosition: "left"
    },
    {
      title: "ADF",
      circleImage: ADFCircleImage,
      description: "Java-based framework enabling enterprise app development with MVC and Oracle integration.",
      image: ADFImage,
      imagePosition: "right"
    },
    {
      title: "Fusion Reports",
      circleImage: FusionCircleImage,
      description: "Tool for pixel-perfect reporting across formats, with data modeling and automation.",
      image: FusionImg,
      imagePosition: "left"
    },
    {
      title: "Oracle Development",
      circleImage: OracleDeveloperCircleImage,
      description: "Cloud platform for DevOps with version control, CI/CD, and collaboration tools.",
      image: OracleDevelopmentImg,
      imagePosition: "right"
    },
    {
      title: "Cloud Integration",
      circleImage: CloudIntegrationCircleImage,
      description: "Connects cloud and on-prem systems with prebuilt connectors and workflow automation.",
      image: CloudIntegrationImg,
      imagePosition: "left"
    },
    {
      title: "DevOps / Cloud",
      circleImage: DevOpsCircleImage,
      description: "Unified DevOps tools for CI/CD, monitoring, testing, and infrastructure as code.",
      image: DevOpsImg,
      imagePosition: "right"
    },
    {
      title: "Oracle Cloud Analytics",
      circleImage: AnalyticsCircleImage,
      description: "Empowers data-driven decisions through visualization, self-service BI, and predictive insights.",
      image: OracleCloudAnalyticsImg,
      imagePosition: "left"
    }
  ];

  return (
    <>
      {/* Hero Banner Section */}
      <div className="erp-hero-banner">
        <img src={HeroBannerImg} alt="Oracle ERP Services Hero" className="erp-hero-image" />
        <div className="erp-hero-overlay">
          <h1 className="erp-hero-title">Oracle ERP Services</h1>
        </div>
      </div>

      <div className="erp-services-container">
        {/* <p className="erp-intro">
          Our comprehensive Oracle ERP services help businesses streamline operations, 
          enhance productivity, and drive digital transformation.
        </p> */}
        
        <div className="services-timeline">
        <div className="timeline-line">
          {services.map((service, index) => (
            <div key={`dot-${index}`} className="timeline-dot"></div>
          ))}
        </div>
        
        {services.map((service, index) => {
          const contentPosition = index % 2 === 0 ? 'left' : 'right';
          const imagePosition = service.imagePosition;
          
          return (
            <div key={index} className="service-row">
              {imagePosition === "left" && service.image && (
                <div className="service-image-wrapper left">
                  <img src={service.image} alt={`${service.title} illustration`} />
                </div>
              )}
              
              <div className={`service-content-wrapper ${contentPosition}`}>
                <div className="service-content">
                  <div className="icon-circle">
                    <img src={service.circleImage} alt={`${service.title} icon`} className="circle-image" />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
              
              {imagePosition === "right" && service.image && (
                <div className="service-image-wrapper right">
                  <img src={service.image} alt={`${service.title} illustration`} />
                </div>
              )}
            </div>
          );
        })}
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default ERPServices;
