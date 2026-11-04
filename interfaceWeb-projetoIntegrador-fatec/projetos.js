// projetos.js
// "API" da Lista Maravilhosa: baixa o README do GitHub e transforma as tabelas em objetos JS.

const URL_README =
  'https://raw.githubusercontent.com/m0biius2/listamaravilhosaopensource/master/README.md';

// Pega o nome dos badges: ![Python](...) -> "Python"
function lerBadges(celula) {
  return [...celula.matchAll(/!\[([^\]]+)\]\(/g)].map(m => m[1]);
}

// Converte o Markdown do README em uma lista de projetos
function converterLista(markdown) {
  const projetos = [];
  let nivel = null;

  for (const linha of markdown.split(/\r?\n/)) {
    // "## Iniciante" define o nível atual
    const titulo = linha.match(/^##\s+(.+)/);
    if (titulo) {
      nivel = titulo[1].trim();
      continue;
    }

    // Só interessam linhas de tabela
    if (!nivel || !linha.trim().startsWith('|')) continue;

    const celulas = linha.trim().replace(/^\||\|$/g, '').split('|').map(c => c.trim());

    // [Nome](link "descrição opcional")
    const nome = celulas[0].match(/\[([^\]]+)\]\((\S+)(?:\s+"([^"]*)")?\)/);
    if (!nome || celulas.length < 4) continue; // pula cabeçalho e linha |---|

    projetos.push({
      nome: nome[1],
      link: nome[2],
      descricao: nome[3] || '',
      nivel,
      labels: celulas[1].split(',').map(s => s.trim()).filter(Boolean),
      linguagens: lerBadges(celulas[2]),
      idiomas: lerBadges(celulas[3])
    });
  }

  return projetos;
}

// Função principal: busca a lista atualizada direto do GitHub
async function carregarProjetos() {
  const resposta = await fetch(URL_README);
  if (!resposta.ok) throw new Error('Erro ao buscar a lista: ' + resposta.status);
  return converterLista(await resposta.text());
}
