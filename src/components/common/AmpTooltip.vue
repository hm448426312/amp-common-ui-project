<template>
  <el-tooltip
    ref="AmpTooltipRef"
    v-bind="$attrs"
  >
    <slot></slot>
  </el-tooltip>
</template>

<script>
  export default {
    name: "AmpTooltip",
    methods: {}
  }
</script>

<style lang="scss" scoped>

</style>
