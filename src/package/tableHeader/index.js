import uiTableHeader from './index.vue'

// 为组件提供 install 安装方法，供按需引入
uiTableHeader.install = function(Vue) {
  Vue.component(uiTableHeader.name, uiTableHeader)
}

// 默认导出组件
export default uiTableHeader
