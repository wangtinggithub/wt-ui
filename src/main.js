import Vue from 'vue'
import App from './App.vue'
import { Table, TableColumn} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';




Vue.config.productionTip = false
Vue.use(Table)
Vue.use(TableColumn)
import uiTest from "wangting22-ui-test"

Vue.use(uiTest);
// import uiButton from '@/package/button'
// Vue.use(uiButton);
// import uiTableHeader from '@/package/tableHeader'
// Vue.use(uiTableHeader)
// import { uiButton, uiTableHeader } from '@/package/index';
// Vue.use(uiButton);
// Vue.use(uiTableHeader)
new Vue({
  render: h => h(App),
}).$mount('#app')
