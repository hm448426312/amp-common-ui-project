<template>
  <amp-layout-content>
    <div>
      <el-form label-width="150px" label-position="left">
        <el-form-item label="说明">
          <p>1.原el-date-picker封装为amp-date-picker，暂时未做扩展功能和配置</p>
          <p>2.修改了样式，配置参考el-date-picker</p>
        </el-form-item>
        <el-form-item label="普通年月日">
          <amp-date-picker
            v-model="valueStr"
            :picker-options="pickerOptions"
            clearable
            placeholder="请选择年月日"
          ></amp-date-picker>
          <amp-date-picker
            v-model="valueStr"
            disabled
            clearable
            :picker-options="pickerOptions"
            placeholder="请选择年月日"
          ></amp-date-picker>
        </el-form-item>
        <el-form-item label="普通年月日时分秒">
          <amp-date-picker
            type="datetime"
            v-model="valueStr1"
            clearable
            :picker-options="pickerOptions"
            placeholder="请选择年月日时分秒"
          ></amp-date-picker>
          <amp-date-picker
            type="datetime"
            v-model="valueStr1"
            clearable
            disabled
            :picker-options="pickerOptions"
            placeholder="请选择年月日时分秒"
          ></amp-date-picker>
        </el-form-item>
        <el-form-item label="普通年月">
          <amp-date-picker
            type="month"
            v-model="valueStr2"
            clearable
            :picker-options="pickerOptions"
            placeholder="请选择年月"
          ></amp-date-picker>
          <amp-date-picker
            type="month"
            v-model="valueStr2"
            clearable
            disabled
            :picker-options="pickerOptions"
            placeholder="请选择年月"
          ></amp-date-picker>
        </el-form-item>
        <el-form-item label="普通年">
          <amp-date-picker
            type="year"
            v-model="valueStr3"
            clearable
            :picker-options="pickerOptions"
            placeholder="请选择年"
          ></amp-date-picker>
          <amp-date-picker
            type="year"
            v-model="valueStr3"
            clearable
            disabled
            :picker-options="pickerOptions"
            placeholder="请选择年"
          ></amp-date-picker>
        </el-form-item>
        <el-form-item label="范围年月日">
          <amp-date-picker
            type="daterange"
            v-model="valueStr4"
            :picker-options="pickerOptions"
            clearable
            placeholder="请选择年月日"
          ></amp-date-picker>
          <amp-date-picker
            type="daterange"
            v-model="valueStr4"
            :picker-options="pickerOptions"
            clearable
            disabled
            placeholder="请选择年月日"
          ></amp-date-picker>
        </el-form-item>
        <el-form-item label="范围年月日时分秒">
          <amp-date-picker
            type="datetimerange"
            v-model="valueStr6"
            clearable
            :picker-options="pickerOptions"
            placeholder="请选择年月日时分秒"
          ></amp-date-picker>
          <amp-date-picker
            type="datetimerange"
            v-model="valueStr6"
            clearable
            disabled
            :picker-options="pickerOptions"
            placeholder="请选择年月日时分秒"
          ></amp-date-picker>
        </el-form-item>
        <el-form-item label="范围年月">
          <amp-date-picker
            type="monthrange"
            v-model="valueStr7"
            clearable
            :picker-options="pickerOptions"
            placeholder="请选择年月"
          ></amp-date-picker>
          <amp-date-picker
            type="monthrange"
            v-model="valueStr7"
            clearable
            disabled
            :picker-options="pickerOptions"
            placeholder="请选择年月"
          ></amp-date-picker>
        </el-form-item>
      </el-form>
    </div>
  </amp-layout-content>
</template>

<script>
  export default {
    name: "DemoDatePicker",
    data() {
      return {
        valueStr: "",
        valueStr1: "",
        valueStr2: "",
        valueStr3: "",
        valueStr4: "",
        valueStr5: "",
        valueStr6: "",
        valueStr7: "",
        valueStr8: "",
        valueArr: [],
        pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
        },
      }
    },
    methods: {}
  }
</script>

<style lang="scss" scoped>

</style>
