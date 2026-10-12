const nodes = [
  { label: 'Campo', x: 83, y: 79 },
  { label: 'Control', x: 318, y: 79 },
  { label: 'Integración', x: 201, y: 177, central: true },
  { label: 'OT', x: 83, y: 281 },
  { label: 'IT', x: 318, y: 281 },
];

export default function IndustryGraphic() {
  return <div className="industry-card" aria-label="Diagrama conceptual de integración entre campo, control, tecnologías operacionales y sistemas de información" role="img">
    <svg viewBox="0 0 400 360" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <pattern id="grid" width="28" height="28" patternUnits="userSpaceOnUse"><path d="M 28 0 L 0 0 0 28" fill="none" stroke="#b6cedc" strokeWidth=".7"/></pattern>
        <linearGradient id="beam" x1="0" x2="1"><stop stopColor="#008CA8"/><stop offset="1" stopColor="#00BCD4"/></linearGradient>
      </defs>
      <rect width="400" height="360" rx="20" fill="#e8f1f7"/>
      <rect x="10" y="10" width="380" height="340" fill="url(#grid)" opacity=".7"/>
      <g stroke="url(#beam)" strokeWidth="3" fill="none"><path d="M 83 79 L 201 177 L 318 79 M 201 177 L 83 281 M 201 177 L 318 281"/></g>
      <g>{nodes.map(n => <g key={n.label} transform={`translate(${n.x},${n.y})`}>
        <rect x="-50" y="-28" width="100" height="57" rx="10" fill={n.central ? '#0B2D5B':'#fff'} stroke={n.central?'#0B2D5B':'#9ebacc'} strokeWidth="1.5" />
        <circle cx="0" cy="-11" r="6" fill="#00BCD4" />
        <text x="0" y="13" fontSize="12" textAnchor="middle" fontWeight="600" fill={n.central?'#fff':'#0B2D5B'}>{n.label}</text>
      </g>)}</g>
    </svg>
    <span className="industry-caption">Arquitectura industrial conectada</span>
  </div>;
}
