<template>
  <el-tooltip
    :disabled="!$attrs.tooltip"
    :content="$attrs.tooltip"
    :placement="$attrs.placement || 'top-start'"
  >
    <el-button
      ref="AmpButtonRef"
      v-bind="$attrs"
      v-on="$listeners"
      :class="getOwnClass()"
      @click="clientEvent()"
      :icon="$attrs.icon ? 'amp-button-icon ' + $attrs.icon:''"
    >
      <slot></slot>
    </el-button>
  </el-tooltip>
</template>

<script>
  export default {
    name: "AmpButton",
    props: {
      // 如果是带ICON的文本按钮，颜色默认，如果有其他颜色，此处定义，el-cover样式中设置
      subType: {
        type: String,
        default: "default"
      }
    },
    methods: {
      getOwnClass() {
        // 文本按钮，带ICON，样式与纯文本按钮不一致，参考规范
        let classStr = "";
        if (this.$attrs.icon && this.$attrs.type === 'text') {
          classStr = `amp-text-button-icon amp-text-button-sub-${this.subType}`;
        }
        return classStr;
      },
      clientEvent() {
        const activeEl = document.activeElement;
        activeEl.blur();
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
