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
          <p>b).import AmpCommonUI from "amp-common-ui/dist/amp-common-ui"</p>
          <p>c).import "element-ui/lib/theme-chalk/index.css";</p>
          <p>d).import 'amp-common-ui/lib/css/g-class.scss';</p>
          <p>e).import 'amp-common-ui/lib/css/el-cover.scss';</p>
          <p>f).Vue.use(ElementUI, { size: 'small' });</p>
          <p>g).Vue.use(AmpCommonUI);</p>
        </li>
      </ul>
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
      }
    }
  }
</script>

<style lang="scss" scoped>
  .demo-box {
    list-style-type: decimal;
  }
</style>
