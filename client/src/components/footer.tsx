export default function Footer() {
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
    <footer className="lawyer-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-4">
            <h4 className="lawyer-footer-title playfair">Dr. Jeyson del Águila</h4>
            <p>
              Abogado especialista en derecho penal comprometido con la excelencia en el servicio legal y la defensa de los derechos de mis clientes.
            </p>
            <div className="lawyer-social-icons mt-3">
              <a href="#" title="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" title="Facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="#" title="Twitter"><i className="fab fa-twitter"></i></a>
              <a href="#" title="Instagram"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
          
          <div className="col-lg-2 mb-4">
            <h5 className="lawyer-footer-title">Enlaces</h5>
            <ul className="list-unstyled">
              <li>
                <a 
                  href="#home" 
                  className="lawyer-footer-link"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('home');
                  }}
                >
                  Inicio
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="lawyer-footer-link"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('about');
                  }}
                >
                  Sobre Mí
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  className="lawyer-footer-link"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('services');
                  }}
                >
                  Servicios
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="lawyer-footer-link"
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
          
          <div className="col-lg-3 mb-4">
            <h5 className="lawyer-footer-title">Servicios</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="lawyer-footer-link">Defensa Penal</a></li>
              <li><a href="#" className="lawyer-footer-link">Asesoría Legal</a></li>
              <li><a href="#" className="lawyer-footer-link">Procesos Judiciales</a></li>
              <li><a href="#" className="lawyer-footer-link">Derecho de Familia</a></li>
            </ul>
          </div>
          
          <div className="col-lg-3 mb-4">
            <h5 className="lawyer-footer-title">Contacto</h5>
            <p><i className="fas fa-map-marker-alt me-2"></i>Av. Javier Prado Este 123, San Isidro</p>
            <p><i className="fas fa-phone me-2"></i>+51 999 999 999</p>
            <p><i className="fas fa-envelope me-2"></i>contacto@jeysondelaguilaabogado.com</p>
          </div>
        </div>
        
        <hr style={{ borderColor: 'rgba(255,255,255,0.2)' }} />
        
        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="mb-0">&copy; 2024 Dr. Jeyson del Águila. Todos los derechos reservados.</p>
          </div>
          <div className="col-md-6 text-md-end">
            <p className="mb-0">
              <a href="#" className="lawyer-footer-link me-3">Política de Privacidad</a>
              <a href="#" className="lawyer-footer-link">Términos de Servicio</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
