<template>
  <div>
    <Echart
      :options="options"
      id="centreLeft1Chart"
      height="290px"
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
  props: {
    cdata: {
      type: Object,
      default: () => ({})
    },
  },
  watch: {
    cdata: {
      handler (newData) {
        //   let name = []
        //   let radarDataAvg=[]
        //    this.axios.post('/ding//approveDetail/getUserDataInfo?corpId=ding0b3219e0d629f0acf5bf40eda33b7ba0', {corpId: 'ding0b3219e0d629f0acf5bf40eda33b7ba0'}).then(res =>{
        //        this.resData = res.data.data.OrgStats
        //        this.resData.forEach(element => {
        //            name.push(element.kpiName)
        //            radarDataAvg.push(element.stats)
        //        });
            //    console.log("0000",radarDataAvg)
            this.options = {
  title: {
    text: 'Stacked Line'
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['1月', '2月', '3月', '4月', '5月']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['周1', '周2', '周3', '周4', '周5', '周6', '周日']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: 'Email',
      type: 'line',
      stack: 'Total',
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: 'Union Ads',
      type: 'line',
      stack: 'Total',
      data: [220, 182, 191, 234, 290, 330, 310]
    },
    {
      name: 'Video Ads',
      type: 'line',
      stack: 'Total',
      data: [150, 232, 201, 154, 190, 330, 410]
    },
    {
      name: 'Direct',
      type: 'line',
      stack: 'Total',
      data: [320, 332, 301, 334, 390, 330, 320]
    },
    {
      name: 'Search Engine',
      type: 'line',
      stack: 'Total',
      data: [820, 932, 901, 934, 1290, 1330, 1320]
    }
  ]
};
               this.options1= {
                        title: {
                            text: "",
                            textStyle: {
                            color: "#D3D6DD",
                            fontSize: 24,
                            fontWeight: "normal"
                            },
                            subtext: newData.year + "/" + newData.weekCategory[6],
                            subtextStyle: {
                            color: "#fff",
                            fontSize: 16
                            },
                            top: 50,
                            left: 80
                        },
                        legend: {
                            top: 120,
                            left: 80,
                            orient: "vertical",
                            itemGap: 15,
                            itemWidth: 12,
                            itemHeight: 12,
                            data: ["企业指标", "指标完成率"],
                            textStyle: {
                            color: "#fff",
                            fontSize: 14
                            }
                        },
                        tooltip: {
                            trigger: "item"
                        },
                        radar: {
                            center: ["68%", "27%"],
                            radius: "40%",
                            name: {
                            color: "#fff"
                            },
                            splitNumber: 8,
                            axisLine: {
                            lineStyle: {
                                color: this.colorList.linearYtoG,
                                opacity: 0.6
                            }
                            },
                            splitLine: {
                            lineStyle: {
                                color: this.colorList.linearYtoG,
                                opacity: 0.6
                            }
                            },
                            splitArea: {
                            areaStyle: {
                                color: "#fff",
                                opacity: 0.1,
                                shadowBlur: 25,
                                shadowColor: "#000",
                                shadowOffsetX: 0,
                                shadowOffsetY: 5
                            }
                            },
                           // indicator: name
                        },
                        grid: {
                            left: 90,
                            right: 80,
                            bottom: 40,
                            top: "60%"
                        },
                        xAxis: {
                            type: "category",
                            position: "bottom",
                            axisLine: true,
                            axisLabel: {
                            color: "rgba(255,255,255,.8)",
                            fontSize: 12
                            },
                            data: newData.category
                        },
                        // 下方Y轴
                        yAxis: {
                            name: "企业指标",
                            // nameLocation: "end",
                            // nameGap: 24,
                            nameTextStyle: {
                            color: "rgba(255,255,255,.5)",
                            fontSize: 14
                            },

                            axisLine: {
                            lineStyle: {
                                opacity: 0
                            }
                            },
                            splitLine: {
                            show: true,
                            lineStyle: {
                                color: "#fff",
                                opacity: 0.1
                            }
                            },
                            axisLabel: {
                            color: "rgba(255,255,255,.8)",
                            fontSize: 12
                            }
                        },
                        series: [
                            {
                            name: "",
                            type: "radar",
                            symbolSize: 0,
                            data: [
                                {
                                value: newData.lineData,
                                name: "",
                                itemStyle: {
                                    normal: {
                                    color: "#f8d351"
                                    }
                                },
                                lineStyle: {
                                    normal: {
                                    opacity: 0
                                    }
                                },
                                areaStyle: {
                                    normal: {
                                    color: "#f8d351",
                                    shadowBlur: 25,
                                    shadowColor: "rgba(248,211,81,.3)",
                                    shadowOffsetX: 0,
                                    shadowOffsetY: -10,
                                    opacity: 1
                                    }
                                }
                                }
                            ]
                            },
                            {
                            name: "",
                            type: "line",
                            smooth: true,
                            symbol: "emptyCircle",
                            symbolSize: 8,
                            itemStyle: {
                                normal: {
                                color: "#fff"
                                }
                            },
                            lineStyle: {
                                normal: {
                                color: this.colorList.linearBtoG,
                                width: 3
                                }
                            },
                            areaStyle: {
                                normal: {
                                color: this.colorList.areaBtoG
                                }
                            },
                            data: newData.lineData,
                            lineSmooth: true,
                            markLine: {
                                silent: true,
                                data: [
                                {
                                    type: "average",
                                    name: "平均值"
                                }
                                ],
                                precision: 0,
                                label: {
                                normal: {
                                    formatter: "平均值: \n {c}"
                                }
                                },
                                lineStyle: {
                                normal: {
                                    color: "rgba(248,211,81,.7)"
                                }
                                }
                            },
                            tooltip: {
                                position: "top",
                                formatter: "{c} m",
                                backgroundColor: "rgba(28,152,232,.2)",
                                padding: 6
                            }
                            },
                            {
                            name: "占位背景",
                            type: "bar",
                            itemStyle: {
                                normal: {
                                show: true,
                                color: "#000",
                                opacity: 0
                                }
                            },
                            silent: true,
                            barWidth: "50%",
                            data: newData.barData,
                            animation: false
                            }
                        ]
                        }
         //  })
       
      },
      immediate: true,
      deep: true
    }
  }
};
</script>