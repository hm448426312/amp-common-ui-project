<template>
  <el-link
    ref="AmpLinkRef"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot></slot>
  </el-link>
</template>

<script>
  export default {
    name: "AmpLink"
  }
</script>

<style lang="scss" scoped>

</style>
