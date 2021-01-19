<template>
  <amp-layout-content>
    <div>
      <el-form label-width="150px" label-position="left">
        <el-form-item label="说明">
          <p>1.二次封装了$notification方法，修改了info/success/warning/error类型的样式</p>
          <p>2.使用时需要引入AmpGlobalMix，并放入混入mixins:[AmpGlobalMix]中</p>
          <p>3.调用方法:this.$AmpNotify(提示文本(默认info类型) || 配置对象(参考notification))</p>
        </el-form-item>
        <el-form-item label="notify通知提示">
          <amp-button @click="showMessage('success')">成功提示</amp-button>
          <amp-button @click="showMessage('error')">失败提示</amp-button>
          <amp-button @click="showMessage('warning')">警告提示</amp-button>
          <amp-button @click="showMessage('info')">信息提示</amp-button>
          <amp-button @click="showMessageNoArg">无参数提示</amp-button>
          <amp-button @click="showMessage('error', true)">超长信息提示</amp-button>
        </el-form-item>
      </el-form>
    </div>
  </amp-layout-content>
</template>

<script>

  export default {
    name: "DemoNotification",
    data() {
      return {
        valueStr: "",
        valueArr: []
      }
    },
    methods: {
      showMessageNoArg() {
        this.$AmpNotify("无参数提示语");
      },
      showMessage(type, isLong) {
        let opts = {
          type: type,
          title: `${type}类型`,
          message: `${type}类型提示语`
        };
        if (isLong) {
          opts.message = "提示文本超长巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉";
        }
        this.$AmpNotify(opts);
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
