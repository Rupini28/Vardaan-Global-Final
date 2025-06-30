import React from "react";
import "./Microsoft Services.css";
import Footer from "../../../components/Footer";

// Import images directly
import ConsultingImg from "../../../assets/images/Microsoft Services/Consulting.webp";
import ImplementationImg from "../../../assets/images/Microsoft Services/Microsoft Implementation.jpg";
import CustomizationImg from "../../../assets/images/Microsoft Services/Microsoft Customization1.jpg";
import IntegrationImg from "../../../assets/images/Microsoft Services/Microsoft Integration1.jpg";
import MigrationImg from "../../../assets/images/Microsoft Services/Microsoft Migration1.jpg";
import SupportImg from "../../../assets/images/Microsoft Services/Microsoft Support.jpg";
import HeroBannerImg from "../../../assets/images/Microsoft Services/Microsoft Services.webp";

const MicrosoftServices = () => {
  const microsoftServices = [
    {
      title: "Consulting",
      image: ConsultingImg,
      description: "End-to-end Microsoft Business Application consulting, from analysis to user adoption."
    },
    {
      title: "Microsoft Implementation",
      image: ImplementationImg,
      description: "Two approaches: Standard (customized) and Fast Track (quick, essential configurations)."
    },
    {
      title: "Microsoft Customization",
      image: CustomizationImg,
      description: "Tailors Dynamics 365 features to meet unique business needs and workflows."
    },
    {
      title: "Microsoft Integration",
      image: IntegrationImg,
      description: "Connects Dynamics 365 to internal and external systems including Teams, Power BI, and more."
    },
    {
      title: "Microsoft Migration",
      image: MigrationImg,
      description: "Migrates legacy systems or on-prem Dynamics to the cloud with minimal disruption."
    },
    {
      title: "Microsoft Support and Maintenance",
      image: SupportImg,
      description: "Offers operational support, proactive maintenance, upgrades, training, and issue resolution."
    }
  ];

  return (
    <div className="microsoft-services-container">
      {/* Hero Banner Section */}
      <div className="hero-banner">
        <img src={HeroBannerImg} alt="Microsoft Services" className="hero-banner-image" />
        <div className="hero-banner-overlay">
          <h1 className="microsoft-services-title">MICROSOFT SERVICES</h1>
        </div>
      </div>
      
      <div className="microsoft-services-list">
        {microsoftServices.map((service, index) => (
          <div key={index} className="microsoft-service-card">
            <div className="microsoft-service-image">
              <img src={service.image} alt={service.title} />
            </div>
            
            <div className="microsoft-service-content">
              <h3 className="microsoft-service-title">{service.title}</h3>
              <p className="microsoft-service-description">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="footer-spacing"></div>
      <Footer />
    </div>
  );
};

export default MicrosoftServices; 