<template>
  <div class="child">
    <h1>子组件</h1>
    <p>The Msg from father is:</p>
    <strong>{{sendMsg}}</strong>

    <p class="hr"></p>

    <p>The ChangeMsg from child is:</p>
    <strong>{{changeMsg}}</strong>
  </div>
</template>

<script>
export default {
  props: ['sendMsg'],
  computed: {
    changeMsg () {
      return this.sendMsg.toUpperCase()
    }
  }
}
</script>

<style>
.hr{
  margin: 50px 0;
}
</style>