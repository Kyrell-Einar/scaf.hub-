# SCAF Hub

Hub oficial do projeto SCAF (Six Cubes at Freddy's), feito em Astro e pensado para ser rápido, acessível e simples de manter.

## O que já existe

- Home e status de Bedrock/Java
- Downloads separados por plataforma e estado
- Newsroom de desenvolvimento
- Galeria com filtros
- Documentação
- Roadmap
- Comunidade com formulários estruturados de bug e sugestão via GitHub Issues
- Página de projeto/equipe
- SEO básico, sitemap, robots e favicon
- Build/checagem automática e deploy no GitHub Pages

## Desenvolvimento

```bash
npm install
npm run dev
```

Validação:

```bash
npm run build
```

## Deploy

Pushes para `main` fazem build e deploy. Pull requests fazem apenas build/checagem. Em **Settings → Pages**, a origem deve ser **GitHub Actions**.

## Estrutura

- `src/pages/`: rotas públicas
- `src/components/`: elementos compartilhados
- `src/data/`: dados centrais de versão/status
- `src/styles/`: design system global
- `.github/ISSUE_TEMPLATE/`: bug reports e sugestões
- `docs/`: decisões de UX, arquitetura e segurança

## Qualidade

Builds de pull request e da `main` executam a checagem do Astro antes de qualquer deploy.

## Mídia

Os screenshots reais do projeto já foram separados do antigo HTML monolítico e estão preparados localmente. Eles devem entrar como arquivos de mídia independentes quando o fluxo de upload binário estiver disponível, em vez de voltar a Base64 embutido no HTML.

## Estado

Base pública do Hub 2.1 preparada para validação automática.
