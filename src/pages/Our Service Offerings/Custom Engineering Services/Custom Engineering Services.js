import React, { useEffect } from "react";
import "./Custom Engineering Services.css";

function CustomEngineeringServices() {
  // Initialize floating particles for header
  useEffect(() => {
    const createParticles = () => {
      const header = document.querySelector('.custom-engineering-header');
      if (!header) return;
      
      // Remove existing particles if any
      const existingParticles = document.querySelectorAll('.floating-particle');
      existingParticles.forEach(particle => particle.remove());
      
      // Create new particles
      const particleCount = window.innerWidth < 768 ? 15 : 25;
      
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'floating-particle';
        
        // Random size between 2px and 6px
        const size = 2 + Math.random() * 4;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Random position
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        
        // Random opacity between 0.1 and 0.5
        particle.style.opacity = 0.1 + Math.random() * 0.4;
        
        // Random animation duration between 12s and 25s
        const duration = 12 + Math.random() * 13;
        particle.style.animationDuration = `${duration}s`;
        
        // Random delay
        particle.style.animationDelay = `${Math.random() * 3}s`;
        
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

  const services = [
    {
      id: 1,
      title: "Software Architecture & Design",
      icon: "🏗️",
      description: "Custom software architecture design tailored to your business needs. We create scalable, maintainable, and robust solutions that grow with your organization.",
      features: ["Microservices Architecture", "Cloud-Native Design", "API Development", "System Integration"]
    },
    {
      id: 2,
      title: "Custom Application Development",
      icon: "💻",
      description: "End-to-end custom application development using cutting-edge technologies. From concept to deployment, we deliver solutions that exceed expectations.",
      features: ["Web Applications", "Mobile Apps", "Desktop Software", "Cross-Platform Solutions"]
    },
    {
      id: 3,
      title: "Legacy System Modernization",
      icon: "🔄",
      description: "Transform your outdated systems into modern, efficient platforms. We ensure seamless migration while preserving critical business data and functionality.",
      features: ["Code Refactoring", "Database Migration", "Technology Upgrade", "Performance Optimization"]
    },
    {
      id: 4,
      title: "DevOps & Infrastructure",
      icon: "⚙️",
      description: "Comprehensive DevOps solutions to streamline your development and deployment processes. Build reliable, automated pipelines for faster delivery.",
      features: ["CI/CD Pipelines", "Container Orchestration", "Infrastructure as Code", "Monitoring & Logging"]
    },
    {
      id: 5,
      title: "Quality Assurance & Testing",
      icon: "🔍",
      description: "Rigorous testing frameworks to ensure your applications meet the highest quality standards. We implement comprehensive testing strategies.",
      features: ["Automated Testing", "Performance Testing", "Security Testing", "User Acceptance Testing"]
    },
    {
      id: 6,
      title: "Technical Consulting",
      icon: "🎯",
      description: "Expert technical guidance to help you make informed technology decisions. Our consultants provide strategic insights for optimal outcomes.",
      features: ["Technology Assessment", "Architecture Review", "Best Practices", "Strategic Planning"]
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Analysis",
      description: "We thoroughly understand your requirements, challenges, and business objectives to create the perfect solution roadmap."
    },
    {
      step: "02",
      title: "Design & Planning",
      description: "Our experts design comprehensive solutions with detailed technical specifications and project timelines."
    },
    {
      step: "03",
      title: "Development & Implementation",
      description: "Agile development approach with regular updates, ensuring transparency and flexibility throughout the process."
    },
    {
      step: "04",
      title: "Testing & Quality Assurance",
      description: "Rigorous testing phases to ensure optimal performance, security, and reliability of your custom solutions."
    },
    {
      step: "05",
      title: "Deployment & Support",
      description: "Seamless deployment with ongoing maintenance and support to ensure your systems operate at peak performance."
    }
  ];

  return (
    <div className="custom-engineering-container">
      {/* Animated Header */}
      <div className="custom-engineering-header minimal-header dots-underline-header">
        <div className="reveal-line"></div>
        <div className="header-titles center-align">
          <h1 className="custom-engineering-title center-align">CUSTOM ENGINEERING SERVICES</h1>
          <div className="dots-underline">
            <span className="dot-underline dot-u1"></span>
            <span className="dot-underline dot-u2"></span>
            <span className="dot-underline dot-u3"></span>
            <span className="dot-underline dot-u4"></span>
            <span className="dot-underline dot-u5"></span>
          </div>
          <p className="custom-engineering-subtitle center-align">Tailored Engineering Solutions for Modern Enterprises</p>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="engineering-intro">
        <div className="intro-content">
          <h2 className="section-title">Building Tomorrow's Technology Today</h2>
          <p className="intro-description">
            Our Custom Engineering Services deliver bespoke solutions that align perfectly with your business vision. 
            From concept to completion, we engineer excellence that drives innovation and sustainable growth.
          </p>
          <div className="intro-stats">
            <div className="stat-item">
              <span className="stat-number">500+</span>
              <span className="stat-label">Projects Delivered</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">98%</span>
              <span className="stat-label">Client Satisfaction</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Support Available</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-section">
        <h2 className="section-title">Our Engineering Expertise</h2>
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, index) => (
                  <li key={index} className="feature-item">{feature}</li>
                ))}
              </ul>
              <div className="service-hover-effect"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <h2 className="section-title">Our Engineering Process</h2>
        <p className="process-subtitle">A proven methodology that ensures success at every stage</p>
        <div className="process-timeline">
          {processSteps.map((step, index) => (
            <div key={index} className="process-step">
              <div className="step-number">{step.step}</div>
              <div className="step-content">
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
              {index < processSteps.length - 1 && <div className="step-connector"></div>}
            </div>
          ))}
        </div>
      </section>

      {/* Technologies Section */}
      <section className="technologies-section">
        <h2 className="section-title">Technologies We Master</h2>
        <div className="tech-categories">
          <div className="tech-category">
            <h3 className="tech-category-title">Frontend</h3>
            <div className="tech-tags">
              <span className="tech-tag">React</span>
              <span className="tech-tag">Angular</span>
              <span className="tech-tag">Vue.js</span>
              <span className="tech-tag">TypeScript</span>
            </div>
          </div>
          <div className="tech-category">
            <h3 className="tech-category-title">Backend</h3>
            <div className="tech-tags">
              <span className="tech-tag">Node.js</span>
              <span className="tech-tag">Python</span>
              <span className="tech-tag">.NET</span>
              <span className="tech-tag">Java</span>
            </div>
          </div>
          <div className="tech-category">
            <h3 className="tech-category-title">Cloud & DevOps</h3>
            <div className="tech-tags">
              <span className="tech-tag">AWS</span>
              <span className="tech-tag">Azure</span>
              <span className="tech-tag">Docker</span>
              <span className="tech-tag">Kubernetes</span>
            </div>
          </div>
          <div className="tech-category">
            <h3 className="tech-category-title">Databases</h3>
            <div className="tech-tags">
              <span className="tech-tag">PostgreSQL</span>
              <span className="tech-tag">MongoDB</span>
              <span className="tech-tag">Redis</span>
              <span className="tech-tag">Elasticsearch</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Transform Your Ideas into Reality?</h2>
          <p className="cta-description">
            Let's discuss how our custom engineering services can accelerate your business growth and innovation.
          </p>
          <button className="cta-button">Start Your Project</button>
        </div>
      </section>
    </div>
  );
}

export default CustomEngineeringServices; 