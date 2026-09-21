import { channels } from './project';

export type PackageReference = {
  fileName: string;
  fileSize: string;
  sha256: string;
  note: string;
};

export type Release = {
  slug: string;
  title: string;
  version: string;
  platform: 'Bedrock' | 'Java';
  state: 'public' | 'testing';
  date: string | null;
  compatibility: string;
  provider: string;
  localDownloadPath?: string;
  downloadUrl?: string;
  projectUrl?: string;
  summary: string;
  changes: string[];
  knownIssues: string[];
  packageReference?: PackageReference;
};

export const releases: Release[] = [
  {
    slug: 'bedrock-v1-26',
    title: 'A SHIFT AT FREDDY’S',
    version: '1.26',
    platform: 'Bedrock',
    state: 'public',
    date: '2026-08-21',
    compatibility: 'Minecraft 26.1.2 — listagem pública do CurseForge',
    provider: 'SCAF Team · CurseForge',
    localDownloadPath: 'downloads/files/SCAF_Remake_v1.26_Optimized.mcaddon',
    downloadUrl: channels.bedrockDownload,
    projectUrl: channels.curseforge,
    summary: 'Release pública Bedrock de A Shift at Freddy’s, publicada originalmente sob o nome Six Cubes at Freddy’s Remake e agora disponível para download direto no Hub e também pelo projeto oficial no CurseForge.',
    changes: ['Projeto renomeado para A Shift at Freddy’s em 19/09/2026 após votação da comunidade.', 'Novas texturas, animações e modelos em relação ao projeto original.', 'Build otimizada para mobile com suporte a Vibrant Visuals.', 'Pacote público separado das builds internas do projeto.'],
    knownIssues: ['Consulte a página do projeto e o Hub para avisos da versão antes de atualizar um mundo importante.'],
    packageReference: {
      fileName: 'SCAF_Remake_v1.26_Optimized.mcaddon',
      fileSize: '2.02 MiB',
      sha256: 'fc4b85788cd04508e9a3851287963b5fbf6997524fa8d1b8cf79955ee1980a50',
      note: 'Arquivo entregue e validado para a atualização visual V45 do Hub.'
    }
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
