<template>
  <div id="pieChart" class="chart-box"></div>  
</template>

<script>
export default {
  data() {
    return {
      pieChart: null
    };
  },
  mounted() {
    this.pieChart = echarts.init(document.getElementById("pieChart"));
    let option = {
      title: {
        x: "center",
        text: "数学期末考试成绩分布",
        subtext: "纯属虚构"
      },
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c}人 ({d}%)"
      },
      legend: {
        orient: "vertical",
        left: "left",
        data: ["不及格", "及格", "良好", "优秀", "优异"]
      },
      color: this.$store.state.color,
      series: [
        {
          name: "成绩分布",
          type: "pie",
          radius: "55%",
          center: ["50%", "60%"],
          data: [
            { value: 2, name: "不及格" },
            { value: 10, name: "及格" },
            { value: 28, name: "良好" },
            { value: 16, name: "优秀" },
            { value: 4, name: "优异" }
          ],
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)"
            }
          }
        }
      ]
    };
    this.pieChart.setOption(option);
  }
};
</script>

<style lang="less" scoped>
.chart-box {
  width: 100%;
  height: 100%;
}
</style>