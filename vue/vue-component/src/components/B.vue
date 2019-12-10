<template>
  <div class="b-test">
    B{{name}}
    <testc></testc>
    </div>
</template>

<script>
import C from './C'
export default {
inject: ['name'],
components: {
  'testc': C
},
mounted () {
  console.log(this,name)
}
}
</script>

<style>

</style>