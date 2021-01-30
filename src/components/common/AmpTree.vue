<template>
  <el-tree
    ref="AmpTreeRef"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <template v-for="(index, name) in $slots" v-slot:[name] >
      <slot :name="name"></slot>
    </template>
  </el-tree>
</template>

<script>
  export default {
    name: "AmpTree"
  }
</script>

<style lang="scss" scoped>

</style>
