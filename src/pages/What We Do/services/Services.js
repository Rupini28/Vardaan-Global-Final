import React from "react";
import "./Services.css";
import vaspVideo from "../../../assets/Products/Service Management/vasp.mp4";
import service1 from "../../../assets/Products/Service Management/service 1.jpg";
import service2 from "../../../assets/Products/Service Management/service 2.avif";
import service3 from "../../../assets/Products/Service Management/service 3.jpg";
import service4 from "../../../assets/Products/Service Management/service 4.jpg";
import Footer from "../../../components/Footer";

const Services = () => {
  return (
    <div className="services-container">
      <section className="hero-section">
        <div className="video-container">
          <video autoPlay muted loop className="background-video">
            <source src={vaspVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="overlay">
            <h1>Service Management Platform</h1>
            <p>Streamline your business operations with our comprehensive service management solution</p>
          </div>
        </div>
      </section>

      <div className="platform-card">
        <div className="container">
          <h2>Our Service Management Platform</h2>
          <p>
            An automated service portal for efficient request handling and workflow management. VASP centralizes service management and streamlines workflows with automated routing, real-time tracking, and comprehensive analytics for improved service delivery.
          </p>
        </div>
      </div>

      <div className="service-highlights">
        <div className="highlight-item">
          <div className="highlight-image">
            <img src={service1} alt="Automated Service Management" />
          </div>
          <div className="highlight-content purple-bg">
            <h3>Automated Service Management</h3>
            <p>
              Streamline service operations with intelligent automation that reduces manual intervention, ensuring faster and more accurate request resolution.
            </p>
          </div>
        </div>

        <div className="highlight-item reverse">
          <div className="highlight-image">
            <img src={service2} alt="Workflow Automation" />
          </div>
          <div className="highlight-content blue-bg">
            <h3>Workflow Automation</h3>
            <p>
              Define and manage end-to-end workflows effortlessly, enabling smooth task transitions, approval chains, and consistent process execution.
            </p>
          </div>
        </div>

        <div className="highlight-item">
          <div className="highlight-image">
            <img src={service3} alt="Intelligent Ticket Routing" />
          </div>
          <div className="highlight-content dark-purple-bg">
            <h3>Intelligent Ticket Routing</h3>
            <p>
              Leverage smart routing logic to automatically assign tickets to the right teams or individuals based on priority, type, and workload, improving response times and accountability.
            </p>
          </div>
        </div>

        <div className="highlight-item reverse">
          <div className="highlight-image">
            <img src={service4} alt="SLA Management" />
          </div>
          <div className="highlight-content teal-bg">
            <h3>SLA Management</h3>
            <p>
              Track and enforce service-level agreements with built-in SLA monitoring tools, helping teams meet deadlines and maintain service quality.
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Services;