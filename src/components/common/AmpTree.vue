<template>
  <el-tree
    ref="AmpTreeRef"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot></slot>
  </el-tree>
</template>

<script>
  export default {
    name: "AmpTree"
  }
</script>

<style lang="scss" scoped>

</style>
