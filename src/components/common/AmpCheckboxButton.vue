<template>
  <el-checkbox-button
    ref="AmpCheckboxButtonRef"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot></slot>
  </el-checkbox-button>
</template>

<script>
  export default {
    name: "AmpCheckboxButton"
  }
</script>

<style lang="scss" scoped>

</style>
