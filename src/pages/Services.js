import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Services from '../components/Services';
import CTA from '../components/CTA';

export default function ServicesPage() {
  return (
    <div className="services-page">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="page-hero" style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          padding: '120px 0 80px',
          textAlign: 'center'
        }}>
          <div className="container">
            <h1 style={{fontSize: '3.5rem', fontWeight: '700', marginBottom: '1.5rem'}}>
              Our Services
            </h1>
            <p style={{fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto', opacity: '0.95'}}>
              Comprehensive technology solutions designed to accelerate your digital transformation and drive measurable business outcomes.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section container" style={{paddingTop: '80px'}}>
          <Services />
        </section>

        {/* Why Partner With Us Section */}
        <section className="why-partner section" style={{background: '#f5f5f5', padding: '100px 0', margin: '80px auto', borderRadius: '0'}}>
          <div className="container">
            <h2 style={{fontSize: '3rem', fontWeight: '600', marginBottom: '80px', textAlign: 'left'}}>
              Why partner with us
            </h2>
            
            <div className="row">
              <div className="col-lg-4" style={{marginBottom: '40px'}}>
                <h3 style={{fontSize: '1.5rem', fontWeight: '600', marginBottom: '20px'}}>
                  Proven Expertise
                </h3>
                <p style={{color: '#333', lineHeight: '1.8', fontSize: '1rem'}}>
                  Decades of combined experience delivering complex software projects across industries.
                </p>
              </div>

              <div className="col-lg-4" style={{marginBottom: '40px'}}>
                <h3 style={{fontSize: '1.5rem', fontWeight: '600', marginBottom: '20px'}}>
                  Agile & Transparent
                </h3>
                <p style={{color: '#333', lineHeight: '1.8', fontSize: '1rem'}}>
                  Clear communication, iterative development, and continuous feedback throughout the project lifecycle.
                </p>
              </div>

              <div className="col-lg-4" style={{marginBottom: '40px'}}>
                <h3 style={{fontSize: '1.5rem', fontWeight: '600', marginBottom: '20px'}}>
                  Quality Focused
                </h3>
                <p style={{color: '#333', lineHeight: '1.8', fontSize: '1rem'}}>
                  Rigorous testing, code reviews, and best practices ensure reliable, maintainable solutions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach Section */}
        <section className="approach-section section container" style={{padding: '30px 0'}}>
          <h2 style={{fontSize: '3rem', fontWeight: '600', marginBottom: '80px', textAlign: 'left'}}>
            Our approach
          </h2>
          
          <div style={{maxWidth: '1100px'}}>
            <div style={{display: 'flex', gap: '30px', marginBottom: '60px', paddingBottom: '40px', borderBottom: '1px solid #e0e0e0'}}>
              <div style={{fontSize: '3rem', fontWeight: '300', color: '#667eea', minWidth: '80px'}}>01</div>
              <div>
                <h3 style={{fontSize: '1.5rem', fontWeight: '600', marginBottom: '15px'}}>
                  Discovery & Planning
                </h3>
                <p style={{color: '#666', lineHeight: '1.8', fontSize: '1rem'}}>
                  We start by understanding your business goals, technical requirements, and project constraints.
                </p>
              </div>
            </div>

            <div style={{display: 'flex', gap: '30px', marginBottom: '60px', paddingBottom: '40px', borderBottom: '1px solid #e0e0e0'}}>
              <div style={{fontSize: '3rem', fontWeight: '300', color: '#667eea', minWidth: '80px'}}>02</div>
              <div>
                <h3 style={{fontSize: '1.5rem', fontWeight: '600', marginBottom: '15px'}}>
                  Design & Architecture
                </h3>
                <p style={{color: '#666', lineHeight: '1.8', fontSize: '1rem'}}>
                  Our team designs scalable solutions with clear technical specifications and user experiences.
                </p>
              </div>
            </div>

            <div style={{display: 'flex', gap: '30px', marginBottom: '60px', paddingBottom: '40px', borderBottom: '1px solid #e0e0e0'}}>
              <div style={{fontSize: '3rem', fontWeight: '300', color: '#667eea', minWidth: '80px'}}>03</div>
              <div>
                <h3 style={{fontSize: '1.5rem', fontWeight: '600', marginBottom: '15px'}}>
                  Development & Testing
                </h3>
                <p style={{color: '#666', lineHeight: '1.8', fontSize: '1rem'}}>
                  Iterative development with continuous integration, automated testing, and regular demos.
                </p>
              </div>
            </div>

            <div style={{display: 'flex', gap: '30px', marginBottom: '40px'}}>
              <div style={{fontSize: '3rem', fontWeight: '300', color: '#667eea', minWidth: '80px'}}>04</div>
              <div>
                <h3 style={{fontSize: '1.5rem', fontWeight: '600', marginBottom: '15px'}}>
                  Deployment & Support
                </h3>
                <p style={{color: '#666', lineHeight: '1.8', fontSize: '1rem'}}>
                  Smooth rollouts with comprehensive monitoring, documentation, and ongoing maintenance.
                </p>
              </div>
            </div>
          </div>
        </section>

        <CTA />
      </main>

      <Footer />
    </div>
  );
}
