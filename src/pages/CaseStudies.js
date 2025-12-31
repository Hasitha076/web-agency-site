import React, { useState } from 'react';
import Header from '../components/Header';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

export default function CaseStudiesPage() {
  const [expandedId, setExpandedId] = useState(null);

  const caseStudies = [
    {
      id: 1,
      title: 'E-Commerce Platform Redesign',
      client: 'Global Retail Brand',
      category: 'Web Development',
      image: process.env.PUBLIC_URL + '/images/case-study-1.jpg',
      overview: 'Complete redesign and modernization of legacy e-commerce platform affecting millions of users',
      challenge: 'The client\'s 10-year-old e-commerce platform was suffering from poor user experience, slow load times, and high cart abandonment rates. The platform couldn\'t scale to handle peak traffic, and conversion rates were declining year-over-year.',
      solution: 'We implemented a complete technical overhaul with a modern microservices architecture, React frontend, and optimized backend infrastructure. We redesigned the user interface for better conversion, implemented progressive web app technology, and added personalization features using machine learning.',
      results: [
        '150% increase in conversion rate within 6 months',
        '70% reduction in page load time',
        '45% decrease in cart abandonment',
        '$12M additional revenue in first year',
        '3x improvement in mobile user engagement'
      ],
      technologies: ['React', 'Node.js', 'AWS', 'MongoDB', 'GraphQL']
    },
    {
      id: 2,
      title: 'Mobile Banking Application',
      client: 'Leading Financial Institution',
      category: 'Mobile Development',
      image: process.env.PUBLIC_URL + '/images/case-study-1.jpg',
      overview: 'Development of secure mobile banking platform for millions of users with real-time transaction processing',
      challenge: 'The bank needed to modernize their mobile offering to compete with fintech startups. They required a secure, intuitive app that could handle millions of daily transactions while meeting strict regulatory compliance requirements.',
      solution: 'We built a native iOS and Android app with end-to-end encryption, biometric authentication, and real-time transaction processing. Implemented blockchain technology for settlement and created a sophisticated fraud detection system using machine learning.',
      results: [
        '2.5M active users within first year',
        '99.99% uptime maintained',
        '45% reduction in fraud incidents',
        '$500M transaction volume in year one',
        '4.8/5 star rating on app stores'
      ],
      technologies: ['Swift', 'Kotlin', 'Node.js', 'PostgreSQL', 'Blockchain']
    },
    {
      id: 3,
      title: 'AI Analytics Dashboard',
      client: 'Enterprise Software Company',
      category: 'AI & Data Science',
      image: process.env.PUBLIC_URL + '/images/case-study-1.jpg',
      overview: 'Custom analytics platform with AI-powered insights for Fortune 500 companies',
      challenge: 'The client needed to help their enterprise customers make sense of massive datasets. Manual analysis was slow and error-prone. They required an intelligent system that could automatically identify trends and anomalies.',
      solution: 'We developed a custom analytics platform leveraging machine learning models for predictive analytics and anomaly detection. Built an intuitive dashboard with interactive visualizations and real-time data processing using streaming architecture.',
      results: [
        '40% faster decision-making for end users',
        'Processed 500B+ data points daily',
        '85% improvement in anomaly detection accuracy',
        '$8M in contracts using analytics dashboard',
        'Reduced time-to-insight from hours to minutes'
      ],
      technologies: ['Python', 'TensorFlow', 'Apache Spark', 'React', 'AWS']
    },
    {
      id: 4,
      title: 'Healthcare System Integration',
      client: 'Regional Hospital Network',
      category: 'Healthcare Tech',
      image: process.env.PUBLIC_URL + '/images/case-study-1.jpg',
      overview: 'Unified platform connecting 15 hospitals and 200+ clinics for seamless patient care',
      challenge: 'Multiple legacy systems across different facilities made patient data fragmented and inaccessible. This created inefficiencies and patient safety risks. The hospital network needed a single source of truth for patient information.',
      solution: 'Created a HIPAA-compliant, integrated healthcare platform with electronic health records, appointment scheduling, telemedicine capabilities, and prescription management. Implemented HL7 and FHIR standards for interoperability.',
      results: [
        '95% reduction in medical errors due to data access',
        '30 minutes faster average patient admission',
        '50,000+ remote consultations in first year',
        '85% staff adoption rate',
        'HIPAA audit passed with zero findings'
      ],
      technologies: ['Node.js', 'PostgreSQL', 'HIPAA Compliance', 'Telemedicine', 'React']
    },
    {
      id: 5,
      title: 'Enterprise Resource Planning System',
      client: 'Manufacturing Corporation',
      category: 'Enterprise Software',
      image: process.env.PUBLIC_URL + '/images/case-study-1.jpg',
      overview: 'Custom ERP solution replacing legacy systems across 50+ global locations',
      challenge: 'The client\'s fragmented systems across different regions were causing inventory mismanagement, supply chain delays, and reporting inconsistencies. Manual processes prevented real-time decision making at the executive level.',
      solution: 'Designed and implemented a cloud-based ERP system with modules for supply chain management, financial reporting, inventory optimization, and predictive analytics. Integrated with existing systems and provided comprehensive training.',
      results: [
        '35% reduction in operational costs',
        '60% faster financial close process',
        '25% improvement in inventory turnover',
        '$45M ROI in first 3 years',
        'Real-time visibility across all operations'
      ],
      technologies: ['Java', 'Oracle', 'AWS', 'Angular', 'Apache Kafka']
    },
    {
      id: 6,
      title: 'Real-Time Collaboration Platform',
      client: 'SaaS Productivity Company',
      category: 'SaaS Development',
      image: process.env.PUBLIC_URL + '/images/case-study-1.jpg',
      overview: 'Scalable collaboration tool competing with industry leaders, supporting millions of concurrent users',
      challenge: 'The startup needed to build a feature-rich collaboration platform that could scale globally while maintaining sub-100ms latency for real-time interactions. Needed to support millions of concurrent users from day one.',
      solution: 'Built a distributed, edge-optimized platform using WebRTC for real-time communication, operational transformation for conflict-free data synchronization, and a global CDN for low-latency access.',
      results: [
        '5M+ active users in 18 months',
        '99.95% uptime across all regions',
        'Sub-50ms average latency globally',
        '$100M Series B funding',
        '10M+ daily active users peak'
      ],
      technologies: ['TypeScript', 'WebRTC', 'PostgreSQL', 'Redis', 'Kubernetes']
    }
  ];

  return (
    <div>
      <Header />
      
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '120px 20px',
        textAlign: 'center',
        color: 'white'
      }}>
        <div className="container">
          <h1 style={{fontSize: '3.5rem', marginBottom: '20px', fontWeight: '700'}}>Case Studies</h1>
          <p style={{fontSize: '1.25rem', opacity: 0.9, maxWidth: '700px', margin: '0 auto'}}>
            Real-world transformations: Explore how we've helped leading organizations achieve their strategic goals
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section style={{padding: '80px 20px'}}>
        <div className="container">
          <div className="row" style={{alignItems: 'flex-start'}}>
            {caseStudies.map((study) => (
              <div key={study.id} className="col-lg-6 col-md-12" style={{marginBottom: '40px'}}>
                <div style={{
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.2)';
                  e.currentTarget.style.transform = 'translateY(-5px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}>
                  {/* Image */}
                  <div style={{
                    background: study.image ? `url(${study.image}) center/cover no-repeat` : '#667eea',
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
                    {/* {study.image ? study.title.substring(0, 1) : '📋'} */}
                  </div>

                  {/* Content */}
                  <div style={{padding: '30px', background: 'white'}}>
                    <div style={{marginBottom: '15px'}}>
                      <span style={{
                        display: 'inline-block',
                        background: '#f0f4ff',
                        color: '#667eea',
                        padding: '6px 12px',
                        borderRadius: '20px',
                        fontSize: '0.85rem',
                        fontWeight: '600'
                      }}>
                        {study.category}
                      </span>
                    </div>

                    <h3 style={{fontSize: '1.5rem', fontWeight: '700', marginBottom: '10px', color: '#1a1a1a'}}>
                      {study.title}
                    </h3>

                    <p style={{fontSize: '0.95rem', color: '#666', marginBottom: '15px', fontWeight: '500'}}>
                      Client: <strong>{study.client}</strong>
                    </p>

                    <p style={{fontSize: '0.95rem', color: '#666', marginBottom: '20px', lineHeight: '1.6', minHeight: '60px'}}>
                      {study.overview}
                    </p>

                    {/* Expand/Collapse Button */}
                    <button
                      onClick={() => setExpandedId(expandedId === study.id ? null : study.id)}
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
                      {expandedId === study.id ? 'Show Less' : 'View Full Case Study'}
                    </button>
                  </div>

                  {/* Expanded Details */}
                  {expandedId === study.id && (
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
                        {study.challenge}
                      </p>

                      <h4 style={{fontSize: '1.2rem', fontWeight: '700', marginBottom: '15px', color: '#1a1a1a'}}>
                        Solution
                      </h4>
                      <p style={{fontSize: '0.95rem', color: '#666', marginBottom: '25px', lineHeight: '1.6'}}>
                        {study.solution}
                      </p>

                      <h4 style={{fontSize: '1.2rem', fontWeight: '700', marginBottom: '15px', color: '#1a1a1a'}}>
                        Results
                      </h4>
                      <ul style={{marginBottom: '25px', paddingLeft: '20px'}}>
                        {study.results.map((result, idx) => (
                          <li key={idx} style={{fontSize: '0.95rem', color: '#666', marginBottom: '10px', lineHeight: '1.6'}}>
                            ✓ {result}
                          </li>
                        ))}
                      </ul>

                      <h4 style={{fontSize: '1.2rem', fontWeight: '700', marginBottom: '15px', color: '#1a1a1a'}}>
                        Technologies Used
                      </h4>
                      <div style={{display: 'flex', flexWrap: 'wrap', gap: '10px'}}>
                        {study.technologies.map((tech, idx) => (
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
