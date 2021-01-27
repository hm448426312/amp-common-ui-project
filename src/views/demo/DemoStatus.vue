<template>
  <amp-layout-content>
    <div>
      <el-form label-width="150px" label-position="left">
        <el-form-item label="说明">
          <p>1.自定义组件amp-status</p>
          <p>2.支持参数text(显示文本),type(内置颜色的类型),color(自定义颜色)</p>
        </el-form-item>
        <el-form-item label="默认">
          <amp-status text="不传"></amp-status>
          <amp-status text="正常" type="success"></amp-status>
          <amp-status text="失败" type="error"></amp-status>
          <amp-status text="警告" type="error"></amp-status>
          <amp-status text="灰色" type="error"></amp-status>
          <amp-status text="自定义颜色-蓝色" color="blue" type="error"></amp-status>
        </el-form-item>
      </el-form>
    </div>
  </amp-layout-content>
</template>

<script>
  export default {
    name: "DemoStatus"
  }
</script>

<style lang="scss" scoped>

</style>
