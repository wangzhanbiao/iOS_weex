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
/******/ 	return __webpack_require__(__webpack_require__.s = 74);
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

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _modulePicker = __webpack_require__(75);

var _modulePicker2 = _interopRequireDefault(_modulePicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_modulePicker2.default.el = '#root';
new Vue(_modulePicker2.default);

/***/ }),

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(76)
)

/* script */
__vue_exports__ = __webpack_require__(77)

/* template */
var __vue_template__ = __webpack_require__(78)
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
__vue_options__.__file = "/Users/wangzhanbiao/Downloads/weex/WeexTest/WeexTestDemo/src/module-picker.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-71d24886"
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

/***/ 76:
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

/***/ 77:
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
var picker = weex.requireModule('picker');
var arrays = ['金秋核桃', '猕猴桃', '橘子', '冰糖梨', '巨峰葡萄', '三红蜜柚', '水蜜桃', '泰国椰青', '奇异果', '香蕉'];
exports.default = {
  data: function data() {
    return {
      url: '',
      target: 'World',
      configObj: '',
      params: '',
      value: ''
    };
  },

  methods: {
    back: function back(event) {
      //modal.toast({ message: weex.config.bundleUrl })
      navigator.pop();
    },
    pick: function pick() {
      var _this = this;

      if (weex.config.env.platform == 'Web') {
        modal.toast({ message: 'web不支持', duration: 0.5 });
        return;
      }
      picker.pick({
        index: 0,
        items: arrays,
        textColor: '#333',
        selectionColor: '#ff4444',
        confirmTitle: '确定',
        cancelTitle: '取消',
        confirmTitleColor: '#666',
        cancelTitleColor: '#999',
        title: '选择一个水果类型',
        titleColor: '#000',
        titleBackgroundColor: '#fff'
      }, function (event) {
        if (event.result === 'success') {
          _this.value = arrays[event.data];
        }
      });
    },
    pickDate: function pickDate() {
      var _this2 = this;

      if (weex.config.env.platform == 'Web') {
        modal.toast({ message: 'web不支持', duration: 0.5 });
        return;
      }
      picker.pickDate({
        value: this.value
      }, function (event) {
        if (event.result === 'success') {
          _this2.value = event.data;
        }
      });
    },
    pickTime: function pickTime() {
      var _this3 = this;

      if (weex.config.env.platform == 'Web') {
        modal.toast({ message: 'web不支持', duration: 0.5 });
        return;
      }
      picker.pickTime({
        value: this.value
      }, function (event) {
        if (event.result === 'success') {
          _this3.value = event.data;
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

/***/ 78:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('text', {
    staticClass: ["title"]
  }, [_vm._v("module-picker page")]), _c('text', {
    staticClass: ["desc"]
  }, [_vm._v("url=" + _vm._s(_vm.url))]), _c('text', {
    staticClass: ["next"],
    on: {
      "click": _vm.back
    }
  }, [_vm._v("返回上一页")]), _c('text', {
    staticClass: ["desc"]
  }, [_vm._v("picker模块示例")]), _c('div', {
    staticClass: ["buttons"]
  }, [_c('text', {
    staticClass: ["button"],
    on: {
      "click": _vm.pick
    }
  }, [_vm._v("pick")]), _c('text', {
    staticClass: ["button"],
    on: {
      "click": _vm.pickDate
    }
  }, [_vm._v("pickDate")]), _c('text', {
    staticClass: ["button"],
    on: {
      "click": _vm.pickTime
    }
  }, [_vm._v("pickTime")])]), _c('text', {
    staticClass: ["desc"]
  }, [_vm._v(_vm._s(_vm.value))])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })

/******/ });