<template>
  <div id="app">
    <myHeader></myHeader>
    <router-view></router-view>
    <myFoot v-show="$route.meta.footShow" />
  </div>
</template>

<script>
import myHeader from "./components/Header";
import myFoot from "./components/Footer";
export default {
  name: "App",
  components: {
    myHeader,
    myFoot,
  },
  mounted() {
    this.$store.dispatch("home/CategoryList");
  },
};
</script>

<style>
</style>
