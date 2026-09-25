/**
 * Audio Alquímico Procedural con Web Audio API
 * Genera un paisaje sonoro etéreo continuo a 432Hz y armónicos celestiales
 * sin depender de archivos de audio externos.
 */
class MysticAudio {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.masterGain = null;
    this.oscillators = [];
  }

  init() {
    if (this.ctx) return;
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    this.ctx = new AudioContext();

    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.setValueAtTime(0.08, this.ctx.currentTime);
    this.masterGain.connect(this.ctx.destination);
  }

  toggle() {
    if (!this.ctx) {
      this.init();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    if (this.isPlaying) {
      this.stopDrone();
      this.isPlaying = false;
    } else {
      this.startDrone();
      this.isPlaying = true;
    }
    return this.isPlaying;
  }

  startDrone() {
    if (!this.ctx) this.init();

    // Frecuencias basadas en afinación armónica sagrada (432Hz, 216Hz, 324Hz, 540Hz)
    const freqs = [108, 216, 324, 432, 648];

    this.oscillators = freqs.map((freq, index) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const panner = this.ctx.createStereoPanner ? this.ctx.createStereoPanner() : null;

      osc.type = index % 2 === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      // Leve variación lenta (detune cósmico)
      osc.detune.setValueAtTime((Math.random() - 0.5) * 8, this.ctx.currentTime);

      const amp = 0.04 / (index + 1);
      gain.gain.setValueAtTime(amp, this.ctx.currentTime);

      if (panner) {
        panner.pan.setValueAtTime((index / freqs.length) * 1.6 - 0.8, this.ctx.currentTime);
        osc.connect(gain);
        gain.connect(panner);
        panner.connect(this.masterGain);
      } else {
        osc.connect(gain);
        gain.connect(this.masterGain);
      }

      osc.start();
      return { osc, gain };
    });
  }

  stopDrone() {
    if (this.oscillators.length) {
      this.oscillators.forEach(({ osc, gain }) => {
        try {
          gain.gain.setTargetAtTime(0, this.ctx.currentTime, 0.5);
          setTimeout(() => osc.stop(), 500);
        } catch (e) {
          // ignore
        }
      });
      this.oscillators = [];
    }
  }

  // Tono ceremonial al responder o avanzar en el Oráculo
  playChime(type = 'normal') {
    if (!this.ctx) return;
    if (this.ctx.state === 'suspended') this.ctx.resume();

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    const baseFreq = type === 'success' ? 576 : (type === 'human' ? 480 : 432);
    osc.frequency.setValueAtTime(baseFreq, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(baseFreq * 1.5, this.ctx.currentTime + 1.2);

    gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 1.8);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start();
    osc.stop(this.ctx.currentTime + 1.8);
  }
}

window.mysticAudio = new MysticAudio();
