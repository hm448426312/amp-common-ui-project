<template>
  <el-timeline
    ref="AmpTimelineRef"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <template v-for="(index, name) in $slots" v-slot:[name] >
      <slot :name="name"></slot>
    </template>
  </el-timeline>
</template>

<script>
  export default {
    name: "AmpTimeline"
  }
</script>

<style lang="scss" scoped>

</style>
