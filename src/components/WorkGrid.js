import React from 'react';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import PaidIcon from '@mui/icons-material/Paid';

const works = new Array(4).fill(0).map((_, i) => ({
  id: i,
  title: "A remade backend cut eSky's time to market by 75%",
  client: 'ESKY',
  image: process.env.PUBLIC_URL + '/images/work-graphic.svg'
}));

export default function WorkGrid() {
  return (
    <section className="work-section container" id="work">
      <div className="work-header">
        <h2 className="section-title">Our work</h2>
        <a className="case-btn" href="#cases">Go to case studies</a>
      </div>

      <div className="work-grid">
        {works.map(w => (
          <article className="work-column" key={w.id}>
            <div className="work-visual">
              <div className="work-plate" aria-hidden>
                <div className="work-card-inner">
                  <div className="work-side-icons" aria-hidden>
                    <div className='icon-box'><AirplanemodeActiveIcon /></div>
                    <div className='icon-box'><AirplanemodeActiveIcon /></div>
                    <div className='icon-box'><LocalActivityIcon /></div>
                    <div className='icon-box'><PaidIcon /></div>
                  </div>

                  <div className="work-main">
                    <div className="work-top-card">
                      <div className="thumb">
                        <img src={w.image} alt="demo" />
                      </div>
                      <div className="meta">
                        <div className="meta-sub">Deluxe Room</div>
                        <div className="meta-title">Sao Pinto, Hostel</div>
                        <div className="meta-row">Bali, Indonesia &nbsp; • &nbsp; <strong>5.0</strong> (234 Reviews)</div>
                      </div>
                    </div>

                    <div className="work-bottom-card">
                      <div className="card-row">
                        <div className="card-icon">VISA</div>
                        <div className="card-text">Visa ---- 2820<br /><small>Exp 12-02-30</small></div>
                        <div className="card-radio">◯</div>
                      </div>
                      <div className="card-row">
                        <div className="card-icon">MC</div>
                        <div className="card-text">Master Card ---- 5570<br /><small>Exp 12-02-27</small></div>
                        <div className="card-radio">◯</div>
                      </div>
                      <button className="add-card">Add new card</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="work-text">
              <div className="work-lead">→ <span className="work-title">{w.title}</span></div>
              <div className="work-client">{w.client}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
