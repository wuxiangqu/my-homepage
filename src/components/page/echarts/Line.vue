<template>
  <div id="lineChart" class="chart-box"></div>  
</template>

<script>
export default {
  data() {
    return {
      lineChart: null
    };
  },
  mounted() {
    this.lineChart = this.$echarts.init(document.getElementById("lineChart"));
    let option = {
      title: {
        x: "center",
        text: "小明和小红语文成绩变化比较"
      },
      tooltip: {
        trigger: "axis"
      },
      legend: {
        right: "50px",
        data: ["小明", "小红"]
      },
      color: this.$store.state.color,
      xAxis: {
        type: "category",
        data: ["模拟考试1", "模拟考试2", "模拟考试3", "模拟考试4", "模拟考试5"]
      },
      yAxis: {
        type: "value"
      },
      series: [
        {
          name: "小明",
          type: "line",
          label: {
            normal: {
              show: true,
              position: "top"
            }
          },
          data: [75, 80, 60, 88, 95]
        },
        {
          name: "小红",
          type: "line",
          label: {
            normal: {
              show: true,
              position: "top"
            }
          },
          data: [95, 85, 76, 82, 79]
        }
      ]
    };
    this.lineChart.setOption(option);
  }
};
</script>

<style lang="less" scoped>
.chart-box {
  width: 100%;
  height: 100%;
}
</style>