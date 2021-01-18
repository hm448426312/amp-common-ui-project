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
        <el-form-item label="单选框">
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
              @cancel="value1=false"
              @confirm="configConfirmEvent"
              :default-checked="valueChecked"
            ></amp-multiple-confirm>
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
        valueChecked: [],
        valueRadio1: 0
      }
    },
    methods: {
      configConfirmEvent(checkedList) {
        this.value1 = false;
        this.valueChecked = checkedList;
        console.log(checkedList, "外层");
      },
    }
  }
</script>

<style lang="scss" scoped>

</style>
