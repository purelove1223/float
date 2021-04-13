<template>
  <div class="demo-image__placeholder">
    <!-- 上传文件 -->
    <el-upload
      ref="upload"
      action="http://test.hotbeet.cn/flooat/admin/banner/upload"
      class="upload-demo"
      :file-list="fileList"
      list-type="picture"
      :on-success="handleSuccess"
      :on-error="handleError"
      :auto-upload="false"
    >
      <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
      <el-button
        style="margin-left: 10px"
        size="small"
        type="success"
        @click="submitUpload"
        >上传到服务器</el-button
      >
      <div slot="tip" class="el-upload__tip"></div>
    </el-upload>
    <!-- banner分页表格 -->
    <el-table :data="bannerData" stripe style="width: 100%">
      <el-table-column label="图片" width="600">
        <template slot-scope="scope">
          <img :src="scope.row.image" alt="" class="img" />
        </template>
      </el-table-column>
      <el-table-column label="启动状态" width="150">
        <el-switch
          v-model="value"
          active-color="#13ce66"
          inactive-color="#ff4949"
        >
        </el-switch>
      </el-table-column>
      <el-table-column label="启动状态" width="300">
        <template slot-scope="scope">
          <el-button size="primary" @click="clickChange(scope.row)"
            >启用banner</el-button
          >
        </template>
      </el-table-column>
      <el-table-column label="启动状态" width="150">
        <template slot-scope="scope">
          <el-button size="danger" @click="clickBanned(scope.row)"
            >禁用banner</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pageNumber"
      :page-sizes="[2]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="10"
    >
    </el-pagination>
  </div>
</template>

<script>
import axios from "axios";
import { api_getBanner } from "../../apis/apis";
axios.defaults.baseURL = "/apis";
export default {
  data() {
    return {
      pageSize: 2,
      pageNumber: 1,
      bannerData: [],
      dialogImageUrl: "",
      dialogVisible: false,
      fileList: [],
      value: true,
      pwd: "",
      acc: "",
      // bannerList:[],
    };
  },
  created() {
    this.getBanner();
  },
  methods: {
    // 登录上传图片
    submitUpload() {
      axios({
        method: "post",
        url: "/admin/login?username=admin&password=admin",
      }).then((res) => {
        console.log(res);
        this.$refs.upload.submit();
      });
    },
    // 上传文件
    handleSuccess(res) {
      console.log(res);
    },
    // 上传失败
    handleError(err) {
      console.log(err);
    },
    // 获取分页
    getBanner() {
      api_getBanner({
        params: { pageNumber: this.pageNumber, pageSize: this.pageSize },
      }).then((res) => {
        this.bannerData = res.data.data;
        console.log(res.data.data);
      });
    },
    // 启用banner
    clickChange(data) {
      this.$confirm("确定启用此图片?", "系统提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        axios({
          method: "post",
          url: "/admin/banner/changeBanner?id=" + data.id + "&" + "isShow=" + 1,
        }).then((res) => {
          res.data.isShow = 1;
          this.getBanner();
          this.value = true;
        });
      });
    },
    // 禁用banner
    clickBanned(data) {
      this.$confirm("确定禁用此图片?", "系统提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        axios({
          method: "post",
          url: "/admin/banner/changeBanner?id=" + data.id + "&" + "isShow=" + 0,
        }).then((res) => {
          res.data.isShow = 0;
          this.getBanner();
          this.value = false;
        });
      });
    },
    //上传图片
    handleSizeChange(val) {
      this.pageSize = val;
      this.getBanner();
    },
    handleCurrentChange(val) {
      this.pageNumber = val;
      this.getBanner();
    },
  },
};
</script>

<style scoped>
.el-carousel__item h3 {
  color: #f60;
  font-size: 14px;
  opacity: 0.75;
  line-height: 1200px;
  margin: 0;
}
.el-carousel__item h3 .image {
  width: 100%;
  height: 100%;
}
.img {
  width: 100%;
  height: 300px;
}
.el-button {
  margin-top: 20px;
}
.pwd-input {
  margin-top: 40px;
  width: 70%;
}
.accinput {
  /* margin-top: 80px; */
  text-align: center;
  width: 70%;
}
</style>