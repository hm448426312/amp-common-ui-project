<template>
  <el-time-picker
    ref="AmpTimePickerRef"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <template v-for="(index, name) in $slots" v-slot:[name] >
      <slot :name="name"></slot>
    </template>
  </el-time-picker>
</template>

<script>
  export default {
    name: "AmpTimePicker"
  }
</script>

<style lang="scss" scoped>

</style>
