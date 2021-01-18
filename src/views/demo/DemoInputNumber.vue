<template>
  <amp-layout-content>
    <div>
      <el-form label-width="150px" label-position="left">
        <el-form-item label="说明">
          <p>1.仅修改样式，功能未做调整，未封装组件，配置参考el-input-number</p>
        </el-form-item>
        <el-form-item label="计数器1">
          <el-input-number :min="0" :max="10" v-model="inputValue"></el-input-number>
        </el-form-item>
        <el-form-item label="">
          <el-input-number disabled v-model="inputValue"></el-input-number>
        </el-form-item>
        <el-form-item label="计数器2">
          <el-input-number :min="0" :max="10" controls-position="right" v-model="inputValue"></el-input-number>
        </el-form-item>
        <el-form-item label="">
          <el-input-number controls-position="right" disabled v-model="inputValue"></el-input-number>
        </el-form-item>
      </el-form>
    </div>
  </amp-layout-content>
</template>

<script>
  export default {
    name: "DemoInput",
    data() {
      return {
        inputValue: "",
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>
