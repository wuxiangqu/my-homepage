<template>
  <div class="flex-box">
    <div class="ring-loader"></div>
    <div class="opacity-loader">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="bounce-loader">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="grow-loader">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>  
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.flex-box {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.ring-loader {
  display: inline-block;
  position: relative;
  width: 100px;
  height: 100px;
  box-sizing: border-box;
  border-radius: 50%;
  border: 10px solid #ccc;
  &:before {
    content: "";
    left: -10px;
    top: -10px;
    position: absolute;
    width: inherit;
    height: inherit;
    border-radius: 50%;
    border: 10px solid transparent;
    border-top: 10px solid #3498db;
    animation: spin 1s infinite;
  }
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.opacity-loader {
  display: inline-block;
  width: 100px;
  height: 100px;
  line-height: 100px;
  text-align: center;
  span {
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #3498db;
  }
  span:nth-child(1) {
    animation: opacitychange 1s ease-in-out infinite;
  }
  span:nth-child(2) {
    animation: opacitychange 1s ease-in-out 0.33s infinite;
  }
  span:nth-child(3) {
    animation: opacitychange 1s ease-in-out 0.66s infinite;
  }
}
@keyframes opacitychange {
  0%,
  100% {
    opacity: 0;
  }
  60% {
    opacity: 1;
  }
}
.bounce-loader {
  display: inline-block;
  width: 100px;
  height: 100px;
  line-height: 100px;
  text-align: center;
  span {
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #3498db;
  }
  span:nth-child(1) {
    animation: bounce 1s ease-in-out infinite;
  }
  span:nth-child(2) {
    animation: bounce 1s ease-in-out 0.33s infinite;
  }
  span:nth-child(3) {
    animation: bounce 1s ease-in-out 0.66s infinite;
  }
}
@keyframes bounce {
  0%,
  75%,
  100% {
    transform: translateY(0);
  }
  25% {
    transform: translateY(-20px);
  }
}
.grow-loader {
  display: inline-block;
  width: 100px;
  height: 100px;
  line-height: 100px;
  text-align: center;
  span {
    display: inline-block;
    width: 5px;
    height: 20px;
    background-color: #3498db;
  }
  span:nth-child(1) {
    animation: grow 1s ease-in-out infinite;
  }
  span:nth-child(2) {
    animation: grow 1s ease-in-out 0.15s infinite;
  }
  span:nth-child(3) {
    animation: grow 1s ease-in-out 0.3s infinite;
  }
  span:nth-child(4) {
    animation: grow 1s ease-in-out 0.45s infinite;
  }
}
@keyframes grow {
  0%,
  100% {
    transform: scaleY(1);
  }
  50% {
    transform: scaleY(1.8);
  }
}
</style>
