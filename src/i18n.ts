import type { Locale } from './lib/paths';

export const supportedLocales: Locale[] = ['pt', 'en', 'es'];
export const localizableRoutes = ['', 'downloads', 'content', 'development', 'docs', 'community', 'about'];

export const navLabels: Record<Locale, Record<string, string>> = {
  pt: { home: 'Início', downloads: 'Downloads', content: 'Conteúdo', development: 'Desenvolvimento', docs: 'Docs', community: 'Comunidade', about: 'Projeto' },
  en: { home: 'Home', downloads: 'Downloads', content: 'Content', development: 'Development', docs: 'Docs', community: 'Community', about: 'Project' },
  es: { home: 'Inicio', downloads: 'Descargas', content: 'Contenido', development: 'Desarrollo', docs: 'Docs', community: 'Comunidad', about: 'Proyecto' }
};

export const localizedCopy = {
  en: {
    home: { eyebrow: 'Minecraft fan project · A Shift at Freddy’s', title: 'Build the place. Run the systems.', lead: 'Official hub for A Shift at Freddy’s, formerly Six Cubes at Freddy’s Remake.', primary: 'Download Bedrock', secondary: 'See development' },
    downloads: { eyebrow: 'SCAF / Downloads', title: 'The right build, clearly labeled.', lead: 'Public Bedrock releases and Java test builds are kept visibly separate.' },
    content: { eyebrow: 'SCAF / Content', title: 'See what SCAF actually builds.', lead: 'Real in-game builds, blocks, characters and development previews.' },
    development: { eyebrow: 'SCAF / Development', title: 'Progress with context.', lead: 'Dated updates and a roadmap based on states, not invented percentages.' },
    docs: { eyebrow: 'SCAF / Docs', title: 'Install it. Understand it.', lead: 'Official installation, compatibility and testing guidance.' },
    community: { eyebrow: 'SCAF / Community', title: 'Reports that do not get lost in chat.', lead: 'Structured bug reports, suggestions and official community channels.' },
    about: { eyebrow: 'A Shift at Freddy’s / Project', title: 'A building kit with systems behind it.', lead: 'A Shift at Freddy’s is the current name of the fan project formerly known as Six Cubes at Freddy’s Remake.' }
  },
  es: {
    home: { eyebrow: 'Proyecto fan de Minecraft · A Shift at Freddy’s', title: 'Construye el lugar. Activa los sistemas.', lead: 'Hub oficial de A Shift at Freddy’s, anteriormente Six Cubes at Freddy’s Remake.', primary: 'Descargar Bedrock', secondary: 'Ver desarrollo' },
    downloads: { eyebrow: 'SCAF / Descargas', title: 'La versión correcta, bien identificada.', lead: 'Las releases públicas de Bedrock y las builds de prueba de Java están claramente separadas.' },
    content: { eyebrow: 'SCAF / Contenido', title: 'Mira lo que SCAF construye de verdad.', lead: 'Construcciones reales, bloques, personajes y avances de desarrollo.' },
    development: { eyebrow: 'SCAF / Desarrollo', title: 'Progreso con contexto.', lead: 'Actualizaciones con fecha y un roadmap por estados, sin porcentajes inventados.' },
    docs: { eyebrow: 'SCAF / Docs', title: 'Instálalo. Entiéndelo.', lead: 'Guías oficiales de instalación, compatibilidad y pruebas.' },
    community: { eyebrow: 'SCAF / Comunidad', title: 'Reportes que no se pierden en el chat.', lead: 'Bugs, sugerencias y canales oficiales organizados.' },
    about: { eyebrow: 'A Shift at Freddy’s / Proyecto', title: 'Un kit de construcción con sistemas detrás.', lead: 'A Shift at Freddy’s es el nombre actual del proyecto fan antes conocido como Six Cubes at Freddy’s Remake.' }
  }
} as const;
