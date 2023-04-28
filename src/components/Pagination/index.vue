<template>
  <div class="pagination">
    <button
      :disabled="pageNo == 1"
      @click="getPageNo(pageNo - 1 > 0 ? pageNo - 1 : 1)"
    >
      上一页
    </button>
    <button
      v-if="startNumAndEndNum.start > 1"
      @click="getPageNo(1)"
      :class="{ active: pageNo == 1 }"
    >
      1
    </button>
    <button v-if="startNumAndEndNum.start > 2">···</button>

    <button
      v-for="(page, index) in startNumAndEndNum.end"
      :key="index"
      v-if="page >= startNumAndEndNum.start"
      @click="getPageNo(page)"
      :class="{ active: pageNo == page }"
    >
      {{ page }}
    </button>

    <button v-if="startNumAndEndNum.end < totalPages - 1">···</button>
    <button
      v-if="startNumAndEndNum.end < totalPages"
      @click="getPageNo(totalPages)"
      :class="{ active: pageNo == totalPages }"
    >
      {{ totalPages }}
    </button>
    <button
      :disabled="pageNo == totalPages"
      @click="getPageNo(pageNo + 1 <= totalPages ? pageNo + 1 : totalPages)"
    >
      下一页
    </button>

    <button style="margin-left: 30px">共 {{ total }}条</button>
  </div>
</template>
  
  <script>
export default {
  name: "Pagination",
  props: ["pageNo", "pageSize", "total", "continues"],
  computed: {
    totalPages() {
      return Math.ceil(this.total / this.pageSize);
    },
    startNumAndEndNum() {
      const { total, pageNo, continues, totalPages } = this;
      let start,
        end = 0;
      if (continues > totalPages) {
        start = 1;
        end = totalPages;
      } else {
        start = pageNo - parseInt(continues / 2);
        end = pageNo + parseInt(continues / 2);
        if (start < 1) {
          start = 1;
          end = continues;
        }
        if (end > totalPages) {
          end = totalPages;
          start = end - continues + 1;
        }
      }
      return { start, end };
    },
  },
  methods: {
    getPageNo(pageNo) {
      this.$emit("getPageNo", pageNo);
    },
  },
};
</script>
  
  <style lang="less" scoped>
.pagination {
  text-align: center;
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  }
}
</style>