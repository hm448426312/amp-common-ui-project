// 所有页面引入，内含全局方法，通过this.methodsName调用
const AmpGlobalMix = {
  data() {
    return {
      $AmpLoadingFlag: null,
    }
  },
  methods: {
    /**
     * 显示message弹框-胡淼2020.12.31
     * @param arg string|object，具体参考el-message
     * @returns 返回message对象，具体参考el-message
     */
    $AmpMessage(arg) {
      let option = {
        message: "", // 提示文本
        iconClass: "iconfont ", // icon图标
        type: "info", // 默认info类型
        customClass: "", // 自定义样式，组件用
        duration: 3000,
        showClose: true, // 默认有关闭按钮
        offset: 80,
      };
      if (typeof arg === "string") {
        option.message = arg;
        option.customClass = "amp-message--info";
      } else if (typeof arg === "object") {
        Object.keys(arg || {}).forEach(key => {
          option[key] = arg[key];
        });
        option.customClass += ` amp-message--${option.type || 'info'}`;
      }
      switch (option.type) {
        case "warning":
          option.iconClass += `icon-jinggao-fill`;
          break;
        case "error":
          option.iconClass += `icon-cuowu-fill`;
          break;
        case "success":
          option.iconClass += `icon-duihao-fill`;
          break;
        case "info":
        default:
          option.iconClass += `icon-tishi-fill`;
          break;
      }
      option.type = "";
      return this.$message(option);
    },
    /**
     * 显示notify弹框-胡淼2020.12.31
     * @param arg string|object，具体参考el-notify
     * @returns 返回notify对象，具体参考el-notify
     */
    $AmpNotify(arg) {
      let option = {
        title: "提示", // 标题
        message: "", // 提示文本
        iconClass: "iconfont ", // icon图标
        // type: "info", // 默认info类型
        customClass: "", // 自定义样式，组件用
        duration: 3000,
        showClose: true, // 默认有关闭按钮
        offset: 20,
      };
      if (typeof arg === "string") {
        option.message = arg;
        option.customClass = "amp-notify--info";
      } else if (typeof arg === "object") {
        Object.keys(arg || {}).forEach(key => {
          option[key] = arg[key];
        });
        option.customClass += ` amp-notify--${option.type || 'info'}`;
      }
      switch (option.type) {
        case "warning":
          option.iconClass += `icon-jinggao-fill`;
          break;
        case "error":
          option.iconClass += `icon-cuowu-fill`;
          break;
        case "success":
          option.iconClass += `icon-duihao-fill`;
          break;
        case "info":
        default:
          option.iconClass += `icon-tishi-fill`;
          break;
      }
      option.type = "";
      return this.$notify(option);
    },
    /**
     * 显示/隐藏loading框-胡淼2021.1.5
     * @param isShow true显示|false隐藏
     * @param target 覆盖目标，详细参考el的loading的target参数
     * @returns 如果是显示遮罩，返回遮罩的对象，如果是关闭，返回null
     */
    $AmpLoading(isShow = true, target = document.body) {
      if (isShow) {
        let tempLoadingFlag = this.$loading({
          lock: true,
          text: '',
          spinner: 'amp-loading-space', // 占位符，防止使用el自身的icon
          background: 'rgba(0, 0, 0, 0.7)',
          customClass: 'amp-loading',
          target: target || document.body
        });
        this.$AmpLoadingFlag = tempLoadingFlag;
        return tempLoadingFlag;
      } else {
        if (this.$AmpLoadingFlag) {
          this.$AmpLoadingFlag.close();
          this.$AmpLoadingFlag = null;
        }
        return null;
      }
    },
  }
};
export {
  AmpGlobalMix,
}
