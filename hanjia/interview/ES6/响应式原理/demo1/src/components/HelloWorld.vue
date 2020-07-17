<template>
  <div class="login">
    <input type="text" placeholder="请输入账号" v-model="username">
    <input type="text" placeholder="请输入密码" v-model="password">
    <button v-on:click="toLogin">登录</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: 'Linn',
      password: ''
    }
  },
  methods: {
    toLogin () {
      if (!this.username || !this.password) { //取数据源中的数据
        alert('账号或密码不能为空!')
      } else {
        alert(`登陆成功!账号:${this.username},密码:${this.password}`)
      }
    }
  }
}
</script>

<style>

</style>