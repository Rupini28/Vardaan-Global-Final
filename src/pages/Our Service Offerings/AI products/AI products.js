import React, { useEffect } from "react";
import "./AI products.css";
import aiImg from '../../../assets/images/ai.jpg';
import grcImg from '../../../assets/images/grc.jpg';
import auditImg from '../../../assets/images/audit1.jpg';
import serviceImg from '../../../assets/images/service1.avif';
import smartImg from '../../../assets/images/smart.webp';

function Products() {
  // Initialize floating particles for header
  useEffect(() => {
    const createParticles = () => {
      const header = document.querySelector('.products-header');
      if (!header) return;
      
      // Remove existing particles if any
      const existingParticles = document.querySelectorAll('.floating-particle');
      existingParticles.forEach(particle => particle.remove());
      
      // Create new particles
      const particleCount = window.innerWidth < 768 ? 10 : 20;
      
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'floating-particle';
        
        // Random size between 3px and 8px
        const size = 3 + Math.random() * 5;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Random position
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        
        // Random opacity between 0.1 and 0.4
        particle.style.opacity = 0.1 + Math.random() * 0.3;
        
        // Random animation duration between 15s and 30s
        const duration = 15 + Math.random() * 15;
        particle.style.animationDuration = `${duration}s`;
        
        // Random delay
        particle.style.animationDelay = `${Math.random() * 5}s`;
        
        header.appendChild(particle);
      }
    };
    
    createParticles();
    
    // Recreate particles on window resize
    window.addEventListener('resize', createParticles);
    
    return () => {
      window.removeEventListener('resize', createParticles);
    };
  }, []);

  const products = [
    {
      id: 1,
      title: "Governance Risk and Control",
      bgImage: grcImg,
      specialClass: "grc-hex",
      description: "Centralized dashboards for real-time risk tracking and compliance oversight. AI-driven tools automate regulatory adherence while embedded controls reduce risks and enhance efficiency."
    },
    {
      id: 2,
      title: "Audit Practice Management Solution",
      bgImage: auditImg,
      specialClass: "audit-hex",
      description: "Streamlines audits by automating data collection and evidence requests. Tracks compliance with built-in checks and provides unified visibility into entities, risks, and metrics."
    },
    {
      id: 3,
      title: "Service Management Platform",
      bgImage: serviceImg,
      specialClass: "service-hex",
      description: "Centralized interface to manage services across devices. Automates provisioning and maintenance with customer self-service portals. Integrates with CRM and analytics systems."
    },
    {
      id: 4,
      title: "SMART Logistics",
      bgImage: smartImg,
      specialClass: "smart-hex",
      description: "Automates warehouse tasks for improved speed and accuracy. Integrates with enterprise systems for seamless coordination. Uses GPS and IoT for real-time tracking and route optimization."
    },
    {
      id: 5,
      title: "AI Accelerators",
      bgImage: aiImg,
      specialClass: "ai-hex",
      description: "Enterprise applications, Augmented analytics, Intelligent automation, and comprehensive Enterprise AI solutions."
    }
  ];

  return (
    <div className="products-container">
      {/* Animated Dots Underline + Centered Heading */}
      <div className="products-header minimal-header dots-underline-header">
        <div className="reveal-line"></div>
        <div className="header-titles center-align">
          <h1 className="products-title center-align">AI PRODUCTS</h1>
          <div className="dots-underline">
            <span className="dot-underline dot-u1"></span>
            <span className="dot-underline dot-u2"></span>
            <span className="dot-underline dot-u3"></span>
            <span className="dot-underline dot-u4"></span>
            <span className="dot-underline dot-u5"></span>
          </div>
          <p className="products-subtitle center-align">Innovative Solutions for the Future</p>
        </div>
      </div>

      {/* Products section */}
      <div className="products-section">
        <div className="products-intro">
          <h2 className="section-title">Our Enterprise Solutions</h2>
          <p className="section-description">Discover our cutting-edge AI-powered products designed to transform your business operations and drive growth.</p>
        </div>
        
        {/* Hexagon Honeycomb Layout */}
        <div className="hexagon-container">
          <div className="hexagon-grid">
            {products.map((product, index) => (
              <div key={product.id} className={`hex-item hex-item-${index + 1} ${product.specialClass || ''}`}>
                <div className="hex-container" style={product.bgImage ? { backgroundImage: `url(${product.bgImage})` } : {}}>
                  <div className="hex-content">
                    {/* Only show icon if not GRC */}
                    {!product.bgImage && <div className={`hex-icon ${product.icon}`}></div>}
                    <h3 className="hex-title">{product.title}</h3>
                    <div className="hex-description-container">
                      <p className="hex-description">{product.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="hex-background-elements">
            <div className="hex-bg hex-bg-1"></div>
            <div className="hex-bg hex-bg-2"></div>
            <div className="hex-bg hex-bg-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products; 