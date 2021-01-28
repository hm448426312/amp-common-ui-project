// 所有页面引入，内含全局方法，通过this.methodsName调用
import {PAGE_NORMAL_CONFIG} from "../constant/global";

const AmpTablePage = {
  data() {
    return {
      // 分页参数
      pageParams: JSON.parse(JSON.stringify(PAGE_NORMAL_CONFIG)),
      // 实际搜索条件
      filterParamsAjax: null,
      // 排序参数
      sortParams: {
        sort: "",
        order: ""
      },
      // 绑定数据的搜索条件对象
      filterParams: null,
      // 对绑定数据的搜索条件对象的配置，默认按string类型处理
      filterParamsOpt: null,
      // {
      // userName: {
      //   type: "string",
      //   default: ""
      // },
      // age: {
      //   type: "number",
      //   default: 10
      // },
      // score: {
      //   type: "array",
      //   default: []
      // },
      // studyTime: {
      //   type: "array",
      //   default: [],
      //   disabled: true, // 不可用，则不会放入到filterBak中
      // }
      // },
      // 其他业务参数，需要传参，但是重置不修改的
      otherParams: null,
    }
  },
  // 路由进入的时候，如果参数中有标识[back=1]，则将缓存中的筛选条件赋值到变量中
  beforeRouteEnter(to, from, next) {
    next(vm => {
      let _this = vm;
      if (to.query.back == "1" && localStorage.getItem(to.path)) {
        _this.filterParamsAjax = JSON.parse(localStorage.getItem(to.path));
        Object.keys(_this.filterParamsAjax).forEach((key) => {
          // pageParams.total不放入请求体中
          if (key === 'total') {
            return false;
          }
          if (_this.filterParams && _this.filterParams[key] !== undefined) {
            _this.filterParams[key] = _this.filterParamsAjax[key];
          } else if (_this.sortParams && _this.sortParams[key] !== undefined) {
            _this.sortParams[key] = _this.filterParamsAjax[key];
          } else if (_this.pageParams && _this.pageParams[key] !== undefined) {
            _this.pageParams[key] = _this.filterParamsAjax[key];
          } else {
            if (!_this.otherParams) {
              _this.otherParams = {};
            }
            _this.otherParams[key] = _this.filterParamsAjax[key];
          }
        });
        localStorage.removeItem(to.path);
      }
      console.log("in", _this.filterParamsAjax);
    })
  },
  // 路由离开的时候，将筛选条件放入缓存中
  beforeRouteLeave(to, from, next) {
    localStorage.setItem(from.path, JSON.stringify(this.filterParamsAjax));
    console.log("leave", this.filterParamsAjax);
    next();
  },
  methods: {
    // 分页size变化
    handleSizeChange(size, pageObj) {
      (this[pageObj] || this.pageParams).pageSize = size;
      this.assignFilterParamsAjax({
        pageSize: size,
      });
      this.getTableListData();
    },
    // 当前页变化
    handleCurrentChange(current, pageObj) {
      (this[pageObj] || this.pageParams).pageNo = current;
      this.assignFilterParamsAjax({
        pageNo: current,
      });
      this.getTableListData();
    },
    // 排序改变事件
    sortChange({column, prop, order}) {
      if (!order) {
        this.sortParams.sort = ''; // 字段
        this.sortParams.order = ''; // 排序方式
      } else {
        this.sortParams.sort = prop;
        this.sortParams.order = order;
      }
      this.assignFilterParamsAjax(this.sortParams);
      this.getTableListData();
    },
    // 拼装请求参数：排序、分页的情况
    assignFilterParamsAjax(obj = {}) {
      if (!this.filterParamsAjax) {
        this.filterParamsAjax = {};
      }
      Object.keys(obj).forEach(key => {
        this.filterParamsAjax[key] = obj[key];
      })
    },
    // 初始化列表参数
    initTableParams(dataArr = ["filterParams", "pageParams", "sortParams"]) {
      dataArr.forEach(key => {
        if (key === "filterParams" && this.filterParamsOpt) {
          Object.keys(this[key]).forEach(subKey => {
            if (this.filterParamsOpt[subKey]) {
              if (this.filterParamsOpt[subKey].default !== undefined) {
                this[key][subKey] = this.filterParamsOpt[subKey].default;
              } else {
                switch (this.filterParamsOpt[subKey].type.toLowerCase()) {
                  case "array":
                    this[key][subKey] = [];
                    break;
                  case "object":
                    this[key][subKey] = {};
                    break;
                  default:
                    this[key][subKey] = '';
                }
              }
            } else {
              this[key][subKey] = '';
            }
          })
        } else {
          if (this[key].pageSizes) { // 如果是分页对象，则将页码置为第一页
            this[key].pageNo = 1;
            this[key].total = 0;
          } else {
            Object.keys(this[key]).forEach(subKey => {
              this[key][subKey] = "";
            });
          }
        }
      })
    },
    // 组合获取数据的参数对象
    groupParams(dataArr = ["filterParams", "pageParams", "sortParams", "otherParams"]) {
      let params = {};
      dataArr.forEach(key => {
        if (key === "filterParams" && this.filterParamsOpt) {
          Object.keys(this[key]).forEach(subKey => {
            // 如果参数有配置，且disabled为true，则不放入ajax的参数中
            if (!this.filterParamsOpt || !(this.filterParamsOpt[subKey] && this.filterParamsOpt[subKey].disabled)) {
              params[subKey] = this[key][subKey];
            }
          })
        } else {
          Object.assign(params, this[key]);
        }
      });
      return params;
    },
    // 重置
    resetParams() {
      this.initTableParams();
      this.filterParamsAjax = this.groupParams();
      this.getTableListData();
    },
    // 点击查询，需要将页码置为第一页
    searchTableListData() {
      this.pageParams.pageNo = 1;
      this.filterParamsAjax = this.groupParams();
      this.getTableListData();
    },
    // todo 获取数据，业务自己写方法体，请求参数使用this.filterParamsAjax
    getTableListData() {
      console.log(this.filterParamsAjax);
    },
  }
};
export {
  AmpTablePage
}
