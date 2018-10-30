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
/******/ 	return __webpack_require__(__webpack_require__.s = 49);
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

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(50);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_index2.default.el = '#root';
new Vue(_index2.default);

/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(51)
)

/* script */
__vue_exports__ = __webpack_require__(52)

/* template */
var __vue_template__ = __webpack_require__(53)
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
__vue_options__.__file = "/Users/wangzhanbiao/Downloads/weex/WeexTest/WeexTestDemo/src/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-2964abc9"
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

/***/ 51:
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "alignItems": "center",
    "paddingTop": "120",
    "flexDirection": "column",
    "justifyContent": "center"
  },
  "scroller": {
    "alignItems": "center"
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
    "fontSize": "30",
    "width": "700",
    "height": "400"
  },
  "next": {
    "height": "80",
    "lineHeight": "80",
    "marginTop": 20,
    "marginBottom": 20,
    "paddingTop": "0",
    "paddingRight": "20",
    "paddingBottom": "0",
    "paddingLeft": "20",
    "backgroundColor": "#999999",
    "color": "#111111",
    "fontSize": "32"
  }
}

/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(0);

var storage = weex.requireModule('storage'); //
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

var navigator = weex.requireModule('navigator');
var modal = weex.requireModule('modal');
exports.default = {
  data: function data() {
    return {
      logoUrl: 'http://img1.vued.vanthink.cn/vued08aa73a9ab65dcbd360ec54659ada97c.png',
      target: 'World',
      configObj: '',
      params: { name: 'zhangsan' }
    };
  },

  methods: {
    jumpSecond: function jumpSecond(event) {
      modal.toast({ message: 'jumpSecond ' + (0, _utils.getEntryUrl)("second"), duration: 1.0 });
      navigator.push({
        url: (0, _utils.getEntryUrl)("second"),
        animated: "true"
      }, function (event) {
        modal.toast({ message: 'callback: ' + event });
      });
    },
    jumpSecondWithParam: function jumpSecondWithParam(event) {
      navigator.push({
        //url: getEntryUrl("second-with-param"),
        url: (0, _utils.getEntryUrl)("second-with-param", "name=zhangsan"),
        animated: "true"
      });
    },
    jumpConponentA: function jumpConponentA(event) {
      navigator.push({
        url: (0, _utils.getEntryUrl)("conponent-a"),
        animated: "true"
      });
    },
    jumpConponentWeb: function jumpConponentWeb(event) {
      navigator.push({
        url: (0, _utils.getEntryUrl)("conponent-web"),
        animated: "true"
      });
    },
    jumpConponentImage: function jumpConponentImage(event) {
      navigator.push({
        url: (0, _utils.getEntryUrl)("conponent-image"),
        animated: "true"
      });
    },
    jumpConponentInput: function jumpConponentInput(event) {
      navigator.push({
        url: (0, _utils.getEntryUrl)("conponent-input"),
        animated: "true"
      });
    },
    jumpConponentSlide: function jumpConponentSlide(event) {
      navigator.push({
        url: (0, _utils.getEntryUrl)("conponent-slide"),
        animated: "true"
      });
    },
    jumpConponentList: function jumpConponentList(event) {
      navigator.push({
        url: (0, _utils.getEntryUrl)("conponent-list"),
        animated: "true"
      });
    },
    jumpConponentScroller: function jumpConponentScroller(event) {
      navigator.push({
        url: (0, _utils.getEntryUrl)("conponent-scroller"),
        animated: "true"
      });
    },
    jumpConponentRefresh: function jumpConponentRefresh(event) {
      navigator.push({
        url: (0, _utils.getEntryUrl)("conponent-refresh"),
        animated: "true"
      });
    },
    jumpConponentLoading: function jumpConponentLoading(event) {
      navigator.push({
        url: (0, _utils.getEntryUrl)("conponent-loading"),
        animated: "true"
      });
    },
    jumpAnimation: function jumpAnimation(event) {
      navigator.push({
        url: (0, _utils.getEntryUrl)("module-animation"),
        animated: "true"
      });
    },
    jumpClipboard: function jumpClipboard(event) {
      navigator.push({
        url: (0, _utils.getEntryUrl)("module-clipboard"),
        animated: "true"
      });
    },
    jumpDom: function jumpDom(event) {
      navigator.push({
        url: (0, _utils.getEntryUrl)("module-dom"),
        animated: "true"
      });
    },
    jumpModal: function jumpModal(event) {
      navigator.push({
        url: (0, _utils.getEntryUrl)("module-modal"),
        animated: "true"
      });
    },
    jumpPicker: function jumpPicker(event) {
      navigator.push({
        url: (0, _utils.getEntryUrl)("module-picker"),
        animated: "true"
      });
    },
    jumpStream: function jumpStream(event) {
      navigator.push({
        url: (0, _utils.getEntryUrl)("module-stream"),
        animated: "true"
      });
    }
  },
  mounted: function mounted() {
    console.log('url:', weex.config.bundleUrl);
    this.configObj = JSON.stringify(weex.config);
    modal.toast({ message: weex.config.bundleUrl });
  }
};

/***/ }),

/***/ 53:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('scroller', {
    staticClass: ["scroller"]
  }, [_c('div', {
    staticClass: ["wrapper"]
  }, [_c('text', {
    staticClass: ["title"]
  }, [_vm._v("weex 组件 demo")]), _c('text', {
    staticClass: ["next"],
    on: {
      "click": _vm.jumpSecond
    }
  }, [_vm._v("跳转到第二页")]), _c('text', {
    staticClass: ["next"],
    on: {
      "click": _vm.jumpSecondWithParam
    }
  }, [_vm._v("跳转到第二页(附带参数)" + _vm._s(JSON.stringify(_vm.params)))]), _c('text', {
    staticClass: ["next"],
    on: {
      "click": _vm.jumpConponentA
    }
  }, [_vm._v("跳转到<a>标签示例")]), _c('text', {
    staticClass: ["next"],
    on: {
      "click": _vm.jumpConponentWeb
    }
  }, [_vm._v("跳转到<web>标签示例")]), _c('text', {
    staticClass: ["next"],
    on: {
      "click": _vm.jumpConponentImage
    }
  }, [_vm._v("跳转到<image>标签示例")]), _c('text', {
    staticClass: ["next"],
    on: {
      "click": _vm.jumpConponentInput
    }
  }, [_vm._v("跳转到<input>标签示例")]), _c('text', {
    staticClass: ["next"],
    on: {
      "click": _vm.jumpConponentSlide
    }
  }, [_vm._v("跳转到<slide>和<indicator>标签示例")]), _c('text', {
    staticClass: ["next"],
    on: {
      "click": _vm.jumpConponentList
    }
  }, [_vm._v("跳转到<list>和<cell>标签示例")]), _c('text', {
    staticClass: ["next"],
    on: {
      "click": _vm.jumpConponentScroller
    }
  }, [_vm._v("跳转到<scroller>标签示例")]), _c('text', {
    staticClass: ["next"],
    on: {
      "click": _vm.jumpConponentRefresh
    }
  }, [_vm._v("跳转到<refresh>标签示例")]), _c('text', {
    staticClass: ["next"],
    on: {
      "click": _vm.jumpConponentLoading
    }
  }, [_vm._v("跳转到<loading>标签示例")]), _c('text', {
    staticClass: ["title"]
  }, [_vm._v("weex 模块 demo")]), _c('text', {
    staticClass: ["next"],
    on: {
      "click": _vm.jumpAnimation
    }
  }, [_vm._v("animation模块")]), _c('text', {
    staticClass: ["next"],
    on: {
      "click": _vm.jumpClipboard
    }
  }, [_vm._v("clipboard模块")]), _c('text', {
    staticClass: ["next"],
    on: {
      "click": _vm.jumpDom
    }
  }, [_vm._v("dom模块")]), _c('text', {
    staticClass: ["next"],
    on: {
      "click": _vm.jumpModal
    }
  }, [_vm._v("modal模块")]), _c('text', {
    staticClass: ["next"],
    on: {
      "click": _vm.jumpPicker
    }
  }, [_vm._v("picker模块")]), _c('text', {
    staticClass: ["next"],
    on: {
      "click": _vm.jumpStream
    }
  }, [_vm._v("stream模块")]), _c('text', {
    staticClass: ["desc"]
  }, [_vm._v("\n      设备信息：" + _vm._s(_vm.configObj) + "\n    ")])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })

/******/ });