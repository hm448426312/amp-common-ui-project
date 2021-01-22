<template>
  <div>
    <el-dialog
      title="弹框标题"
      :visible.sync="dialogVisible"
      :close-on-click-modal="false"
      :before-close="cancelEvent"
    >
      <div>
        <p>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</p>
        <p>内容</p>
        <p>内容</p>
        <p>内容</p>
        <p>内容</p>
        <p>内容</p>
        <p>内容</p>
        <p>内容</p>
        <p>内容</p>
        <p>内容</p>
        <p>内容</p>
        <p>内容</p>
        <p>内容</p>
        <p>内容</p>
        <p>内容</p>
        <p>内容</p>
        <p>内容</p>
        <p>内容</p>
        <p>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</p>
      </div>
      <div slot="footer">
        <amp-button @click="cancelEvent">取消</amp-button>
        <amp-button type="primary" @click="confirmEvent">确定</amp-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: "DemoDialogContent",
    data() {
      return {
        dialogVisible: true
      }
    },
    methods: {
      cancelEvent() {
        this.$emit('close-dialog', 'cancel');
      },
      confirmEvent() {
        this.$emit('close-dialog', 'confirm');
      },
    }
  }
</script>

<style lang="scss" scoped>

</style>
