<script>
// render jsx
export default {
//   props: {
//     tag:String
//   },
//   render(h) {
//     const tag = this.tag || 'div'
//     return h(tag, {
//       class: 'my-el-row'
//     },this.$slots.default)
//   }
// }
props: {
  span: Number
},
render(h) {
  const tag = this.tag || 'div'
  const classCol = `my-el-col-${this.span}`
  const level
  return h(tag, {
    class: [classCol]
  }, this.$slots.default)
}
}
</script>

<style scoped lang="scss">
/* .my-el-col-12 {
  width: calc(1 / 24 * 12 * 100)% 
}
.my-el-col-6 {
  width: calc(1 / 24 * 12 * 100)% 
}
.my-el-col-4 {
  width: calc(1 / 24 * 12 * 100)% 
} */
@for $i from 0 through 24 {
  .my-el-col-#{$i} {
    width: (1 / 24 * $i * 100 ) * 1%;
  }
}


</style>