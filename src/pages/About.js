import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CTA from '../components/CTA';

export default function AboutPage() {
  const [stats, setStats] = useState({
    projects: 0,
    team: 0,
    countries: 0,
    satisfaction: 0
  });

  useEffect(() => {
    const duration = 3000; // 3.5 seconds
    const steps = 60; // 60 frames
    const interval = duration / steps;

    const targets = {
      projects: 500,
      team: 50,
      countries: 15,
      satisfaction: 98
    };

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setStats({
        projects: Math.floor(targets.projects * progress),
        team: Math.floor(targets.team * progress),
        countries: Math.floor(targets.countries * progress),
        satisfaction: Math.floor(targets.satisfaction * progress)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setStats(targets); // Ensure final values are exact
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="about-page">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="page-hero" style={{
          background: 'linear-gradient(135deg, #1f2c66ff 0%, #a97bd8ff 100%)',
          color: 'white',
          padding: '120px 0 120px',
          textAlign: 'center',
          transition: 'background 1000ms ease-in-out'
        }}>
          <div className="container">
            <h1 style={{fontSize: '3.5rem', fontWeight: '700', marginBottom: '1.5rem'}}>
              Building the future, together.
            </h1>
            <p style={{fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto', opacity: '0.95'}}>
              We're a team of passionate developers, designers, and innovators committed to transforming ideas into exceptional software solutions.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="section container" style={{paddingTop: '80px', paddingBottom: '80px'}}>
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 col-xs-12">
              <div style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                height: '400px',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '1.2rem',
                fontWeight: '500'
              }}>
                [Company Photo/Image]
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-xs-12">
              <h2 style={{fontSize: '2.5rem', fontWeight: '600', marginBottom: '30px', lineHeight: '1.2'}}>
                Our Story
              </h2>
              <p style={{color: '#666', lineHeight: '1.8', fontSize: '1.1rem', marginBottom: '20px'}}>
                Founded in 2015, Experience Labs & Co. began with a simple mission: to help businesses navigate the complexities of digital transformation through innovative software solutions.
              </p>
              <p style={{color: '#666', lineHeight: '1.8', fontSize: '1.1rem', marginBottom: '20px'}}>
                What started as a small team of five developers has grown into a full-service agency with over 50 talented professionals. We've delivered hundreds of projects across industries, from startups to Fortune 500 companies.
              </p>
              <p style={{color: '#666', lineHeight: '1.8', fontSize: '1.1rem'}}>
                Our approach combines technical excellence with human-centered design, ensuring that every solution we build not only works flawlessly but also delights the people who use it.
              </p>
            </div>
            
          </div>
        </section>

        {/* Team Section */}
        <section className="section" style={{paddingTop: '80px', paddingBottom: '80px', background: '#f5f5f5'}}>
          <div className="container">
            <h2 style={{fontSize: '2.5rem', fontWeight: '600', marginBottom: '60px', textAlign: 'center'}}>
              Leadership Team
            </h2>
            
            <p style={{fontSize: '1.1rem', color: '#666', lineHeight: '1.8', textAlign: 'center', maxWidth: '800px', margin: '0 auto 60px'}}>
              Our diverse team of 50+ engineers, designers, and strategists brings together decades of combined experience from leading tech companies and successful startups. We're united by a passion for solving hard problems and building products that matter.
            </p>

            <div className="row">
              {[
                {
                  id: 1,
                  name: 'Gaveen Nanayakkara',
                  role: 'CEO & Co-Founder',
                  bio: 'Visionary leader with 15+ years in software architecture and digital transformation.'
                },
                {
                  id: 2,
                  name: 'Hasitha Epa',
                  role: 'CTO & Co-Founder',
                  bio: 'Technical expert specializing in cloud infrastructure and scalable systems.'
                },
                {
                  id: 3,
                  name: 'Dimithra Bandara',
                  role: 'CTO & Co-Founder',
                  bio: 'Technical expert specializing in cloud infrastructure and scalable systems.'
                }
              ].map((person) => (
                <div className="col-lg-4 col-md-6" key={person.id} style={{marginBottom: '40px', textAlign: 'center'}}>
                  <div style={{
                    width: '150px',
                    height: '150px',
                    background: '#ddd',
                    borderRadius: '50%',
                    margin: '0 auto 20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#999',
                    fontSize: '50px'
                  }}>
                    {person.name.charAt(0)}
                  </div>
                  <h4 style={{fontSize: '1.3rem', fontWeight: '600', marginBottom: '5px'}}>{person.name}</h4>
                  <p style={{color: '#667eea', fontSize: '0.95rem', marginBottom: '10px'}}>{person.role}</p>
                  <p style={{color: '#666', fontSize: '0.9rem', lineHeight: '1.6'}}>{person.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="section" style={{background: '#1a1a1a', paddingTop: '80px', paddingBottom: '80px'}}>
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6" style={{textAlign: 'center'}}>
                <h3 style={{fontSize: '4rem', fontWeight: '300', color: '#fff', marginBottom: '10px'}}>
                  {stats.projects}+
                </h3>
                <p style={{color: '#b0b0b0', fontSize: '1.1rem'}}>Projects Delivered</p>
              </div>
              
              <div className="col-lg-3 col-md-6" style={{textAlign: 'center'}}>
                <h3 style={{fontSize: '4rem', fontWeight: '300', color: '#fff', marginBottom: '10px'}}>
                  {stats.team}+
                </h3>
                <p style={{color: '#b0b0b0', fontSize: '1.1rem'}}>Team Members</p>
              </div>
              
              <div className="col-lg-3 col-md-6" style={{textAlign: 'center'}}>
                <h3 style={{fontSize: '4rem', fontWeight: '300', color: '#fff', marginBottom: '10px'}}>
                  {stats.countries}+
                </h3>
                <p style={{color: '#b0b0b0', fontSize: '1.1rem'}}>Countries Served</p>
              </div>
              
              <div className="col-lg-3 col-md-6" style={{textAlign: 'center'}}>
                <h3 style={{fontSize: '4rem', fontWeight: '300', color: '#fff', marginBottom: '10px'}}>
                  {stats.satisfaction}%
                </h3>
                <p style={{color: '#b0b0b0', fontSize: '1.1rem'}}>Client Satisfaction</p>
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
