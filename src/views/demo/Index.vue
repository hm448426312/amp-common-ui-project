<template>
  <amp-layout-wrap>
    <template v-if="showLeftMenu" slot="left-side">
      <amp-button type="primary" @click="goMixinsTable()">返回混入表格示例页面</amp-button>
      <ul class="left-menu">
        <li
          v-for="(item, index) in leftArr"
          :key="index"
          :class="{'is-active':selectedItem && selectedItem === item}"
          @click="changeItemEvent(item)"
        >
          {{item.title}}
        </li>
      </ul>
    </template>
    <template slot="content-side">
      <router-view></router-view>
    </template>
  </amp-layout-wrap>
</template>

<script>
  export default {
    name: "Demo",
    data() {
      return {
        showLeftMenu: true,
        selectedItem: null,
        leftArr: [
          {
            path: 'start',
            title: '快速应用',
          },
          {
            path: 'release',
            title: '版本说明',
          },
          {
            path: 'layout',
            title: '布局示例',
          },
          {
            path: 'table-mixins',
            title: 'tableMixins示例',
          },
          {
            path: 'menu',
            title: 'menu菜单',
          },
          {
            path: 'loading',
            title: 'loading遮罩',
          },
          {
            path: 'button',
            title: 'button按钮',
          },
          {
            path: 'input',
            title: 'input/textarea输入框',
          },
          {
            path: 'input-number',
            title: 'input-number计数器',
          },
          {
            path: 'autocomplete',
            title: 'autocomplete异步搜索',
          },
          {
            path: 'select',
            title: 'select下拉选择',
          },
          {
            path: 'cascader',
            title: 'cascader下拉级联',
          },
          {
            path: 'dropdown',
            title: 'dropdown下拉菜单',
          },
          {
            path: 'popover',
            title: 'popover浮窗',
          },
          {
            path: 'checkbox',
            title: 'checkbox复选',
          },
          {
            path: 'radio',
            title: 'radio单选',
          },
          {
            path: 'collapse',
            title: 'collapse折叠面板',
          },
          {
            path: 'datepicker',
            title: 'datepicker日期选择',
          },
          {
            path: 'timepicker',
            title: 'timepicker时间选择',
          },
          {
            path: 'drawer',
            title: 'drawer抽屉',
          },
          {
            path: 'message',
            title: 'message消息提示',
          },
          {
            path: 'message-box',
            title: 'message消息确认提示框',
          },
          {
            path: 'notification',
            title: 'notification消息通知',
          },
          {
            path: 'dialog',
            title: 'dialog弹框',
          },
          {
            path: 'pagination',
            title: 'pagination分页',
          },
          {
            path: 'progress',
            title: 'progress进度条',
          },
          {
            path: 'switch',
            title: 'switch开关',
          },
          {
            path: 'slider',
            title: 'slider滑块',
          },
          {
            path: 'steps',
            title: 'steps步骤条',
          },
          {
            path: 'table',
            title: 'table表格',
          },
          {
            path: 'tabs',
            title: 'tabs页签',
          },
          {
            path: 'tag',
            title: 'tag标签',
          },
          {
            path: 'tooltip',
            title: 'tooltip提示',
          },
          {
            path: 'upload',
            title: 'upload上传',
          },
          {
            path: 'form',
            title: 'form表单',
          },
        ]
      }
    },
    mounted() {
      this.leftArr.forEach(item => {
        if (this.$route.path === `/${item.path}`) {
          this.selectedItem = item;
          return;
        }
      })
    },
    methods: {
      goRoute() {
        if (this.$route.path === `/${this.selectedItem.path}`) {
          return false;
        }
        this.$router.push({
          path: this.selectedItem.path
        })
      },
      goMixinsTable() {
        if (this.$route.path === `/table-mixins`) {
          return false;
        }
        this.$router.push({
          path: "/table-mixins",
          query: {
            back: "1"
          }
        })
      },
      changeItemEvent(item) {
        if (this.selectedItem && this.selectedItem === item) {
          return;
        }
        this.selectedItem = item;
        this.goRoute();
      },
    }
  }
</script>

<style lang="scss" scoped>
  .left-menu {
    padding: 0;
    li {
      height: 40px;
      line-height: 40px;
      border-left: 2px solid transparent;
      list-style: none;
      padding: 0 12px;
      color: #212A40;
      cursor: pointer;
      &:hover {
        background-color: #EFF6FE;
        border-left-color: #1179F0;
        color: #1179F0;
      }
      &.is-active {
        color: #1179F0;
      }
    }
  }
</style>
