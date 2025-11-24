"use client";
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Packages from '../components/Packages';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Packages />
      <Services />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </div>
  );
}

