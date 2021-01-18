<template>
  <amp-layout-content>
    <div>
      <el-form label-width="150px" label-position="left">
        <el-form-item label="说明">
          <p>1.仅修改样式，功能未做调整，未封装组件，配置参考el-drawer</p>
        </el-form-item>
        <el-form-item label="抽屉">
          <amp-radio-group v-model="drawer1.direction">
            <amp-radio label="ltr">从左往右开</amp-radio>
            <amp-radio label="rtl">从右往左开</amp-radio>
            <amp-radio label="ttb">从上往下开</amp-radio>
            <amp-radio label="btt">从下往上开</amp-radio>
          </amp-radio-group>
          <br/>
          <amp-button @click="openDrawer(drawer1, true)">打开抽屉(有标题)</amp-button>
          <amp-button @click="openDrawer(drawer1, false)">打开抽屉(无标题)</amp-button>
        </el-form-item>
      </el-form>
      <el-drawer
        title="我是标题"
        :modal="false"
        :close-on-click-modal="false"
        :visible.sync="drawer1.show"
        :with-header="drawer1.showTitle"
        :direction="drawer1.direction"
      >
        <span>我是内容!</span>
      </el-drawer>
    </div>
  </amp-layout-content>
</template>

<script>
  export default {
    name: "DemoDrawer",
    data() {
      return {
        drawer1: {
          show: false,
          showTitle: true,
          direction: 'rtl'
        },
        valueArr: []
      }
    },
    methods: {
      openDrawer(drawer, showTitle) {
        drawer.showTitle = showTitle;
        drawer.show = true;
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
