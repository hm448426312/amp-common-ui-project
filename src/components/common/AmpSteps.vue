<template>
  <div
    class="amp-steps"
    :class="{
      'is-background': background !== undefined,
      'is-under-text': background === undefined && underText !== undefined,
    }"
  >
    <div
      v-for="(step, index) in steps"
      :key="index"
      class="amp-step__item"
      :class="{
        'is-active': index === active,
        'is-done': index < active
      }"
    >
      <!--无背景-->
      <template v-if="background === undefined">
        <!--文字在ICON后面-->
        <template v-if="underText === undefined">
          <div
            v-if="background === undefined && index !== 0"
            class="amp-step__item-line line-before"
            :style="[{'width': space/2+'px'}]"
          ></div>
          <template v-if="index >= active">
            <template v-if="step.icon">
              <i class="amp-step__item-icon-inner iconfont" :class="step.icon"></i>
            </template>
            <template v-else>
              <span class="amp-step__item-icon-inner no-icon">
                <i>{{index + 1 }}</i>
              </span>
            </template>
          </template>
          <template v-else>
            <i class="amp-step__item-icon-inner el-icon el-icon-success"></i>
          </template>
          <div class="amp-step__item-text">
            <amp-over-tooltip :content="step.text">
              <template>
                {{step.text}}
              </template>
            </amp-over-tooltip>
          </div>
          <div
            v-if="background === undefined && index !== steps.length - 1"
            class="amp-step__item-line line-after"
            :style="[{'width': space/2+'px'}]"
          ></div>
        </template>
        <!--文字在ICON下面-->
        <template v-else>
          <div style="display: flex;">
            <div
              v-if="background === undefined"
              class="amp-step__item-line line-before"
              :style="[{'width': space/2+'px'}]"
            ></div>
            <template v-if="index >= active">
              <template v-if="step.icon">
                <i class="amp-step__item-icon-inner iconfont" :class="step.icon"></i>
              </template>
              <template v-else>
                <span class="amp-step__item-icon-inner no-icon">
                  <i>{{index + 1 }}</i>
                </span>
              </template>
            </template>
            <template v-else>
              <i class="amp-step__item-icon-inner el-icon el-icon-success"></i>
            </template>
            <div
              v-if="background === undefined"
              class="amp-step__item-line line-after"
              :style="[{'width': space/2+'px'}]"
            ></div>
          </div>
          <div class="amp-step__item-text" :style="[{'max-width': (space + 36) + 'px'}]">
            <amp-over-tooltip :content="step.text">
              <template>
                {{step.text}}
              </template>
            </amp-over-tooltip>
          </div>
        </template>
      </template>
      <template v-else>
        <template v-if="index >= active">
          <template v-if="step.icon">
            <i class="amp-step__item-icon-inner iconfont" :class="step.icon"></i>
          </template>
          <template v-else>
            <span class="amp-step__item-icon-inner no-icon">
              <i>{{index + 1 }}</i>
            </span>
          </template>
        </template>
        <template v-else>
          <i class="amp-step__item-icon-inner el-icon el-icon-success"></i>
        </template>
        <div class="amp-step__item-text">
          <amp-over-tooltip :content="step.text">
            <template>
              {{step.text}}
            </template>
          </amp-over-tooltip>
        </div>
        <i
          v-if="background !== undefined && index !== steps.length - 1"
          class="amp-steps__next el-icon-arrow-right"
        ></i>
      </template>
    </div>
  </div>
</template>

<script>
  import AmpOverTooltip from "./AmpOverTooltip";

  export default {
    name: "AmpSteps",
    components: {AmpOverTooltip},
    props: {
      // 步骤数据text(显示文本),icon(自定义ICON)
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
      // 当前步骤，默认0
      active: {
        type: Number,
        default: 0
      },
      // 是否有背景色
      background: {
        type: null,
      },
      // 当无背景色时，步骤之间的横线长度
      space: {
        type: Number,
        default: 120
      },
      // 当无背景色时，文本是否显示在下方
      underText: {
        type: null
      }
    },
    mounted() {
      console.log("underText", this.underText, "background", this.background)
    },
    methods: {
      getTextStyle(index) {
        let style = {};
        if (this.background === undefined && this.underText !== undefined) {
          let left = index === 0 ? '-8px' : `-${this.space / 2}px`;
          let right = (index !== 0 && index === this.steps.length - 1) ? '-8px' : `-${this.space / 2}px`;
          let align = 'center';
          if (index === 0) {
            align = 'left';
          } else if (index === this.steps.length - 1) {
            align = 'right';
          }

          style = {
            left: left,
            right: right,
            'text-align': align,
          }
        }
        return style;
      },
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
    display: flex;
    align-items: flex-start;
    .amp-step__item {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      position: relative;
      .amp-step__item-line {
        height: 2px;
        background-color: #EAEDF1;
        margin-top: 15px;
        &.line-before {
          margin-right: 10px;
        }
        &.line-after {
          margin-left: 8px;
        }
      }
      .amp-step__item-icon-inner {
        font-style: normal;
        margin-top: 5px;
        flex: none;
        &.el-icon,
        &.iconfont {
          font-size: 20px;
          vertical-align: middle;
          color: #646B80;
        }
        &.no-icon {
          padding: 1px;
          display: flex;
          i {
            display: inline-block;
            width: 18px;
            height: 18px;
            line-height: 18px;
            border-radius: 50%;
            background: #D6D9E0;
            text-align: center;
            font-style: normal;
            color: #ffffff;
          }
        }
      }
      .amp-step__item-text {
        margin-left: 6px;
        max-width: 150px;
        display: flex;
        justify-content: center;
      }
      &.is-active,
      &.is-done {
        .amp-step__item-line {
          background-color: #1179F0;
        }
        .amp-step__item-text {
          color: #A0A4AF;
        }
        .amp-step__item-icon-inner {
          &.el-icon,
          &.iconfont {
            color: #1179F0
          }
          &.no-icon {
            i {
              background-color: #1179F0;
              color: #ffffff;
            }
          }
        }
      }
      &.is-active {
        .amp-step__item-text {
          color: #212A40;
        }
      }
    }
    &.is-under-text {
      .amp-step__item {
        flex-direction: column;
        align-items: center;
        &:first-child {
          .line-before {
            opacity: 0;
          }
        }
        &:last-child {
          .line-after {
            opacity: 0;
          }
        }
        .amp-step__item-text {
          width: 100%;
          margin-top: 4px;
        }
      }
    }
    &.is-background {
      background-color: #F5F7FA;
      height: 40px;
      .amp-step__item {
        flex: 1;
        justify-content: center;
        height: 100%;
        align-items: center;
        position: relative;
        .amp-step__item-icon-inner {
          margin-top: 0;
        }
        .amp-steps__next {
          position: absolute;
          right: -7px;
          top: 50%;
          margin-top: -7px;
          font-weight: bold;
          color: #A0A4AF;
        }
        &.is-active,
        &.is-done {
          .amp-step__item-text {
            color: #1179F0;
          }
          .amp-steps__next {
            color: #1179F0;
          }
        }
      }
    }
  }

  /*.amp-steps {
    height: 20px;
    line-height: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 14px;
    &.is-under-text {
      height: 52px;
    }
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
        position: relative;
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
          &.is-under {
            position: absolute;
            top: 32px;
          }
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
  }*/
</style>
