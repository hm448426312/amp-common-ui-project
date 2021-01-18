<template>
  <amp-layout-content>
    <div>
      <el-form label-width="150px" label-position="left">
        <el-form-item label="说明">
          <p>1.原el-radio封装为amp-radio，暂时未做扩展功能和配置</p>
          <p>2.原el-radio-group封装为amp-radio-group，暂时未做扩展功能和配置</p>
          <p>3.原el-radio-button封装为amp-radio-button，暂时未做扩展功能和配置</p>
          <p>4.仅修改样式，功能未做调整，配置参考el-radio,el-radio-group,el-radio-button</p>
        </el-form-item>
        <el-form-item label="单选框">
          <amp-radio v-model="valueRadio" :label="0">男</amp-radio>
          <amp-radio v-model="valueRadio" :label="3">女</amp-radio>
          <amp-radio v-model="valueRadio" :label="0" checked disabled>男</amp-radio>
          <amp-radio v-model="valueRadio" :label="3" disabled>女</amp-radio>
        </el-form-item>
        <el-form-item label="单选框-按钮组">
          <amp-radio-group v-model="valueRadio1">
            <amp-radio-button :label="1">篮球</amp-radio-button>
            <amp-radio-button :label="2">羽毛球羽毛球羽毛球羽毛球</amp-radio-button>
            <amp-radio-button :label="3">乒乓球</amp-radio-button>
          </amp-radio-group>
        </el-form-item>
        <el-form-item label="单选框-按钮组-禁用">
          <amp-radio-group disabled v-model="valueRadio1">
            <amp-radio-button :label="1">篮球</amp-radio-button>
            <amp-radio-button :label="2">羽毛球</amp-radio-button>
            <amp-radio-button :label="3">乒乓球</amp-radio-button>
          </amp-radio-group>
        </el-form-item>
      </el-form>
    </div>
  </amp-layout-content>
</template>

<script>
  export default {
    name: "DemoRadio",
    data() {
      return {
        valueRadio: "1",
        valueRadio1: 0
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
