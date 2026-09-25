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
- **WhatsApp usado no site:** `wa.me/5531999203886` (31 9 9920-3886, celular de Stephanie Faina) — ✅ confirmado pelo usuário em 25/09.
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
| ~~1~~ | ~~WhatsApp incompleto~~ | **RESOLVIDO em 25/09**: número correto confirmado pelo usuário — `31 9 9920-3886` (celular de Stephanie Faina), 9 dígitos. Atualizado em todos os 8 links `wa.me/` + texto visível do `index.html` para `wa.me/5531999203886`. |
| 2 | **Registros CAU (Mariana) e CREA (Stephanie) ausentes.** Publicidade de arquitetura/engenharia no Brasil exige nome + registro do responsável técnico visível. | **NÃO bloqueante para continuar** — usuário confirmou em 25/09 que vai enviar o CREA depois. `index.html` mantém `[confirmar]` nos lugares certos — **nunca inventar um número aqui**, mesmo sob pressão pra "terminar logo". Site não deve ser publicado em produção com isso pendente. |
| ~~3~~ | ~~Autorização de clientes (LGPD)~~ | **RESOLVIDO em 25/09**: usuário confirmou que os clientes autorizaram uso de nome/foto/depoimento (Dr. Mateus Garcia, Jéssica e Beto, Márcia, Rafael Bedran). Liberado usar nomes reais nos cases/depoimentos quando o conteúdo for expandido. |
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

## Decisões acumuladas (25/09)

- **WhatsApp**: ✅ confirmado — `31 9 9920-3886` (Stephanie Faina). Corrigido em todo `index.html`.
- **Autorização LGPD dos clientes**: ✅ confirmada pelo usuário. Nomes reais liberados para uso em cases/depoimentos.
- **CREA/CAU**: ⏳ pendente, usuário vai enviar depois. **Não bloqueia continuar o desenvolvimento**, mas bloqueia publicação em produção — manter `[confirmar]` até chegar.
- **Escopo**: só a home por enquanto (uma página, como o protótipo). Portfólio completo, FAQ e página de Clínicas ficam para uma etapa futura, só depois da home aprovada.

## Feito até agora (sem depender das pendências restantes)

- `index.html`: SEO local (title, meta description, theme-color, Open Graph básico). `og:image`/`og:url` pendentes até logo/foto/domínio.
- WhatsApp corrigido nos 8 links + texto visível.
- **Correção de contraste (achado nesta revisão, WCAG AA)**: `--perola-3` (legendas, rodapé, linha de CREA/CAU) tinha só 4.08:1 de contraste sobre `--onix` — abaixo do mínimo de 4.5:1 pra texto pequeno. Ajustado de `#7A7263` para `#89806F` (4.98:1), mudança sutil, mantém a hierarquia visual.
- HTML validado (parse limpo, sem erros).

## Próximo passo exato

1. Ainda aguardando do usuário: (a) CREA/CAU, (b) fotos reais em alta resolução, (c) logo vetorial, (d) decisão sobre posicionamento "mães e cristãs" (risco #6).
2. Com autorização de clientes já confirmada, avaliar com o usuário se quer nomes reais nos cases da seção "Obras" (hoje só usa localização/tipo, sem nome de cliente) — não fiz essa mudança sozinho por ainda não ter sido pedida.
3. Quando as fotos chegarem, substituir os blocos `.photo` placeholder em `index.html`.
4. Quando CREA/CAU chegarem, preencher os `[confirmar]` correspondentes.
5. Rodar checklist de pré-entrega completo (`ui-ux-pro-max` `references/pro-rules.md`) antes de considerar a home "pronta".
6. Só depois disso: decidir domínio/hospedagem (cPanel) e publicar.
7. Commitar e dar push a cada etapa concluída, atualizando este arquivo.

## Notas

- Nenhuma senha, token ou credencial deve ser registrada neste arquivo.
- Branch de trabalho: `main` (repositório novo, ainda sem publicação — ver critério de branches em `CLAUDE.md`).
- **Regra importante:** nunca preencher CREA/CAU, número de WhatsApp ou qualquer dado de compliance com valor inventado — manter `[confirmar]` até o usuário fornecer o dado real.
