import { ArrowRight, ArrowUpRight } from 'lucide-react';
import IndustryGraphic from './IndustryGraphic';
import { Link } from 'react-router-dom';

export default function Hero() {
  return <section className="hero" id="inicio" aria-labelledby="hero-title">
    <div className="container hero-layout">
      <div className="hero-content">
        <span className="eyebrow"><span className="eyebrow-dot" /> INGENIERÍA · AUTOMATIZACIÓN · TRANSFORMACIÓN DIGITAL</span>
        <h1 id="hero-title">Conectamos ingeniería, procesos y <span>tecnología.</span></h1>
        <p>Diseñamos soluciones de automatización, integración industrial y transformación digital para construir operaciones más inteligentes y conectadas.</p>   
        <div className="hero-actions">
          <Link
            to="/servicios"
            className="button button--primary"
          >
            Explorar soluciones
            <ArrowUpRight size={18} aria-hidden="true" />
          </Link>

          <Link
            to="/proyectos"
            className="button button--outline"
          >
            Ver proyectos
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </div>
      <IndustryGraphic />
    </div>
  </section>;
}
