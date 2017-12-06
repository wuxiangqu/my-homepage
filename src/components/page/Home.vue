<template>
  <div class="home-wrap">
    <v-header></v-header>
    <v-sidebar></v-sidebar>
    <div class="content">
      <transition name="fade">
        <router-view/>
      </transition>
    </div>
  </div>
</template>

<script>
import vHeader from "./Header.vue";
import vSidebar from "./Sidebar.vue";
export default {
  components: {
    vHeader,
    vSidebar
  }
};
</script>

<style lang="less" scoped>
.home-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .content {
    position: absolute;
    top: 70px;
    left: 200px;
    right: 0;
    bottom: 0;
    background: #fff;
    overflow: auto;
  }
}
.fade-enter-active {
  transition: opacity 0.1s;
}
.fade-enter {
  opacity: 0;
}
</style>
