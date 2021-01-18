<template>
  <amp-layout-content>
    <div>
      <el-form label-width="250px" label-position="left">
        <el-form-item label="说明">
          <p>1.原el-cascader封装为amp-cascader</p>
          <p>2.级联下拉item超长时，显示省略号，且有tooltip提示</p>
          <p>3.配置参考el-cascader</p>
        </el-form-item>
        <el-form-item label="级联-禁用">
          <amp-cascader
            v-model="valueStr"
            :options="[]"
            disabled
            filterable
            clearable
            :props="{ expandTrigger: 'click', checkStrictly: true, multiple: true }"
          ></amp-cascader>
        </el-form-item>
        <el-form-item label="级联-无数据-可搜索">
          <amp-cascader
            v-model="valueStr"
            :options="[]"
            filterable
            clearable
            :props="{ expandTrigger: 'click', checkStrictly: false, multiple: false }"
          ></amp-cascader>
        </el-form-item>
        <el-form-item label="级联-单选-叶子节点-可搜索">
          <amp-cascader
            v-model="valueStr"
            :options="sourceArr"
            filterable
            clearable
            :props="{ expandTrigger: 'click', checkStrictly: false, multiple: false }"
          ></amp-cascader>
        </el-form-item>
        <el-form-item label="级联-单选-任意级别-可搜索">
          <amp-cascader
            v-model="valueStr1"
            :options="sourceArr"
            filterable
            clearable
            :props="{ expandTrigger: 'click', checkStrictly: true, multiple: false }"
          ></amp-cascader>
        </el-form-item>
        <el-form-item label="级联-多选-叶子节点-可搜索">
          <amp-cascader
            v-model="valueStr2"
            :options="sourceArr"
            filterable
            clearable
            :props="{ expandTrigger: 'click', checkStrictly: false, multiple: true }"
          ></amp-cascader>
        </el-form-item>
        <el-form-item label="级联-多选-任意级别-折叠-可搜索">
          <amp-cascader
            class="amp-cascader-nowrap"
            collapse-tags
            v-model="valueStr3"
            :options="sourceArr"
            filterable
            clearable
            :props="{ expandTrigger: 'click', checkStrictly: true, multiple: true }"
          ></amp-cascader>
        </el-form-item>
        <el-form-item label="级联-多选-任意级别-折叠-不可搜索">
          <amp-cascader
            class="amp-cascader-nowrap"
            collapse-tags
            clearable
            v-model="valueStr4"
            :options="sourceArr"
            :props="{ expandTrigger: 'click', checkStrictly: true, multiple: true }"
          ></amp-cascader>
        </el-form-item>
      </el-form>
    </div>
  </amp-layout-content>
</template>

<script>
  export default {
    name: "DemoCascader",
    data() {
      return {
        valueStr: "",
        valueStr1: "",
        valueStr2: [],
        valueStr3: [],
        valueStr4: [],
        valueStr5: [],
        valueStr6: [],
        sourceArr: [
          {
            value: 'zhinan',
            label: '指南指南指南指南指南指南指南指南指南指南',
            children: [{
              value: 'shejiyuanze',
              label: '设计原则(不可选)',
              disabled: true,
              children: [{
                value: 'yizhi',
                label: '一致'
              }, {
                value: 'fankui',
                label: '反馈'
              }, {
                value: 'xiaolv',
                label: '效率'
              }, {
                value: 'kekong',
                label: '可控'
              }]
            }, {
              value: 'daohang',
              label: '导航',
              children: [{
                value: 'cexiangdaohang',
                label: '侧向导航'
              }, {
                value: 'dingbudaohang',
                label: '顶部导航'
              }]
            }]
          }, {
            value: 'zujian',
            label: '组件',
            children: [{
              value: 'basic',
              label: 'Basic',
              children: [{
                value: 'layout',
                label: 'Layout 布局'
              }, {
                value: 'color',
                label: 'Color 色彩'
              }, {
                value: 'typography',
                label: 'Typography 字体'
              }, {
                value: 'icon',
                label: 'Icon 图标'
              }, {
                value: 'button',
                label: 'Button 按钮'
              }]
            }, {
              value: 'form',
              label: 'Form',
              children: [{
                value: 'radio',
                label: 'Radio 单选框'
              }, {
                value: 'checkbox',
                label: 'Checkbox 多选框'
              }, {
                value: 'input',
                label: 'Input 输入框'
              }, {
                value: 'input-number',
                label: 'InputNumber 计数器'
              }, {
                value: 'select',
                label: 'Select 选择器'
              }, {
                value: 'cascader',
                label: 'Cascader 级联选择器'
              }, {
                value: 'switch',
                label: 'Switch 开关'
              }, {
                value: 'slider',
                label: 'Slider 滑块'
              }, {
                value: 'time-picker',
                label: 'TimePicker 时间选择器'
              }, {
                value: 'date-picker',
                label: 'DatePicker 日期选择器'
              }, {
                value: 'datetime-picker',
                label: 'DateTimePicker 日期时间选择器'
              }, {
                value: 'upload',
                label: 'Upload 上传'
              }, {
                value: 'rate',
                label: 'Rate 评分'
              }, {
                value: 'form',
                label: 'Form 表单'
              }]
            }, {
              value: 'data',
              label: 'Data',
              children: [{
                value: 'table',
                label: 'Table 表格'
              }, {
                value: 'tag',
                label: 'Tag 标签'
              }, {
                value: 'progress',
                label: 'Progress 进度条'
              }, {
                value: 'tree',
                label: 'Tree 树形控件'
              }, {
                value: 'pagination',
                label: 'Pagination 分页'
              }, {
                value: 'badge',
                label: 'Badge 标记'
              }]
            }, {
              value: 'notice',
              label: 'Notice',
              children: [{
                value: 'alert',
                label: 'Alert 警告'
              }, {
                value: 'loading',
                label: 'Loading 加载'
              }, {
                value: 'message',
                label: 'Message 消息提示'
              }, {
                value: 'message-box',
                label: 'MessageBox 弹框'
              }, {
                value: 'notification',
                label: 'Notification 通知'
              }]
            }, {
              value: 'navigation',
              label: 'Navigation',
              children: [{
                value: 'menu',
                label: 'NavMenu 导航菜单'
              }, {
                value: 'tabs',
                label: 'Tabs 标签页'
              }, {
                value: 'breadcrumb',
                label: 'Breadcrumb 面包屑'
              }, {
                value: 'dropdown',
                label: 'Dropdown 下拉菜单'
              }, {
                value: 'steps',
                label: 'Steps 步骤条'
              }]
            }, {
              value: 'others',
              label: 'Others',
              children: [{
                value: 'dialog',
                label: 'Dialog 对话框'
              }, {
                value: 'tooltip',
                label: 'Tooltip 文字提示'
              }, {
                value: 'popover',
                label: 'Popover 弹出框'
              }, {
                value: 'card',
                label: 'Card 卡片'
              }, {
                value: 'carousel',
                label: 'Carousel 走马灯'
              }, {
                value: 'collapse',
                label: 'Collapse 折叠面板'
              }]
            }]
          }, {
            value: 'ziyuan',
            label: '资源',
            children: [{
              value: 'axure',
              label: 'Axure Components'
            }, {
              value: 'sketch',
              label: 'Sketch Templates'
            }, {
              value: 'jiaohu',
              label: '组件交互文档'
            }]
          }],
        valueArr: []
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>
