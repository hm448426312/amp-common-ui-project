<template>
  <amp-layout-content :clearContentStyle="clearContentStyle">
    <template v-if="showRightTabs" slot="content-tabs">
      <el-tabs type="card" v-model="activeTab">
        <el-tab-pane label="用户管理" name="first"></el-tab-pane>
        <el-tab-pane label="配置管理" name="second"></el-tab-pane>
        <el-tab-pane label="角色管理" name="third"></el-tab-pane>
        <el-tab-pane label="定时任务补偿" name="fourth"></el-tab-pane>
      </el-tabs>
    </template>
    <template v-if="showRightBeforeHeader" slot="content-before-header">
      头部标题之前的内容
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
    </template>
    <template v-if="showRightFilter" slot="content-filter">
      <div class="right-header-filter">
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
          <p style="color: red">PS：下方有57px，是预留基座头部的高度</p>
          <p>1.布局的最外层是amp-layout-wrap，其中插槽3个(left-side,content-side,匿名插槽)，匿名插槽在left于content中间，与left,content同级</p>
          <p>2.content-side在实际页面中可直接插入路由标签</p>
          <p>3.右侧详细页面需要使用组件amp-layout-content，其中插槽3个(content-tabs,content-header,匿名插槽)，匿名插槽是主要内容显示区域</p>
          <p>4.如果无左侧菜单，则直接用wrap的content-side内子页面使用amp-layout-content，参考中心布局页面</p>
          <p>5.如果内容页面是多卡片或者其他满足不了的方式，给组件amp-layout-content配置clearContentStyle:true即可清除内容区的默认样式</p>
        </el-form-item>
        <el-form-item label="当前页面动态显示头部信息">
          <amp-button @click="showRightTabs = !showRightTabs">{{showRightTabs?'隐藏':'显示'}}头部tabs区域</amp-button>
          <amp-button @click="showRightBeforeHeader = !showRightBeforeHeader">{{showRightBeforeHeader?'隐藏':'显示'}}标题之前的区域</amp-button>
          <amp-button @click="showRightHeader = !showRightHeader">{{showRightHeader?'隐藏':'显示'}}头部标题/筛选区</amp-button>
          <amp-button @click="showRightFilter = !showRightFilter">
            {{showRightFilter?'隐藏':'显示'}}头部筛选区
          </amp-button>
          <amp-button @click="clearContentStyle = !clearContentStyle">
            {{clearContentStyle?'显示':'清除'}}内容区的默认样式
          </amp-button>
          <amp-button v-if="showRightHeader" @click="subPage = !subPage">
            {{!subPage?'是':'否'}}二级页面
          </amp-button>
        </el-form-item>
        <el-form-item label="跳转到其他页面查看布局">
          <amp-button type="primary" @click="goRoute('/layout-center')">查看中心布局页面</amp-button>
          <amp-button type="primary" @click="goRoute('/layout-full')">查看全屏布局页面</amp-button>
        </el-form-item>
      </el-form>
    </div>
  </amp-layout-content>
</template>

<script>
  export default {
    name: "DemoLayout",
    data() {
      return {
        isCollapse: false,
        showRightTabs: false,
        showRightBeforeHeader: false,
        showRightHeader: false,
        clearContentStyle: false,
        showRightFilter: false,
        subPage: false,
        activeTab: "first",
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
  .demo-box {
    list-style-type: decimal;
  }
</style>
