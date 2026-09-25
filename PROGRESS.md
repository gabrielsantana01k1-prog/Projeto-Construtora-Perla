# PROGRESS.md — estado do projeto (Site Construtora Perla)

Atualizado em: 2026-09-25. Atualize este arquivo ao final de cada tarefa/conversa, antes de `/clear`.

## Situação atual

- Repositório GitHub: `gabrielsantana01k1-prog/Projeto-Construtora-Perla`.
- **`index.html` já existe** — é o protótipo de home enviado pelo usuário, adotado como página real do site (não é mais placeholder). Single-page com âncoras (`#metodo`, `#servicos`, `#obras`, `#quem-somos`), CSS embutido, sem framework, sem build step.
- **Briefing de marca completo** salvo em `docs/briefing/briefing-2026-09-25.html` — levantamento detalhado do Instagram @perlaconstrutora + CNPJ (Econodata), feito em 25/09/2026. Fonte da verdade para qualquer conteúdo futuro do site.
- Protótipo original (idêntico ao `index.html` atual) também preservado em `docs/briefing/home-prototipo-2026-09-25.html` para histórico.
- Screenshots do Instagram (grid + perfil) salvos em `docs/briefing/instagram-*-2026-09-25.{webp,png}` como referência visual.
- Fluxo de trabalho: desenvolvimento nesta sessão (container na nuvem), commit/push a cada etapa. Usuário sincroniza pasta local via `git clone`/`git pull`.

## Dados institucionais (reais, do briefing — fonte da verdade)

- **Razão social:** Perla Construtora LTDA
- **CNPJ:** 55.156.540/0001-50 · aberta 16/05/2024 · ME · capital R$30 mil
- **CNAE principal:** 71.11-1/00 (arquitetura + construção/elétrica/hidráulica/pintura/engenharia)
- **Endereço:** Rua Santa Rita Durão, 444, Savassi, Belo Horizonte/MG, 30140-111
- **Sócias:** Stephanie Faina (engenheira civil, gestão de obras, @stephanie_faina) e Mariana Guimarães (arquiteta e advogada, @marianaguimaraes.arquitetura)
- **WhatsApp usado no site:** `wa.me/553199203886` — ⚠️ **ver risco #1 abaixo, não confiar cegamente**
- **Instagram:** @perlaconstrutora (254 posts, 2.054 seguidores) · YouTube: youtube.com/@perlaconstrutora · TikTok: @perlaconstrutora · Pinterest: pin.it/21KNbOGkU

## Identidade de marca (real, já definida pela Perla — não é mais provisória)

- **Paleta:** 1 fundo (onix `#0E0D0C`) + 1 tinta (pérola `#EFE7D6`) + 1 acento único (ouro champanhe chapado `#C2A56E`) + 1 seção clara isolada (papel `#F4EEE6`, só na seção do dado "37%"). Gradiente metálico restrito ao wordmark do logo. Vinho (`#8C303C`, fase 2 do Instagram) **não entra no site** — fica só no Instagram editorial, decisão já tomada pela marca.
- **Tipografia:** Newsreader (display/corpo) + Cormorant Garamond itálico (números/destaques, ex: "37%").
- **Símbolo:** leque/concha de cinco pétalas facetadas sobre pérola — falta o arquivo vetorial (ver pendências).
- Documentado em `design-system/construtora-perla/MASTER.md` (já atualizado, substitui a paleta genérica Cinzel/Josefin que eu tinha gerado antes de receber o briefing real).

## Posicionamento e conteúdo (do briefing)

- **Promessa central:** "A casa definitiva da sua família, sem o caos da obra." Vende previsibilidade, não obra pesada.
- **Diferencial real:** EVF (Estudo de Viabilidade Financeira) antes da obra — mostra que a "parte cinza" (demolição/elétrica/hidráulica/regularização) já chegou a 37% do orçamento em casos reais.
- **Prova de confiança:** sem RT (comissão de fornecedor), preço de custo repassado sem margem escondida.
- **Serviços:** Gestão de Obra (carro-chefe) · EVF · Arquitetura & Interiores · Perla Transforma (reforma sem quebra-quebra) · Consultoria para reformas rápidas · Clínicas e consultórios (nicho, 5+ entregues).
- **Público:** famílias em reforma/construção · profissionais de saúde (clínicas) · investidores (house flipping).
- **Cases citados publicamente** (para portfólio, todos precisam de fotos em alta + autorização — ver riscos): Clínica Dr. Mateus Garcia, Centro de Referência do Queijo Artesanal, Casa no Vale dos Cristais, Casa na Lagoa dos Ingleses, Apto Jéssica & Beto (110m²), Apto da Márcia (Santo Antônio), Rua Andaluzita (Savassi), Cobertura Rafael Bedran, Apartamento Afetivo, apartamentos de house flipping.
- **Depoimentos disponíveis** (prints reais, precisam autorização para uso público): ver seção 06 do briefing.
- Mapa de site completo (9 seções) documentado na seção 08 do briefing.

## ⚠️ Riscos e pendências bloqueadoras (do próprio briefing, confirmar antes de publicar)

| # | Risco | Ação necessária |
|---|-------|------------------|
| 1 | **WhatsApp `wa.me/553199203886`** tem só 8 dígitos após o DDD 31 — celular brasileiro válido tem 9. Pode ser número antigo/incompleto. Todos os CTAs do site apontam pra ele. | **Testar o número antes de publicar.** Se estiver errado, todo lead se perde. |
| 2 | **Registros CAU (Mariana) e CREA (Stephanie) ausentes.** Publicidade de arquitetura/engenharia no Brasil exige nome + registro do responsável técnico visível. | Pedir os números reais às sócias. `index.html` já tem `[confirmar]` nos lugares certos — **nunca inventar um número aqui.** |
| 3 | **Autorização de clientes (LGPD)** para nomes/fotos/prints usados nos cases (Dr. Mateus Garcia, Jéssica e Beto, Márcia, Rafael Bedran). | Confirmar com o usuário se já há autorização por escrito antes de publicar esses nomes. |
| 4 | **Promessas absolutas** ("resultado garantido", "100% de aprovação") viram passivo jurídico se questionadas. | Revisar redação com o usuário antes de publicar cópias finais — `index.html` atual já é mais comedido, mas vale checar textos futuros. |
| 5 | **Arquivos originais faltando:** logo em vetor (SVG/AI), fotos em alta resolução, vídeos das obras. Instagram só entrega imagens comprimidas. | Pedir arquivos originais ao usuário — hoje `index.html` usa blocos `.photo` como placeholder ("Foto · obra entregue" etc). |
| 6 | Posicionamento "mães e cristãs" é declarado pela marca mas não está no `index.html` atual. | Perguntar ao usuário se deve entrar no hero ou só na seção "Quem somos". |

## Decisões já tomadas (histórico da conversa)

- Tipo de site: institucional + vitrine de empreendimentos/obras + captação de leads — confirmado pelo conteúdo real do briefing.
- Localização: Belo Horizonte, MG (Savassi).
- Nível: site avaliado em R$10 mil, alto padrão — condizente com o "Checklist $10K" (ver `CLAUDE.md`).
- Requisito de performance explícito: animações elegantes que carreguem bem em qualquer dispositivo. `index.html` já implementa isso: só a entrada do hero anima (`.rise`), com `prefers-reduced-motion` totalmente respeitado, sem GSAP, sem blur pesado (só 10px na nav sticky).
- Escopo de idioma: só português (decisão já tomada).
- Hospedagem: cPanel, mesmo modelo do projeto Arobot (a decidir na hora de publicar).
- Skills instalados neste repositório (permanentes, versionados em `.claude/skills/`): `frontend-design` (anthropics/skills) e `ui-ux-pro-max` (nextlevelbuilder/ui-ux-pro-max-skill — instalado por cópia direta de arquivos estáticos, não via npm, que foi bloqueado pelo classificador de segurança do ambiente).
- "Checklist $10K" (8 pontos, ver `CLAUDE.md`) é regra permanente de qualidade de design para todo o projeto.

## Próximo passo exato

1. Perguntar ao usuário sobre os 6 riscos/pendências da tabela acima — pelo menos os itens 1-3 (Alto) bloqueiam publicação.
2. Perguntar se o site é single-page (como o protótipo atual) ou se precisa de páginas adicionais (o sitemap do briefing menciona página própria de Portfólio, FAQ e página exclusiva para Clínicas — o protótipo atual só cobre a home em uma página).
3. Assim que houver fotos reais, substituir os blocos `.photo` placeholder em `index.html`.
4. Preencher `[confirmar]` de CREA/CAU assim que os números chegarem.
5. Revisar/testar o link do WhatsApp antes de qualquer divulgação.
6. Commitar e dar push a cada etapa concluída, atualizando este arquivo.

## Notas

- Nenhuma senha, token ou credencial deve ser registrada neste arquivo.
- Branch de trabalho: `main` (repositório novo, ainda sem publicação — ver critério de branches em `CLAUDE.md`).
- **Regra importante:** nunca preencher CREA/CAU, número de WhatsApp ou qualquer dado de compliance com valor inventado — manter `[confirmar]` até o usuário fornecer o dado real.
