<template>
  <div id="home">
    首页
    <br />
    <!-- <router-link to="/orders">订单页面</router-link> -->
    <button ref="btns">触发延迟</button>
    <p @click="ceshi">ajax请求</p>
  </div>
</template>

<script>
export default {
  props: {
    msg: String
  },
  methods: {
    transitionend() {
      alert(
        '触发了'
      )
    },
    ceshi() {
      this.axios.get('/api.emeiyou.cn/1111.json', {
        params: {}
      }).then(res => {
        if (res.status) {
          console.log(res)
        }
      }) 
      this.axios.post('/api.emeiyou.cn/2222.json', {
      }).then(res => {
        if (res.status) {
          console.log(res)
        }
      }) 
    }
  },
  created() {
  },
  mounted() {
    this.$refs["btns"].addEventListener("transitionend", this.transitionend);
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/less" lang="less" scoped>
#home {
  font-size: .28rem;
  line-height: .32rem;
  button:hover {
    opacity: 0.999;
    /*无关紧要的样式*/
    transition: 0s 1s opacity;
    /*延时 1s */
  }
  p {
    font-size: .28rem;
  }
}
</style>
