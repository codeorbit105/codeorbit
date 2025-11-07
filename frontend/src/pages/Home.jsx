import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
// import TrustedClients from "../components/TrustedClients";
import ServicesSection from "../components/ServicesSection";
import VisionMission from "../components/VisionMission";
import PortfolioSection from "../components/PortfolioSection";
import ProcessSection from "../components/ProcessSection";
import Testimonials from "../components/Testimonials";
import CTASection from "../components/CTASection";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import ScrollToTopButton from "../components/ScrollToTopButton";

export default function Home() {
  return (
    <div className="scroll-container">
      <Navbar />
      <main>
        {/* ✅ HOME SECTION */}
        <section id="home" className="section hero-section">
          <HeroSection />
        </section>

        <section className="scroll">
          <ScrollToTopButton />
        </section>

        {/* TRUSTED CLIENTS */}
        {/* <section className="section">
          <TrustedClients />
        </section> */}

        {/* ✅ SERVICES SECTION */}
        <section id="services" className="section">
          <ServicesSection />
        </section>

        {/* CTA or OUR EXPERTISE */}
        <section id="portfolio" className="section">
          <CTASection />
        </section>

        {/* ✅ MISSION / VISION SECTION */}
        <section id="vision" className="section">
          <VisionMission />
        </section>

        {/* ✅ PORTFOLIO SECTION */}
        <section id="work" className="section">
          <PortfolioSection />
        </section>

        {/* ✅ PROCESS SECTION */}
        <section id="process" className="section">
          <ProcessSection />
        </section>

        {/* ✅ TESTIMONIALS */}
        <section id="testimonials" className="section">
          <Testimonials />
        </section>

        {/* ✅ CONTACT / START A PROJECT */}
        <section id="contact" className="section contact-section">
          <ContactForm />
        </section>
      </main>
    </div>
  );
}
