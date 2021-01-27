<template>
  <amp-layout-content>
    <div>
      <el-form label-width="150px" label-position="left">
        <el-form-item label="说明">
          <p>1.el-pagination封装为amp-pagination，更新了样式</p>
          <p>2.分页的layout默认是全量，顺序与UI规范保持一致</p>
          <p>3.默认带背景色，与UI规范保持一致</p>
          <p>4.页码配置，使用全局定义的PAGE_NORMAL_CONFIG(普通)或者PAGE_MINI_CONFIG(小)</p>
          <p>5.配置参考el-pagination</p>
        </el-form-item>
        <el-form-item label="数据只有1页，不显示">
          <amp-pagination
            :current-page="pageNormal.pageNo"
            :page-sizes="pageNormal.pageSizes"
            :page-size="pageNormal.pageSize"
            :total="5"
            background
          ></amp-pagination>
        </el-form-item>
        <el-form-item label="全量分页-带背景色">
          <amp-pagination
            :current-page="pageNormal.pageNo"
            :page-sizes="pageNormal.pageSizes"
            :page-size="pageNormal.pageSize"
            :total="400"
            background
          ></amp-pagination>
        </el-form-item>
        <el-form-item label="全量分页-无背景色">
          <amp-pagination
            :current-page="pageNormal.pageNo"
            :page-sizes="pageNormal.pageSizes"
            :page-size="pageNormal.pageSize"
            :total="400"
          ></amp-pagination>
        </el-form-item>
        <el-form-item label="小分页-带背景色">
          <amp-pagination
            :small="true"
            :page-sizes="pageNormal.pageSizes"
            :page-size="pageNormal.pageSize"
            :layout="pageNormal.layout"
            background
            :total="100">
          </amp-pagination>
        </el-form-item>
        <el-form-item label="小分页-无背景色">
          <amp-pagination
            :small="true"
            :page-sizes="pageNormal.pageSizes"
            :page-size="pageNormal.pageSize"
            :layout="pageNormal.layout"
            :total="100">
          </amp-pagination>
        </el-form-item>
        <el-form-item label="小分页-mini">
          <amp-pagination
            :small="true"
            :page-sizes="pageMini.pageSizes"
            :page-size="pageMini.pageSize"
            :layout="pageMini.layout"
            :total="100">
          </amp-pagination>
        </el-form-item>
      </el-form>
    </div>
  </amp-layout-content>
</template>

<script>
  import {PAGE_NORMAL_CONFIG, PAGE_MINI_CONFIG} from "../../../lib/constant/global";

  export default {
    name: "DemoPagination",
    data() {
      return {
        valueStr: "",
        valueArr: [],
        pageNormal: JSON.parse(JSON.stringify(PAGE_NORMAL_CONFIG)),
        pageMini: JSON.parse(JSON.stringify(PAGE_MINI_CONFIG))
      }
    },
    methods: {}
  }
</script>

<style lang="scss" scoped>

</style>
