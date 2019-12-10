## babel
js的语法编译器

class 关键词 -> babel ->es5 的代码
里面有丰富的插件机制
vue 提供了 transform-vue-jsx 负责将 template 编译为 js


```js
<el-row>
  <el-col>12</el-col>
</el-row>

"use strict";

h("el-row", [h("el-col", ["12"])]);
```

<template>
<!-- ! -->
<!-- <section></section> -->
  <div class="my-el-row">
    <slot></slot>
  </div>
  <!-- h('div') -->
</template>




    // return (
    //   <div class="my-el-row">
    //   123
    //     <slot></slot>
    //   </div>
    // )
    const tag = this.tag || 'div';
    //标签名 组件名
    //标签上的属性 class style width
    //子节点
    return h(tag, {
      class: 'my-el-row'
    },this.$slots.default)
  }
  }