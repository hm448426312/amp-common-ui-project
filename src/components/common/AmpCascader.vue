<template>
  <el-cascader
    ref="AmpCascaderRef"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <template slot-scope="{ node, data }">
      <slot>
        <amp-over-tooltip placement="top" :content="($attrs.props && data[$attrs.props.label]) || data.label">
          <template>
            {{($attrs.props && data[$attrs.props.label]) || data.label}}
          </template>
        </amp-over-tooltip>
      </slot>
    </template>
  </el-cascader>
</template>

<script>
  export default {
    name: "AmpCascader",
    components: {},
    watch: {},
    mounted() {
    },
  };
</script>
<style lang="scss" scoped>
</style>
