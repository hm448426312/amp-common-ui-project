<template>
  <amp-layout-content>
    <div>
      <p>目录结构</p>
      <ul class="demo-box">
        <li>组件源代码目录: src/components/common/*</li>
        <li>组件源代码目录: src/components/layout/*</li>
        <li>组件静态资源目录: src/assets/img/*</li>
        <li>组件静态资源目录: src/assets/svg/*</li>
        <li>组件css资源目录: src/assets/css/*</li>
        <li>全局变量定义目录: src/constant/global.js</li>
        <li>全局混入方法目录: src/plugins/mixins.js</li>
        <li>全局组件注册目录: src/plugins/reg-components.js</li>
        <li>更新main.js，引入上述css和reg-components.js</li>
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
