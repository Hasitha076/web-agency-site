import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div>
      <Header />
      
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
              Ready to start your next project? We're here to help bring your ideas to life.
            </h1>
          </div>
        </section>

      {/* Contact Form & Info Section */}
      <section style={{padding: '80px 20px', background: '#e8e9f3'}}>
        <div className="container">
          <div className="row">
            {/* Contact Information */}
            <div className="col-lg-5" style={{marginBottom: '40px'}}>
              <div>
                <h2 style={{fontSize: '2rem', fontWeight: '400', marginBottom: '20px', color: '#2d3748'}}>
                  Get in Touch
                </h2>
                <p style={{fontSize: '1rem', color: '#4a5568', marginBottom: '40px', lineHeight: '1.6'}}>
                  Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                </p>

                <div style={{marginBottom: '30px'}}>
                  <h4 style={{fontSize: '0.9rem', fontWeight: '600', marginBottom: '8px', color: '#2d3748'}}>Email</h4>
                  <a href="mailto:hello@explabs.co" style={{color: '#667eea', textDecoration: 'none', fontSize: '1rem'}}>
                    hello@explabs.co
                  </a>
                </div>

                <div style={{marginBottom: '30px'}}>
                  <h4 style={{fontSize: '0.9rem', fontWeight: '600', marginBottom: '8px', color: '#2d3748'}}>Phone</h4>
                  <a href="tel:+15551234567" style={{color: '#2d3748', textDecoration: 'none', fontSize: '1rem'}}>
                    +1 (555) 123-4567
                  </a>
                </div>

                <div style={{marginBottom: '30px'}}>
                  <h4 style={{fontSize: '0.9rem', fontWeight: '600', marginBottom: '8px', color: '#2d3748'}}>Office</h4>
                  <p style={{color: '#2d3748', margin: 0, fontSize: '1rem', lineHeight: '1.6'}}>
                    123 Innovation Drive<br />
                    San Francisco, CA 94103<br />
                    United States
                  </p>
                </div>

                <div>
                  <h4 style={{fontSize: '0.9rem', fontWeight: '600', marginBottom: '8px', color: '#2d3748'}}>Business Hours</h4>
                  <p style={{color: '#2d3748', margin: 0, fontSize: '1rem', lineHeight: '1.6'}}>
                    Monday - Friday: 9:00 AM - 6:00 PM PST<br />
                    Saturday - Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-lg-7">
              <div style={{
                background: 'white',
                padding: '50px',
                borderRadius: '12px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.08)'
              }}>

                {submitted && (
                  <div style={{
                    background: '#d4edda',
                    border: '1px solid #c3e6cb',
                    color: '#155724',
                    padding: '15px',
                    borderRadius: '8px',
                    marginBottom: '20px'
                  }}>
                    Thank you! Your message has been sent successfully.
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6" style={{marginBottom: '25px'}}>
                      <label style={{display: 'block', marginBottom: '8px', fontWeight: '400', color: '#2d3748', fontSize: '0.95rem'}}>
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Your name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        style={{
                          width: '100%',
                          padding: '14px 16px',
                          borderRadius: '8px',
                          border: '1px solid #e2e8f0',
                          fontSize: '1rem',
                          transition: 'border 0.3s ease',
                          background: '#f7fafc'
                        }}
                        onFocus={(e) => {
                          e.target.style.border = '1px solid #667eea';
                          e.target.style.background = 'white';
                        }}
                        onBlur={(e) => {
                          e.target.style.border = '1px solid #e2e8f0';
                          e.target.style.background = '#f7fafc';
                        }}
                      />
                    </div>

                    <div className="col-md-6" style={{marginBottom: '25px'}}>
                      <label style={{display: 'block', marginBottom: '8px', fontWeight: '400', color: '#2d3748', fontSize: '0.95rem'}}>
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="your.email@example.com"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        style={{
                          width: '100%',
                          padding: '14px 16px',
                          borderRadius: '8px',
                          border: '1px solid #e2e8f0',
                          fontSize: '1rem',
                          transition: 'border 0.3s ease',
                          background: '#f7fafc'
                        }}
                        onFocus={(e) => {
                          e.target.style.border = '1px solid #667eea';
                          e.target.style.background = 'white';
                        }}
                        onBlur={(e) => {
                          e.target.style.border = '1px solid #e2e8f0';
                          e.target.style.background = '#f7fafc';
                        }}
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6" style={{marginBottom: '25px'}}>
                      <label style={{display: 'block', marginBottom: '8px', fontWeight: '400', color: '#2d3748', fontSize: '0.95rem'}}>
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={handleChange}
                        style={{
                          width: '100%',
                          padding: '14px 16px',
                          borderRadius: '8px',
                          border: '1px solid #e2e8f0',
                          fontSize: '1rem',
                          transition: 'border 0.3s ease',
                          background: '#f7fafc'
                        }}
                        onFocus={(e) => {
                          e.target.style.border = '1px solid #667eea';
                          e.target.style.background = 'white';
                        }}
                        onBlur={(e) => {
                          e.target.style.border = '1px solid #e2e8f0';
                          e.target.style.background = '#f7fafc';
                        }}
                      />
                    </div>

                    <div className="col-md-6" style={{marginBottom: '25px'}}>
                      <label style={{display: 'block', marginBottom: '8px', fontWeight: '400', color: '#2d3748', fontSize: '0.95rem'}}>
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        placeholder="Your company"
                        value={formData.company}
                        onChange={handleChange}
                        style={{
                          width: '100%',
                          padding: '14px 16px',
                          borderRadius: '8px',
                          border: '1px solid #e2e8f0',
                          fontSize: '1rem',
                          transition: 'border 0.3s ease',
                          background: '#f7fafc'
                        }}
                        onFocus={(e) => {
                          e.target.style.border = '1px solid #667eea';
                          e.target.style.background = 'white';
                        }}
                        onBlur={(e) => {
                          e.target.style.border = '1px solid #e2e8f0';
                          e.target.style.background = '#f7fafc';
                        }}
                      />
                    </div>
                  </div>

                  <div style={{marginBottom: '25px'}}>
                    <label style={{display: 'block', marginBottom: '8px', fontWeight: '400', color: '#2d3748', fontSize: '0.95rem'}}>
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows="6"
                      placeholder="Tell us about your project..."
                      value={formData.message}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '14px 16px',
                        borderRadius: '8px',
                        border: '1px solid #e2e8f0',
                        fontSize: '1rem',
                        resize: 'vertical',
                        transition: 'border 0.3s ease',
                        background: '#f7fafc',
                        fontFamily: 'inherit'
                      }}
                      onFocus={(e) => {
                        e.target.style.border = '1px solid #667eea';
                        e.target.style.background = 'white';
                      }}
                      onBlur={(e) => {
                        e.target.style.border = '1px solid #e2e8f0';
                        e.target.style.background = '#f7fafc';
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    style={{
                      background: '#1a202c',
                      color: 'white',
                      border: 'none',
                      padding: '16px 32px',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      fontWeight: '500',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '10px'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#2d3748';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = '#1a202c';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    Send message
                    <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
