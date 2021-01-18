<template>
  <el-time-picker
    ref="AmpTimePickerRef"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot></slot>
  </el-time-picker>
</template>

<script>
  export default {
    name: "AmpTimePicker"
  }
</script>

<style lang="scss" scoped>

</style>
