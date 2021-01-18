<template>
  <el-option-group
    ref="AmpOptionGroupRef"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot></slot>
  </el-option-group>
</template>

<script>
  export default {
    name: "AmpOptionGroup"
  }
</script>

<style lang="scss" scoped>

</style>
