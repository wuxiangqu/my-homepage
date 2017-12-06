<template>
    <div class="content-box">
      <my-particles 
        :particleRadius="particleRadius"
        :particleSpeed="particleSpeed"
        :particleColor="particleColor"
        :particleNumber="particleNumber"
        :particleDistance="particleDistance"
        :lineColor="lineColor"
        :lineWidth="lineWidth"
      >
      </my-particles>
      <div class="tool-box">
        <span>粒子半径</span>
        <el-slider v-model="particleRadius" :min="1" :max="5" style="width:80px;display:inline-block;"></el-slider>
        <span>粒子速度</span>
        <el-slider v-model="particleSpeed" :min="0.5" :max="3" :step="0.1" style="width:80px;display:inline-block;"></el-slider>
        <span>粒子颜色</span>
        <el-color-picker v-model="particleColor"></el-color-picker>
        <span>粒子数量</span>
        <el-slider v-model="particleNumber" :min="20" :max="200" style="width:80px;display:inline-block;"></el-slider>
        <span>粒子距离</span>
        <el-slider v-model="particleDistance" :min="50" :max="200" style="width:80px;display:inline-block;"></el-slider>
        <span>连线颜色</span>
        <el-color-picker v-model="lineColor"></el-color-picker>
        <span>连线大小</span>
        <el-slider v-model="lineWidth" :min="1" :max="5" style="width:80px;display:inline-block;"></el-slider>
      </div>
    </div>
</template>

<script>
import myParticles from "../../mycomponents/Particles.vue";
export default {
  data() {
    return {
      particleRadius: 3,
      particleSpeed: 1,
      particleColor: "#ffffff",
      particleNumber: 100,
      particleDistance: 50,
      lineColor: "#ffffff",
      lineWidth: 1
    };
  },
  components: {
    myParticles
  }
};
</script>

<style lang="less" scope>
.content-box {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  .tool-box {
    position: absolute;
    display: flex;
    justify-content: center;
    width: 100%;
    align-items: center;
    color: #fbfbfb;
    > span {
      padding: 0 15px;
    }
  }
}
</style>
