import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../pages/Login.vue";

Vue.use(VueRouter);

var router = new VueRouter({
  base: process.env.BASE_URL,
  routes: [
    // 初始加载登录界面
    {
      path: "/",
      name: "login",
      component: Login,
    },
    {
      path: "/nav",
      name: "nav",
      component: () => import("../pages/Nav.vue"),
      children: [
        // 导航，首页
        {
          path: "/nav/main",
          name: "nav/main",
          component: () => import("../pages/nav/Main.vue"),
        },
        // 导航-数据统计
        {
          path: "/nav/dataman",
          name: "nav/dataman",
          component: () => import("../pages/nav/Dataman.vue"),
        },
        // ------------------------------用户--------------------------------
        // 导航-个人用户
        {
          path: "/nav/single",
          name: "nav/single",
          component: () => import("../pages/nav/Single.vue"),
        },
        // 导航-群组
        {
          path: "/nav/group",
          name: "nav/group",
          component: () => import("../pages/nav/Group.vue"),
        },
        // 导航-举报个人
        {
          path: "/nav/singledata",
          name: "nav/singledata",
          component: () => import("../pages/nav/Singledata.vue"),
        },
        // ------------------------------内容--------------------------------
        // 导航-内容过滤
        {
          path: "/nav/infofilter",
          name: "nav/infofilter",
          component: () => import("../pages/nav/Infofilter.vue"),
        },
        // 导航-内容审核
        {
          path: "/nav/infoverity",
          name: "nav/infoverity",
          component: () => import("../pages/nav/Infoverity.vue"),
        },
        // 导航-动态审核
        {
          path: "/nav/actverity",
          name: "nav/actverity",
          component: () => import("../pages/nav/Actverity.vue"),
        },

        // ------------------------------推送管理--------------------------------
        {
          path: "/nav/propman",
          name: "nav/propman",
          component: () => import("../pages/nav/Propman.vue"),
        },
        // ------------------------------应用系统--------------------------------
         // 举报-群组
         {
          path: "/nav/visualdata",
          name: "nav/visualdata",
          component: () => import("../pages/nav/Visualdata.vue"),
        },
        // 导航-第三方接口
        {
          path: "/nav/otherSDK",
          name: "nav/otherSDK",
          component: () => import("../pages/nav/OtherSDK.vue"),
        },
        // 导航-宣传活动
        {
          path: "/nav/anounceact",
          name: "nav/anounceact",
          component: () => import("../pages/nav/Anounceact.vue"),
        },
        // ------------------------------广告推广--------------------------------
        {
          path: "/nav/adverprop",
          name: "nav/adverprop",
          component: () => import("../pages/nav/Adverprop.vue"),
        },
         // ------------------------------我的消息--------------------------------
         {
          path: "/nav/mine",
          name: "nav/adverprop",
          component: () => import("../pages/nav/Adverprop.vue"),
        },
      ],
    },
  ],
});

export default router;
