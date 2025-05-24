import { useEffect } from "react";

export default function AboutSection() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.lawyer-fade-in').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="lawyer-about lawyer-section-padding">
      <div className="container">
        <h2 className="lawyer-section-title playfair lawyer-fade-in">Sobre Mí</h2>
        <div className="row align-items-center">
          <div className="col-lg-6 lawyer-fade-in">
            <img 
              src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400" 
              alt="Oficina legal profesional con libros de derecho" 
              className="img-fluid rounded shadow-lg"
            />
          </div>
          <div className="col-lg-6 lawyer-fade-in">
            <div className="ps-lg-4">
              <p className="lawyer-about-text">
                Soy el <strong>Dr. Jeyson del Águila</strong>, abogado especialista en derecho penal con más de 15 años de experiencia defendiendo los derechos de mis clientes ante los tribunales de justicia.
              </p>
              <p className="lawyer-about-text">
                Mi compromiso es brindar una defensa legal sólida, estratégica y personalizada, basada en un profundo conocimiento del sistema judicial y una dedicación absoluta a cada caso que represento.
              </p>
              <div className="lawyer-highlight-box">
                <h4 className="playfair mb-3">Mi Filosofía Profesional</h4>
                <p className="mb-0">
                  Creo firmemente que toda persona merece una defensa legal competente y apasionada. Mi enfoque se centra en la preparación meticulosa, la comunicación transparente y la búsqueda incansable de la justicia para mis clientes.
                </p>
              </div>
              <div className="row mt-4">
                <div className="col-6">
                  <div className="text-center">
                    <h3 className="text-primary">15+</h3>
                    <p>Años de Experiencia</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="text-center">
                    <h3 className="text-primary">500+</h3>
                    <p>Casos Exitosos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
