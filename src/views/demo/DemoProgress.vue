<template>
  <amp-layout-content>
    <div>
      <el-form label-width="150px" label-position="left">
        <el-form-item label="说明">
          <p>1.仅修改样式，功能未做调整，未封装组件，配置参考el-progress</p>
          <p>2.状态建议使用color设置</p>
          <p>3.进度条后的文本，如果需要自定义，参考format</p>
        </el-form-item>
        <el-form-item label="重新查看">
          <amp-button @click="resetProgress">点击重新加载进度条</amp-button>
        </el-form-item>
        <el-form-item label="无状态">
          <el-progress :percentage="progress1.percent" :color="progress1.color"></el-progress>
        </el-form-item>
        <el-form-item label="success状态">
          <el-progress :percentage="progress2.percent" :color="progress2.color"></el-progress>
        </el-form-item>
        <el-form-item label="exception状态">
          <el-progress :percentage="progress3.percent" :color="progress3.color"></el-progress>
        </el-form-item>
        <el-form-item label="warning状态">
          <el-progress :percentage="progress4.percent" :color="progress4.color"></el-progress>
        </el-form-item>
      </el-form>
    </div>
  </amp-layout-content>
</template>

<script>
  export default {
    name: "DemoProgress",
    data() {
      return {
        // 正常
        progress1: {
          percent: 0,
          color: "",
        },
        // 成功
        progress2: {
          percent: 0,
          color: "#21BF9B",
        },
        // 失败
        progress3: {
          percent: 0,
          color: "#E24A4A",
        },
        // 警告
        progress4: {
          percent: 0,
          color: "#FD9731",
        },
        timer: null,
      }
    },
    mounted() {
      this.initProgress();
    },
    methods: {
      resetProgress() {
        for (let i = 0; i < 4; i++) {
          let item = this[`progress${i + 1}`];
          item.percent = 0;
        }
        setTimeout(this.initProgress, 1000)
      },
      initProgress() {
        if (this.timer) {
          clearInterval(this.timer);
          this.timer = null;
        }
        this.timer = setInterval(() => {
          for (let i = 0; i < 4; i++) {
            let item = this[`progress${i + 1}`];
            item.percent += 5;
            if (item.percent >= 100) {
              item.percent = 100;
              clearInterval(this.timer);
              this.timer = null;
            }
          }
        }, 100)
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
