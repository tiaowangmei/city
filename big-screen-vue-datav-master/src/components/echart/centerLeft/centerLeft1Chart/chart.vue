<!--
 * @Author       : meiling.Wu
 * @Date         : 2021-10-19 14:38:50
 * @LastEditors  : meiling.Wu
 * @LastEditTime : 2021-11-14 22:51:34
 * @Description  : 特殊人远
 * @FilePath     : \big-screen-vue-datav-master\src\components\echart\centerLeft\centerLeft1Chart\chart.vue
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
       w:document.documentElement.clientWidth*0.6+'px',
      h:document.documentElement.clientHeight*0.6+'px',
      all:[]
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
          layoutSize: 400,
          color: [
            "#e7bcf3",
            "#37a2da",
            "#32c5e9",
            "#9fe6b8",
            "#ffdb5c",
            "#ff9f7f",
            "#fb7293",
            "#8378ea"
          ],
          tooltip: {
            trigger: "item",
             textStyle: { //数值样式
                                    color: '#fff',
                                    fontSize: 36
                                },
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          toolbox: {
            show: true
          },
          calculable: true,
          legend: {
            orient: "horizontal",
            icon: "circle",
            bottom: 0,
            x: "center",
            data: newData.d?.xData,
            textStyle: {
              color: "#fff"
            }
          },
          series: [
            {
              layoutSize :'300%',
              name: "人员统计",
              type: "pie",
              radius: [10, 50],
              roseType: "area",
              center: ["50%", "50%"],
              data: newData.d?.oData
            }
          ]
        }
      },
      immediate: true,
      deep: true
    }
  }
};
</script>

<style lang="scss" scoped>
</style>