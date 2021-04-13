<template>
  <div>
    <el-table
      :header-cell-style="getRowClass"
      stripe
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column label="状态" width="120">
        <el-switch
          v-model="value"
          disabled
          active-color="#13ce66"
          inactive-color="#ff4949"
        >
        </el-switch>
      </el-table-column>
      <el-table-column prop="number" label="序号" width="60">
      </el-table-column>
      <el-table-column prop="name" label="名称" width="120"> </el-table-column>
      <el-table-column prop="putTime" label="发布时间" width="220">
      </el-table-column>
      <el-table-column prop="startTime" label="开始时间" width="220">
      </el-table-column>
      <el-table-column prop="endTime" label="结束时间" width="200">
      </el-table-column>
      <el-table-column prop="onTime" label="持续时长" width="80">
      </el-table-column>
      <el-table-column label="查看详情" width="200">
        <el-button type="text">点击查看群成员</el-button>
      </el-table-column>
    </el-table>
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
          number: "1",
          name: "草莓音乐节",
          putTime: "2020.11.15-15:30",
          startTime: "2020.11.15-15:30",
          endTime: "2020.11.16-14:30",
          onTime: "15h",
        },
        {
          number: "1",
          name: "草莓音乐节",
          putTime: "2020.11.15-15:30",
          startTime: "2020.11.15-15:30",
          endTime: "2020.11.16-14:30",
          onTime: "15h",
        },
        {
          number: "1",
          name: "草莓音乐节",
          putTime: "2020.11.15-15:30",
          startTime: "2020.11.15-15:30",
          endTime: "2020.11.16-14:30",
          onTime: "15h",
        },
        {
          number: "1",
          name: "草莓音乐节",
          putTime: "2020.11.15-15:30",
          startTime: "2020.11.15-15:30",
          endTime: "2020.11.16-14:30",
          onTime: "15h",
        },
        {
          number: "1",
          name: "草莓音乐节",
          putTime: "2020.11.15-15:30",
          startTime: "2020.11.15-15:30",
          endTime: "2020.11.16-14:30",
          onTime: "15h",
        },
        {
          number: "1",
          name: "草莓音乐节",
          putTime: "2020.11.15-15:30",
          startTime: "2020.11.15-15:30",
          endTime: "2020.11.16-14:30",
          onTime: "15h",
        },
        {
          number: "1",
          name: "草莓音乐节",
          putTime: "2020.11.15-15:30",
          startTime: "2020.11.15-15:30",
          endTime: "2020.11.16-14:30",
          onTime: "15h",
        },
        {
          number: "1",
          name: "草莓音乐节",
          putTime: "2020.11.15-15:30",
          startTime: "2020.11.15-15:30",
          endTime: "2020.11.16-14:30",
          onTime: "15h",
        },
        {
          number: "1",
          name: "草莓音乐节",
          putTime: "2020.11.15-15:30",
          startTime: "2020.11.15-15:30",
          endTime: "2020.11.16-14:30",
          onTime: "15h",
        },
        {
          number: "1",
          name: "草莓音乐节",
          putTime: "2020.11.15-15:30",
          startTime: "2020.11.15-15:30",
          endTime: "2020.11.16-14:30",
          onTime: "15h",
        },
        {
          number: "1",
          name: "草莓音乐节",
          putTime: "2020.11.15-15:30",
          startTime: "2020.11.15-15:30",
          endTime: "2020.11.16-14:30",
          onTime: "15h",
        },
        {
          number: "1",
          name: "草莓音乐节",
          putTime: "2020.11.15-15:30",
          startTime: "2020.11.15-15:30",
          endTime: "2020.11.16-14:30",
          onTime: "15h",
        },
      ],
      value: true,
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