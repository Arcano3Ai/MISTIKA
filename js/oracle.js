/**
 * Motor del Oráculo de Mística
 * Gestiona el ritual de las 3 Preguntas:
 * - Pregunta 1: Inteligencia Artificial (Arquetipo y Geometría Astral)
 * - Pregunta 2: Inteligencia Artificial (Paradoja Cuántica y Sincronicidad Emocional)
 * - Pregunta 3: Humana (Prueba de Latido, Vulnerabilidad Sensorial y Calidez)
 */
class MysticOracle {
  constructor() {
    this.currentStep = 1;
    this.answers = {
      q1: null,
      q2: null,
      q3: ''
    };

    this.initElements();
    this.bindEvents();
  }

  initElements() {
    this.overlay = document.getElementById('oracle-modal');
    this.closeBtn = document.getElementById('oracle-close-btn');
    this.openBtns = document.querySelectorAll('.trigger-oracle');
    this.nextBtn = document.getElementById('oracle-next-btn');
    this.backBtn = document.getElementById('oracle-back-btn');
    this.errorMsg = document.getElementById('oracle-error-msg');

    this.steps = [
      document.getElementById('oracle-stage-1'),
      document.getElementById('oracle-stage-2'),
      document.getElementById('oracle-stage-3'),
      document.getElementById('oracle-stage-evaluating'),
      document.getElementById('oracle-stage-verdict')
    ];

    this.stepIndicators = document.querySelectorAll('.step-item');
    this.humanTextarea = document.getElementById('human-answer-input');
    this.charCounter = document.getElementById('human-char-counter');
    this.enterSanctuaryBtn = document.getElementById('enter-sanctuary-btn');
  }

  bindEvents() {
    this.openBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        this.openModal();
      });
    });

    if (this.closeBtn) {
      this.closeBtn.addEventListener('click', () => this.closeModal());
    }

    if (this.nextBtn) {
      this.nextBtn.addEventListener('click', () => this.handleNext());
    }

    if (this.backBtn) {
      this.backBtn.addEventListener('click', () => this.handleBack());
    }

    // Opciones interactivas de Pregunta 1 y 2
    document.querySelectorAll('#oracle-stage-1 .option-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.selectOption(1, btn);
      });
    });

    document.querySelectorAll('#oracle-stage-2 .option-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.selectOption(2, btn);
      });
    });

    // Contador de caracteres para la pregunta humana
    if (this.humanTextarea) {
      this.humanTextarea.addEventListener('input', (e) => {
        const len = e.target.value.length;
        if (this.charCounter) {
          this.charCounter.textContent = `${len} / 25 min`;
          if (len >= 25) {
            this.charCounter.style.color = 'var(--emerald-aura)';
          } else {
            this.charCounter.style.color = 'var(--text-muted)';
          }
        }
        this.answers.q3 = e.target.value.trim();
        this.hideError();
      });
    }

    if (this.enterSanctuaryBtn) {
      this.enterSanctuaryBtn.addEventListener('click', () => {
        this.unlockSanctuary();
      });
    }
  }

  openModal() {
    this.overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    if (window.mysticAudio) {
      window.mysticAudio.playChime('normal');
    }
  }

  closeModal() {
    this.overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  selectOption(stageNum, btnElement) {
    const parent = btnElement.closest('.options-stack');
    parent.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
    btnElement.classList.add('selected');

    const value = btnElement.dataset.value;
    if (stageNum === 1) this.answers.q1 = value;
    if (stageNum === 2) this.answers.q2 = value;

    this.hideError();
    if (window.mysticAudio) {
      window.mysticAudio.playChime('normal');
    }
  }

  handleNext() {
    if (this.currentStep === 1) {
      if (!this.answers.q1) {
        this.showError('Por favor selecciona una orientación para que la IA calibre tu arquetipo.');
        return;
      }
      this.goToStep(2);
    } else if (this.currentStep === 2) {
      if (!this.answers.q2) {
        this.showError('La IA requiere discernir tu postura ante el destino antes de avanzar.');
        return;
      }
      this.goToStep(3);
    } else if (this.currentStep === 3) {
      if (!this.answers.q3 || this.answers.q3.length < 25) {
        this.showError('La prueba humana requiere al menos 25 caracteres para verificar latido y autenticidad real.');
        return;
      }
      this.runEvaluationRitual();
    }
  }

  handleBack() {
    if (this.currentStep > 1 && this.currentStep <= 3) {
      this.goToStep(this.currentStep - 1);
    }
  }

  goToStep(stepNumber) {
    this.currentStep = stepNumber;
    this.hideError();

    // Actualizar pantallas
    this.steps.forEach((stage, idx) => {
      if (idx === stepNumber - 1) {
        stage.classList.add('active');
      } else {
        stage.classList.remove('active');
      }
    });

    // Actualizar stepper
    this.stepIndicators.forEach((ind, idx) => {
      ind.classList.remove('active', 'completed');
      if (idx + 1 === stepNumber) {
        ind.classList.add('active');
      } else if (idx + 1 < stepNumber) {
        ind.classList.add('completed');
      }
    });

    // Visibilidad del botón Volver
    if (this.backBtn) {
      this.backBtn.style.visibility = stepNumber > 1 ? 'visible' : 'hidden';
    }

    // Texto del botón siguiente
    if (this.nextBtn) {
      if (stepNumber === 3) {
        this.nextBtn.innerHTML = `<span>Consagrar Prueba</span> <i class="fas fa-feather-alt"></i>`;
      } else {
        this.nextBtn.innerHTML = `<span>Continuar</span> <i class="fas fa-arrow-right"></i>`;
      }
    }

    if (window.mysticAudio) {
      window.mysticAudio.playChime(stepNumber === 3 ? 'human' : 'normal');
    }
  }

  runEvaluationRitual() {
    this.currentStep = 4;
    // Ocultar botones de navegación durante la evaluación
    document.querySelector('.oracle-footer').style.display = 'none';

    // Mostrar pantalla de evaluación
    this.steps.forEach(st => st.classList.remove('active'));
    const evalStage = document.getElementById('oracle-stage-evaluating');
    evalStage.classList.add('active');

    const statusDetail = document.getElementById('eval-detail-text');

    const sequence = [
      { text: 'Sincronizando con los núcleos de Inteligencia Artificial...', time: 1000 },
      { text: 'Decodificando tu resonancia arquetípica cósmica...', time: 2200 },
      { text: 'Auditando autenticidad del pulso de vulnerabilidad humana...', time: 3500 },
      { text: 'Convergencia aprobada. Consagrando acceso...', time: 4800 }
    ];

    sequence.forEach(item => {
      setTimeout(() => {
        if (statusDetail) statusDetail.textContent = item.text;
        if (window.mysticAudio) window.mysticAudio.playChime('normal');
      }, item.time);
    });

    setTimeout(() => {
      this.revealVerdict();
    }, 5500);
  }

  revealVerdict() {
    this.currentStep = 5;
    this.steps.forEach(st => st.classList.remove('active'));
    const verdictStage = document.getElementById('oracle-stage-verdict');
    verdictStage.classList.add('active');

    if (window.mysticAudio) {
      window.mysticAudio.playChime('success');
    }

    // Calcular sinastría inicial basada en las respuestas
    const scoreVal = document.getElementById('user-synastry-score');
    if (scoreVal) {
      scoreVal.textContent = '98.7%';
    }
  }

  unlockSanctuary() {
    this.closeModal();

    if (window.authOracle) {
      window.authOracle.completeOracleRegistration(this.answers);
    } else if (window.datingApp) {
      window.datingApp.showDatingApp();
    } else {
      const landingHero = document.getElementById('hero-section');
      const landingGates = document.getElementById('gates-preview-section');
      const sanctuarySection = document.getElementById('sanctuary-section');

      if (landingHero) landingHero.style.display = 'none';
      if (landingGates) landingGates.style.display = 'none';

      if (sanctuarySection) {
        sanctuarySection.classList.add('unlocked');
        sanctuarySection.scrollIntoView({ behavior: 'smooth' });
      }
    }

    // Desplegar Toast
    this.showToast('✨ Portal consagrado: Bienvenido a la aplicación de citas Mística.');
  }

  showError(msg) {
    if (this.errorMsg) {
      this.errorMsg.textContent = msg;
      this.errorMsg.classList.add('visible');
    }
  }

  hideError() {
    if (this.errorMsg) {
      this.errorMsg.classList.remove('visible');
    }
  }

  showToast(message) {
    let toast = document.querySelector('.soul-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'soul-toast';
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 4500);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.mysticOracle = new MysticOracle();
});
