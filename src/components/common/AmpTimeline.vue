<template>
  <el-timeline
    ref="AmpTimelineRef"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot></slot>
  </el-timeline>
</template>

<script>
  export default {
    name: "AmpTimeline"
  }
</script>

<style lang="scss" scoped>

</style>
