export type RoadmapItem = {
  id: string;
  title: string;
  description: string;
  state: 'CONCLUÍDO' | 'ATIVO' | 'EM TESTE' | 'PLANEJADO' | 'QUANDO PRONTO';
};

export const roadmap: RoadmapItem[] = [
  { id: '01', title: 'Fundação', description: 'Estrutura, deploy, documentação e base de qualidade do projeto.', state: 'CONCLUÍDO' },
  { id: '02', title: 'Sistemas Bedrock', description: 'Correções, otimização e evolução da branch pública.', state: 'ATIVO' },
  { id: '03', title: 'Port Java', description: 'Blocos, colisões, modelos, texturas e comportamento no NeoForge.', state: 'EM TESTE' },
  { id: '04', title: 'Otimização', description: 'Renderização, entidades, mobile e multiplayer.', state: 'ATIVO' },
  { id: '05', title: 'FNaF 2 / Content pass', description: 'Props, blocos, trajes, sistemas e atrações adicionais.', state: 'ATIVO' },
  { id: '06', title: 'Expansão de releases', description: 'Publicação quando pacote, compatibilidade e known issues estiverem prontos.', state: 'QUANDO PRONTO' }
];
