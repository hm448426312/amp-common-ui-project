<template>
  <el-pagination
    :layout="$attrs.layout || 'total,sizes,prev,pager,next,jumper'"
    ref="AmpPaginationRef"
    v-bind="$attrs"
    v-on="$listeners"
    :hide-on-single-page="true"
  >
    <slot></slot>
  </el-pagination>
</template>

<script>
  export default {
    name: "AmpPagination"
  }
</script>

<style lang="scss" scoped>

</style>
