<template>
  <div
    class="amp-layout-box"
    :class="{'has-fixed-header': headerFixed}"
  >
    <div class="layout-header-fixed" v-if="headerFixed">
      <div class="layout-header-fixed__title">{{headerTitle}}</div>
      <slot name="header-fixed">
        <el-tabs v-model="tabValue">
          <el-tab-pane label="用户管理" name="first"></el-tab-pane>
          <el-tab-pane label="配置管理" name="second"></el-tab-pane>
          <el-tab-pane label="角色管理" name="third"></el-tab-pane>
        </el-tabs>
      </slot>
      <div class="layout-header-fixed__button">
        <el-dropdown
          v-if="headerButton && headerButton.length > 0"
          @command="handleCommand"
        >
          <i class="iconfont icon-rm_more"></i>
          <el-dropdown-menu
            slot="dropdown"
          >
            <el-dropdown-item
              v-for="(item,index) in headerButton"
              :key="index"
              :command="handleCommandItem(item)"
            >{{item.text}}
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <i @click="closeHeaderFixedEvent" class="iconfont icon-guanbi"></i>
      </div>
    </div>
    <div v-if="$slots['left-side']"
         class="amp-left-side-outer"
         :style="[{'width': leftWidth}]"
    >
      <!--左侧菜单区-->
      <slot name="left-side"></slot>
    </div>
    <slot/>
    <div class="amp-content-side-outer">
      <slot name="content-side"></slot>
    </div>
    <div v-if="$slots['right-side']"
         class="amp-right-side-outer"
         :style="[{'width': rightWidth}]"
    >
      <!--右侧菜单区-->
      <slot name="right-side"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "AmpLayoutWrap",
    props: {
      // 固定头部的标题
      headerTitle: {
        type: String,
        default: "我是标题"
      },
      // 左侧区域的宽度，默认240px
      leftWidth: {
        type: String,
        default: "240px"
      },
      // 右侧区域的宽度，默认240px
      rightWidth: {
        type: String,
        default: "240px"
      },
      // 是否固定头部
      headerFixed: {
        type: Boolean,
        default: false
      },
      // 固定头部的按钮
      headerButton: {
        type: Array,
        default: () => {
          // let tempArr = [
          //   {
          //     text: "新建",
          //   }
          // ];
          // return tempArr;
          return [];
        }
      }
    },
    data() {
      return {
        tabValue: "first",
      }
    },
    mounted() {
      console.log(this.$slots);
    },
    methods: {
      handleCommand(command) {
        this.$emit('header-command', command);
      },
      handleCommandItem(item) {
        return item;
      },
      closeHeaderFixedEvent() {
        this.$emit('header-close');
      },
    }
  }
</script>

<style lang="scss" scoped>
  .amp-layout-box {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    flex-wrap: nowrap;
    background: #F5F7FA;
    height: calc(100vh - 57px);

    .layout-header-fixed {
      position: fixed;
      width: 100%;
      left: 0;
      top: 0;
      height: 60px;
      z-index: 2;
      background-color: #ffffff;
      display: flex;
      padding: 0 20px;
      box-sizing: border-box;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0px 2px 4px rgba(161, 171, 181, 0.1), 0px 4px 8px rgba(213, 222, 231, 0.64);
      .layout-header-fixed__title {
        font-size: 18px;
        font-weight: bold;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .layout-header-fixed__button {
        display: flex;
        .iconfont {
          margin-left: 12px;
          display: inline-block;
          width: 24px;
          height: 24px;
          line-height: 22px;
          text-align: center;
          border-radius: 50%;
          color: #646B80;
          box-sizing: border-box;
          cursor: pointer;
          border: 1px solid #EAEDF1;
          &:hover {
            color: #1179F0;
            border-color: #3895FF;
          }
        }
      }
      > > > .el-tabs {
        .el-tabs__header {
          .el-tabs__nav-wrap {
            &:after {
              background-color: transparent;
            }
            .el-tabs__nav {
              .el-tabs__item {
                height: 60px;
                line-height: 60px;
              }
            }
          }
        }
      }
    }
    .amp-left-side-outer {
      flex: none;
      height: 100%;
      box-sizing: border-box;
      padding: 16px 0;
      background-color: #ffffff;
      overflow: auto;
    }
    .amp-right-side-outer {
      flex: none;
      margin: 16px 16px 16px 0;
      height: calc(100% - 32px);
      box-sizing: border-box;
      background-color: #ffffff;
      overflow: auto;
    }
    .amp-content-side-outer {
      flex: 1;
      margin: 16px;
      height: calc(100% - 32px);
      position: relative;
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }
    &.has-fixed-header {
      height: calc(100vh - 60px);
      padding-top: 60px;
    }
  }
</style>
