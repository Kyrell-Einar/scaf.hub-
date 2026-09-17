# SCAF Hub 2.0 — Auditoria multidisciplinar

Esta auditoria trata o Hub como produto, não como uma página decorativa. A versão anterior serve apenas como inventário de conteúdo; o visual foi descartado.

## Mesa de produto

| Área | Problema | Decisão |
|---|---|---|
| Produto | Públicos diferentes competiam no mesmo lugar | Separar área pública de tester/admin |
| UX | Download, mudanças e ajuda estavam escondidos por excesso de navegação | Home orientada a tarefas |
| UI | Terminal verde/preto seria clichê e prejudicaria leitura | Direção industrial/editorial, grafite + marfim + vermelho de alerta |
| Arquitetura de informação | Menu anterior tinha opções demais | Início, Downloads, Atualizações, Docs, Roadmap, Comunidade + Projeto secundário |
| Front-end | HTML monolítico era pesado e ruim de manter | Astro static-first, componentes e JavaScript mínimo |
| Back-end | GitHub Pages não é backend | Serviços autenticados ficam separados do front estático |
| Segurança | Contas/admin/uploads ampliam superfície de ataque | RBAC/RLS, validação server-side, rate limit e logs |
| QA | Preview visual não prova funcionamento | CI, smoke tests, mobile, teclado, links e formulários |
| Performance | Um HTML com mídia embutida prejudica cache e primeira carga | Assets separados, lazy loading e orçamento de JS |
| Acessibilidade | Tema gamer não pode sacrificar uso | WCAG 2.2 AA como meta, foco visível e reduced motion |
| Conteúdo | Release pública e test build podiam ser confundidas | Estados explícitos: público, teste, planejado e a confirmar |
| DevOps | PC do desenvolvedor não deve ser servidor/build obrigatório | GitHub Actions como pipeline de build/deploy |

## Identidade

O Hub usa linguagem de bastidores, manutenção e interface de produto contemporânea. Referências a FNaF entram de forma sutil; o site não deve virar simulador de terminal ou HUD.

### Permitido
- grafite azulado e superfícies em aço escuro;
- texto marfim/off-white;
- vermelho para assinatura/alerta, âmbar para teste, verde apenas para sucesso;
- tipografia sans para leitura e mono para versão/status;
- fotos e screenshots reais acima de decoração;
- linhas, etiquetas, módulos e pequenos indicadores técnicos.

### Vetado
- tela inteira verde/preta;
- glitch, flicker e scanline forte;
- fonte pixelada em parágrafos;
- menus com 10+ itens;
- hero puramente decorativo;
- datas inventadas e barras de progresso falsas;
- painel admin protegido apenas por URL escondida;
- token administrativo no JavaScript do navegador.

## Arquitetura pública

1. **Início** — estado, versão pública, test build e atalhos.
2. **Downloads** — Bedrock/Java separados, integridade e known issues.
3. **Atualizações** — newsroom com contexto de plataforma e estado.
4. **Docs** — instalação, compatibilidade, sistemas, comandos e FAQ.
5. **Roadmap** — estados discretos, sem porcentagem arbitrária.
6. **Comunidade** — bugs, sugestões, showcases e suporte.
7. **Projeto** — objetivo, filosofia, equipe e créditos como link secundário.

## Área autenticada futura

### Tester
- builds autorizadas;
- checklist por build;
- bugs observados/atribuídos;
- histórico de testes;
- notas privadas.

### Admin/equipe
- publicar atualização;
- gerenciar release e roadmap;
- triagem de bugs/sugestões;
- permissões e moderação;
- logs de ação.

## Regra de downloads

Nenhum botão de download deve parecer funcional antes de existir uma URL oficial. Cada release precisa informar plataforma, versão SCAF, compatibilidade Minecraft, formato, changelog, known issues e SHA-256 quando aplicável.

## Comunidade e bugs

Bug report deve pedir: plataforma, versão SCAF, versão Minecraft, dispositivo/SO, descrição, passos para reproduzir, esperado, observado e mídia opcional. Estados públicos: recebido, precisa de informação, confirmado, em análise, planejado, em desenvolvimento, resolvido, duplicado e não planejado.

## Arquitetura técnica

- **Front:** Astro, static-first.
- **Hospedagem:** GitHub Pages.
- **Build/deploy:** GitHub Actions.
- **Releases grandes:** GitHub Releases/storage oficial, não dentro do bundle do site.
- **Backend futuro:** separado do Pages, com autorização validada no servidor.
- **Conteúdo técnico:** Markdown versionado no repositório.

## Metas de qualidade

- navegação por teclado e foco visível;
- respeito a `prefers-reduced-motion`;
- mobile-first sem overflow horizontal;
- imagens separadas e cacheáveis;
- links e rotas validados em CI;
- nenhuma afirmação de compatibilidade sem teste correspondente;
- nenhuma data de release inventada para preencher layout.
