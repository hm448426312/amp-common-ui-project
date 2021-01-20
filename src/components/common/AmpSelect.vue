<template>
  <span
    style="display: inline-flex;"
    :class="{'amp-filter-select': $attrs.filter}"
  >
    <span class="prev-filter" v-if="$attrs.filter">{{$attrs.filter}}</span>
    <el-select
      ref="AmpSelectRef"
      v-bind="$attrs"
      v-on="$listeners"
      :style="[{'width':innerWidth}]"
    >
      <slot/>
      <template slot="empty">
        <slot name="myEmpty">
          <div class="amp-select-empty">--暂无数据--</div>
        </slot>
      </template>
    </el-select>
  </span>
</template>

<script>
  export default {
    name: "AmpSelect",
    props: {
      innerWidth: {
        type: String,
        default: ""
      }
    },
    mounted() {
      //初始化设置  下拉框宽度适应父输入框宽度
      const SELECT = this.$el;
      const DROPDOWN = this.$el.querySelectorAll(".el-select-dropdown")[0];
      DROPDOWN.style.width = SELECT.getBoundingClientRect().width + "px";
    },
  }
</script>

<style lang="scss" scoped>
  > > > .el-select-dropdown {
    min-width: 0 !important;
  }

  .amp-select-empty {
    height: 32px;
    line-height: 32px;
    margin: 8px 0;
    padding: 0 12px;
    color: #A0A4AF;
    font-size: 14px;
  }
</style>
