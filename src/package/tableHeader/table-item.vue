<template>
  <el-table-column
    :prop="item.prop"
    :label="item.label"
    v-if="!item.children"
  ></el-table-column>
  <el-table-column
    :label="item.label"
    v-else
  >
    <table-item
      v-for="(itemChild,indexChild) in item.children"
      :key="indexChild"
      :item="itemChild"
    ></table-item>
  </el-table-column>
</template>

<script>
export default {
  name: "table-item",
  props: {
    item: {
      type: [Object],
      required: true
    }
  }
}
</script>

<style scoped>
</style>
