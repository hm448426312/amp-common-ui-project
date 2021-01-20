import Vue from 'vue';
import ampMessageBox from './AmpMessageBox';

const AmpMessageBox = Vue.extend(ampMessageBox);

AmpMessageBox.install = (options) => {
  if (!options) {
    return null;
  }

  if(document.querySelector('.my-message-box-outer')){
    return null;
  }
  const instance = new AmpMessageBox({
    data: options
  }).$mount();

  document.body.appendChild(instance.$el);

  Vue.nextTick(() => {
    instance.visible = true;
  });
  AmpMessageBox.instance = instance
  return instance;
};

// 导出组件
export default AmpMessageBox;
