<template>
  <el-radio-group
    ref="AmpRadioGroupRef"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <template v-for="(index, name) in $slots" v-slot:[name] >
      <slot :name="name"></slot>
    </template>
  </el-radio-group>
</template>

<script>
  export default {
    name: "AmpRadioGroup"
  }
</script>

<style lang="scss" scoped>

</style>
