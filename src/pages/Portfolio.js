import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CTA from '../components/CTA';

export default function PortfolioPage() {
  const [filter, setFilter] = useState('all');

  const portfolioItems = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'web',
      image: process.env.PUBLIC_URL + '/images/case-study-1.jpg',
      description: 'Modern e-commerce platform with seamless checkout experience',
      technologies: ['React', 'Node.js', 'MongoDB'],
      link: '#'
    },
    {
      id: 2,
      title: 'Mobile Banking App',
      category: 'mobile',
      image: process.env.PUBLIC_URL + '/images/case-study-1.jpg',
      description: 'Secure mobile banking solution with biometric authentication',
      technologies: ['React Native', 'Firebase', 'AWS'],
      link: '#'
    },
    {
      id: 3,
      title: 'AI Analytics Dashboard',
      category: 'design',
      image: process.env.PUBLIC_URL + '/images/case-study-1.jpg',
      description: 'Intelligent analytics platform with predictive insights',
      technologies: ['Python', 'TensorFlow', 'React'],
      link: '#'
    },
    {
      id: 4,
      title: 'Healthcare Portal',
      category: 'web',
      image: process.env.PUBLIC_URL + '/images/case-study-1.jpg',
      description: 'Patient management system with telemedicine capabilities',
      technologies: ['Vue.js', 'Node.js', 'PostgreSQL'],
      link: '#'
    },
    {
      id: 5,
      title: 'Fitness Tracking App',
      category: 'mobile',
      image: process.env.PUBLIC_URL + '/images/case-study-1.jpg',
      description: 'Comprehensive fitness tracking with social features',
      technologies: ['Swift', 'Kotlin', 'Firebase'],
      link: '#'
    },
    {
      id: 6,
      title: 'Brand Identity Design',
      category: 'design',
      image: process.env.PUBLIC_URL + '/images/case-study-1.jpg',
      description: 'Complete brand identity for tech startup',
      technologies: ['Figma', 'Illustrator', 'After Effects'],
      link: '#'
    },
    {
      id: 7,
      title: 'Real Estate Platform',
      category: 'web',
      image: process.env.PUBLIC_URL + '/images/case-study-1.jpg',
      description: 'Property listing platform with virtual tours',
      technologies: ['Next.js', 'GraphQL', 'AWS'],
      link: '#'
    },
    {
      id: 8,
      title: 'Food Delivery App',
      category: 'mobile',
      image: process.env.PUBLIC_URL + '/images/case-study-1.jpg',
      description: 'On-demand food delivery with real-time tracking',
      technologies: ['React Native', 'Node.js', 'MongoDB'],
      link: '#'
    },
    {
      id: 9,
      title: 'SaaS Dashboard',
      category: 'design',
      image: process.env.PUBLIC_URL + '/images/case-study-1.jpg',
      description: 'Modern dashboard design for SaaS product',
      technologies: ['Figma', 'Sketch', 'Principle'],
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
        <section style={{padding: '60px 20px 40px', background: '#f9fafb'}}>
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
                  onClick={() => setFilter(cat.id)}
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
                <div key={item.id} className="col-lg-4 col-md-6" style={{marginBottom: '40px'}}>
                  <div style={{
                    borderRadius: '12px',
                    overflow: 'hidden',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    background: 'white'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = '0 12px 40px rgba(102, 126, 234, 0.3)';
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
                      position: 'relative',
                      overflow: 'hidden'
                    }}>
                      {/* Overlay on hover */}
                      <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'rgba(102, 126, 234, 0.9)',
                        opacity: 0,
                        transition: 'opacity 0.3s ease',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
                      onMouseLeave={(e) => e.currentTarget.style.opacity = 0}>
                        <span style={{
                          color: 'white',
                          fontSize: '1.2rem',
                          fontWeight: '600'
                        }}>View Project</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div style={{padding: '25px'}}>
                      <h3 style={{
                        fontSize: '1.4rem',
                        fontWeight: '700',
                        marginBottom: '10px',
                        color: '#1a1a1a'
                      }}>
                        {item.title}
                      </h3>
                      
                      <p style={{
                        fontSize: '0.95rem',
                        color: '#666',
                        marginBottom: '20px',
                        lineHeight: '1.6'
                      }}>
                        {item.description}
                      </p>

                      {/* Technologies */}
                      <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '8px',
                        marginBottom: '20px'
                      }}>
                        {item.technologies.map((tech, idx) => (
                          <span key={idx} style={{
                            background: '#f0f4ff',
                            color: '#667eea',
                            padding: '4px 10px',
                            borderRadius: '4px',
                            fontSize: '0.8rem',
                            fontWeight: '600'
                          }}>
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* View Project Link */}
                      <a
                        href={item.link}
                        style={{
                          color: '#667eea',
                          fontSize: '0.95rem',
                          fontWeight: '600',
                          textDecoration: 'none',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '5px',
                          transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.gap = '10px';
                          e.currentTarget.style.color = '#764ba2';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.gap = '5px';
                          e.currentTarget.style.color = '#667eea';
                        }}
                      >
                        View Details →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTA />
      </main>

      <Footer />
    </div>
  );
}
