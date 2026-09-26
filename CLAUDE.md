# CLAUDE.md — Site Construtora Perla

Regras permanentes deste projeto. Ler **PROGRESS.md** no início de toda sessão — não confiar só no histórico da conversa.

## Objetivo do projeto

Site institucional estático (HTML/CSS/JS) da Construtora Perla, com:
- Vitrine de empreendimentos (fotos, plantas, status: lançamento/em obras/pronto).
- Captação de leads (formulário de contato, WhatsApp, simulação de financiamento).
- Institucional/portfólio (história, obras entregues, diferenciais, equipe).

## Padrão de design obrigatório — "Checklist $10K"

Toda decisão de design/desenvolvimento deste site (layout, CSS, tipografia, imagens, animações) **tem que se encaixar nestes 8 pontos**. Nenhuma tela, componente ou trecho de CSS/JS deve fugir disso. Antes de considerar qualquer entrega de UI concluída, validar contra esta lista:

**Taste (aparência/gosto)**
1. Ponto de vista, não template — layout com identidade própria, nunca cara de template genérico.
2. Tipografia que trabalha — hierarquia tipográfica funcional (serifada de destaque + sem serifa de apoio, por exemplo), não só "bonito".
3. Sistema de cores contido — paleta restrita e consistente (cores da marca + neutros), sem poluição visual.
4. Hierarquia que respira — espaçamento generoso, uso deliberado de espaço em branco/negativo entre seções e elementos.

**Substance (conteúdo/imagem)**
5. Imagens com intenção — nenhuma foto genérica de banco de imagens sem propósito; toda imagem/empreendimento tem que reforçar a mensagem (qualidade, obra real, status).

**Felt Quality (percepção de qualidade)**
6. Movimento sutil — microanimações/transições discretas (hover, scroll, fade), nunca exageradas ou "piscantes".
7. Mobile desenhado, não encolhido — o layout mobile é pensado como versão própria, não apenas um "shrink" do desktop.
8. O detalhe caro e invisível — acabamento em detalhes que o usuário não percebe conscientemente mas sente (alinhamento pixel-perfect, transições de estado, consistência de bordas/raios/sombras).

## Compliance e dados sensíveis (regra permanente)

- **Nunca inventar/preencher**: números de registro profissional (CREA/CAU), números de WhatsApp/telefone, CNPJ, ou qualquer dado de compliance/legal. Se não confirmado pelo usuário, manter como `[confirmar]` no código — nunca um valor plausível "de exemplo" disfarçado de real.
- **Nomes/fotos/depoimentos de clientes reais** (cases, prints, testemunhos) só entram no site publicado com autorização **escrita** (termo assinado), não apenas confirmação verbal do usuário. **Estar público no Instagram não é autorização para uso comercial no site** — não tratar "é público" como sinônimo de "posso usar aqui". Enquanto não houver termo assinado: usar o conteúdo (texto do depoimento) sem o nome — atribuir por profissão/cidade e marcar explicitamente no código (comentário HTML) e no `PROGRESS.md` que nome/foto estão pendentes.
- **Cuidado redobrado com quem aparece nos posts**: verificar se a pessoa citada não é (a) parente de alguém da equipe (case de família mina credibilidade e não deve virar prova social sem deixar isso claro), (b) menor de idade (nunca citar nome de criança/filho de cliente), (c) alguém citado em contexto negativo/de reclamação sobre **outra empresa**, não cliente da Perla. Confirmar o contexto completo antes de usar qualquer nome, não só que ele apareceu no perfil.
- **Promessas absolutas** ("garantido", "100% de aprovação", etc.) exigem revisão do usuário antes de qualquer publicação — risco jurídico.
- Qualquer risco desse tipo identificado deve ser registrado no `PROGRESS.md` numa tabela de riscos, não só mencionado de passagem. Se uma pendência já registrada como resolvida se mostrar incompleta ou equivocada (ex: "autorizado" que na prática é "autorização verbal genérica, termo escrito ainda não existe"), corrigir o registro imediatamente — não deixar o `PROGRESS.md` desatualizado/otimista demais.

## Branches

- `main` = versão publicada/produção do site.
- Depois que o site estiver publicado e em uso real, alterações grandes devem ir para branch separada e só ter merge/deploy com autorização explícita.
- Enquanto o site ainda está em desenvolvimento inicial (sem publicação), pode-se trabalhar direto em `main`, salvo instrução em contrário.

## Antes de alterar

- Verificar `git status`, branch atual e últimos commits.
- Se houver alteração não commitada: parar e informar o usuário antes de mexer.

## Escopo

- Não alterar nada fora do escopo da tarefa pedida.
- Não fazer refatoração desnecessária.

## Antes de concluir

- Validar sintaxe HTML/CSS/JS.
- Conferir responsividade básica (mobile/desktop) quando aplicável.
- Não usar dados de contato ou textos fictícios como se fossem reais — placeholders devem ficar claramente marcados até serem substituídos pelos dados reais do usuário.

## Publicação de prévia pública (repo `perla-preview`)

- O repositório `gabrielsantana01k1-prog/perla-preview` (público) é **só um espelho de publicação** via GitHub Pages, usado para a Stephanie (dona do projeto) visualizar o site na web. Ele **não é o repositório de desenvolvimento** — nunca editar diretamente nele.
- Todo desenvolvimento continua neste repositório (`Projeto-Construtora-Perla`, privado).
- **Sempre que uma edição aprovada for commitada aqui**, sincronizar o conteúdo público (`index.html`, `assets/`, `robots.txt`, `obras/`, `projetos/`) para o `perla-preview`, para a prévia na web ficar atualizada.
- **Nunca copiar para o `perla-preview`**: `CLAUDE.md`, `PROGRESS.md`, `docs/`, `design-system/`, `scripts/` — são arquivos internos de gestão/tooling do projeto, não fazem parte do site publicado.
- Antes de sincronizar, revisar se o `index.html`/assets não contêm dado sensível ainda não autorizado (ver regra de Compliance acima) — a prévia é pública na internet (mitigado por `noindex`/`robots.txt`, mas não é privado).
- A sincronização só acontece depois de commit/push aprovado neste repositório — nunca sincronizar working tree não commitado.

## Encerramento de tarefa / antes de `/clear`

Ao concluir uma tarefa aprovada, ou ao final de cada conversa, atualizar o **PROGRESS.md** com:
- o que foi feito;
- branch e commit atual;
- decisões tomadas (cores, textos, estrutura, tecnologias);
- pendências (dados que faltam do usuário: logo, cores, contato, empreendimentos, textos, etc.);
- próximo passo exato.

**Sempre** commitar e dar push para o GitHub antes de confirmar ao usuário que é seguro rodar `/clear`. Se houver algo pendente de commit/push, avisar explicitamente antes de encerrar.

Nenhuma senha, token ou credencial deve ser registrada no PROGRESS.md.
