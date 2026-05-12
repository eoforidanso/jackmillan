import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Preloader from './components/Preloader';
import CookieBanner from './components/CookieBanner';
import WhatsAppButton from './components/WhatsAppButton';
import Hero from './sections/Hero';
import TrustBar from './sections/TrustBar';
import About from './sections/About';
import ImpactStats from './sections/ImpactStats';
import Services from './sections/Services';
import Requirements from './sections/Requirements';
import HowItWorks from './sections/HowItWorks';
import Players from './sections/Players';
import Testimonials from './sections/Testimonials';
import Gallery from './sections/Gallery';
import Team from './sections/Team';
import FAQ from './sections/FAQ';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import { initScrollReveal } from './utils/scrollReveal';
import { initCardTilt } from './utils/cardTilt';
import './index.css';

export default function App() {
  useEffect(() => {
    const t = setTimeout(() => {
      const cleanReveal = initScrollReveal();
      const cleanTilt = initCardTilt();
      return () => { cleanReveal?.(); cleanTilt?.(); };
    }, 2500);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <Preloader />
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <About />
        <ImpactStats />
        <Services />
        <Requirements />
        <HowItWorks />
        <Players />
        <Testimonials />
        <Gallery />
        <Team />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <CookieBanner />
    </>
  );
}
