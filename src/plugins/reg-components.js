// 控件
import AmpButton from "../components/common/AmpButton";
import AmpTooltip from "../components/common/AmpTooltip";
import AmpOverTooltip from "../components/common/AmpOverTooltip";
import AmpCheckbox from "../components/common/AmpCheckbox";
import AmpCheckboxButton from "../components/common/AmpCheckboxButton";
import AmpCheckboxGroup from "../components/common/AmpCheckboxGroup";
import AmpCascader from "../components/common/AmpCascader";
import AmpDatePicker from "../components/common/AmpDatePicker";
import AmpFormTable from "../components/common/AmpFormTable";
import AmpLink from "../components/common/AmpLink";
import AmpOption from "../components/common/AmpOption";
import AmpOptionGroup from "../components/common/AmpOptionGroup";
import AmpPagination from "../components/common/AmpPagination";
import AmpProgress from "../components/common/AmpProgress";
import AmpRadio from "../components/common/AmpRadio";
import AmpRadioButton from "../components/common/AmpRadioButton";
import AmpRadioGroup from "../components/common/AmpRadioGroup";
import AmpSelect from "../components/common/AmpSelect";
import AmpSlider from "../components/common/AmpSlider";
import AmpSteps from "../components/common/AmpSteps";
import AmpSwitch from "../components/common/AmpSwitch";
import AmpTable from "../components/common/AmpTable";
import AmpTag from "../components/common/AmpTag";
import AmpTimeline from "../components/common/AmpTimeline";
import AmpTimelineItem from "../components/common/AmpTimelineItem";
import AmpTimePicker from "../components/common/AmpTimePicker";
import AmpTimeSelect from "../components/common/AmpTimeSelect";
import AmpCollapse from "../components/common/AmpCollapse";
import AmpTree from "../components/common/AmpTree";
import AmpMultipleConfirm from "../components/common/AmpMultipleConfirm";
import AmpFilterConfirm from "../components/common/AmpFilterConfirm";
// 布局
import AmpLayoutWrap from "../components/layout/AmpLayoutWrap";
import AmpLayoutContent from "../components/layout/AmpLayoutContent";


export default {
  install(Vue) {
    // 控件
    Vue.component("AmpButton", AmpButton);
    Vue.component("AmpCheckbox", AmpCheckbox);
    Vue.component("AmpCheckboxButton", AmpCheckboxButton);
    Vue.component("AmpCheckboxGroup", AmpCheckboxGroup);
    Vue.component("AmpCascader", AmpCascader);
    Vue.component("AmpDatePicker", AmpDatePicker);
    Vue.component("AmpFormTable", AmpFormTable);
    Vue.component("AmpLink", AmpLink);
    Vue.component("AmpOption", AmpOption);
    Vue.component("AmpOptionGroup", AmpOptionGroup);
    Vue.component("AmpOverTooltip", AmpOverTooltip);
    Vue.component("AmpPagination", AmpPagination);
    Vue.component("AmpProgress", AmpProgress);
    Vue.component("AmpRadio", AmpRadio);
    Vue.component("AmpRadioButton", AmpRadioButton);
    Vue.component("AmpRadioGroup", AmpRadioGroup);
    Vue.component("AmpSelect", AmpSelect);
    Vue.component("AmpSlider", AmpSlider);
    Vue.component("AmpSteps", AmpSteps);
    Vue.component("AmpSwitch", AmpSwitch);
    Vue.component("AmpTable", AmpTable);
    Vue.component("AmpTag", AmpTag);
    Vue.component("AmpTimeline", AmpTimeline);
    Vue.component("AmpTimelineItem", AmpTimelineItem);
    Vue.component("AmpTimePicker", AmpTimePicker);
    Vue.component("AmpTimeSelect", AmpTimeSelect);
    Vue.component("AmpTooltip", AmpTooltip);
    Vue.component("AmpCollapse", AmpCollapse);
    Vue.component("AmpTree", AmpTree);
    Vue.component("AmpMultipleConfirm", AmpMultipleConfirm);
    Vue.component("AmpFilterConfirm", AmpFilterConfirm);

    // 布局
    Vue.component("AmpLayoutWrap", AmpLayoutWrap);
    Vue.component("AmpLayoutContent", AmpLayoutContent);
  }
};
