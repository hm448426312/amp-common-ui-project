<template>
  <amp-layout-content>
    <div>
      <el-form label-width="150px" label-position="left">
        <el-form-item label="说明">
          <p>1.仅修改样式，功能未做调整，未封装组件，配置参考el-tabs</p>
          <p>2.仅对无type和type=card的样式进行了调整</p>
          <p>3.</p>
        </el-form-item>
        <el-form-item label="默认tabs">
          <el-tabs v-model="valueStr">
            <el-tab-pane label="用户管理" name="first"></el-tab-pane>
            <el-tab-pane label="配置管理" name="second"></el-tab-pane>
            <el-tab-pane label="角色管理" name="third"></el-tab-pane>
            <el-tab-pane label="定时任务补偿" name="fourth"></el-tab-pane>
          </el-tabs>
          <div class="el-tab-pane">
            <template v-if="valueStr === 'first'">
              用户管理
            </template>
            <template v-else-if="valueStr === 'second'">
              配置管理
            </template>
            <template v-else-if="valueStr === 'third'">
              角色管理
            </template>
            <template v-else-if="valueStr === 'fourth'">
              定时任务补偿
            </template>
          </div>
        </el-form-item>
        <el-form-item label="卡片tabs">
          <el-tabs type="card" v-model="valueStr1">
            <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
            <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
            <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
            <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
          </el-tabs>
        </el-form-item>
      </el-form>
    </div>
  </amp-layout-content>
</template>

<script>
  export default {
    name: "DemoTabs",
    data() {
      return {
        valueStr: "first",
        valueStr1: "first",
        valueArr: []
      }
    },
    methods: {}
  }
</script>

<style lang="scss" scoped>

</style>
