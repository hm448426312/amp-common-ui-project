/**
 * 显示/隐藏loading框-胡淼2021.1.5
 * @param isShow true显示|false隐藏
 * @param target 覆盖目标，详细参考el的loading的target参数
 * @returns 如果是显示遮罩，返回遮罩的对象，如果是关闭，返回null
 */
import { Loading } from 'element-ui';
export const AmpLoading = (target = document.body) => {
  // if (isShow) {
    let tempLoadingFlag = Loading.service({
      lock: true,
      text: '',
      spinner: 'amp-loading-space', // 占位符，防止使用el自身的icon
      background: 'rgba(0, 0, 0, 0.7)',
      customClass: 'amp-loading',
      target: target || document.body
    });
    return tempLoadingFlag;
  // } else {
  //   if (this.$AmpLoadingFlag) {
  //     this.$AmpLoadingFlag.close();
  //     this.$AmpLoadingFlag = null;
  //   }
  //   return null;
  // }
};
