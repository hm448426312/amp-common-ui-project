<template>
  <el-checkbox-group
    ref="AmpCheckboxGroupRef"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot></slot>
  </el-checkbox-group>
</template>

<script>
  export default {
    name: "AmpCheckboxGroup"
  }
</script>

<style lang="scss" scoped>

</style>
