<!--
 * @Author       : meiling.Wu
 * @Date         : 2021-10-19 14:38:50
 * @LastEditors  : meiling.Wu
 * @LastEditTime : 2021-11-17 20:11:55
 * @Description  : 
 * @FilePath     : \big-screen-vue-datav-master\src\components\echart\bottom\bottomLeftChart\chart.vue
-->
<template>
  <div>
    <!-- 年度开工率 -->
    <Echart
      :options="options"
      id="bottomLeftChart"
      :height="h"
      :width="w"
    ></Echart>
  </div>
</template>

<script>
import Echart from '@/common/echart'
import { formatTime } from '../utils/index.js'
export default {
  data () {
    return {
      options: {},
       w:document.documentElement.clientWidth-30+'px',
      h:document.documentElement.clientHeight*0.7+'px',
      OrgStats:[],
           xAxis:[],
          yAxis:[]
    };
  },
  components: {
    Echart,
  },
   mounted () {
     
      },
 
   computed:{
    cdata(){
        return this.$store.state.allData
    }
  },
  watch: {
    cdata: {
      handler (val) {
let dataAxis = val.m?.xData
let data = val.m?.xDataAll;
this.options = {
  title: {
    text: '',
    subtext: ''
  },
  xAxis: {
    data: dataAxis,
    axisLabel: {
      inside: true,
      color: '#fff'
    },
    axisTick: {
      show: false
    },
    axisLine: {
      show: false
    },
    z: 10
  },
  yAxis: {
    axisLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      color: '#999'
    }
  },
  dataZoom: [
    {
      type: 'inside'
    }
  ],
  series: [
    {
      type: 'bar',
      showBackground: true,
      itemStyle: {
        // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        //   { offset: 0, color: '#83bff6' },
        //   { offset: 0.5, color: '#188df0' },
        //   { offset: 1, color: '#188df0' }
        // ])
      },
      emphasis: {
        itemStyle: {
        //   color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        //     { offset: 0, color: '#2378f7' },
        //     { offset: 0.7, color: '#2378f7' },
        //     { offset: 1, color: '#83bff6' }
        //   ])
        }
      },
      data: data
    }
  ]
};

         
      },
      immediate: true,
      deep: true
    },
  },
}
</script>