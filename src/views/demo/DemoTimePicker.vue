<template>
  <amp-layout-content>
    <div>
      <el-form label-width="150px" label-position="left">
        <el-form-item label="说明">
          <p>1.原el-time-picker封装为amp-time-picker，暂时未做扩展功能和配置</p>
          <p>2.配置参考el-time-picker</p>
        </el-form-item>
        <el-form-item label="选择任意时间">
          <amp-time-picker
            v-model="valueStr"
          ></amp-time-picker>
          <amp-time-picker
            v-model="valueStr"
            disabled
          ></amp-time-picker>
        </el-form-item>
        <el-form-item label="选择任意时间-范围">
          <amp-time-picker
            is-range
            v-model="valueStr1"
          ></amp-time-picker>
          <amp-time-picker
            is-range
            v-model="valueStr1"
            disabled
          ></amp-time-picker>
        </el-form-item>
        <el-form-item label="选择固定时间">
          <amp-time-select
            v-model="valueStr2"
          ></amp-time-select>
          <amp-time-select
            v-model="valueStr2"
            disabled
          ></amp-time-select>
        </el-form-item>
      </el-form>
    </div>
  </amp-layout-content>
</template>

<script>
  export default {
    name: "DemoTimePicker",
    data() {
      return {
        valueStr: "",
        valueStr1: "",
        valueStr2: "",
        valueArr: []
      }
    },
    methods: {}
  }
</script>

<style lang="scss" scoped>

</style>
