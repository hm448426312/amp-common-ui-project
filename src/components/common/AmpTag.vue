<template>
  <el-tag
    :class="radius !== false ? 'has-radius' : ''"
    ref="AmpTagRef"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <div class="overflow-ellipsis flex-row">
      <amp-over-tooltip :disabled="!$attrs.text" :content="$attrs.text">
        <template>
          <slot></slot>
        </template>
      </amp-over-tooltip>
    </div>
  </el-tag>
</template>

<script>

  export default {
    name: "AmpTag",
    props: {
      // tag的border-radius是否18px
      radius: {
        type: Boolean,
        default: () => false
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
