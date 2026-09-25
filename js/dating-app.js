/**
 * Módulo de la Interfaz Estándar de Citas de MÍSTIKA (Desktop 2-Column & Mobile)
 * Controla:
 * - Pila de tarjetas swipeables con física táctil y arrastre de ratón
 * - Carrusel de fotos interactivo en cada perfil
 * - Panel lateral de Sincronías (Matches) y Chats en tiempo real
 * - Drawer expandible de perfil con Carta Natal y Carta del Tarot
 * - Atajos de teclado (← Pass, → Like, ↑ Superlike, Espacio Info)
 * - Celebración de Match ("¡Es una Sincronía!")
 */

class DatingAppManager {
  constructor() {
    this.profiles = [
      {
        id: 1,
        name: "Valentina",
        age: 28,
        astrology: "♏ Escorpio • 🌙 Luna en Piscis",
        distance: "A 3 km • Colonia Roma",
        archetype: "La Guardiana del Misterio",
        synastry: "99.2%",
        bio: "Amante del café amargo al amanecer, las librerías viejas y las charlas donde nadie finge. Busco a alguien que no tema navegar aguas profundas y compartir el silencio sagrado.",
        oraclePrompt: "El olor a lluvia sobre el pavimento caliente de agosto y el escalofrío de una mirada sincera en mitad de una multitud.",
        tarot: "La Sacerdotisa (Arcano II) — Intuición, Sabiduría Oculta",
        element: "Agua",
        tags: ["Tarot", "Filosofía", "Vino Tinto", "Fotografía Analógica"],
        images: [
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80"
        ]
      },
      {
        id: 2,
        name: "Julián",
        age: 31,
        astrology: "♌ Leo • 🏹 Ascendente Sagitario",
        distance: "A 5 km • Condesa",
        archetype: "El Arquitecto del Fuego",
        synastry: "97.8%",
        bio: "Compositor acústico y apasionado del senderismo nocturno. Mi mayor anhelo es construir una complicidad donde la libertad mutua sea nuestro mayor lazo.",
        oraclePrompt: "El calor de la leña en una chimenea tras una caminata en la montaña mientras toco acordes con los dedos fríos.",
        tarot: "El Sol (Arcano XIX) — Vitalidad, Verdad y Claridad",
        element: "Fuego",
        tags: ["Música 432Hz", "Senderismo", "Poesía", "Constelaciones"],
        images: [
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80"
        ]
      },
      {
        id: 3,
        name: "Aria",
        age: 29,
        astrology: "♒ Acuario • ♉ Ascendente Tauro",
        distance: "A 7 km • Coyoacán",
        archetype: "La Tejedora Cuántica",
        synastry: "96.5%",
        bio: "Astrofísica y herbolaria. Si me invitas a observar el paso de los cometas con un té de jazmín entre las manos, ya tienes la mitad de mi corazón.",
        oraclePrompt: "La brisa marina a las cinco de la mañana antes de que despierte la ciudad, sintiendo la sal en los labios.",
        tarot: "La Estrella (Arcano XVII) — Esperanza, Inspiración Pura",
        element: "Aire",
        tags: ["Cosmología", "Botánica", "Cerámica", "Té Verde"],
        images: [
          "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80"
        ]
      },
      {
        id: 4,
        name: "Mateo",
        age: 30,
        astrology: "♓ Piscis • ♋ Luna en Cáncer",
        distance: "A 4 km • Polanco",
        archetype: "El Navegante Etéreo",
        synastry: "95.1%",
        bio: "Arquitecto de espacios bioclimáticos y buceador libre. Para mí el silencio compartido no es incómodo, es el hogar del alma.",
        oraclePrompt: "Sumergir la cabeza en el agua salada y escuchar el latido sordo del propio corazón en calma absoluta.",
        tarot: "El Ermitaño (Arcano IX) — Introspección y Búsqueda",
        element: "Agua",
        tags: ["Arquitectura", "Apnea", "Piano", "Meditación"],
        images: [
          "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80"
        ]
      },
      {
        id: 5,
        name: "Lucía",
        age: 27,
        astrology: "♎ Libra • ♊ Ascendente Géminis",
        distance: "A 2 km • Juárez",
        archetype: "La Alquimista del Viento",
        synastry: "94.3%",
        bio: "Curadora de arte contemporáneo y coleccionista de vinilos de jazz. Busco una mente despierta con quien debatir hasta el amanecer.",
        oraclePrompt: "El roce de una bufanda de lana suave en el cuello mientras el viento otoñal despeina mi pelo en la terraza.",
        tarot: "La Templanza (Arcano XIV) — Armonía y Alquimia Interior",
        element: "Aire",
        tags: ["Arte", "Vinilos", "Jazz", "Museos"],
        images: [
          "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80"
        ]
      }
    ];

    this.currentCardIndex = 0;
    this.history = [];
    this.activePhotoIndices = {};

    this.init();
  }

  init() {
    this.renderDeck();
    this.bindActionButtons();
    this.bindSidebarSubtabs();
    this.bindProfileDrawer();
    this.bindChatSystem();
    this.bindMatchModal();
    this.bindKeyboardShortcuts();
  }

  showDatingApp() {
    const landing = document.getElementById('landing-wrapper');
    const mainLayout = document.getElementById('dating-app-main-layout');
    if (landing) landing.style.display = 'none';
    if (mainLayout) {
      mainLayout.classList.add('active');
    }
  }

  showLandingPage() {
    const landing = document.getElementById('landing-wrapper');
    const mainLayout = document.getElementById('dating-app-main-layout');
    if (landing) landing.style.display = 'block';
    if (mainLayout) mainLayout.classList.remove('active');
  }

  renderDeck() {
    const stackContainer = document.getElementById('card-stack-container');
    const emptyState = document.getElementById('deck-empty-state');
    if (!stackContainer) return;

    stackContainer.innerHTML = '';

    if (this.currentCardIndex >= this.profiles.length) {
      if (emptyState) emptyState.classList.add('active');
      return;
    } else {
      if (emptyState) emptyState.classList.remove('active');
    }

    const visibleProfiles = this.profiles.slice(this.currentCardIndex, this.currentCardIndex + 3).reverse();

    visibleProfiles.forEach((profile, idx) => {
      const card = this.createCardElement(profile);
      stackContainer.appendChild(card);

      if (idx === visibleProfiles.length - 1) {
        this.setupDragEvents(card, profile);
      }
    });
  }

  createCardElement(profile) {
    const card = document.createElement('div');
    card.className = 'swipe-card';
    card.dataset.id = profile.id;

    if (!this.activePhotoIndices[profile.id]) {
      this.activePhotoIndices[profile.id] = 0;
    }
    const currentPhotoIdx = this.activePhotoIndices[profile.id];
    const currentPhoto = profile.images[currentPhotoIdx] || profile.images[0];

    const dotsHtml = profile.images.map((img, i) =>
      `<span class="photo-dot ${i === currentPhotoIdx ? 'active' : ''}"></span>`
    ).join('');

    const tagsHtml = profile.tags.map(t => `<span class="card-tag-pill">#${t}</span>`).join('');

    card.innerHTML = `
      <div class="card-media">
        <img src="${currentPhoto}" alt="${profile.name}" class="card-img" />
        <div class="card-photo-indicators">
          ${dotsHtml}
        </div>
        <div class="card-synastry-pill">
          <i class="fas fa-infinity"></i> ${profile.synastry}
        </div>
        <div class="swipe-stamp stamp-like">LIKE</div>
        <div class="swipe-stamp stamp-nope">NOPE</div>
        <div class="swipe-stamp stamp-super">SUPER</div>
      </div>
      <div class="card-overlay"></div>
      <div class="card-details">
        <div class="card-name-row">
          <h2 class="card-name">${profile.name}, ${profile.age}</h2>
          <i class="fas fa-check-circle card-verified-badge" title="Humano Verificado por el Oráculo"></i>
          <span class="card-human-verified"><i class="fas fa-heart"></i> Humano</span>
          <button class="app-icon-btn btn-open-drawer" style="margin-left: auto; width: 32px; height: 32px;" title="Ver Perfil Completo">
            <i class="fas fa-info" style="font-size: 0.8rem;"></i>
          </button>
        </div>
        <div class="card-astral-info">
          <span>${profile.astrology}</span> • <span>${profile.archetype}</span>
        </div>
        <div class="card-distance">
          <i class="fas fa-map-marker-alt"></i> ${profile.distance}
        </div>
        <div class="card-oracle-quote">
          "${profile.oraclePrompt}"
        </div>
        <div class="card-tags">
          ${tagsHtml}
        </div>
      </div>
    `;

    // Click en la foto para cambiar imagen (izq / der)
    const mediaEl = card.querySelector('.card-media');
    mediaEl.addEventListener('click', (e) => {
      // Ignorar si arrastró
      if (Math.abs(this.currentX) > 10) return;
      const rect = mediaEl.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      if (clickX > rect.width / 2) {
        // Siguiente foto
        if (currentPhotoIdx < profile.images.length - 1) {
          this.activePhotoIndices[profile.id]++;
          this.renderDeck();
        }
      } else {
        // Foto previa
        if (currentPhotoIdx > 0) {
          this.activePhotoIndices[profile.id]--;
          this.renderDeck();
        }
      }
    });

    // Abrir Drawer de Detalles
    const infoBtn = card.querySelector('.btn-open-drawer');
    if (infoBtn) {
      infoBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.openProfileDrawer(profile);
      });
    }

    return card;
  }

  setupDragEvents(card, profile) {
    this.isDragging = false;
    this.startX = 0;
    this.startY = 0;
    this.currentX = 0;
    this.currentY = 0;

    const onStart = (clientX, clientY) => {
      this.isDragging = true;
      this.startX = clientX;
      this.startY = clientY;
      card.style.transition = 'none';
    };

    const onMove = (clientX, clientY) => {
      if (!this.isDragging) return;
      this.currentX = clientX - this.startX;
      this.currentY = clientY - this.startY;

      const rotate = this.currentX * 0.08;
      card.style.transform = `translate(${this.currentX}px, ${this.currentY}px) rotate(${rotate}deg)`;

      const likeStamp = card.querySelector('.stamp-like');
      const nopeStamp = card.querySelector('.stamp-nope');
      const superStamp = card.querySelector('.stamp-super');

      if (this.currentX > 30) {
        likeStamp.style.opacity = Math.min(1, (this.currentX - 30) / 70);
        nopeStamp.style.opacity = 0;
      } else if (this.currentX < -30) {
        nopeStamp.style.opacity = Math.min(1, Math.abs(this.currentX + 30) / 70);
        likeStamp.style.opacity = 0;
      } else if (this.currentY < -40) {
        if (superStamp) superStamp.style.opacity = Math.min(1, Math.abs(this.currentY + 40) / 70);
      } else {
        likeStamp.style.opacity = 0;
        nopeStamp.style.opacity = 0;
        if (superStamp) superStamp.style.opacity = 0;
      }
    };

    const onEnd = () => {
      if (!this.isDragging) return;
      this.isDragging = false;
      card.style.transition = 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.35s ease';

      const threshold = 110;
      if (this.currentX > threshold) {
        this.swipeAction('right', profile, card);
      } else if (this.currentX < -threshold) {
        this.swipeAction('left', profile, card);
      } else if (this.currentY < -120) {
        this.swipeAction('up', profile, card);
      } else {
        card.style.transform = 'translate(0, 0) rotate(0deg)';
        card.querySelectorAll('.swipe-stamp').forEach(s => s.style.opacity = 0);
      }
    };

    card.addEventListener('mousedown', (e) => {
      if (e.target.closest('.btn-open-drawer')) return;
      onStart(e.clientX, e.clientY);
    });
    window.addEventListener('mousemove', (e) => onMove(e.clientX, e.clientY));
    window.addEventListener('mouseup', () => onEnd());

    card.addEventListener('touchstart', (e) => {
      if (e.target.closest('.btn-open-drawer')) return;
      onStart(e.touches[0].clientX, e.touches[0].clientY);
    }, { passive: true });
    window.addEventListener('touchmove', (e) => {
      if (this.isDragging && e.touches.length) onMove(e.touches[0].clientX, e.touches[0].clientY);
    }, { passive: true });
    window.addEventListener('touchend', () => onEnd());
  }

  swipeAction(direction, profile, cardElement) {
    let flyX = 0;
    let flyY = 0;
    let rotate = 0;

    if (direction === 'right') {
      flyX = 650;
      rotate = 25;
      if (window.mysticAudio) window.mysticAudio.playChime('success');
      this.history.push({ profile, action: 'like' });

      // Match con Valentina o Julián
      if (profile.id === 1 || profile.id === 2) {
        setTimeout(() => this.triggerMatchCelebration(profile), 400);
      }
    } else if (direction === 'left') {
      flyX = -650;
      rotate = -25;
      this.history.push({ profile, action: 'nope' });
    } else if (direction === 'up') {
      flyY = -750;
      rotate = 0;
      if (window.mysticAudio) window.mysticAudio.playChime('success');
      this.history.push({ profile, action: 'superlike' });
      setTimeout(() => this.triggerMatchCelebration(profile), 400);
    }

    cardElement.style.transform = `translate(${flyX}px, ${flyY}px) rotate(${rotate}deg)`;
    cardElement.style.opacity = '0';

    setTimeout(() => {
      this.currentCardIndex++;
      this.renderDeck();
    }, 280);
  }

  bindActionButtons() {
    const btnNope = document.getElementById('action-btn-nope');
    const btnLike = document.getElementById('action-btn-like');
    const btnSuper = document.getElementById('action-btn-super');
    const btnRewind = document.getElementById('action-btn-rewind');
    const btnOracle = document.getElementById('action-btn-oracle');
    const btnReload = document.getElementById('btn-deck-reload');

    if (btnNope) {
      btnNope.addEventListener('click', () => {
        const topCard = document.querySelector('.card-stack-container .swipe-card:last-child');
        if (topCard && this.currentCardIndex < this.profiles.length) {
          this.swipeAction('left', this.profiles[this.currentCardIndex], topCard);
        }
      });
    }

    if (btnLike) {
      btnLike.addEventListener('click', () => {
        const topCard = document.querySelector('.card-stack-container .swipe-card:last-child');
        if (topCard && this.currentCardIndex < this.profiles.length) {
          this.swipeAction('right', this.profiles[this.currentCardIndex], topCard);
        }
      });
    }

    if (btnSuper) {
      btnSuper.addEventListener('click', () => {
        const topCard = document.querySelector('.card-stack-container .swipe-card:last-child');
        if (topCard && this.currentCardIndex < this.profiles.length) {
          this.swipeAction('up', this.profiles[this.currentCardIndex], topCard);
        }
      });
    }

    if (btnRewind) {
      btnRewind.addEventListener('click', () => {
        if (this.history.length > 0) {
          this.history.pop();
          this.currentCardIndex = Math.max(0, this.currentCardIndex - 1);
          this.renderDeck();
          if (window.mysticAudio) window.mysticAudio.playChime('normal');
        }
      });
    }

    if (btnOracle) {
      btnOracle.addEventListener('click', () => {
        const currentProfile = this.profiles[this.currentCardIndex];
        if (currentProfile && window.mysticOracle) {
          window.mysticOracle.showToast(`🔮 Sinastría Cósmica con ${currentProfile.name}: 99.2% de afinidad astral.`);
        }
      });
    }

    if (btnReload) {
      btnReload.addEventListener('click', () => {
        this.currentCardIndex = 0;
        this.history = [];
        this.renderDeck();
      });
    }
  }

  bindSidebarSubtabs() {
    const tabMatches = document.getElementById('subtab-matches');
    const tabChats = document.getElementById('subtab-chats');
    const sectionMatches = document.getElementById('sidebar-section-matches');
    const sectionChats = document.getElementById('sidebar-section-chats');

    if (tabMatches && tabChats) {
      tabMatches.addEventListener('click', () => {
        tabMatches.classList.add('active');
        tabChats.classList.remove('active');
        if (sectionMatches) sectionMatches.style.display = 'block';
        if (sectionChats) sectionChats.style.display = 'none';
      });

      tabChats.addEventListener('click', () => {
        tabChats.classList.add('active');
        tabMatches.classList.remove('active');
        if (sectionMatches) sectionMatches.style.display = 'none';
        if (sectionChats) sectionChats.style.display = 'block';
      });
    }
  }

  bindProfileDrawer() {
    const drawer = document.getElementById('profile-detail-drawer');
    const closeBtn = document.getElementById('close-drawer-btn');

    if (closeBtn && drawer) {
      closeBtn.addEventListener('click', () => {
        drawer.classList.remove('open');
      });
    }
  }

  openProfileDrawer(profile) {
    const drawer = document.getElementById('profile-detail-drawer');
    if (!drawer) return;

    document.getElementById('drawer-name-age').textContent = `${profile.name}, ${profile.age}`;
    document.getElementById('drawer-astrology').textContent = profile.astrology;
    document.getElementById('drawer-synastry').textContent = `${profile.synastry} de Sinastría`;
    document.getElementById('drawer-img').src = profile.images[0];
    document.getElementById('drawer-bio').textContent = profile.bio;
    document.getElementById('drawer-oracle-text').textContent = `"${profile.oraclePrompt}"`;
    document.getElementById('drawer-tarot-text').textContent = profile.tarot;

    drawer.classList.add('open');
    if (window.mysticAudio) window.mysticAudio.playChime('normal');
  }

  bindKeyboardShortcuts() {
    window.addEventListener('keydown', (e) => {
      // Ignorar si está escribiendo en un input
      if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;

      const topCard = document.querySelector('.card-stack-container .swipe-card:last-child');
      if (!topCard || this.currentCardIndex >= this.profiles.length) return;

      if (e.key === 'ArrowLeft') {
        this.swipeAction('left', this.profiles[this.currentCardIndex], topCard);
      } else if (e.key === 'ArrowRight') {
        this.swipeAction('right', this.profiles[this.currentCardIndex], topCard);
      } else if (e.key === 'ArrowUp') {
        this.swipeAction('up', this.profiles[this.currentCardIndex], topCard);
      } else if (e.key === ' ') {
        e.preventDefault();
        this.openProfileDrawer(this.profiles[this.currentCardIndex]);
      }
    });
  }

  triggerMatchCelebration(profile) {
    const modal = document.getElementById('match-celebration-modal');
    const matchAvatar = document.getElementById('match-target-avatar');
    const matchName = document.getElementById('match-target-name');

    if (!modal) return;
    if (matchAvatar) matchAvatar.src = profile.images[0];
    if (matchName) matchName.textContent = profile.name;

    modal.classList.add('active');
    if (window.mysticAudio) window.mysticAudio.playChime('success');
  }

  bindMatchModal() {
    const modal = document.getElementById('match-celebration-modal');
    const keepPlayingBtn = document.getElementById('btn-keep-swiping');
    const startChatBtn = document.getElementById('btn-match-start-chat');

    if (keepPlayingBtn && modal) {
      keepPlayingBtn.addEventListener('click', () => {
        modal.classList.remove('active');
      });
    }

    if (startChatBtn && modal) {
      startChatBtn.addEventListener('click', () => {
        modal.classList.remove('active');
        this.openChatWith(this.profiles[0]);
      });
    }
  }

  bindChatSystem() {
    document.querySelectorAll('.sidebar-chat-item, .sidebar-match-card').forEach(item => {
      item.addEventListener('click', () => {
        const targetId = parseInt(item.dataset.id || '1');
        const profile = this.profiles.find(p => p.id === targetId) || this.profiles[0];
        this.openChatWith(profile);
      });
    });

    const closeChatBtn = document.getElementById('close-chat-btn');
    const chatOverlay = document.getElementById('chat-screen-overlay');
    if (closeChatBtn && chatOverlay) {
      closeChatBtn.addEventListener('click', () => {
        chatOverlay.classList.remove('open');
      });
    }

    const chatForm = document.getElementById('chat-send-form');
    const chatInput = document.getElementById('chat-msg-input');
    const chatBody = document.getElementById('chat-body-messages');

    if (chatForm && chatInput && chatBody) {
      chatForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const text = chatInput.value.trim();
        if (!text) return;

        const sentBubble = document.createElement('div');
        sentBubble.className = 'chat-bubble sent';
        sentBubble.textContent = text;
        chatBody.appendChild(sentBubble);

        chatInput.value = '';
        chatBody.scrollTop = chatBody.scrollHeight;

        if (window.mysticAudio) window.mysticAudio.playChime('normal');

        setTimeout(() => {
          const replyBubble = document.createElement('div');
          replyBubble.className = 'chat-bubble received';
          const replies = [
            "✨ El hilo rojo vibró justo al leer tu mensaje. Qué increíble sincronicidad cósmica.",
            "Me resonó mucho tu respuesta en el Oráculo humano. ¿Cuándo contemplamos las estrellas con un buen café?",
            "Siento que nuestras cartas natales estaban destinadas a cruzarse en este momento exacto."
          ];
          replyBubble.textContent = replies[Math.floor(Math.random() * replies.length)];
          chatBody.appendChild(replyBubble);
          chatBody.scrollTop = chatBody.scrollHeight;

          if (window.mysticAudio) window.mysticAudio.playChime('success');
        }, 1200);
      });
    }
  }

  openChatWith(profile) {
    const chatOverlay = document.getElementById('chat-screen-overlay');
    const chatTitle = document.getElementById('chat-active-name');
    const chatAvatar = document.getElementById('chat-active-avatar');
    if (!chatOverlay) return;

    if (chatTitle) chatTitle.textContent = `${profile.name}, ${profile.age}`;
    if (chatAvatar) chatAvatar.src = profile.images[0];

    chatOverlay.classList.add('open');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.datingApp = new DatingAppManager();
});
