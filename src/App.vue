<template>
  <div id="app">

    <ui-tableHeader :tableData='tableData'></ui-tableHeader>
    <ui-button></ui-button>
  </div>
</template>

<script>

// import uiButton from './package/button/index'
// import uiTableHeader from './package/tableHeader/index'

export default {
  name: 'App',
  components: {

    // uiButton,
    // uiTableHeader
  },
  data () {
    return {
      tableData: {
        head: [
          {
            prop: 'date',
            label: '日期'
          },
          {
            label: '配送信息',
            children: [
              {
                prop: 'name',
                label: '姓名'
              },
              {
                label: '地址',
                children: [
                  {
                    prop: 'province',
                    label: '省份',
                  },
                  {
                    prop: 'city',
                    label: '市区',
                  },
                  {
                    prop: 'address',
                    label: '地址',
                  },
                  {
                    prop: 'postcode',
                    label: '邮编',
                  },
                ]
              },
            ]
          },
        ],
        data: [
        ],
      }
    }
  },
  created () {
    this.serList()

  },
  methods: {
    serList () {
      for (let i = 0; i < 10; i++) {
        this.tableData.data.push({
          date: '2023-03-31',
          name: '小王',
          province: '北京市',
          city: '海淀区',
          address: '联想总部西区',
          postcode: '100190',



        })
      }
    }

  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
