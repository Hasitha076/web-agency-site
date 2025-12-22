import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const items = [
  {title:'Software Development', body:'We build resilient backend systems and modern web apps.', color:'#F7E7CF'},
  {title:'Artificial Intelligence', body:'AI services to accelerate product discovery and automation.', color:'#F3E7FF'},
  {title:'Product Design', body:'User-centered design for web and mobile products.', color:'#DEF2FF'},
  {title:'Artificial Intelligence', body:'Custom ML models and data pipelines.', color:'#F3E7FF'},
  {title:'Software Development', body:'Platform engineering and developer tooling.', color:'#F7E7CF'},
  {title:'Development Teams', body:'Staffing and embedded teams to scale delivery.', color:'#EFE7FF'},
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
