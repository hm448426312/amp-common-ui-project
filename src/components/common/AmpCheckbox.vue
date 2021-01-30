<template>
  <el-checkbox
    ref="AmpCheckboxRef"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <template v-for="(index, name) in $slots" v-slot:[name] >
      <slot :name="name"></slot>
    </template>
  </el-checkbox>
</template>

<script>
  export default {
    name: "AmpCheckbox"
  }
</script>

<style lang="scss" scoped>

</style>
