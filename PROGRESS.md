# PROGRESS.md — estado do projeto (Site Construtora Perla)

Atualizado em: 2026-09-25 (preparação de continuidade — documentação e verificação, sem novas alterações de código). Atualize este arquivo ao final de cada tarefa/conversa, antes de `/clear`.

# ESTADO ATUAL DO PROJETO

## Projeto
Construtora Perla — site institucional estático (HTML/CSS/JS, sem framework, sem build step). Repositório: `gabrielsantana01k1-prog/Projeto-Construtora-Perla`.

## Branch atual
`main` (repositório ainda não publicado — único branch existente).

## Último commit
`79ab683` — "Corta propaganda do final do vídeo do HERO e reduz velocidade de reprodução".
⚠️ Há uma alteração **feita depois desse commit e ainda não commitada** (remoção do parallax do HERO) — ver "Problemas conhecidos" abaixo antes de continuar.

## O que já foi concluído
- `index.html` adotado como página real do site (protótipo do usuário), single-page com âncoras `#metodo`/`#servicos`/`#obras`/`#quem-somos`.
- Briefing de marca completo (`docs/briefing/briefing-2026-09-25.html`) — fonte da verdade de conteúdo/dados institucionais.
- Fotos reais integradas (marquee, serviços, quem-somos) — JPEG+WebP otimizados, `~1.3MB` total.
- Depoimentos reais atualizados (Mateus Garcia, cliente de Lourdes) — nome/foto aguardando autorização escrita.
- Fita de obras (marquee) recriada em CSS puro (sem lib), pausa no hover, reduced-motion respeitado.
- Microinterações sob medida em todas as seções abaixo do hero (steps, doors, works, values, quotes).
- Refinamento final em 8 rodadas: Rodadas 1, 2 e 3 concluídas (ver seção própria abaixo).
- Vídeo real do HERO integrado, com duas correções subsequentes (corte da propaganda + remoção do parallax) — ver seções "Alterações realizadas no HERO" e "Vídeo atual".

## Alterações realizadas no HERO
1. **Vídeo definitivo integrado** (produção EGD Filmes) — `autoplay`/`muted`/`loop`/`playsinline`, sem controles, overlay de legibilidade sobre o vídeo, poster extraído do frame em 0,3s.
2. **Corte da propaganda final** — arquivo original tinha 23,4s e terminava numa tela de logo/propaganda ("EGD Filmes/CK"); cortado por remuxagem *stream copy* (sem recompressão) para 18,4s, mantendo só a filmagem real da obra.
3. **Velocidade reduzida** — `playbackRate = 0.72` via JS (dentro da faixa 0,65–0,80 pedida pelo usuário), validado empiricamente (razão medida currentTime/tempo real = 0,7200).
4. **Parallax removido** — a implementação original deslocava o vídeo ao rolar (`transform:translate3d` + `height:120%` de folga). Usuário reportou o vídeo borrado; diagnóstico: um vídeo vertical (576×1024) já precisa de ampliação forte pra cobrir uma seção larga via `object-fit:cover`, e o parallax ampliava ainda mais em cima disso. Removido o bloco JS inteiro (~30 linhas) e a folga extra de CSS — vídeo agora estático, enquadramento padrão.

## Vídeo atual
- **arquivo utilizado**: `assets/video/hero.mp4` (3.076.593 bytes, H.264, 576×1024, sem áudio) + poster `assets/video/hero-poster.jpg`.
- **autoplay**: sim.
- **muted**: sim (atributo `muted`/`defaultMuted` + reforçado via JS).
- **loop**: sim — validado que reinicia sem frame preto/flash/propaganda.
- **playbackRate**: `0.72`.
- **corte aplicado no final**: sim — 23,4s → 18,4s, propaganda/logo removidos fisicamente do arquivo (não é CSS/JS escondendo, é o arquivo mesmo cortado).
- **overlay/gradiente**: sim — `.hero-video-overlay`, gradiente escuro (tons de `--onix`) mais forte no topo/rodapé, mais claro no meio, garante contraste do texto sobre qualquer cena.
- **comportamento mobile**: mesmo arquivo, mesmo enquadramento (`object-fit:cover;object-position:center 32%`, sem parallax); testado em 430/390/375/360px sem overflow horizontal.

## Rodadas de design já concluídas
Sequência de 8 rodadas de refinamento final, cada uma com aprovação do usuário antes da próxima:
- **Rodada 1 — Direção Visual + Tipografia**: concluída, commit `136aedf`.
- **Rodada 2 — Sistema de Cores + Hierarquia/Whitespace**: concluída, commit `c020a7f`.
- **Rodada 3 — Imagens + Motion Design**: concluída, commit `79ab683`.
- **Rodada 4 — Mobile + Qualidade técnica invisível**: **não iniciada**, aguardando aprovação do usuário para começar.
- Rodada 5 (auditoria final completa): ainda não iniciada.

## Arquivos principais
- `index.html` — página única do site (HTML+CSS+JS embutidos).
- `assets/video/hero.mp4`, `assets/video/hero-poster.jpg` — vídeo e poster do HERO.
- `assets/img/{marquee,servicos,equipe}/` — fotos reais (JPEG+WebP).
- `design-system/construtora-perla/MASTER.md` — identidade de marca/design system, paleta, tipografia, "Checklist $10K".
- `docs/briefing/briefing-2026-09-25.html` — briefing de marca completo (fonte da verdade de conteúdo/dados).
- `CLAUDE.md` — regras permanentes do projeto (compliance, branches, escopo).
- `PROGRESS.md` — este arquivo.

## Decisões que NÃO devem ser revertidas
- Paleta fechada: onix + pérola + ouro champanhe (+ papel isolado na seção "37%"). Vinho (`#8C303C`) fica só no Instagram, nunca no site.
- Nunca inventar CREA/CAU, WhatsApp ou qualquer dado de compliance — manter `[confirmar]` até o usuário fornecer o dado real.
- Nomes/fotos de clientes só entram com termo de autorização **escrito** — "público no Instagram" não conta como autorização.
- Jéssica (@jessicafaina) — nome não pode ser usado até confirmar que não é parente da Stephanie.
- Nome de criança (filho de Vinícius e Ana) nunca vai para o site.
- @laranesteruk e @mairacardi não são clientes da Perla — nunca usar como prova social.
- Escopo atual do site: só a home (uma página). Portfólio completo, FAQ e página de Clínicas ficam para uma etapa futura.
- Vídeo do HERO usado exatamente como enviado pela produtora, sem substituir — a única edição autorizada é o corte da propaganda final.
- Site estático puro, sem framework/build step — hospedagem cPanel (mesmo modelo do projeto Arobot/Sr. Gordinezz), a decidir na hora de publicar.
- Enquanto o site não estiver publicado/em uso real, pode-se trabalhar direto em `main` (regra do próprio `CLAUDE.md` deste projeto) — mas commit/push só depois de aprovação do usuário para cada mudança.

## Pendências
- Termo de autorização assinado (LGPD) de cada cliente citado — nenhum existe ainda por escrito (Mateus Garcia, cliente de Lourdes, demais do levantamento).
- Identificar quem é a cliente do depoimento de Lourdes.
- Confirmar/descartar se Jéssica (@jessicafaina) é parente da Stephanie.
- Frase/vídeo real de depoimento do Dr. Bruno Fernandes Galdino.
- CREA (Stephanie Faina) e CAU (Mariana Guimarães) — usuário vai enviar depois; bloqueia publicação em produção, não bloqueia desenvolvimento.
- Logo vetorial (SVG/AI, símbolo de leque/pérola) — site usa só o wordmark tipográfico "PERLA construtora".
- Nitidez do vídeo do HERO em telas largas segue limitada pela resolução de origem (576×1024, vertical/reels); só se resolve com material em resolução maior ou formato 16:9 da produtora.
- `.bar-legend` com `font-size:15px` hardcoded em vez do token `--fs-support` — limpeza menor registrada na Rodada 2, ainda não feita.
- Decisão de domínio/hospedagem final ainda não tomada (cPanel é o modelo, falta definir o domínio).
- **Commit/push da remoção do parallax do HERO** — ver "Problemas conhecidos".

## PRÓXIMA TAREFA EXATA
Nenhuma nova tarefa foi iniciada nesta etapa — sessão encerrada em modo documentação/verificação apenas. Ao retomar, nesta ordem:
1. Rodar `git status` e `git diff --cached` no repositório Perla para confirmar se a remoção do parallax do HERO ainda está pendente de commit, ou se já foi commitada/enviada antes do fim desta sessão.
2. Se ainda pendente: perguntar ao usuário se pode commitar e dar push para `origin/main` (a pergunta já foi feita nesta sessão e ficou sem resposta antes do pedido de encerramento).
3. Só depois disso, retomar o fluxo normal do refinamento final: perguntar ao usuário se aprova iniciar a **Rodada 4 (Mobile + Qualidade técnica invisível)**.

## Problemas conhecidos
- **Commit pendente**: alterações **staged, não commitadas e não enviadas ao GitHub** — remoção do parallax do vídeo do HERO. Arquivos: `index.html` (CSS do `.hero-video` simplificado, bloco JS do parallax removido, ~30 linhas) e `PROGRESS.md` (registro da mudança). Diff completo revisado e confirmado limpo (só HERO, nenhuma seção abaixo tocada) antes deste registro.
- Chromium de teste do Playwright (ambiente de nuvem) não decodifica H.264 — validação visual do vídeo em si (não do layout) exige uma cópia temporária em WebM, descartada após o teste, nunca commitada. O arquivo do site continua em H.264 (compatibilidade universal com navegadores reais).
- Vídeo do HERO não foi testado em navegador real (Chrome/Safari/Edge) nesta sessão — só validado via Playwright (layout/atributos) e via cópia WebM temporária (decodificação/loop/velocidade), pela limitação de ambiente acima.
- Foto das sócias (`equipe/socias-retrato.jpg`) renderiza levemente abaixo do ideal de nitidez em telas retina/2x — sem solução sem uma versão de maior resolução do arquivo original (vieram do Instagram).

## Informações que ainda dependem do cliente
- Termo de autorização assinado de cada cliente citado (nome/foto/depoimento).
- Confirmação se Jéssica (@jessicafaina) é parente da Stephanie.
- Identidade da cliente do depoimento de Lourdes.
- Frase/vídeo de depoimento real do Dr. Bruno Fernandes Galdino.
- Números de registro profissional: CREA (Stephanie Faina) e CAU (Mariana Guimarães).
- Arquivo vetorial do logo (SVG/AI) com o símbolo de leque/pérola.
- Eventual vídeo do HERO em resolução maior ou formato horizontal/16:9, caso queiram corrigir de vez a nitidez em telas largas.
- Decisão de domínio de publicação final (hospedagem já definida como cPanel).

---

## Refinamento final em 8 rodadas (em andamento)

Usuário pediu uma inspeção final estruturada em 8 rodadas sequenciais, cada uma parando para aprovação antes da próxima: (1) Direção visual + Tipografia, (2) Sistema de cores + Hierarquia/Whitespace, (3) Imagens + Motion design, (4) Mobile + Qualidade técnica invisível, depois (5) auditoria final completa. Regra fixa em todas: sem redesign, sem remover funcionalidade, só corrigir problemas reais.

**Rodada 3 — Imagens + Motion Design: CONCLUÍDA em 25/09 (commit pendente nesta mesma etapa).**
- **Imagens**: auditoria completa das 10 fotos reais (`assets/img/{marquee,servicos,equipe}/`) — função narrativa, qualidade, resolução, proporção, recorte (`object-fit:cover`), peso, formato, comportamento responsivo. Calculado matematicamente o quanto cada crop remove (ex: fotos paisagem no marquee retangular 3:4 perdem 42–58% da largura; foto retrato do projeto 3D no card 4:3 perde 44% da altura) e depois **verificado visualmente com Playwright/Chromium** (zoom nas seções `.marquee-strip`, `.doors`, `.duo-photo`) — em todos os casos o crop centralizado preserva o assunto principal (fachada, sala, arco/piscina, as duas sócias) sem cortar elemento importante. **Nenhuma imagem trocada ou recortada de novo** — já estavam adequadas, com intenção real (obra real, projeto 3D, clínica, sócias), sem cara de banco de imagens.
- **Performance de imagens**: já estava bem resolvida antes desta rodada — `<picture>`+`<source type="webp">` com fallback JPEG em todas as 10 fotos, `width`/`height` explícitos (sem CLS), `loading="lazy"` em todas (correto: confirmado via screenshot que a primeira dobra em 1440px e 390px é 100% tipografia, sem nenhuma imagem — logo nenhuma é candidata a LCP, e a fita de marquee/fotos de serviços/sócias ficam abaixo da dobra em ambos os tamanhos). Peso total de imagens realmente baixado pelo navegador (webp, únicas, sem contar duplicatas do loop do marquee): ~436KB para as 10 fotos — adequado para um site institucional premium. **Não foi necessário** adicionar `srcset`/`sizes` (arquivos já pequenos o bastante para os tamanhos de render medidos: 210px marquee, 345px card de serviço, 1016px foto das sócias) nem pipeline de otimização adicional — teria ganho marginal para a complexidade que introduziria.
- **Achado registrado, não corrigido nesta rodada**: a foto das sócias (`equipe/socias-retrato.jpg`, 1080×972) renderiza a até 1016px CSS em telas largas — em tela retina/2x isso pediria ~2032px de origem, então a imagem fica levemente abaixo do ideal de nitidez em monitores de alta densidade. Não há como resolver sem uma versão de maior resolução do arquivo original (as fotos vieram do Instagram, resolução limitada). Pendência real, não uma tarefa esquecida.
- **Motion Design**: auditado o sistema `data-reveal`/`data-reveal-group` (IntersectionObserver) e todas as microinterações de hover (steps, doors, works, values, quotes, bar) herdadas das Rodadas 1–2. **Timing do sistema de reveal preservado** (0.7–0.8s de entrada, stagger de 0.08s por item, cubic-bezier already elegante) — está no limite superior da faixa sugerida (400–700ms) mas é consistente, deliberado e já aprovado nas rodadas anteriores; alterar arriscaria regressão sem ganho real. **Único problema real encontrado**: três seletores de hover (`.nav ul a`, `.link`, `footer a`) mudavam de cor **instantaneamente**, sem transição — violação direta da própria regra do `MASTER.md` ("Instant state changes — Always use transitions 150–300ms"), diferente de todos os outros hovers do site (`.btn`, `.door`, `.niche`, `.works li`, `.quotes figure`, `.step`, `.values div`), que já tinham transição. **Corrigido**: adicionado `transition:color .3s ease` (e `border-color .3s ease` no `.link`) aos três seletores — mudança mínima de 3 linhas CSS, sem alterar cor, timing de reveal, estrutura ou textos.
- **Reduced motion**: confirmado via Playwright com `reduced_motion:'reduce'` emulado — todos os elementos `[data-reveal]`/`[data-reveal-group]>*` renderizam com `opacity:1` mesmo sem scroll/JS (a regra que zera a opacidade só existe dentro de `@media (prefers-reduced-motion:no-preference)`, então sob redução de movimento ela nunca chega a se aplicar); a animação do marquee (`animation-name`) fica `none` e `.marquee-strip` vira `overflow-x:auto` (scroll manual). Sistema já robusto, nenhuma mudança necessária.
- Validado: sintaxe HTML (parser Python, tags balanceadas, sem ids duplicados), CSS (211 `{` / 211 `}` balanceados após a mudança), JS (`node --check`, sem erro de sintaxe). Playwright/Chromium em 1440px e 390px, scroll completo disparando todos os `data-reveal`, hover testado (transição confirmada via `getComputedStyle` nos 3 seletores corrigidos), sem overflow horizontal em nenhum de 10 larguras testadas (320–1440px), sem imagem quebrada, sem erro de console real (só `ERR_CERT_AUTHORITY_INVALID` do proxy TLS do sandbox ao buscar Google Fonts — artefato de ambiente, já documentado nas rodadas 1 e 2, não é erro do código).
- Próximo: aguardando aprovação do usuário para a Rodada 4 (Mobile + Qualidade técnica invisível).

**Rodada 1 — Direção Visual + Tipografia: CONCLUÍDA em 25/09 (commit `136aedf`).**
- Direção visual: auditada, sem alterações — já não tem "cara de template" (paleta 1 fundo/1 tinta/1 acento, zero `border-radius` no site inteiro, setas/numerais tipográficos em vez de ícones genéricos de biblioteca, sem sombras, gradientes restritos ao wordmark/textura de mármore). Nenhum problema real encontrado nesta frente.
- Tipografia: consolidados 5 tamanhos de corpo quase-duplicados (15.5/15/14.5/14px, espalhados sem lógica por Método/Serviços/Obras/Quem somos/hero-aside) em 2 tokens novos no `:root` — `--fs-support:15.5px` (corpo secundário) e `--fs-meta:14px` (metadado/terciário). `.works .t` e `.door .for` tinham `letter-spacing:.24em` divergente dos pares da mesma camada (`.person .role`, `footer b`, `.photo span`, todos `.28em`) — unificado. `.step h3` e `.niche h3` eram `font-size` fixo (24px) enquanto os irmãos visuais (`.door h3`, `.works h3`) já usavam `clamp()` — convertidos para `clamp(22px,2.2vw,26px)`, mesmo peso em desktop, encolhe corretamente no mobile.
- Validado: sintaxe HTML/CSS ok (parser + balanceamento de chaves), Playwright/Chromium desktop (1440px) e mobile (390px) com scroll completo pra disparar as revelações — sem regressão visual, sem overflow.
- **Risco #6 do PROGRESS.md resolvido nesta sessão**: perguntei ao usuário se "mães e cristãs" deveria entrar no hero também ou só em "Quem somos" — resposta: só em "Quem somos", de forma sutil. Na prática o texto ("Mães, empresárias e cristãs...") **já estava** em `index.html` linha 430 desde o commit `b51fc63` (25/09, adoção do protótipo real) — a entrada antiga do PROGRESS.md que dizia "não está no index.html atual" ficou desatualizada e é corrigida aqui. Não precisou de código novo, só registro.
**Rodada 2 — Sistema de Cores + Hierarquia/Whitespace: CONCLUÍDA em 25/09 (commit `c020a7f`).**
- Sistema de cores: auditado, já estava disciplinado (1 fundo/1 tinta/1 acento, sem cor de CTA inconsistente, hover/focus todos via token, contraste conferido: `--perola-2`/`--onix` ≈8.3:1, `--tinta-2`/`--papel` ≈6.8:1, `--ouro-paper`/`--papel` em texto grande ≈3.8:1 — todos acima do mínimo AA). Únicos achados: 3 valores hex que duplicavam tokens existentes por engano (`#C2A56E`/`#9C8A5E` no gradiente do wordmark, `#EFE7D6` no texto do chip `.bar .a`) — trocados por `var()`; e `#8F7442` repetido 3x sem token (`.paper .it`, `.paper .dot`, `.bar .b b`) — criado `--ouro-paper` pra consolidar. Zero mudança visual, só manutenção. Texturas em rgba (mármore, fundo da nav) batem com tokens por coincidência decimal mas foram deixadas como estão — tokenizar exigiria `color-mix()`/relative-color (risco de compatibilidade) para ganho nenhum.
- Hierarquia/whitespace: auditada seção por seção. Sistema já coerente — 26px se repete como constante entre divisor-e-conteúdo (`.values`, `.quotes`, `.works`), 48-88px entre cabeçalho e corpo de cada seção, 88-160px entre seções. Único ganho real: CTA final (`.final`) não tinha nenhuma separação além do padrão de qualquer seção do meio da página, apesar de ser o destino da jornada — adicionado `padding-top:clamp(110px,13vw,180px)` só nela.
- Observado e **não alterado** (fora do escopo tipográfico desta rodada, por instrução do usuário): `.bar-legend` usa `font-size:15px` hardcoded em vez do token `--fs-support` (15.5px) criado na Rodada 1 — pendência de limpeza menor pra uma rodada futura. Também observado: o numeral "37%" do hero-aside renderiza visualmente maior que o `h1` na maioria dos viewports (parece device editorial intencional — mesmo tratamento tipográfico dos numerais em Cormorant Garamond usado no site todo — mas envolve tamanho de fonte, fora do escopo desta rodada).
- Validado: sintaxe HTML/CSS ok, Playwright/Chromium desktop (1440px) e mobile (390px) com scroll completo (16/16 elementos `data-reveal` disparados), sem overflow horizontal, sem erro de console real (só `ERR_CERT_AUTHORITY_INVALID` do proxy TLS do ambiente ao buscar a fonte do Google Fonts — artefato do sandbox, não do código).
- Próximo: aguardando aprovação do usuário para a Rodada 3 (Imagens + Motion Design).

## Vídeo do HERO (25/09) — fora da sequência de 8 rodadas, pedido direto e detalhado do usuário

Usuário enviou o vídeo definitivo do hero (`WhatsApp_Video_2026-09-25_at_18.44.04.mp4`, produção "EGD Filmes" — cenas de assinatura de contrato/EVF e obra real, termina em card de logo) com especificação técnica completa: autoplay, muted, loop, playsinline, sem controles, sem interação do usuário, parallax discreto só no hero, escopo estritamente limitado ao hero (proibido alterar qualquer seção abaixo).

- **Arquivo original**: 23,4s, 576×1024 (vertical/formato reels), H.264, com trilha de áudio AAC. Processado com PyAV (instalado nesta sessão): remuxado sem re-encode removendo a faixa de áudio (garantia extra de silêncio, além do atributo `muted` + reforço via JS) — `assets/video/hero.mp4`, 3,16MB (era 3,36MB com áudio). Poster extraído do frame em 0,3s, recomprimido com Pillow — `assets/video/hero-poster.jpg`, 148KB.
- **Testado um encode WebM/VP9 alternativo só para conseguir verificar visualmente aqui no sandbox** (o Chromium de teste do Playwright não decodifica H.264 — confirmado via `canPlayType`; navegadores reais como Chrome/Safari/Edge decodificam H.264 nativamente, sem esse problema). O WebM saiu maior que o MP4 (7,3MB) com o encoder disponível — **descartado, não foi ao repositório**, só usado numa cópia temporária fora do projeto pra screenshot de validação.
- **HTML**: dentro do `<header class="hero" id="top">` (removida a classe `marble`, que virou obsoleta — o vídeo real substitui a textura CSS), adicionado `<div class="hero-media">` com `<video class="hero-video" autoplay muted loop playsinline webkit-playsinline="true" disableremoteplayback disablepictureinpicture preload="auto" poster="...">` + `<div class="hero-video-overlay">` (gradiente de leitura). Nada mais no arquivo foi tocado na estrutura.
- **CSS**: regras novas todas prefixadas `.hero`/`.hero-media`/`.hero-video`/`.hero-video-overlay` — vídeo cobre o container com `object-fit:cover`, `object-position:center 32%` (foco levemente acima do centro, onde está a ação), `height:120%` (folga vertical pro parallax não revelar borda). Overlay com gradiente escuro (tons do próprio `--onix`) mais forte no topo/rodapé e mais claro no meio, pra manter contraste do texto em cima de qualquer cena do vídeo. `.hero .shell{z-index:2}` garante o conteúdo sempre acima da mídia.
- **JS**: dois blocos isolados, adicionados antes do script de revelação já existente (que não foi tocado). (1) reforço de mute + chamada de `.play()` com fallback silencioso se o navegador bloquear autoplay. (2) parallax: `IntersectionObserver` liga/desliga um listener de scroll só enquanto o hero está perto da viewport (desliga fora dela, por performance), desloca o vídeo em até 42px via `transform` (GPU-friendly), throttled por `requestAnimationFrame`. Sob `prefers-reduced-motion:reduce` a função inteira retorna cedo — vídeo continua tocando normal, só fica parado no lugar (sem o deslocamento).
- **Validado**: HTML parseado sem erro; `git diff` conferido linha a linha — só 3 blocos alterados (CSS do hero, markup do header, um `<script>` novo isolado), nenhuma linha fora do hero tocada. Testado com Playwright/Chromium em 1440px (desktop) e 430/390/375/360px (mobile): atributos `autoplay/muted/loop/playsInline` presentes e `true` em todos, `controls:false`, `paused:false` em todos os tamanhos. Com uma cópia temporária usando WebM (só pra contornar a limitação de codec do navegador de teste): `readyState:4`, dimensões corretas (576×1024), `currentTime` avançando de verdade (2,3s → 4,5s), parallax confirmado via `transform` mudando com o scroll, transição pro próximo bloco (fita de marquee) permanece idêntica e sem overflow.
- **Observação, não bloqueante**: o vídeo carrega uma marca d'água "EGD Filmes/CK" visível num canto em alguns trechos e termina com um card de logo dessa produtora — usado exatamente como enviado, por instrução explícita do usuário ("não substitua"). Só registrando pra ciência, caso isso não seja a intenção pro corte final de produção.

### Ajuste do vídeo do HERO — corte da propaganda final + velocidade (25/09)

Usuário confirmou que a observação acima **era** o problema: pediu para cortar fisicamente a propaganda do final e deixar a reprodução mais lenta. Pedido restrito ao vídeo do HERO, proibido mexer em qualquer seção abaixo.

- **Análise do arquivo**: decodificado frame a frame com PyAV (561 frames, ~24fps, 23,398s). Localizado o exato ponto de transição por amostragem de pixel nos frames candidatos (não só inspeção visual): a filmagem real da obra termina no frame `t=18,3517s` (cena de telhado/vista aérea, 100% limpa); a partir de `t=18,3933s` já aparece a tela clara com a animação do logo/propaganda ("EGD Filmes/CK"), que se estende até o fim (23,398s).
- **Corte realizado**: remuxagem por **stream copy** (sem decodificar/recodificar o vídeo — `packet.stream=...; container.mux(...)` via PyAV), mantendo todos os pacotes com `pts < 18,39s` e descartando o restante. Zero recompressão: o bitstream H.264 dos frames mantidos é byte-idêntico ao original, mesma resolução (576×1024) e mesmo bitrate de origem.
- **Duração**: 23,4s → 18,4s (removidos ~5,0s de propaganda/logo do final).
- **Arquivo**: `assets/video/hero.mp4`, 3.163.305 → 3.076.593 bytes (~3,16MB → ~3,08MB, redução proporcional aos ~5s removidos).
- **Velocidade**: adicionado `v.playbackRate = 0.72` no script de reforço do HERO (reforçado também em `loadedmetadata`, mesmo padrão defensivo já usado pro mute), dentro da faixa pedida (0,65–0,80). Validado empiricamente com Playwright medindo o avanço real de `currentTime` vs. tempo real decorrido: razão medida 0,7200 — confirma que o navegador está de fato tocando a 72% da velocidade original, não é só o atributo setado sem efeito.
- **Loop**: validado (via cópia temporária transcodificada para WebM/VP9 só para contornar a limitação do Chromium de teste do Playwright, que não decodifica H.264 — documentado desde a Rodada 3; a cópia WebM não foi ao repositório) que o loop reinicia exatamente em `currentTime≈0` assim que chega a `18,35s`, sem frame preto, sem flash e sem nenhum quadro da propaganda — confirmado por captura de tela no exato instante da virada do loop.
- **HTML/CSS do HERO**: nada alterado além do `<script>` (mesma tag `<video autoplay muted loop playsinline ...>`, mesmo overlay/gradiente, mesmo parallax, mesmo `object-position`). `git diff` conferido: só o bloco de script (+4/-1 linhas) e o binário do vídeo.
- **Validado**: HTML com tags balanceadas (67 `div`/7 `section`/2 `script`, abertura=fechamento), os 2 blocos `<script>` extraídos e checados com `node --check` (sem erro de sintaxe). Screenshot completo do HERO em 1440px e 390px (poster/primeiro frame, já que o Chromium de teste não decodifica H.264) — texto legível, overlay preservado, CTA e headline intactos, nenhuma seção abaixo do HERO tocada. Console sem erro real (só o de sempre, `ERR_CERT_AUTHORITY_INVALID` do proxy TLS do sandbox ao buscar Google Fonts, artefato de ambiente já documentado nas rodadas anteriores).
- **Não testado em navegador real** (Chrome/Safari/Edge) nesta sessão — o ambiente de nuvem só tem o Chromium de teste do Playwright, que não decodifica H.264. A validação de decodificação/loop/velocidade foi feita com uma cópia temporária em WebM (descartada, não commitada); o arquivo final entregue ao site continua em H.264 (compatibilidade universal), como estava antes.

### Remoção do parallax do vídeo do HERO — corrigir borrão (25/09)

Usuário gravou a tela e reportou que o vídeo do HERO estava borrado/embaçado. Pediu para remover o efeito parallax (suspeita de que ele estava degradando a qualidade), manter o corte da propaganda já feito, manter a velocidade lenta, e tentar um "formato original" mais simples.

- **Causa provável do borrão**: o vídeo é vertical (576×1024, formato reels) sendo exibido numa seção HERO larga (retangular/paisagem) — `object-fit:cover` já precisa ampliar bastante essa imagem pra cobrir a largura da tela. O parallax anterior usava `height:120%` (folga vertical pra deslocar sem revelar borda) + `transform:translate3d`, o que ampliava a imagem ainda mais em cima de uma fonte que já estava no limite da resolução pro tamanho exibido. Diagnóstico do usuário confirmado como plausível — não corrigido no vídeo em si (sem material de origem em resolução maior), mas removida a ampliação extra que o parallax exigia.
- **Removido**: bloco JS inteiro do parallax (`IntersectionObserver` + listener de scroll + `transform` dinâmico, ~30 linhas) e a regra CSS que dava folga pra ele (`height:120%`, `transform:translate3d(-50%,-50%,0)`, `will-change:transform`).
- **Substituído por**: enquadramento padrão, sem escala extra — `.hero-video{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center 32%}`. Vídeo agora fica estático (sem deslocamento ao rolar), só a ampliação mínima que o `cover` já exige.
- **Preservado**: corte da propaganda (vídeo continua em 18,4s, sem o trecho final), `playbackRate:0.72`, mute reforçado, autoplay/loop/playsinline, overlay/gradiente de legibilidade, headline/tipografia/CTA, responsividade.
- **Validado**: HTML com tags balanceadas, os 2 blocos `<script>` (agora sem o do parallax) checados com `node --check`. Playwright confirmou via `getComputedStyle`: `transform:none` antes e depois de rolar a página (nenhum resquício do parallax), `playbackRate:0.72` mantido, `muted/loop/autoplay` intactos. Screenshot em 1440px e 390px (poster/primeiro frame — mesma limitação de sempre, o Chromium de teste não decodifica H.264): layout, overlay e legibilidade do texto preservados, nenhuma seção abaixo do HERO tocada.
- **Pendência real, fora do escopo desta correção**: a nitidez do vídeo em telas largas continua limitada pela resolução de origem (576×1024, vertical) esticada numa seção larga — isso é inerente ao material enviado, não ao código. Se a produtora (EGD Filmes) tiver uma versão em resolução maior ou em formato horizontal/16:9, o resultado ficaria nítido mesmo em telas grandes.

## Situação atual

- Repositório GitHub: `gabrielsantana01k1-prog/Projeto-Construtora-Perla`.
- **`index.html` já existe** — é o protótipo de home enviado pelo usuário, adotado como página real do site (não é mais placeholder). Single-page com âncoras (`#metodo`, `#servicos`, `#obras`, `#quem-somos`), CSS embutido, sem framework, sem build step.
- **Briefing de marca completo** salvo em `docs/briefing/briefing-2026-09-25.html` — levantamento detalhado do Instagram @perlaconstrutora + CNPJ (Econodata), feito em 25/09/2026. Fonte da verdade para qualquer conteúdo futuro do site.
- Protótipo original (idêntico ao `index.html` atual) também preservado em `docs/briefing/home-prototipo-2026-09-25.html` para histórico.
- Screenshots do Instagram (grid + perfil) salvos em `docs/briefing/instagram-*-2026-09-25.{webp,png}` como referência visual.
- Fluxo de trabalho: desenvolvimento nesta sessão (container na nuvem), commit/push a cada etapa. Usuário sincroniza pasta local via `git clone`/`git pull`.
- **Fotos reais integradas ao site** (25/09, zip `perla-fotos-instagram.zip` enviado pelo usuário, com índice `LEIA-ME_indice.csv` muito bem documentado — pastas por categoria: sócias, clínicas, residencial, projetos-3d, queijo-artesanal, entregas-bastidores). Processadas com Pillow (recorte de texto sobreposto, resize, JPEG+WebP otimizados) e salvas em `assets/img/{marquee,servicos,equipe}/`. Total ~1.3MB. Ver detalhes na seção "Fotos reais" abaixo.
- **Microinterações sob medida nas seções abaixo do hero** (25/09, pedido do usuário: "seções inferiores pareciam genéricas", sem deixar mais pesado). Implementado:
  - Sistema de revelação ao rolar (`data-reveal`/`data-reveal-group`, IntersectionObserver vanilla ~15 linhas no fim do `<body>`), fade+translate leve, dispara uma vez só, cai fora inteiramente sob `prefers-reduced-motion:reduce` e tem fallback `<noscript>` pra nunca deixar conteúdo invisível sem JS.
  - Barra do "custo" (37%/63%): variante horizontal do reveal (`data-reveal-group="x"`, os dois lados entram deslizando da esquerda) — tratamento único pra essa seção, não repetido em outra.
  - Método: sublinhado dourado desenha sob o título ao passar o mouse no `.step`, numeral clareia e desloca 3px.
  - Serviços: seta "→" (reaproveitando a classe `.arr` já usada nos botões) aparece deslizando ao lado do título do card no hover; foto faz leve zoom (scale 1.045); card "Clínicas" ganha borda dourada no hover.
  - Obras: numeral e seta da lista reagem ao hover (cor + deslocamento), reforçando o padrão que já existia.
  - Quem somos: sublinhado dourado desenha sob cada valor ("Sem RT" etc.) no hover.
  - Clientes: aspas do depoimento sobem 3px e a borda superior do card dourada no hover.
  - Tudo só `transform`/`opacity`/`color`/`border-color` (GPU-friendly, sem repaint pesado), testado com Playwright/Chromium (scroll + hover, antes/depois de assentar) em desktop.

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
- **Cases citados publicamente** (para portfólio, todos precisam de fotos em alta + autorização por escrito — ver levantamento detalhado abaixo, alguns têm alerta específico): Clínica Dr. Mateus Garcia, Centro de Referência do Queijo Artesanal, Casa no Vale dos Cristais, Casa na Lagoa dos Ingleses, Apto Jéssica & Beto (110m² — ⚠️ possível parente, ver abaixo), Apto da Márcia (Santo Antônio), Rua Andaluzita (Savassi), Cobertura Rafael Bedran, apartamentos de house flipping.
- **Depoimentos disponíveis** (prints reais, precisam autorização escrita para uso público — nenhum termo assinado ainda): ver levantamento detalhado abaixo (substitui a seção 06 do briefing original, que era menos precisa).
- Mapa de site completo (9 seções) documentado na seção 08 do briefing.

## ⚠️ Riscos e pendências bloqueadoras (do próprio briefing, confirmar antes de publicar)

| # | Risco | Ação necessária |
|---|-------|------------------|
| ~~1~~ | ~~WhatsApp incompleto~~ | **RESOLVIDO em 25/09**: número correto confirmado pelo usuário — `31 9 9920-3886` (celular de Stephanie Faina), 9 dígitos. Atualizado em todos os 8 links `wa.me/` + texto visível do `index.html` para `wa.me/5531999203886`. |
| 2 | **Registros CAU (Mariana) e CREA (Stephanie) ausentes.** Publicidade de arquitetura/engenharia no Brasil exige nome + registro do responsável técnico visível. | **NÃO bloqueante para continuar** — usuário confirmou em 25/09 que vai enviar o CREA depois. `index.html` mantém `[confirmar]` nos lugares certos — **nunca inventar um número aqui**, mesmo sob pressão pra "terminar logo". Site não deve ser publicado em produção com isso pendente. |
| 3 | **Autorização de clientes (LGPD) — CORRIGIDO em 25/09.** A confirmação inicial ("os clientes autorizou") era otimista demais. Levantamento detalhado do usuário mostrou: **nenhum termo escrito existe ainda** para nenhum caso. "Público no Instagram" ≠ autorização comercial. | Ver tabela completa de depoimentos/cases abaixo. Até existir termo assinado, nomes/fotos ficam fora do site — texto do depoimento pode ser usado, atribuição fica genérica (profissão/cidade) com nota "aguardando autorização". Ação recomendada pelo usuário: termo de 1 página, assinado por WhatsApp, por cliente. |
| 4 | **Promessas absolutas** ("resultado garantido", "100% de aprovação") viram passivo jurídico se questionadas. | Revisar redação com o usuário antes de publicar cópias finais — `index.html` atual já é mais comedido, mas vale checar textos futuros. |
| 5 | **PARCIALMENTE RESOLVIDO em 25/09.** Fotos reais de obras/clínicas/sócias chegaram (zip do Instagram) e já estão no site. **Ainda falta**: logo em vetor (SVG/AI) — o site ainda usa só o wordmark tipográfico "PERLA construtora" em texto, sem o símbolo de leque/pérola. Vídeos das obras também não foram enviados. | Pedir o arquivo vetorial do logo ao usuário quando possível. |
| ~~6~~ | ~~Posicionamento "mães e cristãs"...~~ | **RESOLVIDO em 25/09**: usuário confirmou que fica só em "Quem somos", de forma sutil (não entra no hero). O texto já estava em `index.html` desde o protótipo original (`b51fc63`) — a pendência era só de decisão/registro, não de código. |

## Fotos reais — integração (25/09)

Usuário enviou `perla-fotos-instagram.zip` (117 fotos em 6 pastas categorizadas + `LEIA-ME_indice.csv` com observações por foto — material excepcionalmente bem organizado, incluindo avisos de que fotos tinham texto sobreposto, quais eram renders 3D vs. reais, e quais precisavam de autorização de cliente).

**Processamento**: Pillow instalado via pip (não havia no ambiente). Fotos selecionadas foram recortadas (remoção de texto/legendas sobrepostas do Instagram, ex: "HOUSE FLIPPING Antes e Depois", indicador "6/10" de carrossel), redimensionadas e exportadas em JPEG otimizado + WebP (fallback via `<picture>`), com `width`/`height` explícitos pra evitar layout shift. Testado visualmente com Playwright/Chromium (screenshot desktop + mobile) antes de finalizar — os primeiros recortes de texto ficaram curtos demais e precisaram ser refeitos (ver abaixo).

**Onde entrou cada foto:**
- **Fita de marquee** (logo após o hero, 6 fotos únicas): casa alto padrão (fachada), house flipping antes/depois (interior, texto recortado), recepção de clínica, clínica de oncologia infantil (texto recortado), Centro de Referência do Queijo Artesanal (indicador de carrossel recortado), projeto 3D (sala de estar/jantar).
- **3 cards de "Serviços"**: "Quero fazer minha obra" → corredor em obra (obra real, andaimento visível); "Transformar sem obra" → house flipping antes/depois; "Preciso de um projeto" → render 3D (terraço com arco e piscina, vista noturna de BH).
- **"Quem somos"**: uma única foto real das duas sócias juntas (recortada pra remover o texto "O que nossos clientes dizem..." que estava sobreposto no post original). **Decisão importante**: não temos retrato solo de cada sócia, e não há como confirmar por uma foto sozinha quem é Stephanie e quem é Mariana — por segurança, a seção foi reestruturada pra usar uma foto única e compartilhada (sem crop atribuído a nome individual), em vez de arriscar trocar a identidade das duas. Isso é uma mudança de estrutura da seção (removi o placeholder de foto individual de cada `.person`), não só uma troca de imagem.

**O que foi deliberadamente excluído** (critérios já registrados em `CLAUDE.md`):
- 3 fotos de "sócias com cliente na entrega" (pasta `06-entregas-e-bastidores`) — rosto de cliente identificável, sem autorização confirmada.
- 1 foto de "apartamento e terraço" com uma pessoa (provável cliente) sentada e com rosto visível — mesma razão.
- Fotos de `03-residencial-obras-reais` marcadas no índice como "conferir se DEPOIS é render 3D" — ambíguas, não usadas até confirmação.
- Fotos com marca/nome de clínica específica visível (ex: letreiro "MGM Estética") — evitadas por ora, mesmo sem mostrar rosto, pra não amarrar a um nome de clínica sem autorização.

**Sobrou material não usado** (disponível pra uma próxima etapa): fotos de "bastidores de obra" e "eventos Bora na Obra/BNO" (pasta 06), mais fotos de clínica odontológica do Mateus Garcia sem pessoas, e ~20 renders 3D adicionais na pasta `04-projetos-3d`.

## Levantamento detalhado de depoimentos/cases (usuário, 25/09 — revisou o destaque "Feedbacks" inteiro)

**Grupo 1 — depoimento na voz do cliente, com nome (os mais fortes):**

| Cliente | O que existe | Status |
|---|---|---|
| **Dr. Mateus Garcia** (@mateusgarcia.dr), odontologia | Vídeo dele recebendo a sala + 2 prints de WhatsApp reais ("Alvará de localização e sanitário deferido!... A fiscal elogiou muito o projeto"; "Tô muito feliz com o trabalho de vcs") | **Melhor prova social que existe.** Texto já usado em `index.html` (seção Depoimentos), nome/foto marcados como pendentes de autorização. |
| **Dr. Bruno Fernandes Galdino**, clínica de emagrecimento | Vídeo no destaque possivelmente dele, áudio não conferido. Reação contada pela Perla, não uma frase direta dele. | **Não usar ainda** — falta a frase/vídeo real dele. Pedir à Perla. |
| **Consultório de psicanálise, Lourdes (BH)** | Depoimento longo e forte sobre a Mariana ("...projeto impecável... se preocupava com o custo e o benefício... consultório confortável e maravilhoso") | Nome da cliente **não identificado**. Texto já usado em `index.html`, atribuição genérica ("Psicanálise · Lourdes, BH — nome aguardando autorização"). Perguntar à Mariana quem é + pedir autorização. |

**Grupo 2 — depoimentos reais, sem nome (post fixado "O que dizem sobre nós"):** servem como estão, mas perdem força sem identificação. Vale identificar autores e pedir autorização pra citar nome+bairro. Frases: "estamos encantados com o dinamismo e competência da engenheira Stephan[i]e" (nome já sai errado no print original), "são referência no mercado, pontualidade, expertise avançada", "nesse ritmo aceleradíssimo que é minha vida, gerir uma obra seria praticamente impossível" (esta última já está em `index.html`, anônima, sem alteração necessária).

**Grupo 3 — cases com nome contados pela Perla (não são depoimentos):**

| Pessoa | Case | Observação |
|---|---|---|
| **Rafael Bedran**, cantor/psicólogo, perfil público | Reforma de cobertura de 1991 | Case forte — pedir vídeo de depoimento de 30s dele. |
| **Jéssica e Beto** | Apto 110m², mudança 30/07 | ⚠️ **Jéssica é @jessicafaina — possível parente da Stephanie.** Confirmar antes de usar. Case de família como prova social mina credibilidade se descoberto. **Não usar nome até confirmar que não é parente.** |
| **Márcia** | Apto Santo Antônio | Case simples, sem alerta. |
| **Vinícius e Ana** | "Lar afetivo" | 🚫 **O post cita o filho pequeno pelo nome — nome da criança NUNCA vai para o site.** |

**Alertas adicionais:**
- **@laranesteruk e @mairacardi NÃO são clientes da Perla** — aparecem em posts sobre obras mal feitas por *outras* empresas. Nunca usar como se fossem prova social da Perla.
- Termo de autorização recomendado: documento de 1 página, assinado via WhatsApp, por cliente, cobrindo nome/foto/print/depoimento.
- Recomendação de canal adicional: abrir/ativar Perfil da Empresa no Google e pedir avaliação a cada cliente entregue — pesa mais que print pra quem pesquisa "construtora BH".

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
- **Autorização LGPD dos clientes**: ❌ **voltou a ser pendência** (correção do próprio usuário — ver levantamento detalhado acima). Nenhum termo escrito existe ainda. Nomes/fotos ficam fora do site até haver termo assinado por cliente.
- **CREA/CAU**: ⏳ pendente, usuário vai enviar depois. **Não bloqueia continuar o desenvolvimento**, mas bloqueia publicação em produção — manter `[confirmar]` até chegar.
- **Escopo**: só a home por enquanto (uma página, como o protótipo). Portfólio completo, FAQ e página de Clínicas ficam para uma etapa futura, só depois da home aprovada.
- **Seção "Obras" do `index.html`**: mantida sem nomes de clientes (só localização/tipo de obra) — decisão consciente, não uma pendência esquecida. Em especial, **não adicionar "Jéssica e Beto"** até confirmar que @jessicafaina não é parente da Stephanie.

## Feito até agora (sem depender das pendências restantes)

- `index.html`: SEO local (title, meta description, theme-color, Open Graph básico). `og:image`/`og:url` pendentes até logo/foto/domínio.
- WhatsApp corrigido nos 8 links + texto visível.
- **Correção de contraste (achado nesta revisão, WCAG AA)**: `--perola-3` (legendas, rodapé, linha de CREA/CAU) tinha só 4.08:1 de contraste sobre `--onix` — abaixo do mínimo de 4.5:1 pra texto pequeno. Ajustado de `#7A7263` para `#89806F` (4.98:1), mudança sutil, mantém a hierarquia visual.
- **Depoimentos atualizados** na seção "Clientes" do `index.html`: trocados os 2 genéricos pelos depoimentos reais mais fortes (Mateus Garcia — print de WhatsApp real sobre alvará aprovado; cliente de Lourdes — depoimento sobre a Mariana), com nome/foto marcados inline como "aguardando autorização". Terceiro depoimento (anônimo, "ritmo aceleradíssimo") mantido sem alteração.
- **Fita de obras (marquee) adicionada logo após o hero.** Usuário mandou um componente React/shadcn/Tailwind/Framer Motion de referência (hero com marquee de imagens) — **decisão registrada**: não converter o projeto pra React (mudaria hospedagem de cPanel estático pra Node/build), recriar o mesmo efeito visual em CSS puro. Implementado: `.marquee-strip`/`.marquee-track`, rolagem horizontal contínua via `@keyframes` (sem lib), pausa no hover/focus, cai pra `overflow-x:auto` estático sob `prefers-reduced-motion:reduce`. Usa blocos `.photo` placeholder (mesmo padrão já usado no resto do site) com legendas batendo com os cases reais da seção Obras — sem nomes de clientes (mesma cautela de LGPD já registrada). `aria-hidden="true"` porque é decorativo/redundante com a lista semântica de Obras mais abaixo.
- HTML validado (parse limpo, sem erros).

## Próximo passo exato

1. Ainda aguardando do usuário: (a) termo de autorização assinado por cliente (Mateus, cliente de Lourdes, e os demais do levantamento), (b) identificar quem é a cliente de Lourdes, (c) confirmar/descartar Jéssica como possível parente, (d) frase/vídeo real do Dr. Bruno, (e) CREA/CAU, (f) logo vetorial (SVG/AI do símbolo de leque/pérola). **Fotos reais e posicionamento "mães e cristãs" (risco #6) já resolvidos** — não são mais pendência.
1b. **Refinamento final em 8 rodadas — em andamento** (ver seção própria acima). Rodada 1 concluída em `136aedf`, Rodada 2 em `c020a7f`, Rodada 3 (Imagens + Motion Design) concluída nesta etapa. Aguardando aprovação do usuário pra seguir com a Rodada 4 (Mobile + Qualidade técnica invisível).
2. Assim que houver termo assinado de Mateus e/ou da cliente de Lourdes, substituir a atribuição genérica pelo nome real na seção "Clientes" do `index.html`.
3. Quando o logo vetorial chegar, trocar o wordmark tipográfico da nav/footer pelo símbolo real.
4. Quando CREA/CAU chegarem, preencher os `[confirmar]` correspondentes.
5. Rodar checklist de pré-entrega completo (`ui-ux-pro-max` `references/pro-rules.md`) antes de considerar a home "pronta".
6. Só depois disso: decidir domínio/hospedagem (cPanel) e publicar.
7. Commitar e dar push a cada etapa concluída, atualizando este arquivo.

## Verificação feita nesta etapa (fotos)

- HTML validado (parse limpo).
- Testado visualmente com Playwright/Chromium local: screenshots desktop (1440px) e mobile (390px) do hero, marquee, serviços e quem-somos — todas as fotos carregando e recortadas corretamente, sem texto residual do Instagram, sem quebra de layout, responsivo confirmado nas duas larguras.
- Todos os caminhos de imagem referenciados no `index.html` conferidos contra os arquivos realmente salvos em `assets/img/` (nenhum link quebrado).

## Notas

- Nenhuma senha, token ou credencial deve ser registrada neste arquivo.
- Branch de trabalho: `main` (repositório novo, ainda sem publicação — ver critério de branches em `CLAUDE.md`).
- **Regra importante:** nunca preencher CREA/CAU, número de WhatsApp ou qualquer dado de compliance com valor inventado — manter `[confirmar]` até o usuário fornecer o dado real.
