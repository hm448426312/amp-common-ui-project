<template>
  <div class="amp-table-outer" :class="{'is-amp-border': !($attrs.border === undefined || $attrs.border === false) }">
    <el-table
      ref="AmpTableRef"
      v-loading="$attrs.loading"
      v-bind="$attrs"
      v-on="$listeners"
      :class="{ 'amp-table-resize': !($attrs.resizable === undefined || $attrs.resizable === false) }"
      :border="!($attrs.resizable === undefined || $attrs.resizable === false) ? true : $attrs.border"
      @selection-change="AmpTableSelectionChangeEvent"
      :row-class-name="AmpTableRowClassName"
      empty-text=" "
    >
      <slot></slot>
      <template slot="empty" v-if="!$attrs.loading">
        <slot name="myEmpty">
          <img width="178" style="margin-top: 50px;" src="../../assets/img/table-nodata.png">
          <div style="margin-bottom: 50px;">暂无数据</div>
        </slot>
      </template>
    </el-table>
    <div class="amp-table-multiple-slot" v-if="selectedCount > 0">
      <span style="color: #000000;font-size: 14px;">已选</span>
      <span style="color: #1179F0;font-size: 18px;margin: 0 8px;">{{selectedCount}}</span>
      <span style="color: #000000;font-size: 14px;margin-right: 36px;">项</span>
      <div>
        <slot name="multipleHeader">
          <!--此处放批量操作按钮-->
        </slot>
      </div>
      <amp-button
        style="margin-left:auto;"
        type="text"
        @click="cancelCheckedEvent"
      >取消选择
      </amp-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "AmpTable",
    data() {
      return {
        selectedCount: 0,
        selectedRows: [],
      }
    },
    methods: {
      AmpTableSelectionChangeEvent(selection) {
        this.selectedCount = (selection && selection.length) || 0;
        this.selectedRows = selection;
      },
      AmpTableRowClassName({row, index}) {
        if (this.selectedRows.indexOf(row) !== -1) {
          return "current-row"
        } else {
          return "";
        }
      },
      cancelCheckedEvent() {
        this.$refs.AmpTableRef.clearSelection();
      }
    }
  }
</script>

<style lang="scss" scoped>
  .amp-table-outer {
    position: relative;
    &.is-amp-border {
      .amp-table-multiple-slot {
        background-color: #F8F8F8;
        left: 41px;
        top: 1px;
        right: 1px;
        height: 36px;
        border-bottom: 1px solid #EBEEF5;
      }
    }
    .amp-table-multiple-slot {
      position: absolute;
      background-color: #ffffff;
      height: 35px;
      left: 40px;
      right: 0;
      top: 0;
      z-index: 100;
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 0 10px;
    }
  }
</style>
