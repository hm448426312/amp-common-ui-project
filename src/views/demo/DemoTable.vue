<template>
  <amp-layout-content>
    <div>
      <el-form label-width="150px" label-position="left">
        <el-form-item label="说明">
          <p>1.自研组件amp-form-table</p>
          <p>2.参数source-label:表格显示的label名称和对应value显示的field</p>
          <p>2.1.source-label中属性有:field(对应value的key),label(label显示文本),wholeRow(是否占整行，默认false)</p>
          <p>3.参数source-data:表格的value显示的数据，与source-label的field对应</p>
          <p>4.参数column:表格分为多少列，默认为2</p>
        </el-form-item>
        <el-form-item label="基础表格">
          <amp-form-table
            :source-label="formTable.formLabel"
            :source-data="formTable.formData"
            :column="formTable.opts.column"
          ></amp-form-table>
        </el-form-item>
        <el-form-item label="说明">
          <p>1.原el-table封装为amp-table</p>
          <p>2.调整了无边框和有边框的表格样式</p>
          <p>3.无边框可拖动改变列宽，需要在amp-table增加resizable配置</p>
          <p>4.增加有复选框时，选中后显示的批量操作栏插槽multipleHeader</p>
          <p>5.重新定义了表格无数据的样式，如果需要自定义，则使用插槽myEmpty</p>
          <p>6.表格的loading使用:loading，不要使用v-loading【<b>强调：所有二次封装组件，都不能识别v-xxx的绑定方式</b>】</p>
        </el-form-item>
        <el-form-item label="表格-无边框-列宽可拖动调整">
          <amp-table
            resizable
            :loading="table.loading"
            :data="table.data"
            style="width: 100%"
          >
            <template v-for="(header, index) of table.header">
              <el-table-column
                :prop="header.field"
                :key="index"
                :label="header.label"
                :width="header.width || ''"
                :align="header.align || 'left'"
                :sortable="header.sortable"
                :fixed="header.fixed || false"
                show-overflow-tooltip
              >
                <template slot-scope="scope">
                  <template v-if="header.field === 'action'">
                    <!--<amp-button
                      type="text"
                      icon="el-icon-edit"
                      tooltip="编辑"
                      @click="editRowEvent"
                    ></amp-button>
                    <amp-button
                      type="text"
                      icon="el-icon-delete"
                      tooltip="删除"
                      @click="deleteRowEvent"
                    ></amp-button>-->
                  </template>
                  <!-- 如果有列需要特殊处理，此处增加v-else-if即可 -->
                  <template v-else>
                    <span class="white-space-pre">{{scope.row[header.field] || ''}}</span>
                  </template>
                </template>
              </el-table-column>
            </template>
            <template slot="multipleHeader">
              <amp-button type="text" icon="el-icon-edit">批量编辑</amp-button>
              <amp-button type="text" icon="el-icon-delete">批量删除</amp-button>
            </template>
          </amp-table>
        </el-form-item>
        <el-form-item label="表格-无边框-不可拖拽调整列宽-固定列头/尾">
          <amp-table
            :loading="table.loading"
            :data="table.data"
            style="width: 100%"
          >
            <el-table-column
              type="selection"
              width="40"
              fixed="left"
            >
            </el-table-column>
            <template v-for="(header, index) of table.header1">
              <el-table-column
                :prop="header.field"
                :key="index"
                :label="header.label"
                :width="header.width || ''"
                :align="header.align || 'left'"
                :sortable="header.sortable"
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
                      icon="el-icon-delete"
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
            <template slot="multipleHeader">
              <amp-button type="text" icon="el-icon-edit">批量编辑</amp-button>
              <amp-button type="text" icon="el-icon-delete">批量删除</amp-button>
            </template>
          </amp-table>
        </el-form-item>
        <el-form-item label="表格树">
          <amp-table
            ref="treeTableRef"
            :loading="table.loading"
            :data="table.data"
            :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
            lazy
            border
            :load="loadChildren"
            row-key="id"
            style="width: 100%"
            @select="handleSelectionChange"
            @select-all="handleSelectionAllEvent"
          >
            <el-table-column
              type="selection"
              width="40"
              fixed="left"
            >
            </el-table-column>
            <template v-for="(header, index) of table.header1">
              <el-table-column
                :prop="header.field"
                :key="index"
                :label="header.label"
                :width="header.width || ''"
                :align="header.align || 'left'"
                :sortable="header.sortable"
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
                      icon="el-icon-delete"
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
            <template slot="multipleHeader">
              <amp-button type="text" icon="el-icon-edit">批量编辑</amp-button>
              <amp-button type="text" icon="el-icon-delete">批量删除</amp-button>
            </template>
          </amp-table>
        </el-form-item>
        <el-form-item label="表格-边框-不可拖拽调整列宽">
          <amp-table
            :loading="table.loading"
            :data="table.data"
            border
            style="width: 100%"
          >
            <el-table-column
              type="selection"
              width="40"
            >
            </el-table-column>
            <template v-for="(header, index) of table.header">
              <el-table-column
                :prop="header.field"
                :key="index"
                :label="header.label"
                :width="header.width || ''"
                :align="header.align || 'left'"
                :sortable="header.sortable"
                :fixed="header.fixed || false"
                :resizable="false"
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
                      icon="el-icon-delete"
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
            <template slot="multipleHeader">
              <amp-button type="text" icon="el-icon-edit">批量编辑</amp-button>
              <amp-button type="text" icon="el-icon-delete">批量删除</amp-button>
            </template>
          </amp-table>
        </el-form-item>
        <el-form-item label="表格-边框-固定列头/尾">
          <amp-table
            :loading="table.loading"
            :data="table.data"
            border
            style="width: 100%"
          >
            <el-table-column
              type="selection"
              width="40"
              fixed="left"
            >
            </el-table-column>
            <template v-for="(header, index) of table.header1">
              <el-table-column
                :prop="header.field"
                :key="index"
                :label="header.label"
                :width="header.width || ''"
                :align="header.align || 'left'"
                :sortable="header.sortable"
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
                      icon="el-icon-delete"
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
            <template slot="multipleHeader">
              <amp-button type="text" icon="el-icon-edit">批量编辑</amp-button>
              <amp-button type="text" icon="el-icon-delete">批量删除</amp-button>
            </template>
          </amp-table>
        </el-form-item>
        <el-form-item label="表格-无数据">
          <amp-table
            :loading="false"
            :data="[]"
            border
            style="width: 100%"
          >
            <el-table-column
              type="selection"
              width="40"
              fixed="left"
            >
            </el-table-column>
            <template v-for="(header, index) of table.header1">
              <el-table-column
                :prop="header.field"
                :key="index"
                :label="header.label"
                :width="header.width || ''"
                :align="header.align || 'left'"
                :sortable="header.sortable"
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
                      icon="el-icon-delete"
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
            <template slot="multipleHeader">
              <amp-button type="text" icon="el-icon-edit">批量编辑</amp-button>
              <amp-button type="text" icon="el-icon-delete">批量删除</amp-button>
            </template>
          </amp-table>
        </el-form-item>
        <el-form-item label="表格-无数据-小icon">
          <amp-table
            :loading="false"
            :data="[]"
            border
            small
            style="width: 100%"
          >
            <el-table-column
              type="selection"
              width="40"
              fixed="left"
            >
            </el-table-column>
            <template v-for="(header, index) of table.header1">
              <el-table-column
                :prop="header.field"
                :key="index"
                :label="header.label"
                :width="header.width || ''"
                :align="header.align || 'left'"
                :sortable="header.sortable"
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
                      icon="el-icon-delete"
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
            <template slot="multipleHeader">
              <amp-button type="text" icon="el-icon-edit">批量编辑</amp-button>
              <amp-button type="text" icon="el-icon-delete">批量删除</amp-button>
            </template>
          </amp-table>
        </el-form-item>
      </el-form>
    </div>
  </amp-layout-content>
</template>

<script>

  export default {
    name: "DemoTable",
    data() {
      return {
        table: {
          header: [
            {
              field: "name",
              label: "姓名",
              width: '300px',
              sortable: true
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
            },
          ],
          header1: [
            {
              field: "name",
              label: "姓名",
              width: '300px'
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
              field: "custom",
              label: "自定义列头",
              width: "200px"
            },
            {
              field: "mark",
              label: "备注",
              width: "400px"
            },
            {
              field: "action",
              label: "操作",
              fixed: 'right'
            },
          ],
          data: [],
          loading: false
        },
        tableId: 5,
        checkedAll: false,
        tableSelection: [],
        formTable: {
          formLabel: [
            {
              field: 'key2',
              label: 'key2的价格',
              type: 'price', // price金额,
            },
            {
              field: 'key3',
              label: 'key3的label',
            },
            {
              field: 'key6',
              label: 'key6的label',
            },
            {
              field: 'key4',
              label: 'key4的label',
            },
            {
              field: 'key5',
              label: 'key5的label',
            },
            {
              field: 'key1',
              label: 'key1的labelkey1的labelkey1的la的labelkey1的lab的labelkey1的lab的labelkey1的labbelkey1的lab的labelkey1的lab的labelkey1的label',
              // type: 'price', // price金额,
              // wholeRow: false, // 是否需要占一行（参数废弃）,2020.12.29与UIzhouyiyang沟通尽量不设计该效果
              // labelAlign: "right", // left|right|center, label字段显示对齐方式，默认右对齐
              // valueAlign: "left", // left|right|center, value值显示对齐方式，默认左对齐
              // overflow: 'ellipsis', // wrap折行|ellipsis显示省略号, label和value超出后如何显示,默认省略号
            }
          ],
          formData: {
            key1: 'key1的值key1的值key1的值key1的值key1的值key1的值key1的值key1的值key1的值',
            key2: '20',
            key6: 'dsdsfsdfsfdsfsfsfsdddddddddddsdsfsdfsfdsfsfsfsdddddddddddsdsfsdfsfdsfsfsfsdddddddddddsdsfsdfsfdsfsfsfsdddddddddddsdsfsdfsfdsfsfsfsdddddddddd',
            key5: 'key5的值key5的值key5的值key5的值key5的值key5的值key5的值key5的值key5的值key5的值key5的值key5的值key5的值key5的值key5的值key5的值'
          },
          opts: {
            column: 2, // 默认就是2
          }
        },
      }
    },
    mounted() {
      this.getTableData();
    },
    methods: {
      handleSelectionAllEvent(selection) {
        this.checkedAll = !this.checkedAll;
        this.changeChildrenCheckedLoop(this.checkedAll);
      },
      changeChildrenCheckedLoop(checked, source) {
        let tempSource = source || this.table.data;
        let tableRef = this.$refs.treeTableRef.$refs.AmpTableRef;
        tempSource.forEach((item, index) => {
          if (checked && this.tableSelection.indexOf(item) === -1) {
            this.tableSelection.push(item);
          } else if (!checked && this.tableSelection.indexOf(item) !== -1) {
            this.tableSelection.splice(this.tableSelection.indexOf(item), 1);
          }
          tableRef.toggleRowSelection(item, checked);
          if (item.children && item.children.length > 0) {
            this.changeChildrenCheckedLoop(checked, item.children);
          }
        })
      },
      changeParentCheckedLoop(checked, child) {
        if (!child.parent) return;
        let tableRef = this.$refs.treeTableRef.$refs.AmpTableRef;
        let isAllChecked = checked;
        // 子节点是选中状态，则判断所有子节点是否选中
        if (checked) {
          // 当前节点的子节点是否全部选中
          for (let i = 0; i < child.parent.children.length; i++) {
            if (this.tableSelection.indexOf(child.parent.children[i]) === -1) {
              isAllChecked = false;
              break;
            }
          }
        }
        if (isAllChecked && this.tableSelection.indexOf(child.parent) === -1) {
          this.tableSelection.push(child.parent);
        } else if (!isAllChecked && this.tableSelection.indexOf(child.parent) !== -1) {
          this.tableSelection.splice(this.tableSelection.indexOf(child.parent), 1);
        }
        tableRef.toggleRowSelection(child.parent, isAllChecked);
        this.changeParentCheckedLoop(checked, child.parent);
      },
      handleSelectionChange(selection, row) {
        this.tableSelection = selection;
        let checked = false;
        if (selection.indexOf(row) !== -1) {
          checked = true;
        } else {
          this.checkedAll = false;
        }
        // 子节点状态变更
        if (row.children && row.children.length > 0) {
          this.changeChildrenCheckedLoop(checked, row.children);
        }
        // 父节点状态变更
        this.changeParentCheckedLoop(checked, row);
        // this.$refs.treeTableRef.AmpTableSelectionChangeEvent(this.tableSelection);
      },
      editRowEvent(row) {
        this.$AmpMessage(`编辑用户${row.name}`);
      },
      deleteRowEvent(row) {
        this.$AmpMessage({
          type: "warning",
          message: `删除用户${row.name}`
        });
      },
      loadChildren(tree, treeNode, resolve) {
        setTimeout(() => {
          let tempArr = [
            {
              id: this.tableId++,
              name: `张三${this.tableId}`,
              sex: "男",
              age: "28",
              mark: "是个男的",
              custom: "自定义列内容",
              parent: tree,
              hasChildren: true
            }, {
              id: this.tableId++,
              name: `张三${this.tableId}`,
              sex: "男",
              age: "28",
              mark: "是个男的",
              parent: tree,
              custom: "自定义列内容",
            }
          ];
          this.$set(tree, 'children', tempArr);
          resolve(tempArr);
          // 父节点是选中状态，则自动选中子节点
          if (this.tableSelection.indexOf(tree) !== -1) {
            this.$nextTick(() => {
              this.changeChildrenCheckedLoop(true, tree.children);
            })
          }
        }, 10)
      },
      getTableData() {
        this.table.loading = true;
        setTimeout(() => {
          this.table.data = [
            {
              id: 1,
              name: "张三",
              sex: "男",
              age: "28",
              mark: "是个男的",
              custom: "自定义列内容",
            },
            {
              id: 2,
              name: "李四",
              sex: "男",
              age: "28",
              mark: "是个男的",
              custom: "自定义列内容",
              hasChildren: true
            },
            {
              id: 3,
              name: "王麻子",
              sex: "男",
              age: "28",
              mark: "是个男的",
              custom: "自定义列内容",
            },
            {
              id: 4,
              name: "静静静静静静静静静静静静静静静静静静静静静静静静静静",
              sex: "女",
              age: "18",
              mark: "美女靓女美女靓女美女靓女美女靓女美女靓女美女靓女美女靓女美女靓女美女靓女美女靓女美女靓女美女靓女美女靓女美女靓女美女靓女美女靓女",
              custom: "自定义列内容美女靓女",
            }
          ];
          this.table.loading = false;
        }, 1000)
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
