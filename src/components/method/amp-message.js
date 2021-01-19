/**
 * 显示message弹框-胡淼2020.12.31
 * @param arg string|object，具体参考el-message
 * @returns 返回message对象，具体参考el-message
 */
import { Message } from 'element-ui';
export const AmpMessage = (arg) => {
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
  return Message(option);
};
