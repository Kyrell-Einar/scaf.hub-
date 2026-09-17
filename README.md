# SCAF Hub

Hub oficial do projeto SCAF (Six Cubes at Freddy's), reconstruído em Astro com foco em performance, acessibilidade e manutenção.

## Stack

- Astro 7
- HTML estático por padrão
- CSS próprio, sem biblioteca visual pesada
- GitHub Pages + GitHub Actions

## Desenvolvimento local

```bash
npm install
npm run dev
```

Validação e build:

```bash
npm run build
```

## Deploy

Pushes para `main` disparam `.github/workflows/deploy.yml`. O repositório deve usar **GitHub Actions** como source em Settings → Pages.

## Estrutura

- `src/pages/`: rotas públicas
- `src/components/`: navegação e elementos compartilhados
- `src/styles/`: design system global
- `public/assets/`: mídia real do projeto
- `docs/AUDITORIA_SCAF_HUB_2.md`: decisões de UX, produto, segurança e arquitetura

## Estado

A interface pública é funcional. Downloads oficiais e fluxos de comunidade continuam bloqueados até suas URLs/backends reais existirem; placeholders não são apresentados como ações válidas.
