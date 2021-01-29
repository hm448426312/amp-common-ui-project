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
              version: "1.0.13",
              desc: "1.AmpTablePage混入的分页size变化，页码置为第一页"
            },
            {
              version: "1.0.12",
              desc: "1.表格最大高度改变，使用动画\n" +
                "2.分页栏移除单页不显示的定义"
            },
            {
              version: "1.0.11",
              desc: "1.表格的单元格高度调整\n" +
                "2.按钮的tooltip默认位置更改为top\n" +
                "3.更改amp-table批量操作按钮间距，取消选择按钮靠左"
            },
            {
              version: "1.0.10",
              desc: "1.AmpTablePage混入方案，原query参数更改为params参数\r\n" +
                "2.amp-menu内容区自适应高度，超出有滚动条"
            },
            {
              version: "1.0.9",
              desc: "1.el-menu去掉加粗字体；\r\n" +
                "2.布局调整，title需要加粗"
            },
            {
              version: "1.0.8",
              desc: "1.优化AmpTablePage混入方法；\r\n" +
                "2.分页栏根据total进行判断显示，大于0才显示"
            },
            {
              version: "1.0.7",
              desc: "1.新增组件amp-status，具体参考demo"
            },
            {
              version: "1.0.6",
              desc: "1.分页参数的pageSize默认值更改为10；\r\n"+
                "2.单选、复选、开关的文本在苹果系统中粗体问题修复；\n"
            },
            {
              version: "1.0.5",
              desc: "1.更改分页的当前页变量:pageNum更改为pageNo；\n" +
                "2.表格最小高度调整，避免只有一行数据的时候，有两个border-bottom；\n" +
                "3.表格第一列文本字体颜色设置，需要自行增加class-name=is-first-td\n" +
                "4.增加表格页面的混入方案，具体参考表格混入示例页面\n" +
                "5.amp-button问题修复：点击后url增加了问号"
            },
            {
              version: "1.0.4",
              desc: "1.调整分页栏右对齐；\r\n" +
                "2.优化el-menu的submenu样式,icon间距；\r\n" +
                "3.调整table的表头高度"
            },
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
