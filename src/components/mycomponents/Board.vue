<template>
    <canvas ref="canvas"></canvas>
</template>

<script>
import { Board } from "../../../static/js/board.js";
export default {
  props: {
    lineWidth: {
      type: Number,
      default: 1
    },
    color: {
      type: String,
      default: "rgb(0,0,0)"
    },
    canFill: {
      type: Boolean,
      default: false
    },
    drawType: {
      type: String,
      default: "line"
    }
  },
  data() {
    return {
      board: null
    };
  },
  mounted() {
    let canvas = this.$refs.canvas;
    let width = canvas.parentNode.clientWidth;
    let height = canvas.parentNode.clientHeight;
    this.board = new Board({
      canvas: canvas,
      width: width,
      height: height,
      lineWidth: this.lineWidth,
      lineCap: "round",
      lineJoin: "round",
      color: this.color,
      canFill: this.canFill
    });
  },
  watch: {
    drawType: function(val) {
      this.board.setDrawType(val);
    },
    lineWidth: function(val) {
      this.board.setLineWidth(val);
    },
    color: function(val) {
      this.board.setColor(val);
    },
    canFill: function(val) {
      this.board.setCanFill(val);
    }
  },
  methods: {
    clear() {
      this.board.clear();
    },
    goForward() {
      this.board.goForward();
    },
    goBack() {
      this.board.goBack();
    }
  }
};
</script>

<style>

</style>
