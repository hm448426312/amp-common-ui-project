<template>
  <el-tooltip
    ref="AmpTooltipRef"
    v-bind="$attrs"
  >
    <template v-for="(index, name) in $slots" v-slot:[name] >
      <slot :name="name"></slot>
    </template>
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
