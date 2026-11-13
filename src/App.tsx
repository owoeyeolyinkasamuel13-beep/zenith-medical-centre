import logo from "./assets/ZMC-logo.png";
import doctor from "./assets/doctor.jpg";
import {
  Menu,
  X,
  Phone,
  MapPin,
  Clock,
  HeartPulse,
  Stethoscope,
  Baby,
  Activity,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";
import { useState } from "react";
import "./App.css";

const services = [
  {
    icon: Stethoscope,
    title: "General Consultation",
    description: "Professional medical consultations and healthcare guidance for your wellbeing.",
  },
  {
    icon: HeartPulse,
    title: "Medical Care",
    description: "Compassionate medical attention focused on your health and recovery.",
  },
  {
    icon: Baby,
    title: "Maternal & Child Care",
    description: "Dedicated healthcare support for mothers, babies and growing families.",
  },
  {
    icon: Activity,
    title: "Health Screening",
    description: "Routine health checks and screening to help you stay informed about your health.",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className="topbar">
        <div className="container topbar-inner">
          <span><MapPin size={14} /> 5 Odo-Odo Street, Ado-Ekiti</span>
          <a href="tel:+2348102494040"><Phone size={14} /> +234 810 249 4040</a>
        </div>
      </div>

      <header className="header">
        <div className="container nav-container">
          <a href="#home" className="brand" onClick={closeMenu}>
           <img src={logo} alt="Zenith Medical Centre Logo" className="brand-logo" />
            <div>
              <strong>ZENITH</strong>
              <small>MEDICAL CENTRE</small>
            </div>
          </a>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>

          <nav className={menuOpen ? "nav-links open" : "nav-links"}>
            {["Home", "About", "Services", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>
                {item}
              </a>
            ))}
            <a href="https://wa.me/2348102494040" className="nav-button" target="_blank" rel="noreferrer">
              Contact Us <ArrowRight size={16} />
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-overlay"></div>
          <div className="container hero-content">
            <span className="eyebrow"><HeartPulse size={15} /> YOUR HEALTH, OUR PRIORITY</span>
            <h1>Compassionate Care.<br /><span>Better Health.</span></h1>
            <p>
              At Zenith Medical Centre, your health and wellbeing matter.
              We are committed to providing compassionate care in a welcoming environment.
            </p>
            <div className="hero-actions">
              <a href="https://wa.me/2348102494040" className="primary-button" target="_blank" rel="noreferrer">
                Get in Touch <ArrowRight size={18} />
              </a>
              <a href="#services" className="secondary-button">Explore Our Services</a>
            </div>
            <div className="hero-note">
              <ShieldCheck size={20} />
              <span>GOD HEALS, WE CARE!</span>
            </div>
          </div>
        </section>

        <section className="quick-info">
          <div className="container info-grid">
            <div className="info-item">
              <div className="info-icon"><Phone /></div>
              <div><strong>Call Us</strong><a href="tel:+2348102494040">+234 810 249 4040</a></div>
            </div>
            <div className="info-item">
              <div className="info-icon"><MapPin /></div>
              <div><strong>Our Location</strong><span>Ado-Ekiti, Ekiti State</span></div>
            </div>
            <div className="info-item">
              <div className="info-icon"><Clock /></div>
              <div><strong>Visit Us</strong><span>Contact us for opening hours</span></div>
            </div>
          </div>
        </section>

        <section className="about section-padding" id="about">
          <div className="container about-grid">
            <div className="about-image">
              <img
                src={doctor}
                alt="Doctor at Zenith Medical Centre"
              />
              <div className="image-caption">
                <HeartPulse size={25} />
                <div><strong>GOD HEALS, WE CARE!</strong><span>Your wellbeing matters to us.</span></div>
              </div>
            </div>
            <div className="about-content">
              <span className="section-label">ABOUT ZENITH MEDICAL CENTRE</span>
              <h2>Healthcare with <span>compassion</span> and dedication.</h2>
              <p>
                Zenith Medical Centre is committed to caring for individuals
                and families through accessible, compassionate healthcare.
                We believe every patient deserves attention, respect and care.
              </p>
              <p>
                Our goal is to make every visit a positive experience while
                supporting the health and wellbeing of our community.
              </p>
              <a href="#contact" className="text-link">Get to know us <ArrowRight size={17} /></a>
            </div>
          </div>
        </section>

        <section className="services section-padding" id="services">
          <div className="container">
            <div className="section-heading">
              <span className="section-label">WHAT WE OFFER</span>
              <h2>Our Healthcare Services</h2>
              <p>Care and attention focused on supporting your health and wellbeing.</p>
            </div>
            <div className="service-grid">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <article className="service-card" key={service.title}>
                    <div className="service-icon"><Icon size={29} /></div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <a href="#contact">Enquire Now <ArrowRight size={15} /></a>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="why-us section-padding">
          <div className="container why-grid">
            <div>
              <span className="section-label light-label">WHY CHOOSE US</span>
              <h2>Your health deserves <span>the best care.</span></h2>
              <p>
                We are committed to creating a caring environment where
                patients feel heard, respected and supported.
              </p>
              <a href="#contact" className="white-button">Contact Our Centre <ArrowRight size={17} /></a>
            </div>
            <div className="why-list">
              <div><CheckCircle2 /><span><strong>Patient-focused approach</strong><small>Your needs and wellbeing come first.</small></span></div>
              <div><CheckCircle2 /><span><strong>Compassionate service</strong><small>We believe in treating everyone with care and respect.</small></span></div>
              <div><CheckCircle2 /><span><strong>Community commitment</strong><small>Supporting healthier lives in our community.</small></span></div>
            </div>
          </div>
        </section>

        <section className="contact section-padding" id="contact">
          <div className="container">
            <div className="section-heading">
              <span className="section-label">GET IN TOUCH</span>
              <h2>We are here for you.</h2>
              <p>Reach out to us for enquiries and healthcare assistance.</p>
            </div>
            <div className="contact-grid">
              <div className="contact-card">
                <MapPin />
                <h3>Visit Our Centre</h3>
                <p>5 Odo-Odo Street, Off Ado-Iworoko Road, Ado-Ekiti, Ekiti State.</p>
                <a href="https://www.google.com/maps/search/?api=1&query=5+Odo-Odo+Street+Ado-Ekiti" target="_blank" rel="noreferrer">Get Directions <ArrowRight size={15} /></a>
              </div>
              <div className="contact-card">
                <Phone />
                <h3>Call Us</h3>
                <p>Speak with us directly for enquiries and assistance.</p>
                <a href="tel:+2348102494040">+234 810 249 4040 <ArrowRight size={15} /></a>
              </div>
              <div className="contact-card">
                <MessageCircle />
                <h3>WhatsApp</h3>
                <p>Send us a message for enquiries and general information.</p>
                <a href="https://wa.me/2348102494040" target="_blank" rel="noreferrer">Chat With Us <ArrowRight size={15} /></a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-main">
          <div className="footer-brand">
            <a href="#home" className="brand footer-logo">
              <img src={logo} alt="Zenith Medical Centre Logo" className="brand-logo" />
              <div><strong>ZENITH</strong><small>MEDICAL CENTRE</small></div>
            </a>
            <p>GOD HEALS, WE CARE!<br />Committed to your health and wellbeing.</p>
          </div>
          <div><h4>Quick Links</h4><a href="#home">Home</a><a href="#about">About Us</a><a href="#services">Our Services</a><a href="#contact">Contact</a></div>
          <div><h4>Contact Details</h4><span>5 Odo-Odo Street, Ado-Ekiti</span><a href="tel:+2348102494040">+234 810 249 4040</a></div>
        </div>
        <div className="container footer-bottom">
          <span>© 2026 Zenith Medical Centre. All rights reserved.</span>
          <span>GOD HEALS, WE CARE!</span>
        </div>
      </footer>

      <a href="https://wa.me/2348102494040" className="whatsapp-float" target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">
        <MessageCircle size={25} />
      </a>
    </>
  );
}

export default App;

