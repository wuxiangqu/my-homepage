<template>
  <div id="barChart" class="chart-box"></div>  
</template>

<script>
export default {
  data() {
    return {
      barChart: null
    };
  },
  mounted() {
    this.barChart = echarts.init(document.getElementById("barChart"));
    let option = {
      title: {
        x: "center",
        text: "小明和小红期末考试成绩对比"
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "line"
        }
      },
      legend: {
        orient: "vertical",
        left: "left",
        data: ["语文", "数学", "物理", "化学", "生物", "英语"]
      },
      color: this.$store.state.color,
      xAxis: {
        type: "category",
        data: ["小明", "小红"]
      },
      yAxis: {
        type: "value"
      },
      series: [
        {
          name: "语文",
          type: "bar",
          label: {
            normal: {
              show: true,
              position: "top"
            }
          },
          data: [75, 80]
        },
        {
          name: "数学",
          type: "bar",
          label: {
            normal: {
              show: true,
              position: "top"
            }
          },
          data: [95, 85]
        },
        {
          name: "物理",
          type: "bar",
          label: {
            normal: {
              show: true,
              position: "top"
            }
          },
          data: [88, 82]
        },
        {
          name: "化学",
          type: "bar",
          label: {
            normal: {
              show: true,
              position: "top"
            }
          },
          data: [90, 69]
        },
        {
          name: "生物",
          type: "bar",
          label: {
            normal: {
              show: true,
              position: "top"
            }
          },
          data: [66, 79]
        },
        {
          name: "英语",
          type: "bar",
          label: {
            normal: {
              show: true,
              position: "top"
            }
          },
          data: [72, 93]
        }
      ]
    };
    this.barChart.setOption(option);
  }
};
</script>
<style lang="less" scoped>
.chart-box {
  width: 100%;
  height: 100%;
}
</style>