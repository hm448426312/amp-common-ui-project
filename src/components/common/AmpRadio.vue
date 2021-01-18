<template>
  <el-radio
    ref="AmpRadioRef"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot></slot>
  </el-radio>
</template>

<script>
  export default {
    name: "AmpRadio"
  }
</script>

<style lang="scss" scoped>

</style>
