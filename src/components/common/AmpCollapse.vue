<template>
  <el-collapse
    ref="AmpCollapseRef"
    v-bind="$attrs"
    v-on="$listeners"
    :class="$attrs.background !== undefined ? 'is-background' : ''"
  >
    <template v-for="(index, name) in $slots" v-slot:[name] >
      <slot :name="name"></slot>
    </template>
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
