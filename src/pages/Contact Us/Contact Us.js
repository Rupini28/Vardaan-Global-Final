import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Contact Us.css';
// Import flag images directly from assets
import IndiaFlag from '../../assets/images/Contct Us/India.png';
import MalaysiaFlag from '../../assets/images/Contct Us/Malaysia.png';
import UAEFlag from '../../assets/images/Contct Us/UAE.png';
import UKFlag from '../../assets/images/Contct Us/UK.png';
import USAFlag from '../../assets/images/Contct Us/USA.png';
import worldMapImage from '../../assets/images/Contct Us/earth-map.jpg';
import Footer from '../../components/Footer';
// Import EmailJS
import emailjs from '@emailjs/browser';

// Country data
const countryData = {
  india: {
    name: 'India',
    flag: IndiaFlag,
    address: [
      'Aurum, 1st Floor, Plot No 57,',
      'Jayabheri Enclave, Gachibowli',
      'Hyderabad-500032 INDIA'
    ],
    // company: 'Vardaan Data Sciences Pvt. Ltd.',
    phone: ['+91 40-35171118', '+91 40-35171119'],
    email: 'info@vardaanglobal.com',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7612.511961535537!2d78.361089!3d17.447458!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9377a883a6b3%3A0xc9b124e41328f9e9!2sVardaan%20CyberSecurity%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1702278038269!5m2!1sen!2sin'
  },
  malaysia: {
    name: 'Malaysia',
    flag: MalaysiaFlag,
    address: [
      'Lot G07, Level 3, Platinum Sentral,',
      'Jalan Stesen Sentral 2, 50470,',
      'Kuala Lumpur, MALAYSIA'
    ],
    // company: 'Vardaan CyberSecurity Pvt. Ltd.',
    phone: ['+60327224705', '+601136740107'],
    email: 'info@vardaanglobal.com',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7967.690359288608!2d101.68639800000001!3d3.135571!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc49c13d2bd457%3A0xb43f87e8ce95d824!2sSpaces%20-%20Kuala%20Lumpur%2C%20Spaces%20Platinum%20Sentral!5e0!3m2!1sen!2sin!4v1702278406164!5m2!1sen!2sin'
  },
  uae: {
    name: 'UAE',
    flag: UAEFlag,
    address: [
      'Info Drive Risk Management Services LLC,',
      'Floor 10, Concord Tower',
      'Dubai Media City Dubai, UAE'
    ],
    // company: 'Vardaan Resources Pvt. Ltd.',
    phone: ['+971 4 450 2 450'],
    email: 'info@vardaanglobal.com',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7226.239109919306!2d55.156195!3d25.097814!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b4164e9f477%3A0x873c65b1c9eb0f7e!2sConcord%20Tower%20-%20Al%20Sufouh%20-%20Al%20Sufouh%202%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1702278584876!5m2!1sen!2sin'
  },
  uk: {
    name: 'UK',
    flag: UKFlag,
    address: [
      'The Old Courthouse Hughenden Road, High Wycombe,',
      'Buckinghamshire HP13 5DT, UK',
      ''
    ],
    // company: 'Vardaan Data Sciences Pvt. Ltd.',
    phone: ['+44 2071934588', '+44 7404398837'],
    email: 'info@vardaanglobal.com',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2476.3833622351713!2d-0.7561062061606544!3d51.6345039992407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487661d3cc21ae57%3A0x9d8bad2c2975223e!2sThe%20Old%20Courthouse%2C%20Hughenden%20Rd%2C%20High%20Wycombe%20HP13%205DT%2C%20UK!5e0!3m2!1sen!2sin!4v1702278540613!5m2!1sen!2sin'
  },
  usa: {
    name: 'USA',
    flag: USAFlag,
    address: [
      'Risk Analytics and Solutions LLC.',
      '70 Bluebird Ln Ste G, Plainview,',
      'NY, 11803, USA'
    ],
    // company: 'Vardaan Resources Pvt. Ltd.',
    phone: ['+1 (516) 543-4022'],
    email: 'info@vardaanglobal.com',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6043.108202091877!2d-73.461944!3d40.771831!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e82a76f743aba1%3A0x2db9df49cfab7646!2s70%20Bluebird%20Ln%20g%2C%20Plainview%2C%20NY%2011803%2C%20USA!5e0!3m2!1sen!2sin!4v1702278621774!5m2!1sen!2sin'
  }
};

// SVG Icons
const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const AddressIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

// Add new form field icons
const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="form-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

const SubjectIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="form-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
    <polyline points="14,2 14,8 20,8"></polyline>
    <line x1="16" y1="13" x2="8" y2="13"></line>
    <line x1="16" y1="17" x2="8" y2="17"></line>
    <polyline points="10,9 9,9 8,9"></polyline>
  </svg>
);

const MessageIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="form-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
  </svg>
);

const FormEmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="form-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const FormPhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="form-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

function GetInTouch() {
  const [selectedCountry, setSelectedCountry] = useState('india');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    additionalSubject: '',
    phoneNumber: '',
    phone: '',
    message: ''
  });
  const [showDialog, setShowDialog] = useState(false);
  const [showErrorDialog, setShowErrorDialog] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showLoadingModal, setShowLoadingModal] = useState(false);
  const [formSubmitStatus, setFormSubmitStatus] = useState({ success: '', error: '' });
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  
  // Add refs for the world map
  const containerRef = useRef(null);
  const mapRef = useRef(null);

  // Company locations with coordinates (x and y percentages on the map)
  // Coordinates based on accurate world map positioning
  const locations = [
    { name: 'India', x: 74, y: 37, color: '#ff5722' },        // Central India
    { name: 'Malaysia', x: 81, y: 46, color: '#4caf50' },     // Kuala Lumpur, Malaysia
    { name: 'USA', x: 22, y: 26, color: '#2196f3' },         // Central USA
    { name: 'UK', x: 50, y: 21, color: '#9c27b0' },          // London, UK
    { name: 'UAE', x: 66, y: 37, color: '#ffc107' }          // Dubai, UAE
  ];

  useEffect(() => {
    // Check if there's a stored country in localStorage
    const storedCountry = localStorage.getItem('selectedFlag');
    if (storedCountry) {
      setSelectedCountry(storedCountry.toLowerCase());
    }

    // Add window resize listener
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // World Map Effect
  useEffect(() => {
    if (!containerRef.current) return;
    
    const mapContainer = document.createElement('div');
    mapContainer.className = 'map-container';
    mapContainer.style.backgroundImage = `url(${worldMapImage})`;
    containerRef.current.appendChild(mapContainer);
    mapRef.current = mapContainer;

    // Add markers and connections for each location
    const markerElements = [];
    const labelElements = [];
    
    locations.forEach((location, index) => {
      // Create marker
      const marker = document.createElement('div');
      marker.className = 'location-marker';
      marker.style.left = `${location.x}%`;
      marker.style.top = `${location.y}%`;
      marker.style.backgroundColor = location.color;
      mapContainer.appendChild(marker);
      markerElements.push(marker);
      
      // Create pulse effect
      const pulse = document.createElement('div');
      pulse.className = 'pulse-effect';
      pulse.style.left = `${location.x}%`;
      pulse.style.top = `${location.y}%`;
      pulse.style.borderColor = location.color;
      mapContainer.appendChild(pulse);
      
      // Animate pulse
      gsap.to(pulse, {
        width: '50px',
        height: '50px',
        opacity: 0,
        duration: 2,
        repeat: -1,
        delay: index * 0.3,
        ease: "power1.out"
      });
      
      // Create label
      const label = document.createElement('div');
      label.className = 'location-label';
      label.textContent = location.name;
      label.style.left = `${location.x}%`;
      label.style.top = `${location.y}%`;
      label.style.color = location.color;
      label.style.borderColor = location.color;
      mapContainer.appendChild(label);
      labelElements.push(label);
      
      // Animation for markers and labels
      gsap.fromTo(marker, 
        { scale: 0, opacity: 0 },
        { 
          scale: 1, 
          opacity: 1, 
          duration: 0.5, 
          delay: index * 0.2,
          ease: "back.out(1.7)"
        }
      );
      
      gsap.fromTo(label, 
        { y: 20, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.5, 
          delay: index * 0.2 + 0.1,
          ease: "power2.out"
        }
      );
    });
    
    // Create curved connections between locations
    const connections = [
      { from: 4, to: 0, color: '#ffc107' }, // UAE to India
      { from: 4, to: 1, color: '#ffc107' }, // UAE to Malaysia
      { from: 4, to: 2, color: '#ffc107' }, // UAE to USA
      { from: 4, to: 3, color: '#ffc107' }, // UAE to UK
    ];
    
    connections.forEach((connection, index) => {
      const fromLocation = locations[connection.from];
      const toLocation = locations[connection.to];
      
      // Create a curved SVG path between the two points
      const svgContainer = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svgContainer.setAttribute("width", "100%");
      svgContainer.setAttribute("height", "100%");
      svgContainer.style.position = "absolute";
      svgContainer.style.top = "0";
      svgContainer.style.left = "0";
      svgContainer.style.zIndex = "2";
      svgContainer.style.pointerEvents = "none";
      mapContainer.appendChild(svgContainer);
      
      // Calculate the curve's control point
      const midX = (fromLocation.x + toLocation.x) / 2;
      let midY = (fromLocation.y + toLocation.y) / 2;
      
      // Adjust the curve height to make a parabola
      const distanceX = Math.abs(fromLocation.x - toLocation.x);
      const distanceY = Math.abs(fromLocation.y - toLocation.y);
      const totalDistance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
      
      let curveHeight = 10 + (totalDistance / 3);
      
      // Special handling for different routes
      if (connection.to === 2) { // UAE to USA (long distance)
        curveHeight = 25;
      } else if (connection.to === 1) { // UAE to Malaysia
        curveHeight = 15;
      } else if (connection.to === 0) { // UAE to India
        curveHeight = 8;
      } else if (connection.to === 3) { // UAE to UK
        curveHeight = 12;
      }
      
      midY -= curveHeight;
      
      // Create the path
      const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      
      // Use a timeout to ensure the container has proper dimensions
      setTimeout(() => {
        // Get the container dimensions to convert percentages to pixels
        const containerWidth = svgContainer.clientWidth || 1200;
        const containerHeight = svgContainer.clientHeight || 500;
        
        // Convert percentages to absolute pixel values for the SVG path
        const x1 = (fromLocation.x / 100) * containerWidth;
        const y1 = (fromLocation.y / 100) * containerHeight;
        const x2 = (toLocation.x / 100) * containerWidth;
        const y2 = (toLocation.y / 100) * containerHeight;
        const ctrlX = (midX / 100) * containerWidth;
        const ctrlY = (midY / 100) * containerHeight;
        
        // Create the path with absolute pixel coordinates
        const pathD = `M${x1},${y1} Q${ctrlX},${ctrlY} ${x2},${y2}`;
        path.setAttribute("d", pathD);
        path.setAttribute("fill", "none");
        path.setAttribute("stroke", destinationColor);
        path.setAttribute("stroke-width", "2");
        path.setAttribute("opacity", "0.8");
        path.setAttribute("stroke-dasharray", "5,5");
        
        // Animate the path appearance
        try {
          const pathLength = path.getTotalLength();
          if (pathLength) {
            path.style.strokeDasharray = pathLength;
            path.style.strokeDashoffset = pathLength;
            
            gsap.to(path, {
              strokeDashoffset: 0,
              duration: 2,
              delay: index * 0.3,
              ease: "power1.inOut"
            });
            
            // Create moving dot along the path
            const movingDot = document.createElement('div');
            movingDot.className = 'moving-dot';
            movingDot.style.backgroundColor = destinationColor;
            movingDot.style.boxShadow = `0 0 10px ${destinationColor}`;
            mapContainer.appendChild(movingDot);
            
            // Use GSAP for animation
            animateWithGSAP(movingDot, path, destinationColor, index);
          }
        } catch (error) {
          console.error("Error with SVG path:", error);
        }
      }, 100);
      
      // Use the destination country's color for the line
      const destinationColor = locations[connection.to].color;
      svgContainer.appendChild(path);
    });

    // Animation method using GSAP
    function animateWithGSAP(dot, path, color, index) {
      try {
        setTimeout(() => {
          try {
            const pathLength = path.getTotalLength();
            
            if (!pathLength || isNaN(pathLength)) {
              console.warn("Path has invalid length, cannot animate");
              return;
            }
            
            // Set starting position
            const startPos = path.getPointAtLength(0);
            dot.style.left = `${startPos.x}px`;
            dot.style.top = `${startPos.y}px`;
            dot.style.display = 'block';
            
            // Create a progress timeline for the dot
            gsap.to({progress: 0}, {
              progress: 1,
              duration: 4,
              delay: index * 0.5,
              repeat: -1,
              ease: "none",
              onUpdate: function() {
                try {
                  const progress = this.targets()[0].progress;
                  const point = path.getPointAtLength(progress * pathLength);
                  
                  gsap.set(dot, {
                    left: point.x + 'px',
                    top: point.y + 'px'
                  });
                } catch (err) {
                  console.error("Error in animation update:", err);
                }
              }
            });
          } catch (innerError) {
            console.error("Error initializing animation:", innerError);
          }
        }, 100);
      } catch (error) {
        console.error("Animation setup error:", error);
      }
    }

    // Cleanup function
    return () => {
      if (containerRef.current) {
        while (containerRef.current.firstChild) {
          containerRef.current.removeChild(containerRef.current.firstChild);
        }
      }
    };
  }, []);

  const handleCountryChange = (country) => {
    setSelectedCountry(country);
    localStorage.setItem('selectedFlag', country);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic client-side validation
    if (!formData.name || !formData.email) {
      alert('Please fill in all required fields (Name and Email)');
      return;
    }
    
    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address');
      return;
    }
    
    // Check if privacy policy is accepted
    if (!privacyAccepted) {
      alert('Please read and accept the Privacy Policy and Cookie Consent to submit the form');
      return;
    }
    
    // Reset all modal states first
    setShowModal(false);
    setShowErrorDialog(false);
    setShowDialog(false);
    
    // Show loading popup immediately
    setShowLoadingModal(true);
    setIsSubmitting(true);
    setFormSubmitStatus({ success: '', error: '' });
    
    // Prepare subject - use additionalSubject if available, otherwise use subject
    const finalSubject = formData.additionalSubject || formData.subject || 'General Inquiry';
    
    // Prepare phone - use phoneNumber if available, otherwise use phone
    const finalPhone = formData.phoneNumber || formData.phone || '';
    
    try {
      console.log('Sending emails...');
      
      // EmailJS template parameters
      const templateParams = {
        title: finalSubject,
        name: formData.name,
        email: formData.email,
        phone: finalPhone,
        subject: finalSubject,
        message: formData.message || formData.subject || ''
      };

      // Send email (only to Gmail service)
      await emailjs.send(
        'service_x13f8yk',        // Gmail service
        'template_aj48ek6',       // Your template
        templateParams,
        'flisNrOTBQ4pv0eSn'       // Your public key
      );
      
      console.log('Emails sent successfully!');
      
      // Hide loading popup and show success
      setShowLoadingModal(false);
      setShowModal(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        additionalSubject: '',
        phoneNumber: '',
        phone: '',
        message: ''
      });
      
      // Reset privacy checkbox
      setPrivacyAccepted(false);
      
      setFormSubmitStatus({ success: '', error: '' });
      
    } catch (error) {
      console.error('Error sending emails:', error);
      
      // Hide loading popup immediately on error
      setShowLoadingModal(false);
      
      setFormSubmitStatus({
        success: '',
        error: 'Failed to send email. Please check your internet connection and try again.'
      });
      
    } finally {
      setIsSubmitting(false);
    }
  };

  // Current country data
  const currentCountry = countryData[selectedCountry];
  
  // Mobile view check
  const isMobile = windowWidth <= 768;

  return (
    <div className="get-in-touch-container">
      {/* World Map Hero Banner */}
      <div className="global-presence-section">
        <h1 className="global-presence-title">
          {/* <span className="title-dark">Contact</span> <span className="title-highlight">Us</span> */}
        </h1>
        
        <div className="world-map-container" ref={containerRef}>
        </div>
      </div>
      
      {!isMobile ? (
        <div className="contactpage-container">
          {/* Location Cards with integrated maps */}
          <div className="location-cards">
            {/* First row - Three cards (India, Malaysia, UAE) */}
            <div className="card-row first-row">
              <div className="office-card india-card" onClick={() => handleCountryChange('india')}>
                {/* Card contents */}
                <img 
                  src={countryData['india'].flag} 
                  alt={`${countryData['india'].name} Flag`} 
                  className="card-flag"
                />
                
                <div className="office-details">
                  <div className="office-title">
                    {countryData['india'].name}
                  </div>
                  
                  <div className="company-name">
                    <h3>{countryData['india'].company}</h3>
                  </div>
                  
                  <div className="address-info">
                    {countryData['india'].address.map((line, index) => (
                      <p key={index}>{line}</p>
                    ))}
                  </div>
                  
                  <div className="office-contact-info">
                    <div className="office-contact-item">
                      <EmailIcon />
                      <p>{countryData['india'].email}</p>
                    </div>
                    
                    {countryData['india'].phone.map((number, index) => (
                      <div key={index} className="office-contact-item">
                        <PhoneIcon />
                        <p>{number}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="card-map-container">
                  <div className="card-map-header">
                    <img 
                      src={countryData['india'].flag} 
                      alt={`${countryData['india'].name} Flag`} 
                      className="card-flag"
                    />
                    <h3 className="card-map-title">{countryData['india'].name}</h3>
                  </div>
                  <div className="card-map-frame">
                    <iframe 
                      src={countryData['india'].mapSrc}
                      allowFullScreen="" 
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`${countryData['india'].name} Office Location`}
                    />
                  </div>
                </div>
              </div>

              <div className="office-card malaysia-card" onClick={() => handleCountryChange('malaysia')}>
                {/* Card contents */}
                <img 
                  src={countryData['malaysia'].flag} 
                  alt={`${countryData['malaysia'].name} Flag`} 
                  className="card-flag"
                />
                
                <div className="office-details">
                  <div className="office-title">
                    {countryData['malaysia'].name}
                  </div>
                  
                  <div className="company-name">
                    <h3>{countryData['malaysia'].company}</h3>
                  </div>
                  
                  <div className="address-info">
                    {countryData['malaysia'].address.map((line, index) => (
                      <p key={index}>{line}</p>
                    ))}
                  </div>
                  
                  <div className="office-contact-info">
                    <div className="office-contact-item">
                      <EmailIcon />
                      <p>{countryData['malaysia'].email}</p>
                    </div>
                    
                    {countryData['malaysia'].phone.map((number, index) => (
                      <div key={index} className="office-contact-item">
                        <PhoneIcon />
                        <p>{number}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="card-map-container">
                  <div className="card-map-header">
                    <img 
                      src={countryData['malaysia'].flag} 
                      alt={`${countryData['malaysia'].name} Flag`} 
                      className="card-flag"
                    />
                    <h3 className="card-map-title">{countryData['malaysia'].name}</h3>
                  </div>
                  <div className="card-map-frame">
                    <iframe 
                      src={countryData['malaysia'].mapSrc}
                      allowFullScreen="" 
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`${countryData['malaysia'].name} Office Location`}
                    />
                  </div>
                </div>
              </div>

              <div className="office-card uae-card" onClick={() => handleCountryChange('uae')}>
                {/* Card contents */}
                <img 
                  src={countryData['uae'].flag} 
                  alt={`${countryData['uae'].name} Flag`} 
                  className="card-flag"
                />
                
                <div className="office-details">
                  <div className="office-title">
                    {countryData['uae'].name}
                  </div>
                  
                  <div className="company-name">
                    <h3>{countryData['uae'].company}</h3>
                  </div>
                  
                  <div className="address-info">
                    {countryData['uae'].address.map((line, index) => (
                      <p key={index}>{line}</p>
                    ))}
                  </div>
                  
                  <div className="office-contact-info">
                    <div className="office-contact-item">
                      <EmailIcon />
                      <p>{countryData['uae'].email}</p>
                    </div>
                    
                    {countryData['uae'].phone.map((number, index) => (
                      <div key={index} className="office-contact-item">
                        <PhoneIcon />
                        <p>{number}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="card-map-container">
                  <div className="card-map-header">
                    <img 
                      src={countryData['uae'].flag} 
                      alt={`${countryData['uae'].name} Flag`} 
                      className="card-flag"
                    />
                    <h3 className="card-map-title">{countryData['uae'].name}</h3>
                  </div>
                  <div className="card-map-frame">
                    <iframe 
                      src={countryData['uae'].mapSrc}
                      allowFullScreen="" 
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`${countryData['uae'].name} Office Location`}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Second row - Two cards (UK, USA) */}
            <div className="card-row second-row">
              <div className="office-card uk-card" onClick={() => handleCountryChange('uk')}>
                {/* Card contents */}
                <img 
                  src={countryData['uk'].flag} 
                  alt={`${countryData['uk'].name} Flag`} 
                  className="card-flag"
                />
                
                <div className="office-details">
                  <div className="office-title">
                    {countryData['uk'].name}
                  </div>
                  
                  <div className="company-name">
                    <h3>{countryData['uk'].company}</h3>
                  </div>
                  
                  <div className="address-info">
                    {countryData['uk'].address.map((line, index) => (
                      <p key={index}>{line}</p>
                    ))}
                  </div>
                  
                  <div className="office-contact-info">
                    <div className="office-contact-item">
                      <EmailIcon />
                      <p>{countryData['uk'].email}</p>
                    </div>
                    
                    {countryData['uk'].phone.map((number, index) => (
                      <div key={index} className="office-contact-item">
                        <PhoneIcon />
                        <p>{number}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="card-map-container">
                  <div className="card-map-header">
                    <img 
                      src={countryData['uk'].flag} 
                      alt={`${countryData['uk'].name} Flag`} 
                      className="card-flag"
                    />
                    <h3 className="card-map-title">{countryData['uk'].name}</h3>
                  </div>
                  <div className="card-map-frame">
                    <iframe 
                      src={countryData['uk'].mapSrc}
                      allowFullScreen="" 
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`${countryData['uk'].name} Office Location`}
                    />
                  </div>
                </div>
              </div>

              <div className="office-card usa-card" onClick={() => handleCountryChange('usa')}>
                {/* Card contents */}
                <img 
                  src={countryData['usa'].flag} 
                  alt={`${countryData['usa'].name} Flag`} 
                  className="card-flag"
                />
                
                <div className="office-details">
                  <div className="office-title">
                    {countryData['usa'].name}
                  </div>
                  
                  <div className="company-name">
                    <h3>{countryData['usa'].company}</h3>
                  </div>
                  
                  <div className="address-info">
                    {countryData['usa'].address.map((line, index) => (
                      <p key={index}>{line}</p>
                    ))}
                  </div>
                  
                  <div className="office-contact-info">
                    <div className="office-contact-item">
                      <EmailIcon />
                      <p>{countryData['usa'].email}</p>
                    </div>
                    
                    {countryData['usa'].phone.map((number, index) => (
                      <div key={index} className="office-contact-item">
                        <PhoneIcon />
                        <p>{number}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="card-map-container">
                  <div className="card-map-header">
                    <img 
                      src={countryData['usa'].flag} 
                      alt={`${countryData['usa'].name} Flag`} 
                      className="card-flag"
                    />
                    <h3 className="card-map-title">{countryData['usa'].name}</h3>
                  </div>
                  <div className="card-map-frame">
                    <iframe 
                      src={countryData['usa'].mapSrc}
                      allowFullScreen="" 
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`${countryData['usa'].name} Office Location`}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="contact-form-section">
            <h2 className="contact-title">Contact Us</h2>
            
            <div className="form-container">
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-field">
                    <div className="input-with-icon">
                      <UserIcon />
                      <input 
                        type="text" 
                        name="name" 
                        placeholder="Your Name" 
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-field">
                    <div className="input-with-icon">
                      <FormEmailIcon />
                      <input 
                        type="email" 
                        name="email" 
                        placeholder="Your Email" 
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-field">
                    <div className="input-with-icon">
                      <SubjectIcon />
                      <input 
                        type="text" 
                        name="additionalSubject" 
                        placeholder="Subject" 
                        value={formData.additionalSubject}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-field">
                    <div className="input-with-icon">
                      <FormPhoneIcon />
                      <input 
                        type="tel" 
                        name="phoneNumber" 
                        placeholder="Phone number" 
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
                
                <div className="form-row full-width">
                  <div className="form-field">
                    <div className="input-with-icon">
                      <MessageIcon />
                      <textarea 
                        name="subject" 
                        placeholder="Your Preferred time to contact and any specific inputs to clarify"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                </div>
                
                <div className="form-row full-width">
                  <div className="privacy-checkbox-container">
                    <input 
                      type="checkbox" 
                      id="privacyConsent" 
                      checked={privacyAccepted}
                      onChange={(e) => setPrivacyAccepted(e.target.checked)}
                      className="privacy-checkbox"
                      required
                    />
                    <label htmlFor="privacyConsent" className="privacy-label">
                      I have read and accept the{' '}
                      <a href="/privacy-policy" target="_blank" rel="noopener noreferrer" className="privacy-link">
                        Privacy Policy
                      </a>
                      {' '}and{' '}
                      <a href="/cookie-policy" target="_blank" rel="noopener noreferrer" className="privacy-link">
                        Cookie Consent
                      </a>
                    </label>
                  </div>
                </div>
                
                <button type="submit" className="submit-button" disabled={isSubmitting || !privacyAccepted}>
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
                
                <div className="response-message">
                  <p>We will respond back to you within 2 business days. Alternatively, you may reach out on the above contact numbers.</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <div className="mobile-container" style={{ display: 'flex' }}>
          {/* Mobile Implementation */}
          {/* This will be preserved without significant changes */}
          <div className="mobile-country-selector">
            {Object.keys(countryData).map(countryKey => (
              <div 
                key={countryKey} 
                className={`mobile-country-option ${selectedCountry === countryKey ? 'active' : ''}`}
                onClick={() => handleCountryChange(countryKey)}
              >
                <img src={countryData[countryKey].flag} alt={`${countryData[countryKey].name} Flag`} />
                <span>{countryData[countryKey].name}</span>
              </div>
            ))}
          </div>
          
          <div className="mobile-company-name">
            <h3>{currentCountry.company}</h3>
          </div>
          
          <div className="mobile-contact-section">
            <h2>Contact Information</h2>
            <div className="mobile-office-contact-info">
              <div className="mobile-info-group">
                <h3><EmailIcon /> Email Address</h3>
                <p>{currentCountry.email}</p>
              </div>
              
              <div className="mobile-info-group">
                <h3><PhoneIcon /> Phone Numbers</h3>
                {currentCountry.phone.map((number, index) => (
                  <p key={index}>{number}</p>
                ))}
              </div>
              
              <div className="mobile-info-group">
                <h3><AddressIcon /> Address</h3>
                {currentCountry.address.map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mobile-map">
            <iframe 
              src={currentCountry.mapSrc}
              allowFullScreen="" 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${currentCountry.name} Office Location`}
            />
          </div>
          
          <div className="mobile-form">
            <h2>Send us a message</h2>
            <form onSubmit={handleSubmit}>
              <div className="mobile-form-field">
                <div className="input-with-icon">
                  <UserIcon />
                  <input 
                    type="text" 
                    name="name" 
                    placeholder="Your Name" 
                    value={formData.name} 
                    onChange={handleInputChange} 
                    required 
                  />
                </div>
              </div>
              <div className="mobile-form-field">
                <div className="input-with-icon">
                  <FormEmailIcon />
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="Your Email" 
                    value={formData.email} 
                    onChange={handleInputChange} 
                    required 
                  />
                </div>
              </div>
              <div className="mobile-form-field">
                <div className="input-with-icon">
                  <SubjectIcon />
                  <input 
                    type="text" 
                    name="additionalSubject" 
                    placeholder="Subject" 
                    value={formData.additionalSubject} 
                    onChange={handleInputChange} 
                    required 
                  />
                </div>
              </div>
              <div className="mobile-form-field">
                <div className="input-with-icon">
                  <FormPhoneIcon />
                  <input 
                    type="tel" 
                    name="phone" 
                    placeholder="Phone Number (optional)" 
                    value={formData.phone} 
                    onChange={handleInputChange} 
                  />
                </div>
              </div>
              <div className="mobile-form-field">
                <div className="input-with-icon">
                  <MessageIcon />
                  <textarea 
                    name="message" 
                    placeholder="Your Preferred time to contact and any specific inputs to clarify" 
                    value={formData.message} 
                    onChange={handleInputChange} 
                    required 
                  />
                </div>
              </div>
              
              <div className="mobile-form-field">
                <div className="mobile-privacy-checkbox-container">
                  <input 
                    type="checkbox" 
                    id="mobilePrivacyConsent" 
                    checked={privacyAccepted}
                    onChange={(e) => setPrivacyAccepted(e.target.checked)}
                    className="mobile-privacy-checkbox"
                    required
                  />
                  <label htmlFor="mobilePrivacyConsent" className="mobile-privacy-label">
                    I have read and accept the{' '}
                    <a href="/privacy-policy" target="_blank" rel="noopener noreferrer" className="mobile-privacy-link">
                      Privacy Policy
                    </a>
                    {' '}and{' '}
                    <a href="/cookie-policy" target="_blank" rel="noopener noreferrer" className="mobile-privacy-link">
                      Cookie Consent
                    </a>
                  </label>
                </div>
              </div>
              
              <button 
                type="submit" 
                className="mobile-submit-button"
                disabled={isSubmitting || !privacyAccepted}
              >
                {isSubmitting ? 'Sending...' : 'Submit'}
              </button>
              
              <div className="mobile-response-message">
                <p>We will respond back to you within 2 business days.</p>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Dialogs */}
      {showDialog && (
        <div className="dialog-overlay" onClick={() => setShowDialog(false)}>
          <div className="dialog" onClick={e => e.stopPropagation()}>
            <p>Thank you! Your message has been successfully submitted to our database. We will respond back to you within 2 business days.</p>
            <button onClick={() => setShowDialog(false)} aria-label="close" className="close-button">✕</button>
          </div>
        </div>
      )}
      
      {showErrorDialog && (
        <div className="dialog-overlay" onClick={() => setShowErrorDialog(false)}>
          <div className="dialog" onClick={e => e.stopPropagation()}>
            <p>Sorry, there was an error submitting your message to our database. Please check your internet connection and try again, or contact us directly using the phone numbers provided.</p>
            <button onClick={() => setShowErrorDialog(false)} aria-label="close" className="close-button">✕</button>
          </div>
        </div>
      )}

      {/* Loading Modal - Only show when loading */}
      {showLoadingModal && (
        <div className="dialog-overlay loading-overlay">
          <div className="dialog loading-dialog" onClick={e => e.stopPropagation()}>
            <div className="loading-icon">
              <div className="spinner"></div>
            </div>
            <h2 className="loading-title">Sending Your Message</h2>
            <p className="loading-message">
              Please wait while we send your email...
              <br/><br/>
              <br/>
             
            </p>
          </div>
        </div>
      )}

      {/* Success Modal - Show when success */}
      {showModal && (
        <div className="dialog-overlay success-overlay" onClick={() => setShowModal(false)}>
          <div className="dialog success-dialog" onClick={e => e.stopPropagation()}>
            <div className="success-icon">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" fill="#4CAF50"/>
                <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h2 className="success-title">Thank You!</h2>
            <p className="success-message">
              Your message has been sent successfully! 
              <br/><br/>
              <br/>
              
            </p>
            <div className="success-actions">
              <button onClick={() => setShowModal(false)} className="success-button">
                Got it, thanks!
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Error Status Display */}
      {formSubmitStatus.error && (
        <div className="dialog-overlay" onClick={() => setFormSubmitStatus({ success: '', error: '' })}>
          <div className="dialog" onClick={e => e.stopPropagation()}>
            <p>❌ {formSubmitStatus.error}</p>
            <button onClick={() => setFormSubmitStatus({ success: '', error: '' })} aria-label="close" className="close-button">✕</button>
          </div>
        </div>
      )}
      

      <div className="footer-spacing"></div>
      <Footer />
    </div>
  );
}

export default GetInTouch; 