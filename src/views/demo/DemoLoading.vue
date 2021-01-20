<template>
  <amp-layout-content>
    <div>
      <el-form label-width="150px" label-position="left">
        <el-form-item ref="testLoadingRef" label="说明">
          <p>1.原$loading封装为$AmpLoading，修改了样式和统一管理</p>
          <p>2.其余配置参考el-loading</p>
        </el-form-item>
        <el-form-item label="全局loading">
          <amp-button tooltip="3秒后移除" @click="showLoading()">点我加载loading</amp-button>
        </el-form-item>
        <el-form-item label="局部loading">
          <amp-button tooltip="3秒后移除" @click="showLoading($refs.testLoadingRef.$el)">点我给说明区域加载loading，3秒后移除</amp-button>
        </el-form-item>
      </el-form>
    </div>
  </amp-layout-content>
</template>

<script>

  export default {
    name: "DemoButton",
    methods: {
      showLoading(target) {
        let loadingFlag = this.$AmpLoading(target);
        setTimeout(() => {
          loadingFlag.close();
        }, 3000);
      },
    }
  }
</script>

<style lang="scss" scoped>

</style>
