 
 <template>
  <el-container>
    <!-- 左侧树菜单 -->
    <el-aside width="200px">
      <el-menu
        router
        :default-active="defaultHash"
        class="el-menu-vertical-demo"
        background-color="#fff200"
        text-color="#000000"
        active-text-color="#ffffff"
        unique-opened
      >
        <img
          src="../assets/image/asideLogo.png"
          alt=""
          srcset=""
          class="asideLogo"
        />
        <div v-for="(item, index) in list" :key="index">
          <!-- 折叠菜单 -->
          <el-submenu v-if="item.children" :index="item.index">
            <!-- 大标题的名字及图标 -->
            <template slot="title">
              <i :class="item.i"></i>
              <span>{{ item.name }}</span>
            </template>

            <el-menu-item-group>
              <!-- 儿子 -->
              <el-menu-item
                v-for="child in item.children"
                :key="child.name"
                :index="child.index"
                >{{ child.name }}</el-menu-item
              >
            </el-menu-item-group>
          </el-submenu>
          <!-- 一层菜单 -->
          <el-menu-item v-else :index="item.index">
            <i :class="item.i"></i>
            <span slot="title">{{ item.name }}</span>
          </el-menu-item>
        </div>
      </el-menu>
    </el-aside>
    <!-- 右侧容器 -->
    <el-container>
      <el-header>
          <el-input
            placeholder="搜索用户"
            v-model="input"
            clearable
            class="serchBox"
            prefix-icon="el-icon-search"
          >
          </el-input>
          <el-popover placement="top" width="200" v-model="visible">
            <p>确定退出登录吗？</p>
            <div style="text-align: right; margin: 0">
              <el-button size="mini" type="text" @click="quitOut()"
                >取消</el-button
              >
              <el-button type="primary" size="mini" @click="loginOut()"
                >确定</el-button
              >
            </div>
            <el-button slot="reference">{{ title }}</el-button>
          </el-popover>
      </el-header>
      <el-main>
        <!-- 放置二级路由的出口 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import axios from "axios";

axios.defaults.baseURL = "/apis";
export default {
  data() {
    return {
      input: "",
      visible: false,
      title: "admin",
      headimg: "",
      defaultHash: "/nav/main", //默认选中的hash
      // index: 索引 i：图标 name：选项卡的名字  children：是否有子选项
      list: [
        {
          index: "/nav/main",
          name: "数据统计",
          role: ["super", "normal"], //能看到的权限
        },
        {
          index: "/nav/dataman",
          name: "用户管理",
          children: [
            { index: "/nav/single", name: "个人用户" },
            { index: "/nav/group", name: "群组" },
          ],
          role: ["super"],
        },
        {
          index: "/nav/shopmananger",
          name: "内容管理",
          role: ["super", "normal"],
          children: [
            { index: "/nav/infofilter", name: "内容过滤" },
            { index: "/nav/infoverity", name: "活动审核" },
            { index: "/nav/actverity", name: "动态审核" },
          ],
        },
        {
          index: "5",
          name: "推送管理 ",
          role: ["super"],
        },
        {
          index: "/nav/propman",
          name: "应用系统",
          role: ["super", "normal"],
        },
        {
          index: "6",
          name: "广告推广",
          children: [
            { index: "/nav/dataman", name: "启动页" },
            { index: "/nav/otherSDK", name: "轮播图" },
            { index: "/nav/anounceact", name: "更多活动推广" },
          ],
          role: ["super"],
        },
        {
          index: "/nav/adverprop",
          name: "举报审核",
          children: [
            { index: "/nav/singledata", name: "个人" },
            { index: "/nav/visualdata", name: "群组" },
          ],
          role: ["super", "normal"],
        },
        {
          index: "/nav/mine",
          name: "我的消息",
          role: ["super", "normal"],
        },
      ],
    };
  },
  created() {},
  methods: {
    loginOut() {
      this.visible = false;
      axios({
        method: "post",
        url: "/admin/logout",
      }).then((res) => {
        // console.log(res.data.status == 2000000);
        if (res.data.status == 2000000) {
          this.$router.push("/");
        }
      });
    },
    quitOut() {
      this.visible = false;
    },
  },
};
</script>

<style  scoped>
.el-container {
  height: 800px;
}
.el-menu {
  border: 0;
  font-size: 26px;
  font-weight: 800;
}
.serchBox {
  width: 40%;
}
.el-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.el-footer {
  background-color: #b3c0d1;
}

.el-aside {
  background-color: #fff200;
}

.el-main {
  background-color: #f8f8f8;
}
.asideLogo {
  width: 100%;
  height: 100%;
}

</style>