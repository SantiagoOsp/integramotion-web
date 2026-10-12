
import { Link } from 'react-router-dom';
import { ArrowUpRight, Network } from 'lucide-react';

const navigation = [
  { label: 'Inicio', path: '/' },
  { label: 'Nosotros', path: '/nosotros' },
  { label: 'Servicios', path: '/servicios' },
  { label: 'Tecnologías', path: '/tecnologias' },
  { label: 'Proyectos', path: '/proyectos' },
  { label: 'Contacto', path: '/contacto' }
];

export default function Footer() {
  return (
    <footer className="corporate-footer">
      <div className="container">
        <div className="footer-grid">

          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <Network size={28} aria-hidden="true" />
              <span>IntegraMotion</span>
            </Link>

            <p>
              Sistemas conectados,
              industrias inteligentes.
            </p>

            <p className="footer-description">
              Ingeniería, automatización e integración
              tecnológica para el desarrollo de
              soluciones industriales.
            </p>
          </div>

          <div className="footer-column">
            <h2>Explorar</h2>

            <nav aria-label="Navegación del pie de página">
              {navigation.map(item => (
                <Link key={item.path} to={item.path}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="footer-column">
            <h2>Soluciones</h2>

            <Link to="/servicios">
              Automatización industrial
            </Link>

            <Link to="/servicios">
              Integración OT/IT
            </Link>

            <Link to="/servicios">
              Gemelos digitales
            </Link>

            <Link to="/tecnologias">
              Transformación digital
            </Link>
          </div>

          <div className="footer-column">
            <h2>¿Tienes un proyecto?</h2>

            <p>
              Conversemos sobre los desafíos
              tecnológicos de tu operación.
            </p>

            <Link
              className="footer-contact-link"
              to="/contacto"
            >
              Contactar
              <ArrowUpRight
                size={16}
                aria-hidden="true"
              />
            </Link>
          </div>

        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} IntegraMotion.
            Todos los derechos reservados.
          </span>

          <span>
            Ingeniería y Automatización
          </span>
        </div>
      </div>
    </footer>
  );
}
