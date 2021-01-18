<template>
  <el-slider
    ref="AmpSliderRef"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot></slot>
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
