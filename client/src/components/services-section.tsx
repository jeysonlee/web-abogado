import { useEffect } from "react";

export default function ServicesSection() {
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

  const services = [
    {
      icon: "fas fa-shield-alt",
      title: "Defensa Penal",
      description: "Representación legal especializada en delitos penales, desde faltas menores hasta casos complejos de alta complejidad judicial."
    },
    {
      icon: "fas fa-handshake",
      title: "Asesoría Legal",
      description: "Consultoría jurídica preventiva y estratégica para particulares y empresas en materias penales y conexas."
    },
    {
      icon: "fas fa-gavel",
      title: "Procesos Judiciales",
      description: "Acompañamiento integral en todas las etapas del proceso judicial, desde la investigación hasta la sentencia final."
    },
    {
      icon: "fas fa-users",
      title: "Derecho de Familia",
      description: "Resolución de conflictos familiares, divorcios, custodia de menores y pensiones alimentarias con enfoque humano."
    },
    {
      icon: "fas fa-file-contract",
      title: "Contratos Legales",
      description: "Redacción, revisión y negociación de contratos comerciales y civiles con seguridad jurídica garantizada."
    },
    {
      icon: "fas fa-search",
      title: "Investigación Legal",
      description: "Investigación exhaustiva de casos, recopilación de pruebas y análisis jurisprudencial para fortalecer la defensa."
    }
  ];

  return (
    <section id="services" className="lawyer-services lawyer-section-padding">
      <div className="container">
        <h2 className="lawyer-section-title playfair lawyer-fade-in">Servicios Legales</h2>
        <p className="text-center mb-5 lawyer-fade-in">
          Ofrezco servicios legales especializados con un enfoque integral y personalizado para cada situación.
        </p>
        
        <div className="row">
          {services.map((service, index) => (
            <div key={index} className="col-lg-4 col-md-6 lawyer-fade-in">
              <div className="lawyer-service-card text-center">
                <div className="lawyer-service-icon">
                  <i className={service.icon}></i>
                </div>
                <h3 className="lawyer-service-title">{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
