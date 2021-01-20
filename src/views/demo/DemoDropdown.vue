<template>
  <amp-layout-content>
    <div>
      <el-form label-width="150px" label-position="left">
        <el-form-item label="说明">
          <p>1.自研组件amp-multiple-confirm，运用于此类场景（不可用dropdown）</p>
          <p>2.外层请使用el-popover，并添加popper-class="amp-multiple-confirm-popper"，该样式控制内部padding</p>
          <p>3.el-popover的v-model值一定要在amp-multiple-confirm组件中进行v-if判断，保证每次加载内容都是根据数据渲染的</p>
          <p>4.amp-multiple-confirm组件提供配置：</p>
          <p style="margin-left: 20px;">
            filterable(是否支持搜索，默认true),
            <br/>
            source(复选框list数据),
            <br/>
            label(复选框显示的文本key，默认label),
            <br/>
            value(复选框选中的value值的key，默认value),
            <br/>
            defaultChecked(默认选中的数据[value])
          </p>
          <p>5.amp-multiple-confirm组件抛出的方法：</p>
          <p style="margin-left: 20px;">
            cancel(取消，无参数返回),
            <br/>
            confirm(确认，返回参数为选中的value数组)
          </p>
          <p>6.常规用法请使用el-dropdown原生组件，仅对其进行了样式修改：</p>
        </el-form-item>
        <el-form-item label="自定义组件-有数据">
          <amp-button
            v-popover:ampMultipleConfirmPopperRef
            type="text"
          >配置<i class="el-icon-arrow-down el-icon--right"></i></amp-button>

          <el-popover
            ref="ampMultipleConfirmPopperRef"
            popper-class="amp-multiple-confirm-popper"
            placement="bottom-start"
            v-model="value1"
            trigger="click">
            <amp-multiple-confirm
              v-if="value1"
              :source="source"
              @cancel="value1=false"
              @confirm="configConfirmEvent"
              :default-checked="valueChecked"
            ></amp-multiple-confirm>
          </el-popover>
        </el-form-item>
        <el-form-item label="自定义组件-无数据">
          <amp-button
            v-popover:ampMultipleConfirmPopperRef1
            type="text"
          >配置<i class="el-icon-arrow-down el-icon--right"></i></amp-button>

          <el-popover
            ref="ampMultipleConfirmPopperRef1"
            popper-class="amp-multiple-confirm-popper"
            placement="bottom-start"
            v-model="value2"
            trigger="click">
            <amp-multiple-confirm
              v-if="value2"
              @cancel="value2=false"
              @confirm="configConfirmEvent"
              :default-checked="valueChecked"
            ></amp-multiple-confirm>
          </el-popover>
        </el-form-item>
        <el-form-item label="常规用法">
          <el-dropdown
            @command="handleCommand"
          >
            <amp-button type="text">{{hobby?hobby:'全部爱好'}}<i class="el-icon-arrow-down el-icon--right"></i></amp-button>
            <el-dropdown-menu
              slot="dropdown"
            >
              <el-dropdown-item :command="handleCommandItem('篮球')">篮球</el-dropdown-item>
              <el-dropdown-item :command="handleCommandItem('羽毛球')">羽毛球</el-dropdown-item>
              <el-dropdown-item :command="handleCommandItem('足球')">足球</el-dropdown-item>
              <el-dropdown-item :command="handleCommandItem('乒乓球')">乒乓球</el-dropdown-item>
              <el-dropdown-item :command="handleCommandItem('排球')">排球</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-form-item>
      </el-form>
    </div>
  </amp-layout-content>
</template>

<script>
  export default {
    name: "DemoDropdown",
    data() {
      return {
        value1: false,
        value2: false,
        source: [
          {
            label: "显示文本1",
            value: "1"
          }, {
            label: "显示文本2",
            value: "2"
          }, {
            label: "显示文本3",
            value: "3"
          }, {
            label: "显示文本4",
            value: "4"
          }, {
            label: "显示文本5",
            value: "5"
          }
        ],
        hobby: "",
        valueChecked: [],
        valueRadio1: 0
      }
    },
    methods: {
      handleCommand(command) {
        this.hobby = command.hobby;
      },
      handleCommandItem(hobby) {
        return {
          hobby: hobby
        }
      },
      configConfirmEvent(checkedList) {
        this.value1 = false;
        this.value2 = false;
        this.valueChecked = checkedList;
        console.log(checkedList, "外层");
      },
    }
  }
</script>

<style lang="scss" scoped>

</style>
