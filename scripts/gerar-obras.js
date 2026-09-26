#!/usr/bin/env node
// Gera as páginas estáticas /obras/{slug}/index.html a partir de projetos/manifest.json.
// Rodado manualmente em dev (não em runtime/deploy) — o site publicado continua HTML/CSS/JS puro,
// sem framework, sem build step no servidor. Ver PROGRESS.md, sessão da spec de páginas de projeto.
//
// Pré-requisito: `node scripts/validar-projetos.js` sem erros.

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const REPO = path.join(__dirname, '..');
const PROJETOS = path.join(REPO, 'projetos');
const OBRAS_OUT = path.join(REPO, 'obras');

// Validação anti-mistura primeiro — nunca gera páginas sobre um manifest inconsistente.
execSync('node ' + JSON.stringify(path.join(__dirname, 'validar-projetos.js')), { stdio: 'inherit', cwd: REPO });

const manifest = JSON.parse(fs.readFileSync(path.join(PROJETOS, 'manifest.json'), 'utf8'));

// Metadados que não existem no manifest (categoria/resumo da home) — mesmo texto já usado no index.html,
// não inventado agora. Ver index.html, seção #obras, para conferir contra a fonte.
const META = {
  'casa-lagoa-dos-ingleses': {
    categoria: 'Residencial · Construção',
    resumo: 'Varanda com vista e espaço gourmet — do projeto 3D da área social à entrega do deck e da piscina.'
  },
  'casa-vale-dos-cristais': {
    categoria: 'Residencial · Obra interna',
    resumo: 'Execução completa dos interiores: da fachada de quando a Perla assumiu a obra até a entrega finalizada.'
  },
  'clinica-dr-mateus-garcia': {
    categoria: 'Saúde · Projeto + obra',
    resumo: 'Projeto e obra completos do consultório odontológico do Dr. Mateus Garcia, do 3D da recepção à entrega com a marca do cliente.'
  },
  'centro-referencia-queijo-artesanal': {
    categoria: 'Institucional',
    resumo: 'Obra completa do Centro de Referência do Queijo Artesanal — recepção, convivência, copa e espaço expositivo.'
  },
  'apartamento-110m2-buritis': {
    categoria: 'Residencial · Reforma',
    resumo: 'Reforma de 110 m² no Buritis: compra em abril, mudança em 30 de julho. Etapa de entrega ainda em andamento.'
  },
  'rua-andaluzita-savassi': {
    categoria: 'Reforma para valorizar',
    resumo: 'Consultoria e execução de reforma para valorizar o imóvel na Rua Andaluzita, Savassi.'
  }
};

// O manifest.json chegou sem acentuação em vários campos de texto (titulo/legenda) — provável
// perda de encoding na geração do zip pelo cliente. Corrigido aqui só nas strings exibidas na
// tela (nunca em slug/pasta/arquivo, que têm que casar exatamente com os nomes de arquivo reais).
// Cada entrada é o texto exato recebido -> a grafia correta em português.
const CORRECAO_TEXTO = {
  'Clinica Dr. Mateus Garcia': 'Clínica Dr. Mateus Garcia',
  'Centro de Referencia do Queijo Artesanal': 'Centro de Referência do Queijo Artesanal',
  'Apartamento de 110 m2 em 4 meses': 'Apartamento de 110 m² em 4 meses',
  'Area de convivencia': 'Área de convivência',
  'Area social em execucao': 'Área social em execução',
  'Balcao de recepcao com a marca': 'Balcão de recepção com a marca',
  'Consultorio com a marca do cliente': 'Consultório com a marca do cliente',
  'Consultorio entregue': 'Consultório entregue',
  'Espaco expositivo': 'Espaço expositivo',
  'Espaco interno': 'Espaço interno',
  'Projeto 3D da area social': 'Projeto 3D da área social',
  'Projeto 3D da recepcao': 'Projeto 3D da recepção',
  'Projeto 3D da suite': 'Projeto 3D da suíte',
  'Projeto 3D do escritorio': 'Projeto 3D do escritório',
  'Recepcao': 'Recepção',
  'Suite antes da reforma': 'Suíte antes da reforma'
};
function corrigir(texto) {
  return CORRECAO_TEXTO[texto] || texto;
}

const ETAPA_ORDEM = ['antes', 'projeto', 'obra', 'entregue'];
const ETAPA_LABEL = { antes: 'Antes', projeto: 'Projeto', obra: 'Obra', entregue: 'Entregue' };

const publicados = manifest.projetos.filter((p) => p.publicado);

function esc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function renderNav() {
  return `<nav class="nav" aria-label="Principal">
  <div class="shell">
    <a href="../../index.html" class="wordmark" aria-label="Perla Construtora">
      <picture><source srcset="../../assets/img/brand/logo-perla-icon.webp" type="image/webp"><img src="../../assets/img/brand/logo-perla-icon.jpg" alt="Perla Construtora" width="40" height="40" loading="eager"></picture>
      <span class="txt"><b>PERLA</b><span class="sub">construtora</span></span>
    </a>
    <ul>
      <li><a href="../../index.html#metodo">Método</a></li>
      <li><a href="../../index.html#servicos">Serviços</a></li>
      <li><a href="../../index.html#obras">Obras</a></li>
      <li><a href="../../index.html#quem-somos">Quem somos</a></li>
    </ul>
    <a class="btn" href="https://wa.me/5531999203886" target="_blank" rel="noopener">Agendar conversa</a>
    <button class="nav-burger" type="button" aria-expanded="false" aria-controls="nav-mobile" aria-label="Abrir menu"><span></span><span></span><span></span></button>
  </div>
</nav>
<div class="nav-mobile" id="nav-mobile">
  <ul>
    <li><a href="../../index.html#metodo">Método</a></li>
    <li><a href="../../index.html#servicos">Serviços</a></li>
    <li><a href="../../index.html#obras">Obras</a></li>
    <li><a href="../../index.html#quem-somos">Quem somos</a></li>
  </ul>
  <a class="btn solid" href="https://wa.me/5531999203886" target="_blank" rel="noopener">Agendar conversa <span class="arr">→</span></a>
</div>`;
}

function renderFooter() {
  return `<footer>
  <div class="shell">
    <div><a href="../../index.html" class="wordmark"><picture><source srcset="../../assets/img/brand/logo-perla-icon.webp" type="image/webp"><img src="../../assets/img/brand/logo-perla-icon.jpg" alt="Perla Construtora" width="40" height="40" loading="lazy"></picture><span class="txt"><b>PERLA</b><span class="sub">construtora</span></span></a><p style="margin-top:18px;max-width:30ch">Arquitetura, engenharia e viabilidade financeira em Belo Horizonte.</p></div>
    <div><b>Endereço</b>Rua Santa Rita Durão, 444<br>Savassi · Belo Horizonte/MG<br>30140-111</div>
    <div><b>Contato</b><a href="https://wa.me/5531999203886" target="_blank" rel="noopener">WhatsApp</a><br><a href="https://www.instagram.com/perlaconstrutora/" target="_blank" rel="noopener">Instagram</a><br><a href="https://youtube.com/@perlaconstrutora" target="_blank" rel="noopener">YouTube</a></div>
    <div><b>Responsáveis técnicas</b>Eng. Stephanie Faina · CREA-MG 1413598390<br>Arq. Mariana Guimarães</div>
    <div class="legal"><span>Perla Construtora LTDA · CNPJ 55.156.540/0001-50</span></div>
  </div>
</footer>`;
}

function orientacao(foto) {
  return foto.altura > foto.largura ? 'v' : 'h';
}

function renderEtapaBloco(projeto, etapa, fotos, fotoIndexGlobal) {
  const ehMini = fotos.every((f) => f.largura <= 480);
  const claseGrid = ehMini ? 'etapa-grid mini' : 'etapa-grid';
  const figs = fotos
    .map((foto) => {
      const idxGlobal = fotoIndexGlobal.get(foto.arquivo);
      const cls = ehMini ? '' : ' ' + orientacao(foto);
      const selo = foto.etapa === 'projeto' ? '<span class="selo-3d">Imagem 3D do projeto</span>' : '';
      const primeira = foto.arquivo === projeto.capa;
      const loading = primeira ? 'eager' : 'lazy';
      const fetchpriority = primeira ? ' fetchpriority="high"' : '';
      const alt = esc(`${corrigir(projeto.titulo)} — ${corrigir(foto.legenda)}`);
      const src = `../../projetos/${projeto.pasta}/${foto.arquivo}`;
      return `<figure class="${cls.trim()}" data-lightbox-index="${idxGlobal}">
          <span class="frame">${selo}<img src="${src}" alt="${alt}" width="${foto.largura}" height="${foto.altura}" loading="${loading}"${fetchpriority}></span>
          <figcaption>${esc(corrigir(foto.legenda))}</figcaption>
        </figure>`;
    })
    .join('\n        ');
  return `<section class="etapa-bloco" id="etapa-${etapa}" data-reveal>
      <div class="shell">
        <h2>${ETAPA_LABEL[etapa]}</h2>
        <div class="${claseGrid}">
        ${figs}
        </div>
      </div>
    </section>`;
}

function renderTimeline(etapasPresentes) {
  return etapasPresentes
    .map((e) => `<a href="#etapa-${e}">${ETAPA_LABEL[e]}</a>`)
    .join('\n      <span class="dot">·</span>\n      ');
}

function gerarPagina(projeto, indice) {
  const meta = META[projeto.slug] || { categoria: '', resumo: '' };
  const etapasPresentes = ETAPA_ORDEM.filter((e) => projeto.fotos.some((f) => f.etapa === e));
  const fotoIndexGlobal = new Map();
  projeto.fotos.forEach((f, i) => fotoIndexGlobal.set(f.arquivo, i));

  const blocos = etapasPresentes
    .map((etapa) => {
      const fotos = projeto.fotos.filter((f) => f.etapa === etapa).sort((a, b) => a.ordem - b.ordem);
      return renderEtapaBloco(projeto, etapa, fotos, fotoIndexGlobal);
    })
    .join('\n\n');

  const anterior = publicados[(indice - 1 + publicados.length) % publicados.length];
  const proximo = publicados[(indice + 1) % publicados.length];

  const fotosLightbox = projeto.fotos
    .slice()
    .sort((a, b) => a.ordem - b.ordem)
    .map((f) => ({
      src: `../../projetos/${projeto.pasta}/${f.arquivo}`,
      legenda: corrigir(f.legenda),
      etapa: ETAPA_LABEL[f.etapa]
    }));

  const numero = String(indice + 1).padStart(2, '0');

  const html = `<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="robots" content="noindex, nofollow">
<title>${esc(corrigir(projeto.titulo))} | Perla Construtora</title>
<meta name="description" content="${esc(meta.resumo)}">
<meta name="theme-color" content="#0E0D0C">
<link rel="icon" type="image/png" sizes="32x32" href="../../assets/img/brand/favicon-32.png">
<link rel="apple-touch-icon" sizes="180x180" href="../../assets/img/brand/favicon-180.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@1,400;1,500&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400&display=swap">
<link rel="stylesheet" href="../../assets/css/obra.css">
</head>
<body>
${renderNav()}

<header class="obra-topo">
  <div class="shell">
    <a class="link voltar" href="../../index.html#obras">← Todas as obras</a>
    <p class="label dim"><span class="it">${numero}</span></p>
    <h1>${esc(corrigir(projeto.titulo))}</h1>
    <span class="t">${esc(meta.categoria)}</span>
    <p class="resumo">${esc(meta.resumo)}</p>
  </div>
  <div class="shell">
    <nav class="timeline" aria-label="Etapas do projeto">
      ${renderTimeline(etapasPresentes)}
    </nav>
  </div>
</header>

${blocos}

<section class="obra-cta">
  <div class="shell" data-reveal>
    <h2>Quero uma obra <span class="it">assim</span><span class="dot">.</span></h2>
    <a class="btn solid" href="https://wa.me/5531999203886" target="_blank" rel="noopener">Quero uma obra assim <span class="arr">→</span></a>
  </div>
</section>

<nav class="obra-prox" aria-label="Outros projetos">
  <a href="../${anterior.slug}/index.html"><span class="lbl">← Projeto anterior</span><span class="tt">${esc(corrigir(anterior.titulo))}</span></a>
  <a href="../${proximo.slug}/index.html"><span class="lbl">Próximo projeto →</span><span class="tt">${esc(corrigir(proximo.titulo))}</span></a>
</nav>

${renderFooter()}

<div class="lightbox" id="lightbox" role="dialog" aria-modal="true" aria-label="Galeria em tela cheia">
  <button class="fechar" type="button" aria-label="Fechar">✕</button>
  <button class="seta prev" type="button" aria-label="Foto anterior">‹</button>
  <figure>
    <img id="lightbox-img" alt="">
    <figcaption id="lightbox-caption"><span id="lightbox-legenda"></span><span class="etapa" id="lightbox-etapa"></span></figcaption>
  </figure>
  <button class="seta next" type="button" aria-label="Próxima foto">›</button>
  <div class="contador" id="lightbox-contador"></div>
</div>

<script id="fotos-data" type="application/json">${JSON.stringify(fotosLightbox)}</script>
<script>
// Revelação ao rolar — mesmo mecanismo do index.html
if (window.matchMedia('(prefers-reduced-motion: no-preference)').matches && 'IntersectionObserver' in window) {
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) { entry.target.classList.add('in'); io.unobserve(entry.target); }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -8% 0px' });
  document.querySelectorAll('[data-reveal]').forEach(function (el) { io.observe(el); });
} else {
  document.querySelectorAll('[data-reveal]').forEach(function (el) { el.classList.add('in'); });
}
</script>
<script>
// Menu mobile — idêntico ao index.html
(function () {
  var burger = document.querySelector('.nav-burger');
  var panel = document.getElementById('nav-mobile');
  if (!burger || !panel) return;
  function close() { burger.setAttribute('aria-expanded', 'false'); panel.classList.remove('open'); document.body.classList.remove('nav-open'); }
  function open() { burger.setAttribute('aria-expanded', 'true'); panel.classList.add('open'); document.body.classList.add('nav-open'); }
  burger.addEventListener('click', function () { if (panel.classList.contains('open')) close(); else open(); });
  panel.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', close); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
  document.addEventListener('click', function (e) { if (panel.classList.contains('open') && !panel.contains(e.target) && e.target !== burger && !burger.contains(e.target)) close(); });
  window.addEventListener('resize', function () { if (window.innerWidth > 900) close(); });
})();
</script>
<script>
// Lightbox — tela cheia, setas + teclado, Esc fecha, contador "n / total", legenda e etapa.
(function () {
  var fotos = JSON.parse(document.getElementById('fotos-data').textContent);
  var lb = document.getElementById('lightbox');
  var img = document.getElementById('lightbox-img');
  var legenda = document.getElementById('lightbox-legenda');
  var etapaEl = document.getElementById('lightbox-etapa');
  var contador = document.getElementById('lightbox-contador');
  var atual = 0;

  function mostrar(i) {
    atual = (i + fotos.length) % fotos.length;
    var f = fotos[atual];
    img.src = f.src;
    img.alt = f.legenda;
    legenda.textContent = f.legenda;
    etapaEl.textContent = f.etapa;
    contador.textContent = (atual + 1) + ' / ' + fotos.length;
  }
  function abrir(i) { mostrar(i); lb.classList.add('open'); document.body.classList.add('nav-open'); }
  function fechar() { lb.classList.remove('open'); document.body.classList.remove('nav-open'); }

  document.querySelectorAll('[data-lightbox-index]').forEach(function (fig) {
    fig.querySelector('img').addEventListener('click', function () {
      abrir(parseInt(fig.getAttribute('data-lightbox-index'), 10));
    });
  });
  lb.querySelector('.fechar').addEventListener('click', fechar);
  lb.querySelector('.prev').addEventListener('click', function () { mostrar(atual - 1); });
  lb.querySelector('.next').addEventListener('click', function () { mostrar(atual + 1); });
  lb.addEventListener('click', function (e) { if (e.target === lb) fechar(); });
  document.addEventListener('keydown', function (e) {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape') fechar();
    if (e.key === 'ArrowLeft') mostrar(atual - 1);
    if (e.key === 'ArrowRight') mostrar(atual + 1);
  });
})();
</script>
</body>
</html>
`;

  const dirSaida = path.join(OBRAS_OUT, projeto.slug);
  fs.mkdirSync(dirSaida, { recursive: true });
  fs.writeFileSync(path.join(dirSaida, 'index.html'), html);
  console.log('gerado: obras/' + projeto.slug + '/index.html');
}

fs.rmSync(OBRAS_OUT, { recursive: true, force: true });
publicados.forEach((p, i) => gerarPagina(p, i));
console.log(`\n${publicados.length} páginas geradas em obras/.`);
