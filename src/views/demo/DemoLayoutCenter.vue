<template>
  <amp-layout-wrap>
    <template slot="content-side">
      <amp-layout-content>
        <template v-if="showRightTabs" slot="content-tabs">
          <el-tabs type="card" v-model="activeTab">
            <el-tab-pane label="用户管理" name="first"></el-tab-pane>
            <el-tab-pane label="配置管理" name="second"></el-tab-pane>
            <el-tab-pane label="角色管理" name="third"></el-tab-pane>
            <el-tab-pane label="定时任务补偿" name="fourth"></el-tab-pane>
          </el-tabs>
        </template>
        <template v-if="showRightHeader" slot="content-header">
          <div
            class="right-header-title"
            :class="{'sub-page': subPage}"
          >
            <b>代码管理</b>
            <span class="desc">标题描述</span>
            <div style="margin-left: auto">
              <amp-button type="primary">克隆</amp-button>
              <amp-button icon="el-icon-back">返回</amp-button>
            </div>
          </div>
          <el-tabs style="margin-top: 16px;" v-if="showHeaderTabs" v-model="activeTab1">
            <el-tab-pane label="用户管理" name="first"></el-tab-pane>
            <el-tab-pane label="配置管理" name="second"></el-tab-pane>
            <el-tab-pane label="角色管理" name="third"></el-tab-pane>
            <el-tab-pane label="定时任务补偿" name="fourth"></el-tab-pane>
          </el-tabs>
          <div v-if="showRightFilter" class="right-header-filter">
            <div class="filter-item">
              <el-input v-model="testValue" placeholder="请输入查询条件"></el-input>
            </div>
            <div class="filter-item">
              <el-input v-model="testValue" placeholder="请输入查询条件"></el-input>
            </div>
            <div class="filter-item">
              <el-input v-model="testValue" placeholder="请输入查询条件"></el-input>
            </div>
            <div class="filter-item">
              <el-input v-model="testValue" placeholder="请输入查询条件"></el-input>
            </div>
            <div class="filter-item">
              <el-input v-model="testValue" placeholder="请输入查询条件"></el-input>
            </div>
            <div class="filter-item">
              <el-input v-model="testValue" placeholder="请输入查询条件"></el-input>
            </div>
            <div class="filter-button">
              <amp-button icon="el-icon-plus" type="primary">导入</amp-button>
              <amp-button icon="el-icon-plus">新建</amp-button>
            </div>
          </div>
        </template>
        <div>
          <el-form label-width="150px" label-position="left">
            <el-form-item label="说明">
              <p>1.此处以下是滚动条涵盖的内容区插槽名为content</p>
            </el-form-item>
            <el-form-item label="当前页面动态显示头部信息">
              <amp-button @click="showRightTabs = !showRightTabs">{{showRightTabs?'隐藏':'显示'}}头部tabs区域</amp-button>
              <amp-button @click="showRightHeader = !showRightHeader">{{showRightHeader?'隐藏':'显示'}}头部标题/筛选区</amp-button>
              <amp-button v-if="showRightHeader" @click="showHeaderTabs = !showHeaderTabs">
                {{showHeaderTabs?'隐藏':'显示'}}头部标题下的tabs区域
              </amp-button>
              <amp-button v-if="showRightHeader" @click="showRightFilter = !showRightFilter">
                {{showRightFilter?'隐藏':'显示'}}头部筛选区
              </amp-button>
              <amp-button v-if="showRightHeader" @click="subPage = !subPage">
                {{!subPage?'是':'否'}}二级页面
              </amp-button>
            </el-form-item>
            <el-form-item label="跳转到其他页面查看布局">
              <amp-button type="primary" @click="goRoute('layout')">查看左右布局页面</amp-button>
              <amp-button type="primary" @click="goRoute('/layout-full')">查看全屏布局页面</amp-button>
            </el-form-item>
          </el-form>
        </div>
      </amp-layout-content>
    </template>
  </amp-layout-wrap>
</template>

<script>
  export default {
    name: "DemoLayoutCenter",
    data() {
      return {
        isCollapse: false,
        showRightTabs: false,
        showRightHeader: false,
        showHeaderTabs: false,
        showRightFilter: false,
        subPage: false,
        activeTab: "first",
        activeTab1: "first",
        testValue: "",
      }
    },
    methods: {
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
