<template>
  <amp-layout-content>
    <amp-table
      :data="table.data"
      style="width: 100%"
    >
      <template v-for="(header, index) of table.header">
        <el-table-column
          :prop="header.field"
          :key="index"
          :width="header.width || ''"
          :label="header.label"
          show-overflow-tooltip
        >
          <template slot-scope="scope">
            <pre>{{scope.row[header.field] || ''}}</pre>
          </template>
        </el-table-column>
      </template>
    </amp-table>
  </amp-layout-content>
</template>

<script>
  export default {
    name: "ReleaseNote",
    data() {
      return {
        table: {
          header: [
            {
              field: "version",
              label: "版本号",
              width: "200px"
            },
            {
              field: "desc",
              label: "版本说明"
            }
          ],
          data: [
            {
              version: "1.0.3",
              desc: "1.优化带ICON的按钮，支持阿里的字体库;"
            },
            {
              version: "1.0.2",
              desc: "1.优化amp-menu的样式，便于集成"
            },
            {
              version: "1.0.1",
              desc: "1.新增自定义组件amp-menu，并调整el-menu的样式；\r\n" +
                "2.移除*的font-weight:normal样式；\r\n" +
                "3.filter-item下的select和input宽度移除定义；\r\n" +
                "4.AmpMessageBox按钮单独引入；"
            },
            {
              version: "1.0.0",
              desc: "开始使用，具体的参考快速使用和其他demo"
            }
          ],
        }
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>
