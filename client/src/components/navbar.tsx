import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`lawyer-navbar navbar navbar-expand-lg navbar-light fixed-top ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <a 
          className="lawyer-navbar-brand playfair navbar-brand" 
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('home');
          }}
        >
          <i className="fas fa-balance-scale me-2"></i>
          Dr. Jeyson del Águila
        </a>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a 
                className="lawyer-nav-link nav-link" 
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('home');
                }}
              >
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a 
                className="lawyer-nav-link nav-link" 
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('about');
                }}
              >
                Sobre Mí
              </a>
            </li>
            <li className="nav-item">
              <a 
                className="lawyer-nav-link nav-link" 
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('services');
                }}
              >
                Servicios
              </a>
            </li>
            <li className="nav-item">
              <a 
                className="lawyer-nav-link nav-link" 
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contact');
                }}
              >
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
