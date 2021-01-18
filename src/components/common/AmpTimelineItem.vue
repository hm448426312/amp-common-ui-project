<template>
  <el-timeline-item
    ref="AmpTimelineItemRef"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot></slot>
  </el-timeline-item>
</template>

<script>
  export default {
    name: "AmpTimelineItem"
  }
</script>

<style lang="scss" scoped>

</style>
