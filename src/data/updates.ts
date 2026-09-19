export type Update = {
  slug: string;
  date: string | null;
  area: 'HUB' | 'BEDROCK' | 'JAVA';
  state: 'PUBLICADO' | 'ATIVO' | 'EM TESTE';
  title: string;
  summary: string;
  details: string[];
};

export const updates: Update[] = [
  {
    slug: 'hub-2-2-operational-pass',
    date: '2026-09-18',
    area: 'HUB',
    state: 'ATIVO',
    title: 'Hub 2.2 — operação, identidade e qualidade',
    summary: 'Download público conectado, navegação simplificada, conteúdo data-driven, i18n e testes automatizados.',
    details: ['Nova arquitetura de informação com seis destinos principais.', 'SEO social, sitemap gerado e páginas individuais de release/update.', 'CI ampliado com build, links, interação e acessibilidade.']
  },
  {
    slug: 'hub-2-1-foundation',
    date: '2026-09-17',
    area: 'HUB',
    state: 'PUBLICADO',
    title: 'SCAF Hub 2.1',
    summary: 'Base Astro, GitHub Pages, galeria, documentação e formulários estruturados de comunidade.',
    details: ['Arquitetura estática e responsiva.', 'Deploy automático pelo GitHub Actions.', 'Fluxos de bug e sugestão via GitHub Issues.']
  },
  {
    slug: 'bedrock-public-curseforge',
    date: '2026-08-21',
    area: 'BEDROCK',
    state: 'PUBLICADO',
    title: 'SCAF Remake publicado no CurseForge',
    summary: 'O projeto público Bedrock passa a ter um destino oficial de download verificável.',
    details: ['Projeto publicado por Mrsquirrel.', 'Compatibilidade exibida publicamente no provedor.', 'Hub aponta para o download oficial em vez de mirrors.']
  },
  {
    slug: 'java-port-1-3-6',
    date: null,
    area: 'JAVA',
    state: 'EM TESTE',
    title: 'Java Port v1.3.6',
    summary: 'Animatrônicos renderizando, blocos reconhecidos e colisões em validação no NeoForge.',
    details: ['Modelos e texturas carregam.', 'Rotação, hitboxes e cobertura de texturas ainda estão em correção.']
  }
];
