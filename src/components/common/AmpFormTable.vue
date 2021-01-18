<template>
  <div class="amp-form-table-box">
    <div
      v-for="(item, index) in sourceLabel"
      :key="index"
      class="aft-list"
      :class="item.wholeRow ? 'whole-row' : ''"
      :style="[getStyle(item, index)]">
      <div class="aft-label">
        <amp-over-tooltip
          :content="item.label"
        >
          <template>
            {{item.label}}
          </template>
        </amp-over-tooltip>
      </div>
      <div class="aft-value">
        <amp-over-tooltip
          :content="sourceData && sourceData[item.field]"
        >
          <template>
            {{sourceData && sourceData[item.field]}}
          </template>
        </amp-over-tooltip>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: "AmpFormTable",
    components: {},
    props: {
      // 显示N列(label+value为1列)，默认2
      column: {
        type: Number,
        default: 2
      },
      // 需要显示数据的label的key和一些特殊字段
      sourceLabel: {
        type: Array,
        default: () => {
          // let tempArr = [
          //   {
          //     field: 'key2',
          //     label: 'key2的价格',
          //     type: 'price', // price金额,
          //   },
          //   {
          //     field: 'key3',
          //     label: 'key3的label',
          //   },
          //   {
          //     field: 'key6',
          //     label: 'key6的label',
          //   },
          //   {
          //     field: 'key4',
          //     label: 'key4的label',
          //   },
          //   {
          //     field: 'key5',
          //     label: 'key5的label',
          //   },
          //   {
          //     field: 'key1',
          //     label: 'key1的labelkey1的labelkey1的la的labelkey1的lab的labelkey1的lab的labelkey1的labbelkey1的lab的labelkey1的lab的labelkey1的label',
          //     // type: 'price', // price金额,
          //     // wholeRow: false, // 是否需要占一行（参数废弃）,2020.12.29与UIzhouyiyang沟通尽量不设计该效果
          //     // labelAlign: "right", // left|right|center, label字段显示对齐方式，默认右对齐
          //     // valueAlign: "left", // left|right|center, value值显示对齐方式，默认左对齐
          //     // overflow: 'ellipsis', // wrap折行|ellipsis显示省略号, label和value超出后如何显示,默认省略号
          //   }
          // ];
          // return tempArr;
          return [];
        }
      },
      // 需要显示的数据
      sourceData: {
        type: Object,
        default: () => {
          // let tempObj = {
          //   key1: 'key1的值key1的值key1的值key1的值key1的值key1的值key1的值key1的值key1的值',
          //   key2: '20',
          //   key5: 'key5的值key5的值key5的值key5的值key5的值key5的值key5的值key5的值key5的值key5的值key5的值key5的值key5的值key5的值key5的值key5的值'
          // };
          // return tempObj;
          return null;
        }
      },
    },
    methods: {
      getStyle(item, index) {
        let width = "auto";
        if (item.wholeRow) {
          width = "100%";
        } else {
          width = Math.floor(100 / this.column);
          if (index !== 0 && index === this.column - 1) {
            // 如果该列是最后一个，则宽度用减法，避免行的最后一个宽度不足，线条能看出来
            // todo 如果支持wholeRow，则算法需要改变
            width = 100 - width * (index);
          }
          width += "%";
        }
        return {width: width};
      }
    }
  }
</script>

<style lang="scss" scoped>
  .amp-form-table-box {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    border: 1px solid #DCDFE6;
    border-left: 0;
    border-bottom: none;
    position: relative;
    &:after {
      content: " ";
      width: 100%;
      height: 1px;
      position: absolute;
      bottom: 0;
      background-color: #DCDFE6;
    }
    .aft-list {
      min-height: 40px;
      display: flex;
      flex-direction: row;
      border-bottom: 1px solid #DCDFE6;
      position: relative;
      &.whole-row:before {
        content: " ";
        width: 100%;
        height: 1px;
        position: absolute;
        top: -1px;
        background-color: #DCDFE6;
      }
      .aft-label,
      .aft-value {
        min-height: 40px;
        border-left: 1px solid #DCDFE6;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        display: flex;
        flex-direction: row;
        align-items: center;
        line-height: 23px;
        padding: 8px 16px;
        box-sizing: border-box;
      }
      .aft-label {
        width: 200px;
        flex: none;
        background: #FAFAFA;
        color: #646B80;
      }
      .aft-value {
        color: #212A40;
      }
    }
  }
</style>
