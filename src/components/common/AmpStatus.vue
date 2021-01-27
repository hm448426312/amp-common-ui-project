<template>
  <span class="amp-status">
    <i
      class="amp-status-icon"
      :class="getIconClass"
      :style="[getIconStyle]"
    ></i>
    <span class="amp-status-text">{{text}}</span>
  </span>
</template>

<script>
  export default {
    name: "AmpStatus",
    props: {
      type: {
        type: String,
        default: "success", // success|error|warning|info
      },
      color: {
        type: String,
        default: "",
      },
      text: {
        type: String,
        default: ""
      }
    },
    computed: {
      getIconClass() {
        let iconClass = '';
        if (this.type) {
          iconClass += `amp-status-icon--${this.type}`;
        }
        return iconClass;
      },
      getIconStyle() {
        if (this.color) {
          return {
            'background-color': this.color
          }
        } else {
          return {}
        }
      }
    },
    methods: {}
  }
</script>

<style lang="scss" scoped>
  .amp-status {
    display: inline-flex;
    align-items: center;
    & + .amp-status {
      margin-left: 24px;
    }
    .amp-status-icon {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      &.amp-status-icon--success {
        background-color: #21BF9B;
      }
      &.amp-status-icon--warning {
        background-color: #FD9731;
      }
      &.amp-status-icon--error {
        background-color: #E24A4A;
      }
      &.amp-status-icon--info {
        background-color: #A0A4AF;
      }
    }
    .amp-status-text {
      margin-left: 5px;
    }
  }
</style>
