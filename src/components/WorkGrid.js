import React from 'react';
import { Link } from 'react-router-dom';

const works = [
  {
    id: 1,
    category: 'Web Development',
    categoryColor: '#667eea',
    title: 'E-Commerce Platform Redesign',
    description: 'A simple Machine Learning Web App built to showcase ML in the cloud.',
    image: process.env.PUBLIC_URL + '/images/web-dev.jpg'
  },
  {
    id: 2,
    category: 'Mobile Development',
    categoryColor: '#c084fc',
    title: 'Mobile Banking Application',
    description: 'A simple Machine Learning Web App built to showcase ML in the cloud.',
    image: process.env.PUBLIC_URL + '/images/mobile-dev.jpg'
  },
  {
    id: 3,
    category: 'Artificial Intelligence',
    categoryColor: '#fbbf24',
    title: 'AI-Powered Analytics Dashboard',
    description: "It's simple but powerful, a Web App that is truly scalable and ML ready.",
    image: process.env.PUBLIC_URL + '/images/ai.jpg'
  },
  {
    id: 4,
    category: 'Product Design',
    categoryColor: '#60a5fa',
    title: 'Healthcare Management System',
    description: 'A simple Machine Learning Web App built to showcase ML in the cloud.',
    image: process.env.PUBLIC_URL + '/images/product-design.png'
  },
  {
    id: 5,
    category: 'Cloud Applications',
    categoryColor: '#a78bfa',
    title: 'Enterprise Resource Planning',
    description: "It's simple but powerful, a Web App that is truly scalable and ML ready.",
    image: process.env.PUBLIC_URL + '/images/cloud-applications.jpg'
  },
  {
    id: 6,
    category: 'Development Teams',
    categoryColor: '#667eea',
    title: 'Real-Time Collaboration Tool',
    description: 'A simple Machine Learning Web App built to showcase ML in the cloud.',
    image: process.env.PUBLIC_URL + '/images/development-teams.jpg'
  }
];

export default function WorkGrid() {
  return (
    <section className="work-section container" id="work">
      <div className="work-header" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '60px'
      }}>
        <h2 style={{fontSize: '3rem', fontWeight: '600', margin: 0}}>Our work</h2>
        <Link 
          className="case-btn" 
          to="/case-studies"
          style={{
            background: '#000',
            color: '#fff',
            padding: '12px 24px',
            borderRadius: '4px',
            textDecoration: 'none',
            fontSize: '1rem',
            fontWeight: '500',
            transition: 'all 0.3s ease'
          }}
        >
          Go to case studies
        </Link>
      </div>

      <div className="row">
        {works.map(work => (
          <div className="col-lg-4 col-md-6" key={work.id} style={{marginBottom: '30px'}}>
            <div style={{
              background: '#fff',
              borderRadius: '12px',
              overflow: 'hidden',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'pointer',
              height: '100%',
              border: '1px solid #e5e5e5'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}>
              {/* Image Area */}
              <div style={{
                height: '200px',
                backgroundImage: `url(${work.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative'
              }}>
                <span style={{
                  position: 'absolute',
                  bottom: '15px',
                  left: '15px',
                  background: work.categoryColor,
                  color: '#fff',
                  padding: '6px 14px',
                  borderRadius: '20px',
                  fontSize: '0.85rem',
                  fontWeight: '500'
                }}>
                  {work.category}
                </span>
              </div>
              
              {/* Content Area */}
              <div style={{padding: '25px'}}>
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: '600',
                  marginBottom: '12px',
                  color: '#1a1a1a',
                  lineHeight: '1.4'
                }}>
                  {work.title}
                </h3>
                <p style={{
                  fontSize: '0.95rem',
                  color: '#666',
                  lineHeight: '1.6',
                  margin: 0
                }}>
                  {work.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

