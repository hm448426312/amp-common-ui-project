<template>
  <el-timeline-item
    ref="AmpTimelineItemRef"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <template v-for="(index, name) in $slots" v-slot:[name] >
      <slot :name="name"></slot>
    </template>
  </el-timeline-item>
</template>

<script>
  export default {
    name: "AmpTimelineItem"
  }
</script>

<style lang="scss" scoped>

</style>
