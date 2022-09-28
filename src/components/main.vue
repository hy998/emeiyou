<template>
  <div id="main">
    <router-view />
    <div class="bomms">
      <ul>
        <li v-for="(item, index) in tabber" :key="index" :class="{ isclick: bomvalue === index }" @click="change(item)">
          <p>{{ item.name }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    msg: String
  },
  data() {
    return {
      bomvalue: 0,
      tabber: [
        { name: '首页', key: 0, link: '/home' },
        { name: '消息', key: 1, link: '/news' },
        { name: '设置', key: 2, link: '/setting' },
        { name: '我的', key: 3, link: '/myde' }
      ]
    }
  },
  methods: {
    change(item) {
      this.bomvalue = item.key;
      this.$router.push({ path: item.link })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/less" lang="less" scoped>
#main {
  width: 100%;
  height: 100%;
  background: #ffffff;
  position: relative;
  display: flex;
  flex-direction: column;

  .bomms {
    width: 100%;
    height: 1rem;
    position: fixed;
    bottom: 0;
    background: #F5F5F6;

    ul {
      display: flex;
      justify-content: space-between;

      li {
        padding-top: .2rem;
        list-style: none;
        width: 25%;
        text-align: center;
        font-size: .32rem;
        color: #333;
      }

      .isclick {
        font-weight: 600;
        color: #0ab188;
      }
    }
  }
}
</style>
