import Vue from 'vue'
import App from './App.vue'
import { Table, TableColumn} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';




Vue.config.productionTip = false
Vue.use(Table)
Vue.use(TableColumn)
import uiTest from "wangting22-ui-test";

Vue.use(uiTest);
new Vue({
  render: h => h(App),
}).$mount('#app')
