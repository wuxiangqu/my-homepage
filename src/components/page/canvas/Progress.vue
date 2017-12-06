<template>
  <div>
   <div class="tool-box">
     <span>外圆半径:</span>
     <el-slider v-model="outerRadius" :min="20" :max="200" style="width:80px;display:inline-block;"></el-slider>
     <span>内圆半径:</span>
     <el-slider v-model="innerRadius" :min="10" :max="180" style="width:80px;display:inline-block;"></el-slider>
     <span>外圆前景色:</span>
     <el-color-picker v-model="outerForeColor"></el-color-picker>
     <span>外圆背景色:</span>
     <el-color-picker v-model="outerBackColor"></el-color-picker>
     <span>内圆背景色:</span>
     <el-color-picker v-model="innerColor"></el-color-picker>
     <span>进度百分百:</span>
     <el-slider v-model="percent" :min="0" :max="100" style="width:80px;display:inline-block;"></el-slider>
   </div>
   <div class="progress-box">
    <my-progress
      :outerRadius="outerRadius"
      :innerRadius="innerRadius"
      :outerForeColor="outerForeColor"
      :outerBackColor="outerBackColor"
      :innerColor="innerColor"
      :percent="percent">
    </my-progress>
  </div>
  </div>  
</template>

<script>
import myProgress from "../../mycomponents/Progress.vue";
export default {
  data() {
    return {
      outerRadius: 200,
      innerRadius: 160,
      outerForeColor: "#097EEB",
      outerBackColor: "#bdc3c7",
      innerColor: "#D2D4DA",
      percent: 35
    };
  },
  components: {
    myProgress
  }
};
</script>

<style lang="less" scoped>
.progress-box {
  margin-top: 20px;
  text-align: center;
}
.tool-box {
  display: flex;
  justify-content: center;
  align-items: center;
  > span {
    padding: 0 15px;
  }
}
</style>
