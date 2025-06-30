import React, { useRef, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./Home.css";
import { FaMicrochip, FaDatabase, FaUserTie, FaShieldAlt, FaTools, FaMoneyBill, FaUserCog, FaEye, FaDesktop, FaChalkboardTeacher } from "react-icons/fa";
import Footer from "../../components/Footer";
import aboutUsImg from '../../assets/Home/aboutus1.jpg';
import aiProductsImg from '../../assets/Portfolio/AI Products.jpg';
import dataServicesImg from '../../assets/Portfolio/Data Services.avif';
import aiConsultingImg from '../../assets/Portfolio/Ai Consulting.jpg';
import cyberSecurityImg from '../../assets/Portfolio/Cyber security.avif';
import erpImg from '../../assets/Portfolio/ERP.jpg';
import technoFinancialImg from '../../assets/Portfolio/Techno Financial Services.webp';
import digitalWorkersImg from '../../assets/Portfolio/Digital Workers.jpg';
import visionImg from '../../assets/Portfolio/Vision.jpg';
import itSolutionsImg from '../../assets/Portfolio/Corporate.jpg';
import trainingImg from '../../assets/Portfolio/Training.webp';
import trainingDsImg from '../../assets/Portfolio/training-ds.webp';
import trainingCyberImg from '../../assets/Portfolio/training-cyber.jpg';
import technologyImg from '../../assets/Home/Technology.jpg';
import dataAnalyticsImg from '../../assets/Home/Data.jpeg';
import consultingImg from '../../assets/Home/consulting.jpg';
import cyberSecurityMainImg from '../../assets/Home/cyber-security.jpg';
import trainingMainImg from '../../assets/Home/Training.jpg';
import resourcesImg from '../../assets/Home/resources.webp';
import strategyImg from '../../assets/Home/Strategy.webp';
import microArrowImg from '../../assets/Home/micro-arrow.jpg';
import erpCloudImg from '../../assets/Home/erp-cloud-integration.webp';
import roboticImg from '../../assets/Home/robotics.jpeg';
import digiWorkImg from '../../assets/Home/Digi work.jpg';
import visualAiImg from '../../assets/Home/Visual Ai.avif';
import heroVideo1 from '../../assets/Home/hero-overlay.mp4';
import lapsecVideo from '../../assets/Products/Lapsec/lapsec.mp4';
import auditVideo from '../../assets/Home/Audit.mp4';
import grcVideo from '../../assets/Home/grc.mp4';

const portfolioItems = [
  { icon: <FaMicrochip />, label: "AI PRODUCTS" },
  { icon: <FaDatabase />, label: "DATA SERVICES" },
  { icon: <FaUserTie />, label: "AI CONSULTING SERVICE" },
  { icon: <FaShieldAlt />, label: "CYBERSECURITY SERVICES" },
  { icon: <FaTools />, label: "ERP IMPLEMENTATION & MAINTENANCE" },
  { icon: <FaMoneyBill />, label: "TECHNO FINANCIAL SERVICES" },
  { icon: <FaUserCog />, label: "DIGITAL WORKERS" },
  { icon: <FaEye />, label: "AI BASED VISION SOLUTIONS" },
  { icon: <FaDesktop />, label: "IT SOLUTIONS & SERVICES" },
  { icon: <FaChalkboardTeacher />, label: "TRAINING CYBERSECURITY,DATA SCIENCES,AI & ML" },
];

const AnimatedHeroTitle = ({ text }) => {
  const [isVisible, setIsVisible] = useState(false);
  const titleRef = useRef(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.5 }
    );
    if (titleRef.current) {
      observer.observe(titleRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <h1 ref={titleRef} className={`hero-title-animated${isVisible ? " hero-title-animated--visible" : ""}`}>
      {text.split("").map((char, idx) => (
        char === "V" && idx === 0 ? (
          <span
            key={idx}
            className="hero-title-letter hero-title-v-red"
            style={isVisible ? { animationDelay: `${idx * 0.07 + 0.2}s` } : {}}
          >
            {char}
          </span>
        ) : (
          <span
            key={idx}
            className="hero-title-letter"
            style={isVisible ? { animationDelay: `${idx * 0.07 + 0.2}s` } : {}}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        )
      ))}
    </h1>
  );
};

const AnimatedHeroTagline = ({ text }) => {
  const [isVisible, setIsVisible] = useState(false);
  const taglineRef = useRef(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.5 }
    );
    if (taglineRef.current) {
      observer.observe(taglineRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <p ref={taglineRef} className={`hero-subtext-animated${isVisible ? " hero-subtext-animated--visible" : ""} hero-subtext`}>
      {text.split(" ").map((word, idx) => (
        <span
          key={idx}
          className="hero-tagline-word"
          style={isVisible ? { animationDelay: `${idx * 0.25 + 0.2}s` } : {}}
        >
          {word + (idx !== text.split(" ").length - 1 ? "\u00A0" : "")}
        </span>
      ))}
    </p>
  );
};

const AboutAnimatedDescription = ({ text }) => {
  const [visibleSentences, setVisibleSentences] = useState([]);
  const descRef = useRef(null);
  const sentences = text.match(/[^.!?]+[.!?]+/g) || [text];

  useEffect(() => {
    let timeouts = [];
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sentences.forEach((_, idx) => {
            const timeout = setTimeout(() => {
              setVisibleSentences((prev) => {
                if (!prev.includes(idx)) return [...prev, idx];
                return prev;
              });
            }, idx * 600);
            timeouts.push(timeout);
          });
        } else {
          setVisibleSentences([]);
          timeouts.forEach(clearTimeout);
        }
      },
      { threshold: 0.3 }
    );
    if (descRef.current) observer.observe(descRef.current);
    return () => {
      observer.disconnect();
      timeouts.forEach(clearTimeout);
    };
  }, [sentences]);

  return (
    <p className="about-img-desc" ref={descRef}>
      {sentences.map((sentence, idx) => (
        <span
          key={idx}
          className={`about-desc-sentence${visibleSentences.includes(idx) ? ' about-desc-sentence--visible' : ''}`}
        >
          {sentence.trim()}&nbsp;
        </span>
      ))}
    </p>
  );
};

const Home = () => {
  const history = useHistory();
  const parallaxBgRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeCard, setActiveCard] = useState(null);
  const [hoverSection, setHoverSection] = useState(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const heroSectionRef = useRef(null);
  
  // Touch/swipe state
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  
  // Video references for all videos in the hero carousel
  const videoRefs = [
    useRef(null), // heroVideo1
    useRef(null), // lapsecVideo
    useRef(null), // auditVideo
    useRef(null), // grcVideo
  ];
  
  // Define video data with paths and titles
  const heroVideos = [
    { src: heroVideo1, title: "VARDAAN GLOBAL", subtitle: "Driven by Insight, Designed for Tomorrow", path: null },
    { src: lapsecVideo, title: "LAPSEC", subtitle: "Delivers airtight local access control and intelligent privilege enforcement—securing endpoints without slowing teams down.", path: "/lapsec" },
    { src: auditVideo, title: "PROSYNC", subtitle: "Turn bottlenecks into breakthroughs, automate critical workflows, escalates faster, and keeps compliance running like clockwork.", path: "/audit" },
    { src: grcVideo, title: "GRC", subtitle: "Transforms compliance into confidence—simplifying audits, reducing risk, and giving you control, one module at a time.", path: "/grc" }
  ];

  // Function to navigate to the next slide
  const nextSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide + 1) % heroVideos.length);
  };

  // Function to navigate to the previous slide
  const prevSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide - 1 + heroVideos.length) % heroVideos.length);
  };

  // Function to handle dot navigation
  const goToSlide = (index) => {
    setActiveSlide(index);
  };

  // Touch event handlers for swipe functionality
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
  };

  // Function to handle hero click - either play video or navigate to product page
  const handleHeroClick = () => {
    const currentVideo = videoRefs[activeSlide].current;
    
    // If it's a product video with a path, navigate to that path
    if (heroVideos[activeSlide].path) {
      history.push(heroVideos[activeSlide].path);
          }
    // Otherwise just ensure the video is playing
    else if (currentVideo) {
      currentVideo.play().catch(error => {
        console.log("Manual play error:", error);
      });
    }
  };

  // Initialize and control video playback
  useEffect(() => {
    // Function to play the active video and pause others
    const playActiveVideo = () => {
      heroVideos.forEach((_, index) => {
        const videoRef = videoRefs[index].current;
        if (videoRef) {
          if (index === activeSlide) {
            videoRef.play().catch(error => {
              console.log(`Video ${index} play error:`, error);
            });
          } else {
            videoRef.pause();
            // Reset video to beginning when not active
            videoRef.currentTime = 0;
      }
        }
      });
    };
    
    playActiveVideo();
    
    // Set up IntersectionObserver to play active video when it's visible
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          playActiveVideo();
        }
      },
      { threshold: 0.1 }
    );
    
    // Observe the hero section
    const heroSection = document.querySelector('.hero-lion-section');
    if (heroSection) {
      observer.observe(heroSection);
    }
    
    // Auto-advance slides every 8 seconds for a slideshow effect
    const slideTimer = setInterval(() => {
      nextSlide();
    }, 8000);
    
    // Add a document click handler to help with autoplay issues on some browsers
    const handleDocumentClick = () => {
      playActiveVideo();
    };
    document.addEventListener('click', handleDocumentClick, { once: true });
    
    return () => {
      clearInterval(slideTimer);
      document.removeEventListener('click', handleDocumentClick);
      
      if (heroSection) {
        observer.unobserve(heroSection);
      }
      
      // Pause all videos on cleanup
      heroVideos.forEach((_, index) => {
        const videoRef = videoRefs[index].current;
        if (videoRef) {
          videoRef.pause();
        }
      });
    };
  }, [activeSlide, heroVideos]);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxBgRef.current) {
        const scrolled = window.scrollY;
        parallaxBgRef.current.style.transform = `translateY(${scrolled * 0.3}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCardClick = (path, cardId) => {
    setActiveCard(cardId);
    
    setTimeout(() => {
      history.push(path);
    }, 600);
  };

  const handleSectionClick = (path, sectionId) => {
    setActiveCard(sectionId);
    
    setTimeout(() => {
      history.push(path);
    }, 600);
  };

  const handleContentHover = (sectionId) => {
    console.log("Content hover:", sectionId);
    setHoverSection(sectionId);
  };

  const handleContentHoverEnd = () => {
    console.log("Content hover end");
    setHoverSection(null);
  };

  return (
    <div className="home-main-container">
      <section 
        className="hero-lion-section"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div className="video-overlay">
          {/* Render all videos */}
          {heroVideos.map((video, index) => (
            <video 
              key={index}
              ref={videoRefs[index]}
              className={`hero-background-video ${activeSlide === index ? "active" : ""}`}
              autoPlay
              muted 
              loop
              playsInline
              preload="auto"
              onClick={handleHeroClick}
            >
              <source src={video.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ))}
          
          {/* Overlay content with dynamic titles */}
          <div className="video-overlay-content" onClick={handleHeroClick}>
            <h1 className="hero-lion-title">{heroVideos[activeSlide].title}</h1>
            <p className="hero-lion-subtitle">{heroVideos[activeSlide].subtitle}</p>
            
            {/* Show "Learn More" button only for product videos */}
            {heroVideos[activeSlide].path && (
              <button className="hero-cta-button">Learn More</button>
            )}
            </div>
          
          {/* Navigation controls */}
          <div className="hero-controls">
            <div className="hero-dots">
              {heroVideos.map((_, index) => (
                <button 
                  key={index}
                  className={`hero-dot ${activeSlide === index ? "active" : ""}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    goToSlide(index);
                  }}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="about-section-img">
        <div className="about-img-grid">
          <div className="about-img-left">
            
            <h1 className="about-img-title">
              Decades of <span className="about-img-highlight">domain expertise</span> shaping the future of finance and technology
            </h1>
            <AboutAnimatedDescription text="We have built a strong foundation in asset assessment, technical due diligence, and enterprise valuation. Our journey has evolved to embrace future-ready capabilities in data science, artificial intelligence, cybersecurity, ERP solutions, digital transformation, camera vision-based AI, and broader IT services." />
          </div>
          <div className="about-img-right">
            <div className="about-img-blob">
              <img src={aboutUsImg} alt="About us" className="about-img-main" />
              <div className="about-img-dots"></div>
            </div>
          </div>
        </div>
      </section>
  
      <section className="portfolio-section">
  <h2 className="portfolio-title">Portfolio</h2>
  <div className="portfolio-cards">
    
    <div className="portfolio-row">
      <div 
        className={`portfolio-card-large ${activeCard === 'ai-products' ? 'active' : ''}`} 
        onClick={() => handleCardClick('/grc', 'ai-products')} 
        style={{cursor: 'pointer'}}
      >
        <div className="portfolio-card-image">
          <img src={aiProductsImg} alt="AI Products" />
          <div className="portfolio-card-overlay">
            <h3 className="portfolio-card-heading">AI PRODUCTS</h3>
          </div>
        </div>
      </div>
      <div 
        className={`portfolio-card-large ${activeCard === 'data-services' ? 'active' : ''}`} 
        onClick={() => handleCardClick('/data-services', 'data-services')} 
        style={{cursor: 'pointer'}}
      >
        <div className="portfolio-card-image">
          <img src={dataServicesImg} alt="Data Services" />
          <div className="portfolio-card-overlay">
            <h3 className="portfolio-card-heading">DATA SERVICES</h3>
          </div>
        </div>
      </div>
    </div>
    
    <div className="portfolio-row">
      <div 
        className={`portfolio-card-small ${activeCard === 'ai-consulting' ? 'active' : ''}`} 
        onClick={() => handleCardClick('/ai-consulting', 'ai-consulting')} 
        style={{cursor: 'pointer'}}
      >
        <div className="portfolio-card-image">
          <img src={aiConsultingImg} alt="AI Consulting" />
          <div className="portfolio-card-overlay">
            <h3 className="portfolio-card-heading">AI CONSULTING SERVICE</h3>
          </div>
        </div>
      </div>
      <div 
        className={`portfolio-card-small ${activeCard === 'cybersecurity' ? 'active' : ''}`} 
        onClick={() => handleCardClick('/cybersecurity-services', 'cybersecurity')} 
        style={{cursor: 'pointer'}}
      >
        <div className="portfolio-card-image">
          <img src={cyberSecurityImg} alt="Cybersecurity" />
          <div className="portfolio-card-overlay">
            <h3 className="portfolio-card-heading">CYBERSECURITY SERVICE</h3>
          </div>
        </div>
      </div>
      <div 
        className={`portfolio-card-small ${activeCard === 'erp' ? 'active' : ''}`} 
        onClick={() => handleCardClick('/erp-services', 'erp')} 
        style={{cursor: 'pointer'}}
      >
        <div className="portfolio-card-image">
          <img src={erpImg} alt="ERP Implementation" />
          <div className="portfolio-card-overlay">
            <h3 className="portfolio-card-heading">ERP IMPLEMENTATION & MAINTENANCE</h3>
          </div>
        </div>
      </div>
    </div>
    
    <div className="portfolio-row">
      <div 
        className={`portfolio-card-large ${activeCard === 'techno-financial' ? 'active' : ''}`} 
        onClick={() => handleCardClick('/techno-financial', 'techno-financial')} 
        style={{cursor: 'pointer'}}
      >
        <div className="portfolio-card-image">
          <img src={technoFinancialImg} alt="Techno Financial Services" />
          <div className="portfolio-card-overlay">
            <h3 className="portfolio-card-heading">TECHNO FINANCIAL SERVICES</h3>
          </div>
        </div>
      </div>
      <div 
        className={`portfolio-card-large ${activeCard === 'digital-workers' ? 'active' : ''}`} 
        onClick={() => handleCardClick('/robotics', 'digital-workers')} 
        style={{cursor: 'pointer'}}
      >
        <div className="portfolio-card-image">
          <img src={digitalWorkersImg} alt="Digital Workers" />
          <div className="portfolio-card-overlay">
            <h3 className="portfolio-card-heading">DIGITAL WORKERS</h3>
          </div>
        </div>
      </div>
    </div>
    
    <div className="portfolio-row">
      <div 
        className={`portfolio-card-small ${activeCard === 'vision' ? 'active' : ''}`} 
        onClick={() => handleCardClick('/ai-consulting', 'vision')} 
        style={{cursor: 'pointer'}}
      >
        <div className="portfolio-card-image">
          <img src={visionImg} alt="AI Based Vision Solutions" />
          <div className="portfolio-card-overlay">
            <h3 className="portfolio-card-heading">AI BASED VISION SOLUTIONS</h3>
          </div>
        </div>
      </div>
      <div 
        className={`portfolio-card-small ${activeCard === 'it-solutions' ? 'active' : ''}`} 
        onClick={() => handleCardClick('/data-services', 'it-solutions')} 
        style={{cursor: 'pointer'}}
      >
        <div className="portfolio-card-image">
          <img src={itSolutionsImg} alt="IT Solutions & Services" />
          <div className="portfolio-card-overlay">
            <h3 className="portfolio-card-heading">IT SOLUTIONS & SERVICES</h3>
          </div>
        </div>
      </div>
      <div 
        className={`portfolio-card-small ${activeCard === 'training' ? 'active' : ''}`} 
        onClick={() => handleCardClick('/training-services', 'training')} 
        style={{cursor: 'pointer'}}
      >
        <div className="portfolio-card-image">
          <img src={trainingImg} alt="Training" />
          <div className="portfolio-card-overlay">
            <h3 className="portfolio-card-heading">TRAINING</h3>
          </div>
        </div>
      </div>
    </div>
    
    <div className="portfolio-row">
      <div 
        className={`portfolio-card-large ${activeCard === 'ds-training' ? 'active' : ''}`} 
        onClick={() => handleCardClick('/training-services', 'ds-training')} 
        style={{cursor: 'pointer'}}
      >
        <div className="portfolio-card-image">
          <img src={trainingDsImg} alt="Data Science Training" />
          <div className="portfolio-card-overlay">
            <h3 className="portfolio-card-heading">DATA SCIENCE TRAINING</h3>
          </div>
        </div>
      </div>
      <div 
        className={`portfolio-card-large ${activeCard === 'cyber-training' ? 'active' : ''}`} 
        onClick={() => handleCardClick('/training-services', 'cyber-training')} 
        style={{cursor: 'pointer'}}
      >
        <div className="portfolio-card-image">
          <img src={trainingCyberImg} alt="Cybersecurity Training" />
          <div className="portfolio-card-overlay">
            <h3 className="portfolio-card-heading">CYBERSECURITY TRAINING</h3>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</section>
     
<section className="what-we-do-section">
  <h2 className="what-we-do-title">What We Do</h2>
  
  <div className="what-we-do-container">
    <div 
      className={`what-we-do-image-side ${activeCard === 'ai-products' ? 'active' : ''} ${hoverSection === 'ai-products' ? 'content-hover' : ''}`} 
      onClick={() => handleSectionClick('/grc', 'ai-products')} 
      style={{cursor: 'pointer'}}
    >
      <img src={technologyImg} alt="AI Products" className="what-we-do-image" />
    </div>
    <div 
      className="what-we-do-content-side"
      onClick={() => handleSectionClick('/grc', 'ai-products')}
      onMouseEnter={() => handleContentHover('ai-products')}
      onMouseLeave={handleContentHoverEnd}
      style={{cursor: 'pointer'}}
    >
      <h3 className="what-we-do-heading">AI PRODUCTS</h3>
      <p className="what-we-do-description">
        We leverage cutting-edge artificial intelligence to transform your business operations, 
        providing smart solutions that drive efficiency and innovation across all sectors.
      </p>
      <button className="what-we-do-btn" onClick={() => handleSectionClick('/grc', 'ai-products')}>Learn More</button>
    </div>
  </div>

  <div className="what-we-do-container">
    <div 
      className={`what-we-do-image-side ${activeCard === 'data-services' ? 'active' : ''} ${hoverSection === 'data-services' ? 'content-hover' : ''}`} 
      onClick={() => handleSectionClick('/data-services', 'data-services')} 
      style={{cursor: 'pointer'}}
    >
      <img src={dataAnalyticsImg} alt="Data Analytics" className="what-we-do-image" />
    </div>
    <div 
      className="what-we-do-content-side"
      onClick={() => handleSectionClick('/data-services', 'data-services')}
      onMouseEnter={() => handleContentHover('data-services')}
      onMouseLeave={handleContentHoverEnd}
      style={{cursor: 'pointer'}}
    >
      <h3 className="what-we-do-heading">DATA ANALYTICS</h3>
      <p className="what-we-do-description">
        Transform raw data into actionable insights with our comprehensive data analytics solutions, 
        empowering data-driven decision making across your organization.
      </p>
      <button className="what-we-do-btn" onClick={() => handleSectionClick('/data-services', 'data-services')}>Learn More</button>
    </div>
  </div>

  <div className="what-we-do-container">
    <div 
      className={`what-we-do-image-side ${activeCard === 'ai-consulting' ? 'active' : ''} ${hoverSection === 'ai-consulting' ? 'content-hover' : ''}`} 
      onClick={() => handleSectionClick('/ai-consulting', 'ai-consulting')} 
      style={{cursor: 'pointer'}}
    >
      <img src={consultingImg} alt="AI Consulting Services" className="what-we-do-image" />
    </div>
    <div 
      className="what-we-do-content-side"
      onClick={() => handleSectionClick('/ai-consulting', 'ai-consulting')}
      onMouseEnter={() => handleContentHover('ai-consulting')}
      onMouseLeave={handleContentHoverEnd}
      style={{cursor: 'pointer'}}
    >
      <h3 className="what-we-do-heading">AI CONSULTING SERVICES</h3>
      <p className="what-we-do-description">
        Expert strategic guidance and implementation support to help organizations successfully 
        adopt and optimize AI technologies for maximum business impact and competitive advantage.
      </p>
      <button className="what-we-do-btn" onClick={() => handleSectionClick('/ai-consulting', 'ai-consulting')}>Learn More</button>
    </div>
  </div>

  <div className="what-we-do-container">
    <div 
      className={`what-we-do-image-side ${activeCard === 'cybersecurity' ? 'active' : ''} ${hoverSection === 'cybersecurity' ? 'content-hover' : ''}`} 
      onClick={() => handleSectionClick('/cybersecurity-services', 'cybersecurity')} 
      style={{cursor: 'pointer'}}
    >
      <img src={cyberSecurityMainImg} alt="Cybersecurity Solutions" className="what-we-do-image" />
    </div>
    <div 
      className="what-we-do-content-side"
      onClick={() => handleSectionClick('/cybersecurity-services', 'cybersecurity')}
      onMouseEnter={() => handleContentHover('cybersecurity')}
      onMouseLeave={handleContentHoverEnd}
      style={{cursor: 'pointer'}}
    >
      <h3 className="what-we-do-heading">CYBERSECURITY CONSULTING</h3>
      <p className="what-we-do-description">
        Comprehensive cybersecurity solutions to protect your digital assets and infrastructure, 
        ensuring robust defense against evolving threats and maintaining business continuity.
      </p>
      <button className="what-we-do-btn" onClick={() => handleSectionClick('/cybersecurity-services', 'cybersecurity')}>Learn More</button>
    </div>
  </div>

  <div className="what-we-do-container">
    <div 
      className={`what-we-do-image-side ${activeCard === 'training' ? 'active' : ''} ${hoverSection === 'training' ? 'content-hover' : ''}`} 
      onClick={() => handleSectionClick('/training-services', 'training')} 
      style={{cursor: 'pointer'}}
    >
      <img src={trainingMainImg} alt="Training Programs" className="what-we-do-image" />
    </div>
    <div 
      className="what-we-do-content-side"
      onClick={() => handleSectionClick('/training-services', 'training')}
      onMouseEnter={() => handleContentHover('training')}
      onMouseLeave={handleContentHoverEnd}
      style={{cursor: 'pointer'}}
    >
      <h3 className="what-we-do-heading">TRAINING SERVICES</h3>
      <p className="what-we-do-description">
        Comprehensive training programs in cybersecurity, data sciences, AI & ML designed to 
        build expertise and empower professionals with cutting-edge skills for the digital future.
      </p>
      <button className="what-we-do-btn" onClick={() => handleSectionClick('/training-services', 'training')}>Learn More</button>
    </div>
  </div>

  <div className="what-we-do-container">
    <div 
      className={`what-we-do-image-side ${activeCard === 'techno-financial' ? 'active' : ''} ${hoverSection === 'techno-financial' ? 'content-hover' : ''}`} 
      onClick={() => handleSectionClick('/techno-financial', 'techno-financial')} 
      style={{cursor: 'pointer'}}
    >
      <img src={resourcesImg} alt="Techno-Financial Services" className="what-we-do-image" />
    </div>
    <div 
      className="what-we-do-content-side"
      onClick={() => handleSectionClick('/techno-financial', 'techno-financial')}
      onMouseEnter={() => handleContentHover('techno-financial')}
      onMouseLeave={handleContentHoverEnd}
      style={{cursor: 'pointer'}}
    >
      <h3 className="what-we-do-heading">TECHNO-FINANCIAL SERVICES</h3>
      <p className="what-we-do-description">
        We offer comprehensive techno-financial services including asset valuation, audits, feasibility studies, 
        and project monitoring—ensuring regulatory compliance, financial transparency, and strategic decision support.
      </p>
      <button className="what-we-do-btn" onClick={() => handleSectionClick('/techno-financial', 'techno-financial')}>Learn More</button>
    </div>
  </div>

  <div className="what-we-do-container">
    <div 
      className={`what-we-do-image-side ${activeCard === 'data-strategy' ? 'active' : ''} ${hoverSection === 'data-strategy' ? 'content-hover' : ''}`} 
      onClick={() => handleSectionClick('/data-strategy', 'data-strategy')} 
      style={{cursor: 'pointer'}}
    >
      <img src={strategyImg} alt="Data Strategy Planning" className="what-we-do-image" />
    </div>
    <div 
      className="what-we-do-content-side"
      onClick={() => handleSectionClick('/data-strategy', 'data-strategy')}
      onMouseEnter={() => handleContentHover('data-strategy')}
      onMouseLeave={handleContentHoverEnd}
      style={{cursor: 'pointer'}}
    >
      <h3 className="what-we-do-heading">DATA STRATEGY</h3>
      <p className="what-we-do-description">
        Strategic data planning and governance frameworks designed to unlock the full potential 
        of your data assets, enabling informed decision-making and sustainable competitive advantage.
      </p>
      <button className="what-we-do-btn" onClick={() => handleSectionClick('/data-strategy', 'data-strategy')}>Learn More</button>
    </div>
  </div>

  <div className="what-we-do-container">
    <div 
      className={`what-we-do-image-side ${activeCard === 'microsoft-services' ? 'active' : ''} ${hoverSection === 'microsoft-services' ? 'content-hover' : ''}`} 
      onClick={() => handleSectionClick('/microsoft-services', 'microsoft-services')} 
      style={{cursor: 'pointer'}}
    >
      <img src={microArrowImg} alt="Micro-Scale Solutions" className="what-we-do-image" />
    </div>
    <div 
      className="what-we-do-content-side"
      onClick={() => handleSectionClick('/microsoft-services', 'microsoft-services')}
      onMouseEnter={() => handleContentHover('microsoft-services')}
      onMouseLeave={handleContentHoverEnd}
      style={{cursor: 'pointer'}}
    >
      <h3 className="what-we-do-heading">MICROSOFT SOLUTIONS</h3>
      <p className="what-we-do-description">
        Precision-engineered micro-scale solutions and targeted interventions designed to address 
        specific business challenges with pinpoint accuracy and maximum efficiency.
      </p>
      <button className="what-we-do-btn" onClick={() => handleSectionClick('/microsoft-services', 'microsoft-services')}>Learn More</button>
    </div>
  </div>

  <div className="what-we-do-container">
    <div 
      className={`what-we-do-image-side ${activeCard === 'erp-services' ? 'active' : ''} ${hoverSection === 'erp-services' ? 'content-hover' : ''}`} 
      onClick={() => handleSectionClick('/erp-services', 'erp-services')} 
      style={{cursor: 'pointer'}}
    >
      <img src={erpCloudImg} alt="ERP Cloud Integration" className="what-we-do-image" />
    </div>
    <div 
      className="what-we-do-content-side"
      onClick={() => handleSectionClick('/erp-services', 'erp-services')}
      onMouseEnter={() => handleContentHover('erp-services')}
      onMouseLeave={handleContentHoverEnd}
      style={{cursor: 'pointer'}}
    >
      <h3 className="what-we-do-heading">ERP - ORACLE SERVICES</h3>
      <p className="what-we-do-description">
        Comprehensive Oracle ERP implementation, customization, and support services designed to 
        streamline business processes, enhance operational efficiency, and drive digital transformation across enterprises.
      </p>
      <button className="what-we-do-btn" onClick={() => handleSectionClick('/erp-services', 'erp-services')}>Learn More</button>
    </div>
  </div>

  <div className="what-we-do-container">
    <div 
      className={`what-we-do-image-side ${activeCard === 'robotics' ? 'active' : ''} ${hoverSection === 'robotics' ? 'content-hover' : ''}`} 
      onClick={() => handleSectionClick('/robotics', 'robotics')} 
      style={{cursor: 'pointer'}}
    >
      <img src={roboticImg} alt="Robotics Solutions" className="what-we-do-image" />
    </div>
    <div 
      className="what-we-do-content-side"
      onClick={() => handleSectionClick('/robotics', 'robotics')}
      onMouseEnter={() => handleContentHover('robotics')}
      onMouseLeave={handleContentHoverEnd}
      style={{cursor: 'pointer'}}
    >
      <h3 className="what-we-do-heading">ROBOTICS</h3>
      <p className="what-we-do-description">
        Advanced robotics and automation solutions designed to revolutionize manufacturing, logistics, and service industries 
        through intelligent robotic systems, process automation, and AI-driven robotic workflows.
      </p>
      <button className="what-we-do-btn" onClick={() => handleSectionClick('/robotics', 'robotics')}>Learn More</button>
    </div>
  </div>

  <div className="what-we-do-container">
    <div 
      className={`what-we-do-image-side ${activeCard === 'digital-workers' ? 'active' : ''} ${hoverSection === 'digital-workers' ? 'content-hover' : ''}`} 
      onClick={() => handleSectionClick('/robotics', 'digital-workers')} 
      style={{cursor: 'pointer'}}
    >
      <img src={digiWorkImg} alt="Digital Workers Solutions" className="what-we-do-image" />
    </div>
    <div 
      className="what-we-do-content-side"
      onClick={() => handleSectionClick('/robotics', 'digital-workers')}
      onMouseEnter={() => handleContentHover('digital-workers')}
      onMouseLeave={handleContentHoverEnd}
      style={{cursor: 'pointer'}}
    >
      <h3 className="what-we-do-heading">DIGITAL WORKERS</h3>
      <p className="what-we-do-description">
        Intelligent digital workforce solutions that automate complex business processes, enhance operational efficiency, 
        and reduce manual workload through AI-powered automation and intelligent process optimization.
      </p>
      <button className="what-we-do-btn" onClick={() => handleSectionClick('/robotics', 'digital-workers')}>Learn More</button>
    </div>
  </div>
  <div className="what-we-do-container">
    <div 
      className={`what-we-do-image-side ${activeCard === 'visual-ai' ? 'active' : ''} ${hoverSection === 'visual-ai' ? 'content-hover' : ''}`} 
      onClick={() => handleSectionClick('/robotics', 'visual-ai')} 
      style={{cursor: 'pointer'}}
    >
      <img src={visualAiImg} alt="Visual AI Solutions" className="what-we-do-image" />
    </div>
    <div 
      className="what-we-do-content-side"
      onClick={() => handleSectionClick('/robotics', 'visual-ai')}
      onMouseEnter={() => handleContentHover('visual-ai')}
      onMouseLeave={handleContentHoverEnd}
      style={{cursor: 'pointer'}}
    >
      <h3 className="what-we-do-heading">VISUAL AI</h3>
      <p className="what-we-do-description">
        Advanced computer vision and visual AI technologies that enable intelligent image processing, 
        object recognition, and automated visual analysis for enhanced operational insights and decision-making.
      </p>
      <button className="what-we-do-btn" onClick={() => handleSectionClick('/robotics', 'visual-ai')}>Learn More</button>
    </div>
  </div>  
</section>

      <div className="footer-spacing"></div>
      <Footer />
    </div>
  );
};

export default Home;