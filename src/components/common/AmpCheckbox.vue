<template>
  <el-checkbox
    ref="AmpCheckboxRef"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot></slot>
  </el-checkbox>
</template>

<script>
  export default {
    name: "AmpCheckbox"
  }
</script>

<style lang="scss" scoped>

</style>
