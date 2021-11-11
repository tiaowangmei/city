<!--
 * @Author       : meiling.Wu
 * @Date         : 2021-10-19 14:38:50
 * @LastEditors  : meiling.Wu
 * @LastEditTime : 2021-11-11 00:44:20
 * @Description  : 
 * @FilePath     : \big-screen-vue-datav-master\src\components\echart\bottom\bottomLeftChart\chart.vue
-->
<template>
  <div>
    <!-- 年度开工率 -->
    <Echart
      :options="options"
      id="bottomLeftChart"
      height="200px"
      width="100%"
    ></Echart>
  </div>
</template>

<script>
import Echart from '@/common/echart'
export default {
  data () {
    return {
      options: {},
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
        // prettier-ignore
//let dataAxis = ['点', '击', '柱', '子', '或', '者', '两', '指', '在', '触', '屏', '上', '滑', '动', '能', '够', '自', '动', '缩', '放'];
// prettier-ignore
let dataAxis = val.category
let data = [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133, 334, 198, 123, 125, 220];
let yMax = 500;
let dataShadow = [];
for (let i = 0; i < data.length; i++) {
  dataShadow.push(yMax);
}
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
// Enable data zoom when user click bar.
// const zoomSize = 6;
// myChart.on('click', function (params) {
//   console.log(dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)]);
//   myChart.dispatchAction({
//     type: 'dataZoom',
//     startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
//     endValue:
//       dataAxis[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)]
//   });
// });
        this.options1 = {
          title: {
            text: "各项指标完成数",
          },
           xAxis: {
                name: '指标',
                data: val.category,
                type:"category",
                axisLabel:{
                    interval: 5,
                   // rotate: '45',
                triggerEvent: true,
                },
            },
            yAxis: {
                name: '完成数',
                 type:'value',
                 interval:2,
            },
          series: [
            {
              type: 'line',
              radius: '70%',
              roseType: 'angle',
              data:val.rateData,
               insideLabel: {
                    show: true
                },
                 itemStyle:{
                normal:{
                    shadowBlur: 200,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },
             label: {
                show: true,
                // 高亮时标签的文字
                formatter: function(val){
                  return val.name
                }
            }
            },
           
          ]
        }
    //  })
         
      },
      immediate: true,
      deep: true
    },
  },
}
</script>