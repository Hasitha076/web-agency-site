import React, { useEffect, useRef, useState } from 'react';

export default function Philosophy(){
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);
  const targets = [8, 15, 12];
  const [counts, setCounts] = useState([0,0,0]);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const timers = [];
    const onIntersect = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          // start animations with a small stagger and longer duration for a slower feel
          targets.forEach((t, i) => {
            const timer = setTimeout(() => animateCount(i, t, 2000 + i * 300), i * 220);
            timers.push(timer);
          });
        }
      });
    };

    const io = new IntersectionObserver(onIntersect, { root: null, threshold: 0.35 });
    io.observe(el);
    return () => { io.disconnect(); timers.forEach(clearTimeout); };
  }, []);

  function animateCount(index, end, duration = 2000) {
    const start = 0;
    const startTime = performance.now();

    function tick(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const value = Math.floor(start + (end - start) * easeOutCubic(progress));
      setCounts(prev => {
        const next = [...prev];
        next[index] = value;
        return next;
      });
      if (progress < 1) requestAnimationFrame(tick);
      else {
        setCounts(prev => { const n = [...prev]; n[index] = end; return n; });
      }
    }
    requestAnimationFrame(tick);
  }

  function easeOutCubic(t){ return 1 - Math.pow(1-t, 3); }

  return (
    <section ref={sectionRef} className="philosophy container" id="about">
      <img src={process.env.PUBLIC_URL + '/images/philosophy-img.png'} alt="team at work" />

      <div className="philosophy-content">
        <div className="kicker">ABOUT US</div>
        <h3>Our philosophy</h3>

        <div className="philosophy-body">
          <p>We bring structure to complexity. From architecture to deployment, we engineer products built to last.</p>

          <p className="muted">Experience Labs &amp; Co. was founded on the principle that great software is a combination of technical excellence and deep understanding of business needs. We don't just write code—we solve problems.</p>

          <p className="muted">Our team of senior engineers brings decades of combined experience from startups to enterprise, ensuring every solution is both innovative and battle-tested.</p>
        </div>

        <hr className="philosophy-divider" />

        <div className="philosophy-stats">
          <div className="stat" aria-live="polite">
            <div className="num">{counts[0]}+</div>
            <div className="label">Years in Business</div>
          </div>
          <div className="stat" aria-live="polite">
            <div className="num">{counts[1]}</div>
            <div className="label">Team Members</div>
          </div>
          <div className="stat" aria-live="polite">
            <div className="num">{counts[2]}</div>
            <div className="label">Countries Served</div>
          </div>
        </div>
      </div>
    </section>
  )
}
