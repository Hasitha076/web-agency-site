import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WorkGrid from './components/WorkGrid';
import Philosophy from './components/Philosophy';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
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

export default App;
