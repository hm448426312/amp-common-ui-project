<template>
  <el-option-group
    ref="AmpOptionGroupRef"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <template v-for="(index, name) in $slots" v-slot:[name] >
      <slot :name="name"></slot>
    </template>
  </el-option-group>
</template>

<script>
  export default {
    name: "AmpOptionGroup"
  }
</script>

<style lang="scss" scoped>

</style>
