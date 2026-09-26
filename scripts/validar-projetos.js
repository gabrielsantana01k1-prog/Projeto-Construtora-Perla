#!/usr/bin/env node
// Valida projetos/manifest.json contra as pastas em projetos/. Roda antes de gerar as páginas de obras.
// Regras (Perla-especificacao-paginas-de-projeto.docx, secao 3):
//  - todo arquivo do manifest existe na pasta indicada;
//  - nenhum .jpg numa pasta de projeto fica fora do manifest daquela pasta;
//  - a mesma imagem (mesmo hash) nao aparece em dois projetos;
//  - a capa esta entre as fotos do proprio projeto.

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const ROOT = path.join(__dirname, '..', 'projetos');
const manifestPath = path.join(ROOT, 'manifest.json');

function fail(msgs) {
  console.error('FALHA na validacao de projetos/manifest.json:\n');
  for (const m of msgs) console.error('  - ' + m);
  process.exit(1);
}

const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
const erros = [];
const hashParaProjeto = new Map(); // hash -> "slug/arquivo"

for (const projeto of manifest.projetos) {
  const pastaAbs = path.join(ROOT, projeto.pasta);

  if (!fs.existsSync(pastaAbs)) {
    erros.push(`pasta "${projeto.pasta}" (projeto "${projeto.slug}") nao existe em projetos/`);
    continue;
  }

  const arquivosNaPasta = new Set(
    fs.readdirSync(pastaAbs).filter((f) => f.toLowerCase().endsWith('.jpg'))
  );
  const arquivosNoManifest = new Set(projeto.fotos.map((f) => f.arquivo));

  // 1. todo arquivo do manifest existe na pasta
  for (const foto of projeto.fotos) {
    const arqAbs = path.join(pastaAbs, foto.arquivo);
    if (!fs.existsSync(arqAbs)) {
      erros.push(`"${projeto.pasta}/${foto.arquivo}" esta no manifest mas nao existe no disco`);
      continue;
    }
    // 3. hash duplicado entre projetos
    const buf = fs.readFileSync(arqAbs);
    const hash = crypto.createHash('sha256').update(buf).digest('hex');
    const chave = `${projeto.slug}/${foto.arquivo}`;
    if (hashParaProjeto.has(hash)) {
      const outro = hashParaProjeto.get(hash);
      if (!outro.startsWith(projeto.slug + '/')) {
        erros.push(`"${chave}" e "${outro}" sao a MESMA imagem (hash identico) em projetos diferentes — foto copiada para o projeto errado`);
      }
    } else {
      hashParaProjeto.set(hash, chave);
    }
  }

  // 2. .jpg orfao na pasta, fora do manifest
  for (const arq of arquivosNaPasta) {
    if (!arquivosNoManifest.has(arq)) {
      erros.push(`"${projeto.pasta}/${arq}" existe no disco mas nao esta listado no manifest deste projeto`);
    }
  }

  // 4. capa esta entre as fotos do proprio projeto
  if (!arquivosNoManifest.has(projeto.capa)) {
    erros.push(`capa "${projeto.capa}" do projeto "${projeto.slug}" nao esta na lista de fotos desse projeto`);
  }
}

if (erros.length) fail(erros);

console.log(`OK — ${manifest.projetos.length} projetos, ${[...hashParaProjeto.keys()].length} fotos, nenhuma mistura encontrada.`);
