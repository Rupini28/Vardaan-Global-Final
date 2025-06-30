import React, { useState, useEffect, useRef } from "react";
import "./AI Consulting Service.css";
import Footer from "../../../components/Footer";

// Import images directly - similar to DataServices.js
import AIStrategyImg from "../../../assets/images/AI Consulting services/AI Strategy Development.jpg";
import MachineLearningImg from "../../../assets/images/AI Consulting services/Machine learning.jpg";
import DataAnalysisImg from "../../../assets/images/AI Consulting services/Data Analysis and Preparation.jpg";
import PredictiveAnalyticsImg from "../../../assets/images/AI Consulting services/Predictive and Prescriptive Analytics.jpg";
import AIPoweredAutomationImg from "../../../assets/images/AI Consulting services/AI-Powered Automation.jpg";
import AIGovernanceImg from "../../../assets/images/AI Consulting services/AI Governance and Ethics.jpg";
import AITrainingImg from "../../../assets/images/AI Consulting services/AI Training and Workshops.jpg";
import AIMaintenanceImg from "../../../assets/images/AI Consulting services/AI Maintenance and Support.jpg";
import AIConsultingHeroImg from "../../../assets/images/AI Consulting services/AI Consulting Hero.jpg";

// First, try logging the image path to verify it's correct
console.log("Image path:", AIStrategyImg);
console.log("Image object:", AIStrategyImg); // Check what this outputs

const AIConsultingService = () => {
  const [activeService, setActiveService] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isSmallMobile, setIsSmallMobile] = useState(false);
  
  // Ref for scroll into view
  const serviceRefs = useRef([]);

  // Check if mobile view is active
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 992);
      setIsSmallMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  // Custom SVG Icons
  const TrendingUpIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
      <polyline points="17 6 23 6 23 12"></polyline>
    </svg>
  );

  const MonitorIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
      <line x1="8" y1="21" x2="16" y2="21"></line>
      <line x1="12" y1="17" x2="12" y2="21"></line>
    </svg>
  );

  const DatabaseIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
    </svg>
  );

  const BarChartIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="20" x2="12" y2="10"></line>
      <line x1="18" y1="20" x2="18" y2="4"></line>
      <line x1="6" y1="20" x2="6" y2="16"></line>
    </svg>
  );

  const SettingsIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3"></circle>
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
    </svg>
  );

  const ScaleIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="12 3 12 21"></polyline>
      <path d="M8 12H4l2-7 2 7"></path>
      <path d="M20 12h-4l2-7 2 7"></path>
    </svg>
  );

  const GraduationCapIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
      <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
    </svg>
  );

  const WrenchIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
    </svg>
  );

  // Chevron down icon for mobile accordion
  const ChevronDownIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="chevron-icon">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  );

  const consultingServices = [
    {
      title: "AI Strategy Development",
      description: "Enabling businesses to identify AI opportunities and create a clear roadmap for successful implementation.",
      icon: <TrendingUpIcon />,
      backgroundImage: AIStrategyImg
    },
    {
      title: "Machine Learning Model Development",
      description: "Designing, training, and deploying custom ML models to address unique business needs and drive decisions.",
      icon: <MonitorIcon />,
      backgroundImage: MachineLearningImg
    },
    {
      title: "Data Analysis and Preparation",
      description: "Cleaning, organizing, and analyzing data to ensure it's ready for AI/ML applications and actionable insights.",
      icon: <DatabaseIcon />,
      backgroundImage: DataAnalysisImg
    },
    {
      title: "Predictive and Prescriptive Analytics",
      description: "Leveraging AI to forecast trends, customer behavior, and operational outcomes for better decision-making.",
      icon: <BarChartIcon />,
      backgroundImage: PredictiveAnalyticsImg
    },
    {
      title: "AI-Powered Automation",
      description: "Optimizing workflows by implementing AI-driven automation tools that enhance efficiency and reduce manual effort.",
      icon: <SettingsIcon />,
      backgroundImage: AIPoweredAutomationImg
    },
    {
      title: "AI Governance and Ethics",
      description: "Ensuring AI systems are transparent, fair, and fully compliant with ethical standards and regulations.",
      icon: <ScaleIcon />,
      backgroundImage: AIGovernanceImg
    },
    {
      title: "AI Training and Workshops",
      description: "Providing comprehensive training to teams on AI/ML concepts, tools, and practical applications for better outcomes.",
      icon: <GraduationCapIcon />,
      backgroundImage: AITrainingImg
    },
    {
      title: "AI Maintenance and Support",
      description: "Offering continuous support to optimize, update, and ensure the long-term efficiency of AI systems.",
      icon: <WrenchIcon />,
      backgroundImage: AIMaintenanceImg
    }
  ];

  // Preload all images when component mounts
  useEffect(() => {
    const imageUrls = consultingServices.map(service => service.backgroundImage);
    imageUrls.push(AIConsultingHeroImg); // Include hero image too
    
    let loadedCount = 0;
    const totalImages = imageUrls.length;
    
    const handleImageLoad = () => {
      loadedCount++;
      if (loadedCount === totalImages) {
        setImagesLoaded(true);
      }
    };
    
    // Preload each image
    imageUrls.forEach(url => {
      const img = new Image();
      img.onload = handleImageLoad;
      img.onerror = handleImageLoad; // Count errors as loaded to prevent hanging
      img.src = url;
    });
  }, []);

  // Handle service item click (only for desktop/tablet)
  const handleServiceClick = (index) => {
    if (!isSmallMobile) {
      setActiveService(index);
    }
  };

  return (
    <>
      <div className="ai-consulting-container">
        {/* Hero Banner Section */}
        <div className="ai-consulting-hero-banner">
          <div className="ai-consulting-hero-image">
            <img src={AIConsultingHeroImg} alt="AI Consulting Services" />
          </div>
          <div className="ai-consulting-hero-content">
            <h1>AI Consulting Services</h1>
          </div>
        </div>

        <div className={`services-showcase ${isMobile ? 'mobile-view' : ''} ${isSmallMobile ? 'small-mobile-view' : ''}`}>
          {!isSmallMobile && (
            // Desktop/Tablet Layout
            <>
              <div className="services-nav">
                {consultingServices.map((service, index) => (
                  <div 
                    key={index} 
                    className={`service-item ${activeService === index ? 'active' : ''}`}
                    onClick={() => handleServiceClick(index)}
                  >
                    <div className="service-nav-icon">
                      {service.icon}
                    </div>
                    <span className="service-nav-title">{service.title}</span>
                  </div>
                ))}
              </div>
              
              <div 
                className="service-detail-container"
                data-has-image={consultingServices[activeService].backgroundImage ? "true" : "false"}
              >
                <div className="service-detail-bg">
                  <img 
                    key={activeService}
                    src={consultingServices[activeService].backgroundImage} 
                    alt={consultingServices[activeService].title} 
                    style={{
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      zIndex: 1
                    }}
                  />
                  <div className="service-detail-overlay"></div>
                </div>
                <div className="service-detail-content">
                  <div className="service-detail-icon">
                    {consultingServices[activeService].icon}
                  </div>
                  <h2 className="service-detail-title">{consultingServices[activeService].title}</h2>
                  <div className="service-detail-line"></div>
                  <p className="service-detail-description">{consultingServices[activeService].description}</p>
                </div>
              </div>
            </>
          )}
          
          {isSmallMobile && (
            // Small Mobile Layout - All services stacked vertically
            <div className="mobile-stacked-services">
              {consultingServices.map((service, index) => (
                <div 
                  key={index}
                  className="mobile-service-card"
                >
                  <div className="mobile-service-header">
                    <div className="service-nav-icon">
                      {service.icon}
                    </div>
                    <h3 className="mobile-service-title">{service.title}</h3>
                  </div>
                  
                  <div 
                    className="mobile-service-detail"
                    data-has-image={service.backgroundImage ? "true" : "false"}
                  >
                    <div className="service-detail-bg">
                      <img 
                        src={service.backgroundImage} 
                        alt={service.title} 
                        style={{
                          width: '100%', 
                          height: '100%', 
                          objectFit: 'cover',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          zIndex: 1
                        }}
                      />
                      <div className="service-detail-overlay"></div>
                    </div>
                    <div className="service-detail-content">
                      <div className="service-detail-line"></div>
                      <p className="service-detail-description">{service.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AIConsultingService;