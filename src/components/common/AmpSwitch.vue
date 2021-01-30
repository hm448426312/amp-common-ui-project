<template>
  <el-switch
    ref="AmpSwitchRef"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <template v-for="(index, name) in $slots" v-slot:[name] >
      <slot :name="name"></slot>
    </template>
  </el-switch>
</template>

<script>
  export default {
    name: "AmpSwitch",
  }
</script>

<style lang="scss" scoped>

</style>
