import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Truck, Package, Factory, Briefcase, 
  Globe, Shield, Clock, HeartHandshake, Phone, MapPin, ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import './Home.css';

// Reusable scroll reveal component
const FadeInWhenVisible = ({ children, delay = 0, direction = 'up', className = '' }: any) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const variants = {
    hidden: { 
      opacity: 0, 
      y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
      x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      x: 0,
      transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as any } 
    }
  };

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        {/* Cinematic Video Background */}
        <div className="hero-video-bg">
          <div className="video-overlay"></div>
        </div>
        
        <div className="container hero-container">
          <div className="hero-content">
            <motion.div 
              className="eyebrow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <div className="eyebrow-line"></div>
              <span>TRUSTED TRANSPORT PARTNER</span>
            </motion.div>
            
            <motion.h1 
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Moving Businesses Forward With <span className="text-gold">Reliable</span> Transportation Solutions
            </motion.h1>
            
            <motion.p 
              className="hero-desc"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Durga Transport Services India delivers dependable logistics and transportation support focused on safety, efficiency and long-term client relationships.
            </motion.p>
            
            <motion.div 
              className="hero-actions"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <Link to="/contact" className="btn-primary">Get Quote</Link>
              <Link to="/services" className="btn-secondary">Explore Services</Link>
            </motion.div>
          </div>
          
          <motion.div 
            className="hero-visual"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            <div className="dashboard-widget glass-panel">
              <div className="widget-header">
                <h3>Active Transport Routes</h3>
                <span className="live-indicator"><span className="dot"></span> Live</span>
              </div>
              <div className="route-map">
                <div className="route-line"></div>
                <div className="route-point start"><span>Delhi</span></div>
                <div className="route-point mid"><span>Jaipur</span></div>
                <div className="route-point end"><span>Mumbai</span></div>
              </div>
              
              <div className="stats-grid">
                <div className="stat-box">
                  <span className="stat-label">Delivery Efficiency</span>
                  <span className="stat-value">98.5%</span>
                </div>
                <div className="stat-box">
                  <span className="stat-label">Service Reliability</span>
                  <span className="stat-value">99.9%</span>
                </div>
              </div>
            </div>
            
            <motion.div 
              className="floating-card glass-panel"
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <div className="card-icon"><HeartHandshake size={24} /></div>
              <div className="card-info">
                <h4>Customer Satisfaction</h4>
                <div className="progress-bar"><div className="progress" style={{width: '96%'}}></div></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Strip */}
      <div className="stats-strip-wrapper">
        <div className="container">
          <div className="stats-strip glass-panel">
            {[
              { value: "500+", label: "Fleet Vehicles" },
              { value: "10k+", label: "Happy Clients" },
              { value: "99.9%", label: "On-Time Delivery" },
              { value: "24/7", label: "Active Support" }
            ].map((stat, index) => (
              <FadeInWhenVisible key={index} delay={index * 0.1}>
                <div className="stat-strip-item">
                  <span className="stat-strip-value">{stat.value}</span>
                  <span className="stat-strip-label">{stat.label}</span>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="about-section">
        <div className="container about-container">
          <FadeInWhenVisible direction="right" className="about-visual">
            <div className="about-image-wrapper">
              {/* Placeholder for about image */}
              <div className="about-image"></div>
              <div className="experience-badge glass-panel">
                <span className="exp-number">20+</span>
                <span className="exp-text">Years of<br/>Excellence</span>
              </div>
            </div>
          </FadeInWhenVisible>
          
          <div className="about-content">
            <FadeInWhenVisible>
              <h2 className="section-title">Built On Reliability, Driven By Commitment</h2>
            </FadeInWhenVisible>
            
            <FadeInWhenVisible delay={0.2}>
              <p className="section-desc">
                Durga Transport Services India is dedicated to providing dependable transportation solutions while maintaining high standards of service quality, professionalism and operational excellence.
              </p>
            </FadeInWhenVisible>
            
            <div className="feature-grid">
              {[
                { icon: <Briefcase size={24} />, title: "Professional Operations" },
                { icon: <HeartHandshake size={24} />, title: "Customer Focus" },
                { icon: <Shield size={24} />, title: "Safety First" },
                { icon: <Globe size={24} />, title: "Nationwide Support" }
              ].map((feature, idx) => (
                <FadeInWhenVisible key={idx} delay={0.3 + (idx * 0.1)}>
                  <div className="feature-card glass-panel">
                    <div className="feature-icon">{feature.icon}</div>
                    <h4>{feature.title}</h4>
                  </div>
                </FadeInWhenVisible>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <div className="section-header text-center">
            <FadeInWhenVisible>
              <h2 className="section-title">Transportation Services Designed For Modern Business</h2>
            </FadeInWhenVisible>
          </div>
          
          <div className="services-grid">
            {[
              { icon: <Truck size={24} />, title: "Road Transportation", desc: "Reliable and efficient over-the-road freight movement across the country.", img: "/service_1.png" },
              { icon: <Package size={24} />, title: "Freight Movement", desc: "Secure handling and transportation of varied freight sizes and requirements.", img: "/hero_bg.png" },
              { icon: <Factory size={24} />, title: "Industrial Transportation", desc: "Specialized logistics for heavy industrial equipment and materials.", img: "/showcase_1.png" },
              { icon: <Briefcase size={24} />, title: "Commercial Logistics", desc: "End-to-end transportation solutions tailored for commercial enterprises.", img: "/about_img.png" },
              { icon: <Globe size={24} />, title: "Cargo Handling", desc: "Expert loading, unloading, and secure handling of sensitive cargo.", img: "/showcase_2.png" },
              { icon: <Clock size={24} />, title: "Supply Chain Support", desc: "Integrated transportation support to optimize your supply chain operations.", img: "/showcase_3.png" }
            ].map((service, idx) => (
              <FadeInWhenVisible key={idx} delay={idx * 0.1}>
                <div className="service-card">
                  <div className="service-card-bg" style={{ backgroundImage: `url(${service.img})` }}></div>
                  <div className="service-card-overlay"></div>
                  
                  <div className="service-card-content">
                    <div className="service-icon-wrapper">
                      {service.icon}
                    </div>
                    <div className="service-text">
                      <h3>{service.title}</h3>
                      <p>{service.desc}</p>
                      <Link to="/services" className="service-link">
                        Learn more <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Showcase */}
      <section className="showcase-section">
        <div className="container">
          <FadeInWhenVisible>
            <h2 className="section-title text-center mb-5">Why Businesses Choose DTS</h2>
          </FadeInWhenVisible>
          
          <div className="showcase-cards">
            {[
              { title: "Reliable Operations", img: "abstract-1", delay: 0.1, num: "01" },
              { title: "Timely Service", img: "abstract-2", delay: 0.2, num: "02" },
              { title: "Customer Commitment", img: "abstract-3", delay: 0.3, num: "03" }
            ].map((card, idx) => (
              <FadeInWhenVisible key={idx} delay={card.delay} className={`showcase-card-wrapper card-offset-${idx}`}>
                <div className="showcase-card dark-panel">
                  <div className="showcase-number">{card.num}</div>
                  <div className={`showcase-img-placeholder ${card.img}`}></div>
                  <div className="showcase-content">
                    <h3>{card.title}</h3>
                    <div className="card-divider"></div>
                    <p>Delivering excellence through our dedicated network and rigorous operational standards.</p>
                  </div>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <FadeInWhenVisible>
            <div className="cta-card glass-panel">
              <div className="cta-content">
                <h2 className="cta-title">Looking For A Reliable Transport Partner?</h2>
                <p className="cta-desc">Connect with our team to discuss your transportation requirements and receive a customized logistics solution.</p>
              </div>
              
              <div className="cta-contact glass-panel">
                <div className="contact-item">
                  <Phone className="contact-icon text-gold" size={24} />
                  <div>
                    <span className="contact-label">Call Us</span>
                    <span className="contact-value">9812773410</span>
                  </div>
                </div>
                
                <div className="contact-item">
                  <MapPin className="contact-icon text-gold" size={24} />
                  <div>
                    <span className="contact-label">Head Office</span>
                    <span className="contact-value text-small">DTS House Near Nahar Maruti Suzuki Workshop,<br/>Dhankot, Gurugram, Haryana 122505</span>
                  </div>
                </div>
                
                <Link to="/contact" className="btn-primary cta-btn">Get In Touch</Link>
              </div>
            </div>
          </FadeInWhenVisible>
        </div>
      </section>
    </div>
  );
};
