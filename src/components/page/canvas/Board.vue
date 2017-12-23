<template>
  <div class="main-box">
    <div class="board-box">
        <my-board ref="board"
          :lineWidth="lineWidth"
          :color="color"
          :canFill="canFill"
          :drawType="drawType">
        </my-board> 
    </div>
    <div class="tool-box">
      <div class="draw-type">
        <a v-for="(item, index) in items" :key="index" @click="setDrawType" 
          :class="{ active: item.isActive }" :data-drawtype="item.drawtype" >
          {{item.text}}
        </a>
      </div>
      <div class="action-type">
        <a @click="clear">{{clearText}}</a>
        <a @click="goForward">{{forwardText}}</a>
        <a @click="goBack">{{backText}}</a>
      </div>
      <div class="options-box">
        <span>线宽：</span>
        <el-slider v-model="lineWidth" :min="1" :max="10"
            style="width:80px;display:inline-block;"></el-slider>
        <span>颜色：</span>
        <el-color-picker v-model="color">
        </el-color-picker>
        <el-checkbox v-model="canFill" style="margin-left:20px;">
          <span style="font-size:16px;color:#fff;">填充</span>
        </el-checkbox>
      </div>
    </div>
  </div>  
</template>

<script>
import myBoard from "../../mycomponents/Board.vue";
export default {
  data() {
    return {
      items: [
        {
          drawtype: "line",
          text: "画笔",
          isActive: true
        },
        {
          drawtype: "segment",
          text: "直线",
          isActive: false
        },
        {
          drawtype: "rect",
          text: "方形",
          isActive: false
        },
        {
          drawtype: "circle",
          text: "圆形",
          isActive: false
        },
        {
          drawtype: "erase",
          text: "板擦",
          isActive: false
        }
      ],
      clearText: "清空",
      forwardText: "前进",
      backText: "后退",
      lineWidth: 2,
      color: "rgb(14, 85, 224)",
      canFill: false,
      drawType: "line"
    };
  },
  components: {
    myBoard
  },
  methods: {
    setDrawType(event) {
      let target = event.target;
      let drawType = target.getAttribute("data-drawtype");
      for (let i = 0; i < this.items.length; i++) {
        let item = this.items[i];
        if (item.drawtype === drawType) {
          item.isActive = true;
        } else {
          item.isActive = false;
        }
      }
      this.drawType = drawType;
    },
    clear() {
      this.$refs.board.clear();
    },
    goForward() {
      this.$refs.board.goForward();
    },
    goBack() {
      this.$refs.board.goBack();
    }
  }
};
</script>

<style lang="less" scoped>
.main-box {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .board-box {
    position: absolute;
    left: 3px;
    right: 3px;
    top: 3px;
    bottom: 48px;
    border: 1px solid #acacac;
  }
  .tool-box {
    position: absolute;
    left: 3px;
    right: 3px;
    bottom: 3px;
    height: 40px;
    border: 1px solid #acacac;
    background-color: #4a4ebb;
    overflow: hidden;
    text-align: center;
    .draw-type {
      display: inline-block;
      a {
        display: inline-block;
        height: 40px;
        width: 50px;
        line-height: 40px;
        text-align: center;
        color: #fff;
        cursor: pointer;
        &:hover {
          background: #312faf;
        }
      }
    }
    .action-type {
      display: inline-block;
      a {
        display: inline-block;
        height: 40px;
        width: 50px;
        line-height: 40px;
        text-align: center;
        color: #fff;
        cursor: pointer;
        &:active {
          background: #312faf;
        }
      }
    }
    .options-box {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      > span {
        margin-left: 20px;
        display: inline-block;
        height: 40px;
        width: 50px;
        line-height: 40px;
        text-align: center;
        color: #fff;
      }
    }
  }
}
.active {
  background: #312faf;
}
</style>

