import React, { useState, useRef, useEffect } from 'react';

const faqs = [
  {
    q: 'Do you offer custom software development for my industry?',
    a: 'Yes — we specialise in custom solutions across many industries. We begin with discovery to understand your domain and constraints, then build an iterative plan that reduces risk and delivers value incrementally.'
  },
  {
    q: 'What makes your development process different?',
    a: 'Our process focuses on product outcomes, not just feature delivery. We pair senior engineers with product thinking, continuous validation, and strong engineering practices to reduce surprises and speed delivery.'
  },
  {
    q: 'Why should I partner with you?',
    a: 'We bring senior experience and a pragmatic approach to modern engineering problems — from architecture and platform choices to delivery and long-term support.'
  }
];

export default function FAQ(){
  const [open, setOpen] = useState(null);
  const answerRefs = useRef([]);

  function toggle(i){
    setOpen(prev => prev === i ? null : i);
  }

  useEffect(() => {
    // Ensure all answers have the correct collapsed state initially
    answerRefs.current.forEach((el, idx) => {
      if (!el) return;
      if (open === idx) {
        el.style.maxHeight = el.scrollHeight + 'px';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      } else {
        el.style.maxHeight = '0px';
        el.style.opacity = '0';
        el.style.transform = 'translateY(-6px)';
      }
    });
  }, [open]);

  return (
    <section className="faq-section container" aria-label="FAQ">
      <h2 className="section-title">FAQ</h2>
      <div className="faq-list">
        {faqs.map((item, i) => (
          <div className="faq-item" key={i}>
            <button
              className={`faq-question ${open === i ? 'open' : ''}`}
              onClick={() => toggle(i)}
              aria-expanded={open === i}
              aria-controls={`faq-${i}`}
            >
              <span className={`arrow ${open === i ? 'open' : ''}`} aria-hidden>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" fill="currentColor"/>
                </svg>
              </span>
              <span className="question-text">{item.q}</span>
            </button>

            <div id={`faq-${i}`} className={`faq-answer ${open === i ? 'open' : ''}`} role="region" aria-hidden={open !== i}>
              <div className="faq-answer-inner">
                {item.a}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
