<template>
  <div>
    <el-table
      :data="tableData.data"
      style="width: 100%"
    >
      <template>
        <tableItem
          v-for="(item,key) in tableData.head"
          :key="key"
          :item="item"
        />
      </template>
      <template #empty>无数据展示</template>
    </el-table>
  </div>

</template>

<script>
import tableItem from './table-item'
export default {
  name: "ui-tableHeader",
  components: {
    tableItem
  },
  props: {
    tableData: {
      type: [Object],
      required: true
    }
  }
}
</script>

