<template>
  <div
    class="amp-content-side-inner"
    :class="{
      'has-content-tabs': $slots['content-tabs'],
      'has-content-header': $slots['content-header'],
      'no-default-style': clearContentStyle
     }"
  >
    <div class="amp-content-tabs">
      <!--右侧头部tabs-->
      <slot name="content-tabs"></slot>
    </div>
    <div class="amp-content-box-outer">
      <div class="amp-content-header">
        <!--右侧头部标题区-->
        <slot name="content-header"></slot>
      </div>
      <div class="amp-content-filter">
        <slot name="content-filter"></slot>
      </div>
      <div class="amp-content-box">
        <!--右侧内容区，超出有滚动条-->
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "AmpLayoutContent",
    props: {
      // 是否清除内容区的样式，以适应内容区内的多卡片等布局
      clearContentStyle: {
        type: Boolean,
        default: false
      },
    }
  }
</script>

<style lang="scss" scoped>
  .amp-content-side-inner {
    flex: 1;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    &.no-default-style {
      .amp-content-box-outer {
        background-color: transparent;
        .amp-content-header,
        .amp-content-filter,
        .amp-content-box {
          padding: 0;
          background-color: transparent;
        }
      }
    }
    &.has-content-tabs {
      .amp-content-box {
        border-radius: 0 0 2px 2px;
      }
    }
    .amp-content-box-outer {
      background-color: #ffffff;
      flex: 1;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      border-radius: 2px;
      .amp-content-header {
        padding: 0 24px;
        &.is-fixed {
          position: fixed;
          left: 0;
          top: 0;
          width: 100%;
          height: 60px;
          background-color: #ffffff;
        }
      }
      .amp-content-filter {
        padding: 0 24px;
      }
      .amp-content-box {
        flex: 1;
        overflow: auto;
        padding: 24px;
        box-sizing: border-box;
      }
    }
  }
</style>
