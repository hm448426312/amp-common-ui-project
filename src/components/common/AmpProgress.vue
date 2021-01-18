<template>
  <el-progress
    ref="AmpProgressRef"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot></slot>
  </el-progress>
</template>

<script>
  export default {
    name: "AmpProgress"
  }
</script>

<style lang="scss" scoped>

</style>
