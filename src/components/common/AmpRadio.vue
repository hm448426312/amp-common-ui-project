<template>
  <el-radio
    ref="AmpRadioRef"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <template v-for="(index, name) in $slots" v-slot:[name] >
      <slot :name="name"></slot>
    </template>
  </el-radio>
</template>

<script>
  export default {
    name: "AmpRadio"
  }
</script>

<style lang="scss" scoped>

</style>
