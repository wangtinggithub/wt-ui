//package/index.js
import uiButton from "./button/index.vue"; // 引入封装好的组件
import uiTableHeader from "./tableHeader/index.vue"; // 引入封装好的组件

const coms = [uiButton,uiTableHeader]; // 将来如果有其它组件,都可以写到这个数组里

// 批量组件注册
const install = function (Vue) {
  coms.forEach((com) => {
    Vue.component(com.name, com);
  });
};

export default install; // 这个方法以后再使用的时候可以被use调用