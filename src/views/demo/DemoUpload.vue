<template>
  <amp-layout-content>
    <div>
      <el-form label-width="150px" label-position="left">
        <el-form-item label="说明">
          <p>1.由于接口不支持，所以无法真实上传成功</p>
          <p>2.仅修改样式，功能未做调整，未封装组件，配置参考el-upload</p>
        </el-form-item>
        <el-form-item label="default按钮">
          <el-upload
            ref="uploadRef"
            action="https://jsonplaceholder.typicode.com/posts/"
            multiple
            show-file-list
            :file-list="valueArr"
            :auto-upload="false"
          >
            <amp-button slot="trigger" icon="el-icon-plus">点击上传</amp-button>
            <amp-button type="primary" @click="uploadEvent">上传</amp-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </el-form-item>
      </el-form>
    </div>
  </amp-layout-content>
</template>

<script>
  export default {
    name: "DemoUpload",
    data() {
      return {
        valueStr: "",
        valueArr: []
      }
    },
    methods: {
      uploadEvent() {
        this.$refs.uploadRef.submit();
      },
    }
  }
</script>

<style lang="scss" scoped>

</style>
