<template>
  <div>
    <typeNav />
    <listContainer />
    <todayRecommend />
    <rank />
    <like />
    <floor v-for="f in floorList" :key="f.id" :list="f" />
    <brand />
  </div>
</template>

<script>
import listContainer from "./ListContainer";
import todayRecommend from "./TodayRecommend";
import rank from "./Rank";
import like from "./Like";
import floor from "./Floor";
import brand from "./Brand";
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  components: {
    listContainer,
    todayRecommend,
    rank,
    like,
    floor,
    brand,
  },
  computed: {
    ...mapState("home", ["floorList"]),
  },
  mounted() {
    this.$store.dispatch("home/FloorList");
  },
};
</script>
<style lang='less' scoped>
</style>