import Vue from 'vue'
import Router from 'vue-router'
import Demo from '../views/demo/Index'
import DemoButton from "../views/demo/DemoButton";
import DemoInput from "../views/demo/DemoInput";
import DemoInputNumber from "../views/demo/DemoInputNumber";
import DemoAutocomplete from "../views/demo/DemoAutocomplete";
import DemoSelect from "../views/demo/DemoSelect";
import DemoCascader from "../views/demo/DemoCascader";
import DemoCheckbox from "../views/demo/DemoCheckbox";
import DemoRadio from "../views/demo/DemoRadio";
import DemoCollapse from "../views/demo/DemoCollapse";
import DemoDatePicker from "../views/demo/DemoDatePicker";
import DemoTimePicker from "../views/demo/DemoTimePicker";
import DemoDrawer from "../views/demo/DemoDrawer";
import DemoMessage from "../views/demo/DemoMessage";
import DemoMessageBox from "../views/demo/DemoMessageBox";
import DemoNotification from "../views/demo/DemoNotification";
import DemoPagination from "../views/demo/DemoPagination";
import DemoProgress from "../views/demo/DemoProgress";
import DemoSlider from "../views/demo/DemoSlider";
import DemoSteps from "../views/demo/DemoSteps";
import DemoTable from "../views/demo/DemoTable";
import DemoTabs from "../views/demo/DemoTabs";
import DemoTag from "../views/demo/DemoTag";
import DemoTooltip from "../views/demo/DemoTooltip";
import DemoUpload from "../views/demo/DemoUpload";
import DemoSwitch from "../views/demo/DemoSwitch";
import QuickStart from "../views/demo/QuickStart";
import DemoDropdown from "../views/demo/DemoDropdown";
import DemoLayout from "../views/demo/DemoLayout";
import DemoLayoutCenter from "../views/demo/DemoLayoutCenter";
import DemoLoading from "../views/demo/DemoLoading";
import DemoPopover from "../views/demo/DemoPopover";
import DemoForm from "../views/demo/DemoForm";
import DemoLayoutFullPage from "../views/demo/DemoLayoutFullPage";
import DemoDialog from "../views/demo/DemoDialog";
import DemoMenu from "../views/demo/DemoMenu";
import ReleaseNote from "../views/demo/ReleaseNote";
import DemoTableMixins from "../views/demo/DemoTableMixins";
import DemoStatus from "../views/demo/DemoStatus";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Demo,
      children: [
        {
          path: 'start',
          title: '快速应用',
          component: QuickStart
        },
        {
          path: 'release',
          title: '版本说明',
          component: ReleaseNote
        },
        {
          path: 'layout',
          title: '布局示例',
          component: DemoLayout
        },
        {
          path: 'table-mixins',
          title: 'tableMixins示例',
          component: DemoTableMixins
        },
        {
          path: 'menu',
          title: 'menu菜单',
          component: DemoMenu
        },
        {
          path: 'loading',
          title: 'loading遮罩',
          component: DemoLoading
        },
        {
          path: 'button',
          title: 'button按钮',
          component: DemoButton
        },
        {
          path: 'input',
          title: 'input/textarea输入框',
          component: DemoInput
        },
        {
          path: 'input-number',
          title: 'input-number计数器',
          component: DemoInputNumber
        },
        {
          path: 'autocomplete',
          title: 'autocomplete异步搜索',
          component: DemoAutocomplete
        },
        {
          path: 'select',
          title: 'select下拉选择',
          component: DemoSelect
        },
        {
          path: 'cascader',
          title: 'cascader下拉级联',
          component: DemoCascader
        },
        {
          path: 'dropdown',
          title: 'dropdown下拉菜单',
          component: DemoDropdown
        },
        {
          path: 'popover',
          title: 'popover浮窗',
          component: DemoPopover
        },
        {
          path: 'checkbox',
          title: 'checkbox复选',
          component: DemoCheckbox
        },
        {
          path: 'radio',
          title: 'radio单选',
          component: DemoRadio
        },
        {
          path: 'collapse',
          title: 'collapse折叠面板',
          component: DemoCollapse
        },
        {
          path: 'datepicker',
          title: 'datepicker日期选择',
          component: DemoDatePicker
        },
        {
          path: 'timepicker',
          title: 'timepicker时间选择',
          component: DemoTimePicker
        },
        {
          path: 'drawer',
          title: 'drawer抽屉',
          component: DemoDrawer
        },
        {
          path: 'message',
          title: 'message消息提示',
          component: DemoMessage
        },
        {
          path: 'message-box',
          title: 'message消息确认提示框',
          component: DemoMessageBox
        },
        {
          path: 'notification',
          title: 'notification消息通知',
          component: DemoNotification
        },
        {
          path: 'dialog',
          title: 'dialog弹框',
          component: DemoDialog
        },
        {
          path: 'pagination',
          title: 'pagination分页',
          component: DemoPagination
        },
        {
          path: 'progress',
          title: 'progress进度条',
          component: DemoProgress
        },
        {
          path: 'switch',
          title: 'switch开关',
          component: DemoSwitch
        },
        {
          path: 'status',
          title: 'status状态',
          component: DemoStatus
        },
        {
          path: 'slider',
          title: 'slider滑块',
          component: DemoSlider
        },
        {
          path: 'steps',
          title: 'steps步骤条',
          component: DemoSteps
        },
        {
          path: 'table',
          title: 'table表格',
          component: DemoTable
        },
        {
          path: 'tabs',
          title: 'tabs页签',
          component: DemoTabs
        },
        {
          path: 'tag',
          title: 'tag标签',
          component: DemoTag
        },
        {
          path: 'tooltip',
          title: 'tooltip提示',
          component: DemoTooltip
        },
        {
          path: 'upload',
          title: 'upload上传',
          component: DemoUpload
        },
        {
          path: 'form',
          title: 'form表单',
          component: DemoForm
        },
        {
          path: '',
          redirect: 'start'
        }
      ],
    },
    {
      path: '/layout-center',
      title: '中心布局示例',
      component: DemoLayoutCenter
    },
    {
      path: '/layout-full',
      title: '全屏页面布局',
      component: DemoLayoutFullPage
    },
  ]
})
