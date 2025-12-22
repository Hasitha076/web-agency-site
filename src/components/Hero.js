import React, { useEffect, useState } from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function Hero(){
  const words = ['software', 'design', 'product', 'data'];
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrent((c) => (c + 1) % words.length);
        setVisible(true);
      }, 280);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero" aria-label="Intro">
      {/* moving decorative shapes (reduced to 3) */}
      <div className="hero-shapes" aria-hidden="true">
        <div className="hero-rect rect--1" />
        <div className="hero-rect rect--2" />
        <div className="hero-rect rect--3" />
        <div className="hero-rect rect--4" />
        <div className="hero-rect rect--5" />
      </div>

      <div className="container">
        <div className="row align-items-center">
          <div className="col-12">
            <div className="hero-content">
              <h1 className="hero-title">Reduce risk. Increase delivery speed. Build better <span className="hero-dynamic"><span className={"word " + (visible ? '' : 'hidden')}>{words[current]}.</span></span></h1>
              <p className="hero-sub">From architecture to delivery, we build systems that reduce risk and accelerate your roadmap.</p>
              <a href="#contact" className="hero-cta">Send us a message <ArrowForwardIcon style={{verticalAlign:'middle', marginLeft:8}} fontSize="small" /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
