# Auditoria SCAF Hub 2.2

Auditoria do Hub 2.1 em produção, baseada no código atual e no artefato realmente gerado pelo GitHub Actions.

## Diagnóstico geral

O Hub já deixou de ser protótipo: possui arquitetura estática sólida, build/deploy automático, navegação responsiva, base de acessibilidade, SEO básico, formulários de issues e conteúdo organizado.

O problema agora não é mais "fazer o site existir". É transformar uma boa estrutura técnica em um produto que pareça completo, vivo e claramente SCAF.

O consenso da revisão foi: **não refazer o site de novo**. Manter a base e evoluir conteúdo, identidade, automação e testes.

## O que passou na auditoria

- Astro static-first é adequado ao projeto.
- Build e deploy atuais passam no GitHub Actions.
- HTML gerado é pequeno e simples.
- Todas as páginas possuem um único H1, lang, description e canonical.
- Links externos com nova aba usam noopener/noreferrer.
- Navegação por teclado e foco visível já têm base.
- Menu mobile usa aria-expanded e pode ser fechado com Escape.
- Galeria possui filtros e feedback de quantidade.
- Bedrock e Java têm estados visualmente separados.
- Bugs e sugestões possuem fluxo estruturado no GitHub.

## Reunião de produto: decisões

### Produto × UX

**Problema:** o principal CTA da Home é "Baixar SCAF", mas o download oficial ainda não está conectado.

**Decisão:** isso vira a prioridade número 1. Um Hub de download com o download indisponível passa sensação de produto incompleto mesmo quando todo o resto funciona.

A Home só deve manter "Baixar SCAF" como CTA primário quando o asset oficial existir. Até lá, o texto deve comunicar disponibilidade sem prometer uma ação bloqueada.

### UI/Brand × UX

**Problema:** o layout está limpo, mas ainda genérico. O logo é essencialmente a letra S e boa parte da personalidade do projeto depende de placeholders.

**Decisão:** criar uma identidade própria do SCAF sem voltar ao exagero temático da versão antiga.

Direção aprovada:
- símbolo/logomarca própria do Hub;
- elementos de blueprint/planta técnica;
- geometria/pixel-grid discreta;
- labels industriais e estados de sistema;
- screenshots reais como protagonistas;
- animação curta e funcional, nunca decoração pesada.

### Conteúdo × Front-end

**Problema:** versões estão centralizadas, mas updates, roadmap, release notes e partes da galeria continuam escritos diretamente nas páginas.

**Decisão:** páginas não devem ser banco de dados.

Migrar conteúdo mutável para:
- coleção de updates/changelogs;
- dados de roadmap;
- dados de releases;
- dados de galeria.

A página só renderiza os dados. Isso reduz divergência e torna manutenção muito mais segura.

### Informação × Navegação

**Problema:** a navegação cresceu novamente e hoje possui Início, Downloads, Atualizações, Galeria, Docs, Roadmap, Comunidade e Projeto.

**Decisão:** reduzir o topo para no máximo seis destinos principais.

Arquitetura sugerida:
- Início
- Downloads
- Conteúdo
- Desenvolvimento
- Docs
- Comunidade

"Desenvolvimento" agrupa Atualizações + Roadmap. Projeto/Equipe vira acesso secundário no rodapé ou dentro de Sobre.

### Comunidade × Produto

**Problema:** GitHub Issues é excelente para a equipe, mas exige conta GitHub e é menos natural para parte dos jogadores.

**Decisão:** manter Issues como sistema oficial de triagem. Não criar backend próprio só para formulário neste momento.

Quando houver necessidade real:
- formulário simples no Hub envia para API/backend;
- issues continuam como sistema interno;
- showcase pode usar fluxo moderado separado.

### Segurança × Produto

**Problema:** SECURITY.md manda não publicar vulnerabilidades sensíveis, mas ainda não oferece um canal privado concreto.

**Decisão:** configurar Private Vulnerability Reporting/Security Advisories do GitHub antes de apresentar o processo como completo. Não publicar email pessoal como solução improvisada.

Também:
- nenhum token no front-end;
- nada de autenticação/admin enquanto não houver backend server-side;
- manter uploads desligados até existir validação e moderação.

### Front-end × Acessibilidade

**Achados:**
- roadmap e updates pulam de H1 diretamente para H3;
- ao pressionar Escape, o menu mobile pode mandar foco para o botão mesmo quando o menu já estava fechado;
- filtros da galeria funcionam, mas devem receber teste automatizado de teclado;
- mídia real precisará de alt text contextual e dimensões explícitas.

**Decisão:** corrigir sem mudar o visual.

### Performance × Design

O build atual é extremamente leve, mas isso é parcialmente porque ainda não há screenshots reais.

**Orçamento aprovado para a fase de mídia:**
- hero otimizado e responsivo;
- thumbnails pequenos;
- WebP/AVIF gerados pelo Astro;
- width/height sempre definidos;
- lazy loading fora do primeiro viewport;
- nada de Base64 gigante no HTML.

Imagens devem entrar em src/assets e usar o pipeline de imagem do Astro quando possível.

### DevOps × Front-end

**Problema:** não há package-lock.json. O workflow precisou declarar npm manualmente e instalações transitivas podem variar com o tempo.

**Decisão:** gerar e versionar package-lock.json e preferir instalação determinística.

Além do astro check, CI deve ganhar:
- smoke test das rotas;
- verificação de links internos;
- teste do menu mobile;
- teste dos filtros da galeria;
- auditoria de acessibilidade automatizada;
- orçamento de performance.

### SEO × Conteúdo

A base está correta, mas ainda falta:
- og:image;
- twitter:image;
- imagem social própria;
- sitemap gerado automaticamente em vez de arquivo manual;
- datas reais em updates;
- páginas individuais de release/update para URLs compartilháveis.

Não vale investir em SEO avançado antes de colocar mídia real e conteúdo datado.

### Internacionalização

O Hub atual é somente pt-BR.

**Decisão:** preparar arquitetura para PT-BR, EN e ES antes do volume de conteúdo crescer. Traduzir depois que dezenas de páginas existirem multiplica retrabalho.

O idioma não deve ser detectado de forma agressiva; o usuário escolhe e o site mantém a preferência.

## Backlog priorizado

### P0 — muda a percepção do produto
1. Conectar release/download oficial.
2. Colocar screenshots reais e mídia otimizada.
3. Criar identidade/logomarca SCAF Hub mais forte.
4. Adicionar datas e histórico real ao Newsroom.

### P1 — evita dívida técnica
5. Centralizar updates, roadmap e releases em dados/collections.
6. Simplificar navegação.
7. Gerar package-lock.json e tornar a build determinística.
8. Adicionar smoke/E2E/a11y no CI.
9. Corrigir heading hierarchy e comportamento do Escape.
10. Configurar canal privado para vulnerabilidades.

### P2 — crescimento
11. PT-BR / EN / ES.
12. Páginas individuais de release e update.
13. Sitemap automático + social preview.
14. Busca na documentação quando o volume justificar.
15. Métricas de uso/download apenas quando houver tráfego suficiente para orientar decisões.

## Vetoes da equipe

Não fazer agora:
- backend próprio sem necessidade;
- login de usuário só para "parecer plataforma";
- painel admin no front-end;
- animações pesadas/parallax antes da mídia real;
- redesign total novamente;
- dezenas de dependências de UI;
- porcentagens falsas no roadmap;
- upload público sem moderação.

## Meta para Hub 2.2

A próxima versão deve parecer menos "estrutura pronta aguardando conteúdo" e mais "produto oficial em operação".

Critério de saída:
- download real;
- mídia real;
- identidade própria;
- conteúdo datado/data-driven;
- CI testando interação;
- nenhuma regressão em mobile, acessibilidade ou performance.
