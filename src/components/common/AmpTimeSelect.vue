<template>
  <el-time-select
    ref="AmpTimeSelectRef"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot></slot>
  </el-time-select>
</template>

<script>
  export default {
    name: "AmpTimeSelect"
  }
</script>

<style lang="scss" scoped>

</style>
