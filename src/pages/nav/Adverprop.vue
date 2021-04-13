<template>
  <div class="demo-image__placeholder">
    <!-- 上传banner -->
    <el-upload
      action="http://test.hotbeet.cn/flooat/admin/banner/addBanner"
      list-type="picture-card"
      :on-success="handleBannerSuccess"
      :on-remove="handleRemove"
    >
      <i class="el-icon-plus"></i>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="" />
    </el-dialog>
    <!-- banner分页表格 -->
    <el-table :data="bannerData" stripe style="width: 100%">
      <el-table-column label="启动状态" width="590">
        <template slot-scope="scope">
          <el-switch
            v-model="scope.row.isShow"
            active-color="#13ce66"
            inactive-color="#ff4949"
          >
          </el-switch>
        </template>
      </el-table-column>
      <el-table-column label="图片" width="600">
        <template slot-scope="scope">
          <img :src="scope.row.image" alt="" class="img" />
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pageNumber"
      :page-sizes="[1, 5, 10, 15]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="70"
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
      pageSize: 1,
      pageNumber: 1,
      bannerData: [],
      dialogImageUrl: "",
      dialogVisible: false,
      value: true,
      // bannerList:[],
    };
  },
  created() {
    this.getBanner();
  },
  methods: {
    // 获取分页
    getBanner() {
      api_getBanner({
        params: { pageNumber: this.pageNumber, pageSize: this.pageSize },
      }).then(res=>{
        console.log(res)
      })
    },
    //上传图片
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handleBannerSuccess(res) {
      console.log(res);
    },
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
.el-carousel__item:nth-child(2n) {
  /* background-color: #f60; */
  /* width: 100%;
  height: 100%; */
}

.el-carousel__item:nth-child(2n + 1) {
  /* background-color:; */
}
.img {
  width: 100%;
  height: 300px;
}
</style>