
import type { ReactNode } from 'react';

import Header from '../Header';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({
  children
}: LayoutProps) {
  return (
    <>
      <ScrollToTop />

      <a className="skip-link" href="#main">
        Saltar al contenido
      </a>

      <Header />

      <main id="main" tabIndex={-1}>
        {children}
      </main>

      <Footer />
    </>
  );
}
