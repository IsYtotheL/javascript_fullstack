<template>
  <div class="count">
    {{count}}
    <button @click="addAction(10)">+</button>
    <!-- <button @click="reduceAction">-</button> -->
    <button @click="reduce">-</button>
    {{getCount}}
    <!-- {{$store.state.count}} -->
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'
export default {
data () {
  return {
   // myCount: null
  }
},
// mounted () {
//   this.myCount = this.$store.state.count
// },
// computed: {
// // myCount () {
// //   return this.$store.state.count
// // }

// },
// computed: mapState({
//  mycount: state => state.count
//   // myCount (state) { 一样
//   //   return state.count
//   // }
// }),
// computed: mapState(['count']),
computed: {
  ...mapState([
    'count'
  ]),
  ...mapGetters([
    'getCount'
  ])
  // getCount () {
  //   return this.$store.getters.getCount
  // }
},
methods: {
  ...mapMutations([
    'add', // 同步
    'reduce'
  ]),
  ...mapActions([
    'addAction', //异步
    'reduceAction'
  ])
  // test () { 
  //   this.myCount++
  //    }
}
}
</script>

<style>

</style>