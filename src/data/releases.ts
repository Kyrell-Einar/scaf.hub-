import { channels } from './project';

export type Release = {
  slug: string;
  title: string;
  version: string;
  platform: 'Bedrock' | 'Java';
  state: 'public' | 'testing';
  date: string | null;
  compatibility: string;
  provider: string;
  downloadUrl?: string;
  projectUrl?: string;
  summary: string;
  changes: string[];
  knownIssues: string[];
};

export const releases: Release[] = [
  {
    slug: 'bedrock-v1-26',
    title: 'SIX CUBES AT FREDDY’S REMAKE',
    version: '1.26',
    platform: 'Bedrock',
    state: 'public',
    date: '2026-08-21',
    compatibility: 'Minecraft 26.1.2 — listagem pública do CurseForge',
    provider: 'CurseForge · Mrsquirrel',
    downloadUrl: channels.bedrockDownload,
    projectUrl: channels.curseforge,
    summary: 'Release pública do SCAF Remake para Bedrock, hospedada no canal oficial do projeto no CurseForge.',
    changes: ['Novas texturas, animações e modelos em relação ao SCAF original.', 'Pacote público separado das builds internas do projeto.'],
    knownIssues: ['Consulte a página do projeto e o Hub para avisos da versão antes de atualizar um mundo importante.']
  },
  {
    slug: 'java-v1-3-6',
    title: 'Java Port v1.3.6',
    version: '1.3.6',
    platform: 'Java',
    state: 'testing',
    date: null,
    compatibility: 'NeoForge · ambiente de testes',
    provider: 'SCAF Team',
    summary: 'Build interna usada para validar blocos, colisões, modelos, texturas e animatrônicos no port Java.',
    changes: ['Modelos e texturas de animatrônicos já renderizam.', 'Blocos testados são reconhecidos e possuem colisão.'],
    knownIssues: ['Rotação, hitboxes e cobertura de texturas ainda estão em validação.']
  }
];

export const publicRelease = releases.find((release) => release.state === 'public')!;
