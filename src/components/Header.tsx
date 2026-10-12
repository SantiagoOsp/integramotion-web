
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import Logo from './Logo';

const links = [
  { text: 'Inicio', url: '/' },
  { text: 'Nosotros', url: '/nosotros' },
  { text: 'Servicios', url: '/servicios' },
  { text: 'Tecnologías', url: '/tecnologias' },
  { text: 'Proyectos', url: '/proyectos' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, {
      passive: true
    });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };

    window.addEventListener('keydown', onEscape);
    return () => window.removeEventListener(
      'keydown', onEscape
    );
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header className={`site-header ${
      scrolled ? 'site-header--scrolled' : ''
    }`}>
      <div className="container header-inner">
        <NavLink
          to="/"
          className="brand-link"
          aria-label="IntegraMotion, ir al inicio"
          onClick={closeMenu}
        >
          <Logo />
        </NavLink>

        <nav
          className="desktop-nav"
          aria-label="Navegación principal"
        >
          {links.map(link => (
            <NavLink
              key={link.url}
              to={link.url}
              end={link.url === '/'}
              className={({ isActive }) =>
                `nav-link ${
                  isActive ? 'nav-link--active' : ''
                }`
              }
            >
              {link.text}
            </NavLink>
          ))}
        </nav>

        <NavLink
          to="/contacto"
          className="button button--primary header-contact"
          onClick={closeMenu}
        >
          Contacto
          <ArrowUpRight size={16} aria-hidden="true" />
        </NavLink>

        <button
          className="menu-toggle"
          type="button"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-controls="mobile-menu"
          aria-expanded={open}
          onClick={() => setOpen(value => !value)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          className="mobile-nav"
          aria-label="Navegación móvil"
        >
          {[...links, {
            text: 'Contacto',
            url: '/contacto'
          }].map(link => (
            <NavLink
              key={link.url}
              to={link.url}
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive? 'mobile-link--active' : ''
              }
            >
              {link.text}
              <ArrowUpRight
                size={16}
                aria-hidden="true"
              />
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}
