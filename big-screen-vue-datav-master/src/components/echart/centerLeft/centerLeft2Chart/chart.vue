<template>
  <div style="width:100%;height:100%">
    <Echart
      id="centreLeft2Chart"
      ref="centreLeft2ChartRef"
      :options="options"
      height="100%"
      width="100%"
      @handleMapRandomSelect= 'handleMapRandomSelect'
      :isPic='isPic'
    >
    </Echart>
     <!-- <div id="centreLeft2Chart" class="chart" :style="{ height: h, width: w }" /> -->
  </div>
</template>

<script>
import Echart from '@/common/echart';
export default {
  data() {
    return {
      options: {},
      w:document.documentElement.clientWidth*1+'px',
      h:document.documentElement.clientHeight*1+'px',
      allData:[],
      orgBranch:[],
      city:{},
      isPic:'',
      dataList:[],
    };
  },
  components: {
    Echart,
  },
  props: {
    cdata: {
      type: Array,
      default: () => [],
    },
  },
  computed:{
     id(){
         return this.$store.state.initId
     },
     dCity(){
         return this.$store.state.orgBranch
     },
  },
  watch: {
    cdata: {
      handler() { },
      immediate: true,
      deep: true,
    },
    id :{
      handler(val) {
          return val
        },
      immediate: true,
      deep: true,
    },
     dCity :{
      handler(val) {
           this.getOption()
        //  this.getB()
          return val
        },
      immediate: true,
      deep: true,
    },
  },
  mounted(){
                let query=this.$route.query;
                 let corpId = query.corpId||'ding0b3219e0d629f0acf5bf40eda33b7ba0'
                 this.getData(corpId)
  },
  methods: {
     getOption(){
         this.orgBranch = this.dCity
         this.isPic=  this.dCity.filter(val=>{return val.unionCorpid == this.id})[0].unionOrgName
           this.city =  this.dCity.map(val=>{
           let normal ={}
           normal.areaColor = val.id<5?'#00DB00':val.id<20?'#00E3E3':val.id<30?'#FF2D2D':'#FFD306'
              return {
                  name:val.unionOrgName,
                  value:val.id,
                  id:val.unionCorpid,
                  flag:val.orgName|| '',
                  itemStyle:{
                       normal:normal
                  }

              }
          })
        this.options = {
           backgroundColor: 'transparent',
          showLegendSymbol: true,
          layoutCenter :['50%', '50%'],
           aspectScale: 2, //长宽比
           zoom: 12,
          layoutSize: '100%',
          tooltip: {
            trigger: 'item',
            textStyle: {
              fontSize: 10,
              lineHeight: 22,
            },
            "formatter": (p)=>{
               //  let dataCon = p.data,
                let  txtCon = `${p.data?.name}`
                  return txtCon
            }
          },
          visualMap: {
            min: 0,
            max: 100,
            show: false,
            seriesIndex: 0,
            text:['High','Low'],
            // 颜色
            realtime: false,
            calculable: true,
            inRange: {
                color: ['#00DB00', '#00E3E3','#FF2D2D','#FFD306']
            },
          },
          // 底部背景
          geo: {
            roam : true,//是否开启缩放和平移
            map : this.isPic,//地图名称
           label: {
            emphasis: {
                show: false
            }
        },
        itemStyle: {
            normal: {
                areaColor: 'transparent',
                borderColor: 'transparent'
            },
            emphasis: {
                areaColor: 'transparent',
                borderColor: 'transparent'
            }
        }
          },
          series: [
            {
            bevelSmoothness: 20,
            type: "map",
             componentType:'geo',
              mapType: this.isPic, // 自定义扩展图表类型
              top: '10%',
              left: '10%',
              itemStyle: {
                normal: {
                  areaColor: '#d00',
                  borderColor: 'rgba(0,242,252,.3)',
                  borderWidth:2,
                  shadowBlur: 1,
                  shadowColor: '#00f2fc',
                },
                emphasis: {
                  areaColor: '#4f7fff',
                  borderColor: 'rgba(0,242,252,.6)',
                  borderWidth: 2,
                  shadowBlur: 1,
                  shadowColor: '#00f2fc',
                },
              },
              label: {
                formatter: params => `${params.name}`,
                show: true,
                position: 'insideRight',
                textStyle: {
                  fontSize: 10,
                  color: '#efefef',
                },
                emphasis: {
                  textStyle: {
                    color: '#fff',
                  },
                },
              },
               data:this.city
            },
           
          ],
          
        };
    
     },
     getB(){
            let data = []
             this.dCity.forEach(val=>{
                let d = {
                    name:val.unionOrgName,
                    value:[val.lng,val.lat]
                }
                if(val.lng){
                    data.push(d)
                }
            })
            let src =  {
                        name:'',
                        type: 'effectScatter',
                        label: {
                        formatter: params => `${params.name}`,
                        show: true,
                        position: 'insideRight',
                        textStyle: {
                        fontSize: 10,
                        color: '#f4e925',
                        },
                        emphasis: {
                        textStyle: {
                            color: '#d00',
                            },
                        },
                            },
                            geoIndex:0,
                            data:data,
                            coordinateSystem: 'geo',
                            symbolSize: 15,
                            showEffectOn: 'render',
                            rippleEffect: {
                                brushType: 'stroke'
                            },
                            hoverAnimation: true,
                            animation:false,
                            itemStyle: {
                                normal: {
                                    color: '#f4e925',
                                    shadowBlur: 10,
                                    shadowColor: '#333'
                                }
                            },
                            zlevel: 6,
                            zoom :7
                        }
                        if(data.length > 0){
                            if(this.options.series.length > 1){
                                 this.options.series.splice(1,1,src)
                            }else{
                                this.options.series.push(src)
                            }
                        }
      },

    handleMapRandomSelect(params) {
      this.$nextTick(() => {
        try {
          const _self = this;
          setTimeout(() => {
            _self.reSelectMapRandomArea();
          }, 0);
          // 移入区域，清除定时器、取消之前选中并选中当前
            clearInterval(_self.intervalId);
            _self.preSelectMapIndex = params.dataIndex;
              _self.options.series[0].layoutCenter = ['50%', '50%'];
             _self.options.visualMap.type = 'piecewise'
             this.isPic = params.name
            _self.getData(params.name,1)
           //   _self.getB()
        } catch (error) {
          console.log(error)
        }
      });
    },

    getData(name,key){
        let id = ''
        if(key){
         id =  this.dCity.filter(val=>{return val.unionOrgName == name})[0].unionCorpid
        }else{
            id = name
        }
        this.$store.commit("setId1", id)
        this.axios.post('/ding//approveDetail/getInfo?corpId='+id, {}).then(res=>{
          this.allData = res.data.data
          let p={},d={},x={},m={},q={},hy={},online={},mall={}
          if(res.data.data.orgBranch.length == 1){
              let data = res.data.data.villageData
              let person = data.filter(val=>{return val.templateName == '特殊人群管理'})
              let zPerson = person.filter(val=>{return val.type == '重点人群'})
              let rPerson = person.filter(val=>{return val.type == '弱势群体'})
              let dangy  = data.filter(val=>{return val.templateName == '党员137'})
              let xfwm  = data.filter(val=>{return val.templateName == '乡风文明'})
              let qfqz  = data.filter(val=>{return val.templateName == '群防群治'})
              let ylh  = data.filter(val=>{return val.templateName == '党务村务民主协商监督月例会'})
              let yueYlh = ylh.filter(val=>{return val.type == '当月'})
               let nianYlh = ylh.filter(val=>{return val.type == '当年'})
                mall.type = 'pie'
                online.type = 'pie'
                d.xData = [];
                d.xDataAll =[];
                d.oData =[]
                d.xData = person.map(val=>{
                    return val.name
                })
                d.xDataAll =person.map(val=>{
                    return val.number
                })
                d.oData = person.map(val=>{
                    return {
                         name: val.name,
                         value:val.number
                    }
                })
                d.rPerson = rPerson.map(val=>{
                    return {
                         name: val.name,
                         value:val.number
                    }
                })
                 d.zPerson = zPerson.map(val=>{
                    return {
                         name: val.name,
                         value:val.number
                    }
                })
                m.xData = [];
                m.xDataAll =[];
                m.oData =[]
                m.type = 'bar'
                m.xData = dangy.map(val=>{
                    return val.name
                })
                 m.xDataAll =dangy.map(val=>{
                    return val.number
                })
                m.oData = dangy.map(val=>{
                    return {
                         name: val.name,
                         value:val.number
                    }
                })

                x.xData = [];
                x.xDataAll =[];
                x.oData =[]
                x.xData = xfwm.map(val=>{
                    return val.name
                })
                 x.xDataAll =xfwm.map(val=>{
                    return val.number
                })
                x.oData = xfwm.map(val=>{
                    return {
                         name: val.name,
                         value:val.number
                    }
                })


               q.xData = [];
               q.xDataAll =[];
                q.oData =[]
                q.xData = qfqz.map(val=>{
                    return val.name
                })
                q.xDataAll =qfqz.map(val=>{
                    return val.number
                })
                q.oData = qfqz.map(val=>{
                    return {
                         name: val.name,
                         value:val.number
                    }
                })

           

                hy.xData = [];
                hy.xDataAll =[];
                hy.oData =[]
                hy.type = 'line'
                hy.xData = ylh.map(val=>{
                    return val.name
                })
               hy.xDataAll =ylh.map(val=>{
                    return val.number
                })
                hy.oData = ylh.map(val=>{
                    return {
                         name: val.name,
                         value:val.number
                    }
                })
                
                hy.type = 'pie'
                hy.yueYlh = yueYlh.map(val=>{
                    return  {
                         name: val.name,
                         value:val.number
                    }
                })
                hy.nianYlh = nianYlh.map(val=>{
                    return  {
                         name: val.name,
                         value:val.number
                    }
                })
          }else{
               let data =  res.data.data?.template
                mall.type = undefined
                online.type = undefined
          data.forEach(val=>{
            if(val.name == '特殊人群管理'){
                d.xData = [];
                d.xDataAll =[];
                d.oData =[]
                if(val.list.length > 0){
                 val.list.forEach(val => {
                d.xData.push(val.orgName)
                d.xDataAll.push(val.stats)
                let o = {
                    value:val.stats,
                    name:val.orgName
                }
                    d.oData.push(o)
                });   
                }else{
                d.xData = [];
                d.xDataAll =[];
                d.oData =[]
                }
               
           }else if(val.name == '党员137'){
                m.xData = [];
                m.xDataAll =[];
                m.oData =[]
                val.list.forEach(val => {
                m.xData.push(val.orgName)
                m.xDataAll.push(val.stats)
                let o = {
                    value:val.stats,
                    name:val.orgName
                }
                    m.oData.push(o)
                });   
           }
             else if(val.name == '群防群治'){
                 q.xData = [];
                q.xDataAll =[];
                q.oData =[]
                val.list.forEach(val => {
                q.xData.push(val.orgName)
                q.xDataAll.push(val.stats)
                let o = {
                    value:val.stats,
                    name:val.orgName
                }
                    q.oData.push(o)
                });   
             }

             else if(val.name == '乡风文明'){
                 x.xData = [];
                x.xDataAll =[];
                x.oData =[]
                val.list.forEach(val => {
                x.xData.push(val.orgName)
                x.xDataAll.push(val.stats)
                let o = {
                    value:val.stats,
                    name:val.orgName
                }
                    x.oData.push(o)
                });   
             }
             else if(val.name == '党务村务民主协商监督月例会'){
                 hy.xData = [];
                hy.xDataAll =[];
                hy.oData =[]
                val.list.forEach(val => {
                hy.xData.push(val.orgName)
                hy.xDataAll.push(val.stats)
                let o = {
                    value:val.stats,
                    name:val.orgName
                }
                    hy.oData.push(o)
                });   
             }
          })
          }
           let datathree =  res.data.data?.template
              let ndwb  = datathree.filter(val=>{return val.name == '你钉我办'})[0]
              let hnds  = datathree.filter(val=>{return val.name == '惠农电商'})[0]
              let tangj  = datathree.filter(val=>{return val.name == '乡村调解反馈'})[0]
                 mall.xData = [];
                mall.xDataAll =[];
                mall.oData =[]
                hnds.list.forEach(val => {
                mall.xData.push(val.orgName)
                mall.xDataAll.push(val.stats)
                let o = {
                    value:val.stats,
                    name:val.orgName
                }
                    mall.oData.push(o)
                });

                 p.xData = [];
                p.xDataAll =[];
                p.oData =[]
                ndwb.list.forEach(val => {
                p.xData.push(val.orgName)
                p.xDataAll.push(val.stats)
                let o = {
                    value:val.stats,
                    name:val.orgName
                }
                    p.oData.push(o)
                });   
             
                online.xData = [];
                online.xDataAll =[];
                online.oData =[]
                tangj.list.forEach(val => {
                online.xData.push(val.orgName)
                online.xDataAll.push(val.stats)
                let o = {
                    value:val.stats,
                    name:val.orgName
                }
                    online.oData.push(o)
                });   

            let dataA ={
                d:d,
                p:p,
                q:q,
                online:online,
                mall:mall,
                x:x,
                m:m,
                hy:hy,
                allData:this.allData.orgBranch
            }
            console.log("fff",this.allData.orgBranch )
          this.$store.commit("setData", dataA)  
        })
    }
  },
};
</script>
