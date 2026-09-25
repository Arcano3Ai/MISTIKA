/**
 * Motor del Oráculo de Mística
 * - Pregunta 1: IA (Arquetipo y Geometría Astral) -> Auto-avance al seleccionar opción
 * - Pregunta 2: IA (Paradoja Cuántica y Sincronicidad) -> Auto-avance al seleccionar opción
 * - Pregunta 3: Humana (Prueba de Latido Sensorial) -> Chips de inspiración + validación
 * - Ritual de Evaluación Espectral y Consagración
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

    // Opciones de Pregunta 1 (IA)
    document.querySelectorAll('#oracle-stage-1 .option-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        this.selectOption(1, btn);
      });
    });

    // Opciones de Pregunta 2 (IA)
    document.querySelectorAll('#oracle-stage-2 .option-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        this.selectOption(2, btn);
      });
    });

    // Chips de inspiración para Pregunta 3 (Humana)
    document.querySelectorAll('.inspire-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const text = chip.dataset.prompt;
        if (this.humanTextarea && text) {
          this.humanTextarea.value = text;
          this.humanTextarea.dispatchEvent(new Event('input'));
          if (window.mysticAudio) window.mysticAudio.playChime('human');
        }
      });
    });

    // Contador de caracteres para la pregunta humana
    if (this.humanTextarea) {
      this.humanTextarea.addEventListener('input', (e) => {
        const len = e.target.value.length;
        if (this.charCounter) {
          this.charCounter.textContent = `${len} / 25 min`;
          if (len >= 25) {
            this.charCounter.style.color = 'var(--accent-green)';
            if (this.nextBtn) {
              this.nextBtn.style.boxShadow = '0 0 25px rgba(212, 175, 55, 0.6)';
            }
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
    if (!this.overlay) return;
    this.goToStep(1);
    this.overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    if (window.mysticAudio) {
      window.mysticAudio.playChime('normal');
    }
  }

  closeModal() {
    if (!this.overlay) return;
    this.overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  selectOption(stageNum, btnElement) {
    const parent = btnElement.closest('.options-stack');
    if (parent) {
      parent.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
    }
    btnElement.classList.add('selected');

    const value = btnElement.dataset.value;
    if (stageNum === 1) this.answers.q1 = value;
    if (stageNum === 2) this.answers.q2 = value;

    this.hideError();
    if (window.mysticAudio) {
      window.mysticAudio.playChime('normal');
    }

    // AUTO-AVANCE FLUIDO TRAS 300MS: Para que el usuario nunca se quede estancado
    setTimeout(() => {
      if (stageNum === 1 && this.currentStep === 1) {
        this.goToStep(2);
      } else if (stageNum === 2 && this.currentStep === 2) {
        this.goToStep(3);
      }
    }, 320);
  }

  handleNext() {
    if (this.currentStep === 1) {
      if (!this.answers.q1) {
        // Seleccionar por defecto la primera opción si pulsó continuar directamente
        const firstOption = document.querySelector('#oracle-stage-1 .option-btn');
        if (firstOption) {
          this.selectOption(1, firstOption);
          return;
        }
      }
      this.goToStep(2);
    } else if (this.currentStep === 2) {
      if (!this.answers.q2) {
        const firstOption = document.querySelector('#oracle-stage-2 .option-btn');
        if (firstOption) {
          this.selectOption(2, firstOption);
          return;
        }
      }
      this.goToStep(3);
    } else if (this.currentStep === 3) {
      if (!this.answers.q3 || this.answers.q3.length < 25) {
        this.showError('La prueba humana requiere al menos 25 caracteres para verificar latido real. Puedes tocar uno de los ejemplos.');
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

    // Actualizar pantallas visibles
    this.steps.forEach((stage, idx) => {
      if (stage) {
        if (idx === stepNumber - 1) {
          stage.classList.add('active');
        } else {
          stage.classList.remove('active');
        }
      }
    });

    // Actualizar indicadores del stepper
    this.stepIndicators.forEach((ind, idx) => {
      ind.classList.remove('active', 'completed');
      if (idx + 1 === stepNumber) {
        ind.classList.add('active');
      } else if (idx + 1 < stepNumber) {
        ind.classList.add('completed');
      }
    });

    // Scroll arriba en el modal para vista perfecta en celulares
    const sanctum = document.querySelector('.oracle-sanctum');
    if (sanctum) sanctum.scrollTop = 0;

    // Botón Volver
    if (this.backBtn) {
      this.backBtn.style.visibility = stepNumber > 1 ? 'visible' : 'hidden';
    }

    // Texto del botón siguiente
    if (this.nextBtn) {
      const footer = document.querySelector('.oracle-footer');
      if (footer) footer.style.display = 'flex';

      if (stepNumber === 1 || stepNumber === 2) {
        this.nextBtn.innerHTML = `<span>Siguiente Pregunta</span> <i class="fas fa-arrow-right"></i>`;
      } else if (stepNumber === 3) {
        this.nextBtn.innerHTML = `<span>Consagrar Prueba</span> <i class="fas fa-feather-alt"></i>`;
      }
    }

    if (window.mysticAudio) {
      window.mysticAudio.playChime(stepNumber === 3 ? 'human' : 'normal');
    }
  }

  runEvaluationRitual() {
    this.currentStep = 4;
    const footer = document.querySelector('.oracle-footer');
    if (footer) footer.style.display = 'none';

    this.steps.forEach(st => st && st.classList.remove('active'));
    const evalStage = document.getElementById('oracle-stage-evaluating');
    if (evalStage) evalStage.classList.add('active');

    const statusDetail = document.getElementById('eval-detail-text');

    const sequence = [
      { text: 'Sincronizando con los núcleos de Inteligencia Artificial...', time: 800 },
      { text: 'Decodificando tu resonancia arquetípica cósmica...', time: 1800 },
      { text: 'Auditando autenticidad del pulso de vulnerabilidad humana...', time: 3000 },
      { text: 'Convergencia aprobada. Consagrando perfil...', time: 4200 }
    ];

    sequence.forEach(item => {
      setTimeout(() => {
        if (statusDetail) statusDetail.textContent = item.text;
        if (window.mysticAudio) window.mysticAudio.playChime('normal');
      }, item.time);
    });

    setTimeout(() => {
      this.revealVerdict();
    }, 4800);
  }

  revealVerdict() {
    this.currentStep = 5;
    this.steps.forEach(st => st && st.classList.remove('active'));
    const verdictStage = document.getElementById('oracle-stage-verdict');
    if (verdictStage) verdictStage.classList.add('active');

    if (window.mysticAudio) {
      window.mysticAudio.playChime('success');
    }

    const scoreVal = document.getElementById('user-synastry-score');
    if (scoreVal) {
      scoreVal.textContent = '99.4%';
    }
  }

  unlockSanctuary() {
    this.closeModal();

    if (window.authOracle) {
      window.authOracle.completeOracleRegistration(this.answers);
    } else if (window.datingApp) {
      window.datingApp.showDatingApp();
    }

    this.showToast('✨ Portal consagrado: Bienvenido a MÍSTIKA Dating App.');
  }

  showError(msg) {
    if (this.errorMsg) {
      this.errorMsg.innerHTML = `<i class="fas fa-exclamation-circle"></i> <span>${msg}</span>`;
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
    }, 4000);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.mysticOracle = new MysticOracle();
});
