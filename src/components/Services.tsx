import { ArrowUpRight, Boxes, ChartNoAxesCombined, Cpu, Network, PencilRuler, Workflow } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type Service = { id: string; title: string; description: string; icon: LucideIcon; details: string };

export const services: Service[] = [
  {id:'automatizacion',title:'Automatización industrial',description:'Diseño e integración de sistemas de control, instrumentación y supervisión.',icon:Cpu,details:'Soluciones de control, supervisión e instrumentación adaptadas al proceso industrial.'},
  {id:'integracion',title:'Integración OT/IT',description:'Conectividad entre operaciones industriales, sistemas empresariales y datos.',icon:Network,details:'Arquitecturas de intercambio de información y conectividad entre planta y negocio.'},
  {id:'digitalizacion',title:'Transformación digital',description:'Digitalización, monitorización y análisis de información de procesos.',icon:ChartNoAxesCombined,details:'Identificación y desarrollo de oportunidades para convertir datos operativos en información útil.'},
  {id:'gemelos',title:'Gemelos digitales',description:'Modelado, simulación y evaluación virtual de sistemas productivos.',icon:Boxes,details:'Representaciones y simulaciones orientadas a estudiar escenarios de operación y diseño.'},
  {id:'mecatronica',title:'Ingeniería mecatrónica',description:'Diseño e integración de soluciones mecánicas, electrónicas y de control.',icon:Workflow,details:'Integración de subsistemas interdisciplinarios para responder a necesidades de ingeniería.'},
  {id:'consultoria',title:'Consultoría y arquitectura industrial',description:'Diagnóstico técnico y planificación de soluciones tecnológicas industriales.',icon:PencilRuler,details:'Evaluación de necesidades, definición de arquitectura y elaboración de propuestas técnicas.'},
];

export default function Services() {
  return <section className="services section" id="servicios" aria-labelledby="services-title">
    <div className="container">
      <div className="section-head">
        <p className="section-kicker">NUESTRAS SOLUCIONES</p>
        <h2 id="services-title">Ingeniería que conecta y transforma industrias.</h2>
        <p>Integramos tecnologías, procesos y sistemas para desarrollar soluciones adaptadas a los desafíos de cada operación industrial.</p>
      </div>
      <div className="service-grid">
        {services.map(({id,title,description,details,icon:Icon}) => <article className="service-card" key={id} id={`servicio-${id}`}>
          <span className="service-icon"><Icon size={25} strokeWidth={1.8} aria-hidden="true" /></span>
          <h3>{title}</h3>
          <p>{description}</p>
          <details className="service-details"><summary>Conocer más <ArrowUpRight size={16} aria-hidden="true" /></summary><p>{details}</p></details>
        </article>)}
      </div>
    </div>
  </section>;
}
