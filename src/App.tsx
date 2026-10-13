
import { Route, Routes } from 'react-router-dom';

import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Placeholder from './pages/Placeholder';

import Projects from './pages/Projects';

import ProjectDetail from './pages/ProjectDetail';

import About from './pages/About';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/nosotros"
          element={<About />}
        />

        <Route
          path="/servicios"
          element={
            <Placeholder
              title="Nuestros servicios"
              description="Soluciones de ingeniería, automatización e integración industrial."
            />
          }
        />

        <Route
          path="/tecnologias"
          element={
            <Placeholder
              title="Tecnologías"
              description="Explora las herramientas, arquitecturas y tecnologías industriales."
            />
          }
        />

        <Route
          path="/proyectos"
          element={<Projects />}
        />

        <Route
          path="/proyectos/:slug"
          element={<ProjectDetail />}
        />

        <Route
          path="/contacto"
          element={
            <Placeholder
              title="Contacto"
              description="Conversemos sobre tus necesidades de ingeniería."
            />
          }
        />

        <Route
          path="*"
          element={
            <Placeholder
              title="404 — Página no encontrada"
              description="La dirección solicitada no existe."
            />
          }
        />
      </Routes>
    </Layout>
  );
}