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
         w:document.documentElement.clientWidth*0.7+'px',
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
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      crossStyle: {
        color: '#999'
      }
    },
     textStyle: { //数值样式
                                    color: '#fff',
                                    fontSize: 36
                                }
  },
  legend: {
    data: newData.x?.xData
  },
  xAxis: [
    {
      type: 'category',
      data: newData.x?.xData,
      axisPointer: {
        type: 'shadow'
      }
    }
  ],
  yAxis: [
    {
      type: 'value',
      name: '完成数',
      min: 0,
      max: 250,
      interval: 50,
      axisLabel: {
        formatter: '{value} '
      }
    },
    // {
    //   type: 'value',
    //   name: '完成数',
    //   min: 0,
    //   max: 25,
    //   interval: 5,
    //   axisLabel: {
    //     formatter: '{value}'
    //   }
    // }
  ],
  series: [
    {
      name: '乡风文明',
      type: 'bar',
      data:newData.x?.xDataAll
    },
    // {
    //   name: '超额完成',
    //   type: 'bar',
    //   data: [
    //     2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3
    //   ]
    // },
    // {
    //   name: '未达标',
    //   type: 'line',
    //   yAxisIndex: 1,
    //   data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
    // }
  ]
};
     
       
      },
      immediate: true,
      deep: true
    }
  }
};
</script>