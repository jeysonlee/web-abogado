export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
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

  const scrollToServices = () => {
    const element = document.getElementById('services');
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
    <section id="home" className="lawyer-hero">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8">
            <div className="lawyer-hero-content">
              <h1 className="lawyer-hero-title playfair">Dr. Jeyson del Águila</h1>
              <h2 className="lawyer-hero-subtitle">Abogado Penalista Especializado</h2>
              <p className="lead mb-4">
                Defensa legal profesional con más de 15 años de experiencia en derecho penal. 
                Protegiendo sus derechos con dedicación y excelencia jurídica.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <button 
                  className="lawyer-btn-primary btn"
                  onClick={scrollToContact}
                >
                  <i className="fas fa-phone me-2"></i>Consulta Gratuita
                </button>
                <button 
                  className="btn btn-outline-light"
                  onClick={scrollToServices}
                >
                  <i className="fas fa-briefcase me-2"></i>Ver Servicios
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-4 text-center">
            <div className="hero-image mt-4 mt-lg-0">
              <img 
                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=500" 
                alt="Dr. Jeyson del Águila - Abogado Penalista" 
                className="img-fluid rounded-circle shadow-lg" 
                style={{
                  width: '300px', 
                  height: '300px', 
                  objectFit: 'cover', 
                  border: '5px solid rgba(255,255,255,0.2)'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
