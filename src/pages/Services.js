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

        {/* Services Detail Section */}
        <section className="services-detail section container">
          <div className="row" style={{marginTop: '60px'}}>
            <div className="col-lg-6" style={{marginBottom: '40px'}}>
              <div style={{padding: '40px', background: '#f8f9fa', borderRadius: '12px', height: '100%'}}>
                <h3 style={{marginBottom: '20px', fontSize: '1.75rem'}}>
                  🚀 Software Development
                </h3>
                <p style={{color: '#666', lineHeight: '1.8', marginBottom: '15px'}}>
                  We build scalable, resilient systems using modern technologies and proven architectural patterns. 
                  Our team specializes in:
                </p>
                <ul style={{color: '#666', lineHeight: '1.8', paddingLeft: '20px'}}>
                  <li>Backend systems & APIs (Node.js, Python, Go)</li>
                  <li>Frontend applications (React, Vue, Next.js)</li>
                  <li>Cloud infrastructure (AWS, Azure, GCP)</li>
                  <li>Microservices & serverless architectures</li>
                  <li>Database design & optimization</li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6" style={{marginBottom: '40px'}}>
              <div style={{padding: '40px', background: '#f8f9fa', borderRadius: '12px', height: '100%'}}>
                <h3 style={{marginBottom: '20px', fontSize: '1.75rem'}}>
                  🤖 Artificial Intelligence
                </h3>
                <p style={{color: '#666', lineHeight: '1.8', marginBottom: '15px'}}>
                  Harness the power of AI to automate processes, gain insights, and create intelligent products. 
                  We deliver:
                </p>
                <ul style={{color: '#666', lineHeight: '1.8', paddingLeft: '20px'}}>
                  <li>Custom ML model development & training</li>
                  <li>Natural Language Processing (NLP)</li>
                  <li>Computer vision & image recognition</li>
                  <li>Predictive analytics & forecasting</li>
                  <li>AI integration & deployment</li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6" style={{marginBottom: '40px'}}>
              <div style={{padding: '40px', background: '#f8f9fa', borderRadius: '12px', height: '100%'}}>
                <h3 style={{marginBottom: '20px', fontSize: '1.75rem'}}>
                  🎨 Product (UX) Design
                </h3>
                <p style={{color: '#666', lineHeight: '1.8', marginBottom: '15px'}}>
                  User-centered design that balances aesthetics with functionality. Our design services include:
                </p>
                <ul style={{color: '#666', lineHeight: '1.8', paddingLeft: '20px'}}>
                  <li>User research & persona development</li>
                  <li>Wireframing & prototyping</li>
                  <li>UI/UX design for web & mobile</li>
                  <li>Design systems & component libraries</li>
                  <li>Usability testing & iteration</li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6" style={{marginBottom: '40px'}}>
              <div style={{padding: '40px', background: '#f8f9fa', borderRadius: '12px', height: '100%'}}>
                <h3 style={{marginBottom: '20px', fontSize: '1.75rem'}}>
                  👥 Dedicated Development Teams
                </h3>
                <p style={{color: '#666', lineHeight: '1.8', marginBottom: '15px'}}>
                  Scale your team with our experienced engineers who integrate seamlessly with your workflow:
                </p>
                <ul style={{color: '#666', lineHeight: '1.8', paddingLeft: '20px'}}>
                  <li>Full-time dedicated teams</li>
                  <li>Staff augmentation & embedded engineers</li>
                  <li>Agile & Scrum expertise</li>
                  <li>Flexible engagement models</li>
                  <li>Long-term partnership & support</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="process-section section container">
          <h2 className="section-title" style={{textAlign: 'center', marginBottom: '60px'}}>
            Our Process
          </h2>
          <div className="row">
            <div className="col-md-3" style={{marginBottom: '30px', textAlign: 'center'}}>
              <div style={{
                width: '80px',
                height: '80px',
                background: '#667eea',
                color: 'white',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem',
                fontWeight: '700',
                margin: '0 auto 20px'
              }}>1</div>
              <h4 style={{marginBottom: '10px'}}>Discovery</h4>
              <p style={{color: '#666', fontSize: '0.95rem'}}>
                We learn your business, goals, and constraints to define the right solution.
              </p>
            </div>

            <div className="col-md-3" style={{marginBottom: '30px', textAlign: 'center'}}>
              <div style={{
                width: '80px',
                height: '80px',
                background: '#667eea',
                color: 'white',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem',
                fontWeight: '700',
                margin: '0 auto 20px'
              }}>2</div>
              <h4 style={{marginBottom: '10px'}}>Design</h4>
              <p style={{color: '#666', fontSize: '0.95rem'}}>
                Wireframes, prototypes, and architecture planning before any code is written.
              </p>
            </div>

            <div className="col-md-3" style={{marginBottom: '30px', textAlign: 'center'}}>
              <div style={{
                width: '80px',
                height: '80px',
                background: '#667eea',
                color: 'white',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem',
                fontWeight: '700',
                margin: '0 auto 20px'
              }}>3</div>
              <h4 style={{marginBottom: '10px'}}>Develop</h4>
              <p style={{color: '#666', fontSize: '0.95rem'}}>
                Iterative development with continuous feedback and validation.
              </p>
            </div>

            <div className="col-md-3" style={{marginBottom: '30px', textAlign: 'center'}}>
              <div style={{
                width: '80px',
                height: '80px',
                background: '#667eea',
                color: 'white',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem',
                fontWeight: '700',
                margin: '0 auto 20px'
              }}>4</div>
              <h4 style={{marginBottom: '10px'}}>Deploy</h4>
              <p style={{color: '#666', fontSize: '0.95rem'}}>
                Launch, monitor, and optimize with ongoing support and maintenance.
              </p>
            </div>
          </div>
        </section>

        <CTA />
      </main>

      <Footer />
    </div>
  );
}
