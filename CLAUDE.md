# CLAUDE.md — Site Construtora Perla

Regras permanentes deste projeto. Ler **PROGRESS.md** no início de toda sessão — não confiar só no histórico da conversa.

## Objetivo do projeto

Site institucional estático (HTML/CSS/JS) da Construtora Perla, com:
- Vitrine de empreendimentos (fotos, plantas, status: lançamento/em obras/pronto).
- Captação de leads (formulário de contato, WhatsApp, simulação de financiamento).
- Institucional/portfólio (história, obras entregues, diferenciais, equipe).

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
