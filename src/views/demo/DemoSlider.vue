<template>
  <amp-layout-content>
    <div>
      <el-form label-width="150px" label-position="left">
        <el-form-item label="说明">
          <p>1.原el-slider封装为amp-slider，暂时未做扩展功能和配置</p>
          <p>1.配置参考el-slider</p>
        </el-form-item>
        <el-form-item label="普通">
          <amp-slider
            v-model="valueStr"
          ></amp-slider>
          <amp-slider
            class="mt16"
            v-model="valueStr"
            disabled
          ></amp-slider>
        </el-form-item>
        <el-form-item label="普通-输入框">
          <amp-slider
            v-model="valueStr1"
            show-input
          ></amp-slider>
          <amp-slider
            class="mt16"
            v-model="valueStr1"
            show-input
            disabled
          ></amp-slider>
        </el-form-item>
        <el-form-item label="普通-步长">
          <amp-slider
            v-model="valueStr2"
            show-input
            :step="10"
          ></amp-slider>
          <amp-slider
            class="mt16"
            v-model="valueStr2"
            show-input
            disabled
            :step="10"
          ></amp-slider>
        </el-form-item>
        <el-form-item label="普通-步长-显示间断点">
          <amp-slider
            v-model="valueStr3"
            :step="10"
            show-stops
          ></amp-slider>
          <amp-slider
            class="mt16"
            v-model="valueStr3"
            :step="10"
            disabled
            show-stops
          ></amp-slider>
        </el-form-item>
        <el-form-item label="普通-步长-显示数字的">
          <amp-slider
            v-model="valueStr4"
            :step="10"
            :marks="marks"
          ></amp-slider>
          <amp-slider
            class="mt16"
            v-model="valueStr4"
            :step="10"
            disabled
            :marks="marks"
          ></amp-slider>
        </el-form-item>
        <el-form-item label="">
        </el-form-item>
      </el-form>
    </div>
  </amp-layout-content>
</template>

<script>
  export default {
    name: "DemoSlider",
    data() {
      return {
        valueStr: 0,
        valueStr1: 0,
        valueStr2: 0,
        valueStr3: 0,
        valueStr4: 0,
        valueArr: [],
        marks: {
          0: '0',
          10: '10',
          20: '20',
          30: '30',
          40: '40',
          50: '50',
          60: '60',
          70: '70',
          80: '80',
          90: '90',
          100: '100'
        }
      }
    },
    methods: {}
  }
</script>

<style lang="scss" scoped>
</style>
