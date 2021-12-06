<!--
 * @Author       : meiling.Wu
 * @Date         : 2021-10-19 14:38:50
 * @LastEditors  : meiling.Wu
 * @LastEditTime : 2021-11-29 19:50:03
 * @Description  : 
 * @FilePath     : \big-screen-vue-datav-master\src\common\echartT\index.vue
-->
<template>
  <div :id="id" :class="className" ref="chart" style="width:100%;height:100%" />
</template>

<script>

export default {
  name: 'echart',
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    id: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '2.5rem'
    },
    options: {
      type: Object,
      default: ()=>({})
    },
    isPic:{
      type: String,
      default: '零陵区'
    },
    subId:{
      type: String,
      default: ''
    },
  },
  data () {
    return {
      chart: null,
      geoCoordMap:{},
    }
  },
  watch: {
    options: {
      handler (options) {
           this.chart?.setOption(options, true)
      },
      deep: true
    },
  },
  mounted () {
           this.chart = this.$echarts.init(this.$el, 'tdTheme')
           this.chart.setOption(this.options, true)
  },
  methods: {
 
    
  }
}
</script>

<style>
</style>
