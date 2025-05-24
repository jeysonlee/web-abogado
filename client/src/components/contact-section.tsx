import { useState, useEffect } from "react";

declare global {
  interface Window {
    emailjs: any;
  }
}

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  useEffect(() => {
    // Initialize EmailJS
    if (window.emailjs) {
      window.emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY");
    }

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'contacto@jeysondelaguilaabogado.com'
      };

      if (window.emailjs) {
        await window.emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID',
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID',
          templateParams
        );
        
        setSubmitMessage('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('EmailJS not loaded');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitMessage('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="lawyer-contact lawyer-section-padding">
      <div className="container">
        <h2 className="lawyer-section-title playfair lawyer-fade-in">Contacto</h2>
        <p className="text-center mb-5 lawyer-fade-in">
          ¿Necesita asesoría legal? Contácteme para una consulta personalizada.
        </p>
        
        <div className="row">
          <div className="col-lg-8 lawyer-fade-in">
            <div className="lawyer-contact-form">
              <h4 className="playfair mb-4">Envíeme un Mensaje</h4>
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">Nombre Completo *</label>
                      <input 
                        type="text" 
                        className="lawyer-form-control form-control" 
                        id="name" 
                        name="name" 
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">Correo Electrónico *</label>
                      <input 
                        type="email" 
                        className="lawyer-form-control form-control" 
                        id="email" 
                        name="email" 
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="subject" className="form-label">Asunto *</label>
                  <input 
                    type="text" 
                    className="lawyer-form-control form-control" 
                    id="subject" 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Mensaje *</label>
                  <textarea 
                    className="lawyer-form-control form-control" 
                    id="message" 
                    name="message" 
                    rows={5} 
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="lawyer-btn-primary btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <i className="fas fa-spinner fa-spin me-2"></i>Enviando...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane me-2"></i>Enviar Mensaje
                    </>
                  )}
                </button>
              </form>
              
              {submitMessage === 'success' && (
                <div className="lawyer-alert-success alert mt-3">
                  <i className="fas fa-check-circle me-2"></i>
                  ¡Mensaje enviado correctamente! Me pondré en contacto contigo pronto.
                </div>
              )}
              
              {submitMessage === 'error' && (
                <div className="alert alert-danger mt-3">
                  <i className="fas fa-exclamation-triangle me-2"></i>
                  Hubo un error al enviar el mensaje. Por favor, intenta nuevamente o contáctame directamente.
                </div>
              )}
            </div>
          </div>
          
          <div className="col-lg-4 lawyer-fade-in">
            <div className="lawyer-contact-info">
              <h4 className="playfair mb-4">Información de Contacto</h4>
              
              <div className="lawyer-contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <strong>Dirección:</strong><br />
                  Av. Javier Prado Este 123<br />
                  San Isidro, Lima, Perú
                </div>
              </div>
              
              <div className="lawyer-contact-item">
                <i className="fas fa-phone"></i>
                <div>
                  <strong>Teléfono:</strong><br />
                  +51 999 999 999
                </div>
              </div>
              
              <div className="lawyer-contact-item">
                <i className="fas fa-envelope"></i>
                <div>
                  <strong>Email:</strong><br />
                  contacto@jeysondelaguilaabogado.com
                </div>
              </div>
              
              <div className="lawyer-contact-item">
                <i className="fas fa-clock"></i>
                <div>
                  <strong>Horario de Atención:</strong><br />
                  Lunes - Viernes: 9:00 AM - 7:00 PM<br />
                  Sábados: 9:00 AM - 1:00 PM
                </div>
              </div>
              
              <div className="mt-4">
                <h5 className="mb-3">Sígueme en Redes Sociales</h5>
                <div className="lawyer-social-icons">
                  <a href="#" title="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                  <a href="#" title="Facebook"><i className="fab fa-facebook-f"></i></a>
                  <a href="#" title="Twitter"><i className="fab fa-twitter"></i></a>
                  <a href="#" title="Instagram"><i className="fab fa-instagram"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
