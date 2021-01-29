<template>
  <amp-layout-content>
    <div>
      <el-form label-width="150px" label-position="left">
        <el-form-item label="说明">
          <p>1.原el-tooltip封装为amp-tooltip，暂时未做扩展功能和配置</p>
          <p>2.配置参考el-tooltip</p>
        </el-form-item>
        <el-form-item label="dark">
          <amp-tooltip
            content="提示语"
            placement="left"
            effect="dark"
          >
            <amp-button>左提示</amp-button>
          </amp-tooltip>
          <amp-tooltip
            content="提示语"
            placement="top"
            effect="dark"
          >
            <amp-button>上提示</amp-button>
          </amp-tooltip>
          <amp-tooltip
            content="提示语"
            placement="right"
            effect="dark"
          >
            <amp-button>右提示</amp-button>
          </amp-tooltip>
          <amp-tooltip
            content="提示语"
            placement="bottom"
            effect="dark"
          >
            <amp-button>下提示</amp-button>
          </amp-tooltip>
        </el-form-item>
        <el-form-item label="light">
          <amp-tooltip
            content="提示语"
            placement="left"
            effect="light"
          >
            <amp-button>左提示</amp-button>
          </amp-tooltip>
          <amp-tooltip
            content="提示语"
            placement="top"
            effect="light"
          >
            <amp-button>上提示</amp-button>
          </amp-tooltip>
          <amp-tooltip
            content="提示语"
            placement="right"
            effect="light"
          >
            <amp-button>右提示</amp-button>
          </amp-tooltip>
          <amp-tooltip
            content="提示语"
            placement="bottom"
            effect="light"
          >
            <amp-button>下提示</amp-button>
          </amp-tooltip>
        </el-form-item>
      </el-form>
    </div>
  </amp-layout-content>
</template>

<script>
  export default {
    name: "DemoTooltip",
    data() {
      return {
        valueStr: "",
        valueArr: []
      }
    },
    methods: {}
  }
</script>

<style lang="scss" scoped>

</style>
