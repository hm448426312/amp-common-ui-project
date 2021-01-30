<template>
  <ValidationObserver ref="veeObserverRef" v-slot="{ passes }">
    <amp-layout-content>
      <template slot="content-header">
        <div
          class="right-header-title"
        >
          表单示例页面
          <span class="desc">综合类型</span>
          <div style="margin-left: auto">
            <amp-button type="primary" @click="passes(formSubmitEvent)">提交</amp-button>
          </div>
        </div>
      </template>
      <div>
        <el-form ref="formRef" :model="form" :rules="formRules" label-width="150px" label-position="left">
          <!--<el-form-item label="说明">
            <p>1.由于接口不支持，所以无法真实上传成功</p>
          </el-form-item>-->
          <el-form-item label="" label-width="0" class="el-form-title">基本信息</el-form-item>
          <vee-input require innerWidth="200px" rules="required" v-model="form.name" label="姓名">
            <template slot="innerAfter">
              <el-popover
                popper-class="amp-multiple-confirm-popper"
                placement="bottom-start"
                v-model="namePopoverFlag"
                trigger="click">
                <amp-filter-confirm
                  type="input"
                  title="修改"
                  v-if="namePopoverFlag"
                  @cancel="namePopoverFlag = false"
                  @confirm="nameConfirmEvent"
                  :default-value="form.name"
                ></amp-filter-confirm>
                <amp-button
                  slot="reference"
                  type="text"
                >点我可修改姓名<i class="el-icon-arrow-down el-icon--right"></i></amp-button>
              </el-popover>
            </template>
          </vee-input>
          <vee-input rules="required|mobile" v-model="form.mobile" label="手机号"></vee-input>
          <!--<el-form-item prop="name" label="姓名">
            <el-input style="width: 200px;" v-model="form.name"></el-input>
          </el-form-item>-->
          <el-form-item prop="sex" label="性别">
            <amp-radio-group v-model="form.sex">
              <amp-radio label="1">男</amp-radio>
              <amp-radio label="2">女</amp-radio>
            </amp-radio-group>
          </el-form-item>
          <el-form-item prop="mobile" label="手机号">
            <el-input v-model="form.mobile"></el-input>
          </el-form-item>
          <el-form-item label="爱好">
            <amp-checkbox-group v-model="form.hobby">
              <amp-checkbox
                v-for="(item,index) in hobbies"
                :key="index"
                :label="item.value"
              >{{item.field}}
              </amp-checkbox>
            </amp-checkbox-group>
            <el-popover
              ref="ampFilterConfirmPopperCheckboxRef"
              popper-class="amp-multiple-confirm-popper"
              placement="bottom-start"
              v-model="hobbiesPopoverFlag"
              trigger="click">
              <amp-filter-confirm
                title="修改"
                :source="hobbies"
                :filterable="false"
                label="field"
                v-if="hobbiesPopoverFlag"
                @cancel="hobbiesPopoverFlag = false"
                @confirm="hobbiesConfirmEvent"
                :default-checked="form.hobby"
              ></amp-filter-confirm>
              <amp-button
                slot="reference"
                type="text"
              >点我可修改爱好(无全选\无搜索)<i class="el-icon-arrow-down el-icon--right"></i></amp-button>
            </el-popover>
            <el-popover
              popper-class="amp-multiple-confirm-popper"
              placement="bottom-start"
              v-model="hobbiesPopoverFlag1"
              trigger="click">
              <amp-multiple-confirm
                :source="hobbies"
                label="field"
                v-if="hobbiesPopoverFlag1"
                @cancel="hobbiesPopoverFlag1=false"
                @confirm="hobbiesConfirmEvent"
                :default-checked="form.hobby"
              ></amp-multiple-confirm>
              <amp-button
                slot="reference"
                type="text"
              >点我可修改爱好(全选)<i class="el-icon-arrow-down el-icon--right"></i></amp-button>
            </el-popover>
          </el-form-item>
          <el-form-item label="" label-width="0" class="el-form-title">详细信息</el-form-item>
          <el-form-item label="评价">
            <el-input type="textarea" :rows="3" v-model="form.desc"></el-input>
          </el-form-item>
          <el-form-item prop="property" label="办公类型">
            <amp-select clearable v-model="form.property" placeholder="请选择">
              <amp-option
                v-for="(item,index) in property"
                :key="index"
                :label="item.field"
                :value="item.value"
              ></amp-option>
            </amp-select>
            <amp-button
              v-popover:propertPopoverRef
              type="text"
            >点我可修改办公类型<i class="el-icon-arrow-down el-icon--right"></i></amp-button>
          </el-form-item>
          <el-form-item label="简历">
            <el-upload
              ref="uploadRef"
              action="https://jsonplaceholder.typicode.com/posts/"
              multiple
              show-file-list
              :file-list="form.fileList"
              :auto-upload="false"
            >
              <amp-button slot="trigger" icon="el-icon-plus">点击上传</amp-button>
              <amp-button type="primary" @click="uploadEvent">上传</amp-button>
              <div slot="tip" class="el-upload__tip">只能上传doc/docx文件，且不超过5MB</div>
            </el-upload>
          </el-form-item>
        </el-form>
      </div>

      <el-popover
        ref="propertPopoverRef"
        popper-class="amp-multiple-confirm-popper"
        placement="bottom-start"
        v-model="propertyPopoverFlag"
        trigger="click">
        <amp-filter-confirm
          type="select"
          title="选择"
          :source="property"
          label="field"
          v-if="propertyPopoverFlag"
          @cancel="propertyPopoverFlag = false"
          @confirm="propertyConfirmEvent"
          :default-selected="form.property"
        ></amp-filter-confirm>
      </el-popover>
    </amp-layout-content>
  </ValidationObserver>
</template>

<script>
  import { extend } from 'vee-validate'
  //手机号
  extend("mobile", value => {
    let re = /^1[3456789]\d{9}$/;
    if (re.test(value)) {
      return true;
    }
    return "手机号码格式不正确，请重新输入";
  });
  export default {
    name: "DemoForm",
    data() {
      return {
        namePopoverFlag: false,
        hobbiesPopoverFlag: false,
        hobbiesPopoverFlag1: false,
        propertyPopoverFlag: false,
        property: [
          {
            field: "苹果笔记本",
            value: "1",
          },
          {
            field: "华为笔记本",
            value: "2",
          },
          {
            field: "联想笔记本",
            value: "3",
          },
          {
            field: "戴尔笔记本",
            value: "4",
          },
          {
            field: "组装台式机",
            value: "5",
          }
        ],
        hobbies: [
          {
            field: "篮球",
            value: "1",
          },
          {
            field: "羽毛球",
            value: "2",
          },
          {
            field: "足球",
            value: "3",
          },
          {
            field: "乒乓球",
            value: "4",
          },
          {
            field: "排球",
            value: "5",
          }
        ],
        form: {
          name: "",
          mobile: "",
          sex: "",
          hobby: [],
          desc: "",
          fileList: [],
          property: "",
        },
        formRules: {
          name: [
            {required: true, message: '请输入姓名', trigger: 'change'},
          ],
          mobile: [
            {required: true, message: '请输入手机号', trigger: 'blur'},
          ],
          sex: [
            {required: true, message: '请选择性别', trigger: 'change'},
          ],
          property: [
            {required: true, message: '请选择办公类型', trigger: 'change'},
          ]
        },
      }
    },
    methods: {
      formSubmitEvent() {
        this.$refs.formRef.validate((valid) => {
          if (valid) {
            this.$AmpMessage({
              type: "success",
              message: "提交表单"
            })
          } else {
            this.$AmpMessage({
              type: "error",
              message: "校验失败"
            });
            return false;
          }
        })
      },
      nameConfirmEvent(val) {
        this.namePopoverFlag = false;
        this.form.name = val;
      },
      hobbiesConfirmEvent(val) {
        this.hobbiesPopoverFlag = false;
        this.hobbiesPopoverFlag1 = false;
        this.form.hobby = val;
      },
      propertyConfirmEvent(val) {
        this.propertyPopoverFlag = false;
        this.form.property = val;
      },
      uploadEvent() {
        this.$refs.uploadRef.submit();
      },
    }
  }
</script>

<style lang="scss" scoped>

</style>
