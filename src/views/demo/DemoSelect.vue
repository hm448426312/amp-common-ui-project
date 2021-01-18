<template>
  <amp-layout-content>
    <div>
      <el-form label-width="150px" label-position="left">
        <el-form-item label="说明">
          <p>1.原el-select封装为amp-select，重写了empty样式，如需自定义，使用插槽myEmpty</p>
          <p>2.原el-option封装为amp-option，优化了如果文本过长，显示省略号，且有tooltip提示</p>
          <p>3.原el-option-group封装为amp-option-group，暂时未做扩展功能和配置</p>
          <p>4.修改了样式，配置参考el-select和el-option</p>
        </el-form-item>
        <el-form-item label="普通下拉">
          <amp-select clearable v-model="valueStr" placeholder="请选择">
            <amp-option disabled label="餐厅名(不可选)" value="1"></amp-option>
            <amp-option label="订单号" value="2"></amp-option>
            <amp-option label="用户电话用户电话用户电话用户电话" value="3"></amp-option>
            <amp-option label="用户电话2" value="4"></amp-option>
            <amp-option label="用户电话3" value="5"></amp-option>
            <amp-option label="用户电话4" value="6"></amp-option>
          </amp-select>
        </el-form-item>
        <el-form-item label="筛选下拉">
          <amp-select filter="xxxxxxxxx" clearable v-model="valueStr" placeholder="请选择">
            <amp-option disabled label="餐厅名(不可选)" value="1"></amp-option>
            <amp-option label="订单号" value="2"></amp-option>
            <amp-option label="用户电话用户电话用户电话用户电话" value="3"></amp-option>
            <amp-option label="用户电话2" value="4"></amp-option>
            <amp-option label="用户电话3" value="5"></amp-option>
            <amp-option label="用户电话4" value="6"></amp-option>
          </amp-select>
        </el-form-item>
        <el-form-item label="普通下拉-禁用">
          <amp-select disabled clearable v-model="valueStr" placeholder="请选择">
          </amp-select>
        </el-form-item>
        <el-form-item label="普通下拉-无数据">
          <amp-select clearable v-model="valueStr" placeholder="请选择">
          </amp-select>
        </el-form-item>
        <el-form-item label="分组下拉">
          <amp-select clearable v-model="valueStr" placeholder="请选择">
            <amp-option-group label="热门">
              <amp-option disabled label="餐厅名(不可选)" value="1"></amp-option>
              <amp-option label="订单号" value="2"></amp-option>
            </amp-option-group>
            <amp-option-group label="冷门">
              <amp-option label="用户电话用户电话用户电话用户电话" value="3"></amp-option>
              <amp-option label="用户电话2" value="4"></amp-option>
              <amp-option label="用户电话3" value="5"></amp-option>
              <amp-option label="用户电话4" value="6"></amp-option>
            </amp-option-group>
          </amp-select>
        </el-form-item>
        <el-form-item label="多选下拉-不折叠">
          <amp-select clearable multiple v-model="valueArr" placeholder="请选择">
            <amp-option disabled label="餐厅名(不可选)" value="1"></amp-option>
            <amp-option label="订单号" value="2"></amp-option>
            <amp-option label="用户电话用户电话用户电话用户电话" value="3"></amp-option>
            <amp-option label="用户电话2" value="4"></amp-option>
            <amp-option label="用户电话3" value="5"></amp-option>
            <amp-option label="用户电话4" value="6"></amp-option>
          </amp-select>
        </el-form-item>
        <el-form-item label="多选下拉-折叠">
          <amp-select class="amp-select-nowrap" clearable multiple collapse-tags v-model="valueArr" placeholder="请选择">
            <amp-option disabled label="餐厅名(不可选)" value="1"></amp-option>
            <amp-option label="订单号" value="2"></amp-option>
            <amp-option label="用户电话用户电话用户电话用户电话" value="3"></amp-option>
            <amp-option label="用户电话2" value="4"></amp-option>
            <amp-option label="用户电话3" value="5"></amp-option>
            <amp-option label="用户电话4" value="6"></amp-option>
          </amp-select>
        </el-form-item>
      </el-form>
    </div>
  </amp-layout-content>
</template>

<script>
  export default {
    name: "DemoSelect",
    data() {
      return {
        valueStr: "",
        valueArr: []
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>
