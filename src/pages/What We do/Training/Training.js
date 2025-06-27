import React, { useState } from 'react';
import './Training.css';
import trainingHeroImage from '../../../assets/images/Training/Training.webp';
import ccaLogo from '../../../assets/images/Training/CCA logo.png';
import conLogo from '../../../assets/images/Training/CON logo.png';
import oacLogo from '../../../assets/images/Training/OAC logo.png';
import certNexusLogo from '../../../assets/images/Training/Certnexuslogo.png';
import coursesBackground from '../../../assets/images/Training/Courses background.jpg';
import Footer from '../../../components/Footer';

// CertNexus Course Images
import irbizImage from '../../../assets/images/Training/IRBIZ.jpg';
import cybersafeImage from '../../../assets/images/Training/Cybersafe.jpg';
import etbizImage from '../../../assets/images/Training/ETBIZ.jpg';
import dsbizImage from '../../../assets/images/Training/DSBIZ.jpg';
import debizImage from '../../../assets/images/Training/DEBIZ.jpg';
import eetImage from '../../../assets/images/Training/CEET.jpg';
import cdspImage from '../../../assets/images/Training/CDSP.jpg';
import cfrImage from '../../../assets/images/Training/CFR1.jpg';

const Training = () => {
  const [hoveredCourse, setHoveredCourse] = useState(null);

  const vardaanCourses = [
    {
      id: 'cca',
      title: 'Certified Cybersecurity Associate',
      subtitle: '(CCA)',
      logo: ccaLogo
    },
    {
      id: 'con',
      title: 'Certified OSINT Novice',
      subtitle: '(CON)',
      logo: conLogo
    },
    {
      id: 'oac',
      title: 'OPSEC Awareness Certified',
      subtitle: '(OAC)',
      logo: oacLogo
    }
  ];

  const certNexusCourses = [
    {
      id: 'irbiz',
      title: 'IRBIZ',
      description: 'Incident Response for Business Professionals',
      image: irbizImage
    },
    {
      id: 'cybersafe',
      title: 'CyberSAFE',
      description: 'Securing Assets for End Users',
      image: cybersafeImage
    },
    {
      id: 'etbiz',
      title: 'ETBIZ',
      description: 'Emerging Tech for Business Professionals',
      image: etbizImage
    },
    {
      id: 'dsbiz',
      title: 'DSBIZ',
      description: 'Data Science for Business Professionals',
      image: dsbizImage
    },
    {
      id: 'debiz',
      title: 'DEBIZ',
      description: 'Data Ethics for Business Professionals',
      image: debizImage
    },
    {
      id: 'ceet',
      title: 'CEET',
      description: 'Certified Ethical Emerging Technologist',
      image: eetImage
    },
    {
      id: 'cdsp',
      title: 'CDSP',
      description: 'Certified Data Science Practitioner',
      image: cdspImage
    },
    {
      id: 'cfr',
      title: 'CFR',
      description: 'Certified CyberSec First Responder (Advanced)',
      image: cfrImage // No image available for this course
    }
  ];

  return (
    <div className="training-container">
      <div className="training-hero">
        <img src={trainingHeroImage} alt="Training" />
        <div className="hero-overlay">
          <h1>TRAINING SERVICES</h1>
          {/* <p className="training-subtitle">
            Empowering professionals with cutting-edge skills and certifications
          </p> */}
        </div>
      </div>

      <div className="training-content">
        {/* Vardaan Courses Section */}
        <section className="vardaan-section">
          <div className="section-header">
            <h2 className="section-training-title">Vardaan Courses</h2>
            <div className="section-line"></div>
          </div>
          
          <div className="courses-flow">
            {vardaanCourses.map((course, index) => (
              <div 
                key={course.id}
                className={`course-badge ${hoveredCourse === course.id ? 'hovered' : ''}`}
                onMouseEnter={() => setHoveredCourse(course.id)}
                onMouseLeave={() => setHoveredCourse(null)}
              >
                <div className="badge-logo">
                  <img src={course.logo} alt={`${course.title} Logo`} />
                </div>
                <div className="badge-content">
                  <h3 className="badge-title">
                    {course.title}
                  </h3>
                  <div className="badge-subtitle">
                    {course.subtitle}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CertNexus Courses Section */}
        <section className="certnexus-section">
          <div className="section-header">
            <h2 className="section-training-title">
              CertNexus Courses
              <img src={certNexusLogo} alt="CertNexus Logo" className="certnexus-logo-img" />
            </h2>
            <div className="section-line"></div>
            <p className="section-description">
              Our authorized trainers also deliver a range of CertNexus-certified courses, including:
            </p>
          </div>

          <div className="courses-grid">
            {certNexusCourses.map((course, index) => (
              <div 
                key={course.id}
                className={`course-card ${hoveredCourse === course.id ? 'hovered' : ''}`}
                onMouseEnter={() => setHoveredCourse(course.id)}
                onMouseLeave={() => setHoveredCourse(null)}
                style={{
                  backgroundImage: course.image ? `url(${course.image})` : 'linear-gradient(135deg, #2c5aa0 0%, #1a4080 100%)'
                }}
              >
                <div className="course-overlay">
                  <div className="course-content">
                    <h4 className="course-title">
                      {course.title}
                    </h4>
                    <p className="course-description">
                      {course.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Training; 