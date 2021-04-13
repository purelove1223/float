<template>
  <div>
    <div class="select">
      <!-- 上部分选择栏 -->
      <div>
        <span class="title-2">举报理由</span>
        <el-select
          v-model="selectTwo"
          slot="prepend"
          placeholder="群成员存在赌博"
        >
          <el-option
            v-for="item in optionTwo"
            :key="item"
            :value="item"
          ></el-option>
        </el-select>
      </div>
      <div>
        <span class="title-2">批量操作</span>
        <el-select
          v-model="selectThree"
          slot="prepend"
          placeholder="回复举报者"
        >
          <el-option
            v-for="item in optionThree"
            :key="item"
            :value="item"
          ></el-option>
        </el-select>
      </div>
    </div>
    <el-table
      :header-cell-style="getRowClass"
      stripe
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column prop="upMan" label="举报者" width="220">
      </el-table-column>
      <el-table-column prop="upedGroup" label="被举报的群" width="220">
      </el-table-column>
      <el-table-column prop="upTime" label="举报时间" width="220">
      </el-table-column>
      <el-table-column prop="upReason" label="举报理由" width="270">
      </el-table-column>
      <el-table-column label="举报详情" width="260">
        <el-button type="text">点击查看</el-button>
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
      selectTwo: ["群成员存在赌博"],
      optionTwo: ["群成员存在赌博", "群成员提供色情服务"],
      selectThree: ["回复举报者"],
      optionThree: ["回复举报者", "封号举报者"],
      tableData: [
        {
          upMan: "多弗朗明哥",
          upedGroup: "爱我就别走",
          upTime: "2020.11.25-18:32",
          upReason: "群成员存在赌博",
        },
        {
          upMan: "多弗朗明哥",
          upedGroup: "爱我就别走",
          upTime: "2020.11.25-18:32",
          upReason: "群成员存在赌博",
        },
        {
          upMan: "多弗朗明哥",
          upedGroup: "爱我就别走",
          upTime: "2020.11.25-18:32",
          upReason: "群成员存在赌博",
        },
        {
          upMan: "多弗朗明哥",
          upedGroup: "爱我就别走",
          upTime: "2020.11.25-18:32",
          upReason: "群成员存在赌博",
        },
        {
          upMan: "多弗朗明哥",
          upedGroup: "爱我就别走",
          upTime: "2020.11.25-18:32",
          upReason: "群成员存在赌博",
        },
        {
          upMan: "多弗朗明哥",
          upedGroup: "爱我就别走",
          upTime: "2020.11.25-18:32",
          upReason: "群成员存在赌博",
        },
        {
          upMan: "多弗朗明哥",
          upedGroup: "爱我就别走",
          upTime: "2020.11.25-18:32",
          upReason: "群成员存在赌博",
        },
        {
          upMan: "多弗朗明哥",
          upedGroup: "爱我就别走",
          upTime: "2020.11.25-18:32",
          upReason: "群成员存在赌博",
        },
        {
          upMan: "多弗朗明哥",
          upedGroup: "爱我就别走",
          upTime: "2020.11.25-18:32",
          upReason: "群成员存在赌博",
        },
        {
          upMan: "多弗朗明哥",
          upedGroup: "爱我就别走",
          upTime: "2020.11.25-18:32",
          upReason: "群成员存在赌博",
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
.select {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
}
.title-2 {
  font-size: 18px;
}
.el-select {
  width: 181px;
  height: 10px;
  margin-left: 10px;
  margin-right: 10px;
}
</style>