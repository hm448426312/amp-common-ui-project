<template>
  <el-option
    ref="AmpOptionRef"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot>
      <div class="overflow-ellipsis flex-row">
        <amp-over-tooltip placement="right" :content="$attrs.label || $attrs.value || ''">
          <template>
            {{ $attrs.label || $attrs.value || ''}}
          </template>
        </amp-over-tooltip>
      </div>
    </slot>
  </el-option>
</template>

<script>
  export default {
    name: "AmpOption",
    mounted() {
    },
    methods: {}
  }
</script>

<style lang="scss" scoped>
  /*> > > .el-checkbox {
    display: flex;
    height: 32px;
    align-items: center;
    .el-checkbox__label {
      overflow: hidden;
    }
  }*/
</style>
