import './About Vardaan.css';
import vivek from '../../assets/images/About Vardaan/vivek.png';
import srini from '../../assets/images/About Vardaan/srini.png';
import ramana from '../../assets/images/About Vardaan/ramana.png';
import prem from '../../assets/images/About Vardaan/prem.png';
// import gandhi from '../../assets/videos/gandhi.png';
// import susheel from '../../assets/videos/susheel.png';
import gopakumar from '../../assets/images/About Vardaan/Gopa Sir.JPG';
import leadershipBanner from '../../assets/images/About Vardaan/About vardaan background.jpg';
import React, { useEffect, useState, useRef } from 'react';
import Footer from '../../components/Footer';

const leadershipData = [
  {
    title: 'Vivek Challapally',
    subtitle: "Board - Director - Vardaan Group of Companies",
    description: "Vivek Challapally is a senior professional with a remarkable journey that spans over four decades. Armed with a postgraduate engineering degree from the prestigious IIT Kharagpur, Vivek Challapally's expertise encompasses a wide array of domains, making him an invaluable asset to various industries. Vivek Challapally's journey started as an entrepreneur and design engineer, where he laid the foundation for a career that would take him to the highest echelons of the corporate world. He has expertise in the construction industry and was actively involved in thermal plants, nuclear plants, steel plants, etc. His role as Chief Operating Officer (COO) for a corporate conglomerate speaks volumes about his leadership acumen and business prowess. Throughout his illustrious career, Vivek Challapally has lent his expertise to large multinational corporations, aiding them in asset capitalization and valuations across sectors as diverse as oil refineries, steel plants, power plants, and nuclear facilities. His keen insights and strategic guidance have propelled these organizations toward greater success and sustainable growth. A true visionary, Vivek Challapally now spearheads our analytics organization, leading the charge in exploring new horizons and diversifying our business portfolio. His innate ability to grasp complex business dynamics and navigate uncharted territories is a testament to his exceptional leadership. Beyond the boardroom, Vivek Challapally is an ardent sports fan. With a deep-rooted passion for tennis and badminton, he finds inspiration and relaxation on the court and field. This passion reflects his drive to excel both personally and professionally.",
    imageSrc: vivek,
  },
  {
    title: 'Srinivasu Ventrapragada',
    subtitle: "Board - Director at Vardaan Data Sciences and Vardaan Resources",
    description: "Srinivasu V, known as Srini, is a seasoned professional with over 28 years of diverse experience in various domains. Hailing from Bangalore, India, Srini is a management accountant with a Master's in Commerce, combining financial expertise with a deep understanding of technology. Srini holds a post-graduation in Commerce from Andhra University along with a professional qualification from the Institute of Cost and Management Accountants – India. Throughout his extensive career, Srini has made significant contributions across industries including manufacturing, hospitality, IT, sourcing, and even within the dynamic landscape of Unicorns. His areas of proficiency span logistics, accounting, reporting, outsourcing, advisory, and transformation. Srini's unique blend of financial acumen and technical prowess positions him as a valuable techno-functional resource. His insights have been instrumental in driving efficiency and growth in the organizations he's been a part of. With an innate ability to bridge the gap between financial strategies and technological implementations, Srini has consistently delivered solutions that optimize processes and enhance overall business performance. In the world of ever-evolving industries, Srini remains at the forefront of innovation and adaptation. His wealth of experience, combined with his continuous pursuit of excellence, makes him an asset to any team or organization aiming to thrive in today's competitive landscape.",
    imageSrc: srini,
  },
  {
    title: 'Ramana Murthy Venkata Saripalli',
    subtitle: "Board - Director - Vardaan Data Sciences",
    description: "Affectionately known as Ramana, he is a seasoned professional with a remarkable journey in the field of technology and IT landscape transformation. He laid the foundation of his expertise by graduating in engineering from Jawaharlal Nehru Technological University (JNTU), a pivotal step that fueled his passion for technology and innovation. Furthering his educational prowess, Ramana pursued his post-graduation from the prestigious Indian Institute of Technology (IIT) in Mumbai, enhancing his knowledge and skills to excel in the dynamic world of IT. Ramana's career trajectory saw him working for corporate giants across different continents, where he made significant contributions by advising and assisting customers in navigating their IT landscape and strategically driving technology agendas.",
    imageSrc: ramana,
  },
  {
    title: 'Gopakumar N Kavunkal',
    subtitle: "Chief Executive Officer - Vardaan Data Science",
    description: "Gopakumar is the Chief Executive Officer of Vardaan Data Science, overseeing governance, customer acquisition, product and service modeling, and operations. Appointed in March 2025, he brings extensive leadership experience spanning applications engineering, product development, sales, and operations. With over 27 years in the IT industry, Gopakumar excels at aligning key organizational functions—including Sales, Delivery, Practice, Marketing, and Human Resources—to foster a culture of excellence and drive business growth. Before joining Vardaan Data Science, he led strategic business units at companies such as Mascon, Quadrant 4, and Saksoft, delivering complex and innovative solutions across diverse industries.",
    imageSrc: gopakumar,
  },
  {
    title: 'Prem Pillai',
    subtitle: "Director & Country Head, Vardaan, Malaysia",
    description: "Director & Country Head, Vardaan, Malaysia Boasting an illustrious and multifaceted spanning over 8 years, Prem Subramanian Pillai (fondly called Prem) brings a wealth of expertise in the fields of audit, accounting, finance, and taxation. His vocational odyssey and professional journey, which have taken him to prominent business hubs in the UAE and India, have culminated in his current role as the Director and Country Head of Vardaan in Malaysia. In his current capacity, Prem serves as the driving force behind the operations and business development initiatives of the Vardaan team in Malaysia. His superlative leadership is not confined to the precincts of Vardaan alone; it transcends national borders, as he concurrently offers consultancy services to advisory firms domiciled in both the UAE and Singapore, thereby emblemizing his unparalleled and cosmopolitan operational perspicacity. Prior to his stewardship at Vardaan, Prem made a significant impact on the audit sector in Dubai. He distinguished himself as a senior advisor and played an integral role in the management team of a renowned Dubai-based audit firm. Paramount among Prem's discernible attributes is his unwavering and ceaseless dedication to the pursuit of erudition. He holds a master's degree in commerce from Mumbai University and is a qualified chartered accountant from India. His intellectual voracity remains unquenched, as he presently finds himself immersed in the inexorable quest to attain his CPA certification on Malaysian soil. Beyond his professional achievements, Prem is deeply passionate about fostering meaningful connections and collaborations. His expertise extends beyond guiding existing firms; he possesses a unique talent for establishing new businesses on foreign soil, starting from the ground up. His meticulous attention to detail, as well as his exceptional skills in people and network management, have set a remarkable benchmark in his endeavors in offshore company arrangements. Prem's dedication to continuous learning and mentorship is a testament to his commitment to personal and professional growth. He perpetually assumes the mantle of an ever-present fount of sagacious counsel and inspiration to neophyte staff members, embodying the quintessence of a lifelong erudite and mentor par excellence.",
    imageSrc: prem,
  },
//   {
//     title: 'Gandhi Bhamidipati',
//     subtitle: "Vice President - Vardaan Data Sciences",
//     description: "B.S. Gandhi, Vice President at Vardaan Data Sciences, Hyderabad, is a seasoned IT professional with over 40 years of experience spanning software development, project management, quality assurance, and industry certifications. His career journey includes leadership roles at ECIL, CMC Limited, Duncan Infotech, TCS, and Magnaquest Technologies.",
//     imageSrc: gandhi,
//   },
//   {
//     title: 'Susheel Ramadoss',
//     subtitle: "Vice President - Vardaan Group of Companies",
//     description: "Susheel Ramadoss is a distinguished professional with expertise in research, technology, and innovation. He has contributed significantly to AI, data science, and automation through high-impact research, publications, and industry collaborations. His achievements include leading innovative projects, securing awards, and advancing data-driven solutions.",
//     imageSrc: susheel,
//   },
];

const WebsiteImpactAnimatedDescription = ({ text }) => {
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
    <div className="website-impact-desc" ref={descRef}>
      {sentences.map((sentence, idx) => (
        <span
          key={idx}
          className={`website-impact-sentence${visibleSentences.includes(idx) ? ' website-impact-sentence--visible' : ''}`}
        >
          {sentence.trim()}&nbsp;
        </span>
      ))}
    </div>
  );
};

// New AnimatedHeading component for word-by-word transition
const AnimatedHeading = ({ text, className }) => {
  const [isVisible, setIsVisible] = useState(false);
  const headingRef = useRef(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.3 }
    );
    if (headingRef.current) {
      observer.observe(headingRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <h2 ref={headingRef} className={`${className} animated-heading${isVisible ? " animated-heading--visible" : ""}`}>
      {text.split(" ").map((word, idx) => (
        <span
          key={idx}
          className="animated-heading-word"
          style={isVisible ? { animationDelay: `${idx * 0.25 + 0.2}s` } : {}}
        >
          {word + (idx !== text.split(" ").length - 1 ? "\u00A0" : "")}
        </span>
      ))}
    </h2>
  );
};

const Leadership = () => {
  const [expandedProfile, setExpandedProfile] = useState(null);

  const handleToggleProfile = (index) => {
    setExpandedProfile(expandedProfile === index ? null : index);
  };

  useEffect(() => {
    const profileElements = document.querySelectorAll('.leadership-profile');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });
    
    profileElements.forEach(profile => {
      profile.style.opacity = 0;
      profile.style.transform = 'translateY(30px)';
      profile.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(profile);
    });
    
    return () => {
      profileElements.forEach(profile => observer.unobserve(profile));
    };
  }, []);
  
  useEffect(() => {
    const handleResize = () => {
      document.querySelectorAll('.leadership-profile').forEach(profile => {
        profile.style.display = 'none';
        setTimeout(() => {
          profile.style.display = '';
        }, 0);
      });
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <div className="leadership-page">
      <div className="leadership-hero-banner">
        <img src={leadershipBanner} alt="Leadership" className="leadership-banner-image" />
        <div className="leadership-header-content">
          {/* <h1 className="leadership-main-title">About Us</h1>
          <p className="leadership-intro">
            Delivering strategic insight, operational resilience, and digital integrity across industries through precision, independence, and foresight.
          </p> */}
        </div>
      </div>
      
      <section className="about-section">
        <div className="about-container">
          <div className="about-grid">
            <div className="about-column">
              <h2 className="about-section-title">Who We Are</h2>
              <p className="about-description">
                At the heart of India's industrial evolution, <strong>Vardaan</strong> stands as a multi-disciplinary enterprise delivering strategic insight, operational resilience, and digital integrity.
              </p>
              <ul className="about-content-list">
                <li className="about-content-item">
                  Established with <strong>Vardaan Projects Limited (VPL)</strong> in 2005 and strengthened by <strong>Vardaan Resources Limited (VRL)</strong> in 2010
                </li>
                <li className="about-content-item">
                  Consistently supporting clients across sectors including steel, energy, infrastructure, manufacturing, and FMCG
                </li>
                <li className="about-content-item">
                  Specializing in capital asset valuations, plant impairment studies, and FAR preparation with precision and independence
                </li>
                <li className="about-content-item">
                  Leading <strong>Vardaan Cybersecurity</strong> to safeguard critical infrastructure and digital assets with advanced defense strategies
                </li>
              </ul>
            </div>
            
            <div className="about-column">
              <h2 className="about-section-title">Why Choose Us</h2>
              <p className="about-description">
                <strong>Vardaan Data Sciences</strong> shapes a new frontier of value through data-driven transformation, delivering integrated solutions across the intersection of infrastructure, intelligence, and integrity.
              </p>
              <ul className="about-content-list">
                <li className="about-content-item">
                  Advanced asset intelligence and predictive analytics for complex operational environments
                </li>
                <li className="about-content-item">
                  AI-integrated reporting and digital twin simulations supporting future-ready decision-making
                </li>
                <li className="about-content-item">
                  Comprehensive cyber defense strategies with threat modeling and compliance frameworks
                </li>
                <li className="about-content-item">
                  Deep industry knowledge with an expanding client base and commitment to continuous transformation
                </li>
                <li className="about-content-item">
                  Tailored services for energy, heavy industry, and logistics sectors bridging regulatory rigor with real-time protection
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <section className="timeline-section">
        <div className="timeline-container">
          <h2 className="timeline-title">Our Journey Through Time</h2>
          <div className="timeline-wrapper">
            {/* Timeline Bar */}
            <div className="timeline-bar">
              <div className="timeline-segment vardaan-resources" style={{width: '20%'}}></div>
              <div className="timeline-segment vardaan-cyber" style={{width: '20%'}}></div>
              <div className="timeline-segment vardaan-data" style={{width: '20%'}}></div>
              <div className="timeline-segment vardaan-global" style={{width: '20%'}}></div>
              <div className="timeline-segment vardaan-expansion" style={{width: '20%'}}></div>
            </div>
            
            {/* Timeline Items */}
            <div className="timeline-items">
              {/* 2005 - Above timeline */}
              <div className="timeline-item above" data-position="10%">
                <div className="timeline-content">
                  <div className="timeline-text">
                    <h3 className="timeline-company">Vardaan Projects Limited (VPL)</h3>
                    <p className="timeline-description">Founded to provide services in Capitalization, Valuation, and Fixed Assets management. Focus sectors: Energy, Steel, Fertilizer, Cement, and Infrastructure industries. Key Clients: Nayara Energy, JSW Steel, Essar Steel, JSW Energy, OPAL, Usha Martin, SKS Power.</p>
                  </div>
                  <div className="timeline-badge vardaan-resources-badge">2005</div>
                </div>
                <div className="timeline-connector above"></div>
              </div>
              
              {/* 2010 - Below timeline */}
              <div className="timeline-item below" data-position="30%">
                <div className="timeline-connector below"></div>
                <div className="timeline-content">
                  <div className="timeline-badge vardaan-resources-badge">2010</div>
                  <div className="timeline-text">
                    <h3 className="timeline-company">Vardaan Resources Limited (VRL)</h3>
                    <p className="timeline-description">Incorporated as a subsidiary of VPL to separate Fixed Asset services from other emerging business lines. Services: Physical verification of assets, Asset valuation and impairment studies, Capitalization of PPE, Project monitoring and management consulting. Key Clients: JSW Steel, JSW Infra, Hindustan Zinc, JSW Severfield, HBPCL, Udupi Power.</p>
                  </div>
                </div>
              </div>
              
              {/* 2018 - Above timeline */}
              <div className="timeline-item above" data-position="50%">
                <div className="timeline-content">
                  <div className="timeline-text">
                    <h3 className="timeline-company">Entry into Cybersecurity with Prometis</h3>
                    <p className="timeline-description">Vardaan Global launched Prometis Cyber Security to offer Virtual CISO services, Penetration Testing, Cybersecurity as a Service (CaaS), and SOC & SIEM setups. This marked the start of the cybersecurity vertical under the global brand.</p>
                  </div>
                  <div className="timeline-badge vardaan-cyber-badge">2018</div>
                </div>
                <div className="timeline-connector above"></div>
              </div>
              
              {/* 2019 - Below timeline */}
              <div className="timeline-item below" data-position="70%">
                <div className="timeline-connector below"></div>
                <div className="timeline-content">
                  <div className="timeline-badge vardaan-data-badge">2019</div>
                  <div className="timeline-text">
                    <h3 className="timeline-company">Vardaan Sdn Bhd (Malaysia)</h3>
                    <p className="timeline-description">Founded in 2019 with official launch planned for 2020. Services: Cybersecurity, AI/ML solutions, Risk Intelligence, and Training. Markets: Malaysia, India, UAE, US, and UK. Technologies Used: Oracle, Microsoft Azure, Red Hat, SAS.</p>
                  </div>
                </div>
              </div>
              
              {/* 2020 - Above timeline */}
              <div className="timeline-item above" data-position="90%">
                <div className="timeline-content">
                  <div className="timeline-text">
                    <h3 className="timeline-company">Global Expansion</h3>
                    <p className="timeline-description">Vardaan Cybersecurity (Malaysia) begins full-scale operations. Group Headquarters moved to Dubai, UAE. "Vardaan Global" becomes an umbrella brand for all tech and consulting verticals. Clients: Government, BFSI, Energy, and Healthcare sectors.</p>
                  </div>
                  <div className="timeline-badge vardaan-expansion-badge">2020</div>
                </div>
                <div className="timeline-connector above"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Approach and Commitment Section with animated headings */}
      <section className="website-impact-section">
        <div className="website-impact-container">
          <div className="website-impact-left">
            <AnimatedHeading text="Our Approach and Commitment" className="website-impact-title" />
            <WebsiteImpactAnimatedDescription text="Through a combination of in-house expertise and a robust partner ecosystem, we are dedicated to empowering organisations to enhance efficiency, build resilience, and stay ahead in a rapidly changing landscape." />
            <AnimatedHeading text="Our Solutions and Impact" className="website-impact-subtitle" />
            <WebsiteImpactAnimatedDescription text="Our deep strategic insight into the drivers of enterprise growth enables us to help clients achieve secured operations, operational excellence, compliance readiness, and scalable innovation." />
            <WebsiteImpactAnimatedDescription text="Our portfolio includes AI-powered tools and intelligent platforms—ranging from GRC intelligence platforms and smart logistics systems to audit management suites, camera vision AI, digital workers, robotic automation, and cybersecurity solutions—all designed to deliver actionable insights and measurable business impact." />
          </div>
          
        </div>
      </section>
      
      {/* New Leadership Section */}
      <section className="leadership-section">
        <div className="leadership-section-container">
          <h2 className="leadership-section-title">Leadership</h2>
          
          <div className="leadership-grid">
            {/* First Row - 3 members */}
            <div className="leadership-row">
              {leadershipData.slice(0, 3).map((profile, index) => (
                <div key={index} className="leadership-card-wrapper">
                  <div className="leadership-card">
                    <div className="leadership-card-image">
                      <img src={profile.imageSrc} alt={profile.title} />
                    </div>
                    <div className="leadership-card-content">
                      <h3 className="leadership-card-name">{profile.title}</h3>
                      <p className="leadership-card-designation">{profile.subtitle}</p>
                      <button 
                        className="leadership-toggle-btn"
                        onClick={() => handleToggleProfile(index)}
                      >
                        {expandedProfile === index ? '−' : '+'}
                      </button>
                    </div>
                  </div>
                  
                  {/* Individual Expanded Content for Mobile */}
                  {expandedProfile === index && (
                    <div className="leadership-expanded-individual">
                      <div className="leadership-expanded-content">
                        <div className="leadership-expanded-inner">
                          <div className="leadership-expanded-description">
                            <p>{profile.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {/* Expanded Description for First Row - Desktop Only */}
            {expandedProfile !== null && expandedProfile < 3 && (
              <div className="leadership-expanded-row desktop-only">
                <div className="leadership-expanded-content">
                  <div className="leadership-expanded-inner">
                    <div className="leadership-expanded-description">
                      <p>{leadershipData[expandedProfile].description}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Second Row - 2 members */}
            <div className="leadership-row leadership-row-centered">
              {leadershipData.slice(3, 5).map((profile, index) => (
                <div key={index + 3} className="leadership-card-wrapper">
                  <div className="leadership-card">
                    <div className="leadership-card-image">
                      <img src={profile.imageSrc} alt={profile.title} />
                    </div>
                    <div className="leadership-card-content">
                      <h3 className="leadership-card-name">{profile.title}</h3>
                      <p className="leadership-card-designation">{profile.subtitle}</p>
                      <button 
                        className="leadership-toggle-btn"
                        onClick={() => handleToggleProfile(index + 3)}
                      >
                        {expandedProfile === index + 3 ? '−' : '+'}
                      </button>
                    </div>
                  </div>
                  
                  {/* Individual Expanded Content for Mobile */}
                  {expandedProfile === index + 3 && (
                    <div className="leadership-expanded-individual">
                      <div className="leadership-expanded-content">
                        <div className="leadership-expanded-inner">
                          <div className="leadership-expanded-description">
                            <p>{profile.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {/* Expanded Description for Second Row - Desktop Only */}
            {expandedProfile !== null && expandedProfile >= 3 && (
              <div className="leadership-expanded-row desktop-only">
                <div className="leadership-expanded-content">
                  <div className="leadership-expanded-inner">
                    <div className="leadership-expanded-description">
                      <p>{leadershipData[expandedProfile].description}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Leadership; 