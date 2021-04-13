<template>
  <div>
    <!-- 上部筛选框 -->
    <div class="selectbox">
      <!-- 批量操作 -->
      <div>
        <span class="title-1">批量操作</span>
        <el-select v-model="selectOne" slot="prepend" placeholder="封号三天">
          <el-option
            v-for="item in optionOne"
            :key="item"
            :value="item"
          ></el-option>
        </el-select>
      </div>
      <!-- 筛选 -->
      <div>
        <span class="title-2">筛选</span>
        <el-select v-model="selectTwo" slot="prepend" placeholder="正常">
          <el-option
            v-for="item in optionTwo"
            :key="item"
            :value="item"
          ></el-option>
        </el-select>
        <span class="title-2">性别</span>
        <el-select v-model="selectThree" slot="prepend" placeholder="男">
          <el-option
            v-for="item in optionThree"
            :key="item"
            :value="item"
          ></el-option>
        </el-select>
      </div>
    </div>
    <!-- 下半部分表格 -->
    <div class="tableForm">
      <el-table
        :header-cell-style="getRowClass"
        stripe
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column label="帐号状态" width="120" prop="days">
        </el-table-column>
        <el-table-column prop="avatar" label="头像" width="120">
          <el-avatar
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          ></el-avatar>
        </el-table-column>
        <el-table-column prop="name" label="昵称" width="120">
        </el-table-column>
        <el-table-column prop="telephone" label="手机号" width="220">
        </el-table-column>
        <el-table-column prop="idCard" label="身份证号" width="220">
        </el-table-column>
        <el-table-column prop="sex" label="性别" width="120"> </el-table-column>
        <el-table-column prop="sign" label="个性签名" width="200">
        </el-table-column>
      </el-table>
    </div>
    <!-- 分页器 -->
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pageNumber"
        :page-sizes="[10]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="23"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageNumber: 1,
      pageSize: 10,
      optionOne: ["封号三天", "封号五天", "封号七天"],
      selectOne: "封号三天",
      optionTwo: ["正常", "不正常"],
      selectTwo: "正常",
      optionThree: ["男", "女"],
      selectThree: "男",
      tableData: [
        {
          days: "封号三天",
          avatar: "",
          name: "辛辣天赛",
          telephone: "16278928980",
          idCard: "513101199712236018",
          sex: "男",
          sign: "让世界感受痛楚",
        },
        {
          days: "封号三天",
          avatar: "",
          name: "辛辣天赛",
          telephone: "16278928980",
          idCard: "513101199712236018",
          sex: "男",
          sign: "让世界感受痛楚",
        },
        {
          days: "封号七天",
          avatar: "",
          name: "辛辣天赛",
          telephone: "16278928980",
          idCard: "513101199712236018",
          sex: "女",
          sign: "让世界感受痛楚",
        },
        {
          days: "封号三天",
          avatar: "",
          name: "辛辣天赛",
          telephone: "16278928980",
          idCard: "513101199712236018",
          sex: "女",
          sign: "让世界感受痛楚",
        },
        {
          days: "封号五天",
          avatar: "",
          name: "辛辣天赛",
          telephone: "16278928980",
          idCard: "513101199712236018",
          sex: "男",
          sign: "让世界感受痛楚",
        },
        {
          days: "封号三天",
          avatar: "",
          name: "辛辣天赛",
          telephone: "16278928980",
          idCard: "513101199712236018",
          sex: "男",
          sign: "让世界感受痛楚",
        },
        {
          days: "封号七天",
          avatar: "",
          name: "辛辣天赛",
          telephone: "16278928980",
          idCard: "513101199712236018",
          sex: "男",
          sign: "让世界感受痛楚",
        },
        {
          days: "封号三天",
          avatar: "",
          name: "辛辣天赛",
          telephone: "16278928980",
          idCard: "513101199712236018",
          sex: "男",
          sign: "让世界感受痛楚",
        },
        {
          days: "封号三天",
          avatar: "",
          name: "辛辣天赛",
          telephone: "16278928980",
          idCard: "513101199712236018",
          sex: "男",
          sign: "让世界感受痛楚",
        },
        {
          days: "封号三天",
          avatar: "",
          name: "辛辣天赛",
          telephone: "16278928980",
          idCard: "513101199712236018",
          sex: "男",
          sign: "让世界感受痛楚",
        },
        {
          days: "封号七天",
          avatar: "",
          name: "辛辣天赛",
          telephone: "16278928980",
          idCard: "513101199712236018",
          sex: "男",
          sign: "让世界感受痛楚",
        },
        {
          days: "封号三天",
          avatar: "",
          name: "辛辣天赛",
          telephone: "16278928980",
          idCard: "513101199712236018",
          sex: "男",
          sign: "让世界感受痛楚",
        },
        {
          days: "封号三天",
          avatar: "",
          name: "辛辣天赛",
          telephone: "16278928980",
          idCard: "513101199712236018",
          sex: "男",
          sign: "让世界感受痛楚",
        },
      ],
    };
  },
  methods: {
    handleCurrentChange(val) {
      console.log(val);
    },
    handleSizeChange(val) {
      console.log(val);
    },
    currentChangePage(list) {
      let from = (this.pageNumber - 1) * this.pageSize;
      let to = this.currentPage * this.pageSize;
      this.tableData = [];
      for (; from < to; from++) {
        if (list[from]) {
          this.tableData.push(list[from]);
        }
      }
    },
    // 更改表头颜色
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
.selectbox {
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
}
.title-2 {
  font-size: 18px;
}
.title-1 {
  font-size: 18px;
  color: #0080cf;
}
.el-select {
  width: 111px;
  height: 10px;
  margin-left: 10px;
  margin-right: 10px;
}
</style>