<template>
  <div>
    <Echart
      :options="options"
      id="centreLeft1Chart"
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
          this.options = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      crossStyle: {
        color: '#999'
      }
    }
  },
  toolbox: {
    feature: {
      dataView: { show: true, readOnly: false },
      magicType: { show: true, type: ['line', 'bar'] },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  legend: {
    data: newData.category
  },
  xAxis: [
    {
      type: 'category',
      data: newData.category,
      axisPointer: {
        type: 'shadow'
      }
    }
  ],
  yAxis: [
    {
      type: 'value',
      name: '人数',
      min: 0,
      max: 250,
      interval: 50,
      axisLabel: {
        formatter: '{value} '
      }
    },
    {
      type: 'value',
      name: '达标率',
      min: 0,
      max: 25,
      interval: 5,
      axisLabel: {
        formatter: '{value}'
      }
    }
  ],
  series: [
    {
      name: '已达标',
      type: 'bar',
      data: [
        2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3
      ]
    },
    {
      name: '超额完成',
      type: 'bar',
      data: [
        2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3
      ]
    },
    {
      name: '未达标',
      type: 'line',
      yAxisIndex: 1,
      data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
    }
  ]
};
        //   let name = []
        //   let radarDataAvg=[]
        //    this.axios.post('/ding//approveDetail/getUserDataInfo?corpId=ding0b3219e0d629f0acf5bf40eda33b7ba0', {corpId: 'ding0b3219e0d629f0acf5bf40eda33b7ba0'}).then(res =>{
        //        this.resData = res.data.data.OrgStats
        //        this.resData.forEach(element => {
        //            name.push(element.kpiName)
        //            radarDataAvg.push(element.stats)
        //        });
            //    console.log("0000",radarDataAvg)
               this.options1 = {
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