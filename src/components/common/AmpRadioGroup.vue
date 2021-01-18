<template>
  <el-radio-group
    ref="AmpRadioGroupRef"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot></slot>
  </el-radio-group>
</template>

<script>
  export default {
    name: "AmpRadioGroup"
  }
</script>

<style lang="scss" scoped>

</style>
