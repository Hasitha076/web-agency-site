import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WorkGrid from '../components/WorkGrid';
import CTA from '../components/CTA';

export default function OurWorkPage() {
  return (
    <div className="ourwork-page">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="page-hero" style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          padding: '120px 0 120px',
          textAlign: 'center',
          transition: 'background 1000ms ease-in-out'
        }}>
          <div className="container">
            <h1 style={{fontSize: '3.5rem', fontWeight: '700', marginBottom: '1.5rem'}}>
              Our Work
            </h1>
            <p style={{fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto', opacity: '0.95'}}>
              Explore our portfolio of successful projects. From startups to enterprises, we've helped businesses transform their ideas into powerful digital solutions.
            </p>
          </div>
        </section>

        {/* Work Grid Section */}
        <section className="section container" style={{paddingTop: '30px'}}>
          <WorkGrid />
        </section>

        <CTA />
      </main>

      <Footer />
    </div>
  );
}
