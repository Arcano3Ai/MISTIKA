/**
 * Controlador Principal de la Aplicación Mística
 */
document.addEventListener('DOMContentLoaded', () => {
  // Audio Ambient Toggle
  const audioToggleBtn = document.getElementById('audio-toggle-btn');
  const audioWave = document.querySelector('.audio-wave');
  const audioStatusText = document.getElementById('audio-status-text');

  if (audioToggleBtn) {
    audioToggleBtn.addEventListener('click', () => {
      const isPlaying = window.mysticAudio.toggle();
      if (isPlaying) {
        audioWave.classList.remove('paused');
        if (audioStatusText) audioStatusText.textContent = 'Música Sagrada (432Hz)';
      } else {
        audioWave.classList.add('paused');
        if (audioStatusText) audioStatusText.textContent = 'Silencio Etéreo';
      }
    });
  }

  // Interacciones en tarjetas de almas del Santuario
  const sanctuary = document.getElementById('sanctuary-section');
  if (sanctuary) {
    sanctuary.addEventListener('click', (e) => {
      const connectBtn = e.target.closest('.btn-soul-connect');
      const passBtn = e.target.closest('.btn-soul-pass');

      if (connectBtn) {
        const card = connectBtn.closest('.match-card');
        const soulName = card.querySelector('.match-name').textContent;
        connectBtn.innerHTML = `<span>✨ Hilo Rojo Entrelazado</span>`;
        connectBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
        connectBtn.style.color = '#fff';
        connectBtn.disabled = true;

        if (window.mysticAudio) window.mysticAudio.playChime('success');
        if (window.mysticOracle) {
          window.mysticOracle.showToast(`Has enviado una resonancia de alma a ${soulName}. Sincronizando destinos...`);
        }
      }

      if (passBtn) {
        const card = passBtn.closest('.match-card');
        card.style.transition = 'all 0.5s ease';
        card.style.opacity = '0';
        card.style.transform = 'scale(0.8) translateY(20px)';
        setTimeout(() => {
          card.remove();
        }, 500);

        if (window.mysticOracle) {
          window.mysticOracle.showToast(`Energía liberada en paz hacia el cosmos.`);
        }
      }
    });
  }
});
