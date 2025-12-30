import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import WorkGrid from '../components/WorkGrid';
import Philosophy from '../components/Philosophy';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="home-page">
      <Header />
      <main>
        <Hero />
        <section className="section container">
          
          <Services />
        </section>

        <section className="section container">
          <WorkGrid />
        </section>

        <section className="section container">
          <Philosophy />
        </section>

        <section className="section container">
          <FAQ />
        </section>

        <CTA />
      </main>
      <Footer />
    </div>
  );
}
