<template>
  <el-link
    ref="AmpLinkRef"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <template v-for="(index, name) in $slots" v-slot:[name] >
      <slot :name="name"></slot>
    </template>
  </el-link>
</template>

<script>
  export default {
    name: "AmpLink"
  }
</script>

<style lang="scss" scoped>

</style>
