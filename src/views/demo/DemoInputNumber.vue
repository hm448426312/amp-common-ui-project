<template>
  <amp-layout-content>
    <div>
      <el-form label-width="150px" label-position="left">
        <el-form-item label="说明">
          <p>1.仅修改样式，功能未做调整，未封装组件，配置参考el-input-number</p>
        </el-form-item>
        <el-form-item label="计数器1-自定义宽度">
          <el-input-number style="width: 250px;" :min="0" :max="10" v-model="inputValue"></el-input-number>
        </el-form-item>
        <el-form-item label="计数器-默认宽度">
          <el-input-number disabled v-model="inputValue"></el-input-number>
        </el-form-item>
        <el-form-item label="计数器2-默认宽度">
          <el-input-number :min="0" :max="10" controls-position="right" v-model="inputValue"></el-input-number>
        </el-form-item>
        <el-form-item label="计数器2-自定义宽度">
          <el-input-number style="width: 250px;" controls-position="right" disabled v-model="inputValue"></el-input-number>
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
