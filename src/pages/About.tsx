
import { Lightbulb, Target, Eye, Network, ShieldCheck } from 'lucide-react';

import { team } from '../data/team';

const values = [
  {
    title: 'Integración',
    description: 'Conectamos disciplinas, tecnologías y procesos.',
    icon: Network
  },
  {
    title: 'Innovación',
    description: 'Exploramos nuevas soluciones a desafíos industriales.',
    icon: Lightbulb
  },
  {
    title: 'Precisión',
    description: 'Priorizamos el rigor técnico y la calidad.',
    icon: Target
  },
  {
    title: 'Compromiso',
    description: 'Trabajamos con responsabilidad y colaboración.',
    icon: ShieldCheck
  }
];

export default function About() {
  return (
    <div className="about-page">

      <section className="about-hero">
        <div className="container">
          <span className="about-eyebrow">
            SOBRE INTEGRAMOTION
          </span>

          <h1>
            Ingeniería que integra ideas,
            personas y tecnología.
          </h1>

          <p>
            IntegraMotion es una iniciativa de ingeniería
            orientada al desarrollo de soluciones de
            automatización, integración tecnológica y
            transformación digital.
          </p>
        </div>
      </section>

      <section className="about-identity">
        <div className="container">

          <div className="about-section-heading">
            <span className="about-eyebrow">
              NUESTRA IDENTIDAD
            </span>
            <h2>El propósito que nos impulsa</h2>
          </div>

          <div className="about-identity-grid">
            <article className="about-info-card">
              <Target size={34} aria-hidden="true" />
              <h3>Misión</h3>
              <p>
                Diseñar y desarrollar soluciones de
                ingeniería y automatización mediante
                la integración de tecnologías, procesos
                y sistemas de información, contribuyendo
                a la eficiencia y evolución tecnológica
                de los entornos industriales.
              </p>
            </article>

            <article className="about-info-card">
              <Eye size={34} aria-hidden="true" />
              <h3>Visión</h3>
              <p>
                Consolidar a IntegraMotion como una
                organización reconocida por su capacidad
                de integrar ingeniería y tecnologías
                digitales, desarrollando soluciones
                innovadoras para industrias más
                inteligentes, conectadas y sostenibles.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="about-values">
        <div className="container">
          <div className="about-section-heading">
            <span className="about-eyebrow">
              NUESTRA FILOSOFÍA
            </span>
            <h2>Principios que orientan nuestro trabajo</h2>
          </div>

          <div className="about-values-grid">
            {values.map(value => {
              const Icon = value.icon;

              return (
                <article
                  className="about-value-card"
                  key={value.title}
                >
                  <Icon size={28} aria-hidden="true" />
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="about-team">
        <div className="container">
          <div className="about-section-heading">
            <span className="about-eyebrow">
              NUESTRO EQUIPO
            </span>
            <h2>Las personas detrás de IntegraMotion</h2>
            <p>
              Un equipo que integra diferentes capacidades
              para desarrollar soluciones de ingeniería.
            </p>
          </div>

          {team.length > 0 ? (
            <div className="about-team-grid">
              {team.map(member => (
                <article
                  className="about-member-card"
                  key={member.id}
                >
                  <div className="about-member-photo">
                    {member.photo ? (
                      <img
                        src={member.photo}
                        alt={`Fotografía de ${member.name}`}
                        loading="lazy"
                      />
                    ) : (
                      <span aria-hidden="true">
                        {member.name.charAt(0)}
                      </span>
                    )}
                  </div>

                  <div className="about-member-content">
                    <h3>{member.name}</h3>

                    <span className="about-member-position">
                      {member.position}
                    </span>

                    <h4>{member.role}</h4>

                    <p>{member.description}</p>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="about-team-empty">
              <p>
                Estamos preparando la presentación
                de los integrantes de IntegraMotion.
              </p>
            </div>
          )}
        </div>
      </section>

    </div>
  );
}
