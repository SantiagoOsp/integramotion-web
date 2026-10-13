
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Network,
  Workflow,
  ArrowRight,
  Factory,
  Layers3,
  ExternalLink
} from 'lucide-react';

const isa95Levels = [
  {
    level: 4,
    title: 'Gestión empresarial',
    system: 'ERP y planificación',
    description:
      'Planificación empresarial, necesidades de producción, ' +
      'recursos y logística.',
    example:
      'Planificar la cantidad de producto lácteo que se ' +
      'necesita fabricar.'
  },
  {
    level: 3,
    title: 'Gestión de operaciones',
    system: 'MOM / MES',
    description:
      'Coordinación y seguimiento de producción, calidad, ' +
      'mantenimiento e inventarios.',
    example:
      'Programar órdenes de producción y registrar la ' +
      'ejecución de lotes.'
  },
  {
    level: 2,
    title: 'Supervisión y control',
    system: 'PLC / HMI / SCADA',
    description:
      'Control y supervisión de los procesos productivos ' +
      'mediante sistemas de automatización.',
    example:
      'Controlar y supervisar la temperatura de un tanque.'
  },
  {
    level: 1,
    title: 'Sensado y actuación',
    system: 'Sensores y actuadores',
    description:
      'Medición de variables y actuación directa ' +
      'sobre el proceso físico.',
    example:
      'Medir temperatura y accionar válvulas.'
  },
  {
    level: 0,
    title: 'Proceso físico',
    system: 'Proceso productivo',
    description:
      'Transformaciones físicas que ocurren durante ' +
      'la producción.',
    example:
      'Calentamiento y tratamiento térmico de leche.'
  }
];

const isa88Physical = [
  {
    title: 'Célula de proceso',
    detail: 'Área de producción por lotes.',
    example: 'Sistema de preparación de producto lácteo.'
  },
  {
    title: 'Unidad',
    detail: 'Conjunto de equipos que ejecuta actividades de proceso.',
    example: 'Tanque de preparación con sus elementos asociados.'
  },
  {
    title: 'Módulo de equipo',
    detail: 'Conjunto funcional que realiza una tarea de equipo.',
    example: 'Sistema de dosificación de ingredientes.'
  },
  {
    title: 'Módulo de control',
    detail: 'Elemento básico de control y sus dispositivos asociados.',
    example: 'Control de apertura de una válvula.'
  }
];

const isa88Procedural = [
  {
    title: 'Procedimiento',
    detail: 'Secuencia global de elaboración de un lote.',
    example: 'Elaborar un lote de producto lácteo.'
  },
  {
    title: 'Procedimiento de unidad',
    detail: 'Secuencia que se realiza en una unidad.',
    example: 'Preparar la mezcla en un tanque.'
  },
  {
    title: 'Operación',
    detail: 'Conjunto ordenado de fases relacionadas.',
    example: 'Realizar la dosificación de ingredientes.'
  },
  {
    title: 'Fase',
    detail: 'Elemento procedimental de menor nivel del modelo.',
    example: 'Dosificar una cantidad objetivo de ingrediente.'
  }
];

export default function Technologies() {
  const [selectedLevel, setSelectedLevel] = useState(3);
  const [isa88Model, setIsa88Model] =
    useState<'physical' | 'procedural'>('physical');

  const currentLevel = isa95Levels.find(
    item => item.level === selectedLevel
  )!;

  const isa88Items =
    isa88Model === 'physical'
      ? isa88Physical
      : isa88Procedural;

  return (
    <div className="technologies-page">

      {/* Encabezado */}
      <section className="tech-hero">
        <div className="container">
          <span className="tech-eyebrow">
            TECNOLOGÍAS Y ESTÁNDARES
          </span>

          <h1>
            Arquitecturas inteligentes para
            una industria conectada.
          </h1>

          <p>
            Explora modelos de referencia y ejemplos
            conceptuales de integración y automatización
            aplicados a procesos industriales.
          </p>
        </div>
      </section>

      {/* Introducción */}
      <section className="tech-intro">
        <div className="container">
          <span className="tech-eyebrow">
            NUESTRO ENFOQUE
          </span>

          <h2>Ingeniería basada en modelos</h2>

          <p>
            La organización de procesos, equipos y datos
            permite diseñar arquitecturas industriales
            más comprensibles y mantenibles.
            Estas demostraciones presentan conceptos
            de ISA-95 e ISA-88 mediante ejemplos
            simplificados de la industria láctea.
          </p>

          <p className="tech-disclaimer">
            Material ilustrativo. No constituye una
            implementación industrial validada ni una
            declaración de certificación normativa.
          </p>
        </div>
      </section>

      {/* ISA-95 */}
      <section className="tech-section tech-section--alternate">
        <div className="container">
          <div className="tech-section-heading">
            <div className="tech-section-icon">
              <Network size={28} aria-hidden="true" />
            </div>

            <span className="tech-eyebrow">
              INTEGRACIÓN INDUSTRIAL
            </span>

            <h2>Modelo ISA-95</h2>

            <p>
              Una referencia para comprender las
              funciones de producción, control y
              gestión empresarial, así como sus
              necesidades de intercambio de información.
            </p>
          </div>

          <div className="tech-model-grid">

            <div
              className="tech-levels"
              aria-label="Niveles del modelo ISA-95"
            >
              {isa95Levels.map(item => (
                <button
                  key={item.level}
                  type="button"
                  className={`tech-level ${
                    selectedLevel === item.level
                      ? 'tech-level--active'
                      : ''
                  }`}
                  aria-pressed={
                    selectedLevel === item.level
                  }
                  onClick={() =>
                    setSelectedLevel(item.level)
                  }
                >
                  <span className="tech-level-number">
                    {item.level}
                  </span>

                  <span className="tech-level-text">
                    <strong>{item.title}</strong>
                    <small>{item.system}</small>
                  </span>

                  <ArrowRight
                    size={18}
                    aria-hidden="true"
                  />
                </button>
              ))}
            </div>

            <article
              className="tech-detail-panel"
              aria-live="polite"
            >
              <span className="tech-detail-label">
                NIVEL {currentLevel.level}
              </span>

              <h3>{currentLevel.title}</h3>

              <p>{currentLevel.description}</p>

              <div className="tech-example">
                <strong>Ejemplo conceptual</strong>
                <p>{currentLevel.example}</p>
              </div>
            </article>

          </div>

          <p className="tech-model-note">
            Los niveles describen funciones; no obligan
            a utilizar una aplicación específica.
            El modelo está simplificado con fines educativos.
          </p>
        </div>
      </section>

      {/* ISA-88 */}
      <section className="tech-section">
        <div className="container">
          <div className="tech-section-heading">
            <div className="tech-section-icon">
              <Workflow size={28} aria-hidden="true" />
            </div>

            <span className="tech-eyebrow">
              PROCESOS POR LOTES
            </span>

            <h2>Modelo ISA-88</h2>

            <p>
              ISA-88 permite estructurar equipos,
              procedimientos y recetas en sistemas
              de producción por lotes.
            </p>
          </div>

          <div
            className="tech-tabs"
            aria-label="Seleccionar modelo ISA-88"
          >
            <button
              type="button"
              className={
                isa88Model === 'physical' ? 'active' : ''
              }
              aria-pressed={isa88Model === 'physical'}
              onClick={() => setIsa88Model('physical')}
            >
              Modelo físico
            </button>

            <button
              type="button"
              className={
                isa88Model === 'procedural' ? 'active' : ''
              }
              aria-pressed={isa88Model === 'procedural'}
              onClick={() => setIsa88Model('procedural')}
            >
              Modelo procedimental
            </button>
          </div>

          <div className="tech-isa88-grid">
            {isa88Items.map((item, index) => (
              <article
                key={`${isa88Model}-${item.title}`}
                className="tech-isa88-card"
              >
                <span className="tech-isa88-number">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <h3>{item.title}</h3>

                <p>{item.detail}</p>

                <div className="tech-isa88-example">
                  <strong>Ejemplo ilustrativo</strong>
                  <span>{item.example}</span>
                </div>
              </article>
            ))}
          </div>

          <p className="tech-model-note">
            Ejemplos simplificados para una planta láctea
            hipotética. La descomposición de equipos y
            procedimientos depende del proceso real.
          </p>
        </div>
      </section>

      {/* Aplicación */}
      <section className="tech-application">
        <div className="container">
          <div className="tech-application-content">
            <div>
              <span className="tech-eyebrow">
                APLICACIONES DE INGENIERÍA
              </span>

              <h2>
                De los modelos a los proyectos.
              </h2>

              <p>
                Conoce cómo IntegraMotion plantea el
                uso de arquitecturas industriales,
                simulación y herramientas digitales
                en sus proyectos técnicos.
              </p>
            </div>

            <div className="tech-application-actions">
              <Factory size={42} aria-hidden="true" />

              <Link
                to="/proyectos"
                className="tech-application-link"
              >
                Explorar proyectos
                <ArrowRight
                  size={18}
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Fuentes */}
      <section className="tech-references">
        <div className="container">
          <h2>
            <Layers3 size={22} aria-hidden="true" />
            Referencias técnicas
          </h2>

          <p>
            Estas plantillas se elaboraron como
            material introductorio a partir de las
            descripciones públicas de ISA.
          </p>

          <div className="tech-reference-links">
            <a
              href="https://www.isa.org/standards-and-publications/isa-standards/isa-95-standard"
              target="_blank"
              rel="noopener noreferrer"
            >
              ISA-95 — International Society of Automation
              <ExternalLink size={16} aria-hidden="true" />
            </a>

            <a
              href="https://www.isa.org/standards-and-publications/isa-standards/isa-88-standards"
              target="_blank"
              rel="noopener noreferrer"
            >
              ISA-88 — International Society of Automation
              <ExternalLink size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
