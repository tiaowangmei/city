<!--
 * @Author       : meiling.Wu
 * @Date         : 2021-10-19 14:38:50
 * @LastEditors  : meiling.Wu
 * @LastEditTime : 2021-11-13 18:02:17
 * @Description  : 
 * @FilePath     : \big-screen-vue-datav-master\src\components\echart\deal-with-item\chart.vue
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
       w:document.documentElement.clientWidth*0.2-30+'px',
      h:document.documentElement.clientHeight*0.8+'px'
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
          let dataAxis = val.online?.xData
        let data = val.online?.xDataAll;
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
            },
            emphasis: {
                itemStyle: {
                }
            },
            data: data
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