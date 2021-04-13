<template>
  <div>
    <el-table
      :header-cell-style="getRowClass"
      stripe
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
    >
      <el-table-column label="头像" width="120" prop="days">
        <el-avatar
          src="http://float-img.oss-cn-chengdu.aliyuncs.com/c25bbd0d42544c61a1b2a0ffb0c04080.jpg"
        ></el-avatar>
      </el-table-column>
      <el-table-column prop="name" label="群昵称" width="220">
      </el-table-column>
      <el-table-column prop="id" label="群ID" width="180"> </el-table-column>
      <el-table-column prop="number" label="群人数" width="220">
      </el-table-column>
      <el-table-column prop="leader" label="群主" width="220">
      </el-table-column>
      <el-table-column label="群成员" width="220">
        <el-button type="text">点击查看群成员</el-button>
      </el-table-column>
    </el-table>
    <!-- 分页器 -->
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pageNumber"
        :page-sizes="[10]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="10"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          name: "辛辣天赛",
          avatar: "",
          id: "8792213",
          number: "100",
          leader: "King",
        },
        {
          name: "辛辣天赛",
          avatar: "",
          id: "8792213",
          number: "100",
          leader: "King",
        },
        {
          name: "辛辣天赛",
          avatar: "",
          id: "8792213",
          number: "100",
          leader: "King",
        },
        {
          name: "辛辣天赛",
          avatar: "",
          id: "8792213",
          number: "100",
          leader: "King",
        },
        {
          name: "辛辣天赛",
          avatar: "",
          id: "8792213",
          number: "100",
          leader: "King",
        },
        {
          name: "辛辣天赛",
          avatar: "",
          id: "8792213",
          number: "100",
          leader: "King",
        },
        {
          name: "辛辣天赛",
          avatar: "",
          id: "8792213",
          number: "100",
          leader: "King",
        },
        {
          name: "辛辣天赛",
          avatar: "",
          id: "8792213",
          number: "100",
          leader: "King",
        },
        {
          name: "辛辣天赛",
          avatar: "",
          id: "8792213",
          number: "100",
          leader: "King",
        },
        {
          name: "辛辣天赛",
          avatar: "",
          id: "8792213",
          number: "100",
          leader: "King",
        },
        {
          name: "辛辣天赛",
          avatar: "",
          id: "8792213",
          number: "100",
          leader: "King",
        },
      ],
    };
  },
  methods: {
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
</style>