<template lang="pug">
  div#app
    router-view
</template>
<script lang="ts">
import { Component, Vue, Provide, Watch, Prop } from "vue-property-decorator";
import { Mutation } from "vuex-class";
import { platform, share } from "@/utils/share.js";
@Component({})
class App extends Vue {}

export default App;
</script>