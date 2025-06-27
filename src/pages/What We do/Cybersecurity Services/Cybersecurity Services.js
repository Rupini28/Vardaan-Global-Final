import React, { useEffect, useState } from "react";
import "./Cybersecurity Services.css";
import Footer from "../../../components/Footer";
 
function CybersecurityServices() {
  
  // Preload service card images for faster loading
  useEffect(() => {
    const imageUrls = [
      '/assets/images/Cyber Security/RedPen Vulnerability.jpg',
      '/assets/images/Cyber Security/vciso-services.jpg',
      '/assets/images/Cyber Security/incident-response.avif',
      '/assets/images/Cyber Security/security-posture.jpg',
      '/assets/images/Cyber Security/security-planning.jpg',
      '/assets/images/Cyber Security/risk-governance.webp',
      '/assets/images/Cyber Security/security-operations.jpg',
      '/assets/images/Cyber Security/systems-integration.jpg',
      '/assets/images/Cyber Security/project-management.avif',
      '/assets/images/Cyber Security/endpoint-detection.jpg',
      '/assets/images/Cyber Security/red-teaming.jpg',
      '/assets/images/Cyber Security/breach-simulation.avif'
    ];

    // Preload images for faster loading
    imageUrls.forEach(url => {
      const img = new Image();
      img.src = url;
    });
  }, []);

  // Initialize floating particles for header with performance optimization
  useEffect(() => {
    const createParticles = () => {
      const header = document.querySelector('.cybersecurity-header');
      if (!header) return;
     
      // Remove existing particles if any
      const existingParticles = document.querySelectorAll('.floating-particle');
      existingParticles.forEach(particle => particle.remove());
     
      // Reduce particle count for better performance
      const particleCount = window.innerWidth < 768 ? 6 : 12;
     
      // Use DocumentFragment for better performance
      const fragment = document.createDocumentFragment();
     
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'floating-particle';
       
        // Random size between 3px and 8px
        const size = 3 + Math.random() * 5;
        particle.style.cssText = `
          width: ${size}px;
          height: ${size}px;
          left: ${Math.random() * 100}%;
          top: ${Math.random() * 100}%;
          opacity: ${0.1 + Math.random() * 0.3};
          animation-duration: ${15 + Math.random() * 15}s;
          animation-delay: ${Math.random() * 5}s;
          will-change: transform;
        `;
       
        fragment.appendChild(particle);
      }
      
      header.appendChild(fragment);
    };
   
    // Debounce particle creation to improve performance
    let resizeTimeout;
    const debouncedCreateParticles = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(createParticles, 300);
    };
   
    createParticles();
   
    // Use debounced version for resize
    window.addEventListener('resize', debouncedCreateParticles);
   
    return () => {
      window.removeEventListener('resize', debouncedCreateParticles);
      clearTimeout(resizeTimeout);
    };
  }, []);
  
  return (
    <div className="cybersecurity-container">
      {/* Header Section */}
      <div className="cybersecurity-header cybersecurity-services-hero-banner minimal-header">
        <div className="reveal-line"></div>
        <div className="header-titles center-align">
          <h1 className="cybersecurity-title center-align">CYBERSECURITY CONSULTING AND ASSESSMENTS</h1>
          {/* <p className="cybersecurity-subtitle center-align">Comprehensive Security Solutions for Your Organization</p> */}
        </div>
      </div>
 
      {/* Image now used as hero banner background */}
 
      {/* Services Section */}
      <div className="cybersecurity-services-section">
        <div className="services-intro">
          <h2 className="section-title">Our Cybersecurity Services</h2>
          <p className="section-description">Comprehensive cybersecurity solutions to protect your organization from evolving threats.</p>
        </div>
       
        <div className="cybersecurity-services-grid">
          {/* Service Card 1 */}
          <div className="service-card">
            <div className="service-content">
              <h3 className="service-title">RedPen Vulnerability Assessment and Penetration Testing</h3>
              <p className="service-description">Comprehensive vulnerability assessments and penetration testing to identify and address security weaknesses in your systems.</p>
            </div>
          </div>
 
          {/* Service Card 2 */}
          <div className="service-card">
            <div className="service-content">
              <h3 className="service-title">vCISO Services</h3>
              <p className="service-description">Virtual Chief Information Security Officer services providing strategic cybersecurity leadership and guidance.</p>
            </div>
          </div>
 
          {/* Service Card 3 */}
          <div className="service-card">
            <div className="service-content">
              <h3 className="service-title">Incident Response Planning</h3>
              <p className="service-description">Develop comprehensive incident response plans to effectively handle cybersecurity incidents and minimize business impact.</p>
            </div>
          </div>
 
          {/* Service Card 4 */}
          <div className="service-card">
            <div className="service-content">
              <h3 className="service-title">Security Posture Assessment</h3>
              <p className="service-description">Evaluate your current security posture and provide recommendations for improvement and risk mitigation.</p>
            </div>
          </div>
 
          {/* Service Card 5 */}
          <div className="service-card">
            <div className="service-content">
              <h3 className="service-title">Security Planning, Compliance Audits, and Best Practice Implementation</h3>
              <p className="service-description">Strategic security planning, compliance audits, and implementation of industry best practices and standards.</p>
            </div>
          </div>
 
          {/* Service Card 6 */}
          <div className="service-card">
            <div className="service-content">
              <h3 className="service-title">Risk Governance</h3>
              <p className="service-description">Establish comprehensive risk governance frameworks to manage and mitigate cybersecurity risks effectively.</p>
            </div>
          </div>
 
          {/* Service Card 7 */}
          <div className="service-card">
            <div className="service-content">
              <h3 className="service-title">Security Operation & Engineering</h3>
              <p className="service-description">Design, implement, and manage security operations and engineering solutions for your organization.</p>
            </div>
          </div>
 
          {/* Service Card 8 */}
          <div className="service-card">
            <div className="service-content">
              <h3 className="service-title">Systems Integration</h3>
              <p className="service-description">Integrate security systems and tools to create a unified and effective cybersecurity infrastructure.</p>
            </div>
          </div>
 
          {/* Service Card 9 */}
          <div className="service-card">
            <div className="service-content">
              <h3 className="service-title">Project Management</h3>
              <p className="service-description">Expert project management for cybersecurity initiatives, ensuring successful implementation and delivery.</p>
            </div>
          </div>
 
          {/* Service Card 10 */}
          <div className="service-card">
            <div className="service-content">
              <h3 className="service-title">Endpoint Detection and Response (EDR)</h3>
              <p className="service-description">Advanced endpoint detection and response solutions to monitor, detect, and respond to threats in real-time.</p>
            </div>
          </div>
 
          {/* Service Card 11 */}
          <div className="service-card">
            <div className="service-content">
              <h3 className="service-title">Red Teaming</h3>
              <p className="service-description">Simulate real-world attacks through red team exercises to test your organization's security defenses.</p>
            </div>
          </div>
 
          {/* Service Card 12 */}
          <div className="service-card">
            <div className="service-content">
              <h3 className="service-title">Breach and Attack Simulation (BAS)</h3>
              <p className="service-description">Continuous security validation through automated breach and attack simulations to strengthen your defenses.</p>
            </div>
          </div>
        </div>
      </div>
 
      {/* Visit Our Website Section */}
      <div className="cyber-website-section">
        {/* Floating Particles */}
        <div className="cyber-particles-container">
          <div className="cyber-particle cyber-particle-1"></div>
          <div className="cyber-particle cyber-particle-2"></div>
          <div className="cyber-particle cyber-particle-3"></div>
          <div className="cyber-particle cyber-particle-4"></div>
          <div className="cyber-particle cyber-particle-5"></div>
          <div className="cyber-particle cyber-particle-6"></div>
        </div>
       
        {/* Floating Geometric Shapes */}
        <div className="cyber-shapes-container">
          <div className="cyber-floating-shape cyber-shape-triangle"></div>
          <div className="cyber-floating-shape cyber-shape-circle"></div>
          <div className="cyber-floating-shape cyber-shape-square"></div>
          <div className="cyber-floating-shape cyber-shape-hexagon"></div>
        </div>
       
        <div className="cyber-website-content">
          <span className="cyber-website-text cyber-typewriter">
            <span className="cyber-typewriter-text">Discover our advanced cybersecurity solutions and threat protection services</span>
          </span>
          <a
            href="https://vardaan-cyber.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="cyber-website-button cyber-ripple-button"
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
              ripple.classList.add('cyber-ripple');
             
              button.appendChild(ripple);
             
              setTimeout(() => {
                ripple.remove();
              }, 600);
            }}
          >
            <span className="cyber-button-text">Visit Our Website</span>
            <span className="cyber-button-glow"></span>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
 
export default CybersecurityServices;
 