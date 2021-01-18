<template>
  <amp-layout-content>
    <div>
      <el-form label-width="150px" label-position="left">
        <el-form-item label="说明">
          <p>1.原el-checkbox封装为amp-checkbox，暂时未做扩展功能和配置</p>
          <p>2.原el-checkbox-group封装为amp-checkbox-group，暂时未做扩展功能和配置</p>
          <p>3.原el-checkbox-button封装为amp-checkbox-button，暂时未做扩展功能和配置</p>
          <p>4.仅修改样式，功能未做调整，配置参考el-checkbox,el-checkbox-group,el-checkbox-button</p>
        </el-form-item>
        <el-form-item label="复选框-仅图标">
          <amp-checkbox></amp-checkbox>
          <amp-checkbox checked disabled></amp-checkbox>
          <amp-checkbox disabled></amp-checkbox>
        </el-form-item>
        <el-form-item label="复选框-图标+文本">
          <amp-checkbox>篮球</amp-checkbox>
          <amp-checkbox>羽毛球</amp-checkbox>
          <amp-checkbox checked disabled>酒吧-禁用</amp-checkbox>
          <amp-checkbox disabled>禁用</amp-checkbox>
        </el-form-item>
        <el-form-item label="复选框-半选">
          <amp-checkbox :indeterminate="true">半选(未做逻辑，点击无效)</amp-checkbox>
          <amp-checkbox :indeterminate="true" disabled>半选-禁用</amp-checkbox>
        </el-form-item>
        <el-form-item label="复选框-按钮组">
          <amp-checkbox-group v-model="valueArr">
            <amp-checkbox-button :label="1">篮球</amp-checkbox-button>
            <amp-checkbox-button :label="2">羽毛球羽毛球羽毛球</amp-checkbox-button>
            <amp-checkbox-button :label="3">乒乓球</amp-checkbox-button>
          </amp-checkbox-group>
        </el-form-item>
        <el-form-item label="复选框-按钮组-禁用">
          <amp-checkbox-group v-model="valueArr" disabled>
            <amp-checkbox-button :label="1">篮球</amp-checkbox-button>
            <amp-checkbox-button :label="2">羽毛球</amp-checkbox-button>
            <amp-checkbox-button :label="3">乒乓球</amp-checkbox-button>
          </amp-checkbox-group>
        </el-form-item>
      </el-form>
    </div>
  </amp-layout-content>
</template>

<script>
  export default {
    name: "DemoCheckbox",
    data() {
      return {
        valueArr: [1],
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
