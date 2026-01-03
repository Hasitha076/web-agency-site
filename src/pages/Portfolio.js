import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CTA from '../components/CTA';

export default function PortfolioPage() {
  const [filter, setFilter] = useState('all');
  const [expandedId, setExpandedId] = useState(null);

  const portfolioItems = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'web',
      image: process.env.PUBLIC_URL + '/images/case-study-1.jpg',
      description: 'Modern e-commerce platform with seamless checkout experience',
      overview: 'Full-stack e-commerce solution built for a growing retail brand, featuring a modern UI and optimized checkout flow',
      challenge: 'The client needed a scalable e-commerce platform that could handle high traffic during sales events while providing an intuitive shopping experience across all devices.',
      solution: 'We built a responsive React-based storefront with server-side rendering for SEO, integrated payment gateways, real-time inventory management, and implemented advanced caching strategies for optimal performance.',
      features: [
        'Real-time inventory synchronization',
        'Multi-payment gateway integration',
        'Advanced product filtering and search',
        'Wishlist and cart persistence',
        'Order tracking and management'
      ],
      results: [
        '200% increase in mobile conversions',
        '40% faster page load times',
        'Handles 10,000+ concurrent users',
        '35% reduction in cart abandonment'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Redis', 'Stripe'],
      link: '#'
    },
    {
      id: 2,
      title: 'Mobile Banking App',
      category: 'mobile',
      image: process.env.PUBLIC_URL + '/images/case-study-1.jpg',
      description: 'Secure mobile banking solution with biometric authentication',
      overview: 'Native mobile banking application with enterprise-grade security and intuitive user experience',
      challenge: 'Building a secure yet user-friendly banking app that meets regulatory compliance while providing instant access to financial services.',
      solution: 'Developed native iOS and Android apps with end-to-end encryption, biometric authentication, offline capabilities, and real-time transaction notifications using push technology.',
      features: [
        'Biometric authentication (Face ID/Touch ID)',
        'Instant fund transfers',
        'Bill payment and scheduling',
        'Digital card management',
        'Transaction categorization and insights'
      ],
      results: [
        '500K+ active users',
        '4.7/5 star rating',
        '99.9% uptime',
        'Zero security breaches'
      ],
      technologies: ['React Native', 'Firebase', 'AWS', 'PostgreSQL', 'Node.js'],
      link: '#'
    },
    {
      id: 3,
      title: 'AI Analytics Dashboard',
      category: 'design',
      image: process.env.PUBLIC_URL + '/images/case-study-1.jpg',
      description: 'Intelligent analytics platform with predictive insights',
      overview: 'Advanced analytics dashboard powered by machine learning for data-driven decision making',
      challenge: 'Creating an intuitive interface that makes complex data analysis accessible to non-technical users while providing powerful insights.',
      solution: 'Designed and developed an interactive dashboard with AI-powered predictive analytics, customizable widgets, real-time data visualization, and natural language query capabilities.',
      features: [
        'Predictive analytics with ML models',
        'Custom report builder',
        'Interactive data visualizations',
        'Automated anomaly detection',
        'Natural language queries'
      ],
      results: [
        '70% faster data analysis',
        '90% user satisfaction rate',
        'Processing 1M+ data points/second',
        '50% reduction in manual reporting'
      ],
      technologies: ['Python', 'TensorFlow', 'React', 'D3.js', 'Apache Kafka'],
      link: '#'
    },
    {
      id: 4,
      title: 'Healthcare Portal',
      category: 'web',
      image: process.env.PUBLIC_URL + '/images/case-study-1.jpg',
      description: 'Patient management system with telemedicine capabilities',
      overview: 'Comprehensive healthcare platform connecting patients with healthcare providers through secure telemedicine',
      challenge: 'Creating a HIPAA-compliant platform that enables seamless virtual consultations while maintaining patient data security.',
      solution: 'Built a secure web portal with encrypted video consultations, electronic health records, appointment scheduling, prescription management, and integrated billing system.',
      features: [
        'HD video consultations',
        'Electronic health records (EHR)',
        'Prescription management',
        'Appointment scheduling',
        'Secure document sharing'
      ],
      results: [
        '10,000+ virtual consultations',
        'HIPAA compliance certified',
        '85% patient satisfaction',
        '60% reduction in no-shows'
      ],
      technologies: ['Vue.js', 'Node.js', 'PostgreSQL', 'WebRTC', 'AWS'],
      link: '#'
    },
    {
      id: 5,
      title: 'Fitness Tracking App',
      category: 'mobile',
      image: process.env.PUBLIC_URL + '/images/case-study-1.jpg',
      description: 'Comprehensive fitness tracking with social features',
      overview: 'Social fitness platform that motivates users through community engagement and personalized workout plans',
      challenge: 'Building an engaging fitness app that keeps users motivated through social features while accurately tracking various workout types.',
      solution: 'Created a cross-platform mobile app with workout tracking, social challenges, personalized training plans, nutrition logging, and integration with wearable devices.',
      features: [
        'Multi-sport activity tracking',
        'Social challenges and leaderboards',
        'Personalized workout plans',
        'Nutrition and calorie tracking',
        'Wearable device integration'
      ],
      results: [
        '250K+ active users',
        '4.6/5 app store rating',
        '1M+ workouts logged',
        '75% 30-day retention rate'
      ],
      technologies: ['Swift', 'Kotlin', 'Firebase', 'HealthKit', 'Google Fit'],
      link: '#'
    },
    {
      id: 6,
      title: 'Brand Identity Design',
      category: 'design',
      image: process.env.PUBLIC_URL + '/images/case-study-1.jpg',
      description: 'Complete brand identity for tech startup',
      overview: 'Comprehensive brand identity system including logo, visual guidelines, and marketing collateral for emerging tech company',
      challenge: 'Creating a distinctive brand identity that stands out in the competitive tech industry while conveying innovation and trustworthiness.',
      solution: 'Developed a complete brand identity system including logo design, color palette, typography, iconography, brand guidelines, and marketing templates with a modern, tech-forward aesthetic.',
      features: [
        'Custom logo and brand mark',
        'Comprehensive brand guidelines',
        'Marketing collateral templates',
        'Social media asset library',
        'Motion graphics and animations'
      ],
      results: [
        '300% increase in brand recognition',
        '150+ marketing assets created',
        'Award-winning design',
        'Featured in design publications'
      ],
      technologies: ['Figma', 'Illustrator', 'After Effects', 'Photoshop', 'InDesign'],
      link: '#'
    },
    {
      id: 7,
      title: 'Real Estate Platform',
      category: 'web',
      image: process.env.PUBLIC_URL + '/images/case-study-1.jpg',
      description: 'Property listing platform with virtual tours',
      overview: 'Modern real estate marketplace with immersive 3D virtual tours and advanced property search',
      challenge: 'Building a property platform that provides immersive viewing experiences online while handling large amounts of listing data efficiently.',
      solution: 'Developed a Next.js platform with 3D virtual tours, interactive maps, advanced filtering, saved searches, and real-time notifications for new listings matching user preferences.',
      features: [
        '3D virtual property tours',
        'Interactive map-based search',
        'Advanced filtering options',
        'Saved searches and alerts',
        'Mortgage calculator integration'
      ],
      results: [
        '50,000+ property listings',
        '2M+ monthly page views',
        '45% increase in lead generation',
        '30% faster property sales'
      ],
      technologies: ['Next.js', 'GraphQL', 'AWS', 'Three.js', 'Mapbox'],
      link: '#'
    },
    {
      id: 8,
      title: 'Food Delivery App',
      category: 'mobile',
      image: process.env.PUBLIC_URL + '/images/case-study-1.jpg',
      description: 'On-demand food delivery with real-time tracking',
      overview: 'Fast and reliable food delivery platform connecting customers with local restaurants',
      challenge: 'Creating a seamless three-sided marketplace for customers, restaurants, and delivery drivers with real-time coordination.',
      solution: 'Built a React Native app with real-time order tracking, smart routing algorithms, in-app payments, restaurant management dashboard, and driver dispatch system.',
      features: [
        'Real-time order tracking',
        'Smart delivery routing',
        'Multiple payment options',
        'Restaurant management portal',
        'Rating and review system'
      ],
      results: [
        '1,000+ partner restaurants',
        '100K+ monthly orders',
        'Average 30-minute delivery',
        '4.5/5 customer rating'
      ],
      technologies: ['React Native', 'Node.js', 'MongoDB', 'Socket.io', 'Google Maps'],
      link: '#'
    },
    {
      id: 9,
      title: 'SaaS Dashboard',
      category: 'design',
      image: process.env.PUBLIC_URL + '/images/case-study-1.jpg',
      description: 'Modern dashboard design for SaaS product',
      overview: 'Intuitive and powerful dashboard interface for enterprise SaaS platform',
      challenge: 'Designing a complex dashboard that presents vast amounts of data in an accessible way while maintaining visual clarity.',
      solution: 'Created a modular dashboard design with customizable layouts, dark mode support, interactive data visualizations, and responsive design for all screen sizes.',
      features: [
        'Customizable widget layouts',
        'Dark and light mode',
        'Interactive charts and graphs',
        'Responsive design',
        'Accessibility compliant (WCAG 2.1)'
      ],
      results: [
        '40% improvement in user engagement',
        '95% accessibility score',
        '60% reduction in support tickets',
        'Featured in design showcases'
      ],
      technologies: ['Figma', 'Sketch', 'Principle', 'InVision', 'Zeplin'],
      link: '#'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'design', label: 'Design' }
  ];

  const filteredItems = filter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  return (
    <div className="portfolio-page">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          padding: '120px 20px',
          textAlign: 'center'
        }}>
          <div className="container">
            <h1 style={{fontSize: '3.5rem', fontWeight: '700', marginBottom: '1.5rem'}}>
              Our Portfolio
            </h1>
            <p style={{fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto', opacity: '0.95'}}>
              Discover our diverse range of projects across web, mobile, and design. Each project represents our commitment to excellence and innovation.
            </p>
          </div>
        </section>

        {/* Filter Tabs */}
        <section style={{padding: '60px 20px 40px'}}>
          <div className="container">
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '15px',
              marginBottom: '50px'
            }}>
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setFilter(cat.id);
                    setExpandedId(null); // Reset expanded state when filter changes
                  }}
                  style={{
                    padding: '12px 30px',
                    border: filter === cat.id ? '2px solid #667eea' : '2px solid #e0e0e0',
                    background: filter === cat.id ? '#667eea' : 'white',
                    color: filter === cat.id ? 'white' : '#666',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    if (filter !== cat.id) {
                      e.currentTarget.style.borderColor = '#667eea';
                      e.currentTarget.style.color = '#667eea';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (filter !== cat.id) {
                      e.currentTarget.style.borderColor = '#e0e0e0';
                      e.currentTarget.style.color = '#666';
                    }
                  }}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Portfolio Grid */}
            <div className="row">
              {filteredItems.map(item => (
                <div key={item.id} className="col-lg-6 col-md-12" style={{marginBottom: '40px'}}>
                  <div style={{
                    borderRadius: '12px',
                    overflow: 'hidden',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    background: 'white'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
                  }}>
                    {/* Image */}
                    <div style={{
                      background: item.image ? `url(${item.image}) center/cover no-repeat` : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      height: '250px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: '3rem',
                      fontWeight: '700',
                      textAlign: 'center',
                      padding: '20px'
                    }}>
                      {/* Optional: Display first letter or icon */}
                    </div>

                    {/* Content */}
                    <div style={{padding: '30px'}}>
                      <div style={{marginBottom: '15px'}}>
                        <span style={{
                          display: 'inline-block',
                          background: '#f0f4ff',
                          color: '#667eea',
                          padding: '6px 12px',
                          borderRadius: '20px',
                          fontSize: '0.85rem',
                          fontWeight: '600',
                          textTransform: 'capitalize'
                        }}>
                          {filter === 'all' ? item.category : categories.find(c => c.id === item.category)?.label || item.category}
                        </span>
                      </div>

                      <h3 style={{
                        fontSize: '1.5rem',
                        fontWeight: '700',
                        marginBottom: '15px',
                        color: '#1a1a1a'
                      }}>
                        {item.title}
                      </h3>
                      
                      <p style={{
                        fontSize: '0.95rem',
                        color: '#666',
                        marginBottom: '20px',
                        lineHeight: '1.6',
                        minHeight: '60px'
                      }}>
                        {item.overview}
                      </p>

                      {/* Expand/Collapse Button */}
                      <button
                        onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                        style={{
                          background: '#667eea',
                          color: 'white',
                          border: 'none',
                          padding: '12px 24px',
                          borderRadius: '8px',
                          cursor: 'pointer',
                          fontWeight: '600',
                          transition: 'all 0.3s ease',
                          width: '100%'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = '#764ba2';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = '#667eea';
                        }}
                      >
                        {expandedId === item.id ? 'Show Less' : 'View Full Details'}
                      </button>
                    </div>

                    {/* Expanded Details */}
                    {expandedId === item.id && (
                      <div style={{
                        padding: '30px',
                        borderTop: '1px solid #eee',
                        background: '#f9fafb',
                        animation: 'slideDown 0.3s ease'
                      }}>
                        <h4 style={{fontSize: '1.2rem', fontWeight: '700', marginBottom: '15px', color: '#1a1a1a'}}>
                          Challenge
                        </h4>
                        <p style={{fontSize: '0.95rem', color: '#666', marginBottom: '25px', lineHeight: '1.6'}}>
                          {item.challenge}
                        </p>

                        <h4 style={{fontSize: '1.2rem', fontWeight: '700', marginBottom: '15px', color: '#1a1a1a'}}>
                          Solution
                        </h4>
                        <p style={{fontSize: '0.95rem', color: '#666', marginBottom: '25px', lineHeight: '1.6'}}>
                          {item.solution}
                        </p>

                        <h4 style={{fontSize: '1.2rem', fontWeight: '700', marginBottom: '15px', color: '#1a1a1a'}}>
                          Key Features
                        </h4>
                        <ul style={{marginBottom: '25px', paddingLeft: '20px'}}>
                          {item.features.map((feature, idx) => (
                            <li key={idx} style={{fontSize: '0.95rem', color: '#666', marginBottom: '10px', lineHeight: '1.6'}}>
                              ✓ {feature}
                            </li>
                          ))}
                        </ul>

                        <h4 style={{fontSize: '1.2rem', fontWeight: '700', marginBottom: '15px', color: '#1a1a1a'}}>
                          Results
                        </h4>
                        <ul style={{marginBottom: '25px', paddingLeft: '20px'}}>
                          {item.results.map((result, idx) => (
                            <li key={idx} style={{fontSize: '0.95rem', color: '#666', marginBottom: '10px', lineHeight: '1.6'}}>
                              ✓ {result}
                            </li>
                          ))}
                        </ul>

                        <h4 style={{fontSize: '1.2rem', fontWeight: '700', marginBottom: '15px', color: '#1a1a1a'}}>
                          Technologies Used
                        </h4>
                        <div style={{display: 'flex', flexWrap: 'wrap', gap: '10px'}}>
                          {item.technologies.map((tech, idx) => (
                            <span key={idx} style={{
                              background: '#e8eef7',
                              color: '#667eea',
                              padding: '6px 12px',
                              borderRadius: '6px',
                              fontSize: '0.85rem',
                              fontWeight: '600'
                            }}>
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTA />
      </main>

      <Footer />

      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
