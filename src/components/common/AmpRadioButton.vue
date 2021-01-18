<template>
  <el-radio-button
    ref="AmpRadioButtonRef"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot></slot>
  </el-radio-button>
</template>

<script>
  export default {
    name: "AmpRadioButton"
  }
</script>

<style lang="scss" scoped>

</style>
