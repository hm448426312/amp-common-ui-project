<template>
  <el-collapse
    ref="AmpCollapseRef"
    v-bind="$attrs"
    v-on="$listeners"
    :class="$attrs.background !== undefined ? 'is-background' : ''"
  >
    <slot/>
  </el-collapse>
</template>

<script>
  export default {
    name: "AmpCollapse",
    components: {},
    watch: {},
    mounted() {
    },
  };
</script>
<style lang="scss" scoped>
</style>
