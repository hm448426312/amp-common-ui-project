<template>
  <amp-layout-content>
    <template slot="content-header">
      <div class="right-header-title">
        <b>表格混入页面示例</b>
      </div>
    </template>
    <template slot="content-filter">
      <div class="right-header-filter">
        <!--输入框-->
        <div class="filter-item">
          <el-input v-model="filterParams.name"></el-input>
        </div>
        <!--多选下拉框，下拉多选显示个数，一定要增加class=amp-select-nowrap，避免换行-->
        <div class="filter-item">
          <amp-select
            class="amp-select-nowrap"
            v-model="filterParams.hobbies"
            multiple
            collapse-tags
          >
            <amp-option label="篮球" value="2"></amp-option>
            <amp-option label="羽毛球" value="3"></amp-option>
            <amp-option label="乒乓球" value="4"></amp-option>
            <amp-option label="排球" value="5"></amp-option>
            <amp-option label="足球" value="6"></amp-option>
          </amp-select>
        </div>
        <!--日期范围，需要自己对change事件处理，赋值对应的start和end时间-->
        <div class="filter-item">
          <amp-date-picker
            type="daterange"
            v-model="filterParams.time"
            clearable
            placeholder="请选择年月日"
            @change="handleDateChange"
          ></amp-date-picker>
        </div>
        <div class="filter-button">
          <!--查询、重置对应的方法在mixins中定义，如果不满足可在本组件自行重写覆盖-->
          <amp-button type="primary" @click="searchTableListData">查询</amp-button>
          <amp-button @click="resetParams">重置</amp-button>
        </div>
      </div>
    </template>
    <amp-table
      :loading="table.loading"
      :data="table.data"
      :max-height="getTableMaxHeight"
      style="width: 100%"
      @sort-change="sortChange"
      border
    >
      <!--复选框库看度必须40px-->
      <el-table-column
        type="selection"
        width="40"
        fixed="left"
      >
      </el-table-column>
      <template v-for="(header, index) of table.header">
        <!--class-name、UI规范要求第一列文字颜色-->
        <el-table-column
          :class-name="index === 0 ? 'is-first-td' : ''"
          :prop="header.field"
          :key="index"
          :label="header.label"
          :width="header.width || ''"
          :align="header.align || 'left'"
          :sortable="header.sortable || false"
          :fixed="header.fixed || false"
          show-overflow-tooltip
        >
          <template slot-scope="scope">
            <template v-if="header.field === 'action'">
              <amp-button
                type="text"
                icon="el-icon-edit"
                tooltip="编辑"
                @click="editRowEvent"
              ></amp-button>
              <amp-button
                type="text"
                icon="icon-shanchu"
                tooltip="删除"
                @click="deleteRowEvent"
              ></amp-button>
            </template>
            <!-- 如果有列需要特殊处理，此处增加v-else-if即可 -->
            <template v-else>
              <span class="white-space-pre">{{scope.row[header.field] || ''}}</span>
            </template>
          </template>
        </el-table-column>
      </template>
      <!--批量编辑区域-->
      <template slot="multipleHeader">
        <amp-button type="text" tooltip="批量编辑" icon="icon-bianji">批量编辑(iconfont)</amp-button>
        <amp-button type="text" icon="el-icon-delete">批量删除(el-icon)</amp-button>
      </template>
    </amp-table>
    <amp-pagination
      class="mt16"
      :current-page="pageParams.pageNo"
      :page-sizes="pageParams.pageSizes"
      :page-size="pageParams.pageSize"
      :total="pageParams.total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      background
    ></amp-pagination>
  </amp-layout-content>
</template>

<script>
  import {AmpTablePage} from "../../../lib/mixins/mixins";

  export default {
    name: "DemoTableMixins",
    mixins: [AmpTablePage],
    data() {
      return {
        filterParams: {
          name: "",
          hobbies: ['2'], // 有默认值，需要在filterParamsOpt中定义
          time: "", // 示例日期范围，需要自行监听改变事件，赋值对应的开始、结束时间
          timeStart: "",
          timeEnd: "",
        },
        filterParamsOpt: {
          hobbies: {
            // 条件类型,array|string|object
            // array类型的默认值为[]
            // string类型的默认值为''
            // object类型的默认值为{}
            type: "array",
            default: ['2']
          },
          time: {
            type: "string",
            default: "",
            disabled: true, // disabled为true则不放入filterParamsAjax真实请求参数中
          }
        },
        // 其他业务参数，需要传参，但是重置不修改的
        // 如果是filterParams不能满足的特殊场景，则将参数放在这里
        otherParams: {
          test: "no"
        },
        table: {
          header: [
            {
              field: "name",
              label: "姓名",
              width: '300px',
              sortable: 'custom'
            },
            {
              field: "sex",
              label: "性别",
            },
            {
              field: "age",
              label: "年龄",
            },
            {
              field: "hobbies",
              label: "爱好",
            },
            {
              field: "time",
              label: "上学时间",
            },
            {
              field: "mark",
              label: "备注",
            },
            {
              field: "custom",
              label: "自定义列头",
            },
            {
              field: "action",
              label: "操作",
            }
          ],
          data: [],
          loading: false,
        }
      }
    },
    computed: {
      // 计算表格的最大高度，固定的可以不改，其余的需要自己计算
      getTableMaxHeight() {
        const winHeight = window.innerHeight;
        const topHeight = 60; // 顶部导航高度 -固定
        const layoutHeight = 60; // 布局间距高度  -固定
        const tableOtherHeight = 70; // table表头和分页栏高度 -固定
        const headerHeight = 60; // 页面标题高度  -业务自身判断
        const filterHeight = 56; // 筛选条件高度  -业务自身判断
        let resHeight = winHeight - topHeight - headerHeight - layoutHeight - filterHeight - tableOtherHeight;
        if (resHeight <= 50) {
          resHeight = 50;
        }
        return resHeight;
      }
    },
    mounted() {
      // 此处一定要这样，否则会导致页面返回的时候，参数无法赋值，
      // 原因为：beforeRouteEnter的next内的方法晚于mounted执行
      this.$nextTick(() => {
        if (this.filterParams.timeStart && this.filterParams.timeEnd) {
          this.filterParams.time = [this.filterParams.timeStart, this.filterParams.timeEnd];
        }
        this.filterParamsAjax = this.groupParams();
        this.getTableListData();
      })
    },
    methods: {
      // 示例 筛选-日期需要自己行处理
      handleDateChange(val) {
        if (val && Array.isArray(val) && val.length >= 2) {
          this.filterParams.timeStart = val[0];
          this.filterParams.timeEnd = val[1];
        } else {
          this.filterParams.timeStart = '';
          this.filterParams.timeEnd = '';
        }
      },
      // 示例 获取数据
      getTableListData() {
        console.log(this.filterParamsAjax);
        this.table.loading = true;
        setTimeout(() => {
          let tempArr = [];
          for (let i = 0; i < 100; i++) {
            tempArr.push({
              id: i + 1,
              name: "张三" + i,
              sex: "男",
              age: "28",
              mark: "是个男的",
              custom: "自定义列内容",
            })
          }
          this.table.data = tempArr;
          this.table.loading = false;
          this.pageParams.total = tempArr.length;
        }, 1000)
      },
      // 示例 操作-编辑
      editRowEvent(row) {
        console.log("edit row:", row);
      },
      // 示例 操作-删除 【如果当前页面就只有删除的条数，需要将页码置为第一页】
      deleteRowEvent(row) {
        // todo 删除提示、业务代码等
        // http删除成功后
        if (this.table.data.length === 1) {
          this.pageParams.pageNo = 1;
        }
        this.getTableListData()
      },
    }
  }
</script>

<style lang="scss" scoped>

</style>
