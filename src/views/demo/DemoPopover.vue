<template>
  <amp-layout-content>
    <div>
      <el-form label-width="150px" label-position="left">
        <el-form-item label="说明">
          <p>1.自研组件amp-multiple-confirm，运用于此类场景（不可用dropdown）</p>
          <p>2.外层请使用el-popover，并添加popper-class="amp-multiple-confirm-popper"，该样式控制内部padding</p>
          <p>3.el-popover的v-model值一定要在amp-multiple-confirm组件中进行v-if判断，保证每次加载内容都是根据数据渲染的</p>
          <p>
            4.amp-multiple-confirm组件提供配置：
            <br/>
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
          <p>5.amp-multiple-confirm组件提供方法：
            <br/>
            cancel(取消，无参数返回),
            <br/>
            confirm(确认，返回参数为选中的value数组)</p>
        </el-form-item>
        <el-form-item label="付款-复选框-无数据">
          <el-popover
            popper-class="amp-multiple-confirm-popper"
            placement="bottom-start"
            v-model="value1"
            trigger="click">
            <amp-filter-confirm
              v-if="value1"
              @cancel="value1=false"
              @confirm="checkboxConfirmEvent"
              :default-checked="valueChecked"
            ></amp-filter-confirm>
            <amp-button
              slot="reference"
              type="text"
            >点我弹出浮框修改-checkbox<i class="el-icon-arrow-down el-icon--right"></i></amp-button>
          </el-popover>
        </el-form-item>
        <el-form-item label="付款-复选框">
          <el-popover
            ref="ampFilterConfirmPopperCheckboxRef"
            popper-class="amp-multiple-confirm-popper"
            placement="bottom-start"
            v-model="value4"
            trigger="click">
            <amp-filter-confirm
              v-if="value4"
              :source="source"
              @cancel="value4=false"
              @confirm="checkboxConfirmEvent"
              :default-checked="valueChecked"
            ></amp-filter-confirm>
            <amp-button
              slot="reference"
              type="text"
            >点我弹出浮框修改-checkbox<i class="el-icon-arrow-down el-icon--right"></i></amp-button>
          </el-popover>
        </el-form-item>
        <el-form-item label="付款-输入框">
          {{value2Const}}
          <el-popover
            ref="ampFilterConfirmPopperInputRef"
            popper-class="amp-multiple-confirm-popper"
            placement="bottom-start"
            v-model="value2"
            trigger="click">
            <amp-button
              slot="reference"
              type="text"
            >点我弹出浮框修改-input<i class="el-icon-arrow-down el-icon--right"></i></amp-button>
            <amp-filter-confirm
              v-if="value2"
              type="input"
              :default-value="value2Const"
              @cancel="value2 = false"
              @confirm="inputConfirmEvent"
            ></amp-filter-confirm>
          </el-popover>
        </el-form-item>
        <el-form-item label="付款-下拉框">
          <amp-button
            v-popover:ampFilterConfirmPopperSelectRef
            type="text"
          >点我弹出浮框修改-select<i class="el-icon-arrow-down el-icon--right"></i></amp-button>

          <el-popover
            ref="ampFilterConfirmPopperSelectRef"
            popper-class="amp-multiple-confirm-popper"
            placement="bottom-start"
            v-model="value3"
            trigger="click">
            <amp-filter-confirm
              v-if="value3"
              type="select"
              :source="source"
              :default-selected="valueSelected"
              @cancel="value3=false"
              @confirm="selectConfirmEvent"
            ></amp-filter-confirm>
          </el-popover>
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
        value2Const: "",
        value3: false,
        value4: false,
        source: [
          {
            label: "显示文本1",
            value: "1",
          }, {
            label: "显示文本2",
            value: "2",
          }, {
            label: "显示文本3",
            value: "3",
          }
        ],
        value3Const: "",
        valueChecked: [],
        valueSelected: "",
        valueRadio1: 0
      }
    },
    methods: {
      checkboxConfirmEvent(checkedList) {
        this.value1 = false;
        this.value4 = false;
        this.valueChecked = checkedList;
        console.log(checkedList, "外层");
      },
      inputConfirmEvent(value) {
        this.value2 = false;
        this.value2Const = value;
        console.log(value, "外层");
      },
      selectConfirmEvent(selected) {
        this.value3 = false;
        this.valueSelected = selected;
        console.log(selected, "外层");
      },
    }
  }
</script>

<style lang="scss" scoped>

</style>
