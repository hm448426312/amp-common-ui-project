<template>
  <amp-layout-content>
    <div>
      <el-form label-width="150px" label-position="left">
        <el-form-item label="说明">
          <p>1.原el-button封装为amp-button，修改了样式</p>
          <p>2.如果按钮需要tooltip，增加tooltip="提示文本"的配置即可</p>
          <p>3.type="text"的按钮，新增了subType配置(文本按钮且有ICON才生效)，目前仅支持default(正常文本按钮)和danger(颜色有变化)</p>
          <p>4.其余配置参考el-button</p>
        </el-form-item>
        <el-form-item label="default按钮">
          <amp-button>Default按钮</amp-button>
          <amp-button :loading="btnLoading" @click="btnLoadingEvent">loading按钮</amp-button>
          <amp-button icon="el-icon-plus">Default按钮<i class="el-icon-upload el-icon--right"></i></amp-button>
          <amp-button disabled>Default按钮</amp-button>
        </el-form-item>
        <el-form-item label="large按钮">
          <amp-button size="large">Default按钮</amp-button>
          <amp-button size="large" icon="el-icon-plus">Default按钮<i class="el-icon-upload el-icon--right"></i>
          </amp-button>
          <amp-button size="large" disabled>Default按钮</amp-button>
        </el-form-item>
        <el-form-item label="mini按钮">
          <amp-button size="mini">Default按钮</amp-button>
          <amp-button size="mini" icon="el-icon-plus">Default按钮<i class="el-icon-upload el-icon--right"></i>
          </amp-button>
          <amp-button size="mini" disabled>Default按钮</amp-button>
        </el-form-item>
        <el-form-item label="primary按钮">
          <amp-button type="primary">Primary按钮</amp-button>
          <amp-button icon="el-icon-edit" type="primary">Primary按钮<i class="el-icon-upload el-icon--right"></i>
          </amp-button>
          <amp-button disabled type="primary">Primary按钮</amp-button>
        </el-form-item>
        <el-form-item label="danger按钮">
          <amp-button type="danger">danger按钮</amp-button>
          <amp-button icon="el-icon-delete" type="danger">danger按钮</amp-button>
          <amp-button disabled type="danger">danger按钮</amp-button>
        </el-form-item>
        <el-form-item label="纯文本按钮">
          <amp-button type="text">纯文本按钮</amp-button>
          <amp-button disabled type="text">纯文本按钮</amp-button>
        </el-form-item>
        <el-form-item label="纯ICON按钮">
          <amp-button icon="el-icon-edit" type="text"></amp-button>
          <amp-button subType="danger" icon="el-icon-delete" type="text"></amp-button>
          <amp-button subType="danger" disabled icon="el-icon-delete" type="text"></amp-button>
        </el-form-item>
        <el-form-item label="带ICON文本按钮">
          <amp-button icon="el-icon-edit" type="text">带ICON文本按钮</amp-button>
          <amp-button disabled icon="el-icon-edit" type="text">带ICON文本按钮</amp-button>
          <amp-button subType="danger" icon="el-icon-delete" type="text">带ICON文本按钮-danger</amp-button>
          <amp-button subType="danger" disabled icon="el-icon-delete" type="text">带ICON文本按钮-danger</amp-button>
        </el-form-item>
        <el-form-item label="带Tooltip按钮">
          <amp-button tooltip="编辑" icon="el-icon-edit" type="text"></amp-button>
          <amp-button tooltip="删除后无法恢复，请小心谨慎" type="danger">danger按钮</amp-button>
          <amp-button disabled tooltip="删除后无法恢复，请小心谨慎" type="danger">danger按钮</amp-button>
        </el-form-item>
      </el-form>
    </div>
  </amp-layout-content>
</template>

<script>
  export default {
    name: "DemoButton",
    data() {
      return {
        btnLoading: false
      }
    },
    methods: {
      btnLoadingEvent() {
        this.btnLoading = !this.btnLoading;
        if (this.btnLoading) {
          setTimeout(() => {
            this.btnLoading = false;
          }, 3000)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
