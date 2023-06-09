(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ui-test"] = factory();
	else
		root["ui-test"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ entry_lib; }
});

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/package/button/index.vue?vue&type=template&id=7e2cc994&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm._m(0);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('button', [_vm._v("我是测试按钮2")])]);
}];

;// CONCATENATED MODULE: ./src/package/button/index.vue?vue&type=template&id=7e2cc994&scoped=true&

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/package/button/index.vue?vue&type=script&lang=js&
/* harmony default export */ var buttonvue_type_script_lang_js_ = ({
  name: "uiButton" //组件名
});
;// CONCATENATED MODULE: ./src/package/button/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var package_buttonvue_type_script_lang_js_ = (buttonvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-54.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-54.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-54.use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/package/button/index.vue?vue&type=style&index=0&id=7e2cc994&prod&scoped=true&lang=css&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/package/button/index.vue?vue&type=style&index=0&id=7e2cc994&prod&scoped=true&lang=css&

;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

;// CONCATENATED MODULE: ./src/package/button/index.vue



;


/* normalize component */

var component = normalizeComponent(
  package_buttonvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "7e2cc994",
  null
  
)

/* harmony default export */ var package_button = (component.exports);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/package/tableHeader/index.vue?vue&type=template&id=60b8dd7c&
var tableHeadervue_type_template_id_60b8dd7c_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('el-table', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "data": _vm.tableData.data
    },
    scopedSlots: _vm._u([{
      key: "empty",
      fn: function () {
        return [_vm._v("无数据展示")];
      },
      proxy: true
    }])
  }, [_vm._l(_vm.tableData.head, function (item, key) {
    return _c('tableItem', {
      key: key,
      attrs: {
        "item": item
      }
    });
  })], 2)], 1);
};
var tableHeadervue_type_template_id_60b8dd7c_staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/package/tableHeader/table-item.vue?vue&type=template&id=42a131f0&scoped=true&
var table_itemvue_type_template_id_42a131f0_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return !_vm.item.children ? _c('el-table-column', {
    attrs: {
      "prop": _vm.item.prop,
      "label": _vm.item.label
    }
  }) : _c('el-table-column', {
    attrs: {
      "label": _vm.item.label
    }
  }, _vm._l(_vm.item.children, function (itemChild, indexChild) {
    return _c('table-item', {
      key: indexChild,
      attrs: {
        "item": itemChild
      }
    });
  }), 1);
};
var table_itemvue_type_template_id_42a131f0_scoped_true_staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/package/tableHeader/table-item.vue?vue&type=script&lang=js&
/* harmony default export */ var table_itemvue_type_script_lang_js_ = ({
  name: "table-item",
  props: {
    item: {
      type: [Object],
      required: true
    }
  }
});
;// CONCATENATED MODULE: ./src/package/tableHeader/table-item.vue?vue&type=script&lang=js&
 /* harmony default export */ var tableHeader_table_itemvue_type_script_lang_js_ = (table_itemvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/package/tableHeader/table-item.vue





/* normalize component */
;
var table_item_component = normalizeComponent(
  tableHeader_table_itemvue_type_script_lang_js_,
  table_itemvue_type_template_id_42a131f0_scoped_true_render,
  table_itemvue_type_template_id_42a131f0_scoped_true_staticRenderFns,
  false,
  null,
  "42a131f0",
  null
  
)

/* harmony default export */ var table_item = (table_item_component.exports);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/package/tableHeader/index.vue?vue&type=script&lang=js&

/* harmony default export */ var tableHeadervue_type_script_lang_js_ = ({
  name: "uiTableHeader",
  components: {
    tableItem: table_item
  },
  props: {
    tableData: {
      type: [Object],
      required: true
    }
  }
});
;// CONCATENATED MODULE: ./src/package/tableHeader/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var package_tableHeadervue_type_script_lang_js_ = (tableHeadervue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/package/tableHeader/index.vue





/* normalize component */
;
var tableHeader_component = normalizeComponent(
  package_tableHeadervue_type_script_lang_js_,
  tableHeadervue_type_template_id_60b8dd7c_render,
  tableHeadervue_type_template_id_60b8dd7c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var tableHeader = (tableHeader_component.exports);
;// CONCATENATED MODULE: ./src/package/index.js
//package/index.js
 // 引入封装好的组件
 // 引入封装好的组件

const coms = [package_button, tableHeader]; // 将来如果有其它组件,都可以写到这个数组里

// 批量组件注册
const install = function (Vue) {
  coms.forEach(com => {
    Vue.component(com.name, com);
  });
};
/* harmony default export */ var src_package = (install); // 这个方法以后再使用的时候可以被use调用
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (src_package);


/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=ui-test.umd.js.map