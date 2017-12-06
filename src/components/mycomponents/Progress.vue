<template>
  <canvas ref="canvas"></canvas>
</template>

<script>
export default {
  props: {
    outerRadius: {
      type: Number,
      default: 100
    },
    innerRadius: {
      type: Number,
      default: 80
    },
    outerForeColor: {
      type: String,
      default: "#4452f2"
    },
    outerBackColor: {
      type: String,
      default: "#bdc3c7"
    },
    innerColor: {
      type: String,
      default: "#ffffff"
    },
    percent: {
      type: Number,
      default: 20 // 0---100
    }
  },
  data() {
    return {
      canvas: null,
      context: null
    };
  },
  mounted() {
    this.init();
    this.draw();
  },
  watch: {
    outerRadius: function(val) {
      this.redraw();
    },
    innerRadius: function(val) {
      this.redraw();
    },
    outerForeColor: function(val) {
      this.redraw();
    },
    outerBackColor: function(val) {
      this.redraw();
    },
    innerColor: function(val) {
      this.redraw();
    },
    percent: function(val) {
      this.redraw();
    }
  },
  methods: {
    init() {
      this.canvas = this.$refs.canvas;
      this.setSize();
      this.context = this.canvas.getContext("2d");
    },
    setSize() {
      let size = this.outerRadius * 2;
      this.canvas.width = size;
      this.canvas.height = size;
      this.canvas.style.width = size + "px";
      this.canvas.style.height = size + "px";
    },
    draw() {
      this.clear();
      this.drawOuterCircle();
      this.drawInnerCircle();
    },
    redraw() {
      this.setSize();
      this.draw();
    },
    clear() {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    drawOuterCircle() {
      let cx = this.canvas.width / 2;
      let cy = this.canvas.height / 2;
      let beginRadian = -Math.PI /2;
      let radian = Math.PI * 2 * (this.percent / 100);

      this.context.save();
      this.context.beginPath();
      this.context.translate(cx, cy);
      this.context.fillStyle = this.outerBackColor;
      this.context.arc(0, 0, this.outerRadius, 0, Math.PI * 2);
      this.context.fill();
      this.context.beginPath();
      this.context.fillStyle = this.outerForeColor;
      this.context.moveTo(0, 0);
      this.context.arc(0, 0, this.outerRadius, beginRadian, beginRadian + radian);
      this.context.closePath();
      this.context.fill();
      this.context.restore();
    },
    drawInnerCircle() {
      let cx = this.canvas.width / 2;
      let cy = this.canvas.height / 2;
      this.context.save();
      this.context.beginPath();
      this.context.translate(cx, cy);
      this.context.fillStyle = this.innerColor;
      this.context.arc(0, 0, this.innerRadius, 0, Math.PI * 2);
      this.context.fill();
      this.context.restore();
    }
  }
};
</script>

<style>

</style>
