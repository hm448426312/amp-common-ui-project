<template>
  <el-date-picker
    ref="AmpDatePickerRef"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot></slot>
  </el-date-picker>
</template>

<script>
  export default {
    name: "AmpDatePicker"
  }
</script>

<style lang="scss" scoped>

</style>
