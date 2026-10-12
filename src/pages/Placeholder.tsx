
import { Link } from 'react-router-dom';

interface PlaceholderProps {
  title: string;
  description: string;
}

export default function Placeholder({
  title,
  description
}: PlaceholderProps) {
  return (
    <section
      className="next-section"
      aria-labelledby="placeholder-title"
    >
      <div className="container next-panel">
        <h1 id="placeholder-title">{title}</h1>

        <p>{description}</p>

        <p>
          <Link to="/" className="button button--outline">
            Volver al inicio
          </Link>
        </p>
      </div>
    </section>
  );
}
