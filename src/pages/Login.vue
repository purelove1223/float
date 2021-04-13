<template>
  <div class="login-banner">
    <img src="../assets/image/编组.png" alt="" class="logoImg" />
    <p class="title">后台管理系统</p>
    <div class="login-container">
      <el-card class="box-card">
        <div>
          <form>
            <p class="loginTitle">账号登录</p>
            <p>
              <el-input
                placeholder="请输入账号"
                clearable
                v-model="acc"
                class="accinput"
              >
              </el-input>
            </p>
            <p>
              <el-input
                placeholder="请输入密码"
                show-password
                class="pwd-input"
                v-model="pwd"
              ></el-input>
            </p>
            <el-button
              type="primary"
              @click="submitForm"
              style="
                width: 70%;
                background-color: #fbea19;
                color: #fff;
                margin-top: 60px;
                font-weight: 500;
                color: #333333;
                height: 54px;
              "
              >登录</el-button
            >
          </form>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import axios from "axios";

axios.defaults.baseURL = "/apis";
export default {
  created() {},
  data() {
    return {
      acc: "",
      pwd: "",
    };
  },
  methods: {
    // 登录接口
    submitForm() {
      axios({
        method: "post",
        url: "/admin/login?username=" + this.acc + "&" + "password=" + this.pwd,
      }).then((res) => {
        if (res.data.status == 2000000) {
          console.log(res);
          this.$message({
            message: "登录成功",
            type: "success",
          });
          this.$router.push("/nav/main");
        } else {
          this.$message({
            message: "账号或密码有误,请重新输入",
            type: "error",
          });
        }
      });
    },
  },
};
</script>

<style scoped>
.login-banner {
  height: 600px;
  width: 100%;
  background-color: #fff03f;
}
.login-container {
  display: flex;
  justify-content: center;
  /* align-items: center; */
  margin-top: 60px;
  height: 100%;
  width: 100%;
}
.box-card {
  width: 585px;
  height: 382px;
  background-color: #fff;
  text-align: center;
}
.pwd-input {
  margin-top: 40px;
  width: 70%;
}
.logoImg {
  margin: 64px 420px 0px;
}
.accinput {
  /* margin-top: 80px; */
  text-align: center;
  width: 70%;
}
.title {
  font-size: 36px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #000000;
  line-height: 50px;
  letter-spacing: 30px;
  margin: 20px 516px 0px;
}
.loginTitle {
  font-size: 32px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #000000;
  line-height: 50px;
  margin-bottom: 30px;
}
</style>

