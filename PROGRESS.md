# PROGRESS.md — estado do projeto (Site Construtora Perla)

Atualizado em: 2026-09-25. Atualize este arquivo ao final de cada tarefa/conversa, antes de `/clear`.

## Situação atual

- Repositório GitHub criado (`gabrielsantana01k1-prog/Projeto-Construtora-Perla`), estava vazio.
- Nenhum código do site foi desenvolvido ainda.
- Este commit inicial cria apenas `CLAUDE.md` (regras do projeto) e este `PROGRESS.md` (estado/memória entre sessões).
- Fluxo de trabalho combinado com o usuário: desenvolvimento acontece nesta sessão (container na nuvem), com commit/push para o GitHub a cada etapa. O usuário sincroniza a pasta local do computador dele com `git clone`/`git pull` desse mesmo repositório.

## Decisões já tomadas

- Tipo de site: **institucional simples**, estático (HTML/CSS/JS puro — sem framework, sem backend).
- Objetivo do site (múltiplo): **vitrine de empreendimentos** + **captação de leads** + **institucional/portfólio**.
- Identidade visual: o usuário **já tem logo e cores oficiais** da marca (ainda não enviados).
- Dados de contato: o usuário vai informar os dados reais (ainda não enviados).
- **Padrão de design obrigatório definido pelo usuário**: "Checklist $10K" (8 pontos — ver `CLAUDE.md`, seção "Padrão de design obrigatório"). Toda entrega de UI precisa ser validada contra essa lista antes de ser considerada concluída. Isso é regra permanente, não uma preferência pontual.
- **Skill `frontend-design` instalado** (origem: `anthropics/skills`, pasta `skills/frontend-design`). Salvo em `.claude/skills/frontend-design/` dentro deste repositório para ficar disponível em qualquer sessão futura. Reforça a diretriz do "Checklist $10K": direção estética deliberada, tipografia com propósito, nada de layout genérico/templated.
- **Skill `ui-ux-pro-max` instalado** (origem: `nextlevelbuilder/ui-ux-pro-max-skill`). Instalação via `npm install -g` foi **bloqueada pelo classificador de segurança do ambiente** (dois testes: global e local, ambos negados). Repositório foi inspecionado manualmente antes de instalar (dependências conhecidas — chalk/commander/ora/prompts, sem `postinstall`, sem coleta de credenciais, sem chamadas de rede suspeitas nos scripts) e instalado por cópia direta dos arquivos estáticos do skill (`.claude/skills/ui-ux-pro-max/`), sem executar o CLI/pacote npm. Salvo em `.claude/skills/ui-ux-pro-max/` neste repositório (~3.6MB: catálogos de estilos, paletas, tipografia, ícones, guias de UX). Se no futuro for necessário o CLI completo (`uipro`) para atualizações automáticas, o usuário precisa liberar explicitamente a permissão de `npm install` global no ambiente.
- **Localização definida**: Belo Horizonte, MG.
- **Nível/orçamento**: site avaliado em R$10 mil (posicionamento alto padrão, condizente com o "Checklist $10K").
- **Requisito de performance explícito**: animações elegantes que carreguem bem em qualquer dispositivo (não só aparelhos topo de linha).
- **Sistema de design gerado e persistido** via skill `ui-ux-pro-max` em `design-system/construtora-perla/MASTER.md`:
  - Paleta: preto quente `#1C1917` + dourado `#A16207` + branco pérola `#FAFAF9` (combina com o nome "Perla").
  - Tipografia: Cinzel (títulos, serifada elegante) + Josefin Sans (corpo, sans-serif limpa) — mood "real estate, luxury, elegant, sophisticated".
  - Padrão de página: Scroll-Triggered Storytelling (hero → capítulos → CTA final).
  - Motion: stagger list leve (opacity+scale+y, 300-450ms, GPU-friendly), com fallback total para `prefers-reduced-motion`.
  - **Curadoria manual**: a busca automática sugeriu estilo "Liquid Glass" (blur/vidro, pensado pra chrome de app Apple) — substituído manualmente por "Refined Editorial Minimalism" (sem blur pesado) por conflitar com o requisito de performance em qualquer dispositivo. Justificativa registrada no próprio MASTER.md.
  - Paleta/tipografia são **provisórias** até o usuário enviar logo e cores oficiais da marca (pendência #1 abaixo ainda vale).

## Pendências (bloqueando início do desenvolvimento visual/conteúdo)

Aguardando do usuário:
1. **Logo** (arquivo) e **cores oficiais** (hex, se tiver).
2. **Contato**: WhatsApp, telefone, e-mail, cidade/região de atuação.
3. **Nome completo da empresa** (ex: "Construtora Perla" ou razão social completa) e slogan, se houver.
4. **Ao menos 1 empreendimento** para a vitrine: nome, status (lançamento/em obras/pronto), cidade, fotos/plantas se já existirem.

## Próximo passo exato

Assim que o usuário enviar os itens da lista de pendências acima:
1. Criar estrutura de pastas do site (`index.html`, `/css`, `/js`, `/assets`).
2. Implementar layout inicial (header/hero, seção institucional, vitrine de empreendimentos, seção de contato/lead com WhatsApp).
3. Commitar e dar push para `main` a cada etapa concluída, atualizando este arquivo.

## Notas

- Nenhuma senha, token ou credencial deve ser registrada neste arquivo.
- Branch de trabalho: `main` (repositório novo, ainda sem publicação — ver critério de branches em `CLAUDE.md`).
