import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const items = [
  {title:'Software Development', body:'We design and develop reliable, high-performance systems tailored to your workflows, reducing technical debt while accelerating delivery.', color:'#F7E7CF'},
  {title:'Artificial Intelligence', body:'We build practical AI and ML solutions that automate processes, surface insights, and integrate seamlessly into your existing products.', color:'#F3E7FF'},
  {title:'Web, Mobile, Cloud Applications', body:'From web platforms to mobile apps and cloud-native systems, we deliver secure, scalable applications ready for real-world growth.', color:'#DEF2FF'},
  {title:'Product (UX) Design', body:'We translate complex requirements into intuitive, usable products, combining research, UX strategy, and polished UI execution.', color:'#F3E7FF'},
  {title:'Cloud Engineering', body:'We architect, migrate, and optimize cloud environments to improve reliability, performance, and long-term operational efficiency.', color:'#F7E7CF'},
  {title:'Development Teams', body:'We provide skilled, cross-functional engineers who integrate seamlessly with your teams to deliver consistently and at speed.', color:'#EFE7FF'},
]

export default function Services(){
  return (
    <div className="services-section" id="services">
        <h2 className="section-title">What we do</h2>   
        <div className="services-grid">
        {items.map((it,idx)=> (
            <div className="service-card" key={idx} style={{background:it.color}}>
            <h4>{it.title}</h4>
            <p>{it.body}</p>
            <span className="service-arrow" aria-hidden>
                    
                <ArrowForwardIcon />
            </span>
            </div>
        ))}
        </div>
    </div>
  )
}
