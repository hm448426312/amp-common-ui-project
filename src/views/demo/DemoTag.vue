<template>
  <amp-layout-content>
    <div>
      <el-form label-width="150px" label-position="left">
        <el-form-item label="说明">
          <p>1.原el-tag封装为amp-tag</p>
          <p>2.增加radius参数，默认false</p>
          <p>3.增加text参数，如果文本过长，显示省略号且有tooltip提示</p>
          <p>4.其余配置参考el-tag</p>
        </el-form-item>
        <el-form-item label="空类型tag">
          <amp-tag closable
                   text="plain-空plain-空plain-空plain-空plain-空plain-空plain-空plain-空plain-空plain-空plain-空plain-空plain-空plain-空plain-空plain-空plain-空plain-空">
            plain-空plain-空plain-空plain-空plain-空plain-空plain-空plain-空plain-空plain-空plain-空plain-空plain-空plain-空plain-空plain-空plain-空plain-空
          </amp-tag>
          <amp-tag type="info" closable>空-info</amp-tag>
          <amp-tag type="success" closable>空-success</amp-tag>
          <amp-tag type="error" closable>空-error</amp-tag>
          <amp-tag type="warning" closable>空-warning</amp-tag>
          <br/>
          <amp-tag radius
                   text="plain-空type----plain-空plain-空plain-空plain-空plain-空plain-空plain-空plain-空plain-空plain-空plain-空plain-空plain-空plain-空plain-空plain-空plain-空">
            plain-空type----plain-空plain-空plain-空plain-空plain-空plain-空plain-空plain-空plain-空plain-空plain-空plain-空plain-空plain-空plain-空plain-空plain-空
          </amp-tag>
          <amp-tag radius type="info">空-info</amp-tag>
          <amp-tag radius type="success">空-success</amp-tag>
          <amp-tag radius type="error">空-error</amp-tag>
          <amp-tag radius type="warning">空-warning</amp-tag>
        </el-form-item>
        <el-form-item label="light类型tag">
          <amp-tag closable effect="light">light-空</amp-tag>
          <amp-tag type="info" closable effect="light">light-info</amp-tag>
          <amp-tag type="success" closable effect="light">light-success</amp-tag>
          <amp-tag type="error" closable effect="light">light-error</amp-tag>
          <amp-tag type="warning" closable effect="light">light-warning</amp-tag>
          <br/>
          <amp-tag radius effect="light">light-空</amp-tag>
          <amp-tag type="info" radius effect="light">light-info</amp-tag>
          <amp-tag type="success" radius effect="light">light-success</amp-tag>
          <amp-tag type="error" radius effect="light">light-error</amp-tag>
          <amp-tag type="warning" radius effect="light">light-warning</amp-tag>
        </el-form-item>
        <el-form-item label="plain类型tag">
          <amp-tag closable effect="plain"
                   text="plain-空plain-空plain-空plain-空plain-空plain-空plain-空plain-空plain-空plain-空plain-空plain-空plain-空plain-空plain-空plain-空plain-空plain-空">
            plain-空plain-空plain-空plain-空plain-空plain-空plain-空plain-空plain-空plain-空plain-空plain-空plain-空plain-空plain-空plain-空plain-空plain-空
          </amp-tag>
          <amp-tag type="info" closable effect="plain">plain-info</amp-tag>
          <amp-tag type="success" closable effect="plain">plain-success</amp-tag>
          <amp-tag type="error" closable effect="plain">plain-error</amp-tag>
          <amp-tag type="warning" closable effect="plain">plain-warning</amp-tag>
          <br/>
          <amp-tag radius effect="plain"
                   text="plain-空type----plain-空plain-空plain-空plain-空plain-空plain-空plain-空plain-空plain-空plain-空plain-空plain-空plain-空plain-空plain-空plain-空plain-空">
            plain-空type----plain-空plain-空plain-空plain-空plain-空plain-空plain-空plain-空plain-空plain-空plain-空plain-空plain-空plain-空plain-空plain-空plain-空
          </amp-tag>
          <amp-tag radius type="info" effect="plain">plain-info</amp-tag>
          <amp-tag radius type="success" effect="plain">plain-success</amp-tag>
          <amp-tag radius type="error" effect="plain">plain-error</amp-tag>
          <amp-tag radius type="warning" effect="plain">plain-warning</amp-tag>
        </el-form-item>
        <el-form-item label="dark类型tag">
          <amp-tag closable effect="dark">dark-空type</amp-tag>
          <amp-tag type="info" closable effect="dark">dark-info</amp-tag>
          <amp-tag type="success" closable effect="dark">dark-success</amp-tag>
          <amp-tag type="error" closable effect="dark">dark-error</amp-tag>
          <amp-tag type="warning" closable effect="dark">dark-warning</amp-tag>
          <br/>
          <amp-tag radius effect="dark">dark-空type</amp-tag>
          <amp-tag radius type="info" effect="dark">dark-info</amp-tag>
          <amp-tag radius type="success" effect="dark">dark-success</amp-tag>
          <amp-tag radius type="error" effect="dark">dark-error</amp-tag>
          <amp-tag radius type="warning" effect="dark">dark-warning</amp-tag>
        </el-form-item>
      </el-form>
    </div>
  </amp-layout-content>
</template>

<script>
  export default {
    name: "DemoTag",
    data() {
      return {
        valueStr: "",
        valueArr: []
      }
    },
    methods: {}
  }
</script>

<style lang="scss" scoped>

</style>
