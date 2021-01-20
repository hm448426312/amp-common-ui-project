<template>
  <amp-layout-content>
    <div>
      <el-form label-width="150px" label-position="left">
        <el-form-item label="说明">
          <p>1.二次封装了$message方法，修改了info/success/warning/error类型的样式</p>
          <p>2.调用方法:this.$AmpMessage(提示文本(默认info类型) || 配置对象(参考message))</p>
        </el-form-item>
        <el-form-item label="dialog">
          <amp-button @click="showDialog()">打开dialog</amp-button>
        </el-form-item>
      </el-form>
    </div>
    <template v-if="dialogFlag">
      <demo-dialog-content
        @close-dialog="closeDialogEvent"
      ></demo-dialog-content>
    </template>
  </amp-layout-content>
</template>

<script>

  import DemoDialogContent from "./DemoDialogContent";

  export default {
    name: "DemoDialog",
    components: {DemoDialogContent},
    data() {
      return {
        dialogFlag: false,
        valueArr: []
      }
    },
    methods: {
      showDialog() {
        this.dialogFlag = true;
      },
      closeDialogEvent(type) {
        this.dialogFlag = false;
        console.log("关闭dialog", type);
      },
    }
  }
</script>

<style lang="scss" scoped>

</style>
