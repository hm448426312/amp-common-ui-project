import Vue from "vue";
import { extend, ValidationProvider, localize } from "vee-validate";
import { required } from "vee-validate/dist/rules";
import * as rules from "vee-validate/dist/rules";
import en from "vee-validate/dist/locale/en.json";

Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule]);
});
localize("en", en);

// 输入框不能为空
extend("required", {
  ...required,
  message: "请输入{_field_}"
});
//下拉框不为空
extend("selected", {
  ...required,
  message: "请选择{_field_}"
});
//复选框不为空
extend("checked", {
  ...required,
  message: "请勾选{_field_}"
});

Vue.component("ValidationProvider", ValidationProvider);
