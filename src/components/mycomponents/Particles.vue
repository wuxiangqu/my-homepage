<template>
  <div class="particles-box">
    <canvas ref="canvas" id="particles-canvas"></canvas>
  </div>
</template>

<script>
class Particle {
  constructor(options) {
    this.canvas = options.canvas;
    this.context = options.context;
    this.x = options.x;
    this.y = options.y;
    this.vx = options.vx;
    this.vy = options.vy;
    this.radius = options.radius;
    this.color = options.color;
  }
  draw() {
    this.context.save();
    this.context.fillStyle = this.color;
    this.context.beginPath();
    this.context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    this.context.fill();
    this.context.restore();
  }
  animate() {
    let width = this.canvas.width;
    let height = this.canvas.height;
    if (this.x - this.radius < 0) {
      this.vx = Math.abs(this.vx);
    }
    if (this.x + this.radius > width) {
      this.vx = -Math.abs(this.vx);
    }
    if (this.y - this.radius < 0) {
      this.vy = Math.abs(this.vy);
    }
    if (this.y + this.radius > height) {
      this.vy = -Math.abs(this.vy);
    }
    this.x += this.vx;
    this.y += this.vy;
  }
}
export default {
  props: {
    particleRadius: {
      type: Number,
      default: 2,
      required: true
    },
    particleSpeed: {
      type: Number,
      default: 0.5,
      required: true
    },
    particleColor: {
      type: String,
      default: "#ffffff",
      required: true
    },
    particleNumber: {
      type: Number,
      default: 100,
      required: true
    },
    particleDistance: {
      type: Number,
      default: 100,
      required: true
    },
    lineColor: {
      type: String,
      default: "#ffffff",
      required: true
    },
    lineWidth: {
      type: Number,
      default: 1,
      required: true
    }
  },
  data() {
    return {
      canvas: null,
      context: null,
      particles: [],
      handle: null
    };
  },
  mounted() {
    this.init();
    this.createParticles();
    this.draw();
  },
  watch: {
    particleRadius: function(val) {
      this.redraw();
    },
    particleSpeed: function(val) {
      this.redraw();
    },
    particleColor: function(val) {
      this.redraw();
    },
    particleNumber: function(val) {
      this.redraw();
    },
    particleDistance: function(val) {
      this.redraw();
    },
    lineColor: function(val) {
      this.redraw();
    },
    lineWidth: function(val) {
      this.redraw();
    }
  },
  methods: {
    init() {
      this.canvas = this.$refs.canvas;
      this.canvas.width = this.canvas.clientWidth;
      this.canvas.height = this.canvas.clientHeight;
      this.context = this.canvas.getContext("2d");
    },
    createParticles() {
      let options = {
        canvas: this.canvas,
        context: this.context,
        radius: this.particleRadius,
        color: this.particleColor
      };
      let num = this.particleNumber;
      let particles = [];
      for (let i = 0; i < num; i++) {
        options.x = Math.random() * this.canvas.width;
        options.y = Math.random() * this.canvas.height;
        options.vx = Math.random() * this.particleSpeed;
        options.vy = Math.random() * this.particleSpeed;
        options.vx = Math.random() > 0.5 ? options.vx : -options.vx;
        options.vy = Math.random() > 0.5 ? options.vy : -options.vy;
        particles.push(new Particle(options));
      }
      this.particles = particles;
    },
    draw() {
      this.clear();
      this.drawParticlesLine();
      this.drawParticles();
      this.handle = window.requestAnimationFrame(() => {
        this.draw();
      });
    },
    redraw() {
      this.createParticles();
      if (this.handle) {
        window.cancelAnimationFrame(this.handle);
      }
      this.draw();
    },
    drawParticles() {
      let len = this.particles.length;
      for (let i = 0; i < len; i++) {
        this.particles[i].draw();
        this.particles[i].animate();
      }
    },
    drawParticlesLine() {
      let len = this.particles.length;
      let iParticle, jParticle, distance, alpha;
      for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
          iParticle = this.particles[i];
          jParticle = this.particles[j];
          distance = this.calculateDistance(iParticle, jParticle);
          alpha = 1 - distance / this.particleDistance;
          if (this.checkDistance(iParticle, jParticle)) {
            this.context.save();
            this.context.lineWidth = this.lineWidth;
            this.context.strokeStyle = this.lineColor;
            this.context.globalAlpha = alpha;
            this.context.beginPath();
            this.context.moveTo(iParticle.x, iParticle.y);
            this.context.lineTo(jParticle.x, jParticle.y);
            this.context.stroke();
            this.context.closePath();
            this.context.restore();
          }
        }
      }
    },
    clear() {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    calculateDistance(particle1, particle2) {
      let x = Math.abs(particle1.x - particle2.x);
      let y = Math.abs(particle1.y - particle2.y);
      let distance = Math.sqrt(x * x + y * y);
      return distance;
    },
    checkDistance(particle1, particle2) {
      let d = this.calculateDistance(particle1, particle2);
      if (d <= this.particleDistance) {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>

<style lang="less" scoped>
@bg-image: url("../../assets/icon/sky.jpg");
.particles-box {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: @bg-image;
  background-size: 100% 100%;
  canvas {
    width: inherit;
    height: inherit;
    display: inline-block;
  }
}
</style>
