<template>
  <div class="sidebar">
    <el-menu :default-active="onRoutes" background-color="#21384f" text-color="#eee" unique-opened router>
      <template v-for="(item, i) in items">
        <template v-if="item.subs">
          <el-submenu :index="item.index" :key="i">
            <template slot="title">
              <i :class="item.icon"></i>
              <span>{{item.title}}</span>
            </template>
            <el-menu-item v-for="(subItem, i) in item.subs" :key="i" :index="subItem.index">
              {{subItem.title}}    
            </el-menu-item>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index" :key="i">
            <i :class="item.icon"></i>
            <span>{{item.title}}</span>
          </el-menu-item>
        </template>
      </template>    
    </el-menu>
  </div>  
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          index: "canvas",
          title: "Canvas",
          icon: "el-icon-location",
          subs: [
            {
              index: "board",
              title: "Board"
            },
            {
              index: "particles",
              title: "Particles"
            },
            {
              index: "progress",
              title: "Progress"
            }
          ]
        },
        {
          index: "echarts",
          title: "Echarts",
          icon: "el-icon-star-on",
          subs: [
            {
              index: "bar",
              title: "Bar Chart"
            },
            {
              index: "line",
              title: "Line Chart"
            },
            {
              index: "pie",
              title: "Pie Chart"
            }
          ]
        },
        {
          index: "elementui",
          title: "ElementUI",
          icon: "el-icon-view",
          subs: [
            {
              index: "table",
              title: "Table"
            }
          ]
        },
        {
          index: "animation",
          title: "Animation",
          icon: "el-icon-edit",
          subs: [
            {
              index: "loader",
              title: "Loader"
            }
          ]
        }
      ]
    };
  },
  computed: {
    onRoutes() {
      return this.$route.path.replace("/", "");
    }
  }
};
</script>

<style lang="less" scoped>
.sidebar {
  position: absolute;
  width: 200px;
  left: 0;
  top: 70px;
  bottom: 0;
  ul {
    height: 100%;
    border-right: 0;
  }
}
</style>
