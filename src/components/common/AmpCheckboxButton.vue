<template>
  <el-checkbox-button
    ref="AmpCheckboxButtonRef"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <template v-for="(index, name) in $slots" v-slot:[name] >
      <slot :name="name"></slot>
    </template>
  </el-checkbox-button>
</template>

<script>
  export default {
    name: "AmpCheckboxButton"
  }
</script>

<style lang="scss" scoped>

</style>
