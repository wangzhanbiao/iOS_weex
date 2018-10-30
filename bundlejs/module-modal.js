// { "framework": "Vue"} 

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 69);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getEntryUrl0 = getEntryUrl0;
exports.getEntryUrl = getEntryUrl;
function getEntryUrl0(name) {
    // 判断当前的环境，适配web端
    if (weex.config.env.platform === "Web") {
        return './' + name + '.html';
    } else {
        var arr = weex.config.bundleUrl.split('/');
        arr.pop(); //数组末尾移除最后一项
        arr.push(name + '.js'); //可以接收任意数量的参数,把它们逐个添加到数组末尾
        return arr.join('/'); //将数组的元素组起一个字符串，以separator为分隔符
    }
}

function getEntryUrl(name, params) {
    if (!params) {
        params = '';
    } else {
        if (params.indexOf("?") == -1) {
            params = '?' + params;
        }
    }
    // 判断当前的环境，适配web端
    if (weex.config.env.platform === "Web") {
        return './' + name + '.html' + params;
    } else {
        var arr = weex.config.bundleUrl.split('/');
        arr.pop(); //数组末尾移除最后一项
        arr.push(name + '.js' + params); //可以接收任意数量的参数,把它们逐个添加到数组末尾
        return arr.join('/'); //将数组的元素组起一个字符串，以separator为分隔符
    }
}

/***/ }),

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _moduleModal = __webpack_require__(70);

var _moduleModal2 = _interopRequireDefault(_moduleModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_moduleModal2.default.el = '#root';
new Vue(_moduleModal2.default);

/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(71)
)

/* script */
__vue_exports__ = __webpack_require__(72)

/* template */
var __vue_template__ = __webpack_require__(73)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/wangzhanbiao/Downloads/weex/WeexTest/WeexTestDemo/src/module-modal.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-8d900336"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),

/***/ 71:
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "alignItems": "center",
    "paddingTop": "120"
  },
  "title": {
    "marginTop": "40",
    "marginBottom": "40",
    "fontSize": "48"
  },
  "desc": {
    "marginTop": 30,
    "marginBottom": 30,
    "color": "#555555",
    "fontSize": "30"
  },
  "next": {
    "marginTop": 30,
    "marginBottom": 30,
    "paddingTop": "20",
    "paddingRight": "20",
    "paddingBottom": "20",
    "paddingLeft": "20",
    "backgroundColor": "#999999"
  },
  "buttons": {
    "flexDirection": "column",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "button": {
    "paddingTop": "20",
    "paddingRight": "20",
    "paddingBottom": "20",
    "paddingLeft": "20",
    "marginTop": 30,
    "color": "#111111",
    "backgroundColor": "#999999",
    "fontSize": "30"
  }
}

/***/ }),

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(0);

var navigator = weex.requireModule('navigator'); //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var modal = weex.requireModule('modal');
exports.default = {
  data: function data() {
    return {
      url: '',
      target: 'World',
      configObj: '',
      params: ''
    };
  },

  methods: {
    back: function back(event) {
      //modal.toast({ message: weex.config.bundleUrl })
      navigator.pop();
    },
    toast: function toast(event) {
      modal.toast({
        message: '邮件草稿已保存',
        duration: 0.5
      });
    },
    alert: function alert(event) {
      modal.alert({
        message: '提现申请成功',
        okTitle: '我知道了'
      }, function (value) {
        console.log('alert callback', value);
      });
    },
    confirm: function confirm(event) {
      modal.confirm({
        message: '确认要删除该文件吗?',
        okTitle: '删除',
        cancelTitle: '取消'
      }, function (value) {
        console.log('confirm callback', value);
        if ('删除' == value) {
          modal.toast({
            message: '已删除',
            duration: 0.5
          });
        }
      });
    },
    prompt: function prompt(event) {
      modal.prompt({
        message: '请输入手机领取优惠券',
        okTitle: '确定',
        cancelTitle: '取消'
      }, function (ret) {
        console.log('confirm callback', ret);
        if ('确定' == ret.result) {
          if (ret.data != null && ret.data != '') {
            modal.toast({
              message: '已领取',
              duration: 0.5
            });
          } else {
            modal.toast({
              message: '输入不正确',
              duration: 0.5
            });
          }
        }
      });
    }
  },
  mounted: function mounted() {
    this.url = weex.config.bundleUrl;
    this.configObj = JSON.stringify(weex.config);
    //storage.getItem('params', event => {
    //this.params = event.data
    //})
  }
};

/***/ }),

/***/ 73:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('text', {
    staticClass: ["title"]
  }, [_vm._v("module-modal page")]), _c('text', {
    staticClass: ["desc"]
  }, [_vm._v("url=" + _vm._s(_vm.url))]), _c('text', {
    staticClass: ["next"],
    on: {
      "click": _vm.back
    }
  }, [_vm._v("返回上一页")]), _c('text', {
    staticClass: ["desc"]
  }, [_vm._v("modal模块示例")]), _c('div', {
    staticClass: ["buttons"]
  }, [_c('text', {
    staticClass: ["button"],
    on: {
      "click": _vm.toast
    }
  }, [_vm._v("toast提示")]), _c('text', {
    staticClass: ["button"],
    on: {
      "click": _vm.alert
    }
  }, [_vm._v("alert提示框")]), _c('text', {
    staticClass: ["button"],
    on: {
      "click": _vm.confirm
    }
  }, [_vm._v("confirm确认框")]), _c('text', {
    staticClass: ["button"],
    on: {
      "click": _vm.prompt
    }
  }, [_vm._v("prompt输入框")])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })

/******/ });