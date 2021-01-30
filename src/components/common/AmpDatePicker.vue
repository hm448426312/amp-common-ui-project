<template>
  <el-date-picker
    ref="AmpDatePickerRef"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <template v-for="(index, name) in $slots" v-slot:[name] >
      <slot :name="name"></slot>
    </template>
  </el-date-picker>
</template>

<script>
  export default {
    name: "AmpDatePicker"
  }
</script>

<style lang="scss" scoped>

</style>
