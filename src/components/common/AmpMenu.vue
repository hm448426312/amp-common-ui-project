<template>
  <div
    class="amp-menu-outer"
    :class="{'is-collapse': isCollapse}"
  >
    <div
      v-if="menuTitle"
      class="amp-menu-title">
      <h2>{{menuTitle}}</h2>
      <i
        v-if="collapseAble"
        @click="isCollapse = !isCollapse"
        class="iconfont"
        :class="isCollapse ? 'icon-zhankai' : 'icon-shouqi'"
      ></i>
    </div>
    <div class="amp-menu-content">
      <el-menu
        :collapse="isCollapse"
        :default-active="defaultActive"
        @open="handleOpen"
        @close="handleClose"
      >
        <template v-for="(menu, index) in menuData">
          <template v-if="menu[children] && menu[children].length > 0">
            <el-submenu :key="index" :index="menu[id] + ''">
              <template slot="title">
                <i v-if="menu.icon" class="iconfont" :class="menu.icon"></i>
                <span>{{menu.title}}</span>
              </template>
              <template v-for="(subMenu, subIndex) in menu[children]">
                <el-menu-item
                  :key="index + '' +subIndex"
                  :index="subMenu[id] + ''"
                  @click="handleMenuItemClick(subMenu, menu)"
                >
                  <i v-if="subMenu.icon" class="iconfont" :class="subMenu.icon"></i>
                  <span slot="title">{{subMenu.title}}</span>
                </el-menu-item>
              </template>
            </el-submenu>
          </template>
          <template v-else>
            <el-menu-item
              :key="index"
              :index="menu[id] + ''"
              @click="handleMenuItemClick(menu)"
            >
              <i v-if="menu.icon" class="iconfont" :class="menu.icon"></i>
              <span slot="title">{{menu.title}}</span>
            </el-menu-item>
          </template>
        </template>
      </el-menu>
    </div>
  </div>
</template>

<script>
  export default {
    name: "AmpMenu",
    props: {
      // 默认选中的节点，参考el-menu
      defaultActive: {
        type: String,
        default: ''
      },
      // menu 数据源
      menuData: {
        type: Array,
        default: () => []
      },
      // 标题
      menuTitle: {
        type: String,
        default: ""
      },
      // 是否可折叠
      collapseAble: {
        type: Boolean,
        default: true
      },
      // 显示文本的key
      label: {
        type: String,
        default: 'title'
      },
      // menu唯一值
      id: {
        type: String,
        default: 'id'
      },
      // 子节点key
      children: {
        type: String,
        default: 'children'
      }
    },
    data() {
      return {
        isCollapse: false, // 是否折叠菜单
      }
    },
    methods: {
      // 菜单item点击事件
      handleMenuItemClick(menu, parent) {
        this.$emit('menu-item-click', menu, parent);
      },
      // 实现原组件的事件抛出
      handleOpen(key, keyPath) {
        this.$emit("open", key, keyPath);
      },
      // 实现原组件的事件抛出
      handleClose(key, keyPath) {
        this.$emit("close", key, keyPath);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .amp-menu-outer {
    width: 240px;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    transition: 0.5s ease;
    overflow: hidden;
    height: 100%;
    &.is-collapse {
      width: 64px;
      .amp-menu-title {
        width: 54px;
        margin: 0 5px 16px 5px;
        h2 {
          max-width: 0;
        }
        .iconfont {
          margin-right: 16px;
        }
      }
    }
    .amp-menu-title {
      display: flex;
      width: 200px;
      margin: 0 20px 16px 20px;
      padding: 24px 0 8px 0;
      border-bottom: 1px solid #EAEDF1;
      overflow: hidden;
      transition: .5s ease;
      align-items: center;
      box-sizing: border-box;
      flex: none;
      h2 {
        max-width: 200px;
        overflow: hidden;
        text-overflow: ellipsis;
        opacity: 1;
        font-size: 16px;
        font-weight: bold;
        white-space: nowrap;
        transition: .5s ease;
        padding-left: 5px;
      }
      .iconfont {
        margin-left: auto;
        margin-right: 0;
        cursor: pointer;
        color: #646B80;
        transition: .5s ease;
        font-size: 18px;
        &:hover {
          color: #1179F0;
        }
      }
    }
    .amp-menu-content {
      overflow-y: auto;
      overflow-x: hidden;
    }
  }
</style>
