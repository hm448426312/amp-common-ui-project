import Vue from "vue";
// 静态资源
// import "./src/assets/css/el-cover.scss";
// import "./src/assets/css/g-class.scss";
// 控件
import AmpButton from "./src/components/common/AmpButton";
import AmpTooltip from "./src/components/common/AmpTooltip";
import AmpOverTooltip from "./src/components/common/AmpOverTooltip";
import AmpCheckbox from "./src/components/common/AmpCheckbox";
import AmpCheckboxButton from "./src/components/common/AmpCheckboxButton";
import AmpCheckboxGroup from "./src/components/common/AmpCheckboxGroup";
import AmpCascader from "./src/components/common/AmpCascader";
import AmpDatePicker from "./src/components/common/AmpDatePicker";
import AmpFormTable from "./src/components/common/AmpFormTable";
import AmpLink from "./src/components/common/AmpLink";
import AmpOption from "./src/components/common/AmpOption";
import AmpOptionGroup from "./src/components/common/AmpOptionGroup";
import AmpPagination from "./src/components/common/AmpPagination";
import AmpProgress from "./src/components/common/AmpProgress";
import AmpRadio from "./src/components/common/AmpRadio";
import AmpRadioButton from "./src/components/common/AmpRadioButton";
import AmpRadioGroup from "./src/components/common/AmpRadioGroup";
import AmpSelect from "./src/components/common/AmpSelect";
import AmpSlider from "./src/components/common/AmpSlider";
import AmpSteps from "./src/components/common/AmpSteps";
import AmpSwitch from "./src/components/common/AmpSwitch";
import AmpTable from "./src/components/common/AmpTable";
import AmpTag from "./src/components/common/AmpTag";
import AmpTimeline from "./src/components/common/AmpTimeline";
import AmpTimelineItem from "./src/components/common/AmpTimelineItem";
import AmpTimePicker from "./src/components/common/AmpTimePicker";
import AmpTimeSelect from "./src/components/common/AmpTimeSelect";
import AmpCollapse from "./src/components/common/AmpCollapse";
import AmpTree from "./src/components/common/AmpTree";
import AmpMultipleConfirm from "./src/components/common/AmpMultipleConfirm";
import AmpFilterConfirm from "./src/components/common/AmpFilterConfirm";
// 布局
import AmpLayoutWrap from "./src/components/layout/AmpLayoutWrap";
import AmpLayoutContent from "./src/components/layout/AmpLayoutContent";

const install = function (Vue) {
  Vue.component(AmpButton.name, AmpButton);
  Vue.component(AmpTooltip.name, AmpTooltip);
  Vue.component(AmpOverTooltip.name, AmpOverTooltip);
  Vue.component(AmpCheckbox.name, AmpCheckbox);
  Vue.component(AmpCheckboxButton.name, AmpCheckboxButton);
  Vue.component(AmpCheckboxGroup.name, AmpCheckboxGroup);
  Vue.component(AmpCascader.name, AmpCascader);
  Vue.component(AmpDatePicker.name, AmpDatePicker);
  Vue.component(AmpFormTable.name, AmpFormTable);
  Vue.component(AmpLink.name, AmpLink);
  Vue.component(AmpOption.name, AmpOption);
  Vue.component(AmpOptionGroup.name, AmpOptionGroup);
  Vue.component(AmpPagination.name, AmpPagination);
  Vue.component(AmpProgress.name, AmpProgress);
  Vue.component(AmpRadio.name, AmpRadio);
  Vue.component(AmpRadioButton.name, AmpRadioButton);
  Vue.component(AmpRadioGroup.name, AmpRadioGroup);
  Vue.component(AmpSelect.name, AmpSelect);
  Vue.component(AmpSlider.name, AmpSlider);
  Vue.component(AmpSteps.name, AmpSteps);
  Vue.component(AmpSwitch.name, AmpSwitch);
  Vue.component(AmpTable.name, AmpTable);
  Vue.component(AmpTag.name, AmpTag);
  Vue.component(AmpTimeline.name, AmpTimeline);
  Vue.component(AmpTimelineItem.name, AmpTimelineItem);
  Vue.component(AmpTimePicker.name, AmpTimePicker);
  Vue.component(AmpTimeSelect.name, AmpTimeSelect);
  Vue.component(AmpCollapse.name, AmpCollapse);
  Vue.component(AmpTree.name, AmpTree);
  Vue.component(AmpMultipleConfirm.name, AmpMultipleConfirm);
  Vue.component(AmpFilterConfirm.name, AmpFilterConfirm);
  Vue.component(AmpLayoutWrap.name, AmpLayoutWrap);
  Vue.component(AmpLayoutContent.name, AmpLayoutContent);
};
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export default {
  install,
  AmpButton,
  AmpTooltip,
  AmpOverTooltip,
  AmpCheckbox,
  AmpCheckboxButton,
  AmpCheckboxGroup,
  AmpCascader,
  AmpDatePicker,
  AmpFormTable,
  AmpLink,
  AmpOption,
  AmpOptionGroup,
  AmpPagination,
  AmpProgress,
  AmpRadio,
  AmpRadioButton,
  AmpRadioGroup,
  AmpSelect,
  AmpSlider,
  AmpSteps,
  AmpSwitch,
  AmpTable,
  AmpTag,
  AmpTimeline,
  AmpTimelineItem,
  AmpTimePicker,
  AmpTimeSelect,
  AmpCollapse,
  AmpTree,
  AmpMultipleConfirm,
  AmpFilterConfirm,
  AmpLayoutWrap,
  AmpLayoutContent,
}
