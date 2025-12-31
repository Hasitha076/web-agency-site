import React, { useState } from 'react';

export default function CTA(){
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Schedule call form submitted:', formData);
    // Here you would typically send the data to your backend
    alert('Thank you! We will contact you shortly to confirm your call.');
    setShowModal(false);
    setFormData({ name: '', email: '', phone: '', preferredDate: '', preferredTime: '', message: '' });
  };

  return (
    <>
      <section className="cta-hero" aria-label="call to action">
        <div className="container cta-inner">
          <div className="cta-left">
            <h2 className="cta-title">Let's build something<br/>great now <span className="cta-arrow">→</span></h2>
          </div>

          <div className="cta-right" aria-hidden>
            <div className="cta-note">Schedule a free<br/>consultation with us</div>
            <button 
              className="cta-primary" 
              onClick={() => setShowModal(true)}
              style={{
                background: '#000',
                border: '1px solid #000',
                color: '#fff',
                padding: '12px 26px',
                borderRadius: '4px',
                textDecoration: 'none',
                display: 'inline-block',
                transition: '800ms ease-in-out',
                cursor: 'pointer',
                fontSize: 'inherit'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#000';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#000';
                e.currentTarget.style.color = '#fff';
              }}
            >
              Schedule a call
            </button>
          </div>
        </div>
      </section>

      {/* Modal Overlay */}
      {showModal && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: '9999',
            animation: 'fadeIn 0.3s ease-in-out'
          }}
          onClick={() => setShowModal(false)}
        >
          {/* Modal Content */}
          <div
            style={{
              background: 'white',
              borderRadius: '20px',
              overflow: 'hidden',
              maxWidth: '600px',
              width: '90%',
              maxHeight: '90vh',
              overflowY: 'auto',
              boxShadow: '0 25px 80px rgba(102, 126, 234, 0.3)',
              animation: 'slideUp 0.4s ease-out',
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Colorful Header */}
            <div
              style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                padding: '40px 30px',
                color: 'white',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Decorative background elements */}
              <div
                style={{
                  position: 'absolute',
                  top: '-50px',
                  right: '-50px',
                  width: '200px',
                  height: '200px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '50%'
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: '-30px',
                  left: '-30px',
                  width: '150px',
                  height: '150px',
                  background: 'rgba(255, 255, 255, 0.08)',
                  borderRadius: '50%'
                }}
              />

              <h2 style={{
                fontSize: '2rem',
                fontWeight: '700',
                marginBottom: '8px',
                color: 'white',
                position: 'relative',
                zIndex: 1
              }}>
                Schedule a Call
              </h2>
              <p style={{
                fontSize: '0.95rem',
                color: 'rgba(255, 255, 255, 0.9)',
                marginBottom: 0,
                position: 'relative',
                zIndex: 1
              }}>
                Let's discuss your project and how we can help.
              </p>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'rgba(255, 255, 255, 0.9)',
                border: 'none',
                fontSize: '28px',
                cursor: 'pointer',
                color: '#667eea',
                transition: 'all 0.3s ease',
                padding: '0',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                zIndex: 10,
                fontWeight: '300'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#667eea';
                e.currentTarget.style.color = 'white';
                e.currentTarget.style.transform = 'rotate(90deg)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
                e.currentTarget.style.color = '#667eea';
                e.currentTarget.style.transform = 'rotate(0deg)';
              }}
            >
              ×
            </button>

            {/* Form Content */}
            <div style={{ padding: '40px 30px' }}>
              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '25px' }}>
                  <label style={{
                    display: 'block',
                    marginBottom: '8px',
                    fontWeight: '600',
                    color: '#1a1a1a',
                    fontSize: '0.95rem'
                  }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '14px 16px',
                      borderRadius: '10px',
                      border: '2px solid #f0f4ff',
                      fontSize: '1rem',
                      transition: 'all 0.3s ease',
                      boxSizing: 'border-box',
                      background: '#f9fafc'
                    }}
                    onFocus={(e) => {
                      e.target.style.border = '2px solid #667eea';
                      e.target.style.background = '#f0f4ff';
                      e.target.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.border = '2px solid #f0f4ff';
                      e.target.style.background = '#f9fafc';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>

                <div style={{ marginBottom: '25px' }}>
                  <label style={{
                    display: 'block',
                    marginBottom: '8px',
                    fontWeight: '600',
                    color: '#1a1a1a',
                    fontSize: '0.95rem'
                  }}>
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '14px 16px',
                      borderRadius: '10px',
                      border: '2px solid #f0f4ff',
                      fontSize: '1rem',
                      transition: 'all 0.3s ease',
                      boxSizing: 'border-box',
                      background: '#f9fafc'
                    }}
                    onFocus={(e) => {
                      e.target.style.border = '2px solid #667eea';
                      e.target.style.background = '#f0f4ff';
                      e.target.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.border = '2px solid #f0f4ff';
                      e.target.style.background = '#f9fafc';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>

                <div style={{ marginBottom: '25px' }}>
                  <label style={{
                    display: 'block',
                    marginBottom: '8px',
                    fontWeight: '600',
                    color: '#1a1a1a',
                    fontSize: '0.95rem'
                  }}>
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '14px 16px',
                      borderRadius: '10px',
                      border: '2px solid #f0f4ff',
                      fontSize: '1rem',
                      transition: 'all 0.3s ease',
                      boxSizing: 'border-box',
                      background: '#f9fafc'
                    }}
                    onFocus={(e) => {
                      e.target.style.border = '2px solid #667eea';
                      e.target.style.background = '#f0f4ff';
                      e.target.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.border = '2px solid #f0f4ff';
                      e.target.style.background = '#f9fafc';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '25px' }}>
                  <div>
                    <label style={{
                      display: 'block',
                      marginBottom: '8px',
                      fontWeight: '600',
                      color: '#1a1a1a',
                      fontSize: '0.95rem'
                    }}>
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      name="preferredDate"
                      required
                      value={formData.preferredDate}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '14px 16px',
                        borderRadius: '10px',
                        border: '2px solid #f0f4ff',
                        fontSize: '1rem',
                        transition: 'all 0.3s ease',
                        boxSizing: 'border-box',
                        background: '#f9fafc'
                      }}
                      onFocus={(e) => {
                        e.target.style.border = '2px solid #667eea';
                        e.target.style.background = '#f0f4ff';
                        e.target.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
                      }}
                      onBlur={(e) => {
                        e.target.style.border = '2px solid #f0f4ff';
                        e.target.style.background = '#f9fafc';
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                  </div>
                  <div>
                    <label style={{
                      display: 'block',
                      marginBottom: '8px',
                      fontWeight: '600',
                      color: '#1a1a1a',
                      fontSize: '0.95rem'
                    }}>
                      Preferred Time *
                    </label>
                    <input
                      type="time"
                      name="preferredTime"
                      required
                      value={formData.preferredTime}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '14px 16px',
                        borderRadius: '10px',
                        border: '2px solid #f0f4ff',
                        fontSize: '1rem',
                        transition: 'all 0.3s ease',
                        boxSizing: 'border-box',
                        background: '#f9fafc'
                      }}
                      onFocus={(e) => {
                        e.target.style.border = '2px solid #667eea';
                        e.target.style.background = '#f0f4ff';
                        e.target.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
                      }}
                      onBlur={(e) => {
                        e.target.style.border = '2px solid #f0f4ff';
                        e.target.style.background = '#f9fafc';
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: '30px' }}>
                  <label style={{
                    display: 'block',
                    marginBottom: '8px',
                    fontWeight: '600',
                    color: '#1a1a1a',
                    fontSize: '0.95rem'
                  }}>
                    Message (Optional)
                  </label>
                  <textarea
                    name="message"
                    placeholder="Tell us about your project..."
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '14px 16px',
                      borderRadius: '10px',
                      border: '2px solid #f0f4ff',
                      fontSize: '1rem',
                      transition: 'all 0.3s ease',
                      boxSizing: 'border-box',
                      fontFamily: 'inherit',
                      background: '#f9fafc',
                      resize: 'none'
                    }}
                    onFocus={(e) => {
                      e.target.style.border = '2px solid #667eea';
                      e.target.style.background = '#f0f4ff';
                      e.target.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.border = '2px solid #f0f4ff';
                      e.target.style.background = '#f9fafc';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>

                {/* Form Actions */}
                <div style={{ display: 'flex', gap: '12px' }}>
                  <button
                    type="submit"
                    style={{
                      flex: 1,
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      color: 'white',
                      border: 'none',
                      padding: '16px',
                      borderRadius: '10px',
                      fontSize: '1rem',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-3px)';
                      e.currentTarget.style.boxShadow = '0 10px 25px rgba(102, 126, 234, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    Schedule Call
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    style={{
                      flex: 1,
                      background: '#f0f4ff',
                      color: '#667eea',
                      border: '2px solid #667eea',
                      padding: '16px',
                      borderRadius: '10px',
                      fontSize: '1rem',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#667eea';
                      e.currentTarget.style.color = 'white';
                      e.currentTarget.style.transform = 'translateY(-3px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = '#f0f4ff';
                      e.currentTarget.style.color = '#667eea';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  )
}
