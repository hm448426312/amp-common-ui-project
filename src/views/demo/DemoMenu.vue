<template>
  <amp-layout-content
    :clear-content-style="true"
  >
    <amp-button @click="menuTitle = menuTitle ? '' : '标题'">{{menuTitle ? "隐藏" : "显示"}}标题</amp-button>
    <amp-button @click="collapseAble = !collapseAble">{{collapseAble ? "可折叠" : "不可折叠"}}</amp-button>
    <div class="demo1">
      <amp-menu
        :menu-data="menuData"
        :collapse-able="collapseAble"
        :menu-title="menuTitle"
        @menu-item-click="itemClickEvent"
      ></amp-menu>
    </div>
  </amp-layout-content>
</template>

<script>
  export default {
    name: "DemoMenu",
    data() {
      return {
        collapseAble: true,
        menuTitle: "",
        menuData: [
          {
            title: "总览",
            icon: 'el-icon-plus',
            id: '1',
          },
          {
            title: "服务配置",
            icon: 'el-icon-delete',
            id: '2',
            children: [
              {
                title: "服务配置-1",
                icon: 'el-icon-delete',
                id: '2-1',
              },
              {
                title: "服务配置-2",
                id: '2-2',
              }
            ]
          },
          {
            title: "微服务配置",
            icon: 'el-icon-edit',
            id: '3',
          }
        ]
      }
    },
    methods: {
      itemClickEvent(menu, parent) {
        console.log(menu, parent)
      },
    }
  }
</script>

<style lang="scss" scoped>
  .demo1 {
    height: 100%;
    width: 250px;
  }
</style>
