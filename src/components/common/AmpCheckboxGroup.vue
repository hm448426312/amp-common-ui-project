<template>
  <el-checkbox-group
    ref="AmpCheckboxGroupRef"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <template v-for="(index, name) in $slots" v-slot:[name] >
      <slot :name="name"></slot>
    </template>
  </el-checkbox-group>
</template>

<script>
  export default {
    name: "AmpCheckboxGroup"
  }
</script>

<style lang="scss" scoped>

</style>
