const JOGOS = [
  {
    id: 'estacionamento_impossivel',
    nome: 'Estacionamento Impossível',
    desc: 'Puzzle sliding 6x6 com 120 fases BFS validados. Arraste carros horizontais e verticais para liberar a saída. Sistema de estrelas, undo, progressão.',
    thumb: 'estacionamento_impossivel/estacionamento_impossivel.png',
    webPath: 'estacionamento_impossivel/estacionamento_impossivel.html',
    apkPath: null,
    statusWeb: 'FUNCIONAL',
    statusApk: 'EM PREPARAÇÃO',
    tags: ['PUZZLE', '120 FASES', 'BFS', 'OFFLINE']
  },
  {
    id: 'blocos_do_infinito',
    nome: 'Blocos do Infinito',
    desc: 'Endless runner vertical. Desvie de blocos que caem, colete power-ups (escudo, lento, ímã, 2x). Desafios diários, leaderboard local.',
    thumb: 'blocos_do_infinito/02_blocos_do_infinito.png',
    webPath: 'blocos_do_infinito/02_blocos_do_infinito.html',
    apkPath: null,
    statusWeb: 'FUNCIONAL',
    statusApk: 'EM PREPARAÇÃO',
    tags: ['ENDLESS', '4 LANES', 'POWER-UPS', 'DIÁRIOS']
  },
  {
    id: 'grau_urbano',
    nome: 'Grau Urbano',
    desc: 'Moto street com física de equilíbrio. Incline para desviar de carros, buracos, óleo, rampas. Upgrades: motor, pneus, freios, suspensão.',
    thumb: 'grau_urbano/03_grau_urbano.png',
    webPath: 'grau_urbano/03_grau_urbano.html',
    apkPath: null,
    statusWeb: 'FUNCIONAL',
    statusApk: 'EM PREPARAÇÃO',
    tags: ['MOTO', 'FÍSICA', 'UPGRADES', '3 LANES']
  },
  {
    id: 'cidade_em_crescimento',
    nome: 'Cidade em Crescimento',
    desc: 'City builder idle grid 8x8. Coloque residencial, comercial, industrial, parques, estradas. Recursos: dinheiro, população, felicidade. Progresso offline.',
    thumb: 'cidade_em_crescimento/04_cidade_em_crescimento.png',
    webPath: 'cidade_em_crescimento/04_cidade_em_crescimento.html',
    apkPath: null,
    statusWeb: 'FUNCIONAL',
    statusApk: 'EM PREPARAÇÃO',
    tags: ['CITY BUILDER', 'IDLE', 'GRID 8x8', 'OFFLINE']
  },
  {
    id: 'corrida_das_estrelas',
    nome: 'Corrida das Estrelas',
    desc: 'Space runner/shmup vertical 5 lanes. Auto-fire, asteroides variados, bosses a cada 5km. Upgrades: casco, motor, arma, regeneração de escudo.',
    thumb: 'corrida_das_estrelas/05_corrida_das_estrelas.png',
    webPath: 'corrida_das_estrelas/05_corrida_das_estrelas.html',
    apkPath: null,
    statusWeb: 'FUNCIONAL',
    statusApk: 'EM PREPARAÇÃO',
    tags: ['SPACE', 'SHMUP', 'BOSSES', '5 LANES']
  }
];

function createGameCard(jogo) {
  const card = document.createElement('article');
  card.className = 'jogo-card';
  card.innerHTML = `
    <img class="jogo-card-thumb" src="${jogo.thumb}" alt="${jogo.nome}" loading="lazy">
    <div class="jogo-card-body">
      <span class="jogo-badge jogo-badge-web">WEB ${jogo.statusWeb}</span>
      <h3 class="jogo-card-title">${jogo.nome}<span>${jogo.statusWeb}</span></h3>
      <p class="jogo-card-desc">${jogo.desc}</p>
      <div class="jogo-card-tags" style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:12px;">
        ${jogo.tags.map(t => `<span style="font-size:10px;padding:2px 6px;background:#05182a;border:1px solid #058bd2;border-radius:4px;color:#13caff">${t}</span>`).join('')}
      </div>
      <div class="jogo-card-actions">
        <a class="jogo-btn jogo-btn-web" href="${jogo.webPath}" target="_blank" rel="noopener noreferrer">
          ▶ JOGAR ONLINE
        </a>
        <button class="jogo-btn jogo-btn-apk" ${jogo.apkPath ? '' : 'disabled'} onclick="${jogo.apkPath ? `window.open('${jogo.apkPath}','_blank')` : 'alert(\"APK em preparação. Use a versão Web acima.\")'}">
          📥 BAIXAR APK
        </button>
      </div>
    </div>
  `;
  return card;
}

function renderJogos() {
  const container = document.getElementById('jogos-cards');
  if (!container) return;
  container.innerHTML = '';
  JOGOS.forEach(jogo => {
    container.appendChild(createGameCard(jogo));
  });
}

function initMobileMenu() {
  const toggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('menu');
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const open = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    });
    menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      menu.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Abrir menu');
    }));
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderJogos();
  initMobileMenu();
  document.getElementById('year').textContent = new Date().getFullYear();
});
