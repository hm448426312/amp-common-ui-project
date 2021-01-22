<template>
  <amp-layout-content>
    <div>
      <el-form label-width="150px" label-position="left">
        <el-form-item label="说明">
          <p>1.自定义组件amp-steps</p>
          <p>2.参数steps:[{text(显示的文本),icon(自定义icon的class)}]</p>
          <p>3.参数active:当前第几步(从0开始)，默认0</p>
          <p>4.参数background:是否需要背景色，默认无背景色</p>
          <p>5.参数space(Number):当无背景色时，步骤之间的间距，默认120px</p>
        </el-form-item>
        <el-form-item label="步骤条-简单">
          <amp-steps :active="valueStr" :steps="valueArr"></amp-steps>
          <div class="mt16">
            <amp-button @click="valueStr > 0 ? valueStr-- : ''">上一步</amp-button>
            <amp-button @click="valueStr < valueArr.length ? valueStr++ : ''">下一步</amp-button>
          </div>
        </el-form-item>
        <el-form-item label="步骤条-简单-文本在下方">
          <amp-steps under-text :active="valueStr" :steps="valueArr"></amp-steps>
          <div class="mt16">
            <amp-button @click="valueStr > 0 ? valueStr-- : ''">上一步</amp-button>
            <amp-button @click="valueStr < valueArr.length ? valueStr++ : ''">下一步</amp-button>
          </div>
        </el-form-item>
        <el-form-item label="步骤条-带背景色">
          <amp-steps background :active="valueStr1" :steps="valueArr"></amp-steps>
          <div class="mt16">
            <amp-button @click="valueStr1 > 0 ? valueStr1-- : ''">上一步</amp-button>
            <amp-button @click="valueStr1 < valueArr.length ? valueStr1++ : ''">下一步</amp-button>
          </div>
        </el-form-item>
      </el-form>
    </div>
  </amp-layout-content>
</template>

<script>
  export default {
    name: "DemoSteps",
    data() {
      return {
        valueStr: 0,
        valueStr1: 0,
        valueArr: [
          {
            text: "步骤1步骤1步骤1步骤1步骤1步骤1步骤1步骤1步骤1", // 显示文本
            icon: "el-icon-plus", // 显示icon
            desc: "", // 描述信息
          }, {
            text: "步骤2", // 显示文本
            icon: "el-icon-delete", // 显示icon
            desc: "", // 描述信息
          }, {
            text: "步骤3", // 显示文本
            icon: "", // 显示icon
            desc: "", // 描述信息
          }
        ]
      }
    },
    methods: {}
  }
</script>

<style lang="scss" scoped>

</style>
