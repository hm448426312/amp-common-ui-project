<template>
  <div v-if="visible" class="my-message-box-outer">
    <div class="my-message-box-inner" :style="calcWidth()">
      <div class="my-message-tile">
        <span class="my-message-tile-text">{{ title }}</span>
        <i v-if="showClose" class="iconfont icon-guanbi" @click="closeMe()"></i>
      </div>
      <div class="my-message-content">
        <div class="my-message-content-lev1">
          <span v-if="!hideIcon" class="my-message-content-type iconfont" :class="setIconClass()"></span>
          <div class="my-message-content-text" v-if="useHtml" v-html="content"></div>
          <div class="my-message-content-text" v-else>{{content}}</div>
        </div>
        <div v-if="subContent" class="my-message-content-lev2">
          <div class="my-message-content-subtext" v-if="useHtml" v-html="subContent"></div>
          <div class="my-message-content-subtext" v-else>{{subContent}}</div>
        </div>
      </div>
      <div class="my-message-btn">
        <template v-for="item of btn">
          <amp-button
            :loading="(item.loading ? item.loading.flag : false)"
            :key="item.index"
            :type="item.type || 'default'"
            @click="item.fn()"
          >{{ item.text }}
          </amp-button>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
  const typeIconMap = {
    "info": "icon-tishi-fill",
    "success": "icon-duihao-fill",
    "warning": "icon-jinggao-fill",
    "error": "icon-cuowu-fill",
  };
  export default {
    name: "AmpMessageBox",
    data() {
      return {
        visible: false,
        width: "480px", // 默认宽度480px
        type: "info", // success,warning,error,info，默认info
        content: "", // 一级内容内容
        subContent: "", // 二级内容
        title: "提示", // 弹框标题
        hideIcon: false, // 是否隐藏前面的ICON
        closeCallBakFn: null, // 点击弹框关闭按钮，如果有该方法则回调该方法
        useHtml: false, // 是否使用html内容
        btn: [
          {
            type: "", // 按钮样式
            text: "", // 按钮文本
            loading: false,
            fn: () => {
              // 点击事件处理
            }
          }
        ],
        showClose: true // 是否显示右上角关闭按钮
      };
    },
    created() {
    },
    mounted() {
    },
    beforeDestroy() {
    },
    methods: {
      closeMe() {
        this.visible = false;
        if (this.closeCallBakFn && typeof this.closeCallBakFn === 'function') {
          this.closeCallBakFn();
        }
      },
      setIconClass() {
        return typeIconMap[this.type || 'info'];
      },
      calcWidth() {
        if (this.width) {
          return {
            width: this.width
          };
        } else {
          return null;
        }
      }
    }
  };
</script>

<style lang="scss" scoped>
  .my-message-box-outer {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.3);
    .my-message-box-inner {
      background: #fff;
      border-radius: 8px;
      .my-message-tile {
        padding: 24px 16px 0 24px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .my-message-tile-text {
          font-size: 14px;
          color: #212a40;
          font-weight: bold;
        }
        .iconfont.icon-guanbi {
          font-size: 20px;
          position: relative;
          top: -8px;
          cursor: pointer;
          color: #999999;
          &:hover {
            color: #212a40;
          }
        }
      }
      .my-message-content {
        margin: 32px 32px 40px;
        text-align: left;
        .my-message-content-lev1 {
          color: #212A40;
          font-size: 14px;
          display: flex;
          align-items: flex-start;
          justify-content: flex-start;
          line-height: 22px;
          .my-message-content-type {
            margin-right: 4px;
            font-size: 20px;
            flex: none;
            &.icon-tishi-fill {
              color: #1179F0;
            }
            &.icon-duihao-fill {
              color: #21BF9B;
            }
            &.icon-jinggao-fill {
              color: #FD9731;
            }
            &.icon-cuowu-fill {
              color: #E24A4A;
            }
          }
          .my-message-content-text {
            max-height: 150px;
            overflow: auto;
          }
        }
        .my-message-content-lev2 {
          color: #212A40;
          margin-top: 12px;
          line-height: 22px;
          font-size: 14px;
          margin-left: 24px;
          .my-message-content-subtext {
            max-height: 150px;
            overflow: auto;
          }
        }
      }
      .my-message-btn {
        margin-bottom: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
</style>
