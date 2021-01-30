<template>
  <el-progress
    ref="AmpProgressRef"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <template v-for="(index, name) in $slots" v-slot:[name] >
      <slot :name="name"></slot>
    </template>
  </el-progress>
</template>

<script>
  export default {
    name: "AmpProgress"
  }
</script>

<style lang="scss" scoped>

</style>
