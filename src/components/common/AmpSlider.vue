<template>
  <el-slider
    ref="AmpSliderRef"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <template v-for="(index, name) in $slots" v-slot:[name] >
      <slot :name="name"></slot>
    </template>
  </el-slider>
</template>

<script>
  export default {
    name: "AmpSlider",
    data() {
      return {
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
