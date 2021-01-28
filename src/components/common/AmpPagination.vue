<template>
  <el-pagination
    v-if="$attrs.total && $attrs.total > 0"
    :layout="$attrs.layout || 'total,sizes,prev,pager,next,jumper'"
    ref="AmpPaginationRef"
    v-bind="$attrs"
    v-on="$listeners"
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
