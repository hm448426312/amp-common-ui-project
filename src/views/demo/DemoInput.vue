<template>
  <amp-layout-content>
    <div>
      <el-form label-width="150px" label-position="left">
        <el-form-item label="说明">
          <p>1.仅修改样式，功能未做调整，未封装组件，配置参考el-input</p>
          <p>2.输入框如果无边框，则增加样式no-border</p>
        </el-form-item>
        <el-form-item label="default输入框">
          <div style="width: 250px;">
            <el-input clearable v-model="inputValue"></el-input>
          </div>
        </el-form-item>
        <el-form-item label="">
          <div style="width: 250px;">
            <el-input clearable maxlength="100" show-word-limit v-model="inputValue"></el-input>
          </div>
        </el-form-item>
        <el-form-item label="">
          <div style="width: 250px;">
            <el-input clearable disabled v-model="inputValue"></el-input>
          </div>
        </el-form-item>
        <el-form-item label="输入框-large">
          <div style="width: 250px;">
            <el-input size="large" clearable v-model="inputValue"></el-input>
          </div>
        </el-form-item>
        <el-form-item label="输入框-mini">
          <div style="width: 250px;">
            <el-input size="mini" clearable v-model="inputValue"></el-input>
          </div>
        </el-form-item>
        <el-form-item label="无边框搜索框">
          <div style="width: 250px;">
            <el-input
              class="no-border"
              v-model="inputValue"
              prefix-icon="el-icon-search"
              placeholder="请输入内容"
            ></el-input>
          </div>
        </el-form-item>
        <el-form-item label="default文本框">
          <div style="width: 250px;">
            <el-input type="textarea" maxlength="100" show-word-limit v-model="inputValue"></el-input>
          </div>
        </el-form-item>
        <el-form-item label="">
          <div style="width: 250px;">
            <el-input type="textarea" maxlength="100" show-word-limit disabled v-model="inputValue"></el-input>
          </div>
        </el-form-item>
        <el-form-item label="带下拉输入框">
          <div style="width: 500px;">
            <el-input placeholder="请输入" v-model="inputValue" clearable>
              <amp-select clearable v-model="inputSelect" slot="prepend" placeholder="请选择">
                <amp-option label="餐厅名" value="1"></amp-option>
                <amp-option label="订单号" value="2"></amp-option>
                <amp-option label="用户电话用户电话用户电话用户电话" value="3"></amp-option>
              </amp-select>
              <!--<el-button slot="append" icon="el-icon-search"></el-button>-->
            </el-input>
          </div>
        </el-form-item>
        <el-form-item label="">
          <div style="width: 500px;">
            <el-input disabled placeholder="请输入" v-model="inputValue" clearable>
              <amp-select disabled clearable v-model="inputSelect" slot="prepend" placeholder="请选择">
                <amp-option label="餐厅名" value="1"></amp-option>
                <amp-option label="订单号" value="2"></amp-option>
                <amp-option label="用户电话用户电话用户电话用户电话" value="3"></amp-option>
              </amp-select>
              <el-button disabled slot="append" icon="el-icon-search"></el-button>
            </el-input>
          </div>
        </el-form-item>
      </el-form>
    </div>
  </amp-layout-content>
</template>

<script>
  export default {
    name: "DemoInput",
    data() {
      return {
        inputValue: "",
        inputSelect: "",
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>
