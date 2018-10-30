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
/******/ 	return __webpack_require__(__webpack_require__.s = 19);
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

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _conponentList = __webpack_require__(20);

var _conponentList2 = _interopRequireDefault(_conponentList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_conponentList2.default.el = '#root';
new Vue(_conponentList2.default);

/***/ }),

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(21)
)

/* script */
__vue_exports__ = __webpack_require__(22)

/* template */
var __vue_template__ = __webpack_require__(23)
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
__vue_options__.__file = "/Users/wangzhanbiao/Downloads/weex/WeexTest/WeexTestDemo/src/conponent-list.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-30160666"
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

/***/ 21:
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
  "list": {
    "width": "800",
    "marginLeft": 0,
    "marginRight": 0,
    "marginTop": 0,
    "marginBottom": 0
  },
  "header": {
    "width": "750",
    "paddingTop": "25",
    "paddingRight": "25",
    "paddingBottom": "25",
    "paddingLeft": "25",
    "fontSize": "40",
    "textAlign": "center",
    "color": "#41B883",
    "backgroundColor": "rgb(162,217,192)"
  },
  "panel": {
    "width": "600",
    "height": "300",
    "marginLeft": "75",
    "marginTop": "35",
    "marginBottom": "35",
    "flexDirection": "column",
    "justifyContent": "center",
    "borderWidth": "2",
    "borderStyle": "solid",
    "borderColor": "rgb(162,217,192)",
    "backgroundColor": "rgba(162,217,192,0.2)"
  },
  "text": {
    "fontSize": "88",
    "textAlign": "center",
    "color": "#41B883"
  },
  "next": {
    "marginTop": 30,
    "marginBottom": 30,
    "paddingTop": "20",
    "paddingRight": "20",
    "paddingBottom": "20",
    "paddingLeft": "20",
    "backgroundColor": "#999999"
  }
}

/***/ }),

/***/ 22:
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
var storage = weex.requireModule('storage');
exports.default = {
  data: function data() {
    return {
      url: '',
      target: 'World',
      configObj: '',
      params: '',
      lists: ['金秋核桃', '猕猴桃', '橘子', '冰糖梨', '巨峰葡萄', '三红蜜柚', '水蜜桃', '泰国椰青', '奇异果', '香蕉']
    };
  },

  methods: {
    back: function back(event) {
      //modal.toast({ message: weex.config.bundleUrl })
      navigator.pop();
    },
    jumpDetail: function jumpDetail(src) {
      modal.toast({ message: '点击了：' + src, duration: 1.0 });
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

/***/ 23:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('text', {
    staticClass: ["title"]
  }, [_vm._v("conponent-list page")]), _c('text', {
    staticClass: ["desc"]
  }, [_vm._v("url=" + _vm._s(_vm.url))]), _c('text', {
    staticClass: ["next"],
    on: {
      "click": _vm.back
    }
  }, [_vm._v("返回上一页")]), _c('text', {
    staticClass: ["desc"]
  }, [_vm._v("<list>和<cell>标签示例")]), _c('list', {
    staticClass: ["list"]
  }, [_vm._m(0), _vm._l((_vm.lists), function(num, index) {
    return _c('cell', {
      key: index,
      staticClass: ["cell"],
      appendAsTree: true,
      attrs: {
        "append": "tree"
      }
    }, [_c('div', {
      staticClass: ["panel"]
    }, [_c('text', {
      staticClass: ["text"],
      on: {
        "click": function($event) {
          _vm.jumpDetail(num)
        }
      }
    }, [_vm._v(_vm._s(num))])])])
  })], 2)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('header', {
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('text', {
    staticClass: ["header"]
  }, [_vm._v("i am header")])])
}]}
module.exports.render._withStripped = true

/***/ })

/******/ });