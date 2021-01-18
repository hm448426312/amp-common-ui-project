<template>
  <amp-layout-wrap
    header-title="全屏页面标题"
    :header-fixed="true"
    :header-button="headerButton"
    @header-command="handleCommand"
    @header-close="handleHeaderCloseEvent"
  >
    <template v-if="showLeftFlag" slot="left-side">
      <p>我是左菜单</p>
      <p>我是左菜单</p>
      <p>我是左菜单</p>
      <p>我是左菜单</p>
      <p>我是左菜单</p>
      <p>我是左菜单</p>
      <p>我是左菜单</p>
      <p>我是左菜单</p>
      <p>我是左菜单</p>
      <p>我是左菜单</p>
      <p>我是左菜单</p>
      <p>我是左菜单</p>
      <p>我是左菜单</p>
      <p>我是左菜单</p>
      <p>我是左菜单</p>
      <p>我是左菜单</p>
      <p>我是左菜单</p>
      <p>我是左菜单</p>
    </template>
    <template v-if="showRightFlag" slot="right-side">
      <p>我是右菜单</p>
      <p>我是右菜单</p>
      <p>我是右菜单</p>
      <p>我是右菜单</p>
      <p>我是右菜单</p>
      <p>我是右菜单</p>
      <p>我是右菜单</p>
      <p>我是右菜单</p>
      <p>我是右菜单</p>
      <p>我是右菜单</p>
      <p>我是右菜单</p>
      <p>我是右菜单</p>
      <p>我是右菜单</p>
      <p>我是右菜单</p>
    </template>
    <template slot="header-fixed">
      <el-tabs v-model="activeTab">
        <el-tab-pane label="用户管理" name="first"></el-tab-pane>
        <el-tab-pane label="配置管理" name="second"></el-tab-pane>
        <el-tab-pane label="角色管理" name="third"></el-tab-pane>
        <el-tab-pane label="定时任务补偿" name="fourth"></el-tab-pane>
      </el-tabs>
    </template>
    <template slot="content-side">
      <amp-layout-content>
        <div>
          <el-form label-width="150px" label-position="left">
            <el-form-item label="说明">
              <p>1.此处以下是滚动条涵盖的内容区插槽名为content</p>
            </el-form-item>
            <el-form-item label="当前页面动态显示信息">
              <amp-button
                type="primary"
                @click="showLeftFlag = !showLeftFlag"
              >{{showLeftFlag?"隐藏":"显示"}}左菜单区域
              </amp-button>
              <amp-button
                type="primary"
                @click="showRightFlag = !showRightFlag"
              >{{showRightFlag?"隐藏":"显示"}}右菜单区域
              </amp-button>
            </el-form-item>
            <el-form-item label="跳转到其他页面查看布局">
              <amp-button type="primary" @click="goRoute('layout')">查看左右布局页面</amp-button>
              <amp-button type="primary" @click="goRoute('layout-center')">查看中心布局页面</amp-button>
            </el-form-item>
          </el-form>
        </div>
      </amp-layout-content>
    </template>
  </amp-layout-wrap>
</template>

<script>
  export default {
    name: "DemoLayoutFullPage",
    data() {
      return {
        showLeftFlag: false,
        showRightFlag: false,
        headerFixed: false,
        showRightTabs: false,
        activeTab: "first",
        headerButton: [
          {
            text: "新建",
            type: "add"
          },
          {
            text: "导入",
            type: "import"
          }
        ]
      }
    },
    methods: {
      // fixed header的关闭事件
      handleHeaderCloseEvent() {
        console.log("fixed header的关闭事件")
      },
      // fixed头部的功能按钮回调事件
      handleCommand(item) {
        console.log(item);
      },
      goRoute(path) {
        this.$router.push({
          path: path
        })
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
