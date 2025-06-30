import React, { useState, useRef, useEffect } from "react";
import "./Robotics.css";
// Try with a direct import path
import roboticsVideo from "../../../assets/Products/robotics.mp4";
import robotics1 from "../../../assets/Products/robotics 1.webp";
import robotics2 from "../../../assets/Products/robotics 2.webp";
import robotics3 from "../../../assets/Products/robotics 3.webp";
import apaImage from "../../../assets/Products/apa.jpg";
import Footer from "../../../components/Footer";

const Robotics = () => {
  // Log the video source to check if it's imported correctly
  console.log("Video source:", roboticsVideo);
  const [showApaDetails, setShowApaDetails] = useState(false);
  const [showDigitalWorkers, setShowDigitalWorkers] = useState(false);
  const [showVisualAI, setShowVisualAI] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const detailsRef = useRef(null);
  const digitalWorkersRef = useRef(null);
  const visualAIRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    if (showApaDetails && detailsRef.current) {
      detailsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    if (showDigitalWorkers && digitalWorkersRef.current) {
      digitalWorkersRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    if (showVisualAI && visualAIRef.current) {
      visualAIRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [showApaDetails, showDigitalWorkers, showVisualAI]);

  // Video playback handling
  useEffect(() => {
    // Check if video file exists
    fetch(roboticsVideo)
      .then(response => {
        if (!response.ok) {
          console.error("Video file not found or not accessible");
          setVideoError(true);
        } else {
          console.log("Video file exists and is accessible");
        }
      })
      .catch(error => {
        console.error("Error checking video file:", error);
        setVideoError(true);
      });

    const playVideo = () => {
      if (videoRef.current) {
        videoRef.current.play().catch(error => {
          console.log("Video play error:", error);
          setVideoError(true);
        });
      }
    };
    
    // Play video when component mounts
    playVideo();
    
    // Play video when it becomes visible in viewport
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          playVideo();
        }
      },
      { threshold: 0.1 }
    );
    
    if (videoRef.current) {
      observer.observe(videoRef.current);
    }
    
    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  // Handle video errors
  const handleVideoError = () => {
    console.log("Video failed to load");
    setVideoError(true);
  };
  
  // Handle video loaded
  const handleVideoLoaded = () => {
    console.log("Video loaded successfully");
    setVideoLoaded(true);
    setVideoError(false);
  };

  // SVG icons inline
  const robotIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="10" rx="2" />
      <circle cx="12" cy="5" r="2" />
      <path d="M12 7v4" />
      <line x1="8" y1="16" x2="8" y2="16" />
      <line x1="16" y1="16" x2="16" y2="16" />
      <rect x="7" y="13" width="2" height="2" />
      <rect x="15" y="13" width="2" height="2" />
    </svg>
  );

  const digitalWorkerIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#e74c3c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a3 3 0 0 0-3 3v1a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" />
      <path d="M19 9H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2z" />
      <path d="M12 17v4" />
      <path d="M8 21h8" />
      <circle cx="9" cy="13" r="1" />
      <circle cx="15" cy="13" r="1" />
      <path d="M10 16h4" />
    </svg>
  );

  const integrationIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );

  const visualAiIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );

  const testingIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 3v4a1 1 0 0 0 1 1h4" />
      <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
      <path d="M9 17h6" />
      <path d="M9 13h6" />
      <path d="M12 9v8" />
    </svg>
  );

  const dataIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="18" rx="2" ry="2" />
      <line x1="9" y1="3" x2="9" y2="21" />
      <path d="M13 8h5" />
      <path d="M13 12h5" />
      <path d="M13 16h5" />
      <path d="M5 8h2" />
      <path d="M5 12h2" />
      <path d="M5 16h2" />
    </svg>
  );

  const devopsIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8a3 3 0 0 0-3-3h-1a3 3 0 0 0-3 3v1a3 3 0 0 0 3 3h1a3 3 0 0 0 3-3z" />
      <path d="M12 12a3 3 0 0 0-3 3v1a3 3 0 0 0 3 3h1a3 3 0 0 0 3-3v-1a3 3 0 0 0-3-3z" />
      <path d="M5 8a3 3 0 0 1 3-3h1a3 3 0 0 1 3 3v1a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3z" />
      <path d="M12 12a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3v-1a3 3 0 0 1 3-3h1a3 3 0 0 1 3 3z" />
    </svg>
  );

  return (
    <div className="robotics-container">
      {/* Overlay Hero Section with Video */}
      <section className="robotics-hero">
        <div className="robotics-video-overlay">
          <video
            ref={videoRef}
            className="robotics-hero-video"
            src={roboticsVideo}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          />
          <div className="robotics-video-overlay-content">
            <h1 className="robotics-title">Robotic Solutions & Services</h1>
            <p className="robotics-subtitle">Innovative robotic solutions to transform your business operations</p>
          </div>
        </div>
      </section>
      
      {/* Hexagon Grid Section */}
      <div className="hexagon-grid">
        <div className="hexagon-row">
          <div className="hexagon">
            <div className="hexagon-outer">
              <svg viewBox="0 0 100 100">
                <path d="M50 0 L93.3 25 L93.3 75 L50 100 L6.7 75 L6.7 25 Z" stroke="#000" strokeWidth="1" fill="rgba(0,0,0,0.05)"></path>
              </svg>
              <div className="hexagon-inner">
                {robotIcon}
              </div>
            </div>
            <h3 className="hexagon-title">Agentic Process Automation</h3>
            <p className="hexagon-description">Automating complex processes with AI agents that adapt, learn, and act autonomously.</p>
          </div>
          
          <div className="hexagon" onClick={() => setShowDigitalWorkers(!showDigitalWorkers)}>
            <div className="hexagon-outer red">
              <svg viewBox="0 0 100 100">
                <path d="M50 0 L93.3 25 L93.3 75 L50 100 L6.7 75 L6.7 25 Z" stroke="#e74c3c" strokeWidth="2" fill="rgba(231,76,60,0.05)"></path>
              </svg>
              <div className="hexagon-inner">
                {digitalWorkerIcon}
              </div>
            </div>
            <h3 className="hexagon-title">Digital Worker as a Service (DWaaS)</h3>
            <p className="hexagon-description">Deploying AI-powered digital workers tailored to your workflows - scalable, secure, and always on.</p>
          </div>
          
          <div className="hexagon">
            <div className="hexagon-outer">
              <svg viewBox="0 0 100 100">
                <path d="M50 0 L93.3 25 L93.3 75 L50 100 L6.7 75 L6.7 25 Z" stroke="#000" strokeWidth="1" fill="rgba(0,0,0,0.05)"></path>
              </svg>
              <div className="hexagon-inner">
                {integrationIcon}
              </div>
            </div>
            <h3 className="hexagon-title">Integration Services</h3>
            <p className="hexagon-description">Building smart, connected ecosystems with AI-enhanced connectors that unify apps and data across your stack.</p>
          </div>
          
          <div className="hexagon" onClick={() => setShowVisualAI(!showVisualAI)}>
            <div className="hexagon-outer">
              <svg viewBox="0 0 100 100">
                <path d="M50 0 L93.3 25 L93.3 75 L50 100 L6.7 75 L6.7 25 Z" stroke="#000" strokeWidth="1" fill="rgba(0,0,0,0.05)"></path>
              </svg>
              <div className="hexagon-inner">
                {visualAiIcon}
              </div>
            </div>
            <h3 className="hexagon-title">Visual AI (KamerAI)</h3>
            <p className="hexagon-description">Applying computer vision to analyse documents, images, and videos—automating what once needed human eyes.</p>
          </div>
        </div>
        
        <div className="hexagon-row">
          <div className="hexagon">
            <div className="hexagon-outer">
              <svg viewBox="0 0 100 100">
                <path d="M50 0 L93.3 25 L93.3 75 L50 100 L6.7 75 L6.7 25 Z" stroke="#000" strokeWidth="1" fill="rgba(0,0,0,0.05)"></path>
              </svg>
              <div className="hexagon-inner">
                {testingIcon}
              </div>
            </div>
            <h3 className="hexagon-title">Digital Testing</h3>
            <p className="hexagon-description">Accelerating quality with AI-led test automation, intelligent test data management, and faster release cycles.</p>
          </div>
          
          <div className="hexagon">
            <div className="hexagon-outer">
              <svg viewBox="0 0 100 100">
                <path d="M50 0 L93.3 25 L93.3 75 L50 100 L6.7 75 L6.7 25 Z" stroke="#000" strokeWidth="1" fill="rgba(0,0,0,0.05)"></path>
              </svg>
              <div className="hexagon-inner">
                {dataIcon}
              </div>
            </div>
            <h3 className="hexagon-title">Data & Analytics</h3>
            <p className="hexagon-description">Delivering real-time insights using AI-driven dashboards, predictive models, and intelligent data pipelines.</p>
          </div>
          
          <div className="hexagon">
            <div className="hexagon-outer red">
              <svg viewBox="0 0 100 100">
                <path d="M50 0 L93.3 25 L93.3 75 L50 100 L6.7 75 L6.7 25 Z" stroke="#e74c3c" strokeWidth="2" fill="rgba(231,76,60,0.05)"></path>
              </svg>
              <div className="hexagon-inner">
                {devopsIcon}
              </div>
            </div>
            <h3 className="hexagon-title">DevOps & Legacy</h3>
            <p className="hexagon-description">Modernizing delivery with AI-assisted DevOps, while extending the life and value of legacy systems.</p>
          </div>
        </div>
      </div>
      
      <div className="robotics-content">
        <div className="section">
          <h2>Robotic Solutions</h2>
          <div className="features">
            <div className="feature" onClick={() => setShowApaDetails(!showApaDetails)}>
              <div className="feature-image">
                <img src={robotics1} alt="Process Automation" />
              </div>
              <div className="feature-content">
                <h3>Agentic Process Automation</h3>
                <p>Automating complex processes with AI agents that adapt, learn, and act autonomously.</p>
                <div className="click-here">
                  <span>Click for details</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 16 16 12 12 8" />
                    <line x1="8" y1="12" x2="16" y2="12" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="feature" onClick={() => setShowDigitalWorkers(!showDigitalWorkers)}>
              <div className="feature-image">
                <img src={robotics2} alt="Custom Robotics" />
              </div>
              <div className="feature-content">
                <h3>Digital Workers</h3>
                <p>Digital workers are AI-powered software bots designed to automate repetitive, rule-based tasks, enhancing productivity and reducing human error in business operations.</p>
                <div className="click-here">
                  <span>Click for details</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 16 16 12 12 8" />
                    <line x1="8" y1="12" x2="16" y2="12" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="feature" onClick={() => setShowVisualAI(!showVisualAI)}>
              <div className="feature-image">
                <img src={robotics3} alt="Integration Services" />
              </div>
              <div className="feature-content">
                <h3>Visual AI</h3>
                <p>Visual AI using KamerAI platform leverages artificial intelligence and convolutional neural networks to deliver enhanced industrial automation & video analytics</p>
                <div className="click-here">
                  <span>Click for details</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 16 16 12 12 8" />
                    <line x1="8" y1="12" x2="16" y2="12" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Agentic Process Automation Details Section */}
      {showApaDetails && (
        <div className="detail-section apa-details" ref={detailsRef}>
          <div className="detail-container">
            <div className="detail-image">
              <img src={apaImage} alt="Agentic Process Automation" />
            </div>
            <div className="detail-content">
              <h2>Agentic Process Automation</h2>
              <p>
                Agentic Process Automation refers to the next evolution of automation where AI-driven agents go beyond executing predefined rules. These intelligent agents are designed to observe, learn, adapt, and make autonomous decisions based on context and goals.
              </p>
              <p>
                Unlike traditional RPA (Robotic Process Automation), which follows static workflows, agentic systems can:
              </p>
              <ul>
                <li>Understand complex scenarios and adjust their actions dynamically</li>
                <li>Interact with multiple systems and data sources intelligently</li>
                <li>Collaborate with humans and other digital agents in real-time</li>
                <li>Continuously improve through machine learning and feedback loops</li>
              </ul>
              <p>
                This enables businesses to automate non-linear, judgment-based tasks, boosting agility, reducing manual intervention, and unlocking deeper operational efficiencies.
              </p>
            </div>
          </div>
        </div>
      )}
      
      {/* Digital Workers Details Section */}
      {showDigitalWorkers && (
        <div className="detail-section digital-workers-details" ref={digitalWorkersRef}>
          <div className="detail-container">
            <div className="detail-content full-width">
              <h2 className="digital-workers-title">DIGITAL WORKERS</h2>
              
              <div className="digital-workers-category">
                <div className="category-header">
                  <h3>Chemical Industry PSRA Agents</h3>
                </div>
                <div className="category-items">
                  <div className="worker-item">
                    <h4>Milo, Classification Manager</h4>
                  </div>
                  <div className="worker-item">
                    <h4>Marie, SDS Manager</h4>
                  </div>
                  <div className="worker-item">
                    <h4>Nora, Compliance Auditor</h4>
                  </div>
                  <div className="worker-item">
                    <h4>Carl, COA Manager</h4>
                  </div>
                  <div className="worker-item">
                    <h4>Sophie, Supplier Assistant</h4>
                  </div>
                  <div className="worker-item">
                    <h4>Lisa, The Labeling assistant</h4>
                  </div>
                  <div className="worker-item">
                    <h4>Sarah, The SDS Author</h4>
                  </div>
                </div>
              </div>
              
              <div className="digital-workers-category">
                <div className="category-header">
                  <h3>Digital Engineering Agents</h3>
                </div>
                <div className="category-items">
                  <div className="worker-item">
                    <h4>Tara, The Digital QA</h4>
                  </div>
                  <div className="worker-item">
                    <h4>Aladdin, Code Genie</h4>
                  </div>
                  <div className="worker-item">
                    <h4>Arjun, The Architect</h4>
                  </div>
                  <div className="worker-item">
                    <h4>Nyra, The Tech Talent</h4>
                  </div>
                  <div className="worker-item">
                    <h4>Michael, The Watch Dog</h4>
                  </div>
                </div>
              </div>
              
              <div className="digital-workers-category">
                <div className="category-header">
                  <h3>Customer Service Agents</h3>
                </div>
                <div className="category-items">
                  <div className="worker-item">
                    <h4>Trent, The Translator</h4>
                  </div>
                  <div className="worker-item">
                    <h4>Alex, The Analyst</h4>
                  </div>
                  <div className="worker-item">
                    <h4>Rachel, The Specialist</h4>
                  </div>
                </div>
              </div>
              
              <div className="digital-workers-category">
                <div className="category-header">
                  <h3>Marketing & Procurement Agent</h3>
                </div>
                <div className="category-items">
                  <div className="worker-item">
                    <h4>Maya, The Creator</h4>
                  </div>
                  <div className="worker-item">
                    <h4>Ava, The Advisor</h4>
                  </div>
                </div>
              </div>
              
              <div className="digital-workers-category">
                <div className="category-header">
                  <h3>Finance Agent</h3>
                </div>
                <div className="category-items">
                  <div className="worker-item">
                    <h4>Isaac, Invoice Analyst</h4>
                  </div>
                </div>
              </div>
              
              <div className="digital-workers-category">
                <div className="category-header">
                  <h3>Human Resource Agent</h3>
                </div>
                <div className="category-items">
                  <div className="worker-item">
                    <h4>Hannah, The Recruiter</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Visual AI Details Section */}
      {showVisualAI && (
        <div className="detail-section visual-ai-details" ref={visualAIRef}>
          <div className="detail-container">
            <div className="detail-content full-width">
              <h2 className="visual-ai-title">Visual AI using KamerAI platform leverages artificial intelligence and convolutional neural networks to deliver enhanced industrial automation & video analytics</h2>
              
              <div className="visual-ai-categories">
                <div className="visual-ai-category safety-ai">
                  <h3 className="category-title">SAFETY AI</h3>
                  <p className="category-description">Transition workplace health and safety programs from reactive to proactive using real-time risk detection</p>
                  
                  <div className="stats-container">
                    <p className="stat-item red-text">• 6,300 Annual work-related deaths from accidents</p>
                    <p className="stat-item red-text">• Every 7 seconds a worker is injured in a job</p>
                  </div>
                  
                  <p className="feature-highlight">KamerAI provides real-time alerts using Safety AI to employees & machine operators in hazardous zones as well as monitor the level of maintenance, reducing the chance of breakdowns and accidents</p>
                  
                  <p className="functionality-header">The key functionalities under Safety AI include</p>
                  
                  <div className="functionality-items">
                    <div className="functionality-item">
                      <div className="icon area-control"></div>
                      <div className="functionality-content">
                        <h4>Area Control:</h4>
                        <p>Establish perimeter controls, prevents access to restricted areas</p>
                      </div>
                    </div>
                    
                    <div className="functionality-item">
                      <div className="icon unattended-objects"></div>
                      <div className="functionality-content">
                        <h4>Un Attended Objects:</h4>
                        <p>Send alerts when someone leaves an unattended object.</p>
                      </div>
                    </div>
                    
                    <div className="functionality-item">
                      <div className="icon ppe-detection"></div>
                      <div className="functionality-content">
                        <h4>PPE Detection & Compliance:</h4>
                        <p>Detect missing hard hats, gloves, masks, and more</p>
                      </div>
                    </div>
                    
                    <div className="functionality-item">
                      <div className="icon mhe-compliance"></div>
                      <div className="functionality-content">
                        <h4>MHE Compliance:</h4>
                        <p>Safety gear of operators, correct equipment usage, detect safety hazards in the environment</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="visual-ai-category productivity-ai">
                  <h3 className="category-title">PRODUCTIVITY AI</h3>
                  <p className="category-description">Track, monitor, and optimize workflows, enhancing uptime without compromising quality</p>
                  
                  <div className="stats-container">
                    <p className="stat-item red-text">• 41% of workers say stress decreases productivity</p>
                    <p className="stat-item red-text">• 3 Mins average time between workers distraction</p>
                  </div>
                  
                  <p className="feature-highlight">KamerAI achieves balance between productivity, efficiency, worker satisfaction and profitability by automating repetitive tasks, improve efficiency, and reduce costs</p>
                  
                  <p className="functionality-header">The key functionalities under Productivity AI include</p>
                  
                  <div className="functionality-items">
                    <div className="functionality-item">
                      <div className="icon cycle-time"></div>
                      <div className="functionality-content">
                        <h4>Cycle Time Analysis/ Kaizen Reports</h4>
                        <p>to find the take taken and steps to complete a process</p>
                      </div>
                    </div>
                    
                    <div className="functionality-item">
                      <div className="icon alignment"></div>
                      <div className="functionality-content">
                        <h4>Alignment:</h4>
                        <p>Monitor the alignment of heavy machinery, parts, product stacks</p>
                      </div>
                    </div>
                    
                    <div className="functionality-item">
                      <div className="icon ergonomic"></div>
                      <div className="functionality-content">
                        <h4>Ergonomic Analysis</h4>
                        <p>to identify risky postures and movements that might not be evident to the human eye</p>
                      </div>
                    </div>
                    
                    <div className="functionality-item">
                      <div className="icon time-keeping"></div>
                      <div className="functionality-content">
                        <h4>Time Keeping with Facial Recognition</h4>
                        <p>removing hassles of biometric scanning, access cards or tailgating</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="visual-ai-category inspection-ai">
                  <h3 className="category-title">INSPECTION AI</h3>
                  <p className="category-description">Utilize computer vision AI to streamline processes, reduce costs, maintain compliance, and deliver high-quality products</p>
                  
                  <div className="stats-container">
                    <p className="stat-item red-text">• 80% organizations will use CV to analyze images & videos</p>
                    <p className="stat-item red-text">• 7.5% of human inspectors only detect one defect in multi-defect items</p>
                  </div>
                  
                  <p className="feature-highlight">KamerAI's Inspection AI bridges the gaps between quality, efficiency, and profitability by identifying the defects and anomalies, inventory management and minimizing overall cost</p>
                  
                  <p className="functionality-header">The key functionalities under visual inspections include</p>
                  
                  <div className="functionality-items">
                    <div className="functionality-item">
                      <div className="icon object-dimensioning"></div>
                      <div className="functionality-content">
                        <h4>Object Dimensioning, Counting:</h4>
                        <p>Automatically capture accurate dimensions of parcels and count</p>
                      </div>
                    </div>
                    
                    <div className="functionality-item">
                      <div className="icon barcode-scanning"></div>
                      <div className="functionality-content">
                        <h4>Barcode Scanning:</h4>
                        <p>Extract and analyze barcodes from visual data using artificial neural network technology</p>
                      </div>
                    </div>
                    
                    <div className="functionality-item">
                      <div className="icon automation-inspection"></div>
                      <div className="functionality-content">
                        <h4>Automation of Inspection</h4>
                        <p>to detect anomalies and defects</p>
                      </div>
                    </div>
                    
                    <div className="functionality-item">
                      <div className="icon optical-character"></div>
                      <div className="functionality-content">
                        <h4>Optical Character Recognition:</h4>
                        <p>Automatically detect alphabets, numbers, shapes and code from visual data</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  );
};

export default Robotics; 