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
- **Nomes/fotos/depoimentos de clientes reais** (cases, prints, testemunhos) só entram no site publicado com autorização explícita e por escrito confirmada pelo usuário (LGPD). Até lá, tratar como pendência bloqueadora, não como conteúdo pronto.
- **Promessas absolutas** ("garantido", "100% de aprovação", etc.) exigem revisão do usuário antes de qualquer publicação — risco jurídico.
- Qualquer risco desse tipo identificado deve ser registrado no `PROGRESS.md` numa tabela de riscos, não só mencionado de passagem.

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

## Encerramento de tarefa / antes de `/clear`

Ao concluir uma tarefa aprovada, ou ao final de cada conversa, atualizar o **PROGRESS.md** com:
- o que foi feito;
- branch e commit atual;
- decisões tomadas (cores, textos, estrutura, tecnologias);
- pendências (dados que faltam do usuário: logo, cores, contato, empreendimentos, textos, etc.);
- próximo passo exato.

**Sempre** commitar e dar push para o GitHub antes de confirmar ao usuário que é seguro rodar `/clear`. Se houver algo pendente de commit/push, avisar explicitamente antes de encerrar.

Nenhuma senha, token ou credencial deve ser registrada no PROGRESS.md.
