<template>
  <amp-layout-content>
    <div>
      <el-form label-width="150px" label-position="left">
        <el-form-item label="说明">
          <p>1.原el-switch封装为amp-switch，暂时未做扩展功能和配置</p>
          <p>2.配置参考el-switch</p>
        </el-form-item>
        <el-form-item label="默认开关-确认后更改状态">
          <amp-switch
            v-model="value1"
            @change="switchChangeEvent"
            active-text="启用"
            inactive-text="不启用">
          </amp-switch>
          <br/>
          <amp-switch
            disabled
            v-model="value1"
            @change="switchChangeEvent"
            active-text="启用"
            inactive-text="不启用">
          </amp-switch>
        </el-form-item>
        <el-form-item label="自定义开关-直接更改状态">
          <amp-switch
            v-model="value2"
            active-color="#13ce66"
            inactive-color="#ff4949"
            active-text="启用"
            inactive-text="不启用">
          </amp-switch>
          <br/>
          <amp-switch
            disabled
            v-model="value2"
            active-color="#13ce66"
            inactive-color="#ff4949"
            active-text="启用"
            inactive-text="不启用">
          </amp-switch>
        </el-form-item>
      </el-form>
    </div>
  </amp-layout-content>
</template>

<script>

  export default {
    name: "DemoSwitch",
    data() {
      return {
        value1: true,
        value2: true,
        valueArr: []
      }
    },
    methods: {
      switchChangeEvent() {
        this.value1 = !this.value1;
        const messageBox = this.$AmpMessageBox({
          type: "warning",
          title: "警告",
          content: `是否${this.value1 ? '不启用' : '启用'}，来点长的提示文本来点长的提示文本来点长的提示文本来点长的提示文本来点长的提示文本来点长的提示文本来点长的提示文本来点长的提示文本来点长的提示文本来点长的提示文本来点长的提示文本来点长的提示文本来点长的提示文本来点长的提示文本来点长的提示文本来点长的提示文本来点长的提示文本来点长的提示文本来点长的提示文本来点长的提示文本来点长的提示文本来点长的提示文本来点长的提示文本来点长的提示文本来点长的提示文本来点长的提示文本来点长的提示文本来点长的提示文本来点长的提示文本来点长的提示文本来点长的提示文本来点长的提示文本来点长的提示文本来点长的提示文本来点长的提示文本?`,
          btn: [
            {
              text: '取消',
              fn: () => {
                messageBox.visible = false;
                console.log("取消了");
              }
            },
            {
              type: "primary",
              text: '确定',
              fn: () => {
                this.value1 = !this.value1;
                messageBox.visible = false;
                this.$AmpMessage({
                  message: `${this.value1 ? '不启用' : '启用'}成功`,
                  type: "success"
                });
              }
            }
          ]
        })
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
