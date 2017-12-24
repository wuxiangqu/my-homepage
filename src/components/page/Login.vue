<template>
  <div class="login-wrap">
    <my-particles></my-particles>
    <div class="login-form">
      <el-form :model="userForm" :rules="rules" ref="userForm">
        <el-form-item prop="username">
          <el-input v-model="userForm.username" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" v-model="userForm.password" @keyup.enter.native="submitForm('userForm')" placeholder="密码"></el-input>
        </el-form-item>
        <el-form-item class="submit-row">
          <el-button type="primary" class="submit-btn"  @click="submitForm('userForm')">登录</el-button>
        </el-form-item>
        <p style="color: #888;font-size: 12px;">Tips : 用户名和密码随便填写</p>
      </el-form>
    </div>
  </div>
</template>
<script>
import myParticles from "../mycomponents/Particles.vue";
export default {
  data() {
    return {
      userForm: {
        username: "",
        password: ""
      },
      rules: {
        username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  components: {
    myParticles
  },
  methods: {
    submitForm(formName) {
      const self = this;
      this.$refs[formName].validate(valid => {
        if (valid) {
          self.$router.push("/home");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.login-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #38557f;
  .login-form {
    width: 300px;
    height: 160px;
    padding: 40px;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.6);
    box-sizing: content-box;
    z-index: 99;
    .submit-row {
      margin-bottom: 0px;
      .submit-btn {
        width: 100%;
      }
    }
  }
}
</style>

