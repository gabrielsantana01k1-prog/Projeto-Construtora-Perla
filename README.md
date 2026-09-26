# Site Construtora Perla

Site institucional estático (HTML/CSS/JS puro) da Construtora Perla — sem framework, sem build step. Publicado direto via GitHub Pages/Apache a partir dos arquivos deste repositório.

## Estrutura

```
index.html              # home (single-page, CSS/JS embutidos)
obras/{slug}/index.html # 6 páginas de projeto, geradas por scripts/gerar-obras.js
projetos/                # fotos reais por projeto + manifest.json (fonte única de dados dos projetos)
assets/                 # imagens, CSS compartilhado (obra.css) e futuros JS
scripts/                # ferramentas de dev (Node, não rodam em produção)
docs/briefing/          # briefing de marca original (fonte da verdade de conteúdo)
design-system/          # paleta, tipografia, "Checklist $10K"
CLAUDE.md               # regras permanentes do projeto (compliance, branches, escopo)
PROGRESS.md             # histórico detalhado de cada sessão de trabalho — leia antes de mexer em algo
```

## Rodar localmente

Não precisa de `npm install`. É só servir a pasta como estático:

```bash
python3 -m http.server 8000
# ou
npx serve .
```

Abra `http://localhost:8000/index.html`.

## Páginas de projeto (`/obras/{slug}`)

Cada projeto vem de `projetos/manifest.json` (título, capa, fotos por etapa: antes/projeto/obra/entregue). As 6 páginas HTML em `obras/` **são geradas, não editadas à mão**.

Para adicionar/alterar um projeto:
1. Editar `projetos/manifest.json` e/ou adicionar fotos em `projetos/{pasta-do-projeto}/`.
2. Rodar:
   ```bash
   node scripts/validar-projetos.js   # confere que nada está misturado entre projetos
   node scripts/gerar-obras.js        # regenera obras/*/index.html (chama o validador sozinho)
   ```
3. Conferir no navegador antes de commitar.

`validar-projetos.js` falha o processo se: um arquivo do manifest não existir no disco, existir uma foto na pasta que não está no manifest, a mesma foto (mesmo hash) aparecer em dois projetos, ou a capa não estiver entre as fotos do próprio projeto.

## Publicação / prévia

- Repositório de desenvolvimento (este): **privado**.
- Prévia pública: repositório `perla-preview` (público, necessário para o GitHub Pages gratuito), servido em `https://gabrielsantana01k1-prog.github.io/perla-preview/`.
- **Toda edição aprovada aqui precisa ser copiada manualmente para `perla-preview`** (`index.html`, `assets/`, `robots.txt`, `obras/`, `projetos/` — nunca `CLAUDE.md`/`PROGRESS.md`/`docs/`/`design-system/`/`scripts/`). Ver `CLAUDE.md` para o passo a passo.
- `.htaccess` na raiz já traz cabeçalhos de segurança e cache básicos para quando o site for para hospedagem cPanel/Apache de verdade (não tem efeito no GitHub Pages).
- Antes de publicar no domínio final: remover `<meta name="robots" content="noindex, nofollow">` de todas as páginas e ajustar `robots.txt` (hoje bloqueiam indexação de propósito, é uma prévia).

## Regras do projeto

Ler **CLAUDE.md** (regras permanentes: compliance de dados de clientes, branches, escopo) e **PROGRESS.md** (histórico completo, decisões tomadas, pendências) antes de qualquer alteração.
