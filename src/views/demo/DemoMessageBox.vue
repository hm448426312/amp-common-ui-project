<template>
  <amp-layout-content>
    <div>
      <el-form label-width="150px" label-position="left">
        <el-form-item label="说明">
          <p>1.自定义组件AmpMessageBox</p>
          <p>2.调用方法:this.$AmpMessageBox(配置对象)</p>
          <p>3.配置对象</p>
          <p style="margin-left: 20px;">
            type：提示类型info,success,warning,error，默认info
            <br/>
            hideIcon：是否隐藏提示类型的icon，默认false
            <br/>
            width：弹框宽度，默认“480px”
            <br/>
            type：提示类型info,success,warning,error，默认info
            <br/>
            title：弹框标题，默认“提示”
            <br/>
            content：弹框提示内容，默认空
            <br/>
            closeCallBakFn：点击右上角关闭按钮回调事件，配置的按钮点击后不会回调该方法
            <br/>
            useHtml：是否使用html片段，默认false
            <br/>
            btn：按钮配置[{text(按钮文本),type(按钮类型，参考el-button，默认default),fn(按钮点击回调方法)}]
          </p>
          <p>4.按钮点击后，需要自己捕获事件并关闭弹框</p>
        </el-form-item>
        <el-form-item label="message消息提示">
          <amp-button @click="showMessage('success')">成功确认</amp-button>
          <amp-button @click="showMessage('error')">失败确认</amp-button>
          <amp-button @click="showMessage('warning')">警告确认</amp-button>
          <amp-button @click="showMessage('info')">信息确认</amp-button>
          <amp-button @click="showMessage('error', true)">超长信息确认</amp-button>
        </el-form-item>
      </el-form>
    </div>
  </amp-layout-content>
</template>

<script>

  export default {
    name: "DemoMessageBox",
    data() {
      return {
        valueStr: "",
        valueArr: []
      }
    },
    methods: {
      showMessage(type, isLong) {
        let message = "我是提示语";
        if (isLong) {
          message = "提示文本超长巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉提示文本超长巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉提示文本超长巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉提示文本超长巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉提示文本超长巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉";
        }
        const ampMessageBox = this.$AmpMessageBox({
          type: type, // 提示类型info,success,warning,error，默认info
          // hideIcon: false, // 是否隐藏提示类型的icon，默认false
          // width: "480px", // 弹框宽度，默认“480px”
          title: "我是标题", // 弹框标题，默认“提示”
          content: message, // 弹框提示内容，默认空
          // subContent: "二级", // 弹框二级提示内容，
          // closeCallBakFn: () => {}, // 点击右上角关闭按钮回调事件，配置的按钮点击后不会回调该方法
          // useHtml: false, // 是否使用html片段，默认false
          btn: [ // 按钮配置
            {
              text: "取消", // 按钮显示的文本
              fn: () => { // 按钮点击后的回调方法
                ampMessageBox.visible = false; // 关闭弹框
              }
            }, {
              text: "确定",
              type: "primary", // 按钮的类型，默认“default”
              fn: () => {
                ampMessageBox.visible = false;
                // todo 此处执行业务方法
              }
            }
          ]
        });
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
