<template>
  <div
    class="amp-steps"
    :class="{'is-background': background !== undefined}"
  >
    <div
      v-for="(step, index) in steps"
      :key="index"
      class="amp-steps__item"
      :class="{'is-active':index === active, 'is-done': index < active}"
    >
      <div
        v-if="index > 0 && background === undefined"
        class="amp-steps__line"
        :style="[getLineStyle()]"
      ></div>
      <div class="amp-steps__inner">
        <template v-if="index >= active">
          <span v-if="background === undefined" class="amp-steps__inner-index">{{index + 1 }}</span>
          <span v-else class="amp-steps__inner-index" :class="step.icon || 'el-icon-edit'"></span>
        </template>
        <span v-else class="amp-step__inner-icon el-icon-success"></span>
        <span class="amp-steps__inner-text">
          <amp-over-tooltip :content="step.text">
            <template>
              {{step.text}}
            </template>
          </amp-over-tooltip>
        </span>
      </div>
      <template v-if="background !== undefined && index !== steps.length - 1">
        <i class="amp-steps__next el-icon-arrow-right"></i>
      </template>
      <div
        v-if="index !== steps.length - 1 && background === undefined"
        class="amp-steps__line"
        :style="[getLineStyle()]"
      ></div>
    </div>
  </div>
</template>

<script>
  import AmpOverTooltip from "./AmpOverTooltip";

  export default {
    name: "AmpSteps",
    components: {AmpOverTooltip},
    props: {
      steps: {
        type: Array,
        default: () => []
        // [
        //   {
        //     text: "步骤1步骤1步骤1步骤1步骤1步骤1步骤1步骤1步骤1", // 显示文本
        //     icon: "el-icon-plus", // 显示icon
        //   }
        // ];
      },
      active: {
        type: Number,
        default: 0
      },
      background: {
        type: null,
      },
      space: {
        type: Number,
        default: 120
      }
    },
    methods: {
      getLineStyle() {
        return {
          width: `${this.space / 2}px`
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .amp-steps {
    height: 20px;
    line-height: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 14px;
    overflow: hidden;
    .amp-steps__item {
      display: flex;
      flex-direction: row;
      align-items: center;
      position: relative;
      .amp-steps__line {
        &:first-child {
          margin-right: 8px;
        }
        height: 2px;
        background-color: #EAEDF1;
      }
      .amp-steps__inner {
        display: flex;
        flex-direction: row;
        .amp-steps__inner-index,
        .amp-step__inner-icon {
          width: 20px;
          height: 20px;
          line-height: 20px;
          text-align: center;
        }
        .amp-steps__inner-index {
          background: #D6D9E0;
          color: #ffffff;
          border-radius: 50%;
        }
        .el-icon-success {
          color: #1179F0;
          font-size: 20px;
        }
        .amp-steps__inner-text {
          margin: 0 5px 0 8px;
          max-width: 150px;
          display: flex;
          color: #212A40;
        }
      }
      &.is-done {
        .amp-steps__line {
          background-color: #1179F0;
        }
        .amp-steps__inner-text {
          color: #A0A4AF;
        }
      }
      &.is-active {
        .amp-steps__line {
          background-color: #1179F0;
        }
        .amp-steps__inner {
          .amp-steps__inner-index {
            background-color: #1179F0;
          }
        }
      }
    }
    &.is-background {
      height: 40px;
      background: #F5F7FA;
      .amp-steps__item {
        flex: 1;
        text-align: center;
        justify-content: center;
        position: relative;
        .amp-steps__next {
          position: absolute;
          right: -7px;
          top: 50%;
          margin-top: -7px;
          font-weight: bold;
          color: #A0A4AF;
        }
        &.is-active .amp-steps__inner-index,
        .amp-steps__inner-index {
          background-color: transparent;
          color: #646B80;
        }
        &.is-active .amp-steps__inner-index {
          color: #1179F0;
        }
        &.is-active,
        &.is-done {
          .amp-steps__inner {
            .amp-steps__inner-text {
              color: #1179F0;
            }
          }
          .amp-steps__next {
            color: #1179F0;
          }
        }
      }
    }
  }
</style>
