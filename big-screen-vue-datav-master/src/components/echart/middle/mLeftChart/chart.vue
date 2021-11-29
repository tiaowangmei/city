<!--
 * @Author       : meiling.Wu
 * @Date         : 2021-10-19 14:38:50
 * @LastEditors  : meiling.Wu
 * @LastEditTime : 2021-11-14 21:15:11
 * @Description  : 
 * @FilePath     : \big-screen-vue-datav-master\src\components\echart\middle\mLeftChart\chart.vue
-->
<template>
  <div>
    <!-- 年度开工率 -->
    <Echart
      :options="options"
      id="mLeftChart"
      height="270px"
      width="100%"
    ></Echart>
  </div>
</template>

<script>
import Echart from '@/common/echart'
export default {
  data () {
    return {
      options: {
      
      },
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
 
  props: {
    cdata: {
      type: Object,
      default: () => ({})
    },
  },
  watch: {
    cdata: {
      handler (val) {
           console.log("vvv",val)
           this.options = {
  title: {
    text: ''
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985'
      }
    },
     textStyle: { //数值样式
                                    color: '#fff',
                                    fontSize: 36
                                }
  },
  legend: {
    data:val.category
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      data: ['周1', '周2', '周3', '周4', '周5', '周6', '周日']
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: 'Email',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: 'Union Ads',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [220, 182, 191, 234, 290, 330, 310]
    },
    {
      name: 'Video Ads',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [150, 232, 201, 154, 190, 330, 410]
    },
    {
      name: 'Direct',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [320, 332, 301, 334, 390, 330, 320]
    },
    {
      name: 'Search Engine',
      type: 'line',
      stack: 'Total',
      label: {
        show: true,
        position: 'top'
      },
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [820, 932, 901, 934, 1290, 1330, 1320]
    }
  ]
};
           
          //  this.xAxis = ["零陵区", "七里店街道", "菱角塘镇", "珠山镇", "南津渡街道", "石山脚街道"]
        // this.axios.post('/ding/approveDetail/getInfo?corpId=ding0b3219e0d629f0acf5bf40eda33b7ba0', {corpId: 'ding0b3219e0d629f0acf5bf40eda33b7ba0'}).then(res =>{
        //  this.xAxis = []
        //   this.yAxis = []
         
        //  this.OrgStats = res.data.data.OrgStats.map(val=>{
        //       let da={}
        //       da.name = val.name;
        //       da.value = val.stats
        //       this.xAxis.push(val.name)
               
        //        this.yAxis.push(+val.stats)
        //       return da
        //   })
        //    console.log("newData.this.OrgStats",this.xAxis,this.yAxis)
        this.options1 ={
            series: [
          {
            type: 'pie',
            data: [
              { name: '监控系统', value: 93, radius: ['30%', '33%'] },
              { name: '收费系统', value: 65, radius: ['32%', '35%'] },
              { name: '通信系统', value: 32, radius: ['31%', '37%'] },
              { name: '供配电系统', value: 44, radius: ['31%', '32%'] },
              { name: '其它', value: 52, radius: ['32%', '35%'] }
            ],
            outsideLabel: {
              labelLineEndLength: 20,
              formatter: '{percent}%\n{name}',
              style: {
                fill: '#fff'
              }
            }
          },
          {
            name: 'decoration ring',
            type: 'pie',
            data: [
              { value: 10, radius: ['50%', '53%'] }
            ],
            outsideLabel: {
              show: false
            },
            pieStyle: {
              fill: 'rgba(255, 255, 255, 0.2)'
            }
          },
          {
            name: 'decoration ring',
            type: 'pie',
            data: [
              { value: 10, radius: ['45%', '46%'] }
            ],
            outsideLabel: {
              show: false
            },
            pieStyle: {
              fill: 'rgba(255, 255, 255, 0.2)'
            }
          }
        ],
        color: ['#00c0ff', '#3de7c9', '#fff', '#00c0ff', '#3de7c9', '#fff']
      
        }
    //  })
         
      },
      immediate: true,
      deep: true
    },
  },
}
</script>