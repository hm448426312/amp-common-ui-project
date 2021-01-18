<template>
  <div class="amp-filter-confirm">
    <div class="amp-filter-confirm-header">
      <span class="overflow-ellipsis">{{title}}</span>
      <amp-button
        style="margin-left: auto;"
        type="text"
        icon="el-icon-close"
        @click="cancelEvent"
      ></amp-button>
    </div>
    <div class="amp-filter-confirm-search"
         v-if="type === 'checkbox' && filterable && source.length > 0"
    >
      <el-input
        class="no-border"
        prefix-icon="el-icon-search"
        v-model="keyword"
        placeholder="输入关键字"
        :clearable="false"
        @keyup.native="searchSourceEvent"
        @clear="searchSourceEvent"
      ></el-input>
    </div>
    <ul class="amp-filter-confirm-body">
      <template v-if="type === 'checkbox'">
        <el-checkbox-group
          v-if="searchSource.length > 0"
          v-model="checkedList"
          @change="checkGroupChangeEvent"
        >
          <li
            class="amp-filter-confirm__item"
            v-for="(item, index) in searchSource"
            :key=index
          >
            <amp-checkbox
              :label="item[value]"
            >
              <div class="overflow-ellipsis flex-row">
                <amp-over-tooltip placement="right" :content="item[label] || ''">
                  <template>
                    {{ item[label] || ''}}
                  </template>
                </amp-over-tooltip>
              </div>
            </amp-checkbox>
          </li>
        </el-checkbox-group>
        <li v-else class="amp-filter-confirm__empty">
          --暂无数据--
        </li>
      </template>
      <template v-else-if="type === 'select'">
        <div style="padding: 0 12px;">
          <amp-select
            v-model="selectedValue"
            :clearable="false"
          >
            <amp-option
              v-for="(item, index) in source"
              :key="index"
              :label="item[label]"
              :value="item[value]"
            ></amp-option>
          </amp-select>
        </div>
      </template>
      <template v-else>
        <div style="padding: 0 12px;">
          <el-input
            v-model="inputValue"
            placeholder="请输入"
          ></el-input>
        </div>
      </template>
    </ul>
    <div class="amp-filter-confirm-footer"
         v-if="type !== 'checkbox' || (type === 'checkbox' && searchSource.length > 0)"
    >
      <amp-button style="flex: 1;" @click="confirmEvent" type="primary">确定</amp-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "AmpFilterConfirm",
    props: {
      // 是否显示搜索框(仅复选框生效)
      filterable: {
        type: Boolean,
        default: true
      },
      // 浮窗类型：复选框/输入框/下拉框
      type: {
        type: String,
        default: "checkbox", // checkbox | input | select
      },
      // 浮窗标题
      title: {
        type: String,
        default: "标题标题标题标题标题标题标题标题标题标题标题"
      },
      // 显示的复选框、下拉框的数据源
      source: {
        type: Array,
        default: () => {
          // let tempArr = [
          //   {
          //     label: "第1个",
          //     value: '1'
          //   }, {
          //     label: "第11个",
          //     value: "11"
          //   }, {
          //     label: "第2个",
          //     value: "2"
          //   }, {
          //     label: "第3个",
          //     value: "3"
          //   }, {
          //     label: "第4个",
          //     value: "4"
          //   }, {
          //     label: "第5个",
          //     value: "5"
          //   }, {
          //     label: "第6个",
          //     value: "6"
          //   }, {
          //     label: "第7个第7个第7个第7个第7个第7个第7个第7个第7个",
          //     value: "7"
          //   }
          // ];
          // return tempArr;
          return []
        }
      },
      // 复选框、下拉框显示的文本key
      label: {
        type: String,
        default: "label"
      },
      // 复选框、下拉框的选中值key
      value: {
        type: [String, Number],
        default: "value"
      },
      // 输入框的默认值
      defaultValue: {
        type: String,
        default: "",
      },
      // 下拉框默认选中的值value
      defaultSelected: {
        type: String,
        default: "",
      },
      // 默认选中的对象的数组，[value]
      defaultChecked: {
        type: Array,
        default: () => {
          let tempArr = [];
          return tempArr;
        }
      }
    },
    data() {
      return {
        keyword: '',
        checkAll: false,
        isIndeterminate: false,
        checkedList: [],
        selectedValue: "",
        allCheckedList: [],
        searchSource: [], // 搜索后的数据
        searchTimer: null,
        inputValue: "",
      }
    },
    mounted() {
      // 初始化默认选中的值
      if (this.defaultChecked && this.defaultChecked.length > 0) {
        if (this.defaultChecked.length === this.source.length) {
          this.checkAll = true;
          this.isIndeterminate = false;
        } else {
          this.checkAll = false;
          this.isIndeterminate = true;
        }
        this.checkedList = JSON.parse(JSON.stringify(this.defaultChecked));
      }
      // 初始化输入框的值
      this.inputValue = this.defaultValue || "";
      // 初始化下拉框的选中的值
      this.selectedValue = this.defaultSelected;
      // 初始化全量选中的值
      for (let i = 0; i < this.source.length; i++) {
        let sourceI = this.source[i];
        this.allCheckedList.push(sourceI[this.value]);
      }
      this.searchSource = this.source;
    },
    methods: {
      // 搜索事件，防抖
      searchSourceEvent(val) {
        if (this.searchTimer) {
          clearTimeout(this.searchTimer);
          this.searchTimer = null;
        }
        this.searchTimer = setTimeout(this.searchSourceMethod, 300);
      },
      // 搜索方法
      searchSourceMethod() {
        let tempArr = [];
        if (this.keyword.trim()) {
          for (let i = 0; i < this.source.length; i++) {
            let sourceI = this.source[i];
            if (sourceI[this.label].indexOf(this.keyword.trim()) !== -1) {
              tempArr.push(sourceI);
            }
          }
        } else {
          tempArr = this.source;
        }
        this.searchSource = tempArr;
      },
      // 关闭弹框
      cancelEvent() {
        this.$emit("cancel");
      },
      // 弹框确认抛出事件confirm
      confirmEvent() {
        if (this.type === "checkbox") {
          this.$emit("confirm", this.checkedList);
        } else if (this.type === "select") {
          this.$emit("confirm", this.selectedValue);
        } else {
          this.$emit("confirm", this.inputValue.trim());
        }
      },
      // 单个复选框checked事件
      checkGroupChangeEvent(checkedList) {
        let checkedCount = checkedList.length;
        this.checkAll = checkedCount === this.source.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.source.length;
      },
      // 全选事件
      checkAllChangeEvent(checked) {
        this.checkedList = checked ? this.allCheckedList : [];
        this.isIndeterminate = false;
      },
    }
  }
</script>

<style lang="scss" scoped>
  .amp-filter-confirm {
    padding: 0 0 8px 0;
    max-width: 220px;
    .amp-filter-confirm-header {
      display: flex;
      height: 42px;
      font-size: 14px;
      color: #212A40;
      border-bottom: 1px solid #EAEDF1;
      margin: 0 12px 8px;
      align-items: center;
    }
    .amp-filter-confirm-search {

    }
    .amp-filter-confirm-body {
      list-style: none;
      margin: 0;
      padding: 0;
      max-height: 224px;
      overflow-x: hidden;
      overflow-y: auto;
      .amp-filter-confirm__empty {
        height: 32px;
        line-height: 32px;
        margin: 8px 0;
        padding: 0 12px;
        color: #A0A4AF;
        font-size: 14px;
      }
      .amp-filter-confirm__item {
        margin: 0;
        padding: 0 10px;
        height: 32px;
        line-height: 32px;
        border-left: 2px solid transparent;
        background-color: #ffffff;
        cursor: pointer;
        display: flex;
        align-items: center;
        > > > .el-checkbox {
          display: flex;
          overflow: hidden;
          .el-checkbox__label {
            overflow: hidden;
          }
        }
        &:hover {
          border-left-color: #1179F0;
          background: #EFF6FE;
        }
      }
    }
    .amp-filter-confirm-footer {
      margin-top: 16px;
      display: flex;
      align-items: center;
      padding: 0 12px;
    }
  }
</style>
