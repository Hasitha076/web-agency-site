import React from 'react';

export default function CTA(){
  return (
    <section className="cta-hero" aria-label="call to action">
      <div className="container cta-inner">
        <div className="cta-left">
          <h2 className="cta-title">Let's build something<br/>great now <span className="cta-arrow">→</span></h2>
        </div>

        <div className="cta-right" aria-hidden>
          <div className="cta-note">Schedule a free<br/>consultation with us</div>
          <a className="cta-primary" href="#contact">Schedule a call</a>
        </div>
      </div>
    </section>
  )
}
