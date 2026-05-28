/* ==========================================================================
   CATO PLAY - APPLICATION ENGINE & QUEUE STATE CONTROLLER
   ========================================================================== */

// 1. Core Game Database
const GAMES_DATABASE = [
  {
    id: 'tomodachi',
    title: 'Tomodachi Life: Living the Dream',
    category: 'Simulation / Social / Life',
    genre: 'simulation',
    rating: 4.8,
    ratingCount: '24,310',
    players: '12,980',
    developer: 'Nintendo',
    releaseDate: 'June 2014 (Remastered Beta)',
    bg: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&q=80&w=1200',
    cover: 'https://upload.wikimedia.org/wikipedia/en/a/a3/Tomodachi_Life_artwork.png',
    tagline: 'What happens when your Mii characters come to life and live on a private cloud island?',
    description: 'Tomodachi Life: Living the Dream is a modded cloud-optimized remaster of the classic simulation game. Populate your virtual high-rise apartment island with your favorite characters, friends, and family. Watch friendships form, relationships blossom, and bizarre dramas unfold in real-time. Played at 1080p stream resolution directly inside your browser.',
    screenshots: [
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&q=80&w=800'
    ],
    comments: [
      { username: 'Mii_Creator', avatar: 'MC', playtime: '84.3 hrs', isRecommended: true, text: 'This modded version is hilarious! Playing it on high resolution without emulator setups is a lifesaver. Skip the queue and enjoy!', helpful: 92, date: '4 hours ago' },
      { username: 'DreamLiver', avatar: 'DL', playtime: '21.5 hrs', isRecommended: true, text: 'I populated the island with anime characters and it is pure chaos. Low latency stream is perfect.', helpful: 41, date: '1 day ago' }
    ]
  },
  {
    id: 'pokopia',
    title: 'Pokopia',
    category: 'Simulation / Social / Anime',
    genre: 'simulation',
    rating: 4.7,
    ratingCount: '15,820',
    players: '8,410',
    developer: 'Cocone',
    releaseDate: '2021 (Cloud Edition)',
    bg: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&q=80&w=1200',
    cover: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&q=80&w=600',
    tagline: 'Create your dream avatar and step into the cozy virtual skies of Pokopia.',
    description: 'Pokopia is an immersive virtual world simulator. Design a unique avatar, dress up in cute aesthetic outfits, design cozy interior spaces, and socialize with players from all over the world. Streamed instantly at zero latency with ultra-high quality visuals.',
    screenshots: [
      'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800'
    ],
    comments: [
      { username: 'PokoQueen', avatar: 'PQ', playtime: '124.5 hrs', isRecommended: true, text: 'Absolutely adorable game! The customization on cloud is lag-free and the textures load instantly.', helpful: 83, date: '2 hours ago' },
      { username: 'AestheticVibes', avatar: 'AV', playtime: '39.8 hrs', isRecommended: true, text: 'Perfect game to chill and hang out with friends. Bypassed the server queue and started designing my room instantly!', helpful: 29, date: '5 hours ago' }
    ]
  },
  {
    id: 'miitopia',
    title: 'Miitopia',
    category: 'RPG / Simulation / Fantasy',
    genre: 'cozy',
    rating: 4.8,
    ratingCount: '19,304',
    players: '11,280',
    developer: 'Nintendo',
    releaseDate: 'May 2021 (Cloud Modded)',
    bg: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=1200',
    cover: 'https://upload.wikimedia.org/wikipedia/en/8/8e/Miitopia_cover.png',
    tagline: 'Embark on a hilarious custom RPG adventure where your Miis are the heroes!',
    description: 'Miitopia is a lighthearted RPG where you cast your Miis as the warriors, wizards, and dark lords of a custom fantasy kingdom. Watch your characters bond, cast silly spells, and take down the face-stealing Dark Lord. Streamed in HD on Cato Play.',
    screenshots: [
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&q=80&w=800'
    ],
    comments: [
      { username: 'Mii_Hero', avatar: 'MH', playtime: '74.2 hrs', isRecommended: true, text: 'Adding my friends as the party members makes this the best RPG ever. Runs beautifully on this browser player.', helpful: 64, date: '3 hours ago' },
      { username: 'MageMii', avatar: 'MM', playtime: '15.4 hrs', isRecommended: true, text: 'Graphics are sharp, stream responds instantly. Absolute classic!', helpful: 18, date: '1 day ago' }
    ]
  },
  {
    id: 'animalcrossing',
    title: 'Animal Crossing: New Horizons',
    category: 'Simulation / Life / Cozy',
    genre: 'cozy',
    rating: 4.9,
    ratingCount: '34,295',
    players: '28,495',
    developer: 'Nintendo',
    releaseDate: 'March 2020',
    bg: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1200',
    cover: 'https://upload.wikimedia.org/wikipedia/en/1/1f/Animal_Crossing_New_Horizons.png',
    tagline: 'Escape to your own deserted island paradise and create a customized tropical community.',
    description: 'Animal Crossing: New Horizons is a cloud-streamed edition of the smash-hit island life simulator. Escape to a deserted island and create your own paradise as you explore, create, and customize your character, home, and landscape. Fish, fossil hunt, decorate your island, and play with friends in real-time.',
    screenshots: [
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800'
    ],
    comments: [
      { username: 'IslandDecor', avatar: 'ID', playtime: '240.5 hrs', isRecommended: true, text: 'This game is my ultimate zen escape. Streaming it on the browser is shockingly responsive, it actually feels native! highly recommend skip priority bypass.', helpful: 145, date: '1 hour ago' },
      { username: 'TomNookLover', avatar: 'TN', playtime: '89.4 hrs', isRecommended: true, text: 'Finally can pay off my mortgage on the go! Zero lag, perfect visuals, amazing port.', helpful: 67, date: '1 day ago' }
    ]
  },
  {
    id: 'sims4',
    title: 'The Sims 4',
    category: 'Simulation / Social / Life',
    genre: 'simulation',
    rating: 4.8,
    ratingCount: '48,190',
    players: '32,180',
    developer: 'Maxis / Electronic Arts',
    releaseDate: 'September 2014',
    bg: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
    cover: 'https://upload.wikimedia.org/wikipedia/en/9/9f/The_Sims_4_cover_art.png',
    tagline: 'Unleash your imagination and create a unique world of Sims that express who you are!',
    description: 'The Sims 4 is the ultimate life simulation game that lets you play with life like never before. Create new Sims with distinct appearances, big personalities, and deep aspirations. Build and design beautiful homes for them, watch their careers, friendships, and romances flourish, and guide their lives through every milestone.',
    screenshots: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800'
    ],
    comments: [
      { username: 'SulSulSimmer', avatar: 'SS', playtime: '312.2 hrs', isRecommended: true, text: 'Dag dag! The Sims 4 cloud version runs all packs smoothly with zero slowdowns even on my ancient laptop. This streamer is magic.', helpful: 289, date: '3 hours ago' },
      { username: 'BuilderPro', avatar: 'BP', playtime: '115.0 hrs', isRecommended: true, text: 'Absolutely love building houses in this cloud setup. Responsive mouse controls and great framerate. 5/5 stars!', helpful: 104, date: '2 days ago' }
    ]
  }
];

// 2. Application State Variables
let currentActiveView = 'home';
let selectedGame = GAMES_DATABASE[0];
let carouselIndex = 0;
let queuePosition = 4281;
let queueWaitTime = 1024;
let playersOnlineCount = 14295;
let queueSimulationInterval = null;
let connectingLogsInterval = null;

// Mock offer states
let offer1Completed = false;
let offer2Completed = false;

// Starfield Canvas Animation Config
let canvas = null;
let ctx = null;
let stars = [];
const STAR_COUNT = 150;
let speed = 2;
let starfieldAnimationFrame = null;
let gameplayTimerInterval = null;
let sessionSeconds = 0;

// 3. Select DOM Elements
const views = {
  home: document.getElementById('view-home'),
  details: document.getElementById('view-details'),
  gameplay: document.getElementById('view-gameplay')
};

const navigation = {
  links: document.querySelectorAll('.nav-link'),
  logo: document.getElementById('nav-logo'),
  search: document.getElementById('game-search'),
  clearSearch: document.getElementById('clear-search'),
  vipBtn: document.getElementById('nav-queue-btn')
};

const modalElements = {
  overlay: document.getElementById('queue-modal'),
  close: document.getElementById('queue-modal-close'),
  stageConnecting: document.getElementById('stage-connecting'),
  stageQueue: document.getElementById('stage-queue'),
  logFeed: document.getElementById('connecting-log-feed'),
  btnLockerLater: document.getElementById('btn-locker-later'),
  btnCpaLocker: document.getElementById('btn-cpa-locker'),
  queuePosition: document.getElementById('modal-queue-position'),
  queueWait: document.getElementById('modal-queue-wait'),
  playersActive: document.getElementById('modal-players-active')
};

// 4. Start Application
document.addEventListener('DOMContentLoaded', () => {
  initializeFeaturedHero();
  renderGamesGrid(GAMES_DATABASE);
  renderRecentDrops();
  setupEventHandlers();
  setupCanvas();
});

// 5. Featured Hero Initialization
function initializeFeaturedHero() {
  const featured = GAMES_DATABASE[3]; // Featured Hero: Animal Crossing New Horizons
  const heroBanner = document.getElementById('featured-hero');
  const heroTitle = document.getElementById('featured-title');
  const heroDesc = document.getElementById('featured-desc');
  const heroRating = document.getElementById('featured-rating');
  const heroPlayers = document.getElementById('featured-players');
  const featuredInfoBtn = document.getElementById('featured-info-btn');
  
  heroBanner.style.backgroundImage = `url('${featured.bg}')`;
  heroTitle.innerText = featured.title;
  heroDesc.innerText = featured.tagline;
  heroRating.innerText = `${featured.rating}/5.0`;
  heroPlayers.innerText = `${featured.players} Streamers`;
  
  featuredInfoBtn.onclick = () => showGameDetails(featured.id);
}

// 6. Render Game Cards Grid
function renderGamesGrid(gamesList) {
  const gridContainer = document.getElementById('games-list-container');
  gridContainer.innerHTML = '';
  
  if (gamesList.length === 0) {
    gridContainer.innerHTML = `
      <div class="loading-placeholder">
        <p>No games found matching your criteria. Try another search!</p>
      </div>
    `;
    return;
  }
  
  gamesList.forEach(game => {
    const card = document.createElement('div');
    card.className = 'game-card';
    card.innerHTML = `
      <div class="game-card-thumbnail">
        <div class="card-badge-absolute">FREE PLAY</div>
        <img src="${game.cover}" alt="${game.title}" loading="lazy">
        <div class="card-play-overlay">
          <div class="circle-play-btn">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
          </div>
        </div>
      </div>
      <div class="game-card-body">
        <span class="card-genre">${game.category}</span>
        <h3 class="card-title">${game.title}</h3>
        
        <button class="card-action-btn">
          PLAY INSTANTLY
          <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor" style="margin-left: 2px;">
            <polygon points="5 3 19 12 5 21 5 3"></polygon>
          </svg>
        </button>

        <div class="card-verified-container">
          <div class="card-verified-badge">
            <svg viewBox="0 0 24 24" width="10" height="10" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 2px;">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            VERIFIED
          </div>
          <div class="card-expiry-badge">
            EXPIRY: NO LIMIT
          </div>
        </div>
      </div>
    `;
    
    card.addEventListener('click', () => {
      showGameDetails(game.id);
    });
    
    gridContainer.appendChild(card);
  });
}

// 6.5. Render Recent Drops Sidebar
function renderRecentDrops() {
  const container = document.getElementById('recent-drops-container');
  if (!container) return;
  
  container.innerHTML = '';
  
  GAMES_DATABASE.forEach(game => {
    const item = document.createElement('div');
    item.className = 'recent-drop-item';
    item.innerHTML = `
      <div class="recent-drop-icon">
        <img src="${game.cover}" alt="${game.title}" loading="lazy">
      </div>
      <div class="recent-drop-info">
        <div class="recent-drop-title-text">${game.title}</div>
        <div class="recent-drop-meta">
          <span class="recent-drop-badge">FREE • CLOUD</span>
          <span>${game.category.split('/')[0].trim()}</span>
        </div>
      </div>
    `;
    
    item.addEventListener('click', () => {
      showGameDetails(game.id);
    });
    
    container.appendChild(item);
  });
}

// 7. Navigation & Routing Mechanics
function switchView(viewName) {
  currentActiveView = viewName;
  
  // Update browser hash path smoothly (Mock router)
  window.location.hash = viewName === 'home' ? '' : `${viewName}/${selectedGame.id}`;

  Object.keys(views).forEach(key => {
    if (key === viewName) {
      views[key].classList.add('active');
    } else {
      views[key].classList.remove('active');
    }
  });

  // Ensure scroll is reset to top
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Handle side-effects of views switching
  if (viewName === 'gameplay') {
    startStarfieldAnimation();
    startGameplayTimer();
  } else {
    stopStarfieldAnimation();
    stopGameplayTimer();
  }
}

// 8. Render Game Details Page
function showGameDetails(gameId) {
  const game = GAMES_DATABASE.find(g => g.id === gameId);
  if (!game) return;
  
  selectedGame = game;
  carouselIndex = 0;
  
  // Set elements content
  document.getElementById('detail-hero-banner').style.backgroundImage = `url('${game.bg}')`;
  document.getElementById('detail-genre-badge').innerText = game.category;
  document.getElementById('detail-game-title').innerText = game.title;
  document.getElementById('detail-game-tagline').innerText = game.tagline;
  document.getElementById('detail-description').innerText = game.description;
  document.getElementById('detail-rating-big').innerText = game.rating;
  document.getElementById('detail-sidebar-players').innerText = `${game.players} Active Now`;
  document.getElementById('meta-developer').innerText = game.developer;
  document.getElementById('meta-release-date').innerText = game.releaseDate;
  
  // Large ratings stars breakdown
  const starsContainer = document.getElementById('detail-stars-big');
  starsContainer.innerHTML = '';
  const roundedRating = Math.round(game.rating);
  for (let i = 1; i <= 5; i++) {
    const starSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    starSvg.setAttribute('viewBox', '0 0 24 24');
    starSvg.setAttribute('width', '20');
    starSvg.setAttribute('height', '20');
    starSvg.setAttribute('fill', i <= roundedRating ? 'currentColor' : 'none');
    starSvg.setAttribute('stroke', 'currentColor');
    starSvg.setAttribute('stroke-width', '1.5');
    starSvg.innerHTML = `<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>`;
    starsContainer.appendChild(starSvg);
  }
  
  document.getElementById('detail-rating-votes').innerText = `${game.ratingCount} user recommendations`;

  // Gallery
  const track = document.getElementById('detail-gallery-track');
  track.innerHTML = '';
  game.screenshots.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = 'Gameplay Screenshot';
    track.appendChild(img);
  });
  updateCarouselPosition();

  // Reviews & Comments rendering
  renderReviewsList(game.comments);

  // Trigger screen change
  switchView('details');
}

// Render Review Comments List
function renderReviewsList(comments) {
  const container = document.getElementById('detail-reviews-container');
  container.innerHTML = '';
  
  comments.forEach(rev => {
    const card = document.createElement('div');
    card.className = 'review-card';
    card.innerHTML = `
      <div class="review-header">
        <div class="review-user">
          <div class="user-avatar">${rev.avatar}</div>
          <span class="username" title="${rev.username}">${rev.username}</span>
        </div>
        <span class="user-playtime">${rev.playtime} on GFN</span>
        <span class="review-rating-tag ${rev.isRecommended ? '' : 'negative'}">
          ${rev.isRecommended ? '✔ Recommended' : '✘ Not Recommended'}
        </span>
      </div>
      <div class="review-main">
        <div class="review-content">
          "${rev.text}"
        </div>
        <div class="review-footer">
          <span>Was this feedback helpful?</span>
          <button class="btn-helpful">
            👍 Yes (${rev.helpful})
          </button>
          <span style="margin-left: auto;">Posted ${rev.date}</span>
        </div>
      </div>
    `;
    
    // Wire thumbs up helpful rating click simulation
    const btnHelp = card.querySelector('.btn-helpful');
    let voted = false;
    btnHelp.onclick = () => {
      if (!voted) {
        btnHelp.innerHTML = `👍 Yes (${rev.helpful + 1})`;
        btnHelp.style.color = 'var(--color-nvidia-green)';
        voted = true;
      }
    };

    container.appendChild(card);
  });
}

// 9. Screenshot Slider Controls
function updateCarouselPosition() {
  const track = document.getElementById('detail-gallery-track');
  track.style.transform = `translateX(-${carouselIndex * 100}%)`;
}

function nextScreenshot() {
  carouselIndex = (carouselIndex + 1) % selectedGame.screenshots.length;
  updateCarouselPosition();
}

function prevScreenshot() {
  carouselIndex = (carouselIndex - 1 + selectedGame.screenshots.length) % selectedGame.screenshots.length;
  updateCarouselPosition();
}

// 10. Queue Simulator & Locker Modal Logic
function openQueueModal() {
  modalElements.overlay.classList.add('active');
  
  // Start connection logs stage
  modalElements.stageConnecting.classList.add('active');
  modalElements.stageQueue.classList.remove('active');
  simulateConnectingSequence();
}

function closeQueueModal() {
  modalElements.overlay.classList.remove('active');
  clearInterval(queueSimulationInterval);
  clearInterval(connectingLogsInterval);
}

// Connection handshake logs sequence
function simulateConnectingSequence() {
  const logFeed = modalElements.logFeed;
  logFeed.innerHTML = '<div class="log-line">Handshake initialized with Cato Node server IP...</div>';
  
  const logs = [
    'Connecting to nearest shared RTX streaming rig (US-East)...',
    'Session handshake validated successfully.',
    'Pinging storage controller for game file caches...',
    'Disk verification completed. High-speed NVMe volume mounted.',
    'Checking graphics pipeline capability (RTX Ray-Tracing)...',
    'Validating user rank (Free Rank queue priority)...',
    'Server limit warning! Priority slots saturated.',
    'Moving user to cloud shared hosting queue...'
  ];
  
  let currentLogIdx = 0;
  
  clearInterval(connectingLogsInterval);
  connectingLogsInterval = setInterval(() => {
    if (currentLogIdx < logs.length) {
      const line = document.createElement('div');
      line.className = 'log-line';
      line.innerText = logs[currentLogIdx];
      logFeed.appendChild(line);
      logFeed.scrollTop = logFeed.scrollHeight;
      currentLogIdx++;
    } else {
      clearInterval(connectingLogsInterval);
      // Move to stage 2: The actual Queue & Bypass locker list after 3 seconds
      setTimeout(() => {
        showQueueStage();
      }, 800);
    }
  }, 350);
}

// Render queue status values and trigger counts
function showQueueStage() {
  modalElements.stageConnecting.classList.remove('active');
  modalElements.stageQueue.classList.add('active');
  
  // Set starting values
  queuePosition = 4281;
  queueWaitTime = 1024;
  playersOnlineCount = 14295;
  
  updateQueueStatsDisplay();
  
  // Slowly ticking queue downward for hyper realism
  clearInterval(queueSimulationInterval);
  queueSimulationInterval = setInterval(() => {
    // Tick down position
    if (queuePosition > 1) {
      const step = Math.floor(Math.random() * 3) + 1;
      queuePosition = Math.max(1, queuePosition - step);
      queueWaitTime = Math.max(1, Math.round(queuePosition * 0.24));
      playersOnlineCount += Math.floor(Math.random() * 5) - 2;
      
      updateQueueStatsDisplay();
    }
  }, 3000);
}

function updateQueueStatsDisplay() {
  modalElements.queuePosition.innerText = `#${queuePosition.toLocaleString()}`;
  modalElements.queueWait.innerText = `${queueWaitTime} min`;
  modalElements.playersActive.innerHTML = `<strong>${playersOnlineCount.toLocaleString()} online</strong>. Servers are at 100% capacity.`;
}

// Trigger for live CPA Content Locker / OGAds link
function launchCpaLocker() {
  alert('CPA Locker Triggered! In production, paste your OGAds / CPA Content Locker iframe, redirection link, or gateway function call here to monetize.');
}

// 11. Start Cloud Gameplay View (WOW Canvas Simulator)
function startGameplayStream() {
  // Setup gameplay info
  document.getElementById('gameplay-title').innerText = `Stream: ${selectedGame.title}`;
  
  // Reset loader states
  const loader = document.getElementById('gameplay-stream-loading');
  const screen = document.getElementById('gameplay-screen-content');
  loader.style.display = 'flex';
  screen.style.display = 'none';
  
  // Reset loading progress elements
  const progressBar = document.getElementById('gfn-loading-progress-bar');
  const percentText = document.getElementById('gfn-loading-percent');
  const statusText = document.getElementById('gfn-loading-status');
  
  progressBar.style.width = '0%';
  percentText.innerText = '0%';
  statusText.innerText = 'Establishing Secure Connection...';
  
  switchView('gameplay');
  
  // Progress Bar ticking loop (hyper-realistic RTX allocation sequence)
  let currentProgress = 0;
  const statusPhrases = [
    { threshold: 0, text: 'Allocating RTX GPU host rig...' },
    { threshold: 25, text: 'Acquiring server slot credentials...' },
    { threshold: 50, text: 'Mounting cloud cache disk volume...' },
    { threshold: 75, text: 'Caching shaders and textures...' },
    { threshold: 92, text: 'Decoding video stream layers...' }
  ];
  
  const progressInterval = setInterval(() => {
    currentProgress += Math.floor(Math.random() * 8) + 4; // increment random step
    if (currentProgress >= 100) {
      currentProgress = 100;
      clearInterval(progressInterval);
      
      // Load the screen
      setTimeout(() => {
        loader.style.display = 'none';
        screen.style.display = 'block';
        sessionSeconds = 0;
      }, 250);
    }
    
    // Update progress elements
    progressBar.style.width = `${currentProgress}%`;
    percentText.innerText = `${currentProgress}%`;
    
    // Update status text phase
    const matchingPhrase = statusPhrases.filter(p => currentProgress >= p.threshold).pop();
    if (matchingPhrase) {
      statusText.innerText = matchingPhrase.text;
    }
  }, 100);
}

// Canvas Game Starfield Engine Loop
function setupCanvas() {
  canvas = document.getElementById('starfield-canvas');
  ctx = canvas.getContext('2d');
  
  // Responsive resize
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);
  
  // Mouse hover increases starfield speed dynamically to mimic inputs!
  canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left - canvas.width / 2;
    const y = e.clientY - rect.top - canvas.height / 2;
    speed = Math.max(0.5, Math.min(10, Math.sqrt(x*x + y*y) / 80));
  });

  // Track WASD keys press to highlight Hud indicators
  window.addEventListener('keydown', (e) => {
    const k = e.key.toLowerCase();
    if (['w', 'a', 's', 'd'].includes(k)) {
      speed = 6;
      setTimeout(() => { speed = 2; }, 300);
    }
  });
}

function resizeCanvas() {
  if (canvas) {
    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = canvas.parentElement.clientHeight;
    initStars();
  }
}

function initStars() {
  stars = [];
  for (let i = 0; i < STAR_COUNT; i++) {
    stars.push({
      x: Math.random() * canvas.width - canvas.width / 2,
      y: Math.random() * canvas.height - canvas.height / 2,
      z: Math.random() * canvas.width,
      color: getRandomStarColor()
    });
  }
}

function getRandomStarColor() {
  const colors = ['#00d2f3', '#8b5cf6', '#ffffff', '#a855f7', '#6366f1'];
  return colors[Math.floor(Math.random() * colors.length)];
}

function startStarfieldAnimation() {
  initStars();
  
  function update() {
    ctx.fillStyle = 'rgba(9, 10, 15, 0.25)'; // Deep neon background trail
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    const cx = canvas.width / 2;
    const cy = canvas.height / 2;
    
    for (let i = 0; i < STAR_COUNT; i++) {
      let star = stars[i];
      star.z -= speed;
      
      if (star.z <= 0) {
        star.z = canvas.width;
        star.x = Math.random() * canvas.width - cx;
        star.y = Math.random() * canvas.height - cy;
      }
      
      const px = (star.x / star.z) * cx + cx;
      const py = (star.y / star.z) * cy + cy;
      const radius = (1 - star.z / canvas.width) * 4;
      
      if (px >= 0 && px <= canvas.width && py >= 0 && py <= canvas.height) {
        ctx.beginPath();
        ctx.arc(px, py, Math.max(0.5, radius), 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        
        // Add neon glow
        ctx.shadowBlur = radius * 2;
        ctx.shadowColor = star.color;
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      }
    }
    
    starfieldAnimationFrame = requestAnimationFrame(update);
  }
  
  update();
}

function stopStarfieldAnimation() {
  if (starfieldAnimationFrame) {
    cancelAnimationFrame(starfieldAnimationFrame);
    starfieldAnimationFrame = null;
  }
}

// Gameplay HUD Timer Stopwatch
function startGameplayTimer() {
  const display = document.getElementById('session-timer');
  sessionSeconds = 0;
  display.innerText = '00:00:00';
  
  clearInterval(gameplayTimerInterval);
  gameplayTimerInterval = setInterval(() => {
    sessionSeconds++;
    const hrs = Math.floor(sessionSeconds / 3600).toString().padStart(2, '0');
    const mins = Math.floor((sessionSeconds % 3600) / 60).toString().padStart(2, '0');
    const secs = (sessionSeconds % 60).toString().padStart(2, '0');
    
    display.innerText = `${hrs}:${mins}:${secs}`;
  }, 1000);
}

function stopGameplayTimer() {
  clearInterval(gameplayTimerInterval);
}

// 12. Main Click Event Bindings
function setupEventHandlers() {
  // Nav Links
  navigation.links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = link.getAttribute('data-target') || 'home';
      
      // Update active nav styles
      navigation.links.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      
      switchView(target);
    });
  });
  
  // Navigation VIP Pass Action click
  navigation.vipBtn.addEventListener('click', (e) => {
    e.preventDefault();
    openQueueModal();
  });
  
  // Search bar logic
  navigation.search.addEventListener('input', (e) => {
    const val = e.target.value.toLowerCase().trim();
    if (val.length > 0) {
      navigation.clearSearch.style.display = 'block';
    } else {
      navigation.clearSearch.style.display = 'none';
    }
    
    const filteredGames = GAMES_DATABASE.filter(g => 
      g.title.toLowerCase().includes(val) || 
      g.category.toLowerCase().includes(val)
    );
    
    renderGamesGrid(filteredGames);
  });
  
  // Clear search input
  navigation.clearSearch.addEventListener('click', () => {
    navigation.search.value = '';
    navigation.clearSearch.style.display = 'none';
    renderGamesGrid(GAMES_DATABASE);
  });
  
  // Genre Filter Buttons
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      const genre = btn.getAttribute('data-genre');
      if (genre === 'all') {
        renderGamesGrid(GAMES_DATABASE);
      } else {
        const filtered = GAMES_DATABASE.filter(g => g.genre === genre);
        renderGamesGrid(filtered);
      }
    });
  });

  // Logo back to home
  navigation.logo.addEventListener('click', (e) => {
    e.preventDefault();
    navigation.search.value = '';
    navigation.clearSearch.style.display = 'none';
    renderGamesGrid(GAMES_DATABASE);
    
    // Select home nav link visual
    navigation.links.forEach(l => {
      if (l.getAttribute('data-target') === 'home') l.classList.add('active');
      else l.classList.remove('active');
    });
    
    switchView('home');
  });

  // Detail View Back button
  document.getElementById('detail-back-btn').onclick = () => {
    switchView('home');
  };

  // Launch Play Now Queue overlay trigger
  document.querySelectorAll('.play-now-trigger').forEach(btn => {
    btn.addEventListener('click', () => {
      openQueueModal();
    });
  });
  
  // Modal controllers
  modalElements.close.onclick = () => closeQueueModal();
  
  // Click overlay to close
  modalElements.overlay.addEventListener('click', (e) => {
    if (e.target === modalElements.overlay) {
      closeQueueModal();
    }
  });

  // Carousel clickers
  document.getElementById('carousel-prev').onclick = () => prevScreenshot();
  document.getElementById('carousel-next').onclick = () => nextScreenshot();

  // Quit simulated game play session
  document.getElementById('gameplay-quit-btn').onclick = () => {
    if (confirm('Are you sure you want to quit your stream sharing session? Your progress might not be saved.')) {
      switchView('details');
    }
  };

  // CPA Locker Link Action Trigger
  modalElements.btnCpaLocker.onclick = () => {
    launchCpaLocker();
  };

  // USER REQUEST BUTTON: "I will add my locker later"
  modalElements.btnLockerLater.onclick = () => {
    alert('Simulating queue bypass via locker. In production, embed your CPA Network locker link here (e.g., OGAds, CPABuild, AdWorkMedia). Starting game stream...');
    closeQueueModal();
    startGameplayStream();
  };
}
