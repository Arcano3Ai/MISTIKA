/**
 * Módulo de la Interfaz Estándar de Citas de MÍSTIKA (Mobile & Desktop App)
 * - Navegación por Pestañas Móviles (Descubrir, Radar, Mensajes, Mi Perfil)
 * - Tarjetas Swipeables con gestos táctiles fluidos y sellos LIKE/NOPE/SUPER
 * - Carrusel estilo Historias (Story-bars) con toque en mitad izquierda/derecha
 * - Bottom Sheet Móvil de Detalle del Perfil con Desglose de Sinastría y Arcano
 * - Radar Cósmico con filtros de elementos (Fuego, Agua, Tierra, Aire)
 * - Celebración de Sincronía y Chat Móvil a pantalla completa
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
        synastryBreakdown: { mente: 95, espiritu: 99, pasion: 97, emocion: 98 },
        bio: "Amante del café amargo al amanecer, las librerías viejas y las charlas donde nadie finge. Busco a alguien que no tema navegar aguas profundas y compartir el silencio sagrado.",
        oraclePrompt: "El olor a lluvia sobre el pavimento caliente de agosto y el escalofrío de una mirada sincera en mitad de una multitud.",
        tarot: "La Sacerdotisa (Arcano II) — Intuición y Sabiduría Oculta",
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
        synastryBreakdown: { mente: 92, espiritu: 98, pasion: 99, emocion: 94 },
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
        synastryBreakdown: { mente: 99, espiritu: 94, pasion: 90, emocion: 95 },
        bio: "Astrofísica y herbolaria. Si me invitas a observar el paso de los cometas con un té de jazmín entre las manos, ya tienes la mitad de mi corazón.",
        oraclePrompt: "La brisa marina a las cinco de la mañana antes de que despierte la ciudad, sintiendo la sal en los labios.",
        tarot: "La Estrella (Arcano XVII) — Esperanza e Inspiración Pura",
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
        synastryBreakdown: { mente: 88, espiritu: 96, pasion: 92, emocion: 99 },
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
        synastryBreakdown: { mente: 97, espiritu: 91, pasion: 93, emocion: 90 },
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
    this.bindMobileTabs();
    this.bindProfileSheet();
    this.bindChatSystem();
    this.bindMatchModal();
    this.bindKeyboardShortcuts();
    this.bindRadarFilters();
  }

  showDatingApp() {
    const landing = document.getElementById('landing-wrapper');
    const mainLayout = document.getElementById('dating-app-main-layout');
    if (landing) landing.style.display = 'none';
    if (mainLayout) {
      mainLayout.classList.add('active');
      window.scrollTo(0, 0);
    }
  }

  showLandingPage() {
    const landing = document.getElementById('landing-wrapper');
    const mainLayout = document.getElementById('dating-app-main-layout');
    if (landing) landing.style.display = 'block';
    if (mainLayout) mainLayout.classList.remove('active');
  }

  /* -------------------------------------------------------------
     Navegación Móvil por Pestañas (Bottom Tabs)
     ------------------------------------------------------------- */
  bindMobileTabs() {
    const tabButtons = document.querySelectorAll('.m-tab-item');
    const viewPanes = document.querySelectorAll('.mobile-view-pane');

    tabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetView = btn.dataset.view;
        tabButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Quitar badge si entra a mensajes
        if (targetView === 'view-messages') {
          const badge = btn.querySelector('.m-tab-badge');
          if (badge) badge.remove();
        }

        viewPanes.forEach(pane => {
          if (pane.id === targetView) {
            pane.classList.add('active');
          } else {
            pane.classList.remove('active');
          }
        });

        if (window.mysticAudio) {
          window.mysticAudio.playChime('normal');
        }
      });
    });
  }

  /* -------------------------------------------------------------
     Renderizado del Mazo Móvil
     ------------------------------------------------------------- */
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
    card.className = 'mobile-swipe-card swipe-card';
    card.dataset.id = profile.id;

    if (!this.activePhotoIndices[profile.id]) {
      this.activePhotoIndices[profile.id] = 0;
    }
    const currentPhotoIdx = this.activePhotoIndices[profile.id];
    const currentPhoto = profile.images[currentPhotoIdx] || profile.images[0];

    const storyBarsHtml = profile.images.map((img, i) =>
      `<div class="story-bar ${i === currentPhotoIdx ? 'active' : ''}"></div>`
    ).join('');

    const pillsHtml = profile.tags.map(t => `<span class="mobile-pill">#${t}</span>`).join('');

    card.innerHTML = `
      <div class="card-media" style="position: absolute; top:0; left:0; width:100%; height:100%;">
        <img src="${currentPhoto}" alt="${profile.name}" class="card-img" />

        <!-- Story progress bars superiores -->
        <div class="card-story-progress">
          ${storyBarsHtml}
        </div>

        <!-- Tap zones para cambiar fotos -->
        <div class="card-tap-zone tap-left" title="Foto Anterior"></div>
        <div class="card-tap-zone tap-right" title="Siguiente Foto"></div>

        <!-- Pill de Sinastría Cósmica -->
        <div class="mobile-synastry-pill">
          <i class="fas fa-infinity"></i> ${profile.synastry}
        </div>

        <div class="swipe-stamp stamp-like">LIKE</div>
        <div class="swipe-stamp stamp-nope">NOPE</div>
        <div class="swipe-stamp stamp-super">SUPER</div>
      </div>

      <!-- Datos de Perfil Móvil -->
      <div class="mobile-card-details">
        <div class="mobile-name-row">
          <div class="mobile-card-name">
            ${profile.name} <span class="age">${profile.age}</span>
            <i class="fas fa-check-circle mobile-verified-icon" title="Humano Verificado por el Oráculo"></i>
          </div>
          <button class="btn-open-sheet-circle" title="Ver carta completa">
            <i class="fas fa-chevron-up"></i>
          </button>
        </div>

        <div class="mobile-astral-row">
          <span>${profile.astrology}</span> • <span>${profile.archetype}</span>
        </div>

        <!-- Cita Sensorial del Oráculo Humano -->
        <div class="mobile-human-quote-box">
          <span class="quote-tag"><i class="fas fa-heart"></i> Prueba Humana</span>
          "${profile.oraclePrompt}"
        </div>

        <div class="mobile-card-pills">
          ${pillsHtml}
        </div>
      </div>
    `;

    // Toque para cambiar fotos estilo Historias
    const tapLeft = card.querySelector('.tap-left');
    const tapRight = card.querySelector('.tap-right');

    tapLeft.addEventListener('click', (e) => {
      e.stopPropagation();
      if (currentPhotoIdx > 0) {
        this.activePhotoIndices[profile.id]--;
        this.renderDeck();
      }
    });

    tapRight.addEventListener('click', (e) => {
      e.stopPropagation();
      if (currentPhotoIdx < profile.images.length - 1) {
        this.activePhotoIndices[profile.id]++;
        this.renderDeck();
      }
    });

    // Abrir Bottom Sheet
    const openSheetBtn = card.querySelector('.btn-open-sheet-circle');
    if (openSheetBtn) {
      openSheetBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.openProfileSheet(profile);
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
        likeStamp.style.opacity = Math.min(1, (this.currentX - 30) / 60);
        nopeStamp.style.opacity = 0;
      } else if (this.currentX < -30) {
        nopeStamp.style.opacity = Math.min(1, Math.abs(this.currentX + 30) / 60);
        likeStamp.style.opacity = 0;
      } else if (this.currentY < -40) {
        if (superStamp) superStamp.style.opacity = Math.min(1, Math.abs(this.currentY + 40) / 60);
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

      const threshold = 95;
      if (this.currentX > threshold) {
        this.swipeAction('right', profile, card);
      } else if (this.currentX < -threshold) {
        this.swipeAction('left', profile, card);
      } else if (this.currentY < -110) {
        this.swipeAction('up', profile, card);
      } else {
        card.style.transform = 'translate(0, 0) rotate(0deg)';
        card.querySelectorAll('.swipe-stamp').forEach(s => s.style.opacity = 0);
      }
    };

    // Mouse
    card.addEventListener('mousedown', (e) => {
      if (e.target.closest('.card-tap-zone') || e.target.closest('.btn-open-sheet-circle')) return;
      onStart(e.clientX, e.clientY);
    });
    window.addEventListener('mousemove', (e) => onMove(e.clientX, e.clientY));
    window.addEventListener('mouseup', () => onEnd());

    // Touch
    card.addEventListener('touchstart', (e) => {
      if (e.target.closest('.card-tap-zone') || e.target.closest('.btn-open-sheet-circle')) return;
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
      flyX = 600;
      rotate = 25;
      if (window.mysticAudio) window.mysticAudio.playChime('success');
      this.history.push({ profile, action: 'like' });

      // Match con Valentina o Julián
      if (profile.id === 1 || profile.id === 2) {
        setTimeout(() => this.triggerMatchCelebration(profile), 350);
      }
    } else if (direction === 'left') {
      flyX = -600;
      rotate = -25;
      this.history.push({ profile, action: 'nope' });
    } else if (direction === 'up') {
      flyY = -700;
      rotate = 0;
      if (window.mysticAudio) window.mysticAudio.playChime('success');
      this.history.push({ profile, action: 'superlike' });
      setTimeout(() => this.triggerMatchCelebration(profile), 350);
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
        const topCard = document.querySelector('.mobile-card-stack .swipe-card:last-child');
        if (topCard && this.currentCardIndex < this.profiles.length) {
          this.swipeAction('left', this.profiles[this.currentCardIndex], topCard);
        }
      });
    }

    if (btnLike) {
      btnLike.addEventListener('click', () => {
        const topCard = document.querySelector('.mobile-card-stack .swipe-card:last-child');
        if (topCard && this.currentCardIndex < this.profiles.length) {
          this.swipeAction('right', this.profiles[this.currentCardIndex], topCard);
        }
      });
    }

    if (btnSuper) {
      btnSuper.addEventListener('click', () => {
        const topCard = document.querySelector('.mobile-card-stack .swipe-card:last-child');
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
          window.mysticOracle.showToast(`🔮 Sinastría Cósmica con ${currentProfile.name}: ${currentProfile.synastry} de afinidad.`);
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

  /* -------------------------------------------------------------
     Bottom Sheet Móvil (Detalles de Perfil y Sinastría)
     ------------------------------------------------------------- */
  bindProfileSheet() {
    const sheet = document.getElementById('mobile-profile-sheet');
    const closeBtn = document.getElementById('close-profile-sheet-btn');

    if (closeBtn && sheet) {
      closeBtn.addEventListener('click', () => {
        sheet.classList.remove('open');
      });
    }
  }

  openProfileSheet(profile) {
    const sheet = document.getElementById('mobile-profile-sheet');
    if (!sheet) return;

    document.getElementById('sheet-img').src = profile.images[0];
    document.getElementById('sheet-name-age').textContent = `${profile.name}, ${profile.age}`;
    document.getElementById('sheet-astrology').textContent = profile.astrology;
    document.getElementById('sheet-synastry-badge').textContent = `${profile.synastry} Sinastría`;
    document.getElementById('sheet-tarot-text').textContent = profile.tarot;
    document.getElementById('sheet-oracle-quote').textContent = `"${profile.oraclePrompt}"`;
    document.getElementById('sheet-bio-text').textContent = profile.bio;

    // Actualizar barras de desglose de sinastría
    const b = profile.synastryBreakdown || { mente: 95, espiritu: 98, pasion: 94, emocion: 97 };
    document.getElementById('bar-fill-mente').style.width = `${b.mente}%`;
    document.getElementById('val-mente').textContent = `${b.mente}%`;
    document.getElementById('bar-fill-espiritu').style.width = `${b.espiritu}%`;
    document.getElementById('val-espiritu').textContent = `${b.espiritu}%`;
    document.getElementById('bar-fill-pasion').style.width = `${b.pasion}%`;
    document.getElementById('val-pasion').textContent = `${b.pasion}%`;
    document.getElementById('bar-fill-emocion').style.width = `${b.emocion}%`;
    document.getElementById('val-emocion').textContent = `${b.emocion}%`;

    sheet.classList.add('open');
    if (window.mysticAudio) window.mysticAudio.playChime('normal');
  }

  /* -------------------------------------------------------------
     Filtros del Radar Cósmico
     ------------------------------------------------------------- */
  bindRadarFilters() {
    const filterBtns = document.querySelectorAll('.element-chip-btn');
    const cards = document.querySelectorAll('.m-radar-card');

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const elementFilter = btn.dataset.element;

        cards.forEach(card => {
          if (elementFilter === 'todos' || card.dataset.element === elementFilter) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        });

        if (window.mysticAudio) window.mysticAudio.playChime('normal');
      });
    });
  }

  /* -------------------------------------------------------------
     Celebración de Match
     ------------------------------------------------------------- */
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
        // Cambiar a pestaña de mensajes
        const msgTab = document.querySelector('[data-view="view-messages"]');
        if (msgTab) msgTab.click();
        this.openChatWith(this.profiles[0]);
      });
    }
  }

  /* -------------------------------------------------------------
     Sistema de Chat Móvil
     ------------------------------------------------------------- */
  bindChatSystem() {
    document.querySelectorAll('.chat-trigger, .m-story-bubble').forEach(item => {
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
            "✨ El hilo rojo vibró justo al leer tu mensaje. Qué sincronicidad tan hermosa.",
            "Me conmovió mucho tu respuesta en el Oráculo. ¿Cuándo contemplamos las estrellas con un buen café?",
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

  bindKeyboardShortcuts() {
    window.addEventListener('keydown', (e) => {
      if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;

      const topCard = document.querySelector('.mobile-card-stack .swipe-card:last-child');
      if (!topCard || this.currentCardIndex >= this.profiles.length) return;

      if (e.key === 'ArrowLeft') {
        this.swipeAction('left', this.profiles[this.currentCardIndex], topCard);
      } else if (e.key === 'ArrowRight') {
        this.swipeAction('right', this.profiles[this.currentCardIndex], topCard);
      } else if (e.key === 'ArrowUp') {
        this.swipeAction('up', this.profiles[this.currentCardIndex], topCard);
      } else if (e.key === ' ') {
        e.preventDefault();
        this.openProfileSheet(this.profiles[this.currentCardIndex]);
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.datingApp = new DatingAppManager();
});
