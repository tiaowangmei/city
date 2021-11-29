<!--
 * @Author       : meiling.Wu
 * @Date         : 2021-10-19 14:38:50
 * @LastEditors  : meiling.Wu
 * @LastEditTime : 2021-11-14 21:11:38
 * @Description  : 
 * @FilePath     : \big-screen-vue-datav-master\src\components\echart\person-item\chart.vue
-->
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
      options: {},
       w:document.documentElement.clientWidth+'px',
      h:document.documentElement.clientHeight+'px'
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
      handler (val) {
        let dataAxis = val.hy?.xData
        let data = val.hy?.xDataAll;
        this.options = {
            barWidth:30,
            barGap:1,
             color:['#f79646'],
        title: {
            text: '',
            subtext: ''
        },
        tooltip: {
                trigger: 'axis',
                //鼠标移入有阴影
                axisPointer:{
                    type:'shadow'
                },
                textStyle: { //数值样式
                                    color: '#fff',
                                    fontSize: 36
                                }
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
            
            emphasis: {
                itemStyle: {
                }
            },
            data: data,
             itemStyle: {//柱状图上方显示数值
                        normal: {
                            label: {
                                show: true, //开启显示
                                position: 'center', //在上方显示
                                textStyle: { //数值样式
                                    color: '#fff',
                                    fontSize: 36
                                }
                            }
                        }
                    },
            }
        ]
        };
      },
      immediate: true,
      deep: true
    }
  }
};
</script>

<style lang="scss" scoped>
</style>