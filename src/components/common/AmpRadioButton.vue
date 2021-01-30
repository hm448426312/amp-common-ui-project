<template>
  <el-radio-button
    ref="AmpRadioButtonRef"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <template v-for="(index, name) in $slots" v-slot:[name] >
      <slot :name="name"></slot>
    </template>
  </el-radio-button>
</template>

<script>
  export default {
    name: "AmpRadioButton"
  }
</script>

<style lang="scss" scoped>

</style>
