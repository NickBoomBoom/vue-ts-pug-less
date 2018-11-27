<template lang="pug">
  div
    p(ref="node") {{PageTitle}}
    ul 
      li(v-for="(item,index) in arr" :key="item.id") {{item.text}}
</template>
<script lang="ts">
import { Component, Vue, Provide, Watch, Prop } from "vue-property-decorator";
import { State, Action, Getter, Mutation } from "vuex-class";

@Component({})
class List extends Vue {

  // props
  @Prop() private arr?: any[]

  // data
  @Provide() PageTitle: string = '子组件测试'

  created() {
    // console.log('list组件接受 props',this.arr)
  }
  
  mounted() {
    console.log(this.$refs.node)
  }
}

export default List
</script>

<style scoped>
p {
  font-size: .3rem;
}
</style>
