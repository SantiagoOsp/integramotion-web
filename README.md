# IntegraMotion Web — Incremento 01

Primera implementación visual de IntegraMotion (Corporate Tech) con **Header**, **Hero** y **Servicios**.

## Requisitos
- Node.js 20.19+ o 22.12+
- npm

## Ejecutar
```bash
npm install
npm run dev
```
Abre la URL indicada en la terminal (generalmente `http://localhost:5173`).

## Validar compilación
```bash
npm run build
npm run preview
```

## Estructura
- `src/components/Header.tsx`: navegación responsive y menú móvil.
- `src/components/Hero.tsx`: propuesta de valor y llamadas a la acción.
- `src/components/IndustryGraphic.tsx`: diagrama conceptual SVG.
- `src/components/Services.tsx`: catálogo de seis servicios, con detalles desplegables.
- `src/components/Logo.tsx`: logotipo de referencia derivado de la propuesta visual aprobada.
- `src/styles.css`: tokens visuales, layouts y estados responsive.
- `src/App.tsx`: composición de la página y secciones provisionales.

## Alcance y limitaciones
Las secciones **Nosotros**, **Tecnologías**, **Proyectos** y **Contacto** son marcadores explícitos de contenido pendiente, para que la navegación no termine en enlaces rotos. Todavía no existe formulario de contacto ni portafolio real. No se han inventado casos de éxito ni cifras comerciales.

El archivo PNG del logotipo proviene de la composición gráfica aprobada y es una **referencia rasterizada**. Antes del lanzamiento conviene sustituirlo por un SVG trazado y verificado a partir del logo definitivo.

## Lista de comprobación manual
1. En escritorio, aparecen el Header, los dos CTA del Hero y las seis tarjetas de servicios.
2. En móvil (< 900 px), el menú se abre/cierra y sus enlaces desplazan a secciones existentes.
3. La tecla Escape cierra el menú móvil.
4. El enlace «Saltar al contenido» aparece con foco de teclado.
5. «Explorar soluciones» lleva a servicios y «Ver proyectos» al marcador del portafolio.
6. Cada «Conocer más» expande la descripción técnica.
7. Revisar en 320 px que no aparezca scroll horizontal.

## Próximos incrementos
1. Sustituir el logotipo PNG por SVG definitivo.
2. Completar fichas del portafolio y página Proyectos.
3. Implementar página Servicios ampliada y las otras páginas corporativas.
4. Definir canales reales y crear formulario con tratamiento adecuado de datos.
5. Implementar SEO por página, pruebas automatizadas y despliegue.
