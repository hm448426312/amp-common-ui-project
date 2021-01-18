<template>
  <el-switch
    ref="AmpSwitchRef"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot></slot>
  </el-switch>
</template>

<script>
  export default {
    name: "AmpSwitch",
  }
</script>

<style lang="scss" scoped>

</style>
