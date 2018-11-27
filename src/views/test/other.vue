<template lang="pug">
  div
    p other 页面
    p 获取的数据 ===> 
      span {{this.$route.params.id}}
</template>

<script lang="ts">
import { Vue,Component } from "vue-property-decorator";

@Component({})
class Other extends Vue {
  beforeRouteLeave(to, from, next) {
    // 参数用法什么的都一样,调用顺序在全局前置守卫后面，所以不会被全局守卫覆盖
    // ...
    console.log('other leave ==>', to, from)
    next()
  }
}

export default Other;
</script>

<style scoped>
p {
  font-size: 0.3rem;
}
span {
  color: red;
}
</style>

