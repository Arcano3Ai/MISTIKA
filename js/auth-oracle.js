/**
 * Módulo de Autenticación y Onboarding de MÍSTIKA
 * Flujo:
 * 1. Formulario de Registro (Nombre, Email, Fecha de Nacimiento con cálculo automático del Signo Astral)
 * 2. PASO OBLIGATORIO: El Oráculo de 3 Preguntas (2 de IA + 1 Humana)
 * 3. Consagración y Acceso Directo al Feed de Citas de MÍSTIKA
 */

class AuthOracleManager {
  constructor() {
    this.currentUser = null;
    this.pendingRegistration = null;

    this.init();
  }

  init() {
    this.bindEvents();
    this.checkSession();
  }

  checkSession() {
    const saved = localStorage.getItem('mistika_user');
    if (saved) {
      try {
        this.currentUser = JSON.parse(saved);
        this.updateUserUI(this.currentUser);
      } catch (e) {
        localStorage.removeItem('mistika_user');
      }
    }
  }

  bindEvents() {
    // Botones de Abrir Modal de Auth
    document.querySelectorAll('.trigger-auth-modal').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const mode = btn.dataset.authMode || 'register';
        this.openAuthModal(mode);
      });
    });

    const closeBtn = document.getElementById('auth-close-btn');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => this.closeAuthModal());
    }

    // Tabs Login vs Registro
    const tabLogin = document.getElementById('tab-btn-login');
    const tabRegister = document.getElementById('tab-btn-register');
    const formLogin = document.getElementById('form-login-pane');
    const formRegister = document.getElementById('form-register-pane');

    if (tabLogin && tabRegister) {
      tabLogin.addEventListener('click', () => {
        tabLogin.classList.add('active');
        tabRegister.classList.remove('active');
        formLogin.style.display = 'block';
        formRegister.style.display = 'none';
      });

      tabRegister.addEventListener('click', () => {
        tabRegister.classList.add('active');
        tabLogin.classList.remove('active');
        formLogin.style.display = 'none';
        formRegister.style.display = 'block';
      });
    }

    // Cálculo reactivo del signo zodiacal según la fecha de nacimiento
    const birthInput = document.getElementById('reg-birthdate');
    const zodiacChip = document.getElementById('reg-zodiac-chip');
    if (birthInput && zodiacChip) {
      birthInput.addEventListener('change', (e) => {
        const dateVal = e.target.value;
        if (dateVal) {
          const sign = this.calculateZodiacSign(new Date(dateVal));
          zodiacChip.innerHTML = `<i class="fas fa-star-and-crescent"></i> Signo Solar: <strong>${sign}</strong>`;
          zodiacChip.style.display = 'inline-flex';
        }
      });
    }

    // Envío del Formulario de Registro -> DESATA EL ORÁCULO
    const registerForm = document.getElementById('auth-register-form');
    if (registerForm) {
      registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleRegisterSubmit();
      });
    }

    // Envío del Formulario de Login
    const loginForm = document.getElementById('auth-login-form');
    if (loginForm) {
      loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleLoginSubmit();
      });
    }

    // Botón de Cerrar Sesión
    const logoutBtn = document.getElementById('btn-profile-logout');
    if (logoutBtn) {
      logoutBtn.addEventListener('click', () => {
        this.logout();
      });
    }
  }

  openAuthModal(mode = 'register') {
    const overlay = document.getElementById('auth-modal');
    if (!overlay) return;

    overlay.classList.add('active');

    const tabLogin = document.getElementById('tab-btn-login');
    const tabRegister = document.getElementById('tab-btn-register');
    const formLogin = document.getElementById('form-login-pane');
    const formRegister = document.getElementById('form-register-pane');

    if (mode === 'login') {
      if (tabLogin) tabLogin.click();
    } else {
      if (tabRegister) tabRegister.click();
    }
  }

  closeAuthModal() {
    const overlay = document.getElementById('auth-modal');
    if (overlay) overlay.classList.remove('active');
  }

  calculateZodiacSign(date) {
    const month = date.getUTCMonth() + 1;
    const day = date.getUTCDate();

    if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) return "Aries ♈";
    if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) return "Tauro ♉";
    if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) return "Géminis ♊";
    if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) return "Cáncer ♋";
    if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) return "Leo ♌";
    if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) return "Virgo ♍";
    if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) return "Libra ♎";
    if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) return "Escorpio ♏";
    if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) return "Sagitario ♐";
    if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) return "Capricornio ♑";
    if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) return "Acuario ♒";
    return "Piscis ♓";
  }

  handleRegisterSubmit() {
    const name = document.getElementById('reg-name').value.trim();
    const email = document.getElementById('reg-email').value.trim();
    const birthVal = document.getElementById('reg-birthdate').value;
    const seeking = document.getElementById('reg-seeking').value;

    if (!name || !email || !birthVal) {
      alert('Por favor completa todos tus datos astrales.');
      return;
    }

    const birthDate = new Date(birthVal);
    const zodiacSign = this.calculateZodiacSign(birthDate);

    // Guardar temporalmente datos de registro pendientes de consagración
    this.pendingRegistration = {
      name,
      email,
      zodiacSign,
      seeking,
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=400&q=80',
      archetype: 'Arquetipo Alquimista',
      verified: false
    };

    // Cerrar modal de registro y abrir INMEDIATAMENTE el Oráculo
    this.closeAuthModal();

    if (window.mysticOracle) {
      window.mysticOracle.openModal();
      window.mysticOracle.showToast(`✨ Iniciando consagración del Oráculo para ${name}...`);
    }
  }

  handleLoginSubmit() {
    const email = document.getElementById('login-email').value.trim();
    if (!email) {
      alert('Ingresa tu correo o llave cósmica.');
      return;
    }

    // Login rápido para usuario ya consagrado
    this.currentUser = {
      name: email.split('@')[0] || 'Iniciado',
      email: email,
      zodiacSign: 'Escorpio ♏',
      seeking: 'Almas Afines',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=400&q=80',
      archetype: 'Arquetipo Alquimista',
      verified: true
    };

    localStorage.setItem('mistika_user', JSON.stringify(this.currentUser));
    this.updateUserUI(this.currentUser);
    this.closeAuthModal();

    // Acceso directo a la app de citas
    if (window.datingApp) {
      window.datingApp.showDatingApp();
    }
  }

  completeOracleRegistration(oracleAnswers) {
    if (!this.pendingRegistration) {
      this.pendingRegistration = {
        name: 'Iniciado Alquímico',
        zodiacSign: 'Escorpio ♏',
        archetype: 'Alquimia y Frecuencia Solar',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=400&q=80'
      };
    }

    this.currentUser = {
      ...this.pendingRegistration,
      oracleAnswers: oracleAnswers,
      verified: true,
      synastryScore: '98.7%'
    };

    localStorage.setItem('mistika_user', JSON.stringify(this.currentUser));
    this.updateUserUI(this.currentUser);

    // Desplegar la app de citas completa
    if (window.datingApp) {
      window.datingApp.showDatingApp();
    }
  }

  updateUserUI(user) {
    // Actualizar nombres y avatares en la barra lateral de la app
    const sidebarName = document.querySelector('.sidebar-user-name');
    if (sidebarName) {
      sidebarName.innerHTML = `${user.name} <i class="fas fa-check-circle sidebar-user-badge" title="Humano Verificado"></i>`;
    }

    const profileName = document.querySelector('.profile-name');
    if (profileName) {
      profileName.textContent = user.name;
    }
  }

  logout() {
    localStorage.removeItem('mistika_user');
    this.currentUser = null;
    this.pendingRegistration = null;

    if (window.datingApp) {
      window.datingApp.showLandingPage();
    }
    if (window.mysticOracle) {
      window.mysticOracle.showToast('Sesión cerrada. Regresando al portal místico.');
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.authOracle = new AuthOracleManager();
});
