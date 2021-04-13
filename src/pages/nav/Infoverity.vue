<template>
  <div>
    <!-- 详情弹窗 -->
    <el-dialog title="活动详情" :visible.sync="dialogTableVisible">
      <el-table :data="editList">
        <el-table-column
          width="120"
          prop="activeStartTimeStr"
          label="活动开始时间"
        >
        </el-table-column>
        <el-table-column width="120" prop="addr" label="地址"></el-table-column>
        <el-table-column prop="content" label="活动内容"> </el-table-column>
        <el-table-column prop="createTimeStr" label="活动发布时间" width="120">
        </el-table-column>
        <el-table-column prop="evaluateNum" label="评论数"> </el-table-column>
        <el-table-column prop="forwardNum" label="转发数"> </el-table-column>
        <el-table-column prop="image" label="活动图片"> </el-table-column>
        <el-table-column prop="publishUserName" label="发布人名称" width="100">
        </el-table-column>
        <el-table-column prop="signNum" label="报名人数"> </el-table-column>
        <el-table-column prop="status" label="审核状态"> </el-table-column>
        <el-table-column prop="thumbsUpNum" label="点赞数"> </el-table-column>
        <el-table-column prop="title" label="活动标题" width="120">
        </el-table-column>
        <el-table-column prop="type" label="活动类型"> </el-table-column>
        <el-table-column prop="userNum" label="期望人数"> </el-table-column>
      </el-table>
    </el-dialog>
    <!-- 活动表格 -->
    <el-table
      :data="dataList"
      style="width: 100%"
      :header-cell-style="getRowClass"
    >
      <el-table-column
        width="120"
        prop="activeStartTimeStr"
        label="活动开始时间"
      >
      </el-table-column>
      <el-table-column
        width="120"
        prop="addr"
        label="地址"
        :show-overflow-tooltip="true"
      >
      </el-table-column>
      <el-table-column
        prop="content"
        label="活动内容"
        :show-overflow-tooltip="true"
      >
      </el-table-column>
      <el-table-column prop="createTimeStr" label="活动发布时间" width="120">
      </el-table-column>
      <el-table-column prop="evaluateNum" label="评论数"> </el-table-column>
      <el-table-column prop="forwardNum" label="转发数"> </el-table-column>
      <el-table-column prop="image" label="活动图片">
        <template slot-scope="scope">
          <img :src="scope.row.image" alt="" class="img" />
        </template>
      </el-table-column>
      <el-table-column prop="publishUserName" label="发布人名称" width="100">
      </el-table-column>
      <el-table-column prop="signNum" label="报名人数"> </el-table-column>
      <el-table-column prop="status" label="审核状态"> </el-table-column>
      <el-table-column prop="thumbsUpNum" label="点赞数"> </el-table-column>
      <el-table-column
        prop="title"
        label="活动标题"
        width="120"
        :show-overflow-tooltip="true"
      >
      </el-table-column>
      <el-table-column prop="type" label="活动类型"> </el-table-column>
      <el-table-column prop="userNum" label="期望人数"> </el-table-column>
      <el-table-column label="详情">
        <template slot-scope="scope">
          <el-button size="mini" @click="clickEdit(scope.row)">查看</el-button>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="danger" @click="clickRemove(scope.row)"
            >删除</el-button
          >
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
      :total="100"
    >
    </el-pagination>
  </div>
</template>

<script>
import { api_actList } from "../../apis/apis";
// import { api_actDelete } from "../../apis/apis";

import axios from "axios";

axios.defaults.baseURL = "/apis";
export default {
  data() {
    return {
      dataList: [],
      total: 100,
      pageNumber: 1,
      pageSize: 10,
      dialogTableVisible: false,
      editList: [],
    };
  },
  created() {
    this.changeData();
  },
  methods: {
    // 删除活动
    clickRemove(data) {
      console.log(data.id);
      this.$confirm("此操作将永久删除该数据, 是否继续?", "系统提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        axios({
          method: "post",
          url: "/admin/active/deleteActive?activeId=" + data.id,
        }).then((res) => {
          if (res.data.status == 2000000) {
            this.$message({
              type: "success",
              message: "删除成功!",
            });
            this.changeData();
          }
        });
      });
    },
    // 查看活动详情
    clickEdit(data) {
      this.editList.push(data);
      console.log(this.editList);
      let editArr = this.editList[0];
      console.log(editArr);
      this.dialogTableVisible = true;
    },
    // 分页接口
    changeData() {
      api_actList({
        params: { pageNumber: this.pageNumber, pageSize: this.pageSize },
      }).then((res) => {
        console.log(res);
        this.dataList = res.data.data;
      });
    },
    handleSizeChange(val) {
      this.pageSize = val;
      this.changeData();
    },
    handleCurrentChange(val) {
      this.pageNumber = val;
      this.changeData();
    },
    getRowClass({ rowIndex }) {
      if (rowIndex == 0) {
        return "background:#fff200";
      } else {
        return "";
      }
    },
  },
};
</script>

<style scoped>
.img {
  width: 100%;
  height: 100%;
}
</style>