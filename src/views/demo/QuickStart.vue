<template>
  <amp-layout-content>
    <div>
      <p>目录结构</p>
      <ul class="demo-box">
        <li>自定义/二次封装组件源代码目录: src/components/common/*</li>
        <li>自定义布局组件源代码目录: src/components/layout/*</li>
        <li>二次封装方法/自定义方法源代码目录: src/components/method/*</li>
        <li>组件css资源目录: lib/css/*</li>
        <li>全局变量定义目录: lib/constant/global.js</li>
        <li>全局混入方法目录: lib/mixins.js</li>
      </ul>
      <br/>
      <p>使用配置</p>
      <ul class="demo-box">
        <li>
          <p>npm install amp-common-ui@latest --save</p>
        </li>
        <li>
          <p>main.js修改：</p>
          <p>a).import ElementUI from 'element-ui';</p>
          <p>b).import {AmpCommonUI} from "../index"</p>
          <p>c).import "element-ui/lib/theme-chalk/index.css";</p>
          <p>d).import 'amp-common-ui/lib/css/g-class.scss';</p>
          <p>e).import 'amp-common-ui/lib/css/el-cover.scss';</p>
          <p>f).Vue.use(ElementUI, { size: 'small' });</p>
          <p>g).Vue.use(AmpCommonUI);</p>
        </li>
      </ul>
      <br/>
      <p>封装element-ui组件列表</p>
      <amp-form-table
        :source-label="formLabel"
        :source-data="formData"
        :column="2"
      ></amp-form-table>
      <br/>
      <p>使用步骤</p>
      <ul class="demo-box">
        <li>
          <p>针对二次封装的组件，全局查找，然后全局替换，如:el-button</p>
          <p>a).全局查找&lt;el-button，替换为&lt;amp-button</p>
          <p>b).全局查找el-button/&gt;，替换为amp-button/&gt;</p>
        </li>
        <li>
          <p>替换完成后需要验证UI是否符合，可能会遇到以下场景:</p>
          <p>a).UI样式不对，可能是由于自己写了样式覆盖(移除自身的样式覆盖)或者公共组件未考虑到该场景(联系胡淼0000201173处理)</p>
          <p>b).通过$refs获取的组件对象错误，是由于二次封装组件后，原$refs指向的是外层组件，需要通过$refs继续深入获取</p>
          <p>c).原组件通过v-xxx绑定的属性，针对二次封装的组件不生效(v-model除外)，需要更改为:xxx</p>
        </li>
      </ul>
    </div>
  </amp-layout-content>
</template>

<script>
  export default {
    name: "QuickStart",
    data() {
      return {
        isCollapse: false,
        showRightTabs: false,
        showRightHeader: false,
        showRightFilter: false,
        subPage: false,
        activeTab: "first",
        testValue: "",
        showTable: false,
        formLabel: [],
        formData: {
          "el-button-按钮": "amp-button",
          "el-cascader-级联": "amp-cascader",
          "el-checkbox-复选": "amp-checkbox",
          "el-checkbox-button-复选组的项": "amp-checkbox-button",
          "el-checkbox-group-复选组": "amp-checkbox-group",
          "el-collapse-折叠面板": "amp-collapse",
          "el-date-picker-日期": "amp-date-picker",
          "el-link-文字链接": "amp-link",
          "el-select-下拉": "amp-select",
          "el-option-group-下拉组": "amp-option-group",
          "el-option-下拉项": "amp-option",
          "el-pagination-分页": "amp-pagination",
          "el-progress-进度条": "amp-progress",
          "el-radio-单选": "amp-button",
          "el-radio-group-单选组": "amp-radio-group",
          "el-radio-button-单选组的项": "amp-radio-button",
          "el-slider-滑块": "amp-slider",
          "el-switch-开关": "amp-switch",
          "el-table-表格": "amp-table",
          "el-tag-标签": "amp-tag",
          "el-timeline-时间线": "amp-timeline",
          "el-timeline-item-时间线内容": "amp-timeline-item",
          "el-time-picker-时间选择": "amp-time-picker",
          "el-time-select-时间选择": "amp-time-select",
          "el-tooltip-提示": "amp-tooltip",
          "el-tree-树": "amp-tree 未测试，暂不替换",
        },
      }
    },
    mounted() {
      let temp = [];
      let _that = this;
      Object.keys(this.formData).forEach((key) => {
        temp.push({
          field: key,
          label: key
        })
      });
      this.formLabel = temp;
    }
  }
</script>

<style lang="scss" scoped>
  .demo-box {
    list-style-type: decimal;
  }
</style>
