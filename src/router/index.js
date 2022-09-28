import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const main = () => import("@/components/main");
const orders = () => import("@/components/orders");

const home = () => import("@/view/home");
const news = () => import("@/view/news");
const setting = () => import("@/view/setting");
const myde = () => import("@/view/myde");

var router = new Router({
  mode: "history",
  routes: [{
      path: '/',
      name: 'main',
      component: main,
      children: [{
          path: 'home',
          name: 'home',
          component: home,
          meta: {
            title: '首页'
          }
        },
        {
          path: 'news',
          name: 'news',
          component: news,
          meta: {
            title: '消息'
          }
        },
        {
          path: 'setting',
          name: 'setting',
          component: setting,
          meta: {
            title: '设置'
          }
        },
        {
          path: 'myde',
          name: 'myde',
          component: myde,
          meta: {
            title: '我的'
          }
        }
      ]
    },
    {
      path: '/orders',
      name: 'orders',
      component: orders,
      meta: {
        title: '订单管理'
      }
    },
  ]
});

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});

export default router;