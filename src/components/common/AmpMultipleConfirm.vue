<template>
  <div class="amp-multiple-confirm">
    <div v-if="filterable && source.length > 0" class="amp-multiple-confirm-header">
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
    <ul class="amp-multiple-confirm-body">
      <el-checkbox-group
        v-if="searchSource.length > 0"
        v-model="checkedList"
        @change="checkGroupChangeEvent"
      >
        <li
          class="amp-multiple-confirm__item"
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
      <li v-else class="amp-multiple-confirm__empty">
        --暂无数据--
      </li>
    </ul>
    <div v-if="searchSource.length > 0" class="amp-multiple-confirm-footer">
      <amp-checkbox
        :indeterminate="isIndeterminate"
        v-model="checkAll"
        @change="checkAllChangeEvent"
      >全选
      </amp-checkbox>
      <amp-button @click="cancelEvent" style="margin-left: auto;" type="text">取消</amp-button>
      <amp-button @click="confirmEvent" type="primary">确定</amp-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "AmpMultipleConfirm",
    props: {
      filterable: {
        type: Boolean,
        default: true
      },
      // 显示的复选框数据源
      source: {
        type: Array,
        default: () => {
          // let tempArr = [
          //   {
          //     label: "第1个",
          //     value: 1
          //   }, {
          //     label: "第11个",
          //     value: 11
          //   }, {
          //     label: "第2个",
          //     value: 2
          //   }, {
          //     label: "第3个",
          //     value: 3
          //   }, {
          //     label: "第4个",
          //     value: 4
          //   }, {
          //     label: "第5个",
          //     value: 5
          //   }, {
          //     label: "第6个",
          //     value: 6
          //   }, {
          //     label: "第7个第7个第7个第7个第7个第7个第7个第7个第7个",
          //     value: 7
          //   }
          // ];
          // return tempArr;
          return []
        }
      },
      // 复选框显示的文本key
      label: {
        type: String,
        default: "label"
      },
      // 复选框的选中值key
      value: {
        type: [String, Number],
        default: "value"
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
        allCheckedList: [],
        searchSource: [], // 搜索后的数据
        searchTimer: null,
      }
    },
    created() {
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
      cancelEvent() {
        this.$emit("cancel");
      },
      confirmEvent() {
        this.$emit("confirm", this.checkedList);
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
  .amp-multiple-confirm {
    padding: 8px 0;
    max-width: 220px;
    .amp-multiple-confirm-body {
      list-style: none;
      margin: 0;
      padding: 0;
      max-height: 224px;
      overflow-x: hidden;
      overflow-y: auto;
      .amp-multiple-confirm__empty {
        height: 32px;
        line-height: 32px;
        margin: 8px 0;
        padding: 0 12px;
        color: #A0A4AF;
        font-size: 14px;
      }
      .amp-multiple-confirm__item {
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
          .el-checkbox__input {
            display: flex;
            align-items: center;
          }
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
    .amp-multiple-confirm-footer {
      margin-top: 16px;
      display: flex;
      align-items: center;
      padding: 0 12px;
    }
  }
</style>
