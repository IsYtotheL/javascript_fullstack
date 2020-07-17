setTimeout(() => {
  console.log('timer1')

Promise.resolve().then(() => {
  console.log('Promise1')
})
},0)
process.nextTick(() => {
  console.log('nextTick')
  process.nextTick(() => {
    console.log('nextTick')
    process.nextTick(() => {
      console.log('nextTick')
      process.nextTick(() => {
        console.log('nextTick')
      })
    })
  })
})