export type GalleryItem = {
  title: string;
  label: string;
  category: 'build' | 'content' | 'character' | 'development';
  media: string;
  alt: string;
  fit?: 'cover' | 'contain';
};

export const galleryItems: GalleryItem[] = [
  { title: 'Main Dining Room', label: 'BUILD', category: 'build', media: 'main-dining-room.webp', alt: 'Salão principal construído no Minecraft com conteúdo do SCAF' },
  { title: 'Security Office', label: 'BUILD', category: 'build', media: 'security-office.webp', alt: 'Sala de segurança construída no Minecraft com conteúdo do SCAF' },
  { title: 'Backstage Workshop', label: 'BUILD', category: 'build', media: 'backstage-workshop.webp', alt: 'Backstage e oficina construídos no Minecraft com conteúdo do SCAF' },
  { title: 'Entrance Hall', label: 'BUILD', category: 'build', media: 'entrance-hall.webp', alt: 'Hall de entrada construído no Minecraft com conteúdo do SCAF' },
  { title: 'Pizzeria Interior', label: 'BUILD', category: 'build', media: 'build-interior.webp', alt: 'Interior de pizzaria construído no Minecraft usando o SCAF' },
  { title: 'Stage Build', label: 'BUILD', category: 'build', media: 'build-stage.webp', alt: 'Palco temático construído no Minecraft com o SCAF' },
  { title: 'Character Display', label: 'CHARACTERS', category: 'character', media: 'build-characters.webp', alt: 'Personagens e animatrônicos do SCAF exibidos dentro do Minecraft' },
  { title: 'Springlock Courtyard', label: 'BUILD', category: 'build', media: 'springlock-courtyard.webp', alt: 'Área externa temática construída no Minecraft com conteúdo do SCAF' },
  { title: 'Springlock Suits', label: 'CHARACTERS', category: 'character', media: 'team-springlock-suits.webp', alt: 'Trajes springlock exibidos em uma construção do SCAF dentro do Minecraft' },

  { title: 'Content Test 01', label: 'CONTENT', category: 'content', media: '79681.webp', alt: 'Teste de conteúdo e decoração do SCAF dentro do Minecraft' },
  { title: 'Poster Wall', label: 'CONTENT', category: 'content', media: '79682.webp', alt: 'Parede com pôsteres e itens decorativos do SCAF dentro do Minecraft' },
  { title: 'Content Test 02', label: 'CONTENT', category: 'content', media: '79683.webp', alt: 'Teste de personagens e decoração do SCAF dentro do Minecraft' },

  { title: 'FNaF 2 Carousel', label: 'DEVELOPMENT', category: 'development', media: 'carousel-clean.webp', alt: 'Modelo limpo do carrossel de FNaF 2 desenvolvido para o SCAF', fit: 'contain' },
  { title: 'Early Carousel Model', label: 'DEVELOPMENT', category: 'development', media: 'early-model-clean.webp', alt: 'Versão inicial do modelo do carrossel durante o desenvolvimento do SCAF', fit: 'contain' },
  { title: 'Carousel Dev Capture 01', label: 'DEVELOPMENT', category: 'development', media: '80443.webp', alt: 'Captura de desenvolvimento do carrossel do SCAF', fit: 'contain' },
  { title: 'Carousel Dev Capture 02', label: 'DEVELOPMENT', category: 'development', media: '80444.webp', alt: 'Segunda captura de desenvolvimento do carrossel do SCAF', fit: 'contain' },
  { title: 'Carousel Dev Capture 03', label: 'DEVELOPMENT', category: 'development', media: '80445.webp', alt: 'Terceira captura de desenvolvimento do carrossel do SCAF', fit: 'contain' },
  { title: 'Carousel In-game Test', label: 'DEVELOPMENT', category: 'development', media: '80449.webp', alt: 'Teste do carrossel dentro do Minecraft durante o desenvolvimento do SCAF' },

  { title: 'Java Animatronics', label: 'JAVA TEST', category: 'character', media: 'java-port-136-animatronics-tight.webp', alt: 'Animatrônicos do port Java 1.3.6 do SCAF renderizando no Minecraft' },
  { title: 'Java Block Test 01', label: 'JAVA TEST', category: 'content', media: 'java-port-136-block-1-tight.webp', alt: 'Primeiro teste de blocos do port Java 1.3.6 do SCAF', fit: 'contain' },
  { title: 'Java Block Test 02', label: 'JAVA TEST', category: 'content', media: 'java-port-136-block-2-tight.webp', alt: 'Segundo teste de blocos do port Java 1.3.6 do SCAF', fit: 'contain' },
  { title: 'Java Block Test 03', label: 'JAVA TEST', category: 'content', media: 'java-port-136-block-3-tight.webp', alt: 'Terceiro teste de blocos do port Java 1.3.6 do SCAF', fit: 'contain' },
  { title: 'Java Block Test 04', label: 'JAVA TEST', category: 'content', media: 'java-port-136-block-4-tight.webp', alt: 'Quarto teste de blocos do port Java 1.3.6 do SCAF', fit: 'contain' }
];
