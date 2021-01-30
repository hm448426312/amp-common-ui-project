<template>
  <el-time-select
    ref="AmpTimeSelectRef"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <template v-for="(index, name) in $slots" v-slot:[name] >
      <slot :name="name"></slot>
    </template>
  </el-time-select>
</template>

<script>
  export default {
    name: "AmpTimeSelect"
  }
</script>

<style lang="scss" scoped>

</style>
