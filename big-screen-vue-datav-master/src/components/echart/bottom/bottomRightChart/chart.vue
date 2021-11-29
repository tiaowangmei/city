<template>
  <div style="width:100%;height:100%">
    <Echart
      :options="options"
      id="centreLeft1Chart"
      :height="h"
      :width="w"
    ></Echart>
  </div>
</template>

<script>
import Echart from '@/common/echart'
export default {
  data () {
    return {
      w:document.documentElement.clientWidth*0.6+'px',
      h:document.documentElement.clientHeight*0.6+'px',
      options: {},
      // 定义颜色
      colorList: {
        linearYtoG: {
          type: "linear",
          x: 0,
          y: 0,
          x2: 1,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: "#f5b44d"
            },
            {
              offset: 1,
              color: "#28f8de"
            }
          ]
        },
        linearGtoB: {
          type: "linear",
          x: 0,
          y: 0,
          x2: 1,
          y2: 0,
          colorStops: [
            {
              offset: 0,
              color: "#43dfa2"
            },
            {
              offset: 1,
              color: "#28f8de"
            }
          ]
        },
        linearBtoG: {
          type: "linear",
          x: 0,
          y: 0,
          x2: 1,
          y2: 0,
          colorStops: [
            {
              offset: 0,
              color: "#1c98e8"
            },
            {
              offset: 1,
              color: "#28f8de"
            }
          ]
        },
        areaBtoG: {
          type: "linear",
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: "rgba(35,184,210,.2)"
            },
            {
              offset: 1,
              color: "rgba(35,184,210,0)"
            }
          ]
        },
        resData:[]
      }
    };
  },
  components: {
    Echart,
  },
computed:{
    cdata(){
        return this.$store.state.allData
    }
  },
  watch: {
    cdata: {
      handler (newData) {
            this.options = {
                title: {
                    text: ''
                },
                
                tooltip: {
                    trigger: 'axis',
                     textStyle: { //数值样式
                                    color: '#fff',
                                    fontSize: 36
                                }
                },
                legend: {
                    data: newData.q?.xData
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: newData.q?.xData
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                    name: '',
                    type: 'line',
                    stack: 'Total',
                    data: newData.q?.xDataAll
                    },
                    
                ]
          };
      },
      immediate: true,
      deep: true
    }
  }
};
</script>