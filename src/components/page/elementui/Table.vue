<template>
  <div class="table-box">
    <el-table
      border
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column label="日期" width="120">
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="120"></el-table-column>
      <el-table-column prop="address" label="地址" show-overflow-tooltip></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" @click="handleEdit(scope.$index, scope.row)">
            编辑
          </el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <div>
      <el-button size="mini" type="danger" @click="handleMultipleDelete">
        批量删除
      </el-button>
      <el-button size="mini" type="danger" @click="handleDeleteAll">
        清空
      </el-button>
    </div>
  </div>  
</template>

<script>
export default {
  data() {
    return {
      url: "./static/data/tableData.json",
      tableData: [],
      multipleSelection: []
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.$axios.get(this.url).then(res => {
        this.tableData = res.data.result;
      });
    },
    handleAdd(item) {
      this.tableData.push(item);
    },
    handleDelete(index, row) {
      this.tableData.splice(index, 1);
    },
    handleEdit(index, row) {
      this.$message({
        message: "编辑第 " + (index + 1) + " 行",
        type: "success",
        showClose: true,
        center: true,
        duration: 2000
      });
    },
    handleMultipleDelete() {
      let length = this.multipleSelection.length;
      for (let i = 0; i < length; i++) {
        let tlength = this.tableData.length;
        for (let j = 0; j < tlength; j++) {
          if (this.multipleSelection[i] === this.tableData[j]) {
            this.tableData.splice(j, 1);
            break;
          }
        }
      }
    },
    handleDeleteAll() {
      this.tableData = [];
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    }
  }
};
</script>

<style lang="less" scoped>
.table-box {
  padding: 10px;
}
</style>
