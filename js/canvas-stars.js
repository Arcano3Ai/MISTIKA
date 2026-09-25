/**
 * Canvas de Constelaciones y Polvo Cósmico
 * Renderiza estrellas, líneas de constelación interconectadas y partículas reactivas al cursor.
 */
class StarryCosmos {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.stars = [];
    this.shootingStars = [];
    this.mouse = { x: -1000, y: -1000, radius: 140 };
    this.numStars = 90;

    this.init();
  }

  init() {
    this.resize();
    window.addEventListener('resize', () => this.resize());
    window.addEventListener('mousemove', (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
    });
    window.addEventListener('mouseleave', () => {
      this.mouse.x = -1000;
      this.mouse.y = -1000;
    });

    this.createStars();
    this.animate();
    this.scheduleShootingStars();
  }

  resize() {
    this.width = this.canvas.width = window.innerWidth;
    this.height = this.canvas.height = window.innerHeight;
    this.numStars = Math.floor((this.width * this.height) / 14000);
  }

  createStars() {
    this.stars = [];
    for (let i = 0; i < this.numStars; i++) {
      this.stars.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        radius: Math.random() * 1.6 + 0.4,
        baseAlpha: Math.random() * 0.7 + 0.3,
        alpha: Math.random() * 0.7 + 0.3,
        pulseSpeed: Math.random() * 0.02 + 0.005,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        color: Math.random() > 0.3 ? '#fde68a' : (Math.random() > 0.5 ? '#c084fc' : '#38bdf8')
      });
    }
  }

  scheduleShootingStars() {
    setInterval(() => {
      if (Math.random() > 0.4) {
        this.shootingStars.push({
          x: Math.random() * this.width * 0.8,
          y: Math.random() * (this.height * 0.4),
          len: Math.random() * 80 + 40,
          speed: Math.random() * 10 + 12,
          angle: Math.PI / 4 + (Math.random() - 0.5) * 0.2,
          life: 0,
          maxLife: 35
        });
      }
    }, 3800);
  }

  animate() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    // Dibujar y actualizar estrellas
    for (let i = 0; i < this.stars.length; i++) {
      const s = this.stars[i];

      s.x += s.vx;
      s.y += s.vy;

      if (s.x < 0) s.x = this.width;
      if (s.x > this.width) s.x = 0;
      if (s.y < 0) s.y = this.height;
      if (s.y > this.height) s.y = 0;

      s.alpha += Math.sin(Date.now() * s.pulseSpeed) * 0.006;
      const finalAlpha = Math.max(0.1, Math.min(1, s.alpha));

      // Reacción al cursor (ligera repulsión o aceleración sutil)
      const dx = this.mouse.x - s.x;
      const dy = this.mouse.y - s.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      let renderX = s.x;
      let renderY = s.y;

      if (dist < this.mouse.radius) {
        const force = (1 - dist / this.mouse.radius) * 12;
        renderX -= (dx / dist) * force;
        renderY -= (dy / dist) * force;
      }

      this.ctx.beginPath();
      this.ctx.arc(renderX, renderY, s.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = s.color;
      this.ctx.globalAlpha = finalAlpha;
      this.ctx.fill();

      // Conexiones de constelación
      for (let j = i + 1; j < this.stars.length; j++) {
        const s2 = this.stars[j];
        const distBetween = Math.hypot(s.x - s2.x, s.y - s2.y);
        if (distBetween < 95) {
          this.ctx.beginPath();
          this.ctx.moveTo(s.x, s.y);
          this.ctx.lineTo(s2.x, s2.y);
          this.ctx.strokeStyle = '#d4af37';
          this.ctx.globalAlpha = (1 - distBetween / 95) * 0.14;
          this.ctx.lineWidth = 0.6;
          this.ctx.stroke();
        }
      }
    }

    // Dibujar estrellas fugaces
    for (let k = this.shootingStars.length - 1; k >= 0; k--) {
      const ss = this.shootingStars[k];
      const endX = ss.x - Math.cos(ss.angle) * ss.len;
      const endY = ss.y - Math.sin(ss.angle) * ss.len;

      const grad = this.ctx.createLinearGradient(ss.x, ss.y, endX, endY);
      grad.addColorStop(0, 'rgba(253, 230, 138, 0.9)');
      grad.addColorStop(1, 'rgba(212, 175, 55, 0)');

      this.ctx.beginPath();
      this.ctx.moveTo(ss.x, ss.y);
      this.ctx.lineTo(endX, endY);
      this.ctx.strokeStyle = grad;
      this.ctx.lineWidth = 1.6;
      this.ctx.globalAlpha = 1 - ss.life / ss.maxLife;
      this.ctx.stroke();

      ss.x += Math.cos(ss.angle) * ss.speed;
      ss.y += Math.sin(ss.angle) * ss.speed;
      ss.life++;

      if (ss.life >= ss.maxLife) {
        this.shootingStars.splice(k, 1);
      }
    }

    this.ctx.globalAlpha = 1;
    requestAnimationFrame(() => this.animate());
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new StarryCosmos('stars-canvas');
});
