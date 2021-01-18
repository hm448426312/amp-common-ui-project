<template>
  <amp-tooltip
    @mouseover.native="mouseOverEvent($event)"
    v-bind="$attrs"
    :placement="$attrs.placement || 'top-start'"
    :disabled="tooltipDisable"
  >
    <span style="overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">
      <slot></slot>
    </span>
  </amp-tooltip>
</template>

<script>
  import AmpTooltip from "./AmpTooltip";
  export default {
    name: "AmpOverTooltip",
    components: {AmpTooltip},
    data() {
      return {
        tooltipDisable: true,
      };
    },
    mounted() {
      this.initTooltipDisable();
    },
    methods: {
      mouseOverEvent(event) {
        let ev = event || window.event;
        let target = ev.target;
        if (target.scrollWidth > target.offsetWidth && this.$attrs.content) {
          this.tooltipDisable = false;
        } else {
          this.tooltipDisable = true;
        }
      },
      initTooltipDisable() {
        this.tooltipContent = this.disabled || true;
      },
    },
  };
</script>

<style lang="scss" scoped>
</style>
