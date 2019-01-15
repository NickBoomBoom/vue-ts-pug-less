<template lang="pug">
  div#test
    p {{pageName}}
    p 
      span.title vuex title: 
        span.subtitle {{title}}
    p 计算属性: 
      span.subtitle {{comNum}}

    input(v-model='pageTitle' placeholder='输入,同步修改 vuex title 属性') 
    button(@click='async_title') 按钮 vuex actions 异步
    hr
    List(:arr='testList')
    button(@click='jump') 跳转other页面:路由传参

    div.flex
      div.box flex布局测试
    
    h1 Vant 组件测试
    DatetimePicker.date-l(v-model="currentDate" type="date" :min-date="minDate")

</template>

<script lang="ts">
import { Component, Vue, Provide, Watch } from "vue-property-decorator";
import { State, Action, Getter, Mutation } from "vuex-class";
import List from "./list.vue";
import { DatetimePicker } from "vant";

@Component({
  components: {
    List,
    DatetimePicker
  }
})
class Test extends Vue {
  // 继承 vue 全局方法
  constructor() {
    super();
  }

  // data
  @Provide() num: number = 1;
  @Provide() pageName: string = "测试页面";
  @Provide() list: string[] = ["1", "2", "3"];
  @Provide() pageTitle: string = "";
  @Provide() testList: object[] = [
    { id: 1, text: "列表1" },
    { id: 2, text: "列表2" },
    { id: 3, text: "列表3" }
  ];
  // 元祖数组写法
  @Provide() arr3: [string, number, () => void] = [
    "1",
    2,
    () => console.log("元祖数组")
  ];
  // 只读属性修饰符
  @Provide() readonly age: number = 11;
  @Provide() minHour: number = 10;
  @Provide() maxHour: number = 20;
  @Provide() minDate: any = new Date();
  @Provide() maxDate: any = new Date(2019, 10, 1);
  @Provide() currentDate: any = new Date();

  // computed 计算属性
  get comNum(): number {
    return this.num;
  }
  // vuex
  @State title!: string;
  @Mutation SET_TITLE!: (title: string) => void;
  @Action async_title!: () => void;

  // 生命周期
  created() {}

  jump(): void {
    this.$router.push({ name: "other", params: { id: "999" } });
  }

  // watch
  @Watch("pageTitle")
  onchange(value: string, oldValue: string) {
    console.log("pageTitle ==>", value, oldValue);
    this.SET_TITLE(value);
  }

  // 路由
  beforeRouteEnter(to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
    console.log(to, from, next);
    next();
  }
}
export default Test;
</script>

<style scoped>
p {
  font-size: 0.3rem;
}
input {
  width: 100%;
  height: 1rem;
  font-size: 0.3rem;
  color: red;
  border: 1px solid skyblue;
}
button {
  font-size: 0.3rem;
  color: blue;
  background-color: aquamarine;
}
.title {
  font-weight: 700;
}
.subtitle {
  color: brown;
}
.flex {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 0.2rem;
}
.box {
  width: 3rem;
  height: 0.6rem;
  background-color: red;
}
.date-l {
  border: 1px solid red;
  margin-top: .3rem;
}
</style>


